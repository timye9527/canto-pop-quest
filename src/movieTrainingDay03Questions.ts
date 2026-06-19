import type { Question } from './types';

export const movieTrainingDay03ChapterTitle = '15天港片粤语训练 Day 03';

type Module = NonNullable<Question['trainingModule']>;

type RawQuestion = { cantoneseText: string; prompt: string; correctAnswer: string; distractors: [string, string, string]; explanation: string; trainingModule: Module; movieTitle: string; pronunciationHint: string; workplaceTip?: string; movieNote?: string; };

const targetIndexes = [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1];
const note = (title: string, extra?: string) => extra || `受${title}一类港片/港乐/港剧场景启发，句子为原创。`;
const rawQuestions: RawQuestion[] = [
  {
    cantoneseText: "呢首歌唔系伤心，系提醒你唔好再扮冇事。",
    prompt: "这句最核心的理解是？",
    correctAnswer: "歌里的情绪是在戳破伪装",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "你话随便点歌，但每首都 skip，咁唔叫随便。",
    prompt: "说话人真正指出什么？",
    correctAnswer: "表面随便其实有偏好",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "呢句副歌一入嚟，全房突然静晒。",
    prompt: "这句话描写什么？",
    correctAnswer: "大家被情绪击中而安静",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "佢讲“得闲饮茶”，你唔好即刻当约定。",
    prompt: "这句提醒什么？",
    correctAnswer: "客套不等于真实约定",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "你唔系冇听清楚，系唔想听清楚。",
    prompt: "这句更接近哪种判断？",
    correctAnswer: "对方在选择性回避",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "你话“我冇所谓”，但拣位拣咗十分钟。",
    prompt: "这句在拆穿什么？",
    correctAnswer: "口头不在意和行为不一致",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "呢句“迟啲讲”出现三次，就唔系时间问题。",
    prompt: "这句话暗示什么？",
    correctAnswer: "反复拖延背后是回避",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "你唱到好投入，但我听到系未放低。",
    prompt: "说话人听出了什么？",
    correctAnswer: "投入背后还有未处理情绪",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "佢笑住讲“你开心就得”，你要听埋后半秒。",
    prompt: "为什么要听后半秒？",
    correctAnswer: "尾音和停顿可能暴露不满",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "一首旧歌最劲，唔系旋律，系佢帮你记得嗰个人。",
    prompt: "这句说的是哪种体验？",
    correctAnswer: "歌曲触发人和场景记忆",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "你话“都OK”，但个 OK 听落好唔 OK。",
    prompt: "这句最在意什么？",
    correctAnswer: "字面同意但语气保留",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "如果一句歌令你突然唔出声，可能唔系你唔识唱。",
    prompt: "更合适的理解是？",
    correctAnswer: "歌词触到个人情绪",
    distractors: [
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    explanation: "Day 03 用港乐情绪训练句意，不只看字面。",
    trainingModule: "phraseMeaning",
    movieTitle: "港乐K房",
    pronunciationHint: "gong2 ngok6 jyu5 gam2"
  },
  {
    cantoneseText: "你以为佢系赞你，其实佢系帮你留条后路。",
    prompt: "这句提醒识别什么？",
    correctAnswer: "称赞可能是在降低冲突",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "你讲到咁大声，唔代表你比较有理。",
    prompt: "潜台词是什么？",
    correctAnswer: "声量不能代替理据",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "佢话“你啱”，但啱得好似判你死刑。",
    prompt: "这句笑点在哪里？",
    correctAnswer: "表面认同但语气很重",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "你话“帮我谂下”，其实系叫我帮你做埋。",
    prompt: "说话人在识别什么？",
    correctAnswer: "请求建议变成转嫁工作",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "你唔系客气，你系客气到冇人知你想点。",
    prompt: "这句批评什么？",
    correctAnswer: "过度客套导致意图不清",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "你叫我放松，但你个样似准备开庭。",
    prompt: "潜台词是？",
    correctAnswer: "表情和话语矛盾",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "佢讲“唔急”，但每五分钟问一次。",
    prompt: "真正讯号是什么？",
    correctAnswer: "口头不急但实际很急",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "你唔好用笑声包装一个拒绝。",
    prompt: "说话人要求什么？",
    correctAnswer: "把拒绝讲清楚",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "你话“随缘”，但连座位方向都要风水。",
    prompt: "这句话在戳破什么？",
    correctAnswer: "随缘只是口号，实际控制欲强",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "佢话“我明”，但问返你同一个问题。",
    prompt: "更可能说明什么？",
    correctAnswer: "对方其实未明",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "你听港乐听到喊，唔代表你脆弱。",
    prompt: "这句如何理解情绪？",
    correctAnswer: "听懂语境后情绪更深",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "你话“算啦”，但眼神仲喺度追数。",
    prompt: "这句听出什么？",
    correctAnswer: "表面收场但心里未结案",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "你讲“无所谓”，但语气似写咗三页投诉信。",
    prompt: "这句的重点是？",
    correctAnswer: "语气暴露真实不满",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "你笑佢夸张，其实夸张系帮你听到重点。",
    prompt: "这句讲什么？",
    correctAnswer: "幽默会放大潜台词",
    distractors: [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    explanation: "黄子华式节奏会用夸张显影潜台词。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华/栋笃笑风格启发",
    pronunciationHint: "dung6 duk6 siu3 jyu5 hei3"
  },
  {
    cantoneseText: "办公室茶水间，佢讲“唔系八卦，系关心。”",
    prompt: "这更像什么场面？",
    correctAnswer: "用关心包装打听",
    distractors: [
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    explanation: "场景题训练你从行为和语境补全意思。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐生活场景",
    pronunciationHint: "coeng4 ging2 teoi1 dyun6"
  },
  {
    cantoneseText: "K房有人点完歌即刻望住你。",
    prompt: "最可能是什么暗示？",
    correctAnswer: "这首歌同你有关",
    distractors: [
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    explanation: "场景题训练你从行为和语境补全意思。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐生活场景",
    pronunciationHint: "coeng4 ging2 teoi1 dyun6"
  },
  {
    cantoneseText: "电梯入面两个人突然转普通话。",
    prompt: "可能说明什么？",
    correctAnswer: "他们想避开旁人听懂",
    distractors: [
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    explanation: "场景题训练你从行为和语境补全意思。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐生活场景",
    pronunciationHint: "coeng4 ging2 teoi1 dyun6"
  },
  {
    cantoneseText: "唱到副歌，老友突然出去听电话。",
    prompt: "更像哪种可能？",
    correctAnswer: "歌词触到他想避开的情绪",
    distractors: [
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    explanation: "场景题训练你从行为和语境补全意思。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐生活场景",
    pronunciationHint: "coeng4 ging2 teoi1 dyun6"
  },
  {
    cantoneseText: "会议后有人说“今晚听下 Eason 先。”",
    prompt: "这更像什么心态？",
    correctAnswer: "用歌消化职场情绪",
    distractors: [
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    explanation: "场景题训练你从行为和语境补全意思。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐生活场景",
    pronunciationHint: "coeng4 ging2 teoi1 dyun6"
  },
  {
    cantoneseText: "栋笃笑台上讲“成年人最贵系解释。”",
    prompt: "这类表达训练什么？",
    correctAnswer: "用反差抓住职场成本",
    distractors: [
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    explanation: "场景题训练你从行为和语境补全意思。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐生活场景",
    pronunciationHint: "coeng4 ging2 teoi1 dyun6"
  },
  {
    cantoneseText: "同事讲“你唔使覆咁快”，但望住你部手机。",
    prompt: "最像什么场景？",
    correctAnswer: "嘴上不催，身体语言在催",
    distractors: [
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    explanation: "场景题训练你从行为和语境补全意思。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐生活场景",
    pronunciationHint: "coeng4 ging2 teoi1 dyun6"
  },
  {
    cantoneseText: "老友听完你抱怨，只回“饮啖水先”。",
    prompt: "这句话功能可能是？",
    correctAnswer: "先降情绪再谈问题",
    distractors: [
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    explanation: "场景题训练你从行为和语境补全意思。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐生活场景",
    pronunciationHint: "coeng4 ging2 teoi1 dyun6"
  },
  {
    cantoneseText: "将“你自己谂啦”转成职场表达。",
    prompt: "哪句更稳？",
    correctAnswer: "请你先给一个方案，我再反馈",
    distractors: [
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移把情绪句转成边界、时间和下一步。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把含糊话术落到行动。"
  },
  {
    cantoneseText: "将“你讲到我好乱”转成会议表达。",
    prompt: "更专业的是？",
    correctAnswer: "我需要先确认优先级和顺序",
    distractors: [
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移把情绪句转成边界、时间和下一步。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把含糊话术落到行动。"
  },
  {
    cantoneseText: "老板讲“你睇住办”，你应该追问什么？",
    prompt: "最关键的问题是？",
    correctAnswer: "边界、预算和截止时间",
    distractors: [
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移把情绪句转成边界、时间和下一步。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把含糊话术落到行动。"
  },
  {
    cantoneseText: "同事话“我尽量”，你要怎样落地？",
    prompt: "更稳的回应是？",
    correctAnswer: "请给一个最晚回复时间",
    distractors: [
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移把情绪句转成边界、时间和下一步。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把含糊话术落到行动。"
  },
  {
    cantoneseText: "客户话“唔系钱问题”，你要听出什么？",
    prompt: "更该追问什么？",
    correctAnswer: "真实顾虑可能在信任或风险",
    distractors: [
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移把情绪句转成边界、时间和下一步。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把含糊话术落到行动。"
  },
  {
    cantoneseText: "你想反对方案，但又要留面。",
    prompt: "较稳的粤式表达是？",
    correctAnswer: "我明个方向，但想补一个风险位",
    distractors: [
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移把情绪句转成边界、时间和下一步。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把含糊话术落到行动。"
  },
  {
    cantoneseText: "你需要催进度，但不想变讨债。",
    prompt: "最好怎么讲？",
    correctAnswer: "我想确认下一步交付时间",
    distractors: [
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移把情绪句转成边界、时间和下一步。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把含糊话术落到行动。"
  },
  {
    cantoneseText: "收到含糊反馈“再谂下”，你该怎么拆？",
    prompt: "较专业的追问是？",
    correctAnswer: "想确认是方向、内容还是风险要改",
    distractors: [
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移把情绪句转成边界、时间和下一步。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把含糊话术落到行动。"
  },
  {
    cantoneseText: "听辨：“情 cing4”和“晴 cing4”同音时，靠什么分？",
    prompt: "最实际办法是？",
    correctAnswer: "靠上下文和搭配",
    distractors: [
      "只看音量",
      "只看字形",
      "全部当普通话"
    ],
    explanation: "听感题减少规则背诵，改练语境辅助判断。",
    trainingModule: "toneEar",
    movieTitle: "粤语听感",
    pronunciationHint: "jyut6 jyu5 teng1 gam2"
  },
  {
    cantoneseText: "听辨：“先 sin1”在句尾有时不是时间。",
    prompt: "更可能是什么功能？",
    correctAnswer: "缓和语气或保留空间",
    distractors: [
      "只看音量",
      "只看字形",
      "全部当普通话"
    ],
    explanation: "听感题减少规则背诵，改练语境辅助判断。",
    trainingModule: "toneEar",
    movieTitle: "粤语听感",
    pronunciationHint: "jyut6 jyu5 teng1 gam2"
  },
  {
    cantoneseText: "听辨：“啦”和“喇”差别未必靠字。",
    prompt: "更该听什么？",
    correctAnswer: "语气收束和情绪方向",
    distractors: [
      "只看音量",
      "只看字形",
      "全部当普通话"
    ],
    explanation: "听感题减少规则背诵，改练语境辅助判断。",
    trainingModule: "toneEar",
    movieTitle: "粤语听感",
    pronunciationHint: "jyut6 jyu5 teng1 gam2"
  },
  {
    cantoneseText: "听辨：“咁”放句首，常提示什么？",
    prompt: "较常见功能是？",
    correctAnswer: "承接上文准备转折或推进",
    distractors: [
      "只看音量",
      "只看字形",
      "全部当普通话"
    ],
    explanation: "听感题减少规则背诵，改练语境辅助判断。",
    trainingModule: "toneEar",
    movieTitle: "粤语听感",
    pronunciationHint: "jyut6 jyu5 teng1 gam2"
  },
  {
    cantoneseText: "复盘：一句话听不懂时，先抓哪三样？",
    prompt: "Day 03 建议策略是？",
    correctAnswer: "关系、场景、语气方向",
    distractors: [
      "只背冷门读音",
      "只记明星名字",
      "每句都反击"
    ],
    explanation: "复盘题把本章方法收束成可迁移策略。",
    trainingModule: "reviewMix",
    movieTitle: "Day 03复盘",
    pronunciationHint: "fuk6 pun4"
  },
  {
    cantoneseText: "复盘：港乐训练最有用的不是背歌词，而是？",
    prompt: "更符合本章目标的是？",
    correctAnswer: "借情绪建立语感记忆",
    distractors: [
      "只背冷门读音",
      "只记明星名字",
      "每句都反击"
    ],
    explanation: "复盘题把本章方法收束成可迁移策略。",
    trainingModule: "reviewMix",
    movieTitle: "Day 03复盘",
    pronunciationHint: "fuk6 pun4"
  },
  {
    cantoneseText: "复盘：栋笃笑把普通事讲到夸张，目的是什么？",
    prompt: "训练价值是？",
    correctAnswer: "放大矛盾帮助识别潜台词",
    distractors: [
      "只背冷门读音",
      "只记明星名字",
      "每句都反击"
    ],
    explanation: "复盘题把本章方法收束成可迁移策略。",
    trainingModule: "reviewMix",
    movieTitle: "Day 03复盘",
    pronunciationHint: "fuk6 pun4"
  },
  {
    cantoneseText: "复盘：职场粤语不是学会怼人，而是学会什么？",
    prompt: "最准确的是？",
    correctAnswer: "有边界但不撕破脸",
    distractors: [
      "只背冷门读音",
      "只记明星名字",
      "每句都反击"
    ],
    explanation: "复盘题把本章方法收束成可迁移策略。",
    trainingModule: "reviewMix",
    movieTitle: "Day 03复盘",
    pronunciationHint: "fuk6 pun4"
  }
];

export const movieTrainingDay03Questions: Question[] = rawQuestions.map((raw, index) => {
  const answerIndex = targetIndexes[index % targetIndexes.length];
  const choices = [...raw.distractors];
  choices.splice(answerIndex, 0, raw.correctAnswer);
  const label = raw.trainingModule === 'toneEar' ? '进阶听感' : raw.trainingModule === 'sceneInference' ? '场景推断' : raw.trainingModule === 'workplaceTransfer' ? '职场迁移' : raw.trainingModule === 'reviewMix' ? '混合复盘' : raw.trainingModule === 'pragmaticTone' ? '语气潜台词' : '常用句意';
  return { id: index + 1, prompt: raw.prompt, cantoneseText: raw.cantoneseText, spokenText: raw.cantoneseText, choices, answerIndex, explanation: raw.explanation, theme: label, difficulty: '挑战', questionType: raw.trainingModule === 'toneEar' ? 'phonetic' : raw.trainingModule === 'sceneInference' ? 'scene' : raw.trainingModule === 'pragmaticTone' ? 'tone' : 'meaning', skillTag: label, pronunciationHint: raw.pronunciationHint, phoneticFocus: raw.trainingModule === 'toneEar' ? label : undefined, trainingModule: raw.trainingModule, dayTag: 'Day 03', movieTitle: raw.movieTitle, movieNote: note(raw.movieTitle, raw.movieNote), workplaceTip: raw.workplaceTip };
});
