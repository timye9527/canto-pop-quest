import type { Question } from './types';

export const movieTrainingDay07ChapterTitle = "15天港片粤语训练 Day 07：创世纪，商业、野心与谈判";

type Module = NonNullable<Question['trainingModule']>;

type RawQuestion = { cantoneseText: string; prompt: string; correctAnswer: string; distractors: [string, string, string]; explanation: string; trainingModule: Module; movieTitle: string; pronunciationHint: string; workplaceTip?: string; movieNote?: string; };

const targetIndexes = [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1];
const note = (title: string, extra?: string) => extra || `受${title}一类港片/港剧/人物风格启发，句子为原创。`;
const rawQuestions: RawQuestion[] = [
  {
    cantoneseText: "佢讲愿景，真正要你畀嘅系时间同现金流。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "愿景背后是在争取资源承诺",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "《创世纪》式商战",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "一个项目最贵唔系地皮，系所有人对未来嘅想像。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "预期会影响价格和决策",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "地产谈判场",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“大家一齐赢”，但分账方式未讲。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "共赢口号还没落到利益分配",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "商业会议场",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“机会”两个字好靓，但风险通常写喺脚注。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "机会叙事容易淡化风险",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "投资路演场",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "你以为佢想签约，其实佢想拖时间。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "谈判动作可能是争取时间",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "商战场景",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "承诺未落纸，听落几动人都只系风。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "口头承诺不等于可执行协议",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "合约谈判",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢肯让价，可能系因为更想要控制权。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "价格让步可能换取更大权力",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "董事会场",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "讲生意唔怕直接，怕直接到冇后路。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "清楚表达也要保留回旋空间",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "商业对白",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“长期合作”要先睇短期边个埋单。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "长期关系不能掩盖当前成本",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "客户谈判",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲市场好大，唔代表你嘅位置好稳。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "市场规模不等于个人优势",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "创业会议",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "商业最迷人处，系人人都话自己讲事实。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "事实常被立场选择性呈现",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "商战观察",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "一杯红酒可以庆功，也可以测试谁先松口。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "社交场也是谈判延伸",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "会所谈判场",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我考虑下”喺谈判桌上，可能系拒绝，也可能系抬价。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "拖延可以是策略信号",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "商业谈判",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“我唔急”，但秘书已经约咗三次会。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "字面不急，动作很急",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "商业谈判",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你开个价”其实可能系等你暴露底线。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "让对方先报价是在探底",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "报价场景",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我尊重专业”之后加一堆条件，即系未真尊重。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "尊重话术可能包装限制",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "甲方会议",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲“朋友价”，通常想你忘记成本价。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "关系词可能用来压低价格",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "商业人情",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我只要一个承诺”听落细，其实可能好重。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "小承诺可能绑定长期责任",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "合伙谈判",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“呢单嘢唔难”往往系想你快啲接。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "低估难度是一种推进话术",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "项目会议",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你有冇信心”不一定问能力，可能问是否愿意背锅。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "信心问题可能转移责任",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "职场商战",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“今日唔签，机会就冇”是在制造稀缺感。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "限时压力是谈判工具",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "签约场景",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“我哋好透明”，但附件永远最后先发。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "透明声明要看信息是否同步",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "商务协作",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你自己衡量”有时系把风险推返畀你。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "表面自由，实际转移风险",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "商业决策",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“大家咁熟”之后通常有难讲嘅条件。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "熟人关系常被用来降低防备",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "人情交易",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我唔想赢晒”可能只是想赢得好看。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "谦让话术不等于实际让利",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "商战对白",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“后面有大把机会”如果没有清单，就是安慰。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "未来机会需要具体化才可靠",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "商业承诺",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "会议室里投影全是增长曲线，财务却一直沉默。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "风险可能藏在现金流里",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "董事会场景",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "签约前一刻，对方突然提“顺便加一条”。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "临门条件可能是关键博弈",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "合约场景",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "酒会上人人讲合作，只有两个人在讲交付日期。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "真正谈生意的人关注执行",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "会所场景",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "项目名改得好宏大，但预算表少了一页。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "包装升级可能遮住现实缺口",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "地产会议",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "客户不断夸团队专业，却迟迟不确认预算。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "赞美可能替代不了付款承诺",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "客户会议",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "老板说“先做出气势”，团队开始交换眼神。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "气势不能替代资源安排",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "创业办公室",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "竞争对手突然变客气，通常不是突然欣赏你。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "客气可能是试探或拖延",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "商战场景",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "饭局尾声才讲真正条件，前面都是暖场。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "关键条件常在关系升温后出现",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "商务饭局",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "把“大家一齐赢”转成会议追问。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "请先明确收益、成本和责任怎么分",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "商业沟通",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "对方只讲愿景，你要拉回执行。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "愿景我认同，下一步资源和时间表是什么",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "商业沟通",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "客户想用朋友价压你，你怎么回？",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "我重视关系，所以更要把成本讲清楚",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "商业沟通",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "合伙人要你先承诺，你要设条件。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "我可以承诺方向，但需要先确认边界",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "商业沟通",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "老板让团队“搏一搏”，你要稳住。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "可以尝试，但需要止损线和负责人",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "商业沟通",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "供应商说“以后补返”，你怎么写清楚？",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "后续补偿请写进交付节点和金额",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "商业沟通",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想拒绝模糊合作。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "目前条件不够清晰，我建议先不进入执行",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "商业沟通",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想保留关系但不让步太多。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "这部分我可以调整，核心条件需要保留",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "商业沟通",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“考虑下”拖慢讲，多数是保留空间，不是立即答应。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "听拖音判断是否留价码",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语谈判听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“朋友价”讲得太亲热，要小心关系压价。",
    prompt: "听这句时最该留意什么？",
    correctAnswer: "听亲昵称呼是否在降低戒心",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语商务听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“顺便”两个字轻轻带过，可能藏着额外要求。",
    prompt: "这句的读音/停顿重点是？",
    correctAnswer: "听轻描淡写处是否有新增成本",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语商务听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "“唔急”如果后面马上问日期，就不是真不急。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "听前后句矛盾判断真实需求",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语商务听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：创世纪式训练最重要的是？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "把愿景翻成资源、责任和风险",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day07复盘",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：商战对白里最容易误判什么？",
    prompt: "这题想训练的底层能力是？",
    correctAnswer: "把漂亮承诺当成可执行合约",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day07复盘",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：成人学粤语怎么借商战剧？",
    prompt: "本章方法论更接近哪一项？",
    correctAnswer: "练听条件、底线、试探和回旋",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day07复盘",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：今天最该带走的一句原则是？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "讲合作前先讲清楚怎么落地",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day07复盘",
    pronunciationHint: "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    movieNote: "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  }
];

