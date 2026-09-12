/**
 * 条漫模式（梗卡流）的数据结构。
 *
 * 一条 strip = 一个梗／一个场景，5-6 格对白，带出 3-4 个词，
 * 末尾 1-2 道极轻的确认题。目标是单次 90 秒内看完。
 */

export type StripPanel = {
  /** 说话人；留空表示旁白格 */
  speaker?: string;
  /** 粤语台词（本项目惯例：简体字 + 粤语专用字） */
  canto: string;
  /** 普通话意思 */
  cn: string;
  /** 粤拼，只标这格的关键词 */
  jyut?: string;
  /** 旁白补充：梗从哪来、为什么好笑 */
  aside?: string;
};

export type StripWord = {
  term: string;
  jyut: string;
  means: string;
  /** 一句可以照抄去用的例句 */
  usage?: string;
};

export type StripCheck = {
  prompt: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
};

export type Strip = {
  /** 全局唯一，用作存档 key，一旦发布不要改 */
  id: string;
  packId: string;
  /** 梗名，一眼看到就想点 */
  title: string;
  /** 一句话钩子 */
  hook: string;
  /** 场景标签 */
  scene: string;
  panels: StripPanel[];
  words: StripWord[];
  checks: StripCheck[];
};

export type StripPack = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  accent: 'gold' | 'teal' | 'crimson';
  strips: Strip[];
};
