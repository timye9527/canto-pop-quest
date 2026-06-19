import type { Question } from './types';

export const movieTrainingDay09ChapterTitle = "15天港片粤语训练 Day 09：周润发经典港片气场";

type Module = NonNullable<Question['trainingModule']>;

type RawQuestion = { cantoneseText: string; prompt: string; correctAnswer: string; distractors: [string, string, string]; explanation: string; trainingModule: Module; movieTitle: string; pronunciationHint: string; workplaceTip?: string; movieNote?: string; };

const targetIndexes = [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1];
const note = (title: string, extra?: string) => extra || `受${title}一类港片/港剧/人物风格启发，句子为原创。`;
const rawQuestions: RawQuestion[] = [
  {
    cantoneseText: "佢未开口，已经畀人感觉件事有分寸。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "气场来自克制和边界感",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "发哥式港片气场",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "一句“慢慢嚟”，唔系拖，是稳住场面。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "放慢节奏可以控制局面",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "英雄片场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "真正有底气嘅人，唔使每句都大声。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "底气不等于音量",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "江湖饭局",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢肯让一步，通常系知道自己企得稳。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "让步可能来自自信而非软弱",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "港片对峙",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“有数得计”唔只是钱，仲有情义同后果。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "算账也包含人情和代价",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "江湖/商场场",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "发哥式潇洒，重点系输都唔乱阵脚。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "从容体现在逆风时不失控",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "赌片气质",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "一杯茶放低，可能比一句狠话更有力。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "动作可以替代夸张威胁",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "港片静场",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲义气，但唔会用义气逼人。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "真正义气不把关系当筹码",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "兄弟场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“畀条路行”是体面，也是控制冲突。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "给退路能让局面可收拾",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "江湖谈判",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "有啲场面话，讲少一句反而更重。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "留白可以增加话语重量",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "英雄片对白",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢唔急住赢，先令人觉得可能会赢。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "节奏慢反而显示掌控感",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "赌局场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "气定神闲唔系冇情绪，系情绪有位置放。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "从容是把情绪放在合适位置",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "人物气质复盘",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“呢件事我记住”可以是承诺，也可以是警告。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "要靠语气判断是感谢还是提醒",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "江湖对白",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢笑住话“唔紧要”，但手已经停低。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "字面放过，动作未必放过",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "港片对峙",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“大家都系朋友”有时是圆场，有时是划线。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "朋友话术可缓和也可设边界",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "饭局场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你慢慢讲”如果眼神好定，通常是要对方露底。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "耐心可能是掌控节奏",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "谈判场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我唔想难为你”可能是最后通牒前的礼貌。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "客气话可能降低冲突表面温度",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "江湖谈判",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“算我欠你一次”听落轻，其实是关系债。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "欠人情是长期承诺",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "兄弟情义",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲“你决定”，但坐姿完全冇退。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "字面放权，气势仍在场",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "赌桌场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“俾个面”讲得轻，压力可能更大。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "轻声请求也可能带强关系压力",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "江湖饭局",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我信你”之后马上加条件，说明信任有限。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "信任声明要看后续边界",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "合作场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“唔好令我失望”不是鼓励，是重量。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "期待被包装成压力",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "英雄片场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“冇必要闹大”可能是在给双方下台阶。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "压低冲突是为了保留体面",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "街头对峙",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“今日到呢度”有时不是结束，是暂停。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "收场语可能保留后续动作",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "谈判收尾",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你有你做，我有我交代”是边界，也是警告。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "各自责任被清楚划开",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "江湖/职场场",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我只讲一次”未必凶，可能是自信。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "少说一次显示确定性",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "港片气场",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "赌桌上所有人都催，只有佢慢慢整理筹码。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "他在用节奏压住场面",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "赌片场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "饭局气氛紧，佢先替对方倒茶。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "动作在帮双方保全面子",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "江湖饭局",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "兄弟争执到最激，佢只讲一句“坐低”。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "短句在重建秩序",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "英雄片场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "码头风很大，没人说狠话，反而更紧。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "安静场面带出高压对峙",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "港片码头",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "对方挑衅不断，佢只问“讲完未”。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "不接挑衅是一种掌控",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "街头对峙",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "有人递烟，佢摆手，却留低听完。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "拒绝亲近但保留沟通",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "江湖场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "牌局结束后，赢家没有马上庆祝。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "克制比炫耀更显气场",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "赌片收场",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "旧友重逢，第一句不是问候，是讲交代。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "关系里还有未处理的责任",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "兄弟场景",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "把“慢慢嚟”转成会议控场。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "我们先把信息讲完整，再决定下一步",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "从容沟通迁移",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "对方挑衅你，你想保持气场。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "这个问题我会回应，但先回到事实",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "从容沟通迁移",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想给对方台阶。",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "我们可以先停在这里，保留调整空间",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "从容沟通迁移",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想表达底线但不撕破脸。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "这部分我可以理解，但底线不能再退",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "从容沟通迁移",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "同事情绪很冲，你怎么稳住？",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "我听到你的不满，我们逐项处理",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "从容沟通迁移",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "客户压价，你想保留分寸。",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "价格可以谈，但交付标准也要一起谈",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "从容沟通迁移",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想承诺但不乱开支票。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "我可以负责推进，但结果要看这些条件",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "从容沟通迁移",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想结束无效争论。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "今天先到这里，下一步按事实再谈",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "从容沟通迁移",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“慢慢嚟”低声讲，是稳场；急声讲，可能是压火。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "听声线判断从容还是克制怒气",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语气场听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“俾个面”轻轻讲，关系压力可能更强。",
    prompt: "听这句时最该留意什么？",
    correctAnswer: "听轻重判断请求背后的重量",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语江湖听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我记住”短暂停顿后说，通常带后续意味。",
    prompt: "这句的读音/停顿重点是？",
    correctAnswer: "听停顿判断承诺或警告",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语对峙听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "“到呢度”语尾下沉，常有收场决定感。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "听尾音判断是否真正结束",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语收场听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：发哥式气场训练什么？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "在压力里保持分寸、台阶和底线",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day09复盘",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：为什么少说有时更有力？",
    prompt: "这题想训练的底层能力是？",
    correctAnswer: "留白能让关系和后果自己显出来",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day09复盘",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：职场迁移的关键是？",
    prompt: "本章方法论更接近哪一项？",
    correctAnswer: "不被挑衅带节奏，同时说清边界",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day09复盘",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：今天的粤语感知重点是？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "听轻声、停顿和收场语里的重量",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day09复盘",
    pronunciationHint: "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    movieNote: "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  }
];

