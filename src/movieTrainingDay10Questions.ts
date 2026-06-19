import type { Question } from './types';

export const movieTrainingDay10ChapterTitle = "15天港片粤语训练 Day 10：蔡澜式人生智慧";

type Module = NonNullable<Question['trainingModule']>;

type RawQuestion = { cantoneseText: string; prompt: string; correctAnswer: string; distractors: [string, string, string]; explanation: string; trainingModule: Module; movieTitle: string; pronunciationHint: string; workplaceTip?: string; movieNote?: string; };

const targetIndexes = [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,0,1];
const note = (title: string, extra?: string) => extra || `受${title}一类港片/港剧/人物风格启发，句子为原创。`;
const rawQuestions: RawQuestion[] = [
  {
    cantoneseText: "一碗云吞面好唔好，唔只睇汤，仲睇你当时饿唔饿。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "体验和心境会影响判断",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "蔡澜式生活观察",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "识食唔系讲贵，系知自己想食咩。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "品味来自清楚自己的偏好",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "饮食人生场",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "人情世故最难，难在你知几时认真几时放过。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "成熟是懂得分寸和取舍",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "生活智慧",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲“随缘”，唔系冇要求，系唔同命硬碰硬。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "豁达不是无所谓，而是不硬拗",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "人生判断",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "好味嘅嘢要趁热，关系有时都系。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "时机对食物和关系都重要",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "茶餐厅人生",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "旅行最怕行程好满，个人却冇空。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "效率不能替代体验空间",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "旅行观察",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "食得开心，未必系菜贵，可能系同桌啱。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "人与氛围会改变体验",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "饭局场景",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "讲人生大道理之前，先食饱。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "生活判断需要现实底气",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "蔡澜式幽默",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "一个人懂得点菜，通常也懂得点到即止。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "点菜能看出分寸和照顾",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "饭局智慧",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "所谓潇洒，系知道有啲嘢留唔住就唔硬留。",
    prompt: "这句最贴近什么意思？",
    correctAnswer: "放手是判断后的选择",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "人生场景",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "你话简单生活，唔代表要将生活过得粗糙。",
    prompt: "说话人主要在表达什么？",
    correctAnswer: "简单不等于将就",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "生活审美",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "好日子唔一定大件事，有时只系一杯茶刚刚好。",
    prompt: "这句话的核心意思是？",
    correctAnswer: "幸福感常来自具体小体验",
    distractors: ["只是普通寒暄，没有关系动作", "表示事情已经完全解决", "重点只是在介绍地点"],
    explanation: "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    trainingModule: "phraseMeaning",
    movieTitle: "生活观察",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“食咗先讲”有时不是逃避，是让人先落地。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "先照顾基本状态再讨论大事",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "饭局智慧",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "佢话“唔使咁辛苦”，可能是劝你别把执着当成上进。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "温和提醒过度用力",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "人生判断",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“算啦”在这里不是认输，是不把烂事带回家。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "放过事情也是保护自己",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "生活智慧",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“好嘢唔怕迟”如果没有行动，也会变懒。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "豁达不能变成拖延借口",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "人生提醒",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "佢讲“开心最紧要”，重点不是逃避责任。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "快乐也要带着承担和分寸",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "生活态度",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“贵有贵食，平有平食”是在说选择自由。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "不被价格单一标准绑架",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "饮食智慧",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“唔啱就换”听落潇洒，其实要先识得判断。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "换选择前要知道哪里不合适",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "人生判断",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“做人要识叹”不是懒，是懂得感受生活。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "享受也是一种能力",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "蔡澜式生活",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“朋友唔系用嚟证明自己”是在拆面子。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "关系不该变成虚荣工具",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "人情世故",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“有啲苦，唔使日日翻热”是劝人别反复咀嚼伤口。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "不反复消费痛苦",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "人生智慧",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“食得落饭，先有力讲理想”是现实提醒。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "身体和现实是理想基础",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "生活判断",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“唔好将所有事都讲成命运”是在提醒主动性。",
    prompt: "这句真正的关系动作是？",
    correctAnswer: "别用命运掩盖选择责任",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "人生判断",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“好玩就去试，唔好玩就返嚟”是低成本探索。",
    prompt: "这句话最关键的潜台词是？",
    correctAnswer: "允许试错而不把路封死",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "旅行/生活场",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“留一口畀别人”既是饭桌礼貌，也是人生分寸。",
    prompt: "说话人的语气更接近哪一种？",
    correctAnswer: "分寸体现在小动作里",
    distractors: ["完全没有情绪，只是复述事实", "主要是在夸奖对方做得好", "表示马上接受所有安排"],
    explanation: "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    trainingModule: "pragmaticTone",
    movieTitle: "饭局智慧",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "深夜茶餐厅，朋友讲失恋，老板只多放一碗汤。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "生活里的安慰常很具体",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "茶餐厅夜场",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "饭局上有人一直讲名牌餐厅，另一个人只问“好唔好食”。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "重点从身份回到体验本身",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "饮食场景",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "旅行途中迷路，大家反而遇到最好吃的小店。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "松弛会带来意外收获",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "旅行场景",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "有人把人生讲得很苦，旁边人递来热茶。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "照顾当下比说教更有效",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "人生饭局",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "朋友聚餐最后抢着埋单，最安静的人先把小费放好。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "体面常在细节里完成",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "饭局人情",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "街市阿姐一句“今日呢条鱼靓”，比菜单更有信任感。",
    prompt: "下一步最合理的判断是？",
    correctAnswer: "生活经验来自具体人和场",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "街市场景",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "雨天留在小店避雨，大家突然不赶行程。",
    prompt: "这个场景最可能发生什么？",
    correctAnswer: "慢下来后才有体验",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "香港街头",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "有人劝你放下，自己却把杯边擦了三次。",
    prompt: "这更像哪类港剧场面？",
    correctAnswer: "说放下的人也可能在练习",
    distractors: ["只是临时改去吃饭", "双方已经没有任何冲突", "重点是介绍电影年代"],
    explanation: "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    trainingModule: "sceneInference",
    movieTitle: "生活观察",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "把“唔使咁辛苦”转成职场提醒。",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "目标重要，但也要保留可持续节奏",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "生活/职场迁移",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "你想劝朋友别硬撑。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "先休息一下，问题不会因为你累坏而变小",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "生活/职场迁移",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "把“识食”迁移成学习策略。",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "先知道自己缺哪种能力，再选择练法",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "生活/职场迁移",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "有人用贵价证明品味，你怎么回应？",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "贵可以是选择，但体验才是判断标准",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "生活/职场迁移",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "你想从焦虑转为行动。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "先处理今天能做的一小步",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "生活/职场迁移",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "把“点到即止”用在会议里。",
    prompt: "这句可以迁移成哪种表达？",
    correctAnswer: "这个问题先讲到可执行结论，不再扩散",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "生活/职场迁移",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "朋友反复纠结旧事，你怎么温和提醒？",
    prompt: "转成职场/生活表达，哪句更稳？",
    correctAnswer: "我们可以记住教训，但不用每天重播",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "生活/职场迁移",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "你想建立长期学习节奏。",
    prompt: "如果放到现实沟通，最好怎么接？",
    correctAnswer: "每天十五分钟，持续比一次爆发更可靠",
    distractors: ["直接用情绪压过讨论", "把责任全部推给别人", "先答应，之后再算"],
    explanation: "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    trainingModule: "workplaceTransfer",
    movieTitle: "生活/职场迁移",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    workplaceTip: "把港剧式语气转成现实可执行表达：事实、边界、下一步。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“算啦”轻轻讲，是放下；重重讲，可能是不甘。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "听轻重判断放下还是压住情绪",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语生活听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“食咗先讲”语气温和时，是照顾；急促时，是打断。",
    prompt: "听这句时最该留意什么？",
    correctAnswer: "听语速判断关心或回避",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语饭局听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“随缘”如果后面有行动，是豁达；没有行动，可能是拖延。",
    prompt: "这句的读音/停顿重点是？",
    correctAnswer: "听后续动作判断态度真假",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语生活听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "“啱唔啱食”比“贵唔贵”更贴近生活判断。",
    prompt: "这题重点训练哪种听感？",
    correctAnswer: "听问题焦点判断价值标准",
    distractors: ["只看字面，不管停顿", "普通话声调可以直接套用", "每个字都读成长音就得"],
    explanation: "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    trainingModule: "toneEar",
    movieTitle: "粤语饮食听感",
    pronunciationHint: "jyutping提示：留意重音、停顿、尾音同语速。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：蔡澜式章节最想训练什么？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "用粤语学品味、分寸和松弛判断",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day10复盘",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：为什么饮食适合学粤语？",
    prompt: "这题想训练的底层能力是？",
    correctAnswer: "它把词汇、情绪、人情和生活经验连起来",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day10复盘",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：今天最适合带进生活的一点是？",
    prompt: "本章方法论更接近哪一项？",
    correctAnswer: "少一点硬撑，多一点具体体验",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day10复盘",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    cantoneseText: "复盘：15分钟训练如何长期坚持？",
    prompt: "作为复盘题，最该记住什么？",
    correctAnswer: "兴趣作入口，模块作骨架，错题作复习",
    distractors: ["只背片名和演员表", "每题都找最长选项", "遇到语气就直接反击"],
    explanation: "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    trainingModule: "reviewMix",
    movieTitle: "Day10复盘",
    pronunciationHint: "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    movieNote: "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  }
];

