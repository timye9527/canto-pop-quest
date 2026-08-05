# 粤语财经爆款雷达

每周扫一遍名单里的 YouTube 频道，只留下真正跑出来的视频，然后拆它的**选题逻辑**和**爆款逻辑**。

## 爆款怎么算

播放 ≥ **30,000**、评论 ≥ **20**、点赞 ≥ **1,000**，三条**同时**满足。

单看播放量会被买量污染 —— 刷播放很便宜，刷点赞贵一档，刷评论最贵也最容易露馅。三条一起卡，本质是在卡「真实观众」。门槛写在 `config.json`，改了立刻生效。

除了这三条硬门槛，站点还会算**爆款系数** = 本片播放 ÷ 该频道近期播放中位数。250 万粉的号拿 10 万播放是日常，5 万粉的号拿 5 万播放才叫跑出来 —— 而且只有后者是你能学的。所以爆款分里，爆款系数占 35 分，比绝对播放量（30 分）还重。

## 跑起来

```bash
cd viral-radar

# 1) 先看看长什么样（演示数据，不需要 API key）
node scripts/make-demo.mjs

# 2) 接真实数据
export YT_API_KEY=你的key          # Google Cloud Console → 启用 YouTube Data API v3
node scripts/fetch-weekly.mjs

# 3) 看
python3 -m http.server 8901        # 然后开 http://127.0.0.1:8901/
```

也可以直接双击 `index.html` —— 脚本会同时写一份 `data/latest.js`，用 `<script>` 标签绕开 `file://` 的 CORS 限制。

### 常用参数

```bash
node scripts/fetch-weekly.mjs --days 14        # 回看 14 天而不是 7 天
node scripts/fetch-weekly.mjs --week 2026-W31  # 手动指定周标签
```

### API 配额

免费额度 10,000 units/天。`channels` / `playlistItems` / `videos` 都是 1 unit 一次，30 个频道跑一轮约 100 units，随便跑。

**千万别改用 `search.list`** —— 那个 100 units 一次，几轮就把额度烧光了。当前实现走的是「uploads 播放列表 → 批量取 stats」，这是最省的路径。

## 目录

```
channels.json            监测名单。加号删号改分组都在这里
config.json              爆款门槛、回看天数、基线样本数
scripts/
  fetch-weekly.mjs       每周采集主脚本
  make-demo.mjs          生成演示数据
  lib/taxonomy.mjs       ★ 选题词库 + 爆款钩子词库（唯一的运营 IP）
  lib/analyze.mjs        指标计算、爆款评分、可复用度判定
  lib/write.mjs          周报落盘
data/
  latest.json / .js      最新一周
  weeks/2026-Wxx.json    历史归档
index.html               站点入口
site/app.js, styles.css  前端
```

## 站点四个页签

| 页签 | 看什么 |
|---|---|
| **本周爆款榜** | 按爆款分排序的卡片。可按分组/选题/钩子/形态筛。点开看单片拆解 |
| **选题雷达** | 哪类选题在跑量、哪个钩子命中率高、爆款集中在哪个时长带 |
| **频道盘口** | 每个频道的基线、更新量、爆款率。找「小号突然跑出高分」的信号 |
| **爆款方法论** | 标题公式库、封面公式、每周一小时复盘 SOP、必须避开的坑 |

## 名单

分五组，对标目的不一样，别混着看：

- `competitor` 直接竞品（富途、老虎、涨乐、光大、致富、华盛）—— 看**栏目设置和更新节奏**，不看标题玩法，他们受合规约束
- `vertical` 财经垂类（AASTOCKS、财自FM、Finance730、etnet、RagaFinance、Money18、InvesTalk）
- `creator` 粤语自媒体（RainIsHere、30岁财务自由、菠萝包、阿豬、Chart-reader CUP 等）—— 看**标题和封面玩法**
- `mandarin` 普通话对标（小Lin说、张志云Papa、加密大漂亮）—— 看大白话的表达方式和情绪浓度
- `podcast` 英文顶流（Diary of a CEO、All-In、Graham Stephan、Coin Bureau、Patrick Boyle）—— 看开场钩子和切片策略

名单里标了 `"verified": false` 的几个英文频道 handle 是人工推断的，**首次跑 `fetch-weekly.mjs` 时如果解析失败，会出现在站点顶部的「采集告警」里** —— 到 YouTube 上确认真实 handle 后改 `channels.json` 即可，不影响其他频道采集。

## 每周怎么用（一小时 SOP）

1. **10 分钟** 跑脚本，看 KPI 行：整体达标率比上周高还是低（整体走高通常是大盘有事件，不是你变强了）
2. **15 分钟** 选题雷达 → 找**机会区**（条数少但播放中位数高）的 1–2 个选题，写进下周排期
3. **20 分钟** 爆款榜按爆款系数排序 → **≥3x 且可复用度=高**的逐条点开，抄钩子组合和标题结构，不抄内容
4. **10 分钟** 频道盘口 → 有没有小号（基线低）突然跑出高爆款分，这通常意味着有人试出了新玩法
5. **5 分钟** 写下周 3 个选题 + 3 个候选标题

## 词库要养

「未归类」的比例是这套系统的体检指标。某周超过 15%，说明市场上出现了词库没覆盖的新选题 —— 这本身就是信号。去 `scripts/lib/taxonomy.mjs` 加词，加词就等于调整你看盘的视角。

## 自动化

`.github/workflows/viral-radar.yml` 每周一早上跑一次并把结果提交回仓库。用之前先在仓库 Settings → Secrets 里加 `YT_API_KEY`。