export const movieTrainingDay09Questions: Question[] = rawQuestions.map((raw, index) => {
  const answerIndex = targetIndexes[index % targetIndexes.length];
  const choices = [...raw.distractors];
  choices.splice(answerIndex, 0, raw.correctAnswer);
  const label = raw.trainingModule === 'toneEar' ? '进阶听感' : raw.trainingModule === 'sceneInference' ? '场景推断' : raw.trainingModule === 'workplaceTransfer' ? '职场/生活迁移' : raw.trainingModule === 'reviewMix' ? '混合复盘' : raw.trainingModule === 'pragmaticTone' ? '语气潜台词' : '常用句意';
  return { id: index + 1, prompt: raw.prompt, cantoneseText: raw.cantoneseText, spokenText: raw.cantoneseText, choices, answerIndex, explanation: raw.explanation, theme: label, difficulty: '挑战', questionType: raw.trainingModule === 'toneEar' ? 'phonetic' : raw.trainingModule === 'sceneInference' ? 'scene' : raw.trainingModule === 'pragmaticTone' ? 'tone' : 'meaning', skillTag: label, pronunciationHint: raw.pronunciationHint, phoneticFocus: raw.trainingModule === 'toneEar' ? label : undefined, trainingModule: raw.trainingModule, dayTag: 'Day 09', movieTitle: raw.movieTitle, movieNote: note(raw.movieTitle, raw.movieNote), workplaceTip: raw.workplaceTip };
});
