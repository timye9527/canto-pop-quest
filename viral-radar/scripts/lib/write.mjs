// 周报落盘。同时写 JSON（给脚本/CI 用）和 JS（给 file:// 直接打开的页面用）。

import fs from 'node:fs/promises';
import path from 'node:path';

export async function writeOut(root, payload, weekId) {
  const dataDir = path.join(root, 'data');
  await fs.mkdir(path.join(dataDir, 'weeks'), { recursive: true });
  const json = JSON.stringify(payload, null, 2);

  await fs.writeFile(path.join(dataDir, 'weeks', `${weekId}.json`), json);
  await fs.writeFile(path.join(dataDir, 'latest.json'), json);
  // 双击打开 index.html 时 fetch() 会被 file:// 的 CORS 拦掉，
  // 所以同时写一份 JS 版本，页面用 <script> 标签兜底加载。
  await fs.writeFile(path.join(dataDir, 'latest.js'), `window.__VIRAL_DATA__ = ${json};\n`);

  const weeks = (await fs.readdir(path.join(dataDir, 'weeks')))
    .filter((f) => f.endsWith('.json') && f !== 'index.json')
    .map((f) => f.replace('.json', ''))
    .sort()
    .reverse();
  await fs.writeFile(path.join(dataDir, 'weeks', 'index.json'), JSON.stringify(weeks, null, 2));
  return weeks;
}
