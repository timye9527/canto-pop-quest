import type { Question } from './types';

export const movieTrainingDay06ChapterTitle = "15天港片粤语训练 Day 06：大时代，人性、输赢与情绪压力";

type Module = NonNullable<Question['trainingModule']>;

type RawQuestion = { cantoneseText: string; prompt: string; correctAnswer: string; distractors: [string, string, string]; explanation: string; trainingModule: Module; movieTitle: string; pronunciationHint: string; workplaceTip?: string; movieNote?: string; };

const targetIndexes = [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1];
const note = (title: string, extra?: string) => extra || `受${title}一类港片/港剧/人物风格启发，句子为原创。`;
const rawQuestions: RawQuestion[] = [
  {
    cantoneseText: "佢讲输赢，听落似讲股票，其实讲紧尊严。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "表面谈结果，实际在谈自尊和面子",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "《大时代》式压力场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "一张报价单，可以照出几个人嘅贪同惊。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "利益变化会放大人性的恐惧和欲望",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "金融风暴场景",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "你以为佢要赢，其实佢系怕再输一次。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "强硬背后可能是失败创伤",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "家族冲突场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "市场未开，屋企已经先跌停。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "外部压力已经渗进家庭关系",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "《大时代》式家庭场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“我冇得拣”，通常系已经拣咗最狠嗰边。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "所谓没选择可能是在合理化决定",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "江湖/商战压力",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "输一次唔可怕，最怕将所有人拖落水。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "个人风险会变成集体代价",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "金融剧场景",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“人情”喺压力面前，有时会变成筹码。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "关系可能被利益重新定价",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "家族利益场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢唔系怕穷，系怕畀人睇低。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "真正驱动力是羞辱感和身份焦虑",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "大时代人物心理",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "一声“信我”，如果冇底牌，就系借信任。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "没有依据的承诺是在消耗信任",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "商战对话",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲到好热血，但数字一路唔肯摊开。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "情绪动员不能替代事实透明",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "股市会议场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“为你好”可以系保护，也可以系控制。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "要分辨照顾和支配的边界",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "家庭压力场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "大时代唔只系外面大，系每个人心入面都放大。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "大环境会放大个人选择和情绪",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "剧集主题复盘",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你跟唔跟我”问嘅唔只系行动，仲系忠诚。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "问题在测试站队和忠诚",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "商战站队场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“我承担”，但冇讲点承担。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "豪言可能缺少具体责任",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "压力谈判场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你唔信我？”一出口，讨论就变成人身关系。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "把事实问题转成信任压力",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "家族争执场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“而家唔搏，几时搏”可能系勇气，亦可能系赌气。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "要分清战略冒险和情绪下注",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "金融风暴场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢越讲“冷静”，手指越敲得急。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "语言冷静不代表身体不慌",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "交易室场景",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我输得起”如果讲畀别人听，可能系要别人陪输。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "自称承担可能牵连他人",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "商战压力场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“一家人唔计较”常常系最难计清楚。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "亲情话术可能掩盖利益不清",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "家庭利益场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲“你会后悔”，不是预测，是施压。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "用未来恐惧逼对方让步",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "高压对峙场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我只系想公平”要看规则是不是他定的。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "公平话语可能被权力包装",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "谈判场景",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“你知唔知我为你做咗几多”系情绪账单。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "付出被拿来要求回报",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "家庭冲突场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“今日忍，明日赢”如果没有计划，只是安慰。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "口号不能替代路线",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "低谷场景",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“冇事”，但所有人都唔敢坐低。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "气氛说明问题还没过去",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "办公室压力场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“我唔怕死”有时系最怕输。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "极端勇气可能来自极端恐惧",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "港剧强人场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "佢笑住讲“慢慢玩”，其实已经开战。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "笑是压低火气的宣战方式",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "商战对峙",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "茶餐厅电视播住股价，几个人突然无人出声。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "市场消息改变了关系气氛",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "金融街场景",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "家庭饭局上有人讲“钱唔重要”，大家反而望住佢。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "说钱不重要的人可能最在意",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "家族饭局",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "交易室里最安静的人，手上电话最多。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "真正有动作的人未必最吵",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "市场场景",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "有人拍台话“信我”，另一个人开始收文件。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "有人已经准备降低风险",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "谈判桌场景",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "夜晚天台讲理想，楼下有人等数。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "理想和现实债务同时存在",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "港剧天台",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "父子争执里一句“你似我”，全场更沉。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "相似性可能是最大冲突点",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "家族对峙",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "有人输完还请食饭，气氛却更紧。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "豪爽可能是在掩饰失控",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "江湖饭局",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "办公室突然有人关电视，其他人都明白。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "坏消息已经无需明说",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "金融剧场",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "把“搏一铺”转成项目表达。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "这是高风险方案，需要先列损失上限",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场风险沟通",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "把“你信唔信我”转成会议表达。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "我们先看依据，再决定信任放在哪里",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场风险沟通",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "对方用情绪推动决策，你怎么接？",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "我理解紧迫感，但需要先确认数据",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场风险沟通",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "团队想豪赌资源，你要设边界。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "可以试，但要设止损点和复盘时间",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场风险沟通",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "上司说“失败我负责”，你要确认什么？",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "请明确责任范围和资源支持",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场风险沟通",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "客户用未来收益压价，你怎么回？",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "预期收益不能替代当前交付成本",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场风险沟通",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "同事说“大家一家人”，你如何稳住？",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "关系归关系，责任和时间仍要写清楚",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场风险沟通",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "你想把输赢话术拉回合作。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "我们先定义共同目标，再谈各自让步",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "职场风险沟通",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“信我”如果重音很急，可能不是信心而是焦虑。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "听语速和重音判断承诺是否稳",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语压力听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“搏”字短促有力，容易带出赌气感。",
    prompt: "听这句时最该留意什么？",
    correctAnswer: "听短促字是否推动情绪下注",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语压力听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“公平”拖长讲，可能是在争定义权。",
    prompt: "这句的读音/停顿重点是？",
    correctAnswer: "留意关键词是否被刻意加重",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语谈判听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "“冇得拣”停顿在前面，通常是在铺垫责任转移。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "听停顿位置判断是否卸责",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语压力听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：大时代式题最该避免什么？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "被豪言、输赢和亲情话术牵着走",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day06复盘",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：压力场景里先听什么？",
    prompt: "这题想训练的底层能力是？",
    correctAnswer: "先听谁在转移风险和责任",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day06复盘",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：职场迁移最有用的一招是？",
    prompt: "本章方法论更接近哪一项？",
    correctAnswer: "把热血口号翻成依据、上限和责任",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day06复盘",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：今天的粤语学习重点是？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "听懂强硬背后的恐惧、面子和利益",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day06复盘",
    pronunciationHint: "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    movieNote: "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  }
];

