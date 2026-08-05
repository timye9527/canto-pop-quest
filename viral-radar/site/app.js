/* 粤语财经爆款雷达 —— 纯前端渲染，数据来自 data/latest.js（或 latest.json）。 */

const TIER_LABEL = {
  competitor: '直接竞品',
  vertical: '财经垂类',
  creator: '粤语自媒体',
  mandarin: '普通话对标',
  podcast: '英文 Podcast'
};
const LANG_LABEL = { yue: '粤语', cmn: '普通话', en: '英文' };
const OTHER = { id: 'other', name: '未归类', color: '#64748b', brief: '词库没命中。这类变多就该补 taxonomy.mjs 的词。' };

let DATA = null;
let TOPIC = {};
let HOOK = {};
let FORMAT = {};

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const fmt = (n) => {
  if (n >= 10000) return (n / 10000).toFixed(n >= 100000 ? 0 : 1).replace(/\.0$/, '') + 'w';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return String(n);
};
const dur = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
const ago = (iso) => {
  const d = Math.round((Date.now() - new Date(iso)) / 86400000);
  return d <= 0 ? '今日' : `${d} 天前`;
};
const scoreColor = (s) => (s >= 65 ? 'var(--good)' : s >= 45 ? 'var(--warn)' : 'var(--text-2)');

/* ---------------- 数据加载 ---------------- */

async function load() {
  if (window.__VIRAL_DATA__) return window.__VIRAL_DATA__;
  // 走 http(s) 时可以直接 fetch JSON；file:// 下会被 CORS 拦掉，靠上面的 script 兜底。
  const res = await fetch('data/latest.json', { cache: 'no-store' });
  if (!res.ok) throw new Error(`加载 data/latest.json 失败（HTTP ${res.status}）`);
  return res.json();
}

/* ---------------- 卡片 ---------------- */

function topicChip(id) {
  const t = TOPIC[id] || OTHER;
  return `<span class="chip" style="color:${t.color}">${esc(t.name)}</span>`;
}
function hookChip(id) {
  const h = HOOK[id];
  return h ? `<span class="chip" style="color:${h.color}">${esc(h.name)}</span>` : '';
}

