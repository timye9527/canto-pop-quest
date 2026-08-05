// 指标计算与爆款评分。
//
// 核心判断：绝对播放量会骗人。250w 粉的号随手一条 10w 播放不算爆款，
// 5w 粉的号跑出 5w 播放才是真的跑出来了。所以除了三条硬门槛，
// 还要算「爆款系数」= 本片播放 / 该频道近期播放中位数，这才是可学的信号。

import { tagTopics, tagHooks } from './taxonomy.mjs';

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

/** ISO 8601 时长（PT1H2M3S）转秒。 */
export function parseDuration(iso) {
  if (!iso) return 0;
  const m = /^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?$/.exec(iso);
  if (!m) return 0;
  const [, d, h, min, s] = m;
  return (+d || 0) * 86400 + (+h || 0) * 3600 + (+min || 0) * 60 + Math.round(+s || 0);
}

export const FORMATS = [
  { id: 'shorts', name: 'Shorts 竖屏', max: 60, brief: '<1 分钟。吃推荐流，涨粉快但转化弱，适合做钩子引流到长片。' },
  { id: 'quick', name: '快评短片', max: 480, brief: '1–8 分钟。事件驱动的主力形态，当天发当天有量。' },
  { id: 'standard', name: '常规深度', max: 1200, brief: '8–20 分钟。频道主线，完播率决定推荐量，开头 30 秒最关键。' },
  { id: 'longform', name: '访谈/长节目', max: 3600, brief: '20–60 分钟。涨粉与粘性最强，靠嘉宾和切片二次分发。' },
  { id: 'live', name: '直播全场', max: Infinity, brief: '>60 分钟。播放量通常虚高、互动率低，看的时候要单独归类。' }
];

export function classifyFormat(seconds) {
  return (FORMATS.find((f) => seconds <= f.max) || FORMATS[FORMATS.length - 1]).id;
}

/** 中位数。频道基线用中位数而不是平均数 —— 一条百万爆款会把平均数拉到失真。 */
export function median(nums) {
  const arr = nums.filter((n) => Number.isFinite(n)).slice().sort((a, b) => a - b);
  if (!arr.length) return 0;
  const mid = arr.length >> 1;
  return arr.length % 2 ? arr[mid] : Math.round((arr[mid - 1] + arr[mid]) / 2);
}

/**
 * 爆款分 0–100。四个分量，各自的意思：
 *   35 分 爆款系数 —— 相对这个频道自己，跑赢了多少（最重要，因为这是“可学”的部分）
 *   30 分 绝对触达 —— 播放量本身的量级（30w 起步，100w 满分，对数刻度）
 *   20 分 共鸣度   —— 点赞/播放，5% 满分。财经类超过 3% 已经是强共鸣
 *   15 分 讨论度   —— 评论/点赞，15% 满分。这个比越高说明选题有争议、评论区有戏
 */
export function scoreVideo({ views, likes, comments, channelMedian, minViews }) {
  const mult = channelMedian > 0 ? views / channelMedian : 1;
  const multScore = clamp(Math.log2(Math.max(mult, 0.25)) / 3, 0, 1); // 8 倍 = 满分
  const reachScore = clamp(
    (Math.log10(Math.max(views, 1)) - Math.log10(minViews)) / (Math.log10(1_000_000) - Math.log10(minViews)),
    0,
    1
  );
  const likeRate = views > 0 ? likes / views : 0;
  const likeScore = clamp(likeRate / 0.05, 0, 1);
  const talkRatio = likes > 0 ? comments / likes : 0;
  const talkScore = clamp(talkRatio / 0.15, 0, 1);

  return {
    score: Math.round(35 * multScore + 30 * reachScore + 20 * likeScore + 15 * talkScore),
    parts: {
      mult: Math.round(35 * multScore),
      reach: Math.round(30 * reachScore),
      like: Math.round(20 * likeScore),
      talk: Math.round(15 * talkScore)
    },
    viralMultiple: Number(mult.toFixed(2)),
    likeRate: Number((likeRate * 100).toFixed(2)),
    commentRate: Number((views > 0 ? (comments / views) * 1000 : 0).toFixed(2)),
    talkRatio: Number((talkRatio * 100).toFixed(1)),
    engagementRate: Number((views > 0 ? ((likes + comments) / views) * 100 : 0).toFixed(2))
  };
}

/**
 * 可复用度：一条爆款对「粤语财经中小号」来说能不能直接照抄。
 * 判断依据是资源门槛，不是内容质量 —— 访谈爆款很好，但你没有那个嘉宾就抄不了。
 */