export const movieTrainingDay06Questions: Question[] = rawQuestions.map((raw, index) => {
  const answerIndex = targetIndexes[index % targetIndexes.length];
  const choices = [...raw.distractors];
  choices.splice(answerIndex, 0, raw.correctAnswer);
  const label = raw.trainingModule === 'toneEar' ? '进阶听感' : raw.trainingModule === 'sceneInference' ? '场景推断' : raw.trainingModule === 'workplaceTransfer' ? '职场/生活迁移' : raw.trainingModule === 'reviewMix' ? '混合复盘' : raw.trainingModule === 'pragmaticTone' ? '语气潜台词' : '常用句意';
  return { id: index + 1, prompt: raw.prompt, cantoneseText: raw.cantoneseText, spokenText: raw.cantoneseText, choices, answerIndex, explanation: raw.explanation, theme: label, difficulty: '挑战', questionType: raw.trainingModule === 'toneEar' ? 'phonetic' : raw.trainingModule === 'sceneInference' ? 'scene' : raw.trainingModule === 'pragmaticTone' ? 'tone' : 'meaning', skillTag: label, pronunciationHint: raw.pronunciationHint, phoneticFocus: raw.trainingModule === 'toneEar' ? label : undefined, trainingModule: raw.trainingModule, dayTag: 'Day 06', movieTitle: raw.movieTitle, movieNote: note(raw.movieTitle, raw.movieNote), workplaceTip: raw.workplaceTip };
});
