import type { Question } from './types';

export const movieTrainingDay08ChapterTitle = "15天港片粤语训练 Day 08：新闻女王，表达、立场与职场权力";

type Module = NonNullable<Question['trainingModule']>;

type RawQuestion = { cantoneseText: string; prompt: string; correctAnswer: string; distractors: [string, string, string]; explanation: string; trainingModule: Module; movieTitle: string; pronunciationHint: string; workplaceTip?: string; movieNote?: string; };

const targetIndexes = [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1];
const note = (title: string, extra?: string) => extra || `受${title}一类港片/港剧/人物风格启发，句子为原创。`;
const rawQuestions: RawQuestion[] = [
  {
    cantoneseText: "镜头前讲中立，镜头后先知道边个有立场。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "中立表达背后也可能有权力选择",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "《新闻女王》式职场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "一句“确认咗未”，比十句热血更专业。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "事实核实比情绪推动更重要",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "新闻编辑室",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "标题唔系越响越好，系要响得有根据。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "表达要有力度也要有依据",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "新闻标题场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢抢住发问，未必系勇，可能系抢话语权。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "发问也是争夺位置的动作",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "发布会场景",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“观众想知”有时系专业判断，有时系收视借口。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "观众名义可能包装商业压力",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "电视台办公室",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "镜头一开，犹豫都会变成新闻。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "公开场合会放大微小反应",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "直播现场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "你讲事实，但排序已经表达咗态度。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "信息顺序本身有立场",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "新闻剪辑室",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“快”唔代表准，新闻最怕快到冇回头。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "速度不能牺牲准确性",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "突发新闻场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“我只系问问题”，但问题有方向。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "提问方式可以暗含立场",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "采访现场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "主播一句停顿，可能救返成段访问。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "节奏控制能改变现场气氛",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "直播间",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“专业”唔系冇情绪，系情绪唔压过事实。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "专业是管理情绪而非消灭情绪",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "新闻职场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "后台最吵，前台先显得镇定。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "台前稳定来自后台协作",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "电视台片场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你确定？”喺编辑室，可能系提醒，也可能系挑战。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "同一句追问可保护也可施压",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "新闻编辑室",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“你负责”，重点未必系信任，而系归责。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "授权可能同时绑定责任",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "职场权力场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“照事实讲”如果事实只畀你一半，就好危险。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "信息不完整会影响中立",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "新闻职场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“呢条线你跟”听落系机会，也可能系试炼。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "任务分配可能是位置考验",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "记者线索场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲“唔好带情绪”，但自己先定咗标题。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "要求客观者未必真的客观",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "编辑会议",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我畀你上镜”未必系奖励，可能系推你挡火。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "曝光机会也可能带风险",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "直播职场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“观众会明”如果没有解释，就是偷懒。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "不能把理解成本全推给观众",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "新闻制作",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“剪短啲”，实际可能是删走争议。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "技术要求可能隐藏立场选择",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "剪辑室",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“先出街再补”是新闻里最危险的快。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "先发布后补救风险很高",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "突发现场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我冇立场”有时只是未讲出口。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "无立场声明需要事实检验",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "采访场景",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你问得好尖”可以是夸奖，也可以是警告。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "赞美里可能带提醒",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "发布会后台",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“保持距离”不是冷血，是保留判断力。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "距离感是专业能力",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "新闻现场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你想做英雄？”是在把专业追问变成个人动机。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "质疑动机可转移问题焦点",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "职场争论",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“今晚一定要有画面”说明压力来自效果。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "画面需求会影响报道选择",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "电视台指挥",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "直播前十秒，导播突然喊“确认来源”。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "团队仍在守事实底线",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "直播间场景",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "发布会上记者连续追问，发言人只重复同一句。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "双方在话语权上拉扯",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "发布会场景",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "主播念完稿停半秒，摄影棚突然安静。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "停顿让信息重量显出来",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "新闻直播",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "编辑会上有人只问“边个负责”。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "焦点从事实转到责任归属",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "职场会议",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "外景记者被催快点，但手机讯号断续。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "速度和准确性正在冲突",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "突发现场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "剪辑师问“要保留呢句吗”，全组望向主编。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "一句话可能改变立场呈现",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "剪辑室场景",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "新人第一次上镜，前辈只提醒“唔好抢结论”。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "专业训练是先呈现事实",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "新闻职场",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "深夜办公室只有标题组未走。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "表达框架决定明天的公共理解",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "报馆/电视台",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "把“确认咗未”转成会议表达。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "这个结论的来源和证据可以再确认吗",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "专业表达迁移",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "有人抢话语权，你想稳住讨论。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "我们先让事实讲完，再进入判断",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "专业表达迁移",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "同事只讲情绪，你要拉回事实。",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "我理解感受，但先把事实顺序理清",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "专业表达迁移",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "上司要求快，你担心质量。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "可以加快，但需要保留核对时间",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "专业表达迁移",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "对方质疑你动机，你如何回应？",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "我的动机可以讨论，但问题本身仍要回答",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "专业表达迁移",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想表达立场但不失专业。",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "我的判断基于这些事实，不是个人好恶",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "专业表达迁移",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "客户只要漂亮结论，你要提醒风险。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "呈现可以简洁，但限制条件要保留",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "专业表达迁移",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "团队要删掉不利信息，你怎么接？",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "删减可以，但不能改变事实方向",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "专业表达迁移",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“确认咗未”重音落在“确认”，是专业提醒；落在“未”可能带追责。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "听重音判断提醒还是追责",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语职场听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你负责”语气平稳和压低，责任重量不同。",
    prompt: "听这句时最该留意什么？",
    correctAnswer: "听声线压力判断授权强度",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语职场听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我只系问问题”停顿太长，可能是在防守。",
    prompt: "这句的读音/停顿重点是？",
    correctAnswer: "听停顿判断是否预设立场",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语采访听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "“快啲”连讲两次，通常不是鼓励，是现场压力。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "听重复判断紧急程度",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语现场听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：新闻职场题训练什么？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "在快节奏里听懂事实、立场和责任",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day08复盘",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：为什么要练提问语气？",
    prompt: "这题想训练的底层能力是？",
    correctAnswer: "同一句问题可以求证，也可以施压",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day08复盘",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：职场表达最实用的迁移是？",
    prompt: "本章方法论更接近哪一项？",
    correctAnswer: "把观点放在证据后面说",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day08复盘",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：今天的粤语入口是什么？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "用新闻场景练专业、边界和话语权",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day08复盘",
    pronunciationHint: "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    movieNote: "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  }
];

