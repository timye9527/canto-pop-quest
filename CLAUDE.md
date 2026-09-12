# canto-pop-quest

粤语港乐闯关 —— React 19 + TypeScript + Vite 7 的纯前端应用，无后端、无环境变量。
所有进度、错题本、成绩都存在浏览器 `localStorage`。

## 常用命令

```bash
npm install      # 安装依赖
npm run dev      # 开发服务器 http://127.0.0.1:5173
npm run build    # tsc 类型检查 + 生产构建到 dist/
npm run preview  # 预览构建产物
npx tsc --noEmit # 只做类型检查
```

本项目目前没有配置 linter 和测试框架，`npm run build` 里的 `tsc` 是唯一的静态检查关卡。

## 结构

- `src/App.tsx` —— 主体 UI 与闯关逻辑
- `src/questions.ts`、`src/movie*Questions.ts` —— 各章节题库（每章一个文件）
- `src/types.ts` —— 题目与章节的类型定义
- `src/styles.css` —— 全局样式
- `public/_headers`、`public/_redirects` —— Cloudflare Pages 静态站配置
- `supabase/user_progress.sql` —— 云端同步（第二阶段）的最小表结构

## 部署

Cloudflare Pages：build command `npm run build`，output directory `dist`。
详见 `docs/deploy-cloudflare-pages.md`。