export const movieTrainingDay10Questions: Question[] = rawQuestions.map((raw, index) => {
  const answerIndex = targetIndexes[index % targetIndexes.length];
  const choices = [...raw.distractors];
  choices.splice(answerIndex, 0, raw.correctAnswer);
  const label = raw.trainingModule === 'toneEar' ? '进阶听感' : raw.trainingModule === 'sceneInference' ? '场景推断' : raw.trainingModule === 'workplaceTransfer' ? '职场/生活迁移' : raw.trainingModule === 'reviewMix' ? '混合复盘' : raw.trainingModule === 'pragmaticTone' ? '语气潜台词' : '常用句意';
  return { id: index + 1, prompt: raw.prompt, cantoneseText: raw.cantoneseText, spokenText: raw.cantoneseText, choices, answerIndex, explanation: raw.explanation, theme: label, difficulty: '挑战', questionType: raw.trainingModule === 'toneEar' ? 'phonetic' : raw.trainingModule === 'sceneInference' ? 'scene' : raw.trainingModule === 'pragmaticTone' ? 'tone' : 'meaning', skillTag: label, pronunciationHint: raw.pronunciationHint, phoneticFocus: raw.trainingModule === 'toneEar' ? label : undefined, trainingModule: raw.trainingModule, dayTag: 'Day 10', movieTitle: raw.movieTitle, movieNote: note(raw.movieTitle, raw.movieNote), workplaceTip: raw.workplaceTip };
});