function card(v, rank) {
  const n = el('article', 'card' + (v.isHit ? '' : ' miss'));
  n.innerHTML = `
    <div class="card-head">
      <div class="score" style="color:${scoreColor(v.score)}">${v.score}</div>
      <div style="min-width:0;flex:1">
        <p class="card-title">${rank != null ? `<span style="color:var(--text-3)">#${rank}</span> ` : ''}${esc(v.title)}</p>
        <div class="card-ch">
          <span class="chip tier">${TIER_LABEL[v.tier] || v.tier}</span>
          <span>${esc(v.channelName)}</span>
          <span>·</span><span>${LANG_LABEL[v.lang] || v.lang}</span>
          <span>·</span><span>${ago(v.publishedAt)}</span>
          <span>·</span><span>${dur(v.durationSec)}</span>
        </div>
      </div>
    </div>
    <div class="stats">
      <div class="stat"><div class="v">${fmt(v.views)}</div><div class="k">播放</div></div>
      <div class="stat"><div class="v">${fmt(v.likes)}</div><div class="k">点赞</div></div>
      <div class="stat"><div class="v">${fmt(v.comments)}</div><div class="k">评论</div></div>
      <div class="stat"><div class="v" style="color:${v.viralMultiple >= 2 ? 'var(--good)' : 'inherit'}">${v.viralMultiple}x</div><div class="k">爆款系数</div></div>
      <div class="stat"><div class="v">${v.likeRate}%</div><div class="k">点赞率</div></div>
    </div>
    <div class="chips">
      ${v.topics.map(topicChip).join('')}
      ${v.hooks.map(hookChip).join('')}
      <span class="reuse ${v.reuse.level}">可复用 ${{ high: '高', mid: '中', low: '低' }[v.reuse.level]}</span>
      ${v.isHit ? '' : `<span class="chip plain">未达标：${v.missing.map((m) => ({ views: '播放', comments: '评论', likes: '点赞' }[m])).join('/')}</span>`}
    </div>`;
  n.onclick = () => openDrawer(v);
  return n;
}

/* ---------------- 详情抽屉 ---------------- */

/** 按命中的钩子给出可直接套用的仿写模板。 */
function rewriteTemplate(v) {
  const h = new Set(v.hooks);
  const parts = [];
  if (h.has('identity')) parts.push('【身份】月入X万嘅香港打工仔');
  if (h.has('number')) parts.push('【数字】用N年 / N万蚊');
  if (h.has('negative')) parts.push('【否定】千祈唔好…');
  else if (h.has('suspense')) parts.push('【悬念】点解…？');
  if (h.has('authority')) parts.push('【背书】前Banker/十年操盘');
  if (h.has('conflict')) parts.push('【对立】A 定係 B');
  if (h.has('certain')) parts.push('【承诺】一条片睇晒');
  if (h.has('dream')) parts.push('【愿景】提早退休 / 被动收入');
  if (!parts.length) return '这条没有明显的标题钩子 —— 它靠的是频道自然流量或封面，标题本身不值得抄。';
  return parts.join(' + ');
}

function openDrawer(v) {
  const bg = el('div', 'drawer-bg');
  const d = el('aside', 'drawer');
  const p = v.parts || {};
  const seg = (val, color, label) =>
    val > 0 ? `<div style="width:${(val / v.score) * 100}%;background:${color}" title="${label} ${val}">${val >= 6 ? val : ''}</div>` : '';

  d.innerHTML = `
    <button class="close" aria-label="关闭">×</button>
    <h2>${esc(v.title)}</h2>
    <p style="color:var(--text-3);font-size:12.5px;margin:0">
      ${esc(v.channelName)} · ${TIER_LABEL[v.tier] || v.tier} · ${LANG_LABEL[v.lang] || v.lang} ·
      ${new Date(v.publishedAt).toLocaleDateString('zh-CN')} ·
      <a href="${esc(v.url)}" target="_blank" rel="noopener">在 YouTube 打开 ↗</a>
    </p>

    <div class="dsec">
      <h4>爆款分 ${v.score} / 100</h4>
      <div class="scorebar">
        ${seg(p.mult, '#4c8dff', '爆款系数')}${seg(p.reach, '#37c9a3', '绝对触达')}${seg(p.like, '#ffa63d', '共鸣度')}${seg(p.talk, '#e879f9', '讨论度')}
      </div>
      <p style="font-size:11.5px;color:var(--text-3);margin:6px 0 0">
        <span style="color:#4c8dff">■</span> 爆款系数 ${p.mult ?? 0}/35 &nbsp;
        <span style="color:#37c9a3">■</span> 绝对触达 ${p.reach ?? 0}/30 &nbsp;
        <span style="color:#ffa63d">■</span> 共鸣度 ${p.like ?? 0}/20 &nbsp;
        <span style="color:#e879f9">■</span> 讨论度 ${p.talk ?? 0}/15
      </p>
    </div>

    <div class="dsec">
      <h4>指标</h4>
      <dl class="kv">
        <dt>播放</dt><dd>${v.views.toLocaleString()}</dd>
        <dt>点赞</dt><dd>${v.likes.toLocaleString()}（点赞率 ${v.likeRate}%）</dd>
        <dt>评论</dt><dd>${v.comments.toLocaleString()}（每千播放 ${v.commentRate} 条）</dd>
        <dt>爆款系数</dt><dd><b style="color:${v.viralMultiple >= 2 ? 'var(--good)' : 'inherit'}">${v.viralMultiple}x</b> 该频道近期播放中位数</dd>
        <dt>讨论度</dt><dd>评论 / 点赞 = ${v.talkRatio}%${v.talkRatio >= 12 ? ' —— 偏高，说明选题有争议，评论区有戏' : ''}</dd>
        <dt>形态</dt><dd>${FORMAT[v.format]?.name || v.format}（${dur(v.durationSec)}）</dd>
        <dt>达标</dt><dd>${v.isHit ? '<span style="color:var(--good)">三条门槛全过</span>' : `<span style="color:var(--warn)">差：${v.missing.map((m) => ({ views: '播放', comments: '评论', likes: '点赞' }[m])).join('、')}</span>`}</dd>
      </dl>
    </div>

    <div class="dsec">
      <h4>选题</h4>
      ${v.topics
        .map((id) => {
          const t = TOPIC[id] || OTHER;
          return `<div class="hookitem" style="border-color:${t.color}">
            <div class="hname" style="color:${t.color}">${esc(t.name)}</div>
            <div class="hbrief">${esc(t.brief || '')}</div></div>`;
        })
        .join('')}
    </div>

    <div class="dsec">
      <h4>命中的爆款钩子（${v.hooks.length}）</h4>
      ${
        v.hooks.length
          ? v.hooks
              .map((id) => {
                const h = HOOK[id];
                if (!h) return '';
                return `<div class="hookitem" style="border-color:${h.color}">
                  <div class="hname" style="color:${h.color}">${esc(h.name)}</div>
                  <div class="hbrief">${esc(h.brief)}</div>
                  ${h.play ? `<div class="hplay">→ ${esc(h.play)}</div>` : ''}</div>`;
              })
              .join('')
          : '<p style="color:var(--text-3);font-size:13px">标题没命中任何钩子。如果这条还是爆了，说明流量来自封面、人设或平台推荐 —— 值得单独去看封面。</p>'
      }
    </div>

    <div class="dsec">
      <h4>标题解剖</h4>
      <dl class="kv">
        <dt>字数</dt><dd>${v.titleLen} 字${v.titleLen > 34 ? '（偏长，手机端会被截断）' : v.titleLen < 12 ? '（偏短，信息量不足）' : '（在移动端完整显示的安全区内）'}</dd>
        <dt>疑问句</dt><dd>${v.hasQuestion ? '是 —— 疑问句天然拉评论' : '否'}</dd>
        <dt>钩子叠加</dt><dd>${v.hooks.length} 个${v.hooks.length >= 3 ? '（高密度，典型的标题党结构）' : ''}</dd>
      </dl>
    </div>

    <div class="dsec">
      <h4>可复用度：<span class="reuse ${v.reuse.level}">${{ high: '高', mid: '中', low: '低' }[v.reuse.level]}</span></h4>
      <ul style="margin:0;padding-left:18px;color:var(--text-2);font-size:13px">
        ${v.reuse.reasons.map((r) => `<li>${esc(r)}</li>`).join('')}
      </ul>
    </div>

    <div class="dsec">
      <h4>仿写模板</h4>
      <div class="formula"><div class="f">${esc(rewriteTemplate(v))}</div></div>
    </div>`;

  const close = () => {
    bg.remove();
    d.remove();
    document.removeEventListener('keydown', onKey);
  };
  const onKey = (e) => e.key === 'Escape' && close();
  bg.onclick = close;
  $('.close', d).onclick = close;
  document.addEventListener('keydown', onKey);
  document.body.append(bg, d);
}

/* ---------------- Tab：本周爆款榜 ---------------- */

const state = { tier: '', topic: '', hook: '', format: '', sort: 'score', hitOnly: true, q: '' };

function renderBoard(root) {
  root.innerHTML = '';
  const bar = el('div', 'filters');
  const opts = (list, cur) =>
    list.map(([v, l]) => `<option value="${v}"${v === cur ? ' selected' : ''}>${l}</option>`).join('');

  bar.innerHTML = `
    <select id="f-tier">${opts([['', '全部分组'], ...Object.entries(TIER_LABEL)], state.tier)}</select>
    <select id="f-topic">${opts([['', '全部选题'], ...DATA.defs.topics.map((t) => [t.id, t.name]), ['other', '未归类']], state.topic)}</select>
    <select id="f-hook">${opts([['', '全部钩子'], ...DATA.defs.hooks.map((h) => [h.id, h.name])], state.hook)}</select>
    <select id="f-format">${opts([['', '全部形态'], ...DATA.defs.formats.map((f) => [f.id, f.name])], state.format)}</select>
    <select id="f-sort">${opts(
      [
        ['score', '按爆款分'],
        ['views', '按播放量'],
        ['mult', '按爆款系数'],
        ['like', '按点赞率'],
        ['talk', '按讨论度'],
        ['date', '按发布时间']
      ],
      state.sort
    )}</select>
    <input type="search" id="f-q" placeholder="搜标题/频道" value="${esc(state.q)}" style="width:150px">
    <label><input type="checkbox" id="f-hit"${state.hitOnly ? ' checked' : ''}> 只看达标爆款</label>
    <span class="count" id="f-count"></span>`;
  root.append(bar);

  const list = el('div', 'cards');
  root.append(list);

  const draw = () => {
    let vs = DATA.videos.filter(
      (v) =>
        (!state.hitOnly || v.isHit) &&
        (!state.tier || v.tier === state.tier) &&
        (!state.topic || v.topics.includes(state.topic)) &&
        (!state.hook || v.hooks.includes(state.hook)) &&
        (!state.format || v.format === state.format) &&
        (!state.q || (v.title + v.channelName).toLowerCase().includes(state.q.toLowerCase()))
    );
    const key = {
      score: (v) => v.score,
      views: (v) => v.views,
      mult: (v) => v.viralMultiple,
      like: (v) => v.likeRate,
      talk: (v) => v.talkRatio,
      date: (v) => new Date(v.publishedAt).getTime()
    }[state.sort];
    vs.sort((a, b) => key(b) - key(a));

    list.innerHTML = '';
    if (!vs.length) {
      list.append(el('div', 'empty', '没有符合条件的视频。放宽筛选，或取消勾选“只看达标爆款”。'));
    } else {
      vs.forEach((v, i) => list.append(card(v, i + 1)));
    }
    $('#f-count').textContent = `${vs.length} 条 / 本周共 ${DATA.videos.length} 条`;
  };

  const bind = (id, prop, ev = 'change', val = (e) => e.target.value) =>
    ($(`#${id}`).addEventListener(ev, (e) => {
      state[prop] = val(e);
      draw();
    }));
  bind('f-tier', 'tier');
  bind('f-topic', 'topic');
  bind('f-hook', 'hook');
  bind('f-format', 'format');
  bind('f-sort', 'sort');
  bind('f-q', 'q', 'input');
  bind('f-hit', 'hitOnly', 'change', (e) => e.target.checked);
  draw();
}

