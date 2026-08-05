#!/usr/bin/env node
// 生成演示数据，让站点在还没接 API 的时候就能跑起来、能被评估。
//   node scripts/make-demo.mjs
//
// 标题是按真实爆款结构编的样本，播放/点赞/评论是造的。
// demo:true 会让页面顶部一直挂着醒目的「演示数据」横幅，跑通 API 后自动消失。

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildVideo, aggregate, median, isoWeek, FORMATS } from './lib/analyze.mjs';
import { TOPICS, HOOKS } from './lib/taxonomy.mjs';
import { writeOut } from './lib/write.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// [handle, 标题, 播放, 点赞, 评论, 时长秒, 距今天数]
const SEED = [
  ['@RainIsHere', '前Banker拆解：月入3萬嘅打工仔，點樣5年儲到100萬？', 412000, 18600, 742, 843, 2],
  ['@30FinancialFreedomByAge30', '千祈唔好再買高息股！我用10年時間先明呢個道理', 268000, 11200, 903, 1120, 4],
  ['@Finance730hk', '恒指再插2000點，散戶而家仲有冇得救？（附3個保命位）', 187000, 5400, 621, 760, 1],
  ['@xiao_lin_shuo', '一条片讲清楚：美联储这次减息，到底谁在赚钱？', 1240000, 52000, 3100, 1480, 3],
  ['@fmchoyg', '兩個女仔用10萬蚊實測港股打新，第7日結果係……', 96000, 4800, 388, 920, 5],
  ['@BolooFinance', '香港樓市2026：買樓定係租樓？我計晒條數畀你睇', 143000, 6100, 1240, 1340, 2],
  ['@ChiefPaPa', '英伟达财报炸了，但我劝你先别追高', 386000, 14800, 1620, 680, 1],
  ['@GiantCutie-CH', '比特币破新高，币圈这次真的不一样吗？', 214000, 9400, 880, 540, 3],
  ['@AASTOCKS_AATV', '【開市直擊】今日恒指走勢分析 + 三隻焦點股', 41000, 720, 46, 1560, 1],
  ['@futuhk', '新手開戶全攻略：一次過講清楚港股美股點揀', 68000, 2100, 154, 1020, 6],
  ['@RagaFinance', '【財經拆局】全日直播回放 2026-08-04', 52000, 610, 88, 7200, 2],
  ['@InvesTalk', '强积金MPF點樣揀先唔會蝕？懶人包一次過睇晒', 118000, 4300, 296, 1180, 4],
  ['@ahju', '我輸咗80萬先學識嘅3件事', 156000, 8900, 1470, 640, 3],
  ['@chartreadercup', '技術分析教學：呢個型態出現，通常之後會點？', 47000, 1650, 122, 880, 5],
  ['@conita3706', '黃金衝上新高，而家追仲得唔得？', 62000, 1980, 173, 720, 2],
  ['@RickyTam', '譚紹興：呢隻藍籌股派息穩陣，但有個伏你要知', 89000, 3200, 264, 960, 4],
  ['@homilycharthk1998', '散戶VS大行：點解你永遠買喺最高位？', 74000, 2900, 412, 800, 6],
  ['@etnethk', '美國關稅新政出台，香港出口股點部署？', 55000, 1240, 96, 640, 1],
  ['@Money18-oncc', '新股暗盤速報：今日呢隻超購300倍', 34000, 1080, 58, 420, 3],
  ['@tigerbrokershk', '老虎證券教你：美股期權入門第一課', 22000, 480, 31, 1100, 5],
  ['@zlglobal_hk', '漲樂全球通：港股通標的最新調整', 9800, 210, 12, 540, 4],
  ['@ChiefGroup', '致富早晨：一分鐘睇晒今日重點', 6400, 95, 7, 180, 1],
  ['@vbrokers_app', '華盛市場速遞：本週焦點財報前瞻', 11200, 260, 18, 600, 2],
  ['@everbrightsecuritiesintl', '光大國際：內險股估值修復機會', 7900, 140, 9, 720, 3],
  ['@RainIsHere', '我戒咗買嘢一個月，慳返嘅錢竟然可以……', 128000, 6800, 534, 620, 6],
  ['@30FinancialFreedomByAge30', '被動收入唔係神話：我每月收12000蚊嘅3個來源', 342000, 15900, 1180, 1260, 6],
  ['@Finance730hk', '北上消費一日花500蚊，同香港差幾多？實測畀你睇', 205000, 7300, 1560, 980, 5],
  ['@fmchoyg', '保險經紀唔會話你知嘅5個伏', 87000, 4100, 620, 840, 1],
  ['@BolooFinance', '騰訊業績出爐：呢個數字先係關鍵', 76000, 2600, 208, 700, 3],
  ['@xiao_lin_shuo', '为什么全世界都在抢稳定币这块蛋糕？', 890000, 38000, 2400, 1620, 6],
  ['@ChiefPaPa', '这家公司暴雷前，其实早有3个信号', 298000, 12100, 1890, 760, 5],
  ['@AASTOCKS_AATV', '【收市總結】恒指收升380點，資金流向邊度？', 28000, 420, 33, 900, 2],
  ['@futuhk', '富途牛牛：AI選股功能實測，準唔準？', 31000, 890, 42, 780, 3],
  ['@ahju', '90後想上車？我幫你計清楚首期同供樓壓力', 112000, 5400, 980, 1080, 1],
  ['@InvesTalk', '減息週期下，債券基金仲值唔值得買？', 43000, 1420, 88, 940, 6],
  ['@GiantCutie-CH', '我把50万放进这个策略，30天后……', 178000, 7600, 1340, 690, 2],
  ['@RagaFinance', '【專訪】對沖基金經理：我點樣揀股', 94000, 2800, 316, 2640, 4],
  ['@TheDiaryOfACEO', 'The Money Expert: Why Most People Will Never Get Rich', 1860000, 48000, 4200, 4920, 3],
  ['@GrahamStephan', 'I Made $1,000,000 By Age 26 — Here Is Exactly How', 742000, 31000, 2100, 980, 5],
  ['@PBoyle', 'The Tariff Shock Nobody Priced In', 386000, 16400, 1980, 1140, 1],
  ['@allin', 'Rate Cuts, AI Capex, and the Coming Correction', 624000, 14200, 2600, 5400, 2],
  ['@CoinBureau', 'Stablecoins Are Eating Banking — Here Is What Happens Next', 298000, 11800, 1420, 1320, 4],
  ['@conita3706', '熊麗萍：呢個板塊我睇好，但唔好瞓身', 38000, 940, 61, 660, 6],
  ['@chartreadercup', '恒指技術面拆解：呢條線一破就危險', 52000, 1780, 143, 720, 1],
  ['@RickyTam', '一條片睇晒：2026年香港人可以買嘅高息產品', 132000, 4600, 372, 1440, 5]
];