export function assessReusability({ topics, format, hooks }) {
  const t = new Set(topics);
  const reasons = [];
  let level = 'mid';

  if (t.has('personal') || t.has('edu') || t.has('career')) {
    level = 'high';
    reasons.push('不吃行情、不会过时，一个人一支咪就能做');
  } else if (t.has('property') || t.has('risk')) {
    level = 'high';
    reasons.push('本地情绪型选题，靠观点和案例取胜，无需数据源');
  } else if (t.has('wealth')) {
    level = 'low';
    reasons.push('依赖嘉宾资源，属于护城河型内容，短期抄不来');
  } else if (t.has('index') || t.has('stock') || t.has('us')) {
    level = 'mid';
    reasons.push('需要稳定的行情解读能力和发布节奏，可做但拼的是持续性');
  } else if (t.has('ipo') || t.has('macro')) {
    level = 'mid';
    reasons.push('窗口极短，要有快速响应的排期机制才吃得到');
  }

  if (format === 'live') {
    level = 'low';
    reasons.push('直播全场的量含水分，互动率低，别照搬');
  }
  if (format === 'shorts') {
    reasons.push('Shorts 的播放量与长片不同量级，只做钩子参考');
  }
  if (hooks.includes('authority')) {
    reasons.push('命中权威背书：先把人设写进标题，再谈选题');
  }
  return { level, reasons };
}

/** 把 YouTube API 的原始 item 加工成站点用的 video 对象。 */
export function buildVideo(raw, channel, channelMedian, threshold) {
  const views = Number(raw.views || 0);
  const likes = Number(raw.likes || 0);
  const comments = Number(raw.comments || 0);
  const durationSec = raw.durationSec ?? parseDuration(raw.duration);
  const topics = tagTopics(raw.title, raw.description || '');
  const hooks = tagHooks(raw.title);
  const format = classifyFormat(durationSec);
  const metrics = scoreVideo({ views, likes, comments, channelMedian, minViews: threshold.minViews });
  const isHit = views >= threshold.minViews && comments >= threshold.minComments && likes >= threshold.minLikes;

  return {
    id: raw.id,
    title: raw.title,
    url: `https://www.youtube.com/watch?v=${raw.id}`,
    thumb: raw.thumb || `https://i.ytimg.com/vi/${raw.id}/mqdefault.jpg`,
    publishedAt: raw.publishedAt,
    channelHandle: channel.handle,
    channelName: channel.name,
    tier: channel.tier,
    lang: channel.lang,
    views,
    likes,
    comments,
    durationSec,
    format,
    topics,
    hooks,
    titleLen: [...raw.title].length,
    hasQuestion: /[?？]/.test(raw.title),
    isHit,
    missing: [
      views < threshold.minViews ? 'views' : null,
      comments < threshold.minComments ? 'comments' : null,
      likes < threshold.minLikes ? 'likes' : null
    ].filter(Boolean),
    ...metrics,
    reuse: assessReusability({ topics, format, hooks })
  };
}

/** 周维度聚合：选题热度、钩子命中率、频道命中率。 */
export function aggregate(videos, channels) {
  const hits = videos.filter((v) => v.isHit);

  const byTopic = {};
  for (const v of hits) {
    for (const t of v.topics) {
      (byTopic[t] ||= { id: t, count: 0, views: [], scoreSum: 0 });
      byTopic[t].count += 1;
      byTopic[t].views.push(v.views);
      byTopic[t].scoreSum += v.score;
    }
  }
  const topics = Object.values(byTopic)
    .map((t) => ({
      id: t.id,
      count: t.count,
      medianViews: median(t.views),
      avgScore: Math.round(t.scoreSum / t.count)
    }))
    .sort((a, b) => b.count - a.count || b.medianViews - a.medianViews);

  const byHook = {};
  for (const v of videos) {
    for (const h of v.hooks) {
      (byHook[h] ||= { id: h, total: 0, hit: 0, views: [] });
      byHook[h].total += 1;
      if (v.isHit) {
        byHook[h].hit += 1;
        byHook[h].views.push(v.views);
      }
    }
  }
  const hooks = Object.values(byHook)
    .map((h) => ({
      id: h.id,
      total: h.total,
      hit: h.hit,
      hitRate: Number(((h.hit / h.total) * 100).toFixed(0)),
      medianViews: median(h.views)
    }))
    .sort((a, b) => b.hit - a.hit || b.hitRate - a.hitRate);

  const channelStats = channels.map((c) => {
    const own = videos.filter((v) => v.channelHandle === c.handle);
    const ownHits = own.filter((v) => v.isHit);
    return {
      handle: c.handle,
      name: c.name,
      tier: c.tier,
      lang: c.lang,
      subsLabel: c.subsLabel,
      note: c.note,
      medianViews: c.medianViews ?? 0,
      uploads: own.length,
      hits: ownHits.length,
      hitRate: own.length ? Number(((ownHits.length / own.length) * 100).toFixed(0)) : 0,
      bestScore: ownHits.length ? Math.max(...ownHits.map((v) => v.score)) : 0,
      topViews: own.length ? Math.max(...own.map((v) => v.views)) : 0
    };
  });

  return { topics, hooks, channels: channelStats };
}

/** 给定日期所在的 ISO 周（周一为一周之始）。 */
export function isoWeek(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  const monday = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  monday.setUTCDate(monday.getUTCDate() - ((monday.getUTCDay() || 7) - 1));
  const sunday = new Date(monday);
  sunday.setUTCDate(sunday.getUTCDate() + 6);
  const iso = (x) => x.toISOString().slice(0, 10);
  return {
    id: `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`,
    start: iso(monday),
    end: iso(sunday)
  };
}