/* ---------------- Tab：选题雷达 ---------------- */

function barRow(name, color, ratio, valueText, sub) {
  return `<div class="bar-row">
    <div class="bar-name" style="color:${color}">${esc(name)}${sub ? `<div style="font-size:11px;color:var(--text-3)">${esc(sub)}</div>` : ''}</div>
    <div class="bar-track"><div class="bar-fill" style="width:${Math.max(ratio * 100, 2)}%;background:${color}"></div></div>
    <div class="bar-val">${valueText}</div>
  </div>`;
}

function renderRadar(root) {
  const topics = DATA.agg.topics;
  const maxCount = Math.max(1, ...topics.map((t) => t.count));
  const maxMed = Math.max(1, ...topics.map((t) => t.medianViews));

  const hooks = DATA.agg.hooks;
  const maxHookMed = Math.max(1, ...hooks.map((h) => h.medianViews));

  const fmtCount = {};
  for (const v of DATA.videos.filter((v) => v.isHit)) fmtCount[v.format] = (fmtCount[v.format] || 0) + 1;
  const maxFmt = Math.max(1, ...Object.values(fmtCount));

  root.innerHTML = `
    <div class="panel">
      <h3>本周哪类选题在跑量</h3>
      <p class="hint">只统计达标爆款。条形长度 = 爆款条数；右侧是这类选题本周的播放中位数。条数多但中位数低 = 大家都在做但都没做爆，是红海；条数少但中位数高 = 机会。</p>
      <div class="bars">
        ${topics
          .map((t) => {
            const d = TOPIC[t.id] || OTHER;
            return barRow(d.name, d.color, t.count / maxCount, `${t.count} 条 · 中位 ${fmt(t.medianViews)}`, `均分 ${t.avgScore}`);
          })
          .join('')}
      </div>
    </div>

    <div class="panel">
      <h3>选题的播放中位数排序</h3>
      <p class="hint">同样是达标爆款，不同选题的天花板差很远。这张图决定你下周主推哪个方向。</p>
      <div class="bars">
        ${[...topics]
          .sort((a, b) => b.medianViews - a.medianViews)
          .map((t) => {
            const d = TOPIC[t.id] || OTHER;
            return barRow(d.name, d.color, t.medianViews / maxMed, fmt(t.medianViews), `${t.count} 条`);
          })
          .join('')}
      </div>
    </div>

    <div class="panel">
      <h3>爆款钩子的命中率</h3>
      <p class="hint">命中率 = 用了这个钩子的视频里，有多少条达标。样本量小的时候别当真，连续看 4 周再下结论。</p>
      <table>
        <thead><tr><th>钩子</th><th class="num">本周用了</th><th class="num">达标</th><th class="num">命中率</th><th class="num">达标片中位播放</th><th>怎么用</th></tr></thead>
        <tbody>
          ${hooks
            .map((h) => {
              const d = HOOK[h.id];
              if (!d) return '';
              return `<tr>
                <td style="color:${d.color}">${esc(d.name)}</td>
                <td class="num">${h.total}</td>
                <td class="num">${h.hit}</td>
                <td class="num" style="color:${h.hitRate >= 70 ? 'var(--good)' : h.hitRate >= 40 ? 'var(--warn)' : 'var(--text-3)'}">${h.hitRate}%</td>
                <td class="num">${fmt(h.medianViews)}</td>
                <td style="color:var(--text-3);font-size:12px">${esc(d.play || '')}</td>
              </tr>`;
            })
            .join('')}
        </tbody>
      </table>
    </div>

    <div class="panel">
      <h3>爆款的内容形态分布</h3>
      <p class="hint">同样的选题，做成 5 分钟快评还是 20 分钟深度，结果完全不同。看本周爆款集中在哪个时长带。</p>
      <div class="bars">
        ${DATA.defs.formats
          .filter((f) => fmtCount[f.id])
          .map((f) => barRow(f.name, '#4c8dff', fmtCount[f.id] / maxFmt, `${fmtCount[f.id]} 条`, f.brief.split('。')[0]))
          .join('')}
      </div>
    </div>

    <div class="panel">
      <h3>钩子中位播放</h3>
      <div class="bars">
        ${[...hooks]
          .filter((h) => h.hit > 0)
          .sort((a, b) => b.medianViews - a.medianViews)
          .map((h) => {
            const d = HOOK[h.id];
            return d ? barRow(d.name, d.color, h.medianViews / maxHookMed, fmt(h.medianViews), `${h.hit} 条达标`) : '';
          })
          .join('')}
      </div>
    </div>`;
}

