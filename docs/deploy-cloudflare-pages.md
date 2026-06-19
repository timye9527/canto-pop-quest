# 粤语闯关上线指南

## 推荐路线

第一阶段先做免费静态上线：Cloudflare Pages + GitHub。上线后朋友打开链接即可玩，进度仍保存在各自浏览器里。

第二阶段再加 Supabase 登录与云同步。登录不是第一阶段必需项，因为它会引入账号、数据库、同步冲突和隐私提示。

## 第一阶段：免费静态上线

1. 在 GitHub 新建一个仓库，例如 `canto-pop-quest`。
2. 把当前项目上传到 GitHub。不要上传 `node_modules/` 和 `dist/`，它们已经写入 `.gitignore`。
3. 打开 Cloudflare Dashboard，进入 `Workers & Pages`，选择 `Create application` -> `Pages`。
4. 连接 GitHub 仓库，构建设置填：
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: 留空
5. 部署成功后，用 Cloudflare 给的 `*.pages.dev` 链接测试。

## 本地上线前检查

```bash
npm install
npm run build
```

构建成功后会生成 `dist/`。当前题库较多，Vite 可能提示 JS chunk 超过 500KB；这不影响部署。后续如果题库继续扩大，再考虑按章节拆包。

## 第二阶段：Supabase 云同步

1. 在 Supabase 创建免费项目。
2. 进入 SQL Editor，执行 `supabase/user_progress.sql`。
3. 使用邮箱 Magic Link 或邮箱密码登录，不使用手机号，避免短信成本。
4. 前端接入时只同步 `localStorage` 里的 `canto-pop-quest-progress-v2` 结构：
   - 未登录：继续本地保存。
   - 首次登录：本地进度合并上传云端。
   - 已登录：优先读取云端进度，并在完成答题/退出保存/错题本变化时写回。
5. Supabase 不可用时回退本地模式，页面提示“云同步暂不可用，本机进度仍会保存”。

## 内容边界

公开传播时继续使用“短摘 + 原创场景句”。作品名、人物风格和名场面关键词可以作为学习钩子，不大段复刻电影台词、歌词或书籍内容。