export const movieTrainingDay07Questions: Question[] = rawQuestions.map((raw, index) => {
  const answerIndex = targetIndexes[index % targetIndexes.length];
  const choices = [...raw.distractors];
  choices.splice(answerIndex, 0, raw.correctAnswer);
  const label = raw.trainingModule === 'toneEar' ? '进阶听感' : raw.trainingModule === 'sceneInference' ? '场景推断' : raw.trainingModule === 'workplaceTransfer' ? '职场/生活迁移' : raw.trainingModule === 'reviewMix' ? '混合复盘' : raw.trainingModule === 'pragmaticTone' ? '语气潜台词' : '常用句意';
  return { id: index + 1, prompt: raw.prompt, cantoneseText: raw.cantoneseText, spokenText: raw.cantoneseText, choices, answerIndex, explanation: raw.explanation, theme: label, difficulty: '挑战', questionType: raw.trainingModule === 'toneEar' ? 'phonetic' : raw.trainingModule === 'sceneInference' ? 'scene' : raw.trainingModule === 'pragmaticTone' ? 'tone' : 'meaning', skillTag: label, pronunciationHint: raw.pronunciationHint, phoneticFocus: raw.trainingModule === 'toneEar' ? label : undefined, trainingModule: raw.trainingModule, dayTag: 'Day 07', movieTitle: raw.movieTitle, movieNote: note(raw.movieTitle, raw.movieNote), workplaceTip: raw.workplaceTip };
});