/* ---------------- Tab：频道盘口 ---------------- */

let chSort = { key: 'hits', dir: -1 };

function renderChannels(root) {
  const cols = [
    ['name', '频道', false],
    ['tier', '分组', false],
    ['subsLabel', '粉丝', false],
    ['medianViews', '基线中位播放', true],
    ['uploads', '本周更新', true],
    ['hits', '爆款', true],
    ['hitRate', '爆款率', true],
    ['topViews', '本周最高播放', true],
    ['bestScore', '最高爆款分', true]
  ];

  root.innerHTML = `
    <div class="panel">
      <h3>频道盘口</h3>
      <p class="hint">
        基线中位播放 = 该频道近期视频播放量的中位数，是判断“这条到底算不算跑出来”的分母。
        更新量高但爆款率低 = 在堆量；更新量低但爆款率高 = 选题精准，最值得逐条拆。
      </p>
      <table><thead><tr>${cols
        .map(([k, l, num]) => `<th data-k="${k}"${num ? ' class="num"' : ''}>${l}${chSort.key === k ? (chSort.dir < 0 ? ' ↓' : ' ↑') : ''}</th>`)
        .join('')}</tr></thead><tbody id="ch-body"></tbody></table>
    </div>
    <div class="panel">
      <h3>名单备注</h3>
      <p class="hint">来自 channels.json，是你自己写的对标理由 —— 每周复盘时对照着看。</p>
      <table><thead><tr><th>频道</th><th>分组</th><th>为什么盯它</th></tr></thead><tbody>
        ${DATA.agg.channels
          .filter((c) => c.note)
          .map(
            (c) =>
              `<tr><td>${esc(c.name)}</td><td style="color:var(--text-3)">${TIER_LABEL[c.tier] || c.tier}</td><td style="color:var(--text-2)">${esc(c.note)}</td></tr>`
          )
          .join('')}
      </tbody></table>
    </div>`;

  const draw = () => {
    const rows = [...DATA.agg.channels].sort((a, b) => {
      const x = a[chSort.key], y = b[chSort.key];
      return (typeof x === 'string' ? String(x).localeCompare(String(y), 'zh') : x - y) * chSort.dir;
    });
    $('#ch-body').innerHTML = rows
      .map(
        (c) => `<tr>
        <td>${esc(c.name)}<div style="font-size:11px;color:var(--text-3)">${esc(c.handle)}</div></td>
        <td style="color:var(--text-3)">${TIER_LABEL[c.tier] || c.tier}</td>
        <td style="color:var(--text-3)">${esc(c.subsLabel || '—')}</td>
        <td class="num">${c.medianViews ? fmt(c.medianViews) : '—'}</td>
        <td class="num">${c.uploads}</td>
        <td class="num" style="color:${c.hits ? 'var(--good)' : 'var(--text-3)'}">${c.hits}</td>
        <td class="num">${c.uploads ? c.hitRate + '%' : '—'}</td>
        <td class="num">${c.topViews ? fmt(c.topViews) : '—'}</td>
        <td class="num" style="color:${scoreColor(c.bestScore)}">${c.bestScore || '—'}</td>
      </tr>`
      )
      .join('');
  };

  root.querySelectorAll('th[data-k]').forEach((th) =>
    th.addEventListener('click', () => {
      const k = th.dataset.k;
      chSort = { key: k, dir: chSort.key === k ? -chSort.dir : -1 };
      renderChannels(root);
    })
  );
  draw();
}

