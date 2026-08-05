#!/usr/bin/env node
// 每周采集：拉名单里所有频道近 7 天的视频，套爆款门槛，打标签，写周报 JSON。
//
//   YT_API_KEY=xxx node scripts/fetch-weekly.mjs
//   YT_API_KEY=xxx node scripts/fetch-weekly.mjs --days 14      指定回看天数
//   YT_API_KEY=xxx node scripts/fetch-weekly.mjs --week 2026-W31 覆盖周标签
//
// 配额：channels/playlistItems/videos 都是 1 unit/次，30 个频道一轮约 100 units，
// 免费额度是 10000/天，随便跑。千万别用 search.list（100 units/次）。

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildVideo, aggregate, median, isoWeek, parseDuration, FORMATS } from './lib/analyze.mjs';
import { TOPICS, HOOKS } from './lib/taxonomy.mjs';
import { writeOut } from './lib/write.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = 'https://www.googleapis.com/youtube/v3';

const argv = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};

const API_KEY = process.env.YT_API_KEY;
if (!API_KEY) {
  console.error('缺少 YT_API_KEY。到 Google Cloud Console 开一个 YouTube Data API v3 的 key，然后：');
  console.error('  YT_API_KEY=xxx node scripts/fetch-weekly.mjs');
  process.exit(1);
}

const warnings = [];

async function api(endpoint, params) {
  const url = new URL(`${API}/${endpoint}`);
  for (const [k, v] of Object.entries({ ...params, key: API_KEY })) url.searchParams.set(k, v);
  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`${endpoint} ${res.status}: ${body.slice(0, 300)}`);
  }
  return res.json();
}

/** handle -> { channelId, uploadsPlaylistId, subs }。结果缓存，避免每周重复解析。 */
async function resolveChannels(channels) {
  const cachePath = path.join(ROOT, 'data', 'channels.resolved.json');
  let cache = {};
  try {
    cache = JSON.parse(await fs.readFile(cachePath, 'utf8'));
  } catch {
    /* 首次运行没有缓存，正常 */
  }

  const resolved = [];
  for (const ch of channels) {
    if (cache[ch.handle]?.channelId) {
      resolved.push({ ...ch, ...cache[ch.handle] });
      continue;
    }
    try {
      const json = await api('channels', {
        part: 'contentDetails,statistics,snippet',
        forHandle: ch.handle
      });
      const item = json.items?.[0];
      if (!item) {
        warnings.push(`频道解析失败：${ch.name} (${ch.handle}) —— handle 可能已改名或不存在，请到 channels.json 修正`);
        continue;
      }
      const info = {
        channelId: item.id,
        uploads: item.contentDetails.relatedPlaylists.uploads,
        subs: Number(item.statistics.subscriberCount || 0),
        title: item.snippet.title
      };
      cache[ch.handle] = info;
      resolved.push({ ...ch, ...info });
    } catch (err) {
      warnings.push(`频道解析出错：${ch.name} (${ch.handle}) —— ${err.message}`);
    }
  }
  await fs.mkdir(path.dirname(cachePath), { recursive: true });
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2));
  return resolved;
}

/** 拉某个频道 uploads 播放列表的最近 N 条 videoId。 */
async function recentVideoIds(uploadsPlaylist, want) {
  const ids = [];
  let pageToken;
  while (ids.length < want) {
    const json = await api('playlistItems', {
      part: 'contentDetails',
      playlistId: uploadsPlaylist,
      maxResults: Math.min(50, want - ids.length),
      ...(pageToken ? { pageToken } : {})
    });
    for (const it of json.items || []) ids.push(it.contentDetails.videoId);
    pageToken = json.nextPageToken;
    if (!pageToken) break;
  }
  return ids;
}

/** 批量取视频统计，50 个一批。 */
async function videoStats(ids) {
  const out = [];
  for (let i = 0; i < ids.length; i += 50) {
    const json = await api('videos', {
      part: 'snippet,statistics,contentDetails',
      id: ids.slice(i, i + 50).join(',')
    });
    for (const it of json.items || []) {
      out.push({
        id: it.id,
        title: it.snippet.title,
        description: it.snippet.description || '',
        publishedAt: it.snippet.publishedAt,
        thumb: it.snippet.thumbnails?.medium?.url,
        views: Number(it.statistics.viewCount || 0),
        likes: Number(it.statistics.likeCount || 0),
        comments: Number(it.statistics.commentCount || 0),
        durationSec: parseDuration(it.contentDetails.duration)
      });
    }
  }
  return out;
}

async function main() {
  const config = JSON.parse(await fs.readFile(path.join(ROOT, 'config.json'), 'utf8'));
  const { channels } = JSON.parse(await fs.readFile(path.join(ROOT, 'channels.json'), 'utf8'));
  const days = Number(arg('days', config.lookbackDays));
  const threshold = config.threshold;

  const now = new Date();
  const since = new Date(now.getTime() - days * 86400000);
  const week = arg('week') ? { id: arg('week'), start: '', end: '' } : isoWeek(now);

  console.log(`采集 ${channels.length} 个频道，回看 ${days} 天（${since.toISOString().slice(0, 10)} 起）`);

  const resolved = await resolveChannels(channels);
  console.log(`解析成功 ${resolved.length}/${channels.length} 个频道`);

  const allVideos = [];
  const channelMeta = [];

  for (const ch of resolved) {
    try {
      const ids = await recentVideoIds(ch.uploads, config.baselineCount);
      const stats = await videoStats(ids);

      // 基线只用「已经过了本次回看窗口」的视频算中位数。
      // 本周刚发的片播放量还在爬，混进基线会把中位数拉低、把爆款系数吹高。
      const settled = stats.filter((v) => new Date(v.publishedAt) < since);
      const channelMedian = median((settled.length >= 5 ? settled : stats).map((v) => v.views));

      const thisWeek = stats.filter((v) => new Date(v.publishedAt) >= since);
      for (const raw of thisWeek) {
        allVideos.push(buildVideo(raw, ch, channelMedian, threshold));
      }
      channelMeta.push({ ...ch, medianViews: channelMedian });
      console.log(
        `  ${ch.name.padEnd(24)} 本周 ${String(thisWeek.length).padStart(2)} 条  基线中位 ${channelMedian.toLocaleString()}`
      );
    } catch (err) {
      warnings.push(`采集失败：${ch.name} —— ${err.message}`);
    }
  }

  allVideos.sort((a, b) => b.score - a.score);
  const agg = aggregate(allVideos, channelMeta);
  const hits = allVideos.filter((v) => v.isHit);

  const payload = {
    generatedAt: now.toISOString(),
    demo: false,
    week,
    lookbackDays: days,
    threshold,
    warnings,
    summary: {
      channels: channelMeta.length,
      uploads: allVideos.length,
      hits: hits.length,
      hitRate: allVideos.length ? Number(((hits.length / allVideos.length) * 100).toFixed(0)) : 0,
      medianHitViews: median(hits.map((v) => v.views))
    },
    videos: allVideos,
    agg,
    defs: { topics: TOPICS, hooks: HOOKS, formats: FORMATS }
  };

  await writeOut(ROOT, payload, week.id);
  console.log(`\n完成：${allVideos.length} 条新片，${hits.length} 条达到爆款门槛`);
  if (warnings.length) {
    console.log('\n注意：');
    for (const w of warnings) console.log('  - ' + w);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
