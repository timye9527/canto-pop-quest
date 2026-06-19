import type { Question } from './types';

export const movieTrainingDay05ChapterTitle = "15天港片粤语训练 Day 05：男女交往粤语边界";

type Module = NonNullable<Question['trainingModule']>;

type RawQuestion = { cantoneseText: string; prompt: string; correctAnswer: string; distractors: [string, string, string]; explanation: string; trainingModule: Module; movieTitle: string; pronunciationHint: string; workplaceTip?: string; movieNote?: string; };

const targetIndexes = [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1];
const note = (title: string, extra?: string) => extra || `受${title}一类港片/港剧/人物风格启发，句子为原创。`;
const rawQuestions: RawQuestion[] = [
  {
    cantoneseText: "佢话“你唔使送啦”，但又行慢咗半步。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "对方嘴上客气，身体语言仍在试探",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》式都市关系",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "一句“得闲先讲”，可以系留门，亦可以系落闸。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "同一句客套话要结合关系和语气判断",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》式都市关系",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "你讲到好洒脱，其实每句都留咗尾巴。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "表面放手，实际还保留期待",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》式都市关系",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢唔系唔覆你，系等你先讲清楚你想点。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "沉默可能是在逼对方表态",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》式都市关系",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "你话冇所谓，但拣餐厅都拣到有立场。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "小选择会暴露真实偏好",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "茶餐厅约会场景",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我唔介意”之后加个“不过”，先系重点。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "转折后的内容才是真边界",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "都市感情对白",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "你请我睇戏，唔代表我要演你写好嘅剧本。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "接受邀请不等于接受关系安排",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "港片约会桥段",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "两个人最怕唔系嘈，系嘈完冇人收拾。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "冲突后的修复比争输赢重要",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "都市感情对白",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲“你开心就得”，但眼神唔似真放手。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "字面祝福里可能藏着失落",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐式感情场",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想要答案，佢只畀你天气报告。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "对方在用闲聊回避核心问题",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "街角等车场景",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "暧昧最贵，贵在每句话都要估价。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "暧昧消耗在不确定的解读成本",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "都市关系观察",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "讲边界唔系冷淡，系唔想大家乱估。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "边界是为了减少误解",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "关系沟通场景",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你唔好谂多咗”有时本身就好值得谂。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "否认过快，反而可能透露心虚",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "都市感情对白",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我都系关心你啫”如果讲到好大声，就未必只系关心。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "关心可能变成控制或施压",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "《男亲女爱》式嘴仗",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“你自己决定”，但每个选项都帮你打分。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "表面放权，实际仍在干预",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "都市关系观察",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我冇嬲”讲三次，通常已经有事。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "重复否认常常代表情绪未消",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "港剧情侣争执",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "你话“我随便”，其实系想对方记得你嘅偏好。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "随便里可能藏着期待被理解",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "茶餐厅点餐场景",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢笑住讲“你真系好忙”，个笑唔一定系开心。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "笑可以包装不满和试探",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "办公室暧昧场",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“下次先啦”如果冇下次时间，就只系好听嘅拒绝。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "没有具体安排，多数只是婉拒",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "城市约会对白",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "你讲“我明”，但马上解释自己，听落似唔明。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "急于辩解会削弱理解感",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "感情修复场景",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“都几好呀”尾音一沉，就唔系真夸。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "尾音和停顿会改变评价强度",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "港式口语听感",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢问“你同边个去”，问嘅未必系地点。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "问题背后可能是关系安全感",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "港剧感情线",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“算啦”如果讲得太轻，可能系暂时唔想爆。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "轻轻收口不代表真正放下",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "街头告别场景",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "你话“我唔想管你”，但下一句开始排时间表。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "话语和行为不一致",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "都市关系观察",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你开心咪得啰”有时系祝福，有时系撤退。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "要分辨祝福和情绪退出",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "港乐式告别",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲“冇嘢”，眼神却避开你。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "非语言信号可能比字面更真实",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "感情对峙场",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "两个人喺戏院门口争“睇咩都得”，但谁都唔买飞。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "双方都在等对方先表态",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "港片约会开场",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "茶餐厅里一人不停搅奶茶，另一人不停睇手机。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "对话已经卡在未说出口的问题",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "茶餐厅感情场",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“我送你落楼”，对方回“你送到呢度就得”。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "对方在温和设定距离",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "楼下告别桥段",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "朋友聚会突然安静，因为有人提到“旧同学”。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "旧关系触发了微妙情绪",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "港剧聚会场",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "雨夜等车，佢只问“冻唔冻”，冇问“留唔留”。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "关心还停在安全距离",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "港乐式雨夜",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "K房有人点咗首苦情歌，全桌突然望向同一个人。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "歌曲变成众人心照的暗示",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "K房感情场",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "对方把“下次约”讲得好自然，但即刻转话题。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "更像礼貌收场而非真实邀约",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "城市街头桥段",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "一场误会之后，最先讲笑嗰个未必最轻松。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "玩笑可能是在帮场面降温",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "无厘头关系场",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "把“你唔好成日估我”转成伴侣沟通。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "我希望你直接问我，不要先替我下结论",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "关系沟通迁移",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "把“我唔系你嘅项目”转成边界表达。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "我愿意沟通，但不想被安排成任务",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "关系沟通迁移",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "对方迟迟不确认约会，你想不失礼地追问。",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "如果今晚不方便，我们可以直接改期",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "关系沟通迁移",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想拒绝暧昧但保留体面。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "我珍惜相处，但不想给你错误期待",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "关系沟通迁移",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "对方用玩笑掩饰冒犯，你想提醒。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "这个玩笑我听到不太舒服，我们换个讲法",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "关系沟通迁移",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想从猜测回到事实。",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "我不想再估，不如讲清楚各自想法",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "关系沟通迁移",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "对方说“你变咗”，你想稳住对话。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "我可能有变化，但可以具体讲边一点吗",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "关系沟通迁移",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想修复误会，不想认输式道歉。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "我刚才讲法不够好，但我想重新解释",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "关系沟通迁移",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "听“得闲先讲”时，重点不是“得闲”，而是后面有没有具体时间。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "留意是否有具体承诺，而非只听客套",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语约会听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“冇嬲”如果重音压喺“冇”，可能系压住情绪。",
    prompt: "听这句时最该留意什么？",
    correctAnswer: "听重音位置判断否认是否勉强",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语情绪听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你开心就得”尾音上扬和下沉，意思可以差好远。",
    prompt: "这句的读音/停顿重点是？",
    correctAnswer: "尾音决定它是祝福还是不满",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语尾音听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "“唔紧要”讲得太快，可能系不想继续争。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "语速快可能代表想结束话题",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语节奏听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：男女交往题最该训练什么？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "把暧昧、边界和拒绝听成具体关系动作",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day05复盘",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：为什么不只背词汇？",
    prompt: "这题想训练的底层能力是？",
    correctAnswer: "关系里同一句话会因语气变成不同动作",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day05复盘",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：遇到“冇所谓”该怎么练？",
    prompt: "本章方法论更接近哪一项？",
    correctAnswer: "结合表情、后续行动和具体选择判断",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day05复盘",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：今天最值得迁移到现实的是？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "少猜、多问、讲边界但保留体面",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day05复盘",
    pronunciationHint: "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    movieNote: "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  }
];