export const movieTrainingDay08Questions: Question[] = rawQuestions.map((raw, index) => {
  const answerIndex = targetIndexes[index % targetIndexes.length];
  const choices = [...raw.distractors];
  choices.splice(answerIndex, 0, raw.correctAnswer);
  const label = raw.trainingModule === 'toneEar' ? '进阶听感' : raw.trainingModule === 'sceneInference' ? '场景推断' : raw.trainingModule === 'workplaceTransfer' ? '职场/生活迁移' : raw.trainingModule === 'reviewMix' ? '混合复盘' : raw.trainingModule === 'pragmaticTone' ? '语气潜台词' : '常用句意';
  return { id: index + 1, prompt: raw.prompt, cantoneseText: raw.cantoneseText, spokenText: raw.cantoneseText, choices, answerIndex, explanation: raw.explanation, theme: label, difficulty: '挑战', questionType: raw.trainingModule === 'toneEar' ? 'phonetic' : raw.trainingModule === 'sceneInference' ? 'scene' : raw.trainingModule === 'pragmaticTone' ? 'tone' : 'meaning', skillTag: label, pronunciationHint: raw.pronunciationHint, phoneticFocus: raw.trainingModule === 'toneEar' ? label : undefined, trainingModule: raw.trainingModule, dayTag: 'Day 08', movieTitle: raw.movieTitle, movieNote: note(raw.movieTitle, raw.movieNote), workplaceTip: raw.workplaceTip };
});
