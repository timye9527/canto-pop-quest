import type { Question } from './types';

export const movieTrainingDay04ChapterTitle = '15天港片粤语训练 Day 04';

type Module = NonNullable<Question['trainingModule']>;

type RawQuestion = { cantoneseText: string; prompt: string; correctAnswer: string; distractors: [string, string, string]; explanation: string; trainingModule: Module; movieTitle: string; pronunciationHint: string; workplaceTip?: string; movieNote?: string; };

const targetIndexes = [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1];
const note = (title: string, extra?: string) => extra || `受${title}一类港片/港乐/港剧场景启发，句子为原创。`;
const rawQuestions: RawQuestion[] = [
  {
    cantoneseText: "你以为你系让步，其实你系等人多谢你。",
    prompt: "这句指出什么？",
    correctAnswer: "所谓让步里藏着期待回报",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "男亲女爱式办公室，最怕个个都话冇所谓。",
    prompt: "为什么可怕？",
    correctAnswer: "真实偏好被藏起来，决策会拖慢",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "你话“我都系为你好”，最紧要睇有冇控制。",
    prompt: "这句提醒什么？",
    correctAnswer: "善意表达也可能带控制",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "一首快歌可以热场，一句真话可以冷场。",
    prompt: "这句对比什么？",
    correctAnswer: "气氛和真实表达的冲突",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "你讲“原则”，我想知系原则定系唔想做。",
    prompt: "这句在拆解什么？",
    correctAnswer: "原则和逃避之间的界线",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "佢话“你决定啦”，但你真决定佢又黑面。",
    prompt: "这说明什么？",
    correctAnswer: "授权是假，期待是真",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "呢句歌听落轻松，其实讲紧一种认命。",
    prompt: "“听落”是什么意思？",
    correctAnswer: "听起来、听上去",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "你唔系迟回复，你系迟到令人开始编故事。",
    prompt: "核心意思是？",
    correctAnswer: "迟回复会制造不确定和误解",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "“算啦”有时唔系放过你，系暂时唔想讲。",
    prompt: "这句解释什么？",
    correctAnswer: "表面收场不等于真正放下",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "你讲“好小事”，但对方听到系“你唔重要”。",
    prompt: "这句提醒什么？",
    correctAnswer: "轻描淡写可能否定对方感受",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "成年人最惨唔系冇选择，系每个选择都要解释。",
    prompt: "这句训练什么？",
    correctAnswer: "识别选择背后的交代成本",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "你讲到好理性，但个表情好私人。",
    prompt: "这句什么意思？",
    correctAnswer: "理性话语里夹着私人情绪",
    distractors: [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    explanation: "Day 04 强调关系边界和职场交代成本。",
    trainingModule: "phraseMeaning",
    movieTitle: "《男亲女爱》/栋笃笑风格启发",
    pronunciationHint: "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3"
  },
  {
    cantoneseText: "佢讲“你慢慢谂”，慢慢两个字重到成间房都沉。",
    prompt: "潜台词是什么？",
    correctAnswer: "对方其实已经不耐烦",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你话尊重我选择，但每个选择你都有旁白。",
    prompt: "这句批评什么？",
    correctAnswer: "表面尊重但不断干预",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你唔系问我意见，你系等我讲你想听嗰句。",
    prompt: "说话人识别到什么？",
    correctAnswer: "对方只想要确认，不想要意见",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "佢笑住话“冇所谓”，你反而要惊。",
    prompt: "为什么？",
    correctAnswer: "笑可能是在压住不满",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你话“照旧”，但旧嗰套就系出事原因。",
    prompt: "这句指出什么？",
    correctAnswer: "沿用旧方法可能延续旧问题",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你讲“我明你感受”，但下一句就否定晒。",
    prompt: "这句批评什么？",
    correctAnswer: "共情只是开场白，不是真理解",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你以为你收得好埋，其实个停顿出卖咗你。",
    prompt: "说话人捕捉到什么？",
    correctAnswer: "停顿透露真实情绪",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "佢话“我冇嬲”，但每个字都似逐粒掟出嚟。",
    prompt: "潜台词是什么？",
    correctAnswer: "他说不生气但语气很生气",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你话“大家自己执生”，即系其实冇人负责。",
    prompt: "这句指出什么？",
    correctAnswer: "自由处理可能变成责任真空",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你唔系唔识拒绝，你系想拒绝到人哋仲觉得你善良。",
    prompt: "这句观察什么？",
    correctAnswer: "想保形象所以拒绝不清",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你讲“唔介意”，但之后逐项记低。",
    prompt: "这句听出什么？",
    correctAnswer: "不介意只是暂时口头收住",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你话“我讲事实”，但事实排位排到好有立场。",
    prompt: "这句指出什么？",
    correctAnswer: "事实排序也会表达立场",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你叫人冷静，语气却好似倒汽油。",
    prompt: "这句的反差是什么？",
    correctAnswer: "话语降温但语气升温",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "你话“无心”，但结果系有伤害。",
    prompt: "这句区分什么？",
    correctAnswer: "动机和影响不能混为一谈",
    distractors: [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    explanation: "语气潜台词训练重点是听字面背后的关系动作。",
    trainingModule: "pragmaticTone",
    movieTitle: "黄子华式人情观察",
    pronunciationHint: "jyu5 hei3 cim4 toi4 ci4"
  },
  {
    cantoneseText: "律所办公室，Miss Mo 式人物讲“你有point，但唔好当自己有power。”",
    prompt: "更像哪种场景？",
    correctAnswer: "提醒专业意见不等于决策权",
    distractors: [
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息"
    ],
    explanation: "场景推断训练你把人物、地点和语气串起来。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐/职场场景",
    pronunciationHint: "coeng4 ging2 waan4 jyun4"
  },
  {
    cantoneseText: "栋笃笑台上讲“拍拖最难唔系爱，系同步calendar。”",
    prompt: "笑点来自什么？",
    correctAnswer: "把感情问题讲成职场排期",
    distractors: [
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息"
    ],
    explanation: "场景推断训练你把人物、地点和语气串起来。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐/职场场景",
    pronunciationHint: "coeng4 ging2 waan4 jyun4"
  },
  {
    cantoneseText: "K房点老歌后，全场望向同一个人。",
    prompt: "这说明什么？",
    correctAnswer: "这首歌和某段共同往事有关",
    distractors: [
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息"
    ],
    explanation: "场景推断训练你把人物、地点和语气串起来。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐/职场场景",
    pronunciationHint: "coeng4 ging2 waan4 jyun4"
  },
  {
    cantoneseText: "茶餐厅卡位，两个人讲公事讲到突然细声。",
    prompt: "最可能发生什么？",
    correctAnswer: "话题进入敏感或私人层面",
    distractors: [
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息"
    ],
    explanation: "场景推断训练你把人物、地点和语气串起来。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐/职场场景",
    pronunciationHint: "coeng4 ging2 waan4 jyun4"
  },
  {
    cantoneseText: "上司讲“你哋倾掂佢”，然后立刻离场。",
    prompt: "这更像什么？",
    correctAnswer: "把冲突下放给团队自行消化",
    distractors: [
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息"
    ],
    explanation: "场景推断训练你把人物、地点和语气串起来。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐/职场场景",
    pronunciationHint: "coeng4 ging2 waan4 jyun4"
  },
  {
    cantoneseText: "同事互怼，最后一句反而帮对方收场。",
    prompt: "这是什么关系信号？",
    correctAnswer: "嘴硬但保留默契",
    distractors: [
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息"
    ],
    explanation: "场景推断训练你把人物、地点和语气串起来。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐/职场场景",
    pronunciationHint: "coeng4 ging2 waan4 jyun4"
  },
  {
    cantoneseText: "下班路上听到一句港乐式矛盾情绪。",
    prompt: "这更像哪种训练？",
    correctAnswer: "用港乐识别矛盾情绪",
    distractors: [
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息"
    ],
    explanation: "场景推断训练你把人物、地点和语气串起来。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐/职场场景",
    pronunciationHint: "coeng4 ging2 waan4 jyun4"
  },
  {
    cantoneseText: "客户说“唔急”，但补一句“今日内得唔得”。",
    prompt: "实际是什么？",
    correctAnswer: "不急只是客气，今天内才是真要求",
    distractors: [
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息"
    ],
    explanation: "场景推断训练你把人物、地点和语气串起来。",
    trainingModule: "sceneInference",
    movieTitle: "《男亲女爱》/港乐/职场场景",
    pronunciationHint: "coeng4 ging2 waan4 jyun4"
  },
  {
    cantoneseText: "把“你唔好烦我”转成职场边界。",
    prompt: "较稳表达是？",
    correctAnswer: "我需要先处理手上优先事项，稍后回复",
    distractors: [
      "你自己估啦",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移要求把嘴仗翻译成可执行边界。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把情绪翻成范围、责任或下一步。"
  },
  {
    cantoneseText: "把“我顶唔顺”转成会议表达。",
    prompt: "较专业的是？",
    correctAnswer: "当前负荷已经超过可承接范围",
    distractors: [
      "你自己估啦",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移要求把嘴仗翻译成可执行边界。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把情绪翻成范围、责任或下一步。"
  },
  {
    cantoneseText: "对方一直讲愿景，你想拉回执行。",
    prompt: "最好怎么接？",
    correctAnswer: "愿景我理解，想确认第一步怎么落地",
    distractors: [
      "你自己估啦",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移要求把嘴仗翻译成可执行边界。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把情绪翻成范围、责任或下一步。"
  },
  {
    cantoneseText: "你要给同事负反馈，又不想伤关系。",
    prompt: "较稳说法是？",
    correctAnswer: "我想对事不对人讲一个风险",
    distractors: [
      "你自己估啦",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移要求把嘴仗翻译成可执行边界。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把情绪翻成范围、责任或下一步。"
  },
  {
    cantoneseText: "客户一直讲“再研究”，你要推进。",
    prompt: "较稳追问是？",
    correctAnswer: "想确认还差哪一个条件可以决定",
    distractors: [
      "你自己估啦",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移要求把嘴仗翻译成可执行边界。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把情绪翻成范围、责任或下一步。"
  },
  {
    cantoneseText: "老板说“简单做下”，但需求很多。",
    prompt: "你该确认什么？",
    correctAnswer: "简单的定义和必须保留项",
    distractors: [
      "你自己估啦",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移要求把嘴仗翻译成可执行边界。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把情绪翻成范围、责任或下一步。"
  },
  {
    cantoneseText: "你想表达不同意，但不想硬碰。",
    prompt: "较稳句式是？",
    correctAnswer: "我有另一个担心位，想摆出来对齐",
    distractors: [
      "你自己估啦",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移要求把嘴仗翻译成可执行边界。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把情绪翻成范围、责任或下一步。"
  },
  {
    cantoneseText: "团队说“大家都辛苦”，但问题没人接。",
    prompt: "你该补什么？",
    correctAnswer: "明确负责人和下一步",
    distractors: [
      "你自己估啦",
      "我完全不理",
      "大家散会算"
    ],
    explanation: "职场迁移要求把嘴仗翻译成可执行边界。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场粤语",
    pronunciationHint: "zik1 coeng4 zyun2 jik6",
    workplaceTip: "把情绪翻成范围、责任或下一步。"
  },
  {
    cantoneseText: "听辨：“嬲 nau1”和“扭 nau2”接近时，先靠什么？",
    prompt: "最可靠的是？",
    correctAnswer: "声调和句中搭配",
    distractors: [
      "只看字形",
      "只听音量",
      "全部当普通话"
    ],
    explanation: "Day 04 听感题偏语气功能，不考送分入声规则。",
    trainingModule: "toneEar",
    movieTitle: "粤语听感",
    pronunciationHint: "jyut6 jyu5 jyu5 hei3"
  },
  {
    cantoneseText: "听辨：“啱”在反馈里，不一定只是“对”。",
    prompt: "还可能表示什么？",
    correctAnswer: "合适、贴合场景",
    distractors: [
      "只看字形",
      "只听音量",
      "全部当普通话"
    ],
    explanation: "Day 04 听感题偏语气功能，不考送分入声规则。",
    trainingModule: "toneEar",
    movieTitle: "粤语听感",
    pronunciationHint: "jyut6 jyu5 jyu5 hei3"
  },
  {
    cantoneseText: "听辨：“喂”开头，语气不同差别很大。",
    prompt: "重点听什么？",
    correctAnswer: "叫人、提醒、责备的语气方向",
    distractors: [
      "只看字形",
      "只听音量",
      "全部当普通话"
    ],
    explanation: "Day 04 听感题偏语气功能，不考送分入声规则。",
    trainingModule: "toneEar",
    movieTitle: "粤语听感",
    pronunciationHint: "jyut6 jyu5 jyu5 hei3"
  },
  {
    cantoneseText: "听辨：“咩”在反问里，常常带什么？",
    prompt: "较常见语气是？",
    correctAnswer: "怀疑或不认同",
    distractors: [
      "只看字形",
      "只听音量",
      "全部当普通话"
    ],
    explanation: "Day 04 听感题偏语气功能，不考送分入声规则。",
    trainingModule: "toneEar",
    movieTitle: "粤语听感",
    pronunciationHint: "jyut6 jyu5 jyu5 hei3"
  },
  {
    cantoneseText: "复盘：Day 04 最重要的不是学会寸人，而是？",
    prompt: "本章核心是？",
    correctAnswer: "听出笑话背后的边界和需求",
    distractors: [
      "只背冷门字音",
      "只记电影年份",
      "每句都反击"
    ],
    explanation: "复盘题把幽默、港乐和职场语感收束成方法。",
    trainingModule: "reviewMix",
    movieTitle: "Day 04复盘",
    pronunciationHint: "fuk6 pun4"
  },
  {
    cantoneseText: "复盘：男亲女爱式办公室最适合训练什么？",
    prompt: "更准确的是？",
    correctAnswer: "公事私情混在一起时的语气判断",
    distractors: [
      "只背冷门字音",
      "只记电影年份",
      "每句都反击"
    ],
    explanation: "复盘题把幽默、港乐和职场语感收束成方法。",
    trainingModule: "reviewMix",
    movieTitle: "Day 04复盘",
    pronunciationHint: "fuk6 pun4"
  },
  {
    cantoneseText: "复盘：港乐进入训练的作用是什么？",
    prompt: "最贴近本体系的是？",
    correctAnswer: "用熟悉情绪提高粤语感知黏性",
    distractors: [
      "只背冷门字音",
      "只记电影年份",
      "每句都反击"
    ],
    explanation: "复盘题把幽默、港乐和职场语感收束成方法。",
    trainingModule: "reviewMix",
    movieTitle: "Day 04复盘",
    pronunciationHint: "fuk6 pun4"
  },
  {
    cantoneseText: "复盘：职场人学粤语，最该优先听懂什么？",
    prompt: "最实用答案是？",
    correctAnswer: "承诺、边界、拒绝和潜台词",
    distractors: [
      "只背冷门字音",
      "只记电影年份",
      "每句都反击"
    ],
    explanation: "复盘题把幽默、港乐和职场语感收束成方法。",
    trainingModule: "reviewMix",
    movieTitle: "Day 04复盘",
    pronunciationHint: "fuk6 pun4"
  }
];

export const movieTrainingDay04Questions: Question[] = rawQuestions.map((raw, index) => {
  const answerIndex = targetIndexes[index % targetIndexes.length];
  const choices = [...raw.distractors];
  choices.splice(answerIndex, 0, raw.correctAnswer);
  const label = raw.trainingModule === 'toneEar' ? '进阶听感' : raw.trainingModule === 'sceneInference' ? '场景推断' : raw.trainingModule === 'workplaceTransfer' ? '职场迁移' : raw.trainingModule === 'reviewMix' ? '混合复盘' : raw.trainingModule === 'pragmaticTone' ? '语气潜台词' : '常用句意';
  return { id: index + 1, prompt: raw.prompt, cantoneseText: raw.cantoneseText, spokenText: raw.cantoneseText, choices, answerIndex, explanation: raw.explanation, theme: label, difficulty: '挑战', questionType: raw.trainingModule === 'toneEar' ? 'phonetic' : raw.trainingModule === 'sceneInference' ? 'scene' : raw.trainingModule === 'pragmaticTone' ? 'tone' : 'meaning', skillTag: label, pronunciationHint: raw.pronunciationHint, phoneticFocus: raw.trainingModule === 'toneEar' ? label : undefined, trainingModule: raw.trainingModule, dayTag: 'Day 04', movieTitle: raw.movieTitle, movieNote: note(raw.movieTitle, raw.movieNote), workplaceTip: raw.workplaceTip };
});
