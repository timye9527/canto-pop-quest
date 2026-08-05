# 粤语港乐闯关

一个本地可玩的粤语闯关 MVP。现在包含十五章：

- Chapter 15：“15天港片粤语训练 Day 10：蔡澜式人生智慧”，50 道从饮食、旅行、人情世故、豁达判断里练粤语和生活感知的训练。
- Chapter 14：“15天港片粤语训练 Day 09：周润发经典港片气场”，50 道练从容、义气、分寸、场面话和江湖式收场的训练。
- Chapter 13：“15天港片粤语训练 Day 08：新闻女王”，50 道新闻职场表达训练，围绕事实、立场、话语权、镜头前后和专业边界。
- Chapter 12：“15天港片粤语训练 Day 07：创世纪”，50 道商业谈判训练，围绕愿景、风险、承诺、利益交换和职场落地。
- Chapter 11：“15天港片粤语训练 Day 06：大时代”，50 道人性压力训练，围绕输赢、家庭利益、情绪压迫和风险判断。
- Chapter 10：“15天港片粤语训练 Day 05：男女交往粤语边界”，50 道围绕暧昧、拒绝、误会、体面表达和亲密关系沟通的训练。
- Chapter 09：“15天港片粤语训练 Day 04”，50 道围绕《男亲女爱》式办公室、黄子华/栋笃笑节奏、港乐情绪和职场边界的语感训练。
- Chapter 08：“15天港片粤语训练 Day 03”，50 道从经典港乐、K房情绪、办公室对白和栋笃笑式观察出发的粤语语感训练。
- Chapter 07：“15天港片粤语训练 Day 02”，50 道减少简单声调题的进阶训练，强化语气、场景、职场迁移和语境综合判断。
- Chapter 06：“15天港片粤语训练 Day 01”，50 道模块化训练题，按声调感知、句意理解、语气潜台词、场景推断、职场迁移和混合复盘编排，并记录本轮耗时。
- Chapter 05：“经典港片高阶 50 题”，50 道不显示泄题标签、无补全题的高阶场景理解题，穿插九声六调/读音感知，并支持错题本复习。
- Chapter 04：“无厘头港片进阶 50 题”，50 道更有梗的常用场景题，答案打散，带成长面板和更新记录。
- Chapter 03：“港片常用场景进阶挑战”，20 道常用场景进阶题，重点考语气、潜台词、场面话和近义干扰。
- Chapter 02：“经典港片场景粤语句子挑战”，20 道原创港片场景句子题，支持浏览器粤语朗读、自动播报开关、重播和难度反馈。
- Chapter 01：“陈奕迅港乐卡拉 OK 夜”，50 道词汇热身题。

## 以后怎么进入游戏

首选方式是打开固定入口：

```text
/Users/timye/Documents/Codex/粤语闯关入口.html
```

这个文件放在 `Documents/Codex` 顶层，比当前 Codex 深层项目目录更容易找。入口页是霓虹片场风格，会约 2 秒后自动跳转到真实游戏入口；如果浏览器没有自动跳转，页面里也有“立即进入粤语闯关”按钮。

当前真实游戏入口是：

```text
file:///Users/timye/Documents/Codex/2026-05-10/codex-gpt-codex-webcoding-codex-20/preview.html
```

## 当前项目内运行方式

如果你已经在当前项目目录，也可以直接打开：

```text
preview.html
```

这个入口不依赖 npm、本地端口或 Vite dev server，适合 Codex 当前的本地预览环境。朗读使用浏览器 Web Speech API；会优先选择 `Sinji zh_HK` 这类粤语女声，只有检测到粤语或香港 voice 时才会播放，不再 fallback 到普通话中文 voice。

答题中途可以点“退出并保存”，首页会显示“继续上次进度”。未完成草稿、错题本、成绩和训练用时都会保存在本机浏览器的 `localStorage` 里。

如果你想用本地服务器预览，也可以运行：

Codex 当前内置了 `node`，但没有 `npm`，所以项目提供了一个零依赖预览服务器：

```bash
node scripts/preview-server.mjs
```

然后打开：

```text
http://127.0.0.1:4173
```

## 标准 Vite 方式

如果本机补上 `npm` 或 `pnpm`，可以按标准 React/Vite 项目运行：

```bash
npm install
npm run dev
```

## 分享给朋友 / 上线方式

当前项目已经可以按标准静态站部署。上线前本地检查：

```bash
npm install
npm run build
```

推荐免费路线是 Cloudflare Pages + GitHub：

- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: `Vite`

详细步骤见：

```text
docs/deploy-cloudflare-pages.md
```

第一阶段不需要登录、服务器或数据库，朋友打开 Cloudflare Pages 链接即可玩；每个人的成绩、错题、续答仍保存在自己的浏览器 `localStorage`。

## 云端登录与同步

第二阶段建议使用 Supabase Free 做邮箱登录或 Magic Link，只同步当前 `localStorage` 里的学习进度，不做排行榜、社交关系或后台 CMS。

数据库最小表结构已经准备在：

```text
supabase/user_progress.sql
```

核心 React/TypeScript 源码在 `src/App.tsx`、`src/questions.ts`、`src/movieTrainingDay10Questions.ts` 到 `src/movieTrainingDay02Questions.ts`、`src/movieTrainingQuestions.ts`、`src/movieClassicQuestions.ts` 和 `src/styles.css`。

## 附：粤语财经爆款雷达

仓库里另有一个独立子项目 `viral-radar/`，和粤语闯关游戏无关：每周扫一遍名单里的粤语/普通话/英文财经 YouTube 频道，筛出爆款（播放 ≥3w + 评论 ≥20 + 点赞 ≥1k）并拆解选题逻辑与爆款逻辑。用法见 [`viral-radar/README.md`](viral-radar/README.md)。