/* ---------------- Tab：方法论 ---------------- */

function renderMethod(root) {
  const t = DATA.threshold;
  root.innerHTML = `<div class="doc">

  <h3>一、为什么是这三条门槛</h3>
  <p>播放 ≥ <b>${t.minViews.toLocaleString()}</b>、评论 ≥ <b>${t.minComments}</b>、点赞 ≥ <b>${t.minLikes.toLocaleString()}</b>，<strong>三条必须同时满足</strong>。</p>
  <p>单看播放量会被买量污染。刷播放很便宜，刷点赞贵一档，刷评论最贵而且最容易被看出来 —— 所以三条一起卡，本质是在卡「真实观众」。财经类的正常结构大致是：</p>
  <div class="formula">
    <div class="f">点赞 / 播放 ≈ 2%–5%　　评论 / 点赞 ≈ 5%–15%</div>
    <div class="e">明显偏离这个区间的，要么是买量，要么是内容真的引爆了争议 —— 两种都值得单独看一眼。</div>
  </div>

  <h3>二、绝对播放量会骗人，要看爆款系数</h3>
  <p>250 万粉的号随手发一条拿 10 万播放，这不叫爆款，叫日常。5 万粉的号跑出 5 万播放，那才是真的跑出来了 —— <strong>而且后者才是你能学的</strong>。</p>
  <div class="formula">
    <div class="f">爆款系数 = 本片播放 ÷ 该频道近期播放中位数</div>
    <div class="e">用中位数不用平均数：一条百万爆款会把平均数拉到失真。系数 ≥ 2x 才算跑赢自己，≥ 5x 是频道级事件，必须逐帧拆。</div>
  </div>
  <p>所以本站的<strong>爆款分</strong>把 35 分（最大的一块）给了爆款系数，只给绝对播放 30 分。排序默认按爆款分，不按播放量。</p>
  <div class="formula">
    <div class="f">爆款分 = 35×爆款系数 + 30×绝对触达 + 20×共鸣度(赞/播) + 15×讨论度(评/赞)</div>
    <div class="e">四项都做对数或封顶归一，满分 100。60 分以上值得开会讲，70 分以上直接排进下周选题。</div>
  </div>

  <h3>三、选题四象限：你该往哪儿投</h3>
  <p>把「选题雷达」里的两张图叠起来看，每个选题会落进四个格子之一：</p>
  <ul>
    <li><strong>条数多 + 中位播放高</strong> → 主航道。必做，但必须有差异化角度，否则被大号吃干净。</li>
    <li><strong>条数少 + 中位播放高</strong> → <span style="color:var(--good)">机会区，本周最该抢</span>。说明需求在但供给不足。</li>
    <li><strong>条数多 + 中位播放低</strong> → 红海。大家都在做都没做爆，别跟。</li>
    <li><strong>条数少 + 中位播放低</strong> → 冷区。除非是你的护城河内容（比如独家嘉宾），否则不碰。</li>
  </ul>
  <p>对粤语财经中小号来说，长期最稳的地基是 <code>个人理财</code>、<code>投资入门</code>、<code>投资心理</code> 这三类 —— 不吃行情、不会过时、能吃搜索长尾。<code>大盘</code> 和 <code>宏观</code> 是流量，但过期即废，只能做增量不能做地基。</p>

  <h3>四、标题公式库（直接套）</h3>
  <div class="formula"><div class="f">身份 + 数字 + 时间跨度 + 结果</div><div class="e">「月入3万嘅打工仔，点样5年储到100万」—— 财经类命中率最高的结构，四个要素缺一不可。</div></div>
  <div class="formula"><div class="f">否定祈使 + 对象 + 反转理由</div><div class="e">「千祈唔好再买高息股！我用10年先明呢个道理」—— 反向指令的点击率普遍高过正向建议。</div></div>
  <div class="formula"><div class="f">点解 + 反直觉结论</div><div class="e">「点解你永远买喺最高位」—— 制造信息差。粤语里「点解」开头比「为什么」更有对话感。</div></div>
  <div class="formula"><div class="f">A 定係 B + 我计晒条数畀你睇</div><div class="e">二选一逼观众站队，是拉评论数最有效的手段。想冲评论门槛就用这条，比任何「记得留言」话术都管用。</div></div>
  <div class="formula"><div class="f">我输咗 N 万 + 学到的 M 件事</div><div class="e">讲自己的亏比讲赚更容易被信。小号建立信任最快的路，而且完播率高。</div></div>
  <div class="formula"><div class="f">一条片睇晒 + 主题 + 懒人包</div><div class="e">承诺「看完不用再找」，降低点开成本。适合教学向长视频，能显著拉完播。</div></div>
  <p>字数控制在 <strong>15–30 字</strong>：低于 12 字信息量不够，超过 34 字手机端会被截断，钩子必须放在前 12 个字里。</p>

  <h3>五、封面公式</h3>
  <ul>
    <li><strong>大字冲击</strong>：4–6 个字，占封面 1/3 面积。手机上缩略图只有指甲盖大，字少才看得清。</li>
    <li><strong>数字优先</strong>：能用数字就别用形容词。「蚀80万」永远比「惨痛教训」强。</li>
    <li><strong>人脸 + 表情</strong>：惊讶、苦笑、皱眉。财经类最容易犯的错是封面只有图表没有人。</li>
    <li><strong>风格统一</strong>：同一套配色 + 同一个字体 + 同一个人物位置，让老观众在推荐流里一眼认出你。这条比单张封面做得漂亮重要得多。</li>
    <li><strong>红黄高对比</strong>：YouTube 推荐流背景是白/黑，红黄跳得最出。</li>
  </ul>

  <h3>六、每周一小时的复盘 SOP</h3>
  <ol>
    <li><strong>10 分钟</strong>：跑 <code>node scripts/fetch-weekly.mjs</code>，打开本站，看 KPI 行 —— 本周整体达标率比上周高还是低？（整体走高通常是大盘有事件，不是你变强了。）</li>
    <li><strong>15 分钟</strong>：进「选题雷达」，找出<strong>机会区</strong>（条数少、中位播放高）的 1–2 个选题，写进下周排期。</li>
    <li><strong>20 分钟</strong>：进「本周爆款榜」，按爆款系数排序，把 <strong>≥3x 且可复用度=高</strong> 的逐条点开，抄它的钩子组合和标题结构，不抄内容。</li>
    <li><strong>10 分钟</strong>：进「频道盘口」，看有没有小号（基线中位低）突然跑出高爆款分 —— 这通常意味着有人试出了新玩法，是最值钱的信号。</li>
    <li><strong>5 分钟</strong>：把结论写成下周 3 个选题 + 3 个候选标题，进排期表。</li>
  </ol>

  <h3>七、几个必须避开的坑</h3>
  <div class="warnbox">
    <h4>直播回放会污染数据</h4>
    <ul>
      <li>RagaFinance、AASTOCKS 这类有大量直播回放，播放量看着不低但互动率极低，属于「挂着不看」。判断的时候看形态标签，<code>直播全场</code> 的数据不要拿来对标短片。</li>
    </ul>
  </div>
  <div class="warnbox">
    <h4>Shorts 和长片不是一个量级</h4>
    <ul>
      <li>Shorts 破 3 万播放太容易，但转化和涨粉都弱。筛选器里单独按形态过滤，不要混在一起排名。</li>
    </ul>
  </div>
  <div class="warnbox">
    <h4>本周刚发的片播放量还在爬</h4>
    <ul>
      <li>周日发的片到周一只累积了一天。采集脚本算频道基线时已经排除了本周视频，但你自己看榜的时候也要记得：发布 2 天内的片，爆款系数会低估。</li>
    </ul>
  </div>
  <div class="warnbox">
    <h4>券商号有它自己的天花板</h4>
    <ul>
      <li>富途/老虎/华盛这类账号的内容受合规约束，不可能像自媒体那样做标题党。看竞品要看<strong>栏目设置和更新节奏</strong>，看自媒体才看<strong>标题和封面玩法</strong>。两者的对标目的不一样，别搞混。</li>
    </ul>
  </div>

  <h3>八、词库是活的</h3>
  <p>「未归类」的比例是这套系统的体检指标。如果某周未归类超过 15%，说明市场上出现了词库没覆盖的新选题 —— 这本身就是一个信号。去 <code>scripts/lib/taxonomy.mjs</code> 里加词，加词就等于调整你看盘的视角。</p>
  </div>`;
}