export const movieTrainingDay05Questions: Question[] = rawQuestions.map((raw, index) => {
  const answerIndex = targetIndexes[index % targetIndexes.length];
  const choices = [...raw.distractors];
  choices.splice(answerIndex, 0, raw.correctAnswer);
  const label = raw.trainingModule === 'toneEar' ? '进阶听感' : raw.trainingModule === 'sceneInference' ? '场景推断' : raw.trainingModule === 'workplaceTransfer' ? '职场/生活迁移' : raw.trainingModule === 'reviewMix' ? '混合复盘' : raw.trainingModule === 'pragmaticTone' ? '语气潜台词' : '常用句意';
  return { id: index + 1, prompt: raw.prompt, cantoneseText: raw.cantoneseText, spokenText: raw.cantoneseText, choices, answerIndex, explanation: raw.explanation, theme: label, difficulty: '挑战', questionType: raw.trainingModule === 'toneEar' ? 'phonetic' : raw.trainingModule === 'sceneInference' ? 'scene' : raw.trainingModule === 'pragmaticTone' ? 'tone' : 'meaning', skillTag: label, pronunciationHint: raw.pronunciationHint, phoneticFocus: raw.trainingModule === 'toneEar' ? label : undefined, trainingModule: raw.trainingModule, dayTag: 'Day 05', movieTitle: raw.movieTitle, movieNote: note(raw.movieTitle, raw.movieNote), workplaceTip: raw.workplaceTip };
});