// 各频道的基线中位数（近期非本周视频的播放中位数），用来算爆款系数。
const BASELINE = {
  '@RainIsHere': 96000, '@30FinancialFreedomByAge30': 58000, '@Finance730hk': 62000,
  '@xiao_lin_shuo': 620000, '@fmchoyg': 34000, '@BolooFinance': 48000,
  '@ChiefPaPa': 142000, '@GiantCutie-CH': 84000, '@AASTOCKS_AATV': 26000,
  '@futuhk': 24000, '@RagaFinance': 41000, '@InvesTalk': 38000,
  '@ahju': 44000, '@chartreadercup': 29000, '@conita3706': 31000,
  '@RickyTam': 46000, '@homilycharthk1998': 27000, '@etnethk': 33000,
  '@Money18-oncc': 18000, '@tigerbrokershk': 14000, '@zlglobal_hk': 7200,
  '@ChiefGroup': 5100, '@vbrokers_app': 8600, '@everbrightsecuritiesintl': 6300,
  '@TheDiaryOfACEO': 940000, '@GrahamStephan': 410000, '@PBoyle': 240000,
  '@allin': 380000, '@CoinBureau': 190000
};

async function main() {
  const config = JSON.parse(await fs.readFile(path.join(ROOT, 'config.json'), 'utf8'));
  const { channels } = JSON.parse(await fs.readFile(path.join(ROOT, 'channels.json'), 'utf8'));
  const byHandle = Object.fromEntries(channels.map((c) => [c.handle, c]));
  const now = new Date();

  const videos = [];
  SEED.forEach(([handle, title, views, likes, comments, dur, daysAgo], i) => {
    const ch = byHandle[handle];
    if (!ch) throw new Error(`演示数据引用了名单里没有的频道：${handle}`);
    const publishedAt = new Date(now.getTime() - daysAgo * 86400000).toISOString();
    videos.push(
      buildVideo(
        {
          id: `demo${String(i).padStart(3, '0')}`,
          title,
          description: '',
          publishedAt,
          thumb: '',
          views,
          likes,
          comments,
          durationSec: dur
        },
        ch,
        BASELINE[handle] ?? 0,
        config.threshold
      )
    );
  });

  videos.sort((a, b) => b.score - a.score);
  const channelMeta = channels.map((c) => ({ ...c, medianViews: BASELINE[c.handle] ?? 0 }));
  const agg = aggregate(videos, channelMeta);
  const hits = videos.filter((v) => v.isHit);
  const week = isoWeek(now);

  await writeOut(
    ROOT,
    {
      generatedAt: now.toISOString(),
      demo: true,
      week,
      lookbackDays: config.lookbackDays,
      threshold: config.threshold,
      warnings: [],
      summary: {
        channels: channelMeta.length,
        uploads: videos.length,
        hits: hits.length,
        hitRate: Number(((hits.length / videos.length) * 100).toFixed(0)),
        medianHitViews: median(hits.map((v) => v.views))
      },
      videos,
      agg,
      defs: { topics: TOPICS, hooks: HOOKS, formats: FORMATS }
    },
    week.id
  );

  console.log(`演示数据已生成：${videos.length} 条，其中 ${hits.length} 条达标（${week.id}）`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