/* ---------------- 启动 ---------------- */

const TABS = [
  ['board', '本周爆款榜', renderBoard],
  ['radar', '选题雷达', renderRadar],
  ['channels', '频道盘口', renderChannels],
  ['method', '爆款方法论', renderMethod]
];

function boot(data) {
  DATA = data;
  TOPIC = Object.fromEntries(data.defs.topics.map((t) => [t.id, t]));
  HOOK = Object.fromEntries(data.defs.hooks.map((h) => [h.id, h]));
  FORMAT = Object.fromEntries(data.defs.formats.map((f) => [f.id, f]));

  if (data.demo) $('#demo-banner').hidden = false;

  const s = data.summary;
  $('#kpis').innerHTML = [
    [s.channels, '监测频道'],
    [s.uploads, '本周新片'],
    [s.hits, '达标爆款'],
    [s.hitRate + '%', '达标率'],
    [fmt(s.medianHitViews), '爆款中位播放']
  ]
    .map(([v, k]) => `<div class="kpi"><div class="v">${v}</div><div class="k">${k}</div></div>`)
    .join('');

  $('#week').textContent = data.week.id + (data.week.start ? `（${data.week.start} → ${data.week.end}）` : '');
  $('#gen').textContent = new Date(data.generatedAt).toLocaleString('zh-CN');
  $('#thresh').innerHTML =
    `爆款门槛：播放 <b>≥${data.threshold.minViews.toLocaleString()}</b>` +
    ` · 评论 <b>≥${data.threshold.minComments}</b>` +
    ` · 点赞 <b>≥${data.threshold.minLikes.toLocaleString()}</b> · 三条同时满足`;

  if (data.warnings?.length) {
    const w = el('div', 'warnbox');
    w.innerHTML = `<h4>采集告警（${data.warnings.length}）</h4><ul>${data.warnings.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
    $('#warn-slot').append(w);
  }

  const nav = $('#tabs');
  const body = $('#tab-body');
  TABS.forEach(([id, label, render], i) => {
    const b = el('button', i === 0 ? 'on' : '', label);
    b.onclick = () => {
      nav.querySelectorAll('button').forEach((x) => x.classList.remove('on'));
      b.classList.add('on');
      body.innerHTML = '';
      render(body);
    };
    nav.append(b);
  });
  renderBoard(body);
}

load()
  .then(boot)
  .catch((err) => {
    $('#tab-body').innerHTML = `<div class="empty">
      <p>${esc(err.message)}</p>
      <p style="font-size:12px">如果你是直接双击打开这个文件：先跑一次 <code>node scripts/make-demo.mjs</code> 生成 data/latest.js，
      或者在项目根目录起个本地服务器（<code>npx serve .</code>）再访问 viral-radar/index.html。</p>
    </div>`;
  });
