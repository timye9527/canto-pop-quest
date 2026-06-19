const bootRoot = document.querySelector('#root');

function showStartupError(error) {
  const message = error instanceof Error ? error.message : String(error);
  const target = bootRoot || document.body;
  target.innerHTML = `
    <main class="app-shell">
      <section class="quiz-panel">
        <p class="eyebrow">粤语港乐闯关</p>
        <h1>页面加载遇到问题</h1>
        <p class="lede">本地预览脚本没有成功启动。错误信息：${escapeHtml(message)}</p>
      </section>
    </main>
  `;
}

window.addEventListener('error', (event) => showStartupError(event.error || event.message));
window.addEventListener('unhandledrejection', (event) => showStartupError(event.reason));

const STORAGE_KEY = 'canto-pop-quest-progress-v2';
const chapterTitle = '陈奕迅港乐卡拉 OK 夜';

const questions = [
  {
    id: 1,
    prompt: "朋友帮你递来麦克风，你想说“谢谢/劳驾”，最地道的粤语是哪一个？",
    choices: [
      "靓仔",
      "唔该",
      "而家",
      "几多"
    ],
    answerIndex: 1,
    explanation: "“唔该”常用于别人帮了你、麻烦别人时，相当于“谢谢、劳驾”。",
    theme: "K 房开场",
    difficulty: "基础"
  },
  {
    id: 2,
    prompt: "“今晚冇位”里的“冇”是什么意思？",
    choices: [
      "很多",
      "刚好",
      "没有",
      "漂亮"
    ],
    answerIndex: 2,
    explanation: "“冇”读感接近 mou5，意思是“没有”。“冇位”就是“没有位置”。",
    theme: "热门演唱会",
    difficulty: "基础"
  },
  {
    id: 3,
    prompt: "想说“这首歌这么好听”，粤语里“这么”可以用哪个词？",
    choices: [
      "揾",
      "返工",
      "咁",
      "点解"
    ],
    answerIndex: 2,
    explanation: "“咁”常表示“这么、那么”。“咁好听”就是“这么好听”。",
    theme: "点歌时刻",
    difficulty: "基础"
  },
  {
    id: 4,
    prompt: "“你讲得啱”里的“啱”最接近普通话的哪个意思？",
    choices: [
      "贵",
      "对",
      "慢",
      "远"
    ],
    answerIndex: 1,
    explanation: "“啱”可以表示“对、合适、刚好”。这句就是“你说得对”。",
    theme: "朋友合唱",
    difficulty: "基础"
  },
  {
    id: 5,
    prompt: "在港乐语境里夸一个舞台造型“好靓”，意思是？",
    choices: [
      "很难唱",
      "很便宜",
      "很好看",
      "很安静"
    ],
    answerIndex: 2,
    explanation: "“靓”是粤语里常用的“漂亮、好看”。“好靓”就是“很好看”。",
    theme: "演唱会造型",
    difficulty: "基础"
  },
  {
    id: 6,
    prompt: "朋友突然切了一首失恋歌，你想问“为什么？”，粤语怎么说？",
    choices: [
      "几多？",
      "而家？",
      "点解？",
      "唔该？"
    ],
    answerIndex: 2,
    explanation: "“点解”就是“为什么”。在聊天和追问原因时非常常见。",
    theme: "失恋歌单",
    difficulty: "基础"
  },
  {
    id: 7,
    prompt: "买演唱会周边时，你想问“多少钱？”，粤语更自然的是？",
    choices: [
      "啱唔啱？",
      "几多钱？",
      "有冇返工？",
      "咁靓？"
    ],
    answerIndex: 1,
    explanation: "“几多”表示“多少”。“几多钱”就是“多少钱”。",
    theme: "演唱会周边",
    difficulty: "基础"
  },
  {
    id: 8,
    prompt: "“而家到你唱啦”里的“而家”是什么意思？",
    choices: [
      "昨天",
      "现在",
      "门口",
      "朋友"
    ],
    answerIndex: 1,
    explanation: "“而家”是“现在”。整句意思是“现在轮到你唱了”。",
    theme: "轮流献唱",
    difficulty: "基础"
  },
  {
    id: 9,
    prompt: "一个朋友说“听日要返工”，这里“返工”是什么意思？",
    choices: [
      "回家",
      "唱歌",
      "上班",
      "找人"
    ],
    answerIndex: 2,
    explanation: "“返工”是“上班”。“听日要返工”就是“明天要上班”。",
    theme: "深夜散场",
    difficulty: "进阶"
  },
  {
    id: 10,
    prompt: "你在歌单里“揾一首旧歌”，这里“揾”是什么意思？",
    choices: [
      "听",
      "买",
      "唱错",
      "找"
    ],
    answerIndex: 3,
    explanation: "“揾”是“找、寻找”。“揾一首旧歌”就是“找一首旧歌”。",
    theme: "老友点歌",
    difficulty: "进阶"
  },
  {
    id: 11,
    prompt: "K 房里有人说“呢首我识唱”，这里“呢首”是什么意思？",
    choices: [
      "那一首",
      "这一首",
      "上一首",
      "下一首"
    ],
    answerIndex: 1,
    explanation: "“呢”表示“这”。“呢首”就是“这一首”，常用于说一首歌、一段旋律。",
    theme: "抢麦前奏",
    difficulty: "基础"
  },
  {
    id: 12,
    prompt: "朋友问“你识唔识唱？”这里“识”最接近哪个意思？",
    choices: [
      "喜欢",
      "讨厌",
      "忘记",
      "认识/会"
    ],
    answerIndex: 3,
    explanation: "“识”在这里是“会、懂得”。“识唔识唱”就是“会不会唱”。",
    theme: "合唱邀请",
    difficulty: "基础"
  },
  {
    id: 13,
    prompt: "“我唔识呢句”里的“唔识”是什么意思？",
    choices: [
      "不想",
      "不贵",
      "不会/不懂",
      "不远"
    ],
    answerIndex: 2,
    explanation: "“唔”是否定，“识”是会、懂；“唔识”就是“不会、不懂”。",
    theme: "字幕跟唱",
    difficulty: "基础"
  },
  {
    id: 14,
    prompt: "朋友说“呢段好正”，这里“好正”通常是在夸什么？",
    choices: [
      "很棒",
      "很早",
      "很吵",
      "很旧"
    ],
    answerIndex: 0,
    explanation: "“正”在口语里常表示“好、棒、过瘾”。“好正”就是“很棒”。",
    theme: "副歌爆发",
    difficulty: "基础"
  },
  {
    id: 15,
    prompt: "“今晚好攰，唱慢歌啦”里的“攰”是什么意思？",
    choices: [
      "冷",
      "饿",
      "贵",
      "累"
    ],
    answerIndex: 3,
    explanation: "“攰”是“累”。“好攰”就是“很累”。",
    theme: "深夜慢歌",
    difficulty: "基础"
  },
  {
    id: 16,
    prompt: "“我哋一齐唱”里的“我哋”是什么意思？",
    choices: [
      "他们",
      "你们",
      "我们",
      "谁"
    ],
    answerIndex: 2,
    explanation: "“我哋”是“我们”。“一齐”是“一起”。",
    theme: "全场合唱",
    difficulty: "基础"
  },
  {
    id: 17,
    prompt: "“一齐唱副歌”里的“一齐”是什么意思？",
    choices: [
      "马上",
      "一起",
      "刚才",
      "单独"
    ],
    answerIndex: 1,
    explanation: "“一齐”就是“一起”。港乐合唱场景里很常见。",
    theme: "副歌合唱",
    difficulty: "基础"
  },
  {
    id: 18,
    prompt: "“你唱先啦”里的“先”在这里最接近哪个意思？",
    choices: [
      "先/先来",
      "先生",
      "新鲜",
      "仙气"
    ],
    answerIndex: 0,
    explanation: "“你唱先”就是“你先唱”。句尾“先”常表示先做某事。",
    theme: "让麦时刻",
    difficulty: "基础"
  },
  {
    id: 19,
    prompt: "“等阵再点陈奕迅”里的“等阵”是什么意思？",
    choices: [
      "每天",
      "刚刚",
      "等一下/稍后",
      "门口"
    ],
    answerIndex: 2,
    explanation: "“等阵”表示“等一下、稍后”。“等阵再点”就是“稍后再点”。",
    theme: "歌单排序",
    difficulty: "进阶"
  },
  {
    id: 20,
    prompt: "朋友说“唔好意思，唱错咗”，这里“唔好意思”是什么意思？",
    choices: [
      "不好听",
      "不好意思/抱歉",
      "不用唱",
      "不想去"
    ],
    answerIndex: 1,
    explanation: "“唔好意思”常用于道歉或打扰别人，相当于“不好意思、抱歉”。",
    theme: "唱错一句",
    difficulty: "基础"
  },
  {
    id: 21,
    prompt: "“唱错咗”里的“咗”常表示什么？",
    choices: [
      "正在进行",
      "将要发生",
      "完全否定",
      "已经完成"
    ],
    answerIndex: 3,
    explanation: "“咗”常表示动作完成，类似“了”。“唱错咗”就是“唱错了”。",
    theme: "错拍补救",
    difficulty: "进阶"
  },
  {
    id: 22,
    prompt: "“你有冇纸巾？”里的“有冇”是什么意思？",
    choices: [
      "有没有",
      "要不要",
      "会不会",
      "是不是"
    ],
    answerIndex: 0,
    explanation: "“有冇”就是“有没有”。“冇”是否定的“没有”。",
    theme: "失恋歌破防",
    difficulty: "基础"
  },
  {
    id: 23,
    prompt: "“呢首歌好易唱”里的“易”是什么意思？",
    choices: [
      "奇怪",
      "昂贵",
      "容易",
      "安静"
    ],
    answerIndex: 2,
    explanation: "“易”就是“容易”。“好易唱”就是“很好唱、很容易唱”。",
    theme: "热身歌",
    difficulty: "基础"
  },
  {
    id: 24,
    prompt: "“呢句好难唱”里的“难”对应粤语口语里常见哪个词？",
    choices: [
      "嘈",
      "难",
      "靓",
      "啱"
    ],
    answerIndex: 1,
    explanation: "“难”在粤语书面和口语里都可用；“好难唱”就是“很难唱”。",
    theme: "高音挑战",
    difficulty: "基础"
  },
  {
    id: 25,
    prompt: "“你慢慢嚟”里的“嚟”是什么意思？",
    choices: [
      "走",
      "买",
      "听",
      "来"
    ],
    answerIndex: 3,
    explanation: "“嚟”是“来”。“慢慢嚟”常用来安慰对方别急，慢慢来。",
    theme: "新手开嗓",
    difficulty: "基础"
  },
  {
    id: 26,
    prompt: "“唔使急，慢慢唱”里的“唔使”是什么意思？",
    choices: [
      "不用",
      "不会",
      "不要紧张",
      "不是"
    ],
    answerIndex: 0,
    explanation: "“唔使”就是“不用、不必”。“唔使急”就是“不用急”。",
    theme: "朋友鼓励",
    difficulty: "基础"
  },
  {
    id: 27,
    prompt: "“快啲啦，副歌到喇”里的“快啲”是什么意思？",
    choices: [
      "小声点",
      "贵一点",
      "快一点",
      "远一点"
    ],
    answerIndex: 2,
    explanation: "“啲”可表示“一点”。“快啲”就是“快一点”。",
    theme: "抢副歌",
    difficulty: "进阶"
  },
  {
    id: 28,
    prompt: "“大声啲唱”里的“大声啲”是什么意思？",
    choices: [
      "快一点",
      "大声一点",
      "晚一点",
      "便宜一点"
    ],
    answerIndex: 1,
    explanation: "“大声啲”就是“大声一点”。“啲”在这里表示程度稍微增加。",
    theme: "麦克风音量",
    difficulty: "进阶"
  },
  {
    id: 29,
    prompt: "“细声啲，隔篱房听到晒”里的“细声啲”是什么意思？",
    choices: [
      "认真一点",
      "开心一点",
      "早点回家",
      "小声一点"
    ],
    answerIndex: 3,
    explanation: "“细声”是“小声”。“细声啲”就是“小声一点”。",
    theme: "隔壁包厢",
    difficulty: "进阶"
  },
  {
    id: 30,
    prompt: "“听到晒”里的“晒”在这里常表示什么？",
    choices: [
      "全部/都",
      "太阳晒",
      "还没",
      "只是一点"
    ],
    answerIndex: 0,
    explanation: "“晒”可表示“全都、完全”。“听到晒”就是“全都听到了”。",
    theme: "隔墙有耳",
    difficulty: "进阶"
  },
  {
    id: 31,
    prompt: "“今晚好开心”里的“开心”用法和普通话相比？",
    choices: [
      "表示开门",
      "表示开始唱",
      "基本一样，表示高兴",
      "表示很累"
    ],
    answerIndex: 2,
    explanation: "“开心”在粤语和普通话里都常表示“高兴、快乐”。",
    theme: "散场合照",
    difficulty: "基础"
  },
  {
    id: 32,
    prompt: "“呢首歌好伤感”里的“伤感”更接近哪种情绪？",
    choices: [
      "兴奋",
      "难过",
      "生气",
      "紧张"
    ],
    answerIndex: 1,
    explanation: "“伤感”是偏难过、感伤的情绪，常用于慢歌或失恋歌氛围。",
    theme: "慢歌时间",
    difficulty: "基础"
  },
  {
    id: 33,
    prompt: "“好耐冇见”里的“好耐”是什么意思？",
    choices: [
      "很多",
      "很好",
      "很近",
      "很久"
    ],
    answerIndex: 3,
    explanation: "“好耐”是“很久”。“好耐冇见”就是“很久没见”。",
    theme: "老友重聚",
    difficulty: "基础"
  },
  {
    id: 34,
    prompt: "“老友”在粤语里通常指什么？",
    choices: [
      "老朋友",
      "老人家",
      "旧手机",
      "老歌手"
    ],
    answerIndex: 0,
    explanation: "“老友”是很亲切的说法，通常指老朋友、好朋友。",
    theme: "朋友局",
    difficulty: "基础"
  },
  {
    id: 35,
    prompt: "“边个点咗呢首？”里的“边个”是什么意思？",
    choices: [
      "旁边那个",
      "每一个",
      "哪个/谁",
      "没有人"
    ],
    answerIndex: 2,
    explanation: "“边个”常表示“谁、哪个人”。这句是在问“谁点了这首”。",
    theme: "神秘点歌",
    difficulty: "进阶"
  },
  {
    id: 36,
    prompt: "“边度有歌词？”里的“边度”是什么意思？",
    choices: [
      "哪个人",
      "哪里",
      "什么时候",
      "多少钱"
    ],
    answerIndex: 1,
    explanation: "“边度”是“哪里”。“边度有”就是“哪里有”。",
    theme: "找歌词屏",
    difficulty: "进阶"
  },
  {
    id: 37,
    prompt: "“几时到我唱？”里的“几时”是什么意思？",
    choices: [
      "多少钱",
      "几个人",
      "哪里",
      "什么时候"
    ],
    answerIndex: 3,
    explanation: "“几时”表示“什么时候”。这句是在问“什么时候到我唱”。",
    theme: "排队等歌",
    difficulty: "进阶"
  },
  {
    id: 38,
    prompt: "“点样唱先啱？”里的“点样”是什么意思？",
    choices: [
      "怎样/怎么",
      "为什么",
      "多少钱",
      "在哪里"
    ],
    answerIndex: 0,
    explanation: "“点样”表示“怎样、怎么”。“点样唱”就是“怎么唱”。",
    theme: "练一句副歌",
    difficulty: "进阶"
  },
  {
    id: 39,
    prompt: "“呢个版本几好听”里的“几”在这里更像什么意思？",
    choices: [
      "多少",
      "几号",
      "挺/蛮",
      "几个人"
    ],
    answerIndex: 2,
    explanation: "“几”在口语里可表示“挺、蛮”。“几好听”就是“挺好听”。",
    theme: "现场版本",
    difficulty: "进阶"
  },
  {
    id: 40,
    prompt: "“真系好听”里的“真系”是什么意思？",
    choices: [
      "只是",
      "真的/确实",
      "马上",
      "原来"
    ],
    answerIndex: 1,
    explanation: "“真系”就是“真的、确实”。也常写作“真係”。",
    theme: "听后感",
    difficulty: "进阶"
  },
  {
    id: 41,
    prompt: "“佢唱得好有感情”里的“佢”是什么意思？",
    choices: [
      "我们",
      "你们",
      "这首",
      "他/她"
    ],
    answerIndex: 3,
    explanation: "“佢”是第三人称，表示“他、她、它”。",
    theme: "评价唱功",
    difficulty: "基础"
  },
  {
    id: 42,
    prompt: "“你哋想唱咩？”里的“你哋”是什么意思？",
    choices: [
      "你们",
      "他们",
      "我们",
      "谁"
    ],
    answerIndex: 0,
    explanation: "“你哋”是“你们”。“咩”在这里是“什么”。",
    theme: "下一首歌",
    difficulty: "基础"
  },
  {
    id: 43,
    prompt: "“想唱咩？”里的“咩”是什么意思？",
    choices: [
      "没有",
      "这么",
      "什么",
      "为什么"
    ],
    answerIndex: 2,
    explanation: "“咩”可表示“什么”，也可作语气词；这里是问“想唱什么”。",
    theme: "点歌讨论",
    difficulty: "基础"
  },
  {
    id: 44,
    prompt: "“呢首歌啲词好入心”里的“啲词”是什么意思？",
    choices: [
      "一点时间",
      "那些歌词/词句",
      "这首歌名",
      "一些朋友"
    ],
    answerIndex: 1,
    explanation: "“啲”可表示“一些、那些”。“啲词”就是这些/那些词句。",
    theme: "歌词共鸣",
    difficulty: "进阶"
  },
  {
    id: 45,
    prompt: "“入心”在形容一首歌时，最接近哪种感觉？",
    choices: [
      "很难买到",
      "唱得太快",
      "音量太小",
      "打动人、入耳入心"
    ],
    answerIndex: 3,
    explanation: "“入心”常形容内容打动人、让人有共鸣。",
    theme: "歌词共鸣",
    difficulty: "进阶"
  },
  {
    id: 46,
    prompt: "“今晚气氛好好”里的“气氛”指什么？",
    choices: [
      "现场感觉/氛围",
      "天气温度",
      "唱歌速度",
      "门票价格"
    ],
    answerIndex: 0,
    explanation: "“气氛”指现场氛围、感觉。演唱会和 K 房都常用。",
    theme: "全场热起来",
    difficulty: "基础"
  },
  {
    id: 47,
    prompt: "“唔紧要，下一首再嚟”里的“唔紧要”是什么意思？",
    choices: [
      "不要紧张",
      "不重要的人",
      "没关系",
      "不需要麦克风"
    ],
    answerIndex: 2,
    explanation: "“唔紧要”就是“没关系、不要紧”。常用于安慰别人。",
    theme: "唱错安慰",
    difficulty: "基础"
  },
  {
    id: 48,
    prompt: "“再嚟一次”里的“再嚟”是什么意思？",
    choices: [
      "再走",
      "再来",
      "再买",
      "再等"
    ],
    answerIndex: 1,
    explanation: "“嚟”是“来”。“再嚟一次”就是“再来一次”。",
    theme: "返场再唱",
    difficulty: "基础"
  },
  {
    id: 49,
    prompt: "“差少少就唱啱”里的“差少少”是什么意思？",
    choices: [
      "差很多",
      "少唱一首",
      "少付一点",
      "差一点点"
    ],
    answerIndex: 3,
    explanation: "“少少”是“一点点”。“差少少”就是“差一点点”。",
    theme: "练到接近",
    difficulty: "进阶"
  },
  {
    id: 50,
    prompt: "“今晚收获唔少”里的“唔少”是什么意思？",
    choices: [
      "不少/很多",
      "一点都没有",
      "不便宜",
      "不想要"
    ],
    answerIndex: 0,
    explanation: "“唔少”就是“不少”。用来表示数量或收获挺多。",
    theme: "通关收官",
    difficulty: "进阶"
  }
];

const movieClassicChapterTitle = '经典港片高阶 50 题';

const movieClassicQuestions = [
  {
    "id": 1,
    "prompt": "这句真正追问的是？",
    "cantoneseText": "你而家系想解决问题，定系想赢场面？",
    "choices": [
      "对方想不想换一个地方谈",
      "对方是不是已经认输",
      "对方到底想解决事，还是只想赢面子",
      "对方想不想看电影"
    ],
    "answerIndex": 2,
    "explanation": "“赢场面”是赢气势和面子，不等于解决问题。",
    "theme": "目标识别",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "问题与面子",
    "pronunciationHint": "nei5 ji4 gaa1 hai6 soeng2 gaai2 kyut3 man6 tai4, ding6 hai6 soeng2 jeng4 coeng4 min6"
  },
  {
    "id": 2,
    "prompt": "说话人的重点是？",
    "cantoneseText": "我唔系唔畀你解释，我系唔想再听同一个版本。",
    "choices": [
      "愿意听新事实，但厌倦重复说辞",
      "完全拒绝任何沟通",
      "想让对方从头再讲一次",
      "觉得对方解释得很精彩"
    ],
    "answerIndex": 0,
    "explanation": "不是拒绝解释，而是拒绝重复同一套说法。",
    "theme": "重复说辞",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "听腻借口",
    "pronunciationHint": "ngo5 m4 hai6 m4 bei2 nei5 gaai2 sik1, ngo5 hai6 m4 soeng2 zoi3 teng1 tung4 jat1 go3 baan2 bun2"
  },
  {
    "id": 3,
    "prompt": "这句在平衡什么？",
    "cantoneseText": "你讲人情，我讲规矩，咁先公平。",
    "choices": [
      "朋友和陌生人的称呼",
      "人情和规则之间的冲突",
      "唱歌和点餐的顺序",
      "热闹和安静的气氛"
    ],
    "answerIndex": 1,
    "explanation": "“讲人情”不等于可以不守规矩，句子强调公平。",
    "theme": "价值冲突",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "人情规矩",
    "pronunciationHint": "nei5 gong2 jan4 cing4, ngo5 gong2 kwai1 geoi2, gam2 sin1 gung1 ping4"
  },
  {
    "id": 4,
    "prompt": "这句不接受什么？",
    "cantoneseText": "你唔好一句误会就当交代咗。",
    "choices": [
      "对方正式解释清楚",
      "对方主动承担后果",
      "双方已经达成和解",
      "用“误会”轻轻带过责任"
    ],
    "answerIndex": 3,
    "explanation": "“一句误会”太轻，不能等于完整交代。",
    "theme": "追责语气",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "误会不够",
    "pronunciationHint": "nei5 m4 hou2 jat1 geoi3 ng6 wui6 zau6 dong3 gaau1 doi6 zo2"
  },
  {
    "id": 5,
    "prompt": "这句话区分了什么？",
    "cantoneseText": "我可以帮你，但唔代表我撑你。",
    "choices": [
      "朋友和同事的关系",
      "现在和以后的时间",
      "行动上帮忙和立场上支持",
      "讲粤语和讲普通话"
    ],
    "answerIndex": 2,
    "explanation": "“撑你”是站队支持；帮忙不一定代表认同。",
    "theme": "关系边界",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "帮忙不站队",
    "pronunciationHint": "ngo5 ho2 ji5 bong1 nei5, daan6 m4 doi6 biu2 ngo5 caang1 nei5"
  },
  {
    "id": 6,
    "prompt": "说话人更可能是？",
    "cantoneseText": "你咁快认错，我啲火都未有位发。",
    "choices": [
      "被对方太快道歉打乱节奏",
      "完全没有生气",
      "想马上结束关系",
      "认真称赞对方反应快"
    ],
    "answerIndex": 0,
    "explanation": "这是带喜感的情绪落空：准备发火但对方先认错。",
    "theme": "情绪落空",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "快认错",
    "pronunciationHint": "nei5 gam3 faai3 jing6 co3, ngo5 di1 fo2 dou1 mei6 jau5 wai2 faat3"
  },
  {
    "id": 7,
    "prompt": "这句最像在？",
    "cantoneseText": "你有你嘅道理，我有我嘅底线。",
    "choices": [
      "表示自己完全同意",
      "邀请对方继续争辩",
      "说两个人没有差别",
      "承认对方立场，同时划出边界"
    ],
    "answerIndex": 3,
    "explanation": "“道理”和“底线”并列，说明理解不等于退让。",
    "theme": "边界表达",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "各有立场",
    "pronunciationHint": "nei5 jau5 nei5 ge3 dou6 lei5, ngo5 jau5 ngo5 ge3 dai2 sin3"
  },
  {
    "id": 8,
    "prompt": "这句批评的是？",
    "cantoneseText": "你咁样道歉，好似顺便通知我。",
    "choices": [
      "道歉内容太详细",
      "道歉像走流程，不够诚恳",
      "通知来得太正式",
      "说话声音太小"
    ],
    "answerIndex": 1,
    "explanation": "“顺便通知”形容冷淡、机械，没有真诚补偿。",
    "theme": "诚意判断",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "道歉失败",
    "pronunciationHint": "nei5 gam2 joeng2 dou6 hip3, hou2 ci5 seon6 bin6 tung1 zi1 ngo5"
  },
  {
    "id": 9,
    "prompt": "这句最准确的语气是？",
    "cantoneseText": "今日我忍你，唔代表次次都忍。",
    "choices": [
      "承诺以后都忍让",
      "表示完全不介意",
      "这次让步，但警告不要再试探",
      "请求对方继续讲"
    ],
    "answerIndex": 2,
    "explanation": "“唔代表次次”是在划线，不是永久让步。",
    "theme": "边界警告",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "最后警告",
    "pronunciationHint": "gam1 jat6 ngo5 jan2 nei5, m4 doi6 biu2 ci3 ci3 dou1 jan2"
  },
  {
    "id": 10,
    "prompt": "这句话在说什么冲突？",
    "cantoneseText": "你要面，我都要交代。",
    "choices": [
      "给你面子和给我说法之间的冲突",
      "两个人都想上台",
      "谁来付账的问题",
      "谁先唱歌的问题"
    ],
    "answerIndex": 0,
    "explanation": "“面”和“交代”都是人际需求，但可能互相拉扯。",
    "theme": "关系权衡",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "两边都难",
    "pronunciationHint": "nei5 jiu3 min6, ngo5 dou1 jiu3 gaau1 doi6"
  },
  {
    "id": 11,
    "prompt": "说话人不满什么？",
    "cantoneseText": "你唔好将问题讲到好似天气咁自然。",
    "choices": [
      "对方真的在聊天气",
      "对方说话太诗意",
      "对方没有看天气预报",
      "对方把责任说得太理所当然"
    ],
    "answerIndex": 3,
    "explanation": "把问题说得像天气，是在淡化人为责任。",
    "theme": "责任识别",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "淡化责任",
    "pronunciationHint": "nei5 m4 hou2 zoeng1 man6 tai4 gong2 dou3 hou2 ci5 tin1 hei3 gam3 zi6 jin4"
  },
  {
    "id": 12,
    "prompt": "这句请求的是？",
    "cantoneseText": "我唔系要你即刻信我，我系要你听埋先。",
    "choices": [
      "马上无条件相信",
      "先听完整件事，再判断",
      "停止所有沟通",
      "只看结果不听解释"
    ],
    "answerIndex": 1,
    "explanation": "“听埋先”是先听完，强调判断前要完整信息。",
    "theme": "沟通顺序",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "先听完",
    "pronunciationHint": "ngo5 m4 hai6 jiu3 nei5 zik1 hak1 seon3 ngo5, ngo5 hai6 jiu3 nei5 teng1 maai4 sin1"
  },
  {
    "id": 13,
    "prompt": "这句和“默认”有什么不同？",
    "cantoneseText": "你唔出声，我唔会当你冇意见。",
    "choices": [
      "强行把沉默当同意",
      "认为对方已经答应",
      "不把沉默当同意",
      "要求对方保持沉默"
    ],
    "answerIndex": 2,
    "explanation": "这句尊重沉默背后的可能意见，比“你不说我当你同意”更稳。",
    "theme": "沉默判断",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "沉默不等于同意",
    "pronunciationHint": "nei5 m4 ceot1 seng1, ngo5 m4 wui5 dong3 nei5 mou5 ji3 gin3"
  },
  {
    "id": 14,
    "prompt": "这句识破了什么？",
    "cantoneseText": "你讲到自己好惨，但重点系你冇做。",
    "choices": [
      "用卖惨转移责任",
      "对方真的很努力",
      "对方已经完成任务",
      "大家都不需要负责"
    ],
    "answerIndex": 0,
    "explanation": "它把注意力从情绪叙事拉回事实：你没有做。",
    "theme": "抓主线",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "卖惨失效",
    "pronunciationHint": "nei5 gong2 dou3 zi6 gei2 hou2 caam2, daan6 zung6 dim2 hai6 nei5 mou5 zou6"
  },
  {
    "id": 15,
    "prompt": "这句区分了什么？",
    "cantoneseText": "你系想讲清楚，定系想讲赢？",
    "choices": [
      "粤语和普通话",
      "现在和以后",
      "朋友和老板",
      "沟通目的和胜负心"
    ],
    "answerIndex": 3,
    "explanation": "“讲清楚”是解决，“讲赢”是争胜。",
    "theme": "目标识别",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "沟通还是赢",
    "pronunciationHint": "nei5 hai6 soeng2 gong2 cing1 co2, ding6 hai6 soeng2 gong2 jeng4"
  },
  {
    "id": 16,
    "prompt": "这句要求对方？",
    "cantoneseText": "你畀我一个理由，唔好畀我一篇小说。",
    "choices": [
      "写得更详细",
      "简短讲重点",
      "讲一个笑话",
      "换一种语言"
    ],
    "answerIndex": 1,
    "explanation": "“一篇小说”是夸张说解释太长，要求回到重点。",
    "theme": "抓重点",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "拒绝长篇",
    "pronunciationHint": "nei5 bei2 ngo5 jat1 go3 lei5 jau4, m4 hou2 bei2 ngo5 jat1 pin1 siu2 syut3"
  },
  {
    "id": 17,
    "prompt": "这句表达的是？",
    "cantoneseText": "你啱，唔代表我冇感受。",
    "choices": [
      "你完全错了",
      "我没有任何情绪",
      "逻辑上你可能对，但我仍然受伤",
      "我已经完全接受"
    ],
    "answerIndex": 2,
    "explanation": "它把“谁对”与“感受受影响”分开。",
    "theme": "情绪边界",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "对也会伤",
    "pronunciationHint": "nei5 ngaam1, m4 doi6 biu2 ngo5 mou5 gam2 sau6"
  },
  {
    "id": 18,
    "prompt": "这句批评的是？",
    "cantoneseText": "你唔好用笑声包住个问题。",
    "choices": [
      "用玩笑掩盖问题",
      "笑得太小声",
      "问题太好笑",
      "对方不会讲笑话"
    ],
    "answerIndex": 0,
    "explanation": "“包住个问题”是用笑声包装、遮住真正问题。",
    "theme": "玩笑遮掩",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "笑声包装",
    "pronunciationHint": "nei5 m4 hou2 jung6 siu3 seng1 baau1 zyu6 go3 man6 tai4"
  },
  {
    "id": 19,
    "prompt": "“过骨”在这里接近？",
    "cantoneseText": "我帮你圆场，唔系帮你过骨。",
    "choices": [
      "真的过马路",
      "唱得过瘾",
      "看完电影",
      "蒙混过关"
    ],
    "answerIndex": 3,
    "explanation": "“过骨”可理解为混过去、蒙过关。圆场不是替你逃责。",
    "theme": "圆场边界",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "圆场不是免责",
    "pronunciationHint": "ngo5 bong1 nei5 jyun4 coeng4, m4 hai6 bong1 nei5 gwo3 gwat1"
  },
  {
    "id": 20,
    "prompt": "潜台词是什么？",
    "cantoneseText": "你唔好当我冇脾气，只系我未出声。",
    "choices": [
      "我完全不会生气",
      "我不是没底线，只是还没爆发",
      "我听不懂你说什么",
      "我想请你继续"
    ],
    "answerIndex": 1,
    "explanation": "“未出声”暗示正在忍，不代表没有脾气。",
    "theme": "压火语气",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "忍住未爆",
    "pronunciationHint": "nei5 m4 hou2 dong3 ngo5 mou5 pei4 hei3, zi2 hai6 ngo5 mei6 ceot1 seng1"
  },
  {
    "id": 21,
    "prompt": "这题想训练什么？",
    "cantoneseText": "听辨：先注意“诗 si1”和“事 si6”的声调差别。",
    "choices": [
      "粤语没有声调差别",
      "普通话声调和粤语完全一样",
      "同声母韵母下，声调改变会换字义",
      "只要看字形就够了"
    ],
    "answerIndex": 2,
    "explanation": "“诗 si1”高平，“事 si6”低去；声母韵母接近，声调决定意义。",
    "theme": "声调感知",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "声调最小对比",
    "pronunciationHint": "si1 / si6",
    "phoneticFocus": "高平 vs 低去"
  },
  {
    "id": 22,
    "prompt": "最合理的判断是？",
    "cantoneseText": "听辨：“分 fan1”和“份 fan6”差别主要在哪里？",
    "choices": [
      "声调不同，意义不同",
      "声母完全不同",
      "韵母完全不同",
      "只是普通话读法不同"
    ],
    "answerIndex": 0,
    "explanation": "fan1 和 fan6 声母韵母相同，重点在声调。",
    "theme": "声调感知",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "一声六声",
    "pronunciationHint": "fan1 / fan6",
    "phoneticFocus": "高平 vs 低去"
  },
  {
    "id": 23,
    "prompt": "正确理解是？",
    "cantoneseText": "听辨：“先 sin1”和“善 sin6”给人的高低感有什么不同？",
    "choices": [
      "两个完全同调",
      "sin6 必须读得更高",
      "粤语不区分这个",
      "sin1 较高平，sin6 较低沉"
    ],
    "answerIndex": 3,
    "explanation": "这是建立“高平”和“低去”的听觉参照。",
    "theme": "声调感知",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "高低感",
    "pronunciationHint": "sin1 / sin6",
    "phoneticFocus": "高平 vs 低去"
  },
  {
    "id": 24,
    "prompt": "它体现了什么？",
    "cantoneseText": "听辨：“食 sik6”为什么听起来短促？",
    "choices": [
      "因为它一定读得很高",
      "入声尾 -k 让音节收得短",
      "因为它没有声母",
      "因为普通话也一样"
    ],
    "answerIndex": 1,
    "explanation": "粤语保留 -p/-t/-k 入声尾，常让音节短促收住。",
    "theme": "入声感知",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "入声 -k",
    "pronunciationHint": "sik6",
    "phoneticFocus": "入声短促"
  },
  {
    "id": 25,
    "prompt": "这类读音重点在？",
    "cantoneseText": "听辨：“急 gap1”最后收得很紧，原因是？",
    "choices": [
      "鼻音 -ng 结尾",
      "没有韵尾",
      "-p 入声尾闭合",
      "必须拖长"
    ],
    "answerIndex": 2,
    "explanation": "gap1 的 -p 是闭塞尾，读感短促。",
    "theme": "入声感知",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "入声 -p",
    "pronunciationHint": "gap1",
    "phoneticFocus": "入声短促"
  },
  {
    "id": 26,
    "prompt": "最核心差异是？",
    "cantoneseText": "听辨：“七 cat1”不像普通话 qī 那样舒展开，为什么？",
    "choices": [
      "粤语有 -t 入声尾",
      "粤语没有声调",
      "普通话没有元音",
      "两个读法完全相同"
    ],
    "answerIndex": 0,
    "explanation": "cat1 的 -t 收尾明显，是普通话里不容易感到的差异。",
    "theme": "入声感知",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "入声 -t",
    "pronunciationHint": "cat1",
    "phoneticFocus": "入声短促"
  },
  {
    "id": 27,
    "prompt": "这题训练的是？",
    "cantoneseText": "听辨：“心 sam1”和“生 sang1”主要差在哪里？",
    "choices": [
      "一声和六声差别",
      "有没有声母",
      "是不是英文音",
      "-m 和 -ng 鼻音尾差别"
    ],
    "answerIndex": 3,
    "explanation": "粤语保留 -m、-n、-ng 等鼻音尾，尾音会影响听感。",
    "theme": "鼻音尾",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "m/ng 结尾",
    "pronunciationHint": "sam1 / sang1",
    "phoneticFocus": "鼻音韵尾"
  },
  {
    "id": 28,
    "prompt": "正确答案是？",
    "cantoneseText": "听辨：“三 saam1”和“生 sang1”不是同一个韵尾，差别是？",
    "choices": [
      "两个完全一样",
      "一个较开，一个以 -ng 收住",
      "只差普通话声调",
      "三一定更短促"
    ],
    "answerIndex": 1,
    "explanation": "saam1 和 sang1 的韵尾不同，不能只靠普通话感受套。",
    "theme": "鼻音尾",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "韵尾对比",
    "pronunciationHint": "saam1 / sang1",
    "phoneticFocus": "开口韵 vs ng尾"
  },
  {
    "id": 29,
    "prompt": "最准确的是？",
    "cantoneseText": "听辨：“唔 m4”本身可以单独成音节，这对普通话母语者难在哪里？",
    "choices": [
      "它没有任何声调",
      "它必须读成 wu",
      "它几乎像鼻音单独成节",
      "它只能写不能读"
    ],
    "answerIndex": 2,
    "explanation": "“唔 m4”对普通话母语者难，因为它不是熟悉的 wu，而是鼻音化音节。",
    "theme": "鼻音音节",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "m 成音节",
    "pronunciationHint": "m4",
    "phoneticFocus": "鼻音成节"
  },
  {
    "id": 30,
    "prompt": "这题提醒的是？",
    "cantoneseText": "听辨：“我 ngo5”开头的 ng-，普通话母语者容易怎样？",
    "choices": [
      "容易漏掉鼻音开头",
      "必须读成 wo3",
      "没有声母更标准",
      "只看普通话拼音即可"
    ],
    "answerIndex": 0,
    "explanation": "ngo5 的 ng- 是粤语常见声母，不能简单套普通话“我”。",
    "theme": "声母差异",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "ng- 声母",
    "pronunciationHint": "ngo5",
    "phoneticFocus": "ng开头"
  },
  {
    "id": 31,
    "prompt": "这句判断的依据是什么？",
    "cantoneseText": "你话“冇所谓”，但你个样好有所谓。",
    "choices": [
      "说话人完全相信对方",
      "对方已经没有情绪",
      "这是天气描述",
      "表情和话语不一致"
    ],
    "answerIndex": 3,
    "explanation": "“个样”出卖真实情绪，和嘴上“冇所谓”冲突。",
    "theme": "表情线索",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "口不对心",
    "pronunciationHint": "nei5 waa6 mou5 so2 wai6, daan6 nei5 go3 joeng2 hou2 jau5 so2 wai6"
  },
  {
    "id": 32,
    "prompt": "这句在施加什么压力？",
    "cantoneseText": "你而家唔讲，迟啲就唔好话冇机会。",
    "choices": [
      "以后还有很多机会",
      "现在给机会，之后别抱怨",
      "完全不让对方说话",
      "已经替对方决定"
    ],
    "answerIndex": 1,
    "explanation": "“迟啲就唔好话…”是预先封住之后的抱怨。",
    "theme": "机会压力",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "机会窗口",
    "pronunciationHint": "nei5 ji4 gaa1 m4 gong2, ci4 di1 zau6 m4 hou2 waa6 mou5 gei1 wui6"
  },
  {
    "id": 33,
    "prompt": "说话人真正担心？",
    "cantoneseText": "你帮我之前，可唔可以先唔好帮倒忙？",
    "choices": [
      "对方不愿帮忙",
      "对方帮得太专业",
      "对方越帮越乱",
      "事情已经完成"
    ],
    "answerIndex": 2,
    "explanation": "“帮倒忙”是好心但造成反效果。",
    "theme": "帮忙风险",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "帮倒忙",
    "pronunciationHint": "nei5 bong1 ngo5 zi1 cin4, ho2 m4 ho2 ji5 sin1 m4 hou2 bong1 dou3 mong4"
  },
  {
    "id": 34,
    "prompt": "这句在反驳什么？",
    "cantoneseText": "你唔好将“我以为”讲到好似证据。",
    "choices": [
      "把主观猜测当事实",
      "证据太多",
      "对方说得太快",
      "对方完全没想法"
    ],
    "answerIndex": 0,
    "explanation": "“我以为”只是主观判断，不等于证据。",
    "theme": "证据意识",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "猜测不是证据",
    "pronunciationHint": "nei5 m4 hou2 zoeng1 ngo5 ji5 wai4 gong2 dou3 hou2 ci5 zing3 geoi3"
  },
  {
    "id": 35,
    "prompt": "这句说明？",
    "cantoneseText": "你咁样帮我解释，我仲难解释。",
    "choices": [
      "对方解释得非常清楚",
      "自己已经完全没事",
      "不需要任何说明",
      "对方越解释越添乱"
    ],
    "answerIndex": 3,
    "explanation": "“仲难解释”表示帮忙解释反而增加麻烦。",
    "theme": "越帮越乱",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "解释翻车",
    "pronunciationHint": "nei5 gam2 joeng2 bong1 ngo5 gaai2 sik1, ngo5 zung6 naan4 gaai2 sik1"
  },
  {
    "id": 36,
    "prompt": "说话人识破了什么？",
    "cantoneseText": "你讲到尾都系想我让步啫。",
    "choices": [
      "对方真心求公平",
      "对方绕来绕去其实要自己退",
      "对方没有任何目的",
      "对方只是在练口语"
    ],
    "answerIndex": 1,
    "explanation": "“讲到尾”是说到底，重点是识破背后的要求。",
    "theme": "话术识别",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "绕到让步",
    "pronunciationHint": "nei5 gong2 dou3 mei5 dou1 hai6 soeng2 ngo5 joeng6 bou6 ze1"
  },
  {
    "id": 37,
    "prompt": "这句批评的是？",
    "cantoneseText": "你唔好一边讲公平，一边拣晒对你有利嘅规矩。",
    "choices": [
      "完全尊重规则",
      "不知道规则是什么",
      "选择性讲规则",
      "只是在点餐"
    ],
    "answerIndex": 2,
    "explanation": "说公平却只挑有利规则，是选择性公平。",
    "theme": "规则公平",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "选择性规则",
    "pronunciationHint": "nei5 m4 hou2 jat1 bin1 gong2 gung1 ping4, jat1 bin1 gaan2 saai3 deoi3 nei5 jau5 lei6 ge3 kwai1 geoi2"
  },
  {
    "id": 38,
    "prompt": "这句提醒什么？",
    "cantoneseText": "你唔好讲到自己系唯一受害者。",
    "choices": [
      "事情里可能不止你受伤",
      "你完全没有受影响",
      "你一定是唯一正确的人",
      "对方已经赢了"
    ],
    "answerIndex": 0,
    "explanation": "它反对把复杂关系简化成单一受害者叙事。",
    "theme": "叙事平衡",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "不止你受伤",
    "pronunciationHint": "nei5 m4 hou2 gong2 dou3 zi6 gei2 hai6 wai4 jat1 sau6 hoi6 ze2"
  },
  {
    "id": 39,
    "prompt": "这句区分了什么？",
    "cantoneseText": "你系想我理解你，定系想我认同你？",
    "choices": [
      "听懂粤语和会讲粤语",
      "朋友和陌生人",
      "昨天和今天",
      "理解处境和认同做法"
    ],
    "answerIndex": 3,
    "explanation": "我可以理解你为什么这样，但不一定认同你这样做。",
    "theme": "理解不等于认同",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "理解/认同",
    "pronunciationHint": "nei5 hai6 soeng2 ngo5 lei5 gaai2 nei5, ding6 hai6 soeng2 ngo5 jing6 tung4 nei5"
  },
  {
    "id": 40,
    "prompt": "说话人表达的是？",
    "cantoneseText": "你啲道理好完整，但件事都系错。",
    "choices": [
      "只要理由多就一定对",
      "理由完整不代表行为正确",
      "对方完全没有解释",
      "事情已经圆满"
    ],
    "answerIndex": 1,
    "explanation": "它指出解释体系完整，也可能服务于一个错误选择。",
    "theme": "理由与对错",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "有理由也会错",
    "pronunciationHint": "nei5 di1 dou6 lei5 hou2 jyun4 zing2, daan6 gin6 si6 dou1 hai6 co3"
  },
  {
    "id": 41,
    "prompt": "这句反感什么？",
    "cantoneseText": "你唔好用“大家朋友”四个字压我。",
    "choices": [
      "朋友之间正常邀请",
      "四个字太难读",
      "用朋友关系施压",
      "大家不是朋友"
    ],
    "answerIndex": 2,
    "explanation": "“大家朋友”可以是温情，也可以被拿来要求让步。",
    "theme": "关系施压",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "朋友压力",
    "pronunciationHint": "nei5 m4 hou2 jung6 daai6 gaa1 pang4 jau5 sei3 go3 zi6 aat3 ngo5"
  },
  {
    "id": 42,
    "prompt": "这句要求什么？",
    "cantoneseText": "你要我退一步，都要话我知退去边。",
    "choices": [
      "让步要有明确边界",
      "退一步一定最好",
      "随便退到哪里都行",
      "对方不用解释"
    ],
    "answerIndex": 0,
    "explanation": "“退去边”是问让步的范围和底线。",
    "theme": "让步边界",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "退到哪里",
    "pronunciationHint": "nei5 jiu3 ngo5 teoi3 jat1 bou6, dou1 jiu3 waa6 ngo5 zi1 teoi3 heoi3 bin1"
  },
  {
    "id": 43,
    "prompt": "这句最核心的提醒是？",
    "cantoneseText": "你唔好将礼貌当同意。",
    "choices": [
      "礼貌就是完全同意",
      "不礼貌才算拒绝",
      "不用回应任何人",
      "客气回应不等于答应"
    ],
    "answerIndex": 3,
    "explanation": "这是非常实用的人际判断：礼貌不等于 consent。",
    "theme": "礼貌边界",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "礼貌不等于同意",
    "pronunciationHint": "nei5 m4 hou2 zoeng1 lai5 maau6 dong3 tung4 ji3"
  },
  {
    "id": 44,
    "prompt": "这句追问的是？",
    "cantoneseText": "你而家笑，系因为好笑，定系因为唔知点收科？",
    "choices": [
      "对方会不会唱歌",
      "对方是在真笑还是尴尬圆场",
      "对方是否准备买单",
      "对方想看喜剧片"
    ],
    "answerIndex": 1,
    "explanation": "“唔知点收科”是事情不知如何收场，笑可能只是掩饰。",
    "theme": "尴尬圆场",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "笑的原因",
    "pronunciationHint": "nei5 ji4 gaa1 siu3, hai6 jan1 wai6 hou2 siu3, ding6 hai6 jan1 wai6 m4 zi1 dim2 sau1 fo1"
  },
  {
    "id": 45,
    "prompt": "问题在哪里？",
    "cantoneseText": "你话我误会你，但你又唔讲清楚畀我听。",
    "choices": [
      "对方解释太多",
      "双方已经完全理解",
      "指责别人误会，却不提供清楚解释",
      "误会不存在"
    ],
    "answerIndex": 2,
    "explanation": "不能只说“你误会了”，还要提供可理解的解释。",
    "theme": "解释责任",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "误会要解释",
    "pronunciationHint": "nei5 waa6 ngo5 ng6 wui6 nei5, daan6 nei5 jau6 m4 gong2 cing1 co2 bei2 ngo5 teng1"
  },
  {
    "id": 46,
    "prompt": "这句在追问？",
    "cantoneseText": "你成日讲“迟啲”，但迟到几时先系重点。",
    "choices": [
      "模糊承诺的具体时间",
      "迟到是否好玩",
      "现在几点钟",
      "谁先离开"
    ],
    "answerIndex": 0,
    "explanation": "“迟啲”很常用，但也可能太模糊；追问具体时间才有行动价值。",
    "theme": "模糊承诺",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "迟啲几时",
    "pronunciationHint": "nei5 seng4 jat6 gong2 ci4 di1, daan6 ci4 dou3 gei2 si4 sin1 hai6 zung6 dim2"
  },
  {
    "id": 47,
    "prompt": "这句说明沉默可能是什么？",
    "cantoneseText": "你唔好将沉默当和平。",
    "choices": [
      "一定代表没事",
      "一定代表同意",
      "一定代表开心",
      "可能只是暂时压住冲突"
    ],
    "answerIndex": 3,
    "explanation": "沉默可能是忍住、失望或观察，不等于关系修复。",
    "theme": "沉默解读",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "沉默不等于和平",
    "pronunciationHint": "nei5 m4 hou2 zoeng1 cam4 mak6 dong3 wo4 ping4"
  },
  {
    "id": 48,
    "prompt": "这句区分了什么？",
    "cantoneseText": "你帮我讲好说话，唔代表件事变好。",
    "choices": [
      "讲粤语和讲普通话",
      "话术好听和事实改善",
      "朋友和老板",
      "电影和现实"
    ],
    "answerIndex": 1,
    "explanation": "好听的话可以缓和场面，但不等于问题解决。",
    "theme": "话术与事实",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "好话不等于好事",
    "pronunciationHint": "nei5 bong1 ngo5 gong2 hou2 syut3 waa6, m4 doi6 biu2 gin6 si6 bin3 hou2"
  },
  {
    "id": 49,
    "prompt": "这句讽刺什么？",
    "cantoneseText": "你唔好等到冇得拣，先话自己好坚定。",
    "choices": [
      "选择太多所以坚定",
      "对方很早就决定",
      "没选择后才包装成坚定",
      "坚定一定不好"
    ],
    "answerIndex": 2,
    "explanation": "没有选择时说自己坚定，是把被动包装成主动。",
    "theme": "自我包装",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "没得拣",
    "pronunciationHint": "nei5 m4 hou2 dang2 dou3 mou5 dak1 gaan2, sin1 waa6 zi6 gei2 hou2 gin1 ding6"
  },
  {
    "id": 50,
    "prompt": "问题是？",
    "cantoneseText": "你讲嘅系事实，但你拣住讲。",
    "choices": [
      "选择性呈现事实",
      "完全没有事实",
      "事实太完整",
      "对方说得太慢"
    ],
    "answerIndex": 0,
    "explanation": "“拣住讲”是只说对自己有利的部分。",
    "theme": "事实筛选",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "选择性事实",
    "pronunciationHint": "nei5 gong2 ge3 hai6 sat6 si6, daan6 nei5 gaan2 zyu6 gong2"
  }
];

const movieComedyChapterTitle = '无厘头港片进阶 50 题';

const movieComedyQuestions = [
  {
    "id": 1,
    "prompt": "“你咁认真讲废话，我差啲信咗。”这句最像在？",
    "cantoneseText": "你咁认真讲废话，我差啲信咗。",
    "choices": [
      "🧾 真诚道谢",
      "🎬 认真记录会议",
      "😂 吐槽对方一本正经胡说",
      "🍵 叫对方加糖"
    ],
    "answerIndex": 2,
    "explanation": "“差啲信咗”就是差点信了，搭配“认真讲废话”是在玩笑式拆穿。",
    "theme": "无厘头拆台",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "玩笑吐槽",
    "pronunciationHint": "nei5 gam3 jing6 zan1 gong2 fai3 waa6, ngo5 caa1 di1 seon3 zo2"
  },
  {
    "id": 2,
    "prompt": "“你唔好望住我，我都系啱啱先知。”潜台词是？",
    "cantoneseText": "你唔好望住我，我都系啱啱先知。",
    "choices": [
      "👀 别看我，我也是刚知道",
      "🕶️ 我一早安排好了",
      "🎤 我准备唱副歌",
      "💸 我已经买单"
    ],
    "answerIndex": 0,
    "explanation": "“唔好望住我”是在撇清责任，“啱啱先知”表示自己也是刚知道。",
    "theme": "甩锅现场",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "责任边界",
    "pronunciationHint": "nei5 m4 hou2 mong6 zyu6 ngo5, ngo5 dou1 hai6 ngaam1 ngaam1 sin1 zi1"
  },
  {
    "id": 3,
    "prompt": "补全：“呢个计划听落好威，____就知痛。”",
    "cantoneseText": "呢个计划听落好威，做落就知痛。",
    "choices": [
      "🍜 食落",
      "🛠️ 做落",
      "😴 瞓醒",
      "📞 打错"
    ],
    "answerIndex": 1,
    "explanation": "“做落”是实际做起来。句子在说方案听着厉害，执行才知道难。",
    "theme": "纸上谈兵",
    "difficulty": "挑战",
    "questionType": "missingPhrase",
    "skillTag": "执行难度",
    "pronunciationHint": "ni1 go3 gai3 waak6 teng1 lok6 hou2 wai1, zou6 lok6 zau6 zi1 tung3"
  },
  {
    "id": 4,
    "prompt": "“你话冇问题，我反而开始惊。”语气最接近？",
    "cantoneseText": "你话冇问题，我反而开始惊。",
    "choices": [
      "🙏 完全放心",
      "🎉 准备庆祝",
      "🚕 想马上离开香港",
      "😅 越保证越不放心"
    ],
    "answerIndex": 3,
    "explanation": "“反而开始惊”说明对方的保证没有安抚效果，反而让人更担心。",
    "theme": "反向安心",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "反差语气",
    "pronunciationHint": "nei5 waa6 mou5 man6 tai4, ngo5 faan2 ji4 hoi1 ci2 geng1"
  },
  {
    "id": 5,
    "prompt": "“唔系我小器，系你太大方咁使我啲钱。”重点在？",
    "cantoneseText": "唔系我小器，系你太大方咁使我啲钱。",
    "choices": [
      "🤝 我很欣赏对方慷慨",
      "🍵 我想请大家饮茶",
      "💳 对方花我的钱太豪爽",
      "🎭 我在夸自己大方"
    ],
    "answerIndex": 2,
    "explanation": "这句用“唔系…系…”制造喜剧反转：不是我小气，是你花我的钱太大方。",
    "theme": "钱包保卫战",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "喜剧反转",
    "pronunciationHint": "m4 hai6 ngo5 siu2 hei3, hai6 nei5 taai3 daai6 fong1 gam2 sai2 ngo5 di1 cin2"
  },
  {
    "id": 6,
    "prompt": "“你畀面我，我咪畀返个台阶你落。”这里“台阶”是？",
    "cantoneseText": "你畀面我，我咪畀返个台阶你落。",
    "choices": [
      "🪜 真的楼梯",
      "🕶️ 下台阶/保全面子",
      "🍚 一碗饭",
      "🚪 门口位置"
    ],
    "answerIndex": 1,
    "explanation": "“畀个台阶落”是给对方一个不尴尬的退路。",
    "theme": "保面讲数",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "面子文化",
    "pronunciationHint": "nei5 bei2 min6 ngo5, ngo5 mai6 bei2 faan1 go3 toi4 gaai1 nei5 lok6"
  },
  {
    "id": 7,
    "prompt": "“你而家先话唔得，会唔会太有创意？”这句是在？",
    "cantoneseText": "你而家先话唔得，会唔会太有创意？",
    "choices": [
      "🎨 真心欣赏创意",
      "📚 问设计灵感",
      "🍿 约看电影",
      "😑 讽刺对方太迟反口"
    ],
    "answerIndex": 3,
    "explanation": "“太有创意”在这里是反话，重点是现在才说不行太离谱。",
    "theme": "临时反口",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "反话识别",
    "pronunciationHint": "nei5 ji4 gaa1 sin1 waa6 m4 dak1, wui5 m4 wui5 taai3 jau5 cong3 ji3"
  },
  {
    "id": 8,
    "prompt": "“我唔系唔信你，我系信完会出事。”最准确理解是？",
    "cantoneseText": "我唔系唔信你，我系信完会出事。",
    "choices": [
      "😂 用反话表达不敢信",
      "🤝 完全信任对方",
      "⚠️ 对方可信但风险太大",
      "📦 想寄快递"
    ],
    "answerIndex": 0,
    "explanation": "表面说不是不信，后半句“信完会出事”才是真重点：不敢信。",
    "theme": "危险信任",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "转折潜台词",
    "pronunciationHint": "ngo5 m4 hai6 m4 seon3 nei5, ngo5 hai6 seon3 jyun4 wui5 ceot1 si6"
  },
  {
    "id": 9,
    "prompt": "“你咁快认错，我啲对白准备晒点算？”说话人更像？",
    "cantoneseText": "你咁快认错，我啲对白准备晒点算？",
    "choices": [
      "😤 真的非常失望",
      "📖 忘了对白",
      "🎭 开玩笑说没机会发挥",
      "🎤 要唱下一首"
    ],
    "answerIndex": 2,
    "explanation": "“对白准备晒”是喜剧化说法：我准备好骂/讲了，你太快认错让我没戏。",
    "theme": "喜剧收火",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "无厘头反差",
    "pronunciationHint": "nei5 gam3 faai3 jing6 co3, ngo5 di1 deoi3 baak6 zeon2 bei6 saai3 dim2 syun3"
  },
  {
    "id": 10,
    "prompt": "“你讲到咁圆，我差啲以为你卖月饼。”这句在形容对方？",
    "cantoneseText": "你讲到咁圆，我差啲以为你卖月饼。",
    "choices": [
      "🥮 说话太圆滑",
      "🌕 真的卖月饼",
      "🎯 说话很直接",
      "🧊 语气很冷"
    ],
    "answerIndex": 0,
    "explanation": "“讲到咁圆”是说话圆滑，月饼只是无厘头比喻。",
    "theme": "圆滑发言",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "比喻玩梗",
    "pronunciationHint": "nei5 gong2 dou3 gam3 jyun4, ngo5 caa1 di1 ji5 wai4 nei5 maai6 jyut6 beng2"
  },
  {
    "id": 11,
    "prompt": "“唔好讲到我好似欠你一套戏飞。”最像在反驳？",
    "cantoneseText": "唔好讲到我好似欠你一套戏飞。",
    "choices": [
      "🍿 想请对方看电影",
      "💰 确认票价",
      "😴 想睡觉",
      "🎟️ 不想被说得像欠了大人情"
    ],
    "answerIndex": 3,
    "explanation": "“欠你一套戏飞”是夸张说法，重点是不要把我说得像欠你很大人情。",
    "theme": "人情压力",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "人情边界",
    "pronunciationHint": "m4 hou2 gong2 dou3 ngo5 hou2 ci5 him3 nei5 jat1 tou3 hei3 fei1"
  },
  {
    "id": 12,
    "prompt": "反向选择：“你继续讲，我听紧。”在冷场语气里通常不是？",
    "cantoneseText": "你继续讲，我听紧。",
    "choices": [
      "🧊 可能在压着火",
      "😇 百分百真诚崇拜",
      "👂 表面给机会",
      "⏳ 让对方继续解释"
    ],
    "answerIndex": 1,
    "explanation": "这句可以真诚，但在冷场语气里常带压力，不是崇拜式听讲。",
    "theme": "冷场审判",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "反向选择",
    "pronunciationHint": "nei5 gai3 zuk6 gong2, ngo5 teng1 gan2"
  },
  {
    "id": 13,
    "prompt": "“我有畀机会你，系你自己接唔住。”重点是？",
    "cantoneseText": "我有畀机会你，系你自己接唔住。",
    "choices": [
      "🏀 真的接球失败",
      "🎉 表示机会很多",
      "🧾 把责任推回对方",
      "🍜 叫对方接外卖"
    ],
    "answerIndex": 2,
    "explanation": "“接唔住”是比喻没把握住机会，说话人把责任放回对方身上。",
    "theme": "机会错过",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "责任归因",
    "pronunciationHint": "ngo5 jau5 bei2 gei1 wui6 nei5, hai6 nei5 zi6 gei2 zip3 m4 zyu6"
  },
  {
    "id": 14,
    "prompt": "补全：“你要我帮你都得，不过____先。”",
    "cantoneseText": "你要我帮你都得，不过讲清楚先。",
    "choices": [
      "💬 讲清楚",
      "🕺 跳两步",
      "🥤 加冰",
      "📺 转台"
    ],
    "answerIndex": 0,
    "explanation": "“讲清楚先”是在帮忙前先确认条件或事实，是常用边界表达。",
    "theme": "帮忙设线",
    "difficulty": "进阶",
    "questionType": "missingPhrase",
    "skillTag": "条件边界",
    "pronunciationHint": "nei5 jiu3 ngo5 bong1 nei5 dou1 dak1, bat1 gwo3 gong2 cing1 co2 sin1"
  },
  {
    "id": 15,
    "prompt": "“你系咪觉得我个样写住好呃？”意思是？",
    "cantoneseText": "你系咪觉得我个样写住好呃？",
    "choices": [
      "📝 我脸上真的有字",
      "😂 我长得很好笑",
      "🎬 我想演坏人",
      "🤨 你是不是觉得我很好骗"
    ],
    "answerIndex": 3,
    "explanation": "“个样写住”是夸张说法，重点是质疑对方把自己当容易被骗的人。",
    "theme": "识破套路",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "反问拆穿",
    "pronunciationHint": "nei5 hai6 mai6 gok3 dak1 ngo5 go3 joeng2 se2 zyu6 hou2 aak1"
  },
  {
    "id": 16,
    "prompt": "“你唔出声，我当你默认喇。”这句可能有什么问题？",
    "cantoneseText": "你唔出声，我当你默认喇。",
    "choices": [
      "🤝 认真征得同意",
      "😏 借沉默当同意",
      "😴 叫对方睡觉",
      "📢 要对方大声唱"
    ],
    "answerIndex": 1,
    "explanation": "“当你默认”可能是压迫式推进，对方不出声不一定代表同意。",
    "theme": "沉默陷阱",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "潜在压力",
    "pronunciationHint": "nei5 m4 ceot1 seng1, ngo5 dong3 nei5 mak6 jing6 laa3"
  },
  {
    "id": 17,
    "prompt": "“我唔嬲，我只系记性好。”语气更像？",
    "cantoneseText": "我唔嬲，我只系记性好。",
    "choices": [
      "😇 完全放下",
      "🧠 单纯夸记忆力",
      "📒 记账式不满",
      "🎤 准备唱歌"
    ],
    "answerIndex": 2,
    "explanation": "表面说不生气，后面“记性好”暗示会记住这笔账。",
    "theme": "笑住记账",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "反话威胁",
    "pronunciationHint": "ngo5 m4 nau1, ngo5 zi2 hai6 gei3 sing3 hou2"
  },
  {
    "id": 18,
    "prompt": "“你畀我一个理由，唔好畀我一篇作文。”重点是？",
    "cantoneseText": "你畀我一个理由，唔好畀我一篇作文。",
    "choices": [
      "✂️ 要简短重点，不要长篇解释",
      "📚 想看作文",
      "🖊️ 要对方写信",
      "🎓 在上语文课"
    ],
    "answerIndex": 0,
    "explanation": "“一篇作文”是吐槽解释太长，真正要求是给一个重点理由。",
    "theme": "拒绝长篇",
    "difficulty": "进阶",
    "questionType": "meaning",
    "skillTag": "抓重点",
    "pronunciationHint": "nei5 bei2 ngo5 jat1 go3 lei5 jau4, m4 hou2 bei2 ngo5 jat1 pin1 zok3 man2"
  },
  {
    "id": 19,
    "prompt": "“你咁客气，我开始觉得有伏。”这里“有伏”是？",
    "cantoneseText": "你咁客气，我开始觉得有伏。",
    "choices": [
      "🎁 一定有礼物",
      "🍵 茶很好喝",
      "📷 光线很好",
      "🕳️ 可能有陷阱"
    ],
    "answerIndex": 3,
    "explanation": "“有伏”是有坑、有陷阱。过分客气反而让人警觉。",
    "theme": "客气有坑",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "警觉语气",
    "pronunciationHint": "nei5 gam3 haak3 hei3, ngo5 hoi1 ci2 gok3 dak1 jau5 fuk6"
  },
  {
    "id": 20,
    "prompt": "“你话随便，通常最唔随便。”最接近？",
    "cantoneseText": "你话随便，通常最唔随便。",
    "choices": [
      "🧘 对方真的完全无所谓",
      "😅 说随便的人往往很有要求",
      "🍜 只是在点餐",
      "🧾 讨论账单格式"
    ],
    "answerIndex": 1,
    "explanation": "这是生活场景里的反差吐槽：“随便”经常并不是真的随便。",
    "theme": "选择困难",
    "difficulty": "进阶",
    "questionType": "tone",
    "skillTag": "生活潜台词",
    "pronunciationHint": "nei5 waa6 ceoi4 bin6, tung1 soeng4 zeoi3 m4 ceoi4 bin6"
  },
  {
    "id": 21,
    "prompt": "“我话冇所谓，唔代表你可以乱嚟。”这句在划什么线？",
    "cantoneseText": "我话冇所谓，唔代表你可以乱嚟。",
    "choices": [
      "🥳 什么都可以随便做",
      "🎬 邀请对方表演",
      "🚧 容忍不等于没有边界",
      "📦 叫对方搬东西"
    ],
    "answerIndex": 2,
    "explanation": "“冇所谓”是我不计较，但“唔代表”后面划出边界。",
    "theme": "边界声明",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "边界感",
    "pronunciationHint": "ngo5 waa6 mou5 so2 wai6, m4 doi6 biu2 nei5 ho2 ji5 lyun6 lai4"
  },
  {
    "id": 22,
    "prompt": "“你而家先醒，套戏都播到字幕喇。”在吐槽什么？",
    "cantoneseText": "你而家先醒，套戏都播到字幕喇。",
    "choices": [
      "⏰ 对方反应太慢",
      "🎞️ 电影真的结束",
      "😴 对方睡得很香",
      "📺 想看字幕学习"
    ],
    "answerIndex": 0,
    "explanation": "借电影播到字幕来夸张表达：你现在才反应过来太迟了。",
    "theme": "慢半拍",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "夸张吐槽",
    "pronunciationHint": "nei5 ji4 gaa1 sin1 seng2, tou3 hei3 dou1 bo3 dou3 zi6 mok6 laa3"
  },
  {
    "id": 23,
    "prompt": "“你唔好一句误会就当冇事。”说话人要求？",
    "cantoneseText": "你唔好一句误会就当冇事。",
    "choices": [
      "😇 完全接受道歉",
      "🤝 主动和解",
      "🍿 想看下一场",
      "🧾 不接受用“误会”轻轻带过"
    ],
    "answerIndex": 3,
    "explanation": "“一句误会”表示解释太轻，不能直接当没事。",
    "theme": "误会不够",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "追责语气",
    "pronunciationHint": "nei5 m4 hou2 jat1 geoi3 ng6 wui6 zau6 dong3 mou5 si6"
  },
  {
    "id": 24,
    "prompt": "“我已经畀晒反应你，你仲想点？”更像？",
    "cantoneseText": "我已经畀晒反应你，你仲想点？",
    "choices": [
      "🤩 我还想继续配合",
      "😤 我已经回应够了，你还想怎样",
      "🎭 我没有任何表情",
      "📞 我想打电话"
    ],
    "answerIndex": 1,
    "explanation": "“畀晒反应你”是已经给足反应，“仲想点”带不耐烦。",
    "theme": "反应过量",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "不耐烦",
    "pronunciationHint": "ngo5 ji5 ging1 bei2 saai3 faan2 jing3 nei5, nei5 zung6 soeng2 dim2"
  },
  {
    "id": 25,
    "prompt": "补全：“你咁讲，____都圆唔返。”",
    "cantoneseText": "你咁讲，个场都圆唔返。",
    "choices": [
      "🥤 杯冰",
      "📱 部机",
      "🎪 个场",
      "🚕 架车"
    ],
    "answerIndex": 2,
    "explanation": "“圆返个场”是把场面圆回来。圆唔返就是气氛/场面补不回。",
    "theme": "场面失控",
    "difficulty": "挑战",
    "questionType": "missingPhrase",
    "skillTag": "圆场表达",
    "pronunciationHint": "nei5 gam2 gong2, go3 coeng4 dou1 jyun4 m4 faan1"
  },
  {
    "id": 26,
    "prompt": "“你讲得太有道理，我决定唔听。”这句为什么好笑？",
    "cantoneseText": "你讲得太有道理，我决定唔听。",
    "choices": [
      "🙉 明知有理但任性不听",
      "🧠 完全理解并接受",
      "🎓 要写论文",
      "🍵 想换饮品"
    ],
    "answerIndex": 0,
    "explanation": "笑点在反差：承认对方有道理，却决定不听。",
    "theme": "任性反差",
    "difficulty": "进阶",
    "questionType": "tone",
    "skillTag": "喜剧反差",
    "pronunciationHint": "nei5 gong2 dak1 taai3 jau5 dou6 lei5, ngo5 kyut3 ding6 m4 teng1"
  },
  {
    "id": 27,
    "prompt": "“唔好再演，我冇买飞。”意思是？",
    "cantoneseText": "唔好再演，我冇买飞。",
    "choices": [
      "🎬 真的没买电影票",
      "🎭 请继续表演",
      "🧾 要退票",
      "🎟️ 别装/别演了，我不吃这套"
    ],
    "answerIndex": 3,
    "explanation": "“演”是装、做戏，“冇买飞”是无厘头说法：我不是观众，不吃这套。",
    "theme": "识破表演",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "玩梗拆穿",
    "pronunciationHint": "m4 hou2 zoi3 jin2, ngo5 mou5 maai5 fei1"
  },
  {
    "id": 28,
    "prompt": "“你讲到自己好惨，但我听到重点系你冇做。”重点在哪里？",
    "cantoneseText": "你讲到自己好惨，但我听到重点系你冇做。",
    "choices": [
      "😭 完全被感动",
      "🧾 不被卖惨带偏，抓住没做事",
      "🎤 评价唱功",
      "🍜 想点餐"
    ],
    "answerIndex": 1,
    "explanation": "这句识破“卖惨”叙事，重点回到责任：你没有做。",
    "theme": "卖惨失效",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "抓主线",
    "pronunciationHint": "nei5 gong2 dou3 zi6 gei2 hou2 caam2, daan6 ngo5 teng1 dou3 zung6 dim2 hai6 nei5 mou5 zou6"
  },
  {
    "id": 29,
    "prompt": "“你系咪想我赞你勇敢，定系想我救你？”场景更像？",
    "cantoneseText": "你系咪想我赞你勇敢，定系想我救你？",
    "choices": [
      "🏆 正式颁奖",
      "🎤 K房点歌",
      "🚑 对方逞强后需要处理后果",
      "🧘 冥想指导"
    ],
    "answerIndex": 2,
    "explanation": "这句玩笑里带担心：你是要我夸你，还是要我帮你收拾局面？",
    "theme": "逞强翻车",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "nei5 hai6 mai6 soeng2 ngo5 zaan3 nei5 jung5 gam2, ding6 hai6 soeng2 ngo5 gau3 nei5"
  },
  {
    "id": 30,
    "prompt": "“你唔讲我都知，你个样已经交代晒。”这里“个样”承担了什么功能？",
    "cantoneseText": "你唔讲我都知，你个样已经交代晒。",
    "choices": [
      "😶 表情已经泄露真相",
      "🪞 夸对方好看",
      "🧾 完成书面交代",
      "📷 要拍证件照"
    ],
    "answerIndex": 0,
    "explanation": "“个样”是样子/表情，“交代晒”是已经说明一切。",
    "theme": "表情出卖",
    "difficulty": "进阶",
    "questionType": "meaning",
    "skillTag": "非语言线索",
    "pronunciationHint": "nei5 m4 gong2 ngo5 dou1 zi1, nei5 go3 joeng2 ji5 ging1 gaau1 doi6 saai3"
  },
  {
    "id": 31,
    "prompt": "“我唔系怕，我系尊重危险。”这句在美化什么？",
    "cantoneseText": "我唔系怕，我系尊重危险。",
    "choices": [
      "🦸 真的非常勇敢",
      "📚 科学研究危险",
      "🎬 介绍电影类型",
      "😅 把害怕说得体面"
    ],
    "answerIndex": 3,
    "explanation": "“尊重危险”是无厘头包装，本质是怕，但讲得好听。",
    "theme": "体面认怂",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "自我包装",
    "pronunciationHint": "ngo5 m4 hai6 paa3, ngo5 hai6 zyun1 zung6 ngai4 him2"
  },
  {
    "id": 32,
    "prompt": "“你咁有信心，我负责担心。”关系分工是？",
    "cantoneseText": "你咁有信心，我负责担心。",
    "choices": [
      "🤝 两人都很放心",
      "😬 对方乐观，我来焦虑",
      "🎤 一人唱一段",
      "🧾 一人付一半"
    ],
    "answerIndex": 1,
    "explanation": "“你有信心/我担心”形成喜剧分工，表达不放心。",
    "theme": "焦虑搭档",
    "difficulty": "进阶",
    "questionType": "tone",
    "skillTag": "角色反差",
    "pronunciationHint": "nei5 gam3 jau5 seon3 sam1, ngo5 fu6 zaak3 daam1 sam1"
  },
  {
    "id": 33,
    "prompt": "“你唔好将问题讲到好似天气咁自然。”说话人不满什么？",
    "cantoneseText": "你唔好将问题讲到好似天气咁自然。",
    "choices": [
      "☀️ 对方真的在报天气",
      "🍵 茶餐厅太热",
      "🌧️ 对方把问题说得太理所当然",
      "📺 天气预报很准"
    ],
    "answerIndex": 2,
    "explanation": "把问题讲得像天气一样自然，是在淡化责任或严重性。",
    "theme": "淡化责任",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "责任识别",
    "pronunciationHint": "nei5 m4 hou2 zoeng1 man6 tai4 gong2 dou3 hou2 ci5 tin1 hei3 gam3 zi6 jin4"
  },
  {
    "id": 34,
    "prompt": "“你啱，你最啱，咁我可唔可以走？”这句通常是？",
    "cantoneseText": "你啱，你最啱，咁我可唔可以走？",
    "choices": [
      "🙄 敷衍结束争论",
      "🏆 真心颁奖",
      "🚶 单纯问路",
      "🍿 想买爆米花"
    ],
    "answerIndex": 0,
    "explanation": "重复“你啱”常可能是敷衍，不一定真认同，重点是想结束。",
    "theme": "敷衍认输",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "敷衍语气",
    "pronunciationHint": "nei5 ngaam1, nei5 zeoi3 ngaam1, gam2 ngo5 ho2 m4 ho2 ji5 zau2"
  },
  {
    "id": 35,
    "prompt": "补全：“你要讲人情，就唔好____。”",
    "cantoneseText": "你要讲人情，就唔好计到咁尽。",
    "choices": [
      "🎤 唱到咁高",
      "📦 包到咁密",
      "🚕 坐到咁前",
      "🧮 计到咁尽"
    ],
    "answerIndex": 3,
    "explanation": "讲人情就不应算得太尽，“计到咁尽”是太计较。",
    "theme": "人情算盘",
    "difficulty": "挑战",
    "questionType": "missingPhrase",
    "skillTag": "人情表达",
    "pronunciationHint": "nei5 jiu3 gong2 jan4 cing4, zau6 m4 hou2 gai3 dou3 gam3 zeon6"
  },
  {
    "id": 36,
    "prompt": "“你话帮我，其实系帮自己铺路。”说话人指出？",
    "cantoneseText": "你话帮我，其实系帮自己铺路。",
    "choices": [
      "🤝 对方完全无私",
      "🛣️ 对方有自己的利益盘算",
      "🚧 真的在修路",
      "🍜 想找茶餐厅"
    ],
    "answerIndex": 1,
    "explanation": "“铺路”是为自己之后的目的打基础，不是字面修路。",
    "theme": "利益识别",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "动机判断",
    "pronunciationHint": "nei5 waa6 bong1 ngo5, kei4 sat6 hai6 bong1 zi6 gei2 pou1 lou6"
  },
  {
    "id": 37,
    "prompt": "“我俾你面，唔代表我冇底线。”核心是？",
    "cantoneseText": "我俾你面，唔代表我冇底线。",
    "choices": [
      "😇 永远让步",
      "🧾 没有任何原则",
      "🕶️ 给面子但有边界",
      "🎭 只是演戏"
    ],
    "answerIndex": 2,
    "explanation": "给面子是关系处理，但“底线”说明不能无限退让。",
    "theme": "底线声明",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "面子边界",
    "pronunciationHint": "ngo5 bei2 nei5 min6, m4 doi6 biu2 ngo5 mou5 dai2 sin3"
  },
  {
    "id": 38,
    "prompt": "“你咁样道歉，好似顺便通知我。”问题在哪里？",
    "cantoneseText": "你咁样道歉，好似顺便通知我。",
    "choices": [
      "📣 道歉不够诚恳",
      "🙏 道歉非常深刻",
      "📬 只是发通知",
      "🎉 正在宣布喜讯"
    ],
    "answerIndex": 0,
    "explanation": "“顺便通知”形容语气冷淡、像走流程，缺乏诚意。",
    "theme": "道歉失败",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "诚意判断",
    "pronunciationHint": "nei5 gam2 joeng2 dou6 hip3, hou2 ci5 seon6 bin6 tung1 zi1 ngo5"
  },
  {
    "id": 39,
    "prompt": "“唔好以为你慢慢讲，我就会慢慢嬲。”这句在说？",
    "cantoneseText": "唔好以为你慢慢讲，我就会慢慢嬲。",
    "choices": [
      "🧘 我非常平静",
      "🐢 喜欢慢节奏",
      "📚 练习朗读速度",
      "🔥 说得慢不代表我不会马上生气"
    ],
    "answerIndex": 3,
    "explanation": "“慢慢讲/慢慢嬲”形成喜剧对照，表达不满不会因为你慢说而减弱。",
    "theme": "慢速惹火",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "句式玩梗",
    "pronunciationHint": "m4 hou2 ji5 wai4 nei5 maan6 maan6 gong2, ngo5 zau6 wui5 maan6 maan6 nau1"
  },
  {
    "id": 40,
    "prompt": "“你今日帮我，我记住；你今日玩我，我更加记住。”重点是？",
    "cantoneseText": "你今日帮我，我记住；你今日玩我，我更加记住。",
    "choices": [
      "😇 完全不计较",
      "📒 恩和仇都记账",
      "🎮 约玩游戏",
      "📅 只是记日期"
    ],
    "answerIndex": 1,
    "explanation": "前半讲人情，后半讲被耍，重点是“更加记住”的警告味。",
    "theme": "人情记账",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "恩怨分明",
    "pronunciationHint": "nei5 gam1 jat6 bong1 ngo5, ngo5 gei3 zyu6; nei5 gam1 jat6 waan2 ngo5, ngo5 gang3 gaa1 gei3 zyu6"
  },
  {
    "id": 41,
    "prompt": "“你唔好咁快开心，事情仲未到字幕。”意思是？",
    "cantoneseText": "你唔好咁快开心，事情仲未到字幕。",
    "choices": [
      "😄 电影字幕很好看",
      "🎉 已经圆满结束",
      "🎞️ 事情还没结束，别太早开心",
      "📺 叫人打开字幕"
    ],
    "answerIndex": 2,
    "explanation": "“未到字幕”借电影还没结束来提醒别太早放松。",
    "theme": "未到结局",
    "difficulty": "进阶",
    "questionType": "meaning",
    "skillTag": "电影比喻",
    "pronunciationHint": "nei5 m4 hou2 gam3 faai3 hoi1 sam1, si6 cing4 zung6 mei6 dou3 zi6 mok6"
  },
  {
    "id": 42,
    "prompt": "“你系主角都唔代表全世界要配合你。”这句在批评？",
    "cantoneseText": "你系主角都唔代表全世界要配合你。",
    "choices": [
      "🎬 对方太自我中心",
      "🏆 对方演技很好",
      "🌍 世界真的在拍戏",
      "🍵 大家要点同一杯茶"
    ],
    "answerIndex": 0,
    "explanation": "“主角”是比喻对方把自己放太中心，要求别人都配合。",
    "theme": "主角病",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "关系批评",
    "pronunciationHint": "nei5 hai6 zyu2 gok3 dou1 m4 doi6 biu2 cyun4 sai3 gaai3 jiu3 pui3 hap6 nei5"
  },
  {
    "id": 43,
    "prompt": "“你讲到好似帮我，其实句句都系叫我让步。”说话人识破了什么？",
    "cantoneseText": "你讲到好似帮我，其实句句都系叫我让步。",
    "choices": [
      "🤝 真心帮我争取",
      "🎤 练对白",
      "📦 帮我搬家",
      "🎭 包装成帮忙的劝退"
    ],
    "answerIndex": 3,
    "explanation": "表面帮你分析，实际每句都让你退，属于话术识别。",
    "theme": "劝退包装",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "话术识别",
    "pronunciationHint": "nei5 gong2 dou3 hou2 ci5 bong1 ngo5, kei4 sat6 geoi3 geoi3 dou1 hai6 giu3 ngo5 joeng6 bou6"
  },
  {
    "id": 44,
    "prompt": "“你唔好问我点解，我问返自己都尴尬。”这句效果是？",
    "cantoneseText": "你唔好问我点解，我问返自己都尴尬。",
    "choices": [
      "🧾 给出完整理由",
      "😅 自嘲自己也解释不了",
      "😤 强硬拒绝沟通",
      "📞 要别人打电话"
    ],
    "answerIndex": 1,
    "explanation": "“问返自己都尴尬”是自嘲，说明自己也知道理由站不住。",
    "theme": "自嘲圆场",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "自嘲语气",
    "pronunciationHint": "nei5 m4 hou2 man6 ngo5 dim2 gaai2, ngo5 man6 faan1 zi6 gei2 dou1 gaam1 gaai3"
  },
  {
    "id": 45,
    "prompt": "补全：“你咁样帮手，真系帮到____。”",
    "cantoneseText": "你咁样帮手，真系帮到喊。",
    "choices": [
      "🏆 赢",
      "🥤 冻",
      "😭 喊",
      "📺 转台"
    ],
    "answerIndex": 2,
    "explanation": "“帮到喊”通常是反话：帮得让人想哭，不是真夸。",
    "theme": "帮倒忙",
    "difficulty": "挑战",
    "questionType": "missingPhrase",
    "skillTag": "反话表达",
    "pronunciationHint": "nei5 gam2 joeng2 bong1 sau2, zan1 hai6 bong1 dou3 haam3"
  },
  {
    "id": 46,
    "prompt": "“你个计划最大问题，系听落冇问题。”为什么是问题？",
    "cantoneseText": "你个计划最大问题，系听落冇问题。",
    "choices": [
      "🕳️ 太顺耳反而可能藏坑",
      "✅ 计划完美无缺",
      "🎧 音质很好",
      "📄 文件太短"
    ],
    "answerIndex": 0,
    "explanation": "这句玩的是反差：听起来没问题，才让人担心问题被藏起来。",
    "theme": "完美可疑",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "反差判断",
    "pronunciationHint": "nei5 go3 gai3 waak6 zeoi3 daai6 man6 tai4, hai6 teng1 lok6 mou5 man6 tai4"
  },
  {
    "id": 47,
    "prompt": "“你唔好一开口就当自己结案陈词。”在提醒对方？",
    "cantoneseText": "你唔好一开口就当自己结案陈词。",
    "choices": [
      "📚 多背法律词",
      "🎬 演法庭戏",
      "🧾 结账付款",
      "⚖️ 别一上来就下定论"
    ],
    "answerIndex": 3,
    "explanation": "“结案陈词”比喻最后总结。这里是在说对方太快下结论。",
    "theme": "别急定案",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "比喻理解",
    "pronunciationHint": "nei5 m4 hou2 jat1 hoi1 hau2 zau6 dong3 zi6 gei2 git3 on3 can4 ci4"
  },
  {
    "id": 48,
    "prompt": "“你讲人情，我讲规矩，咁先公平。”说话人立场是？",
    "cantoneseText": "你讲人情，我讲规矩，咁先公平。",
    "choices": [
      "🤝 完全按人情办事",
      "📏 不只看关系，也要按规则",
      "🎲 随机决定",
      "🍵 去茶餐厅解决"
    ],
    "answerIndex": 1,
    "explanation": "这句把人情和规矩拉开，强调公平需要规则。",
    "theme": "人情规矩",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "价值冲突",
    "pronunciationHint": "nei5 gong2 jan4 cing4, ngo5 gong2 kwai1 geoi2, gam2 sin1 gung1 ping4"
  },
  {
    "id": 49,
    "prompt": "“你系想解决问题，定系想赢场面？”差别是什么？",
    "cantoneseText": "你系想解决问题，定系想赢场面？",
    "choices": [
      "🏆 赢比赛 vs 输比赛",
      "🎬 主角 vs 配角",
      "🧠 解决事情 vs 争面子",
      "🍿 买票 vs 入场"
    ],
    "answerIndex": 2,
    "explanation": "“赢场面”是赢面子/气势，不等于真正解决问题。",
    "theme": "问题与面子",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "目标识别",
    "pronunciationHint": "nei5 hai6 soeng2 gaai2 kyut3 man6 tai4, ding6 hai6 soeng2 jeng4 coeng4 min6"
  },
  {
    "id": 50,
    "prompt": "“算啦，今日当我请你睇一场现实喜剧。”这句最像？",
    "cantoneseText": "算啦，今日当我请你睇一场现实喜剧。",
    "choices": [
      "🎭 用自嘲收场，把荒唐事当喜剧",
      "🎟️ 真的买了电影票",
      "😡 准备继续吵",
      "📚 正式上课"
    ],
    "answerIndex": 0,
    "explanation": "这是把离谱经历包装成“现实喜剧”，用自嘲收束情绪。",
    "theme": "无厘头收场",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "自嘲收束",
    "pronunciationHint": "syun3 laa1, gam1 jat6 dong3 ngo5 cing2 nei5 tai2 jat1 coeng4 jin6 sat6 hei2 kek6"
  }
];

const movieAdvancedChapterTitle = '港片常用场景进阶挑战';

const movieAdvancedQuestions = [
  {
    id: 1,
    prompt: '“你咁讲即系唔畀面啫。”最准确的潜台词是？',
    cantoneseText: '你咁讲即系唔畀面啫。',
    choices: ['你这样说让我下不来台', '你说得很有道理', '你是在帮我圆场', '你只是声音太小'],
    answerIndex: 0,
    explanation: '“畀面”是给面子，“唔畀面”不是单纯不同意，而是让对方难堪、失面子。',
    theme: '饭局保面',
    difficulty: '挑战',
    questionType: 'tone',
    skillTag: '潜台词',
    pronunciationHint: 'nei5 gam2 gong2 zik1 hai6 m4 bei2 min6 ze1'
  },
  {
    id: 2,
    prompt: '“我唔系要赢，我系想讲清楚。”这句话最像在做什么？',
    cantoneseText: '我唔系要赢，我系想讲清楚。',
    choices: ['缓和争执并解释立场', '炫耀自己已经赢了', '要求对方立刻道歉', '表示自己不想再说'],
    answerIndex: 0,
    explanation: '“唔系…系…”是在纠正对方理解。重点不是赢，而是把事情说清楚。',
    theme: '兄弟争执',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '转折句式',
    pronunciationHint: 'ngo5 m4 hai6 jiu3 jeng4, ngo5 hai6 soeng2 gong2 cing1 co2'
  },
  {
    id: 3,
    prompt: '“呢件事你当冇发生过，好唔好？”最符合哪种场景？',
    cantoneseText: '呢件事你当冇发生过，好唔好？',
    choices: ['请求对方不要再追究', '邀请对方庆祝成功', '提醒对方记清楚细节', '要求对方公开说明'],
    answerIndex: 0,
    explanation: '“当冇发生过”是希望对方放下或保密，不是提醒记住。',
    theme: '秘密收口',
    difficulty: '挑战',
    questionType: 'scene',
    skillTag: '场景推断',
    pronunciationHint: 'ni1 gin6 si6 nei5 dong3 mou5 faat3 sang1 gwo3, hou2 m4 hou2'
  },
  {
    id: 4,
    prompt: '“你而家走，之后就唔好返嚟搵我。”语气最接近？',
    cantoneseText: '你而家走，之后就唔好返嚟搵我。',
    choices: ['带威胁感的最后通牒', '很轻松的告别', '普通问路', '礼貌邀请再来'],
    answerIndex: 0,
    explanation: '“之后就唔好…”是强硬边界，不是普通告别。',
    theme: '门口决裂',
    difficulty: '挑战',
    questionType: 'tone',
    skillTag: '语气判断',
    pronunciationHint: 'nei5 ji4 gaa1 zau2, zi1 hau6 zau6 m4 hou2 faan1 lai4 wan2 ngo5'
  },
  {
    id: 5,
    prompt: '“大家都系出来做嘢，唔使去到咁尽。”说话人想表达什么？',
    cantoneseText: '大家都系出来做嘢，唔使去到咁尽。',
    choices: ['做事留点余地', '必须彻底追到底', '大家都不用工作', '这件事很简单'],
    answerIndex: 0,
    explanation: '“去到咁尽”是做到太绝、太狠。整句是在劝对方别逼太紧。',
    theme: '讲数留路',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '场面话',
    pronunciationHint: 'daai6 gaa1 dou1 hai6 ceot1 lai4 zou6 je5, m4 sai2 heoi3 dou3 gam3 zeon6'
  },
  {
    id: 6,
    prompt: '“你讲就容易，做落先知难。”这句在反驳什么？',
    cantoneseText: '你讲就容易，做落先知难。',
    choices: ['对方低估了执行难度', '对方已经做得很好', '这件事不用开始', '说话比行动更重要'],
    answerIndex: 0,
    explanation: '“做落”是做起来、实际做的时候。重点是现实执行比嘴上说难。',
    theme: '行动前争论',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '现实反驳',
    pronunciationHint: 'nei5 gong2 zau6 jung4 ji6, zou6 lok6 sin1 zi1 naan4'
  },
  {
    id: 7,
    prompt: '补全句子：“唔好再兜圈，____讲。”',
    cantoneseText: '唔好再兜圈，直接讲。',
    choices: ['直接', '慢慢', '客气', '细声'],
    answerIndex: 0,
    explanation: '“兜圈”是绕来绕去。相对的自然表达是“直接讲”。',
    theme: '逼问重点',
    difficulty: '挑战',
    questionType: 'missingPhrase',
    skillTag: '表达补全',
    pronunciationHint: 'm4 hou2 zoi3 dau1 hyun1, zik6 zip3 gong2'
  },
  {
    id: 8,
    prompt: '“我畀机会你讲，你唔好又话我冇听。”最像哪种心理？',
    cantoneseText: '我畀机会你讲，你唔好又话我冇听。',
    choices: ['先把话说在前面，避免被反咬', '真心邀请对方唱歌', '承认自己完全没听', '表示现在不准对方说话'],
    answerIndex: 0,
    explanation: '“你唔好又话…”是在预防对方之后指责自己，语气里有防备。',
    theme: '摊牌前奏',
    difficulty: '挑战',
    questionType: 'tone',
    skillTag: '防备语气',
    pronunciationHint: 'ngo5 bei2 gei1 wui6 nei5 gong2, nei5 m4 hou2 jau6 waa6 ngo5 mou5 teng1'
  },
  {
    id: 9,
    prompt: '“呢啲说话，留返你自己听啦。”这句话通常不是在？',
    cantoneseText: '呢啲说话，留返你自己听啦。',
    choices: ['真诚接受解释', '拒绝听借口', '表达不耐烦', '切断对话'],
    answerIndex: 0,
    explanation: '这句带明显不耐烦：这些话留给你自己听吧。不是接受解释。',
    theme: '拒听借口',
    difficulty: '挑战',
    questionType: 'tone',
    skillTag: '反向选择',
    pronunciationHint: 'ni1 di1 syut3 waa6, lau4 faan1 nei5 zi6 gei2 teng1 laa1'
  },
  {
    id: 10,
    prompt: '“我帮你，唔代表我撑你。”细微差别是什么？',
    cantoneseText: '我帮你，唔代表我撑你。',
    choices: ['可以帮忙，但不一定认同你', '帮忙就一定完全支持', '我不会提供任何帮助', '我只是想借钱'],
    answerIndex: 0,
    explanation: '“撑你”是支持你、站你这边。帮忙和立场支持被区分开了。',
    theme: '立场切割',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '关系边界',
    pronunciationHint: 'ngo5 bong1 nei5, m4 doi6 biu2 ngo5 caang1 nei5'
  },
  {
    id: 11,
    prompt: '“你今日畀个交代我。”这里“交代”更接近？',
    cantoneseText: '你今日畀个交代我。',
    choices: ['给一个说明或说法', '交一份菜单', '带我去唱歌', '给我一点零钱'],
    answerIndex: 0,
    explanation: '“畀个交代”是要求解释、回应或说法，常带压力。',
    theme: '上门追问',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '常用场面话',
    pronunciationHint: 'nei5 gam1 jat6 bei2 go3 gaau1 doi6 ngo5'
  },
  {
    id: 12,
    prompt: '“你唔好以为笑两声就冇事。”说话人最可能？',
    cantoneseText: '你唔好以为笑两声就冇事。',
    choices: ['不接受对方轻轻带过', '觉得对方笑得很好听', '事情已经完全解决', '想让气氛更轻松'],
    answerIndex: 0,
    explanation: '“就冇事”是就没事了；整句是否定这种轻描淡写。',
    theme: '喜剧变严肃',
    difficulty: '挑战',
    questionType: 'tone',
    skillTag: '语气转折',
    pronunciationHint: 'nei5 m4 hou2 ji5 wai4 siu3 loeng5 seng1 zau6 mou5 si6'
  },
  {
    id: 13,
    prompt: '“我唔想搞大件事。”最符合哪种意图？',
    cantoneseText: '我唔想搞大件事。',
    choices: ['不想把事情闹大', '想马上报警公开', '想把事做得更大', '觉得事情很开心'],
    answerIndex: 0,
    explanation: '“搞大件事”是把事情闹大、扩大化。这句是在压低冲突。',
    theme: '压住冲突',
    difficulty: '进阶',
    questionType: 'meaning',
    skillTag: '冲突控制',
    pronunciationHint: 'ngo5 m4 soeng2 gaau2 daai6 gin6 si6'
  },
  {
    id: 14,
    prompt: '“你想我点做，你直接讲。”潜台词更像？',
    cantoneseText: '你想我点做，你直接讲。',
    choices: ['别绕了，说清楚你的要求', '我已经知道你想什么', '你不用再讲话', '我只想听赞美'],
    answerIndex: 0,
    explanation: '这句不是不知道，而是要求对方把诉求摊开讲。',
    theme: '谈条件',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '需求澄清',
    pronunciationHint: 'nei5 soeng2 ngo5 dim2 zou6, nei5 zik6 zip3 gong2'
  },
  {
    id: 15,
    prompt: '“我当你系朋友，先同你讲真话。”重点在？',
    cantoneseText: '我当你系朋友，先同你讲真话。',
    choices: ['因为重视关系才直说', '因为讨厌你才讽刺', '只是随便闲聊', '说明两人不是朋友'],
    answerIndex: 0,
    explanation: '“先”在这里表示正因为如此才做某事。真话被包装成关系里的提醒。',
    theme: '朋友直劝',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '关系语气',
    pronunciationHint: 'ngo5 dong3 nei5 hai6 pang4 jau5, sin1 tung4 nei5 gong2 zan1 waa6'
  },
  {
    id: 16,
    prompt: '“你而家系咪玩我？”这句不是普通询问，而是？',
    cantoneseText: '你而家系咪玩我？',
    choices: ['觉得对方在耍自己', '邀请对方一起玩游戏', '确认现在几点', '问对方会不会唱歌'],
    answerIndex: 0,
    explanation: '“玩我”在这里是耍我、拿我开玩笑，带不满或怀疑。',
    theme: '误会爆点',
    difficulty: '进阶',
    questionType: 'tone',
    skillTag: '反问不满',
    pronunciationHint: 'nei5 ji4 gaa1 hai6 mai6 waan2 ngo5'
  },
  {
    id: 17,
    prompt: '“唔好讲到自己咁委屈。”说话人不接受什么？',
    cantoneseText: '唔好讲到自己咁委屈。',
    choices: ['对方把自己说成受害者', '对方说话太客气', '对方愿意承担责任', '对方声音太轻'],
    answerIndex: 0,
    explanation: '“讲到自己咁委屈”是把自己说得很可怜、像受害者。',
    theme: '拆穿委屈',
    difficulty: '挑战',
    questionType: 'tone',
    skillTag: '态度判断',
    pronunciationHint: 'm4 hou2 gong2 dou3 zi6 gei2 gam3 wai2 wat1'
  },
  {
    id: 18,
    prompt: '“算我求你，畀条路行下。”更自然的意思是？',
    cantoneseText: '算我求你，畀条路行下。',
    choices: ['请求对方留一条生路/余地', '真的问路怎么走', '要求对方一起散步', '表示已经赢了'],
    answerIndex: 0,
    explanation: '“畀条路行下”常是比喻给条路、给个余地，不只是字面走路。',
    theme: '讲数求情',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '比喻理解',
    pronunciationHint: 'syun3 ngo5 kau4 nei5, bei2 tiu4 lou6 haang4 haa5'
  },
  {
    id: 19,
    prompt: '“你要面，我都要交代。”这句话在平衡什么？',
    cantoneseText: '你要面，我都要交代。',
    choices: ['给你面子和我需要说法之间的冲突', '谁更适合唱歌', '两个人都要点餐', '双方都不想见面'],
    answerIndex: 0,
    explanation: '“要面”是要面子，“要交代”是需要说法。两边需求在冲突。',
    theme: '两边都难',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '关系权衡',
    pronunciationHint: 'nei5 jiu3 min6, ngo5 dou1 jiu3 gaau1 doi6'
  },
  {
    id: 20,
    prompt: '“今日我忍你，唔代表次次都忍。”最准确的语气是？',
    cantoneseText: '今日我忍你，唔代表次次都忍。',
    choices: ['警告对方不要得寸进尺', '承诺永远忍让', '轻松开玩笑', '表达完全无所谓'],
    answerIndex: 0,
    explanation: '“唔代表次次都忍”是在划线，意思是这次算了，但不会每次都让。',
    theme: '最后警告',
    difficulty: '挑战',
    questionType: 'tone',
    skillTag: '边界警告',
    pronunciationHint: 'gam1 jat6 ngo5 jan2 nei5, m4 doi6 biu2 ci3 ci3 dou1 jan2'
  }
];

const movieChapterTitle = '经典港片场景粤语句子挑战';

const movieQuestions = [
  {
    id: 1,
    prompt: '听/读这句：“阿 sir，唔好意思，我真系赶时间。”这句话最可能表达什么？',
    cantoneseText: '阿 sir，唔好意思，我真系赶时间。',
    choices: ['礼貌解释自己很赶', '邀请警察喝茶', '抱怨时间太慢', '说自己不用走'],
    answerIndex: 0,
    explanation: '“唔好意思”是抱歉/打扰，“真系赶时间”是确实很赶。整句是紧张但礼貌的解释。',
    theme: '警匪街口',
    difficulty: '进阶',
    questionType: 'meaning',
    skillTag: '句意理解',
    pronunciationHint: 'm4 hou2 ji3 si1, zan1 hai6 gon2 si4 gaan3'
  },
  {
    id: 2,
    prompt: '茶餐厅伙计说：“冻柠茶少甜，唔该晒。”最适合的场景是哪一个？',
    cantoneseText: '冻柠茶少甜，唔该晒。',
    choices: ['点饮品', '追车', '谈判', '告别'],
    answerIndex: 0,
    explanation: '“冻柠茶少甜”是港式茶餐厅常见点单方式，“唔该晒”是很客气的谢谢。',
    theme: '茶餐厅点单',
    difficulty: '进阶',
    questionType: 'scene',
    skillTag: '场景推断',
    pronunciationHint: 'dung3 ling4 caa4 siu2 tim4, m4 goi1 saai3'
  },
  {
    id: 3,
    prompt: '“你唔好扮晒嘢啦”里的语气更接近？',
    cantoneseText: '你唔好扮晒嘢啦。',
    choices: ['吐槽对方别装', '鼓励对方继续', '认真道歉', '问对方去哪'],
    answerIndex: 0,
    explanation: '“扮晒嘢”有“装模作样”的感觉，这句多半是在吐槽、拆穿。',
    theme: '喜剧误会',
    difficulty: '挑战',
    questionType: 'tone',
    skillTag: '语气判断',
    pronunciationHint: 'nei5 m4 hou2 baan6 saai3 je5 laa1'
  },
  {
    id: 4,
    prompt: '补全句子：“呢度人多，____讲。”',
    cantoneseText: '呢度人多，细声啲讲。',
    choices: ['细声啲', '快手啲', '行远啲', '贵少少'],
    answerIndex: 0,
    explanation: '人多时怕别人听见，最自然是“细声啲讲”，也就是“小声一点说”。',
    theme: '街头密谈',
    difficulty: '进阶',
    questionType: 'missingPhrase',
    skillTag: '句子补全',
    pronunciationHint: 'ni1 dou6 jan4 do1, sai3 seng1 di1 gong2'
  },
  {
    id: 5,
    prompt: '先听这句：“你而家先嚟讲，会唔会迟咗啲？”它在质疑什么？',
    cantoneseText: '你而家先嚟讲，会唔会迟咗啲？',
    choices: ['现在才说太晚了', '你说得太小声', '你来得太早', '你讲得很漂亮'],
    answerIndex: 0,
    explanation: '“而家先嚟讲”是现在才来说，“迟咗啲”是晚了一点，整体是质疑时机太迟。',
    theme: '兄弟摊牌',
    difficulty: '挑战',
    questionType: 'listenFirst',
    skillTag: '听辨理解',
    pronunciationHint: 'nei5 ji4 gaa1 sin1 lai4 gong2, wui5 m4 wui5 ci4 zo2 di1'
  },
  {
    id: 6,
    prompt: '“我冇呃你，真系冇。”这句话的重点是什么？',
    cantoneseText: '我冇呃你，真系冇。',
    choices: ['强调自己没有骗你', '说自己没有钱', '表示自己不认识你', '问你有没有空'],
    answerIndex: 0,
    explanation: '“呃”是骗，“真系冇”是确实没有。句子是在强调清白。',
    theme: '审问房间',
    difficulty: '进阶',
    questionType: 'meaning',
    skillTag: '句意理解',
    pronunciationHint: 'ngo5 mou5 aak1 nei5, zan1 hai6 mou5'
  },
  {
    id: 7,
    prompt: '“咪住，等我谂清楚先。”说话人想做什么？',
    cantoneseText: '咪住，等我谂清楚先。',
    choices: ['暂停一下再想清楚', '马上冲出去', '请人买单', '已经决定好了'],
    answerIndex: 0,
    explanation: '“咪住”是先别/等一下，“谂清楚”是想清楚，“先”表示先做这件事。',
    theme: '临门决定',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '句意理解',
    pronunciationHint: 'mai5 zyu6, dang2 ngo5 nam2 cing1 co2 sin1'
  },
  {
    id: 8,
    prompt: '“你讲到咁大声，成条街都听到。”里面“成条街”强调什么？',
    cantoneseText: '你讲到咁大声，成条街都听到。',
    choices: ['声音大到很多人都听见', '街道真的变长了', '只有街尾听见', '对方唱歌很好'],
    answerIndex: 0,
    explanation: '“成条街”是夸张地说整条街，“都听到”表示全都听见。',
    theme: '街边争执',
    difficulty: '进阶',
    questionType: 'tone',
    skillTag: '夸张语气',
    pronunciationHint: 'nei5 gong2 dou3 gam3 daai6 seng1, seng4 tiu4 gaai1 dou1 teng1 dou2'
  },
  {
    id: 9,
    prompt: '“唔系我唔帮你，系而家真系冇办法。”最准确的理解是？',
    cantoneseText: '唔系我唔帮你，系而家真系冇办法。',
    choices: ['不是不帮，而是现在没办法', '我从来不会帮你', '现在办法很多', '你不用别人帮'],
    answerIndex: 0,
    explanation: '“唔系…系…”是“不是…而是…”。这句是在解释限制，不是拒绝情义。',
    theme: '江湖两难',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '句式理解',
    pronunciationHint: 'm4 hai6 ngo5 m4 bong1 nei5, hai6 ji4 gaa1 zan1 hai6 mou5 baan6 faat3'
  },
  {
    id: 10,
    prompt: '“得啦得啦，我知你叻。”这句常见语气更像？',
    cantoneseText: '得啦得啦，我知你叻。',
    choices: ['有点敷衍或调侃', '非常正式表扬', '严肃命令撤退', '低声求救'],
    answerIndex: 0,
    explanation: '重复“得啦得啦”常有“好了好了”的感觉，“我知你叻”可真夸，也可带调侃。',
    theme: '喜剧拌嘴',
    difficulty: '挑战',
    questionType: 'tone',
    skillTag: '语气判断',
    pronunciationHint: 'dak1 laa1 dak1 laa1, ngo5 zi1 nei5 lek1'
  },
  {
    id: 11,
    prompt: '补全句子：“有咩事，____先讲。”',
    cantoneseText: '有咩事，返去先讲。',
    choices: ['返去', '贵啲', '靓晒', '几多'],
    answerIndex: 0,
    explanation: '“返去先讲”是“回去再说/先回去再讲”，常用于不想在现场说清楚。',
    theme: '避开现场',
    difficulty: '进阶',
    questionType: 'missingPhrase',
    skillTag: '场景表达',
    pronunciationHint: 'jau5 me1 si6, faan1 heoi3 sin1 gong2'
  },
  {
    id: 12,
    prompt: '“你唔使惊，我喺度。”最适合表达哪种关系/情绪？',
    cantoneseText: '你唔使惊，我喺度。',
    choices: ['安慰和保护', '催促买单', '嘲笑别人', '表示很生气'],
    answerIndex: 0,
    explanation: '“唔使惊”是不用怕，“我喺度”是我在这里，是很典型的安慰句。',
    theme: '雨夜安慰',
    difficulty: '进阶',
    questionType: 'tone',
    skillTag: '情绪识别',
    pronunciationHint: 'nei5 m4 sai2 geng1, ngo5 hai2 dou6'
  },
  {
    id: 13,
    prompt: '“你走先，我搞掂呢度。”说话人是什么意思？',
    cantoneseText: '你走先，我搞掂呢度。',
    choices: ['让对方先走，自己处理这里', '叫对方一起留下', '说这里已经关门', '表示自己迷路'],
    answerIndex: 0,
    explanation: '“搞掂”是处理好、解决。“你走先”是你先走。',
    theme: '巷口分别',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '句意理解',
    pronunciationHint: 'nei5 zau2 sin1, ngo5 gaau2 dim6 ni1 dou6'
  },
  {
    id: 14,
    prompt: '“呢件事唔简单，唔好乱嚟。”里面“乱嚟”是什么意思？',
    cantoneseText: '呢件事唔简单，唔好乱嚟。',
    choices: ['不要乱来', '不要迟到', '不要唱歌', '不要太贵'],
    answerIndex: 0,
    explanation: '“乱嚟”就是乱来、草率行动。这句是在提醒谨慎。',
    theme: '调查线索',
    difficulty: '进阶',
    questionType: 'meaning',
    skillTag: '行动判断',
    pronunciationHint: 'ni1 gin6 si6 m4 gaan2 daan1, m4 hou2 lyun6 lai4'
  },
  {
    id: 15,
    prompt: '“你估我真系唔知咩？”这句的潜台词是？',
    cantoneseText: '你估我真系唔知咩？',
    choices: ['我其实知道', '我完全听不见', '我想问价格', '我需要睡觉'],
    answerIndex: 0,
    explanation: '“你估…咩？”是反问语气，这里不是不知道，而是在说“我难道不知道吗”。',
    theme: '反问拆穿',
    difficulty: '挑战',
    questionType: 'tone',
    skillTag: '反问语气',
    pronunciationHint: 'nei5 gu2 ngo5 zan1 hai6 m4 zi1 me1'
  },
  {
    id: 16,
    prompt: '先听这句：“讲真，今次我真系有啲嬲。”说话人的情绪是？',
    cantoneseText: '讲真，今次我真系有啲嬲。',
    choices: ['有点生气', '特别开心', '很想点餐', '完全不在意'],
    answerIndex: 0,
    explanation: '“讲真”是说真的，“嬲”是生气，“有啲”是一点点。',
    theme: '朋友摊开讲',
    difficulty: '挑战',
    questionType: 'listenFirst',
    skillTag: '情绪听辨',
    pronunciationHint: 'gong2 zan1, gam1 ci3 ngo5 zan1 hai6 jau5 di1 nau1'
  },
  {
    id: 17,
    prompt: '“大家自己人，唔使讲到咁绝。”最自然的理解是？',
    cantoneseText: '大家自己人，唔使讲到咁绝。',
    choices: ['都是自己人，别把话说太绝', '大家都不认识', '必须马上离开', '说话要更大声'],
    answerIndex: 0,
    explanation: '“自己人”是同一边/熟人，“讲到咁绝”是话说得太绝。',
    theme: '和解劝说',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '关系判断',
    pronunciationHint: 'daai6 gaa1 zi6 gei2 jan4, m4 sai2 gong2 dou3 gam3 zyut6'
  },
  {
    id: 18,
    prompt: '补全句子：“唔该，____，我想问路。”',
    cantoneseText: '唔该，借借，我想问路。',
    choices: ['借借', '嬲嬲', '晒晒', '掂掂'],
    answerIndex: 0,
    explanation: '“借借”常用于请别人让一让、借过一下。这里是礼貌开口。',
    theme: '街头问路',
    difficulty: '进阶',
    questionType: 'missingPhrase',
    skillTag: '礼貌表达',
    pronunciationHint: 'm4 goi1, ze3 ze3, ngo5 soeng2 man6 lou6'
  },
  {
    id: 19,
    prompt: '“你咁样讲，我好难落台。”这里“落台”更接近？',
    cantoneseText: '你咁样讲，我好难落台。',
    choices: ['下不来台/难堪', '从舞台走下来', '去楼下吃饭', '放下麦克风'],
    answerIndex: 0,
    explanation: '“落台”可字面下台，也常引申为“下台阶”。这句是在说让人难堪。',
    theme: '当众尴尬',
    difficulty: '挑战',
    questionType: 'meaning',
    skillTag: '引申义',
    pronunciationHint: 'nei5 gam2 joeng2 gong2, ngo5 hou2 naan4 lok6 toi4'
  },
  {
    id: 20,
    prompt: '“算啦，今晚到呢度。”这句最像什么时刻？',
    cantoneseText: '算啦，今晚到呢度。',
    choices: ['收场/告一段落', '刚刚开场', '准备点餐', '要求加速'],
    answerIndex: 0,
    explanation: '“算啦”是算了，“到呢度”是到这里。整体是在收束、结束这一晚。',
    theme: '夜街收场',
    difficulty: '进阶',
    questionType: 'scene',
    skillTag: '场景推断',
    pronunciationHint: 'syun3 laa1, gam1 maan5 dou3 ni1 dou6'
  }
];

const movieTrainingDay05ChapterTitle = "15天港片粤语训练 Day 05：男女交往粤语边界";

const movieTrainingDay05Questions = [
  {
    "id": 1,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢话“你唔使送啦”，但又行慢咗半步。",
    "spokenText": "佢话“你唔使送啦”，但又行慢咗半步。",
    "choices": [
      "对方嘴上客气，身体语言仍在试探",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "《男亲女爱》式都市关系",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 2,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "一句“得闲先讲”，可以系留门，亦可以系落闸。",
    "spokenText": "一句“得闲先讲”，可以系留门，亦可以系落闸。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "同一句客套话要结合关系和语气判断",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "《男亲女爱》式都市关系",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 3,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "你讲到好洒脱，其实每句都留咗尾巴。",
    "spokenText": "你讲到好洒脱，其实每句都留咗尾巴。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "表面放手，实际还保留期待",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "《男亲女爱》式都市关系",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 4,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢唔系唔覆你，系等你先讲清楚你想点。",
    "spokenText": "佢唔系唔覆你，系等你先讲清楚你想点。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "沉默可能是在逼对方表态"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "《男亲女爱》式都市关系",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 5,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "你话冇所谓，但拣餐厅都拣到有立场。",
    "spokenText": "你话冇所谓，但拣餐厅都拣到有立场。",
    "choices": [
      "小选择会暴露真实偏好",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "茶餐厅约会场景",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 6,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "“我唔介意”之后加个“不过”，先系重点。",
    "spokenText": "“我唔介意”之后加个“不过”，先系重点。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "转折后的内容才是真边界",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "都市感情对白",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 7,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "你请我睇戏，唔代表我要演你写好嘅剧本。",
    "spokenText": "你请我睇戏，唔代表我要演你写好嘅剧本。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "接受邀请不等于接受关系安排",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "港片约会桥段",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 8,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "两个人最怕唔系嘈，系嘈完冇人收拾。",
    "spokenText": "两个人最怕唔系嘈，系嘈完冇人收拾。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "冲突后的修复比争输赢重要"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "都市感情对白",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 9,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "佢讲“你开心就得”，但眼神唔似真放手。",
    "spokenText": "佢讲“你开心就得”，但眼神唔似真放手。",
    "choices": [
      "字面祝福里可能藏着失落",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "港乐式感情场",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 10,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "你想要答案，佢只畀你天气报告。",
    "spokenText": "你想要答案，佢只畀你天气报告。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "对方在用闲聊回避核心问题",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "街角等车场景",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 11,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "暧昧最贵，贵在每句话都要估价。",
    "spokenText": "暧昧最贵，贵在每句话都要估价。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "暧昧消耗在不确定的解读成本",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "都市关系观察",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 12,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "讲边界唔系冷淡，系唔想大家乱估。",
    "spokenText": "讲边界唔系冷淡，系唔想大家乱估。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "边界是为了减少误解"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 05",
    "movieTitle": "关系沟通场景",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 13,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“你唔好谂多咗”有时本身就好值得谂。",
    "spokenText": "“你唔好谂多咗”有时本身就好值得谂。",
    "choices": [
      "否认过快，反而可能透露心虚",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "都市感情对白",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 14,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“我都系关心你啫”如果讲到好大声，就未必只系关心。",
    "spokenText": "“我都系关心你啫”如果讲到好大声，就未必只系关心。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "关心可能变成控制或施压",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "《男亲女爱》式嘴仗",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 15,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "佢话“你自己决定”，但每个选项都帮你打分。",
    "spokenText": "佢话“你自己决定”，但每个选项都帮你打分。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表面放权，实际仍在干预",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "都市关系观察",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 16,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“我冇嬲”讲三次，通常已经有事。",
    "spokenText": "“我冇嬲”讲三次，通常已经有事。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "重复否认常常代表情绪未消"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "港剧情侣争执",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 17,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "你话“我随便”，其实系想对方记得你嘅偏好。",
    "spokenText": "你话“我随便”，其实系想对方记得你嘅偏好。",
    "choices": [
      "随便里可能藏着期待被理解",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "茶餐厅点餐场景",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 18,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "佢笑住讲“你真系好忙”，个笑唔一定系开心。",
    "spokenText": "佢笑住讲“你真系好忙”，个笑唔一定系开心。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "笑可以包装不满和试探",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "办公室暧昧场",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 19,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“下次先啦”如果冇下次时间，就只系好听嘅拒绝。",
    "spokenText": "“下次先啦”如果冇下次时间，就只系好听嘅拒绝。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "没有具体安排，多数只是婉拒",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "城市约会对白",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 20,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "你讲“我明”，但马上解释自己，听落似唔明。",
    "spokenText": "你讲“我明”，但马上解释自己，听落似唔明。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "急于辩解会削弱理解感"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "感情修复场景",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 21,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“都几好呀”尾音一沉，就唔系真夸。",
    "spokenText": "“都几好呀”尾音一沉，就唔系真夸。",
    "choices": [
      "尾音和停顿会改变评价强度",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "港式口语听感",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 22,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "佢问“你同边个去”，问嘅未必系地点。",
    "spokenText": "佢问“你同边个去”，问嘅未必系地点。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "问题背后可能是关系安全感",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "港剧感情线",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 23,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“算啦”如果讲得太轻，可能系暂时唔想爆。",
    "spokenText": "“算啦”如果讲得太轻，可能系暂时唔想爆。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "轻轻收口不代表真正放下",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "街头告别场景",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 24,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "你话“我唔想管你”，但下一句开始排时间表。",
    "spokenText": "你话“我唔想管你”，但下一句开始排时间表。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "话语和行为不一致"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "都市关系观察",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 25,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“你开心咪得啰”有时系祝福，有时系撤退。",
    "spokenText": "“你开心咪得啰”有时系祝福，有时系撤退。",
    "choices": [
      "要分辨祝福和情绪退出",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "港乐式告别",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 26,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢讲“冇嘢”，眼神却避开你。",
    "spokenText": "佢讲“冇嘢”，眼神却避开你。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "非语言信号可能比字面更真实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 05",
    "movieTitle": "感情对峙场",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 27,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "两个人喺戏院门口争“睇咩都得”，但谁都唔买飞。",
    "spokenText": "两个人喺戏院门口争“睇咩都得”，但谁都唔买飞。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "双方都在等对方先表态",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 05",
    "movieTitle": "港片约会开场",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 28,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "茶餐厅里一人不停搅奶茶，另一人不停睇手机。",
    "spokenText": "茶餐厅里一人不停搅奶茶，另一人不停睇手机。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "对话已经卡在未说出口的问题"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 05",
    "movieTitle": "茶餐厅感情场",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 29,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "佢话“我送你落楼”，对方回“你送到呢度就得”。",
    "spokenText": "佢话“我送你落楼”，对方回“你送到呢度就得”。",
    "choices": [
      "对方在温和设定距离",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 05",
    "movieTitle": "楼下告别桥段",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 30,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "朋友聚会突然安静，因为有人提到“旧同学”。",
    "spokenText": "朋友聚会突然安静，因为有人提到“旧同学”。",
    "choices": [
      "只是临时改去吃饭",
      "旧关系触发了微妙情绪",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 05",
    "movieTitle": "港剧聚会场",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 31,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "雨夜等车，佢只问“冻唔冻”，冇问“留唔留”。",
    "spokenText": "雨夜等车，佢只问“冻唔冻”，冇问“留唔留”。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "关心还停在安全距离",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 05",
    "movieTitle": "港乐式雨夜",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 32,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "K房有人点咗首苦情歌，全桌突然望向同一个人。",
    "spokenText": "K房有人点咗首苦情歌，全桌突然望向同一个人。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "歌曲变成众人心照的暗示"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 05",
    "movieTitle": "K房感情场",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 33,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "对方把“下次约”讲得好自然，但即刻转话题。",
    "spokenText": "对方把“下次约”讲得好自然，但即刻转话题。",
    "choices": [
      "更像礼貌收场而非真实邀约",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 05",
    "movieTitle": "城市街头桥段",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 34,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "一场误会之后，最先讲笑嗰个未必最轻松。",
    "spokenText": "一场误会之后，最先讲笑嗰个未必最轻松。",
    "choices": [
      "只是临时改去吃饭",
      "玩笑可能是在帮场面降温",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 05",
    "movieTitle": "无厘头关系场",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 35,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "把“你唔好成日估我”转成伴侣沟通。",
    "spokenText": "把“你唔好成日估我”转成伴侣沟通。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "我希望你直接问我，不要先替我下结论",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 05",
    "movieTitle": "关系沟通迁移",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 36,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "把“我唔系你嘅项目”转成边界表达。",
    "spokenText": "把“我唔系你嘅项目”转成边界表达。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "我愿意沟通，但不想被安排成任务"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 05",
    "movieTitle": "关系沟通迁移",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 37,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "对方迟迟不确认约会，你想不失礼地追问。",
    "spokenText": "对方迟迟不确认约会，你想不失礼地追问。",
    "choices": [
      "如果今晚不方便，我们可以直接改期",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 05",
    "movieTitle": "关系沟通迁移",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 38,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "你想拒绝暧昧但保留体面。",
    "spokenText": "你想拒绝暧昧但保留体面。",
    "choices": [
      "直接用情绪压过讨论",
      "我珍惜相处，但不想给你错误期待",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 05",
    "movieTitle": "关系沟通迁移",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 39,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "对方用玩笑掩饰冒犯，你想提醒。",
    "spokenText": "对方用玩笑掩饰冒犯，你想提醒。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "这个玩笑我听到不太舒服，我们换个讲法",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 05",
    "movieTitle": "关系沟通迁移",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 40,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "你想从猜测回到事实。",
    "spokenText": "你想从猜测回到事实。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "我不想再估，不如讲清楚各自想法"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 05",
    "movieTitle": "关系沟通迁移",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 41,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "对方说“你变咗”，你想稳住对话。",
    "spokenText": "对方说“你变咗”，你想稳住对话。",
    "choices": [
      "我可能有变化，但可以具体讲边一点吗",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 05",
    "movieTitle": "关系沟通迁移",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 42,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "你想修复误会，不想认输式道歉。",
    "spokenText": "你想修复误会，不想认输式道歉。",
    "choices": [
      "直接用情绪压过讨论",
      "我刚才讲法不够好，但我想重新解释",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 05",
    "movieTitle": "关系沟通迁移",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 43,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "听“得闲先讲”时，重点不是“得闲”，而是后面有没有具体时间。",
    "spokenText": "听“得闲先讲”时，重点不是“得闲”，而是后面有没有具体时间。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "留意是否有具体承诺，而非只听客套",
      "每个字都读成长音就得"
    ],
    "answerIndex": 2,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 05",
    "movieTitle": "粤语约会听感",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 44,
    "prompt": "听这句时最该留意什么？",
    "cantoneseText": "“冇嬲”如果重音压喺“冇”，可能系压住情绪。",
    "spokenText": "“冇嬲”如果重音压喺“冇”，可能系压住情绪。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得",
      "听重音位置判断否认是否勉强"
    ],
    "answerIndex": 3,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 05",
    "movieTitle": "粤语情绪听感",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 45,
    "prompt": "这句的读音/停顿重点是？",
    "cantoneseText": "“你开心就得”尾音上扬和下沉，意思可以差好远。",
    "spokenText": "“你开心就得”尾音上扬和下沉，意思可以差好远。",
    "choices": [
      "尾音决定它是祝福还是不满",
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 0,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 05",
    "movieTitle": "粤语尾音听感",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 46,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“唔紧要”讲得太快，可能系不想继续争。",
    "spokenText": "“唔紧要”讲得太快，可能系不想继续争。",
    "choices": [
      "只看字面，不管停顿",
      "语速快可能代表想结束话题",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 1,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 05",
    "movieTitle": "粤语节奏听感",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 47,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：男女交往题最该训练什么？",
    "spokenText": "复盘：男女交往题最该训练什么？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "把暧昧、边界和拒绝听成具体关系动作",
      "遇到语气就直接反击"
    ],
    "answerIndex": 2,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 05",
    "movieTitle": "Day05复盘",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 48,
    "prompt": "这题想训练的底层能力是？",
    "cantoneseText": "复盘：为什么不只背词汇？",
    "spokenText": "复盘：为什么不只背词汇？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击",
      "关系里同一句话会因语气变成不同动作"
    ],
    "answerIndex": 3,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 05",
    "movieTitle": "Day05复盘",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 49,
    "prompt": "本章方法论更接近哪一项？",
    "cantoneseText": "复盘：遇到“冇所谓”该怎么练？",
    "spokenText": "复盘：遇到“冇所谓”该怎么练？",
    "choices": [
      "结合表情、后续行动和具体选择判断",
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 0,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 05",
    "movieTitle": "Day05复盘",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  },
  {
    "id": 50,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：今天最值得迁移到现实的是？",
    "spokenText": "复盘：今天最值得迁移到现实的是？",
    "choices": [
      "只背片名和演员表",
      "少猜、多问、讲边界但保留体面",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 1,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：男女交往边界 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 05",
    "movieTitle": "Day05复盘",
    "movieNote": "受《男亲女爱》和都市感情港剧场景启发，题句为原创。"
  }
];

const movieTrainingDay06ChapterTitle = "15天港片粤语训练 Day 06：大时代，人性、输赢与情绪压力";

const movieTrainingDay06Questions = [
  {
    "id": 1,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢讲输赢，听落似讲股票，其实讲紧尊严。",
    "spokenText": "佢讲输赢，听落似讲股票，其实讲紧尊严。",
    "choices": [
      "表面谈结果，实际在谈自尊和面子",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "《大时代》式压力场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 2,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "一张报价单，可以照出几个人嘅贪同惊。",
    "spokenText": "一张报价单，可以照出几个人嘅贪同惊。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "利益变化会放大人性的恐惧和欲望",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "金融风暴场景",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 3,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "你以为佢要赢，其实佢系怕再输一次。",
    "spokenText": "你以为佢要赢，其实佢系怕再输一次。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "强硬背后可能是失败创伤",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "家族冲突场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 4,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "市场未开，屋企已经先跌停。",
    "spokenText": "市场未开，屋企已经先跌停。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "外部压力已经渗进家庭关系"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "《大时代》式家庭场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 5,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "佢话“我冇得拣”，通常系已经拣咗最狠嗰边。",
    "spokenText": "佢话“我冇得拣”，通常系已经拣咗最狠嗰边。",
    "choices": [
      "所谓没选择可能是在合理化决定",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "江湖/商战压力",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 6,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "输一次唔可怕，最怕将所有人拖落水。",
    "spokenText": "输一次唔可怕，最怕将所有人拖落水。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "个人风险会变成集体代价",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "金融剧场景",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 7,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "“人情”喺压力面前，有时会变成筹码。",
    "spokenText": "“人情”喺压力面前，有时会变成筹码。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "关系可能被利益重新定价",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "家族利益场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 8,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "佢唔系怕穷，系怕畀人睇低。",
    "spokenText": "佢唔系怕穷，系怕畀人睇低。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "真正驱动力是羞辱感和身份焦虑"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "大时代人物心理",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 9,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "一声“信我”，如果冇底牌，就系借信任。",
    "spokenText": "一声“信我”，如果冇底牌，就系借信任。",
    "choices": [
      "没有依据的承诺是在消耗信任",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "商战对话",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 10,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢讲到好热血，但数字一路唔肯摊开。",
    "spokenText": "佢讲到好热血，但数字一路唔肯摊开。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "情绪动员不能替代事实透明",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "股市会议场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 11,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "“为你好”可以系保护，也可以系控制。",
    "spokenText": "“为你好”可以系保护，也可以系控制。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "要分辨照顾和支配的边界",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "家庭压力场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 12,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "大时代唔只系外面大，系每个人心入面都放大。",
    "spokenText": "大时代唔只系外面大，系每个人心入面都放大。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "大环境会放大个人选择和情绪"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 06",
    "movieTitle": "剧集主题复盘",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 13,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“你跟唔跟我”问嘅唔只系行动，仲系忠诚。",
    "spokenText": "“你跟唔跟我”问嘅唔只系行动，仲系忠诚。",
    "choices": [
      "问题在测试站队和忠诚",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "商战站队场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 14,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢话“我承担”，但冇讲点承担。",
    "spokenText": "佢话“我承担”，但冇讲点承担。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "豪言可能缺少具体责任",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "压力谈判场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 15,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“你唔信我？”一出口，讨论就变成人身关系。",
    "spokenText": "“你唔信我？”一出口，讨论就变成人身关系。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "把事实问题转成信任压力",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "家族争执场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 16,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“而家唔搏，几时搏”可能系勇气，亦可能系赌气。",
    "spokenText": "“而家唔搏，几时搏”可能系勇气，亦可能系赌气。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "要分清战略冒险和情绪下注"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "金融风暴场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 17,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢越讲“冷静”，手指越敲得急。",
    "spokenText": "佢越讲“冷静”，手指越敲得急。",
    "choices": [
      "语言冷静不代表身体不慌",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "交易室场景",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 18,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“我输得起”如果讲畀别人听，可能系要别人陪输。",
    "spokenText": "“我输得起”如果讲畀别人听，可能系要别人陪输。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "自称承担可能牵连他人",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "商战压力场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 19,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“一家人唔计较”常常系最难计清楚。",
    "spokenText": "“一家人唔计较”常常系最难计清楚。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "亲情话术可能掩盖利益不清",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "家庭利益场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 20,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢讲“你会后悔”，不是预测，是施压。",
    "spokenText": "佢讲“你会后悔”，不是预测，是施压。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "用未来恐惧逼对方让步"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "高压对峙场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 21,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“我只系想公平”要看规则是不是他定的。",
    "spokenText": "“我只系想公平”要看规则是不是他定的。",
    "choices": [
      "公平话语可能被权力包装",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "谈判场景",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 22,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“你知唔知我为你做咗几多”系情绪账单。",
    "spokenText": "“你知唔知我为你做咗几多”系情绪账单。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "付出被拿来要求回报",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "家庭冲突场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 23,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“今日忍，明日赢”如果没有计划，只是安慰。",
    "spokenText": "“今日忍，明日赢”如果没有计划，只是安慰。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "口号不能替代路线",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "低谷场景",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 24,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "佢话“冇事”，但所有人都唔敢坐低。",
    "spokenText": "佢话“冇事”，但所有人都唔敢坐低。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "气氛说明问题还没过去"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "办公室压力场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 25,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“我唔怕死”有时系最怕输。",
    "spokenText": "“我唔怕死”有时系最怕输。",
    "choices": [
      "极端勇气可能来自极端恐惧",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "港剧强人场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 26,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢笑住讲“慢慢玩”，其实已经开战。",
    "spokenText": "佢笑住讲“慢慢玩”，其实已经开战。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "笑是压低火气的宣战方式",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 06",
    "movieTitle": "商战对峙",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 27,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "茶餐厅电视播住股价，几个人突然无人出声。",
    "spokenText": "茶餐厅电视播住股价，几个人突然无人出声。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "市场消息改变了关系气氛",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 06",
    "movieTitle": "金融街场景",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 28,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "家庭饭局上有人讲“钱唔重要”，大家反而望住佢。",
    "spokenText": "家庭饭局上有人讲“钱唔重要”，大家反而望住佢。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "说钱不重要的人可能最在意"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 06",
    "movieTitle": "家族饭局",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 29,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "交易室里最安静的人，手上电话最多。",
    "spokenText": "交易室里最安静的人，手上电话最多。",
    "choices": [
      "真正有动作的人未必最吵",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 06",
    "movieTitle": "市场场景",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 30,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "有人拍台话“信我”，另一个人开始收文件。",
    "spokenText": "有人拍台话“信我”，另一个人开始收文件。",
    "choices": [
      "只是临时改去吃饭",
      "有人已经准备降低风险",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 06",
    "movieTitle": "谈判桌场景",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 31,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "夜晚天台讲理想，楼下有人等数。",
    "spokenText": "夜晚天台讲理想，楼下有人等数。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "理想和现实债务同时存在",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 06",
    "movieTitle": "港剧天台",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 32,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "父子争执里一句“你似我”，全场更沉。",
    "spokenText": "父子争执里一句“你似我”，全场更沉。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "相似性可能是最大冲突点"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 06",
    "movieTitle": "家族对峙",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 33,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "有人输完还请食饭，气氛却更紧。",
    "spokenText": "有人输完还请食饭，气氛却更紧。",
    "choices": [
      "豪爽可能是在掩饰失控",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 06",
    "movieTitle": "江湖饭局",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 34,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "办公室突然有人关电视，其他人都明白。",
    "spokenText": "办公室突然有人关电视，其他人都明白。",
    "choices": [
      "只是临时改去吃饭",
      "坏消息已经无需明说",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 06",
    "movieTitle": "金融剧场",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 35,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "把“搏一铺”转成项目表达。",
    "spokenText": "把“搏一铺”转成项目表达。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "这是高风险方案，需要先列损失上限",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 06",
    "movieTitle": "职场风险沟通",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 36,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "把“你信唔信我”转成会议表达。",
    "spokenText": "把“你信唔信我”转成会议表达。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "我们先看依据，再决定信任放在哪里"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 06",
    "movieTitle": "职场风险沟通",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 37,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "对方用情绪推动决策，你怎么接？",
    "spokenText": "对方用情绪推动决策，你怎么接？",
    "choices": [
      "我理解紧迫感，但需要先确认数据",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 06",
    "movieTitle": "职场风险沟通",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 38,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "团队想豪赌资源，你要设边界。",
    "spokenText": "团队想豪赌资源，你要设边界。",
    "choices": [
      "直接用情绪压过讨论",
      "可以试，但要设止损点和复盘时间",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 06",
    "movieTitle": "职场风险沟通",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 39,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "上司说“失败我负责”，你要确认什么？",
    "spokenText": "上司说“失败我负责”，你要确认什么？",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "请明确责任范围和资源支持",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 06",
    "movieTitle": "职场风险沟通",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 40,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "客户用未来收益压价，你怎么回？",
    "spokenText": "客户用未来收益压价，你怎么回？",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "预期收益不能替代当前交付成本"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 06",
    "movieTitle": "职场风险沟通",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 41,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "同事说“大家一家人”，你如何稳住？",
    "spokenText": "同事说“大家一家人”，你如何稳住？",
    "choices": [
      "关系归关系，责任和时间仍要写清楚",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 06",
    "movieTitle": "职场风险沟通",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 42,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "你想把输赢话术拉回合作。",
    "spokenText": "你想把输赢话术拉回合作。",
    "choices": [
      "直接用情绪压过讨论",
      "我们先定义共同目标，再谈各自让步",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 06",
    "movieTitle": "职场风险沟通",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 43,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“信我”如果重音很急，可能不是信心而是焦虑。",
    "spokenText": "“信我”如果重音很急，可能不是信心而是焦虑。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "听语速和重音判断承诺是否稳",
      "每个字都读成长音就得"
    ],
    "answerIndex": 2,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 06",
    "movieTitle": "粤语压力听感",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 44,
    "prompt": "听这句时最该留意什么？",
    "cantoneseText": "“搏”字短促有力，容易带出赌气感。",
    "spokenText": "“搏”字短促有力，容易带出赌气感。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得",
      "听短促字是否推动情绪下注"
    ],
    "answerIndex": 3,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 06",
    "movieTitle": "粤语压力听感",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 45,
    "prompt": "这句的读音/停顿重点是？",
    "cantoneseText": "“公平”拖长讲，可能是在争定义权。",
    "spokenText": "“公平”拖长讲，可能是在争定义权。",
    "choices": [
      "留意关键词是否被刻意加重",
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 0,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 06",
    "movieTitle": "粤语谈判听感",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 46,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“冇得拣”停顿在前面，通常是在铺垫责任转移。",
    "spokenText": "“冇得拣”停顿在前面，通常是在铺垫责任转移。",
    "choices": [
      "只看字面，不管停顿",
      "听停顿位置判断是否卸责",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 1,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 06",
    "movieTitle": "粤语压力听感",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 47,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：大时代式题最该避免什么？",
    "spokenText": "复盘：大时代式题最该避免什么？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "被豪言、输赢和亲情话术牵着走",
      "遇到语气就直接反击"
    ],
    "answerIndex": 2,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 06",
    "movieTitle": "Day06复盘",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 48,
    "prompt": "这题想训练的底层能力是？",
    "cantoneseText": "复盘：压力场景里先听什么？",
    "spokenText": "复盘：压力场景里先听什么？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击",
      "先听谁在转移风险和责任"
    ],
    "answerIndex": 3,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 06",
    "movieTitle": "Day06复盘",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 49,
    "prompt": "本章方法论更接近哪一项？",
    "cantoneseText": "复盘：职场迁移最有用的一招是？",
    "spokenText": "复盘：职场迁移最有用的一招是？",
    "choices": [
      "把热血口号翻成依据、上限和责任",
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 0,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 06",
    "movieTitle": "Day06复盘",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  },
  {
    "id": 50,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：今天的粤语学习重点是？",
    "spokenText": "复盘：今天的粤语学习重点是？",
    "choices": [
      "只背片名和演员表",
      "听懂强硬背后的恐惧、面子和利益",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 1,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：大时代式压力 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 06",
    "movieTitle": "Day06复盘",
    "movieNote": "受《大时代》一类家族、市场和情绪压力场景启发，题句为原创。"
  }
];

const movieTrainingDay07ChapterTitle = "15天港片粤语训练 Day 07：创世纪，商业、野心与谈判";

const movieTrainingDay07Questions = [
  {
    "id": 1,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢讲愿景，真正要你畀嘅系时间同现金流。",
    "spokenText": "佢讲愿景，真正要你畀嘅系时间同现金流。",
    "choices": [
      "愿景背后是在争取资源承诺",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "《创世纪》式商战",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 2,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "一个项目最贵唔系地皮，系所有人对未来嘅想像。",
    "spokenText": "一个项目最贵唔系地皮，系所有人对未来嘅想像。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "预期会影响价格和决策",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "地产谈判场",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 3,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "佢话“大家一齐赢”，但分账方式未讲。",
    "spokenText": "佢话“大家一齐赢”，但分账方式未讲。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "共赢口号还没落到利益分配",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "商业会议场",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 4,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "“机会”两个字好靓，但风险通常写喺脚注。",
    "spokenText": "“机会”两个字好靓，但风险通常写喺脚注。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "机会叙事容易淡化风险"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "投资路演场",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 5,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "你以为佢想签约，其实佢想拖时间。",
    "spokenText": "你以为佢想签约，其实佢想拖时间。",
    "choices": [
      "谈判动作可能是争取时间",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "商战场景",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 6,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "承诺未落纸，听落几动人都只系风。",
    "spokenText": "承诺未落纸，听落几动人都只系风。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "口头承诺不等于可执行协议",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "合约谈判",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 7,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢肯让价，可能系因为更想要控制权。",
    "spokenText": "佢肯让价，可能系因为更想要控制权。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "价格让步可能换取更大权力",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "董事会场",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 8,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "讲生意唔怕直接，怕直接到冇后路。",
    "spokenText": "讲生意唔怕直接，怕直接到冇后路。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "清楚表达也要保留回旋空间"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "商业对白",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 9,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "“长期合作”要先睇短期边个埋单。",
    "spokenText": "“长期合作”要先睇短期边个埋单。",
    "choices": [
      "长期关系不能掩盖当前成本",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "客户谈判",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 10,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢讲市场好大，唔代表你嘅位置好稳。",
    "spokenText": "佢讲市场好大，唔代表你嘅位置好稳。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "市场规模不等于个人优势",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "创业会议",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 11,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "商业最迷人处，系人人都话自己讲事实。",
    "spokenText": "商业最迷人处，系人人都话自己讲事实。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "事实常被立场选择性呈现",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "商战观察",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 12,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "一杯红酒可以庆功，也可以测试谁先松口。",
    "spokenText": "一杯红酒可以庆功，也可以测试谁先松口。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "社交场也是谈判延伸"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 07",
    "movieTitle": "会所谈判场",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 13,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“我考虑下”喺谈判桌上，可能系拒绝，也可能系抬价。",
    "spokenText": "“我考虑下”喺谈判桌上，可能系拒绝，也可能系抬价。",
    "choices": [
      "拖延可以是策略信号",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "商业谈判",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 14,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢话“我唔急”，但秘书已经约咗三次会。",
    "spokenText": "佢话“我唔急”，但秘书已经约咗三次会。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "字面不急，动作很急",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "商业谈判",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 15,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“你开个价”其实可能系等你暴露底线。",
    "spokenText": "“你开个价”其实可能系等你暴露底线。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "让对方先报价是在探底",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "报价场景",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 16,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“我尊重专业”之后加一堆条件，即系未真尊重。",
    "spokenText": "“我尊重专业”之后加一堆条件，即系未真尊重。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "尊重话术可能包装限制"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "甲方会议",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 17,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢讲“朋友价”，通常想你忘记成本价。",
    "spokenText": "佢讲“朋友价”，通常想你忘记成本价。",
    "choices": [
      "关系词可能用来压低价格",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "商业人情",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 18,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“我只要一个承诺”听落细，其实可能好重。",
    "spokenText": "“我只要一个承诺”听落细，其实可能好重。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "小承诺可能绑定长期责任",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "合伙谈判",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 19,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“呢单嘢唔难”往往系想你快啲接。",
    "spokenText": "“呢单嘢唔难”往往系想你快啲接。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "低估难度是一种推进话术",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "项目会议",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 20,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“你有冇信心”不一定问能力，可能问是否愿意背锅。",
    "spokenText": "“你有冇信心”不一定问能力，可能问是否愿意背锅。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "信心问题可能转移责任"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "职场商战",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 21,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“今日唔签，机会就冇”是在制造稀缺感。",
    "spokenText": "“今日唔签，机会就冇”是在制造稀缺感。",
    "choices": [
      "限时压力是谈判工具",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "签约场景",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 22,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "佢话“我哋好透明”，但附件永远最后先发。",
    "spokenText": "佢话“我哋好透明”，但附件永远最后先发。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "透明声明要看信息是否同步",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "商务协作",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 23,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“你自己衡量”有时系把风险推返畀你。",
    "spokenText": "“你自己衡量”有时系把风险推返畀你。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表面自由，实际转移风险",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "商业决策",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 24,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“大家咁熟”之后通常有难讲嘅条件。",
    "spokenText": "“大家咁熟”之后通常有难讲嘅条件。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "熟人关系常被用来降低防备"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "人情交易",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 25,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“我唔想赢晒”可能只是想赢得好看。",
    "spokenText": "“我唔想赢晒”可能只是想赢得好看。",
    "choices": [
      "谦让话术不等于实际让利",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "商战对白",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 26,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“后面有大把机会”如果没有清单，就是安慰。",
    "spokenText": "“后面有大把机会”如果没有清单，就是安慰。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "未来机会需要具体化才可靠",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 07",
    "movieTitle": "商业承诺",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 27,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "会议室里投影全是增长曲线，财务却一直沉默。",
    "spokenText": "会议室里投影全是增长曲线，财务却一直沉默。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "风险可能藏在现金流里",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 07",
    "movieTitle": "董事会场景",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 28,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "签约前一刻，对方突然提“顺便加一条”。",
    "spokenText": "签约前一刻，对方突然提“顺便加一条”。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "临门条件可能是关键博弈"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 07",
    "movieTitle": "合约场景",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 29,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "酒会上人人讲合作，只有两个人在讲交付日期。",
    "spokenText": "酒会上人人讲合作，只有两个人在讲交付日期。",
    "choices": [
      "真正谈生意的人关注执行",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 07",
    "movieTitle": "会所场景",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 30,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "项目名改得好宏大，但预算表少了一页。",
    "spokenText": "项目名改得好宏大，但预算表少了一页。",
    "choices": [
      "只是临时改去吃饭",
      "包装升级可能遮住现实缺口",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 07",
    "movieTitle": "地产会议",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 31,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "客户不断夸团队专业，却迟迟不确认预算。",
    "spokenText": "客户不断夸团队专业，却迟迟不确认预算。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "赞美可能替代不了付款承诺",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 07",
    "movieTitle": "客户会议",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 32,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "老板说“先做出气势”，团队开始交换眼神。",
    "spokenText": "老板说“先做出气势”，团队开始交换眼神。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "气势不能替代资源安排"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 07",
    "movieTitle": "创业办公室",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 33,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "竞争对手突然变客气，通常不是突然欣赏你。",
    "spokenText": "竞争对手突然变客气，通常不是突然欣赏你。",
    "choices": [
      "客气可能是试探或拖延",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 07",
    "movieTitle": "商战场景",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 34,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "饭局尾声才讲真正条件，前面都是暖场。",
    "spokenText": "饭局尾声才讲真正条件，前面都是暖场。",
    "choices": [
      "只是临时改去吃饭",
      "关键条件常在关系升温后出现",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 07",
    "movieTitle": "商务饭局",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 35,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "把“大家一齐赢”转成会议追问。",
    "spokenText": "把“大家一齐赢”转成会议追问。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "请先明确收益、成本和责任怎么分",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 07",
    "movieTitle": "商业沟通",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 36,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "对方只讲愿景，你要拉回执行。",
    "spokenText": "对方只讲愿景，你要拉回执行。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "愿景我认同，下一步资源和时间表是什么"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 07",
    "movieTitle": "商业沟通",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 37,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "客户想用朋友价压你，你怎么回？",
    "spokenText": "客户想用朋友价压你，你怎么回？",
    "choices": [
      "我重视关系，所以更要把成本讲清楚",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 07",
    "movieTitle": "商业沟通",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 38,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "合伙人要你先承诺，你要设条件。",
    "spokenText": "合伙人要你先承诺，你要设条件。",
    "choices": [
      "直接用情绪压过讨论",
      "我可以承诺方向，但需要先确认边界",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 07",
    "movieTitle": "商业沟通",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 39,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "老板让团队“搏一搏”，你要稳住。",
    "spokenText": "老板让团队“搏一搏”，你要稳住。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "可以尝试，但需要止损线和负责人",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 07",
    "movieTitle": "商业沟通",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 40,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "供应商说“以后补返”，你怎么写清楚？",
    "spokenText": "供应商说“以后补返”，你怎么写清楚？",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "后续补偿请写进交付节点和金额"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 07",
    "movieTitle": "商业沟通",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 41,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "你想拒绝模糊合作。",
    "spokenText": "你想拒绝模糊合作。",
    "choices": [
      "目前条件不够清晰，我建议先不进入执行",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 07",
    "movieTitle": "商业沟通",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 42,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "你想保留关系但不让步太多。",
    "spokenText": "你想保留关系但不让步太多。",
    "choices": [
      "直接用情绪压过讨论",
      "这部分我可以调整，核心条件需要保留",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 07",
    "movieTitle": "商业沟通",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 43,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“考虑下”拖慢讲，多数是保留空间，不是立即答应。",
    "spokenText": "“考虑下”拖慢讲，多数是保留空间，不是立即答应。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "听拖音判断是否留价码",
      "每个字都读成长音就得"
    ],
    "answerIndex": 2,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 07",
    "movieTitle": "粤语谈判听感",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 44,
    "prompt": "听这句时最该留意什么？",
    "cantoneseText": "“朋友价”讲得太亲热，要小心关系压价。",
    "spokenText": "“朋友价”讲得太亲热，要小心关系压价。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得",
      "听亲昵称呼是否在降低戒心"
    ],
    "answerIndex": 3,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 07",
    "movieTitle": "粤语商务听感",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 45,
    "prompt": "这句的读音/停顿重点是？",
    "cantoneseText": "“顺便”两个字轻轻带过，可能藏着额外要求。",
    "spokenText": "“顺便”两个字轻轻带过，可能藏着额外要求。",
    "choices": [
      "听轻描淡写处是否有新增成本",
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 0,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 07",
    "movieTitle": "粤语商务听感",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 46,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“唔急”如果后面马上问日期，就不是真不急。",
    "spokenText": "“唔急”如果后面马上问日期，就不是真不急。",
    "choices": [
      "只看字面，不管停顿",
      "听前后句矛盾判断真实需求",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 1,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 07",
    "movieTitle": "粤语商务听感",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 47,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：创世纪式训练最重要的是？",
    "spokenText": "复盘：创世纪式训练最重要的是？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "把愿景翻成资源、责任和风险",
      "遇到语气就直接反击"
    ],
    "answerIndex": 2,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 07",
    "movieTitle": "Day07复盘",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 48,
    "prompt": "这题想训练的底层能力是？",
    "cantoneseText": "复盘：商战对白里最容易误判什么？",
    "spokenText": "复盘：商战对白里最容易误判什么？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击",
      "把漂亮承诺当成可执行合约"
    ],
    "answerIndex": 3,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 07",
    "movieTitle": "Day07复盘",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 49,
    "prompt": "本章方法论更接近哪一项？",
    "cantoneseText": "复盘：成人学粤语怎么借商战剧？",
    "spokenText": "复盘：成人学粤语怎么借商战剧？",
    "choices": [
      "练听条件、底线、试探和回旋",
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 0,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 07",
    "movieTitle": "Day07复盘",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  },
  {
    "id": 50,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：今天最该带走的一句原则是？",
    "spokenText": "复盘：今天最该带走的一句原则是？",
    "choices": [
      "只背片名和演员表",
      "讲合作前先讲清楚怎么落地",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 1,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：创世纪式商业谈判 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 07",
    "movieTitle": "Day07复盘",
    "movieNote": "受《创世纪》一类商业、地产、愿景和谈判场景启发，题句为原创。"
  }
];

const movieTrainingDay08ChapterTitle = "15天港片粤语训练 Day 08：新闻女王，表达、立场与职场权力";

const movieTrainingDay08Questions = [
  {
    "id": 1,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "镜头前讲中立，镜头后先知道边个有立场。",
    "spokenText": "镜头前讲中立，镜头后先知道边个有立场。",
    "choices": [
      "中立表达背后也可能有权力选择",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "《新闻女王》式职场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 2,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "一句“确认咗未”，比十句热血更专业。",
    "spokenText": "一句“确认咗未”，比十句热血更专业。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "事实核实比情绪推动更重要",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "新闻编辑室",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 3,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "标题唔系越响越好，系要响得有根据。",
    "spokenText": "标题唔系越响越好，系要响得有根据。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "表达要有力度也要有依据",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "新闻标题场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 4,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢抢住发问，未必系勇，可能系抢话语权。",
    "spokenText": "佢抢住发问，未必系勇，可能系抢话语权。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "发问也是争夺位置的动作"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "发布会场景",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 5,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "“观众想知”有时系专业判断，有时系收视借口。",
    "spokenText": "“观众想知”有时系专业判断，有时系收视借口。",
    "choices": [
      "观众名义可能包装商业压力",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "电视台办公室",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 6,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "镜头一开，犹豫都会变成新闻。",
    "spokenText": "镜头一开，犹豫都会变成新闻。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "公开场合会放大微小反应",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "直播现场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 7,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "你讲事实，但排序已经表达咗态度。",
    "spokenText": "你讲事实，但排序已经表达咗态度。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "信息顺序本身有立场",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "新闻剪辑室",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 8,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "“快”唔代表准，新闻最怕快到冇回头。",
    "spokenText": "“快”唔代表准，新闻最怕快到冇回头。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "速度不能牺牲准确性"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "突发新闻场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 9,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "佢话“我只系问问题”，但问题有方向。",
    "spokenText": "佢话“我只系问问题”，但问题有方向。",
    "choices": [
      "提问方式可以暗含立场",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "采访现场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 10,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "主播一句停顿，可能救返成段访问。",
    "spokenText": "主播一句停顿，可能救返成段访问。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "节奏控制能改变现场气氛",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "直播间",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 11,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "“专业”唔系冇情绪，系情绪唔压过事实。",
    "spokenText": "“专业”唔系冇情绪，系情绪唔压过事实。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "专业是管理情绪而非消灭情绪",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "新闻职场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 12,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "后台最吵，前台先显得镇定。",
    "spokenText": "后台最吵，前台先显得镇定。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "台前稳定来自后台协作"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 08",
    "movieTitle": "电视台片场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 13,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“你确定？”喺编辑室，可能系提醒，也可能系挑战。",
    "spokenText": "“你确定？”喺编辑室，可能系提醒，也可能系挑战。",
    "choices": [
      "同一句追问可保护也可施压",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "新闻编辑室",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 14,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢话“你负责”，重点未必系信任，而系归责。",
    "spokenText": "佢话“你负责”，重点未必系信任，而系归责。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "授权可能同时绑定责任",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "职场权力场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 15,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“照事实讲”如果事实只畀你一半，就好危险。",
    "spokenText": "“照事实讲”如果事实只畀你一半，就好危险。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "信息不完整会影响中立",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "新闻职场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 16,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“呢条线你跟”听落系机会，也可能系试炼。",
    "spokenText": "“呢条线你跟”听落系机会，也可能系试炼。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "任务分配可能是位置考验"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "记者线索场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 17,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢讲“唔好带情绪”，但自己先定咗标题。",
    "spokenText": "佢讲“唔好带情绪”，但自己先定咗标题。",
    "choices": [
      "要求客观者未必真的客观",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "编辑会议",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 18,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“我畀你上镜”未必系奖励，可能系推你挡火。",
    "spokenText": "“我畀你上镜”未必系奖励，可能系推你挡火。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "曝光机会也可能带风险",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "直播职场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 19,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“观众会明”如果没有解释，就是偷懒。",
    "spokenText": "“观众会明”如果没有解释，就是偷懒。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "不能把理解成本全推给观众",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "新闻制作",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 20,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢话“剪短啲”，实际可能是删走争议。",
    "spokenText": "佢话“剪短啲”，实际可能是删走争议。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "技术要求可能隐藏立场选择"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "剪辑室",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 21,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“先出街再补”是新闻里最危险的快。",
    "spokenText": "“先出街再补”是新闻里最危险的快。",
    "choices": [
      "先发布后补救风险很高",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "突发现场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 22,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“我冇立场”有时只是未讲出口。",
    "spokenText": "“我冇立场”有时只是未讲出口。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "无立场声明需要事实检验",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "采访场景",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 23,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“你问得好尖”可以是夸奖，也可以是警告。",
    "spokenText": "“你问得好尖”可以是夸奖，也可以是警告。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "赞美里可能带提醒",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "发布会后台",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 24,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“保持距离”不是冷血，是保留判断力。",
    "spokenText": "“保持距离”不是冷血，是保留判断力。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "距离感是专业能力"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "新闻现场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 25,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“你想做英雄？”是在把专业追问变成个人动机。",
    "spokenText": "“你想做英雄？”是在把专业追问变成个人动机。",
    "choices": [
      "质疑动机可转移问题焦点",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "职场争论",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 26,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“今晚一定要有画面”说明压力来自效果。",
    "spokenText": "“今晚一定要有画面”说明压力来自效果。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "画面需求会影响报道选择",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 08",
    "movieTitle": "电视台指挥",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 27,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "直播前十秒，导播突然喊“确认来源”。",
    "spokenText": "直播前十秒，导播突然喊“确认来源”。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "团队仍在守事实底线",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 08",
    "movieTitle": "直播间场景",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 28,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "发布会上记者连续追问，发言人只重复同一句。",
    "spokenText": "发布会上记者连续追问，发言人只重复同一句。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "双方在话语权上拉扯"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 08",
    "movieTitle": "发布会场景",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 29,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "主播念完稿停半秒，摄影棚突然安静。",
    "spokenText": "主播念完稿停半秒，摄影棚突然安静。",
    "choices": [
      "停顿让信息重量显出来",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 08",
    "movieTitle": "新闻直播",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 30,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "编辑会上有人只问“边个负责”。",
    "spokenText": "编辑会上有人只问“边个负责”。",
    "choices": [
      "只是临时改去吃饭",
      "焦点从事实转到责任归属",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 08",
    "movieTitle": "职场会议",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 31,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "外景记者被催快点，但手机讯号断续。",
    "spokenText": "外景记者被催快点，但手机讯号断续。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "速度和准确性正在冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 08",
    "movieTitle": "突发现场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 32,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "剪辑师问“要保留呢句吗”，全组望向主编。",
    "spokenText": "剪辑师问“要保留呢句吗”，全组望向主编。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "一句话可能改变立场呈现"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 08",
    "movieTitle": "剪辑室场景",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 33,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "新人第一次上镜，前辈只提醒“唔好抢结论”。",
    "spokenText": "新人第一次上镜，前辈只提醒“唔好抢结论”。",
    "choices": [
      "专业训练是先呈现事实",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 08",
    "movieTitle": "新闻职场",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 34,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "深夜办公室只有标题组未走。",
    "spokenText": "深夜办公室只有标题组未走。",
    "choices": [
      "只是临时改去吃饭",
      "表达框架决定明天的公共理解",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 08",
    "movieTitle": "报馆/电视台",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 35,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "把“确认咗未”转成会议表达。",
    "spokenText": "把“确认咗未”转成会议表达。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "这个结论的来源和证据可以再确认吗",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 08",
    "movieTitle": "专业表达迁移",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 36,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "有人抢话语权，你想稳住讨论。",
    "spokenText": "有人抢话语权，你想稳住讨论。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "我们先让事实讲完，再进入判断"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 08",
    "movieTitle": "专业表达迁移",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 37,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "同事只讲情绪，你要拉回事实。",
    "spokenText": "同事只讲情绪，你要拉回事实。",
    "choices": [
      "我理解感受，但先把事实顺序理清",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 08",
    "movieTitle": "专业表达迁移",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 38,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "上司要求快，你担心质量。",
    "spokenText": "上司要求快，你担心质量。",
    "choices": [
      "直接用情绪压过讨论",
      "可以加快，但需要保留核对时间",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 08",
    "movieTitle": "专业表达迁移",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 39,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "对方质疑你动机，你如何回应？",
    "spokenText": "对方质疑你动机，你如何回应？",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "我的动机可以讨论，但问题本身仍要回答",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 08",
    "movieTitle": "专业表达迁移",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 40,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "你想表达立场但不失专业。",
    "spokenText": "你想表达立场但不失专业。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "我的判断基于这些事实，不是个人好恶"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 08",
    "movieTitle": "专业表达迁移",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 41,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "客户只要漂亮结论，你要提醒风险。",
    "spokenText": "客户只要漂亮结论，你要提醒风险。",
    "choices": [
      "呈现可以简洁，但限制条件要保留",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 08",
    "movieTitle": "专业表达迁移",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 42,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "团队要删掉不利信息，你怎么接？",
    "spokenText": "团队要删掉不利信息，你怎么接？",
    "choices": [
      "直接用情绪压过讨论",
      "删减可以，但不能改变事实方向",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 08",
    "movieTitle": "专业表达迁移",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 43,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“确认咗未”重音落在“确认”，是专业提醒；落在“未”可能带追责。",
    "spokenText": "“确认咗未”重音落在“确认”，是专业提醒；落在“未”可能带追责。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "听重音判断提醒还是追责",
      "每个字都读成长音就得"
    ],
    "answerIndex": 2,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 08",
    "movieTitle": "粤语职场听感",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 44,
    "prompt": "听这句时最该留意什么？",
    "cantoneseText": "“你负责”语气平稳和压低，责任重量不同。",
    "spokenText": "“你负责”语气平稳和压低，责任重量不同。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得",
      "听声线压力判断授权强度"
    ],
    "answerIndex": 3,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 08",
    "movieTitle": "粤语职场听感",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 45,
    "prompt": "这句的读音/停顿重点是？",
    "cantoneseText": "“我只系问问题”停顿太长，可能是在防守。",
    "spokenText": "“我只系问问题”停顿太长，可能是在防守。",
    "choices": [
      "听停顿判断是否预设立场",
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 0,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 08",
    "movieTitle": "粤语采访听感",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 46,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“快啲”连讲两次，通常不是鼓励，是现场压力。",
    "spokenText": "“快啲”连讲两次，通常不是鼓励，是现场压力。",
    "choices": [
      "只看字面，不管停顿",
      "听重复判断紧急程度",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 1,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 08",
    "movieTitle": "粤语现场听感",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 47,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：新闻职场题训练什么？",
    "spokenText": "复盘：新闻职场题训练什么？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "在快节奏里听懂事实、立场和责任",
      "遇到语气就直接反击"
    ],
    "answerIndex": 2,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 08",
    "movieTitle": "Day08复盘",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 48,
    "prompt": "这题想训练的底层能力是？",
    "cantoneseText": "复盘：为什么要练提问语气？",
    "spokenText": "复盘：为什么要练提问语气？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击",
      "同一句问题可以求证，也可以施压"
    ],
    "answerIndex": 3,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 08",
    "movieTitle": "Day08复盘",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 49,
    "prompt": "本章方法论更接近哪一项？",
    "cantoneseText": "复盘：职场表达最实用的迁移是？",
    "spokenText": "复盘：职场表达最实用的迁移是？",
    "choices": [
      "把观点放在证据后面说",
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 0,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 08",
    "movieTitle": "Day08复盘",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  },
  {
    "id": 50,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：今天的粤语入口是什么？",
    "spokenText": "复盘：今天的粤语入口是什么？",
    "choices": [
      "只背片名和演员表",
      "用新闻场景练专业、边界和话语权",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 1,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：新闻职场表达 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 08",
    "movieTitle": "Day08复盘",
    "movieNote": "受《新闻女王》一类新闻职场、直播间和权力博弈场景启发，题句为原创。"
  }
];

const movieTrainingDay09ChapterTitle = "15天港片粤语训练 Day 09：周润发经典港片气场";

const movieTrainingDay09Questions = [
  {
    "id": 1,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢未开口，已经畀人感觉件事有分寸。",
    "spokenText": "佢未开口，已经畀人感觉件事有分寸。",
    "choices": [
      "气场来自克制和边界感",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "发哥式港片气场",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 2,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "一句“慢慢嚟”，唔系拖，是稳住场面。",
    "spokenText": "一句“慢慢嚟”，唔系拖，是稳住场面。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "放慢节奏可以控制局面",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "英雄片场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 3,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "真正有底气嘅人，唔使每句都大声。",
    "spokenText": "真正有底气嘅人，唔使每句都大声。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "底气不等于音量",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "江湖饭局",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 4,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢肯让一步，通常系知道自己企得稳。",
    "spokenText": "佢肯让一步，通常系知道自己企得稳。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "让步可能来自自信而非软弱"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "港片对峙",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 5,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "“有数得计”唔只是钱，仲有情义同后果。",
    "spokenText": "“有数得计”唔只是钱，仲有情义同后果。",
    "choices": [
      "算账也包含人情和代价",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "江湖/商场场",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 6,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "发哥式潇洒，重点系输都唔乱阵脚。",
    "spokenText": "发哥式潇洒，重点系输都唔乱阵脚。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "从容体现在逆风时不失控",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "赌片气质",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 7,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "一杯茶放低，可能比一句狠话更有力。",
    "spokenText": "一杯茶放低，可能比一句狠话更有力。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "动作可以替代夸张威胁",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "港片静场",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 8,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "佢讲义气，但唔会用义气逼人。",
    "spokenText": "佢讲义气，但唔会用义气逼人。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "真正义气不把关系当筹码"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "兄弟场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 9,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "“畀条路行”是体面，也是控制冲突。",
    "spokenText": "“畀条路行”是体面，也是控制冲突。",
    "choices": [
      "给退路能让局面可收拾",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "江湖谈判",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 10,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "有啲场面话，讲少一句反而更重。",
    "spokenText": "有啲场面话，讲少一句反而更重。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "留白可以增加话语重量",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "英雄片对白",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 11,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "佢唔急住赢，先令人觉得可能会赢。",
    "spokenText": "佢唔急住赢，先令人觉得可能会赢。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "节奏慢反而显示掌控感",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "赌局场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 12,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "气定神闲唔系冇情绪，系情绪有位置放。",
    "spokenText": "气定神闲唔系冇情绪，系情绪有位置放。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "从容是把情绪放在合适位置"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 09",
    "movieTitle": "人物气质复盘",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 13,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“呢件事我记住”可以是承诺，也可以是警告。",
    "spokenText": "“呢件事我记住”可以是承诺，也可以是警告。",
    "choices": [
      "要靠语气判断是感谢还是提醒",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "江湖对白",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 14,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢笑住话“唔紧要”，但手已经停低。",
    "spokenText": "佢笑住话“唔紧要”，但手已经停低。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "字面放过，动作未必放过",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "港片对峙",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 15,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“大家都系朋友”有时是圆场，有时是划线。",
    "spokenText": "“大家都系朋友”有时是圆场，有时是划线。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "朋友话术可缓和也可设边界",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "饭局场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 16,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“你慢慢讲”如果眼神好定，通常是要对方露底。",
    "spokenText": "“你慢慢讲”如果眼神好定，通常是要对方露底。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "耐心可能是掌控节奏"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "谈判场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 17,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“我唔想难为你”可能是最后通牒前的礼貌。",
    "spokenText": "“我唔想难为你”可能是最后通牒前的礼貌。",
    "choices": [
      "客气话可能降低冲突表面温度",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "江湖谈判",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 18,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“算我欠你一次”听落轻，其实是关系债。",
    "spokenText": "“算我欠你一次”听落轻，其实是关系债。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "欠人情是长期承诺",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "兄弟情义",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 19,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "佢讲“你决定”，但坐姿完全冇退。",
    "spokenText": "佢讲“你决定”，但坐姿完全冇退。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "字面放权，气势仍在场",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "赌桌场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 20,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“俾个面”讲得轻，压力可能更大。",
    "spokenText": "“俾个面”讲得轻，压力可能更大。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "轻声请求也可能带强关系压力"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "江湖饭局",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 21,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“我信你”之后马上加条件，说明信任有限。",
    "spokenText": "“我信你”之后马上加条件，说明信任有限。",
    "choices": [
      "信任声明要看后续边界",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "合作场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 22,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“唔好令我失望”不是鼓励，是重量。",
    "spokenText": "“唔好令我失望”不是鼓励，是重量。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "期待被包装成压力",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "英雄片场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 23,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“冇必要闹大”可能是在给双方下台阶。",
    "spokenText": "“冇必要闹大”可能是在给双方下台阶。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "压低冲突是为了保留体面",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "街头对峙",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 24,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“今日到呢度”有时不是结束，是暂停。",
    "spokenText": "“今日到呢度”有时不是结束，是暂停。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "收场语可能保留后续动作"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "谈判收尾",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 25,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“你有你做，我有我交代”是边界，也是警告。",
    "spokenText": "“你有你做，我有我交代”是边界，也是警告。",
    "choices": [
      "各自责任被清楚划开",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "江湖/职场场",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 26,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“我只讲一次”未必凶，可能是自信。",
    "spokenText": "“我只讲一次”未必凶，可能是自信。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "少说一次显示确定性",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 09",
    "movieTitle": "港片气场",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 27,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "赌桌上所有人都催，只有佢慢慢整理筹码。",
    "spokenText": "赌桌上所有人都催，只有佢慢慢整理筹码。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "他在用节奏压住场面",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 09",
    "movieTitle": "赌片场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 28,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "饭局气氛紧，佢先替对方倒茶。",
    "spokenText": "饭局气氛紧，佢先替对方倒茶。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "动作在帮双方保全面子"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 09",
    "movieTitle": "江湖饭局",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 29,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "兄弟争执到最激，佢只讲一句“坐低”。",
    "spokenText": "兄弟争执到最激，佢只讲一句“坐低”。",
    "choices": [
      "短句在重建秩序",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 09",
    "movieTitle": "英雄片场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 30,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "码头风很大，没人说狠话，反而更紧。",
    "spokenText": "码头风很大，没人说狠话，反而更紧。",
    "choices": [
      "只是临时改去吃饭",
      "安静场面带出高压对峙",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 09",
    "movieTitle": "港片码头",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 31,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "对方挑衅不断，佢只问“讲完未”。",
    "spokenText": "对方挑衅不断，佢只问“讲完未”。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "不接挑衅是一种掌控",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 09",
    "movieTitle": "街头对峙",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 32,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "有人递烟，佢摆手，却留低听完。",
    "spokenText": "有人递烟，佢摆手，却留低听完。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "拒绝亲近但保留沟通"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 09",
    "movieTitle": "江湖场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 33,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "牌局结束后，赢家没有马上庆祝。",
    "spokenText": "牌局结束后，赢家没有马上庆祝。",
    "choices": [
      "克制比炫耀更显气场",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 09",
    "movieTitle": "赌片收场",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 34,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "旧友重逢，第一句不是问候，是讲交代。",
    "spokenText": "旧友重逢，第一句不是问候，是讲交代。",
    "choices": [
      "只是临时改去吃饭",
      "关系里还有未处理的责任",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 09",
    "movieTitle": "兄弟场景",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 35,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "把“慢慢嚟”转成会议控场。",
    "spokenText": "把“慢慢嚟”转成会议控场。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "我们先把信息讲完整，再决定下一步",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 09",
    "movieTitle": "从容沟通迁移",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 36,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "对方挑衅你，你想保持气场。",
    "spokenText": "对方挑衅你，你想保持气场。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "这个问题我会回应，但先回到事实"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 09",
    "movieTitle": "从容沟通迁移",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 37,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "你想给对方台阶。",
    "spokenText": "你想给对方台阶。",
    "choices": [
      "我们可以先停在这里，保留调整空间",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 09",
    "movieTitle": "从容沟通迁移",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 38,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "你想表达底线但不撕破脸。",
    "spokenText": "你想表达底线但不撕破脸。",
    "choices": [
      "直接用情绪压过讨论",
      "这部分我可以理解，但底线不能再退",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 09",
    "movieTitle": "从容沟通迁移",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 39,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "同事情绪很冲，你怎么稳住？",
    "spokenText": "同事情绪很冲，你怎么稳住？",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "我听到你的不满，我们逐项处理",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 09",
    "movieTitle": "从容沟通迁移",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 40,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "客户压价，你想保留分寸。",
    "spokenText": "客户压价，你想保留分寸。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "价格可以谈，但交付标准也要一起谈"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 09",
    "movieTitle": "从容沟通迁移",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 41,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "你想承诺但不乱开支票。",
    "spokenText": "你想承诺但不乱开支票。",
    "choices": [
      "我可以负责推进，但结果要看这些条件",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 09",
    "movieTitle": "从容沟通迁移",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 42,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "你想结束无效争论。",
    "spokenText": "你想结束无效争论。",
    "choices": [
      "直接用情绪压过讨论",
      "今天先到这里，下一步按事实再谈",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 09",
    "movieTitle": "从容沟通迁移",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 43,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“慢慢嚟”低声讲，是稳场；急声讲，可能是压火。",
    "spokenText": "“慢慢嚟”低声讲，是稳场；急声讲，可能是压火。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "听声线判断从容还是克制怒气",
      "每个字都读成长音就得"
    ],
    "answerIndex": 2,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 09",
    "movieTitle": "粤语气场听感",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 44,
    "prompt": "听这句时最该留意什么？",
    "cantoneseText": "“俾个面”轻轻讲，关系压力可能更强。",
    "spokenText": "“俾个面”轻轻讲，关系压力可能更强。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得",
      "听轻重判断请求背后的重量"
    ],
    "answerIndex": 3,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 09",
    "movieTitle": "粤语江湖听感",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 45,
    "prompt": "这句的读音/停顿重点是？",
    "cantoneseText": "“我记住”短暂停顿后说，通常带后续意味。",
    "spokenText": "“我记住”短暂停顿后说，通常带后续意味。",
    "choices": [
      "听停顿判断承诺或警告",
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 0,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 09",
    "movieTitle": "粤语对峙听感",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 46,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“到呢度”语尾下沉，常有收场决定感。",
    "spokenText": "“到呢度”语尾下沉，常有收场决定感。",
    "choices": [
      "只看字面，不管停顿",
      "听尾音判断是否真正结束",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 1,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 09",
    "movieTitle": "粤语收场听感",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 47,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：发哥式气场训练什么？",
    "spokenText": "复盘：发哥式气场训练什么？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "在压力里保持分寸、台阶和底线",
      "遇到语气就直接反击"
    ],
    "answerIndex": 2,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 09",
    "movieTitle": "Day09复盘",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 48,
    "prompt": "这题想训练的底层能力是？",
    "cantoneseText": "复盘：为什么少说有时更有力？",
    "spokenText": "复盘：为什么少说有时更有力？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击",
      "留白能让关系和后果自己显出来"
    ],
    "answerIndex": 3,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 09",
    "movieTitle": "Day09复盘",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 49,
    "prompt": "本章方法论更接近哪一项？",
    "cantoneseText": "复盘：职场迁移的关键是？",
    "spokenText": "复盘：职场迁移的关键是？",
    "choices": [
      "不被挑衅带节奏，同时说清边界",
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 0,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 09",
    "movieTitle": "Day09复盘",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  },
  {
    "id": 50,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：今天的粤语感知重点是？",
    "spokenText": "复盘：今天的粤语感知重点是？",
    "choices": [
      "只背片名和演员表",
      "听轻声、停顿和收场语里的重量",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 1,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：发哥式从容气场 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 09",
    "movieTitle": "Day09复盘",
    "movieNote": "受周润发经典港片人物气质和江湖/赌片/英雄片场景启发，题句为原创。"
  }
];

const movieTrainingDay10ChapterTitle = "15天港片粤语训练 Day 10：蔡澜式人生智慧";

const movieTrainingDay10Questions = [
  {
    "id": 1,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "一碗云吞面好唔好，唔只睇汤，仲睇你当时饿唔饿。",
    "spokenText": "一碗云吞面好唔好，唔只睇汤，仲睇你当时饿唔饿。",
    "choices": [
      "体验和心境会影响判断",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "蔡澜式生活观察",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 2,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "识食唔系讲贵，系知自己想食咩。",
    "spokenText": "识食唔系讲贵，系知自己想食咩。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "品味来自清楚自己的偏好",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "饮食人生场",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 3,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "人情世故最难，难在你知几时认真几时放过。",
    "spokenText": "人情世故最难，难在你知几时认真几时放过。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "成熟是懂得分寸和取舍",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "生活智慧",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 4,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "佢讲“随缘”，唔系冇要求，系唔同命硬碰硬。",
    "spokenText": "佢讲“随缘”，唔系冇要求，系唔同命硬碰硬。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "豁达不是无所谓，而是不硬拗"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "人生判断",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 5,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "好味嘅嘢要趁热，关系有时都系。",
    "spokenText": "好味嘅嘢要趁热，关系有时都系。",
    "choices": [
      "时机对食物和关系都重要",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "茶餐厅人生",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 6,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "旅行最怕行程好满，个人却冇空。",
    "spokenText": "旅行最怕行程好满，个人却冇空。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "效率不能替代体验空间",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "旅行观察",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 7,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "食得开心，未必系菜贵，可能系同桌啱。",
    "spokenText": "食得开心，未必系菜贵，可能系同桌啱。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "人与氛围会改变体验",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "饭局场景",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 8,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "讲人生大道理之前，先食饱。",
    "spokenText": "讲人生大道理之前，先食饱。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "生活判断需要现实底气"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "蔡澜式幽默",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 9,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "一个人懂得点菜，通常也懂得点到即止。",
    "spokenText": "一个人懂得点菜，通常也懂得点到即止。",
    "choices": [
      "点菜能看出分寸和照顾",
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 0,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "饭局智慧",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 10,
    "prompt": "这句最贴近什么意思？",
    "cantoneseText": "所谓潇洒，系知道有啲嘢留唔住就唔硬留。",
    "spokenText": "所谓潇洒，系知道有啲嘢留唔住就唔硬留。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "放手是判断后的选择",
      "表示事情已经完全解决",
      "重点只是在介绍地点"
    ],
    "answerIndex": 1,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "人生场景",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 11,
    "prompt": "说话人主要在表达什么？",
    "cantoneseText": "你话简单生活，唔代表要将生活过得粗糙。",
    "spokenText": "你话简单生活，唔代表要将生活过得粗糙。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "简单不等于将就",
      "重点只是在介绍地点"
    ],
    "answerIndex": 2,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "生活审美",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 12,
    "prompt": "这句话的核心意思是？",
    "cantoneseText": "好日子唔一定大件事，有时只系一杯茶刚刚好。",
    "spokenText": "好日子唔一定大件事，有时只系一杯茶刚刚好。",
    "choices": [
      "只是普通寒暄，没有关系动作",
      "表示事情已经完全解决",
      "重点只是在介绍地点",
      "幸福感常来自具体小体验"
    ],
    "answerIndex": 3,
    "explanation": "句意理解先抓关系动作，再看字面意思；这类题训练你听懂一句话真正要处理什么。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 10",
    "movieTitle": "生活观察",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 13,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“食咗先讲”有时不是逃避，是让人先落地。",
    "spokenText": "“食咗先讲”有时不是逃避，是让人先落地。",
    "choices": [
      "先照顾基本状态再讨论大事",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "饭局智慧",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 14,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢话“唔使咁辛苦”，可能是劝你别把执着当成上进。",
    "spokenText": "佢话“唔使咁辛苦”，可能是劝你别把执着当成上进。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "温和提醒过度用力",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "人生判断",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 15,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“算啦”在这里不是认输，是不把烂事带回家。",
    "spokenText": "“算啦”在这里不是认输，是不把烂事带回家。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "放过事情也是保护自己",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "生活智慧",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 16,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“好嘢唔怕迟”如果没有行动，也会变懒。",
    "spokenText": "“好嘢唔怕迟”如果没有行动，也会变懒。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "豁达不能变成拖延借口"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "人生提醒",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 17,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "佢讲“开心最紧要”，重点不是逃避责任。",
    "spokenText": "佢讲“开心最紧要”，重点不是逃避责任。",
    "choices": [
      "快乐也要带着承担和分寸",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "生活态度",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 18,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“贵有贵食，平有平食”是在说选择自由。",
    "spokenText": "“贵有贵食，平有平食”是在说选择自由。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "不被价格单一标准绑架",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "饮食智慧",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 19,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“唔啱就换”听落潇洒，其实要先识得判断。",
    "spokenText": "“唔啱就换”听落潇洒，其实要先识得判断。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "换选择前要知道哪里不合适",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "人生判断",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 20,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“做人要识叹”不是懒，是懂得感受生活。",
    "spokenText": "“做人要识叹”不是懒，是懂得感受生活。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "享受也是一种能力"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "蔡澜式生活",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 21,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“朋友唔系用嚟证明自己”是在拆面子。",
    "spokenText": "“朋友唔系用嚟证明自己”是在拆面子。",
    "choices": [
      "关系不该变成虚荣工具",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "人情世故",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 22,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“有啲苦，唔使日日翻热”是劝人别反复咀嚼伤口。",
    "spokenText": "“有啲苦，唔使日日翻热”是劝人别反复咀嚼伤口。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "不反复消费痛苦",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "人生智慧",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 23,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“食得落饭，先有力讲理想”是现实提醒。",
    "spokenText": "“食得落饭，先有力讲理想”是现实提醒。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "身体和现实是理想基础",
      "表示马上接受所有安排"
    ],
    "answerIndex": 2,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "生活判断",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 24,
    "prompt": "这句真正的关系动作是？",
    "cantoneseText": "“唔好将所有事都讲成命运”是在提醒主动性。",
    "spokenText": "“唔好将所有事都讲成命运”是在提醒主动性。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排",
      "别用命运掩盖选择责任"
    ],
    "answerIndex": 3,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "人生判断",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 25,
    "prompt": "这句话最关键的潜台词是？",
    "cantoneseText": "“好玩就去试，唔好玩就返嚟”是低成本探索。",
    "spokenText": "“好玩就去试，唔好玩就返嚟”是低成本探索。",
    "choices": [
      "允许试错而不把路封死",
      "完全没有情绪，只是复述事实",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 0,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "旅行/生活场",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 26,
    "prompt": "说话人的语气更接近哪一种？",
    "cantoneseText": "“留一口畀别人”既是饭桌礼貌，也是人生分寸。",
    "spokenText": "“留一口畀别人”既是饭桌礼貌，也是人生分寸。",
    "choices": [
      "完全没有情绪，只是复述事实",
      "分寸体现在小动作里",
      "主要是在夸奖对方做得好",
      "表示马上接受所有安排"
    ],
    "answerIndex": 1,
    "explanation": "语气题重点不是翻译每个字，而是判断说话人是在留面子、设边界、试探还是施压。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 10",
    "movieTitle": "饭局智慧",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 27,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "深夜茶餐厅，朋友讲失恋，老板只多放一碗汤。",
    "spokenText": "深夜茶餐厅，朋友讲失恋，老板只多放一碗汤。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "生活里的安慰常很具体",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 10",
    "movieTitle": "茶餐厅夜场",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 28,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "饭局上有人一直讲名牌餐厅，另一个人只问“好唔好食”。",
    "spokenText": "饭局上有人一直讲名牌餐厅，另一个人只问“好唔好食”。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "重点从身份回到体验本身"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 10",
    "movieTitle": "饮食场景",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 29,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "旅行途中迷路，大家反而遇到最好吃的小店。",
    "spokenText": "旅行途中迷路，大家反而遇到最好吃的小店。",
    "choices": [
      "松弛会带来意外收获",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 10",
    "movieTitle": "旅行场景",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 30,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "有人把人生讲得很苦，旁边人递来热茶。",
    "spokenText": "有人把人生讲得很苦，旁边人递来热茶。",
    "choices": [
      "只是临时改去吃饭",
      "照顾当下比说教更有效",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 10",
    "movieTitle": "人生饭局",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 31,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "朋友聚餐最后抢着埋单，最安静的人先把小费放好。",
    "spokenText": "朋友聚餐最后抢着埋单，最安静的人先把小费放好。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "体面常在细节里完成",
      "重点是介绍电影年代"
    ],
    "answerIndex": 2,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 10",
    "movieTitle": "饭局人情",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 32,
    "prompt": "下一步最合理的判断是？",
    "cantoneseText": "街市阿姐一句“今日呢条鱼靓”，比菜单更有信任感。",
    "spokenText": "街市阿姐一句“今日呢条鱼靓”，比菜单更有信任感。",
    "choices": [
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代",
      "生活经验来自具体人和场"
    ],
    "answerIndex": 3,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 10",
    "movieTitle": "街市场景",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 33,
    "prompt": "这个场景最可能发生什么？",
    "cantoneseText": "雨天留在小店避雨，大家突然不赶行程。",
    "spokenText": "雨天留在小店避雨，大家突然不赶行程。",
    "choices": [
      "慢下来后才有体验",
      "只是临时改去吃饭",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 0,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 10",
    "movieTitle": "香港街头",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 34,
    "prompt": "这更像哪类港剧场面？",
    "cantoneseText": "有人劝你放下，自己却把杯边擦了三次。",
    "spokenText": "有人劝你放下，自己却把杯边擦了三次。",
    "choices": [
      "只是临时改去吃饭",
      "说放下的人也可能在练习",
      "双方已经没有任何冲突",
      "重点是介绍电影年代"
    ],
    "answerIndex": 1,
    "explanation": "场景推断要把人物关系、地点压力和说话节奏连起来，像看港剧一样听对白后的动作。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "sceneInference",
    "dayTag": "Day 10",
    "movieTitle": "生活观察",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 35,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "把“唔使咁辛苦”转成职场提醒。",
    "spokenText": "把“唔使咁辛苦”转成职场提醒。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "目标重要，但也要保留可持续节奏",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 10",
    "movieTitle": "生活/职场迁移",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 36,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "你想劝朋友别硬撑。",
    "spokenText": "你想劝朋友别硬撑。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "先休息一下，问题不会因为你累坏而变小"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 10",
    "movieTitle": "生活/职场迁移",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 37,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "把“识食”迁移成学习策略。",
    "spokenText": "把“识食”迁移成学习策略。",
    "choices": [
      "先知道自己缺哪种能力，再选择练法",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 10",
    "movieTitle": "生活/职场迁移",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 38,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "有人用贵价证明品味，你怎么回应？",
    "spokenText": "有人用贵价证明品味，你怎么回应？",
    "choices": [
      "直接用情绪压过讨论",
      "贵可以是选择，但体验才是判断标准",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 10",
    "movieTitle": "生活/职场迁移",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 39,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "你想从焦虑转为行动。",
    "spokenText": "你想从焦虑转为行动。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先处理今天能做的一小步",
      "先答应，之后再算"
    ],
    "answerIndex": 2,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 10",
    "movieTitle": "生活/职场迁移",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 40,
    "prompt": "这句可以迁移成哪种表达？",
    "cantoneseText": "把“点到即止”用在会议里。",
    "spokenText": "把“点到即止”用在会议里。",
    "choices": [
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算",
      "这个问题先讲到可执行结论，不再扩散"
    ],
    "answerIndex": 3,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 10",
    "movieTitle": "生活/职场迁移",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 41,
    "prompt": "转成职场/生活表达，哪句更稳？",
    "cantoneseText": "朋友反复纠结旧事，你怎么温和提醒？",
    "spokenText": "朋友反复纠结旧事，你怎么温和提醒？",
    "choices": [
      "我们可以记住教训，但不用每天重播",
      "直接用情绪压过讨论",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 0,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 10",
    "movieTitle": "生活/职场迁移",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 42,
    "prompt": "如果放到现实沟通，最好怎么接？",
    "cantoneseText": "你想建立长期学习节奏。",
    "spokenText": "你想建立长期学习节奏。",
    "choices": [
      "直接用情绪压过讨论",
      "每天十五分钟，持续比一次爆发更可靠",
      "把责任全部推给别人",
      "先答应，之后再算"
    ],
    "answerIndex": 1,
    "explanation": "迁移题把港片语气转成职场或生活里可执行、可收场的表达。",
    "theme": "职场/生活迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场/生活迁移",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 10",
    "movieTitle": "生活/职场迁移",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。",
    "workplaceTip": "把港剧式语气转成现实可执行表达：事实、边界、下一步。"
  },
  {
    "id": 43,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“算啦”轻轻讲，是放下；重重讲，可能是不甘。",
    "spokenText": "“算啦”轻轻讲，是放下；重重讲，可能是不甘。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "听轻重判断放下还是压住情绪",
      "每个字都读成长音就得"
    ],
    "answerIndex": 2,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 10",
    "movieTitle": "粤语生活听感",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 44,
    "prompt": "听这句时最该留意什么？",
    "cantoneseText": "“食咗先讲”语气温和时，是照顾；急促时，是打断。",
    "spokenText": "“食咗先讲”语气温和时，是照顾；急促时，是打断。",
    "choices": [
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得",
      "听语速判断关心或回避"
    ],
    "answerIndex": 3,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 10",
    "movieTitle": "粤语饭局听感",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 45,
    "prompt": "这句的读音/停顿重点是？",
    "cantoneseText": "“随缘”如果后面有行动，是豁达；没有行动，可能是拖延。",
    "spokenText": "“随缘”如果后面有行动，是豁达；没有行动，可能是拖延。",
    "choices": [
      "听后续动作判断态度真假",
      "只看字面，不管停顿",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 0,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 10",
    "movieTitle": "粤语生活听感",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 46,
    "prompt": "这题重点训练哪种听感？",
    "cantoneseText": "“啱唔啱食”比“贵唔贵”更贴近生活判断。",
    "spokenText": "“啱唔啱食”比“贵唔贵”更贴近生活判断。",
    "choices": [
      "只看字面，不管停顿",
      "听问题焦点判断价值标准",
      "普通话声调可以直接套用",
      "每个字都读成长音就得"
    ],
    "answerIndex": 1,
    "explanation": "听感题不做送分的入声常识，而是练相近读音、停顿和语气造成的理解差异。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyutping提示：留意重音、停顿、尾音同语速。",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 10",
    "movieTitle": "粤语饮食听感",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 47,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：蔡澜式章节最想训练什么？",
    "spokenText": "复盘：蔡澜式章节最想训练什么？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "用粤语学品味、分寸和松弛判断",
      "遇到语气就直接反击"
    ],
    "answerIndex": 2,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 10",
    "movieTitle": "Day10复盘",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 48,
    "prompt": "这题想训练的底层能力是？",
    "cantoneseText": "复盘：为什么饮食适合学粤语？",
    "spokenText": "复盘：为什么饮食适合学粤语？",
    "choices": [
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击",
      "它把词汇、情绪、人情和生活经验连起来"
    ],
    "answerIndex": 3,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 10",
    "movieTitle": "Day10复盘",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 49,
    "prompt": "本章方法论更接近哪一项？",
    "cantoneseText": "复盘：今天最适合带进生活的一点是？",
    "spokenText": "复盘：今天最适合带进生活的一点是？",
    "choices": [
      "少一点硬撑，多一点具体体验",
      "只背片名和演员表",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 0,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 10",
    "movieTitle": "Day10复盘",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  },
  {
    "id": 50,
    "prompt": "作为复盘题，最该记住什么？",
    "cantoneseText": "复盘：15分钟训练如何长期坚持？",
    "spokenText": "复盘：15分钟训练如何长期坚持？",
    "choices": [
      "只背片名和演员表",
      "兴趣作入口，模块作骨架，错题作复习",
      "每题都找最长选项",
      "遇到语气就直接反击"
    ],
    "answerIndex": 1,
    "explanation": "复盘题把剧集兴趣、粤语语感和成人沟通方法收束成可持续训练。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "jyutping提示：蔡澜式人生智慧 · 听关键词同收尾语气。",
    "trainingModule": "reviewMix",
    "dayTag": "Day 10",
    "movieTitle": "Day10复盘",
    "movieNote": "受蔡澜式饮食、旅行、生活态度和人生判断风格启发，题句为原创。"
  }
];

const movieTrainingDay04ChapterTitle = '15天港片粤语训练 Day 04';

const movieTrainingDay04Questions = [
  {
    "id": 1,
    "prompt": "这句指出什么？",
    "cantoneseText": "你以为你系让步，其实你系等人多谢你。",
    "spokenText": "你以为你系让步，其实你系等人多谢你。",
    "choices": [
      "所谓让步里藏着期待回报",
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    "answerIndex": 0,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 2,
    "prompt": "为什么可怕？",
    "cantoneseText": "男亲女爱式办公室，最怕个个都话冇所谓。",
    "spokenText": "男亲女爱式办公室，最怕个个都话冇所谓。",
    "choices": [
      "只是天气问题",
      "真实偏好被藏起来，决策会拖慢",
      "大家已经同意",
      "只是在点歌"
    ],
    "answerIndex": 1,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 3,
    "prompt": "这句提醒什么？",
    "cantoneseText": "你话“我都系为你好”，最紧要睇有冇控制。",
    "spokenText": "你话“我都系为你好”，最紧要睇有冇控制。",
    "choices": [
      "只是天气问题",
      "大家已经同意",
      "善意表达也可能带控制",
      "只是在点歌"
    ],
    "answerIndex": 2,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 4,
    "prompt": "这句对比什么？",
    "cantoneseText": "一首快歌可以热场，一句真话可以冷场。",
    "spokenText": "一首快歌可以热场，一句真话可以冷场。",
    "choices": [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌",
      "气氛和真实表达的冲突"
    ],
    "answerIndex": 3,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 5,
    "prompt": "这句在拆解什么？",
    "cantoneseText": "你讲“原则”，我想知系原则定系唔想做。",
    "spokenText": "你讲“原则”，我想知系原则定系唔想做。",
    "choices": [
      "原则和逃避之间的界线",
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    "answerIndex": 0,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 6,
    "prompt": "这说明什么？",
    "cantoneseText": "佢话“你决定啦”，但你真决定佢又黑面。",
    "spokenText": "佢话“你决定啦”，但你真决定佢又黑面。",
    "choices": [
      "只是天气问题",
      "授权是假，期待是真",
      "大家已经同意",
      "只是在点歌"
    ],
    "answerIndex": 1,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 7,
    "prompt": "“听落”是什么意思？",
    "cantoneseText": "呢句歌听落轻松，其实讲紧一种认命。",
    "spokenText": "呢句歌听落轻松，其实讲紧一种认命。",
    "choices": [
      "只是天气问题",
      "大家已经同意",
      "听起来、听上去",
      "只是在点歌"
    ],
    "answerIndex": 2,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 8,
    "prompt": "核心意思是？",
    "cantoneseText": "你唔系迟回复，你系迟到令人开始编故事。",
    "spokenText": "你唔系迟回复，你系迟到令人开始编故事。",
    "choices": [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌",
      "迟回复会制造不确定和误解"
    ],
    "answerIndex": 3,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 9,
    "prompt": "这句解释什么？",
    "cantoneseText": "“算啦”有时唔系放过你，系暂时唔想讲。",
    "spokenText": "“算啦”有时唔系放过你，系暂时唔想讲。",
    "choices": [
      "表面收场不等于真正放下",
      "只是天气问题",
      "大家已经同意",
      "只是在点歌"
    ],
    "answerIndex": 0,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 10,
    "prompt": "这句提醒什么？",
    "cantoneseText": "你讲“好小事”，但对方听到系“你唔重要”。",
    "spokenText": "你讲“好小事”，但对方听到系“你唔重要”。",
    "choices": [
      "只是天气问题",
      "轻描淡写可能否定对方感受",
      "大家已经同意",
      "只是在点歌"
    ],
    "answerIndex": 1,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 11,
    "prompt": "这句训练什么？",
    "cantoneseText": "成年人最惨唔系冇选择，系每个选择都要解释。",
    "spokenText": "成年人最惨唔系冇选择，系每个选择都要解释。",
    "choices": [
      "只是天气问题",
      "大家已经同意",
      "识别选择背后的交代成本",
      "只是在点歌"
    ],
    "answerIndex": 2,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 12,
    "prompt": "这句什么意思？",
    "cantoneseText": "你讲到好理性，但个表情好私人。",
    "spokenText": "你讲到好理性，但个表情好私人。",
    "choices": [
      "只是天气问题",
      "大家已经同意",
      "只是在点歌",
      "理性话语里夹着私人情绪"
    ],
    "answerIndex": 3,
    "explanation": "Day 04 强调关系边界和职场交代成本。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "naam4 can1 neoi5 oi3 jyu5 dung6 duk6 siu3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/栋笃笑风格启发",
    "movieNote": "受《男亲女爱》/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 13,
    "prompt": "潜台词是什么？",
    "cantoneseText": "佢讲“你慢慢谂”，慢慢两个字重到成间房都沉。",
    "spokenText": "佢讲“你慢慢谂”，慢慢两个字重到成间房都沉。",
    "choices": [
      "对方其实已经不耐烦",
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    "answerIndex": 0,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 14,
    "prompt": "这句批评什么？",
    "cantoneseText": "你话尊重我选择，但每个选择你都有旁白。",
    "spokenText": "你话尊重我选择，但每个选择你都有旁白。",
    "choices": [
      "完全没有情绪",
      "表面尊重但不断干预",
      "只是普通礼貌",
      "已经正式解决"
    ],
    "answerIndex": 1,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 15,
    "prompt": "说话人识别到什么？",
    "cantoneseText": "你唔系问我意见，你系等我讲你想听嗰句。",
    "spokenText": "你唔系问我意见，你系等我讲你想听嗰句。",
    "choices": [
      "完全没有情绪",
      "只是普通礼貌",
      "对方只想要确认，不想要意见",
      "已经正式解决"
    ],
    "answerIndex": 2,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 16,
    "prompt": "为什么？",
    "cantoneseText": "佢笑住话“冇所谓”，你反而要惊。",
    "spokenText": "佢笑住话“冇所谓”，你反而要惊。",
    "choices": [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决",
      "笑可能是在压住不满"
    ],
    "answerIndex": 3,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 17,
    "prompt": "这句指出什么？",
    "cantoneseText": "你话“照旧”，但旧嗰套就系出事原因。",
    "spokenText": "你话“照旧”，但旧嗰套就系出事原因。",
    "choices": [
      "沿用旧方法可能延续旧问题",
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    "answerIndex": 0,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 18,
    "prompt": "这句批评什么？",
    "cantoneseText": "你讲“我明你感受”，但下一句就否定晒。",
    "spokenText": "你讲“我明你感受”，但下一句就否定晒。",
    "choices": [
      "完全没有情绪",
      "共情只是开场白，不是真理解",
      "只是普通礼貌",
      "已经正式解决"
    ],
    "answerIndex": 1,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 19,
    "prompt": "说话人捕捉到什么？",
    "cantoneseText": "你以为你收得好埋，其实个停顿出卖咗你。",
    "spokenText": "你以为你收得好埋，其实个停顿出卖咗你。",
    "choices": [
      "完全没有情绪",
      "只是普通礼貌",
      "停顿透露真实情绪",
      "已经正式解决"
    ],
    "answerIndex": 2,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 20,
    "prompt": "潜台词是什么？",
    "cantoneseText": "佢话“我冇嬲”，但每个字都似逐粒掟出嚟。",
    "spokenText": "佢话“我冇嬲”，但每个字都似逐粒掟出嚟。",
    "choices": [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决",
      "他说不生气但语气很生气"
    ],
    "answerIndex": 3,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 21,
    "prompt": "这句指出什么？",
    "cantoneseText": "你话“大家自己执生”，即系其实冇人负责。",
    "spokenText": "你话“大家自己执生”，即系其实冇人负责。",
    "choices": [
      "自由处理可能变成责任真空",
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    "answerIndex": 0,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 22,
    "prompt": "这句观察什么？",
    "cantoneseText": "你唔系唔识拒绝，你系想拒绝到人哋仲觉得你善良。",
    "spokenText": "你唔系唔识拒绝，你系想拒绝到人哋仲觉得你善良。",
    "choices": [
      "完全没有情绪",
      "想保形象所以拒绝不清",
      "只是普通礼貌",
      "已经正式解决"
    ],
    "answerIndex": 1,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 23,
    "prompt": "这句听出什么？",
    "cantoneseText": "你讲“唔介意”，但之后逐项记低。",
    "spokenText": "你讲“唔介意”，但之后逐项记低。",
    "choices": [
      "完全没有情绪",
      "只是普通礼貌",
      "不介意只是暂时口头收住",
      "已经正式解决"
    ],
    "answerIndex": 2,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 24,
    "prompt": "这句指出什么？",
    "cantoneseText": "你话“我讲事实”，但事实排位排到好有立场。",
    "spokenText": "你话“我讲事实”，但事实排位排到好有立场。",
    "choices": [
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决",
      "事实排序也会表达立场"
    ],
    "answerIndex": 3,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 25,
    "prompt": "这句的反差是什么？",
    "cantoneseText": "你叫人冷静，语气却好似倒汽油。",
    "spokenText": "你叫人冷静，语气却好似倒汽油。",
    "choices": [
      "话语降温但语气升温",
      "完全没有情绪",
      "只是普通礼貌",
      "已经正式解决"
    ],
    "answerIndex": 0,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 26,
    "prompt": "这句区分什么？",
    "cantoneseText": "你话“无心”，但结果系有伤害。",
    "spokenText": "你话“无心”，但结果系有伤害。",
    "choices": [
      "完全没有情绪",
      "动机和影响不能混为一谈",
      "只是普通礼貌",
      "已经正式解决"
    ],
    "answerIndex": 1,
    "explanation": "语气潜台词训练重点是听字面背后的关系动作。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "jyu5 hei3 cim4 toi4 ci4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 04",
    "movieTitle": "黄子华式人情观察",
    "movieNote": "受黄子华式人情观察一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 27,
    "prompt": "更像哪种场景？",
    "cantoneseText": "律所办公室，Miss Mo 式人物讲“你有point，但唔好当自己有power。”",
    "spokenText": "律所办公室，Miss Mo 式人物讲“你有point，但唔好当自己有power。”",
    "choices": [
      "准备点咖啡",
      "只是看歌词",
      "提醒专业意见不等于决策权",
      "完全没有信息"
    ],
    "answerIndex": 2,
    "explanation": "场景推断训练你把人物、地点和语气串起来。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 waan4 jyun4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/港乐/职场场景",
    "movieNote": "受《男亲女爱》/港乐/职场场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 28,
    "prompt": "笑点来自什么？",
    "cantoneseText": "栋笃笑台上讲“拍拖最难唔系爱，系同步calendar。”",
    "spokenText": "栋笃笑台上讲“拍拖最难唔系爱，系同步calendar。”",
    "choices": [
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息",
      "把感情问题讲成职场排期"
    ],
    "answerIndex": 3,
    "explanation": "场景推断训练你把人物、地点和语气串起来。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 waan4 jyun4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/港乐/职场场景",
    "movieNote": "受《男亲女爱》/港乐/职场场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 29,
    "prompt": "这说明什么？",
    "cantoneseText": "K房点老歌后，全场望向同一个人。",
    "spokenText": "K房点老歌后，全场望向同一个人。",
    "choices": [
      "这首歌和某段共同往事有关",
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息"
    ],
    "answerIndex": 0,
    "explanation": "场景推断训练你把人物、地点和语气串起来。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 waan4 jyun4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/港乐/职场场景",
    "movieNote": "受《男亲女爱》/港乐/职场场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 30,
    "prompt": "最可能发生什么？",
    "cantoneseText": "茶餐厅卡位，两个人讲公事讲到突然细声。",
    "spokenText": "茶餐厅卡位，两个人讲公事讲到突然细声。",
    "choices": [
      "准备点咖啡",
      "话题进入敏感或私人层面",
      "只是看歌词",
      "完全没有信息"
    ],
    "answerIndex": 1,
    "explanation": "场景推断训练你把人物、地点和语气串起来。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 waan4 jyun4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/港乐/职场场景",
    "movieNote": "受《男亲女爱》/港乐/职场场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 31,
    "prompt": "这更像什么？",
    "cantoneseText": "上司讲“你哋倾掂佢”，然后立刻离场。",
    "spokenText": "上司讲“你哋倾掂佢”，然后立刻离场。",
    "choices": [
      "准备点咖啡",
      "只是看歌词",
      "把冲突下放给团队自行消化",
      "完全没有信息"
    ],
    "answerIndex": 2,
    "explanation": "场景推断训练你把人物、地点和语气串起来。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 waan4 jyun4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/港乐/职场场景",
    "movieNote": "受《男亲女爱》/港乐/职场场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 32,
    "prompt": "这是什么关系信号？",
    "cantoneseText": "同事互怼，最后一句反而帮对方收场。",
    "spokenText": "同事互怼，最后一句反而帮对方收场。",
    "choices": [
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息",
      "嘴硬但保留默契"
    ],
    "answerIndex": 3,
    "explanation": "场景推断训练你把人物、地点和语气串起来。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 waan4 jyun4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/港乐/职场场景",
    "movieNote": "受《男亲女爱》/港乐/职场场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 33,
    "prompt": "这更像哪种训练？",
    "cantoneseText": "下班路上听到一句港乐式矛盾情绪。",
    "spokenText": "下班路上听到一句港乐式矛盾情绪。",
    "choices": [
      "用港乐识别矛盾情绪",
      "准备点咖啡",
      "只是看歌词",
      "完全没有信息"
    ],
    "answerIndex": 0,
    "explanation": "场景推断训练你把人物、地点和语气串起来。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 waan4 jyun4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/港乐/职场场景",
    "movieNote": "受《男亲女爱》/港乐/职场场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 34,
    "prompt": "实际是什么？",
    "cantoneseText": "客户说“唔急”，但补一句“今日内得唔得”。",
    "spokenText": "客户说“唔急”，但补一句“今日内得唔得”。",
    "choices": [
      "准备点咖啡",
      "不急只是客气，今天内才是真要求",
      "只是看歌词",
      "完全没有信息"
    ],
    "answerIndex": 1,
    "explanation": "场景推断训练你把人物、地点和语气串起来。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 waan4 jyun4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 04",
    "movieTitle": "《男亲女爱》/港乐/职场场景",
    "movieNote": "受《男亲女爱》/港乐/职场场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 35,
    "prompt": "较稳表达是？",
    "cantoneseText": "把“你唔好烦我”转成职场边界。",
    "spokenText": "把“你唔好烦我”转成职场边界。",
    "choices": [
      "你自己估啦",
      "我完全不理",
      "我需要先处理手上优先事项，稍后回复",
      "大家散会算"
    ],
    "answerIndex": 2,
    "explanation": "职场迁移要求把嘴仗翻译成可执行边界。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 04",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把情绪翻成范围、责任或下一步。"
  },
  {
    "id": 36,
    "prompt": "较专业的是？",
    "cantoneseText": "把“我顶唔顺”转成会议表达。",
    "spokenText": "把“我顶唔顺”转成会议表达。",
    "choices": [
      "你自己估啦",
      "我完全不理",
      "大家散会算",
      "当前负荷已经超过可承接范围"
    ],
    "answerIndex": 3,
    "explanation": "职场迁移要求把嘴仗翻译成可执行边界。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 04",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把情绪翻成范围、责任或下一步。"
  },
  {
    "id": 37,
    "prompt": "最好怎么接？",
    "cantoneseText": "对方一直讲愿景，你想拉回执行。",
    "spokenText": "对方一直讲愿景，你想拉回执行。",
    "choices": [
      "愿景我理解，想确认第一步怎么落地",
      "你自己估啦",
      "我完全不理",
      "大家散会算"
    ],
    "answerIndex": 0,
    "explanation": "职场迁移要求把嘴仗翻译成可执行边界。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 04",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把情绪翻成范围、责任或下一步。"
  },
  {
    "id": 38,
    "prompt": "较稳说法是？",
    "cantoneseText": "你要给同事负反馈，又不想伤关系。",
    "spokenText": "你要给同事负反馈，又不想伤关系。",
    "choices": [
      "你自己估啦",
      "我想对事不对人讲一个风险",
      "我完全不理",
      "大家散会算"
    ],
    "answerIndex": 1,
    "explanation": "职场迁移要求把嘴仗翻译成可执行边界。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 04",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把情绪翻成范围、责任或下一步。"
  },
  {
    "id": 39,
    "prompt": "较稳追问是？",
    "cantoneseText": "客户一直讲“再研究”，你要推进。",
    "spokenText": "客户一直讲“再研究”，你要推进。",
    "choices": [
      "你自己估啦",
      "我完全不理",
      "想确认还差哪一个条件可以决定",
      "大家散会算"
    ],
    "answerIndex": 2,
    "explanation": "职场迁移要求把嘴仗翻译成可执行边界。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 04",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把情绪翻成范围、责任或下一步。"
  },
  {
    "id": 40,
    "prompt": "你该确认什么？",
    "cantoneseText": "老板说“简单做下”，但需求很多。",
    "spokenText": "老板说“简单做下”，但需求很多。",
    "choices": [
      "你自己估啦",
      "我完全不理",
      "大家散会算",
      "简单的定义和必须保留项"
    ],
    "answerIndex": 3,
    "explanation": "职场迁移要求把嘴仗翻译成可执行边界。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 04",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把情绪翻成范围、责任或下一步。"
  },
  {
    "id": 41,
    "prompt": "较稳句式是？",
    "cantoneseText": "你想表达不同意，但不想硬碰。",
    "spokenText": "你想表达不同意，但不想硬碰。",
    "choices": [
      "我有另一个担心位，想摆出来对齐",
      "你自己估啦",
      "我完全不理",
      "大家散会算"
    ],
    "answerIndex": 0,
    "explanation": "职场迁移要求把嘴仗翻译成可执行边界。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 04",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把情绪翻成范围、责任或下一步。"
  },
  {
    "id": 42,
    "prompt": "你该补什么？",
    "cantoneseText": "团队说“大家都辛苦”，但问题没人接。",
    "spokenText": "团队说“大家都辛苦”，但问题没人接。",
    "choices": [
      "你自己估啦",
      "明确负责人和下一步",
      "我完全不理",
      "大家散会算"
    ],
    "answerIndex": 1,
    "explanation": "职场迁移要求把嘴仗翻译成可执行边界。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 04",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把情绪翻成范围、责任或下一步。"
  },
  {
    "id": 43,
    "prompt": "最可靠的是？",
    "cantoneseText": "听辨：“嬲 nau1”和“扭 nau2”接近时，先靠什么？",
    "spokenText": "听辨：“嬲 nau1”和“扭 nau2”接近时，先靠什么？",
    "choices": [
      "只看字形",
      "只听音量",
      "声调和句中搭配",
      "全部当普通话"
    ],
    "answerIndex": 2,
    "explanation": "Day 04 听感题偏语气功能，不考送分入声规则。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyut6 jyu5 jyu5 hei3",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 04",
    "movieTitle": "粤语听感",
    "movieNote": "受粤语听感一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 44,
    "prompt": "还可能表示什么？",
    "cantoneseText": "听辨：“啱”在反馈里，不一定只是“对”。",
    "spokenText": "听辨：“啱”在反馈里，不一定只是“对”。",
    "choices": [
      "只看字形",
      "只听音量",
      "全部当普通话",
      "合适、贴合场景"
    ],
    "answerIndex": 3,
    "explanation": "Day 04 听感题偏语气功能，不考送分入声规则。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyut6 jyu5 jyu5 hei3",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 04",
    "movieTitle": "粤语听感",
    "movieNote": "受粤语听感一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 45,
    "prompt": "重点听什么？",
    "cantoneseText": "听辨：“喂”开头，语气不同差别很大。",
    "spokenText": "听辨：“喂”开头，语气不同差别很大。",
    "choices": [
      "叫人、提醒、责备的语气方向",
      "只看字形",
      "只听音量",
      "全部当普通话"
    ],
    "answerIndex": 0,
    "explanation": "Day 04 听感题偏语气功能，不考送分入声规则。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyut6 jyu5 jyu5 hei3",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 04",
    "movieTitle": "粤语听感",
    "movieNote": "受粤语听感一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 46,
    "prompt": "较常见语气是？",
    "cantoneseText": "听辨：“咩”在反问里，常常带什么？",
    "spokenText": "听辨：“咩”在反问里，常常带什么？",
    "choices": [
      "只看字形",
      "怀疑或不认同",
      "只听音量",
      "全部当普通话"
    ],
    "answerIndex": 1,
    "explanation": "Day 04 听感题偏语气功能，不考送分入声规则。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyut6 jyu5 jyu5 hei3",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 04",
    "movieTitle": "粤语听感",
    "movieNote": "受粤语听感一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 47,
    "prompt": "本章核心是？",
    "cantoneseText": "复盘：Day 04 最重要的不是学会寸人，而是？",
    "spokenText": "复盘：Day 04 最重要的不是学会寸人，而是？",
    "choices": [
      "只背冷门字音",
      "只记电影年份",
      "听出笑话背后的边界和需求",
      "每句都反击"
    ],
    "answerIndex": 2,
    "explanation": "复盘题把幽默、港乐和职场语感收束成方法。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "fuk6 pun4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 04",
    "movieTitle": "Day 04复盘",
    "movieNote": "受Day 04复盘一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 48,
    "prompt": "更准确的是？",
    "cantoneseText": "复盘：男亲女爱式办公室最适合训练什么？",
    "spokenText": "复盘：男亲女爱式办公室最适合训练什么？",
    "choices": [
      "只背冷门字音",
      "只记电影年份",
      "每句都反击",
      "公事私情混在一起时的语气判断"
    ],
    "answerIndex": 3,
    "explanation": "复盘题把幽默、港乐和职场语感收束成方法。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "fuk6 pun4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 04",
    "movieTitle": "Day 04复盘",
    "movieNote": "受Day 04复盘一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 49,
    "prompt": "最贴近本体系的是？",
    "cantoneseText": "复盘：港乐进入训练的作用是什么？",
    "spokenText": "复盘：港乐进入训练的作用是什么？",
    "choices": [
      "用熟悉情绪提高粤语感知黏性",
      "只背冷门字音",
      "只记电影年份",
      "每句都反击"
    ],
    "answerIndex": 0,
    "explanation": "复盘题把幽默、港乐和职场语感收束成方法。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "fuk6 pun4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 04",
    "movieTitle": "Day 04复盘",
    "movieNote": "受Day 04复盘一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 50,
    "prompt": "最实用答案是？",
    "cantoneseText": "复盘：职场人学粤语，最该优先听懂什么？",
    "spokenText": "复盘：职场人学粤语，最该优先听懂什么？",
    "choices": [
      "只背冷门字音",
      "承诺、边界、拒绝和潜台词",
      "只记电影年份",
      "每句都反击"
    ],
    "answerIndex": 1,
    "explanation": "复盘题把幽默、港乐和职场语感收束成方法。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "fuk6 pun4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 04",
    "movieTitle": "Day 04复盘",
    "movieNote": "受Day 04复盘一类港片/港乐/港剧场景启发，句子为原创。"
  }
];

const movieTrainingDay03ChapterTitle = '15天港片粤语训练 Day 03';

const movieTrainingDay03Questions = [
  {
    "id": 1,
    "prompt": "这句最核心的理解是？",
    "cantoneseText": "呢首歌唔系伤心，系提醒你唔好再扮冇事。",
    "spokenText": "呢首歌唔系伤心，系提醒你唔好再扮冇事。",
    "choices": [
      "歌里的情绪是在戳破伪装",
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    "answerIndex": 0,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 2,
    "prompt": "说话人真正指出什么？",
    "cantoneseText": "你话随便点歌，但每首都 skip，咁唔叫随便。",
    "spokenText": "你话随便点歌，但每首都 skip，咁唔叫随便。",
    "choices": [
      "只是讲天气",
      "表面随便其实有偏好",
      "重点是音量",
      "大家准备散场"
    ],
    "answerIndex": 1,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 3,
    "prompt": "这句话描写什么？",
    "cantoneseText": "呢句副歌一入嚟，全房突然静晒。",
    "spokenText": "呢句副歌一入嚟，全房突然静晒。",
    "choices": [
      "只是讲天气",
      "重点是音量",
      "大家被情绪击中而安静",
      "大家准备散场"
    ],
    "answerIndex": 2,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 4,
    "prompt": "这句提醒什么？",
    "cantoneseText": "佢讲“得闲饮茶”，你唔好即刻当约定。",
    "spokenText": "佢讲“得闲饮茶”，你唔好即刻当约定。",
    "choices": [
      "只是讲天气",
      "重点是音量",
      "大家准备散场",
      "客套不等于真实约定"
    ],
    "answerIndex": 3,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 5,
    "prompt": "这句更接近哪种判断？",
    "cantoneseText": "你唔系冇听清楚，系唔想听清楚。",
    "spokenText": "你唔系冇听清楚，系唔想听清楚。",
    "choices": [
      "对方在选择性回避",
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    "answerIndex": 0,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 6,
    "prompt": "这句在拆穿什么？",
    "cantoneseText": "你话“我冇所谓”，但拣位拣咗十分钟。",
    "spokenText": "你话“我冇所谓”，但拣位拣咗十分钟。",
    "choices": [
      "只是讲天气",
      "口头不在意和行为不一致",
      "重点是音量",
      "大家准备散场"
    ],
    "answerIndex": 1,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 7,
    "prompt": "这句话暗示什么？",
    "cantoneseText": "呢句“迟啲讲”出现三次，就唔系时间问题。",
    "spokenText": "呢句“迟啲讲”出现三次，就唔系时间问题。",
    "choices": [
      "只是讲天气",
      "重点是音量",
      "反复拖延背后是回避",
      "大家准备散场"
    ],
    "answerIndex": 2,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 8,
    "prompt": "说话人听出了什么？",
    "cantoneseText": "你唱到好投入，但我听到系未放低。",
    "spokenText": "你唱到好投入，但我听到系未放低。",
    "choices": [
      "只是讲天气",
      "重点是音量",
      "大家准备散场",
      "投入背后还有未处理情绪"
    ],
    "answerIndex": 3,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 9,
    "prompt": "为什么要听后半秒？",
    "cantoneseText": "佢笑住讲“你开心就得”，你要听埋后半秒。",
    "spokenText": "佢笑住讲“你开心就得”，你要听埋后半秒。",
    "choices": [
      "尾音和停顿可能暴露不满",
      "只是讲天气",
      "重点是音量",
      "大家准备散场"
    ],
    "answerIndex": 0,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 10,
    "prompt": "这句说的是哪种体验？",
    "cantoneseText": "一首旧歌最劲，唔系旋律，系佢帮你记得嗰个人。",
    "spokenText": "一首旧歌最劲，唔系旋律，系佢帮你记得嗰个人。",
    "choices": [
      "只是讲天气",
      "歌曲触发人和场景记忆",
      "重点是音量",
      "大家准备散场"
    ],
    "answerIndex": 1,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 11,
    "prompt": "这句最在意什么？",
    "cantoneseText": "你话“都OK”，但个 OK 听落好唔 OK。",
    "spokenText": "你话“都OK”，但个 OK 听落好唔 OK。",
    "choices": [
      "只是讲天气",
      "重点是音量",
      "字面同意但语气保留",
      "大家准备散场"
    ],
    "answerIndex": 2,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 12,
    "prompt": "更合适的理解是？",
    "cantoneseText": "如果一句歌令你突然唔出声，可能唔系你唔识唱。",
    "spokenText": "如果一句歌令你突然唔出声，可能唔系你唔识唱。",
    "choices": [
      "只是讲天气",
      "重点是音量",
      "大家准备散场",
      "歌词触到个人情绪"
    ],
    "answerIndex": 3,
    "explanation": "Day 03 用港乐情绪训练句意，不只看字面。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "gong2 ngok6 jyu5 gam2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 03",
    "movieTitle": "港乐K房",
    "movieNote": "受港乐K房一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 13,
    "prompt": "这句提醒识别什么？",
    "cantoneseText": "你以为佢系赞你，其实佢系帮你留条后路。",
    "spokenText": "你以为佢系赞你，其实佢系帮你留条后路。",
    "choices": [
      "称赞可能是在降低冲突",
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    "answerIndex": 0,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 14,
    "prompt": "潜台词是什么？",
    "cantoneseText": "你讲到咁大声，唔代表你比较有理。",
    "spokenText": "你讲到咁大声，唔代表你比较有理。",
    "choices": [
      "只是开玩笑",
      "声量不能代替理据",
      "完全没有情绪",
      "已经正式同意"
    ],
    "answerIndex": 1,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 15,
    "prompt": "这句笑点在哪里？",
    "cantoneseText": "佢话“你啱”，但啱得好似判你死刑。",
    "spokenText": "佢话“你啱”，但啱得好似判你死刑。",
    "choices": [
      "只是开玩笑",
      "完全没有情绪",
      "表面认同但语气很重",
      "已经正式同意"
    ],
    "answerIndex": 2,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 16,
    "prompt": "说话人在识别什么？",
    "cantoneseText": "你话“帮我谂下”，其实系叫我帮你做埋。",
    "spokenText": "你话“帮我谂下”，其实系叫我帮你做埋。",
    "choices": [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意",
      "请求建议变成转嫁工作"
    ],
    "answerIndex": 3,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 17,
    "prompt": "这句批评什么？",
    "cantoneseText": "你唔系客气，你系客气到冇人知你想点。",
    "spokenText": "你唔系客气，你系客气到冇人知你想点。",
    "choices": [
      "过度客套导致意图不清",
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    "answerIndex": 0,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 18,
    "prompt": "潜台词是？",
    "cantoneseText": "你叫我放松，但你个样似准备开庭。",
    "spokenText": "你叫我放松，但你个样似准备开庭。",
    "choices": [
      "只是开玩笑",
      "表情和话语矛盾",
      "完全没有情绪",
      "已经正式同意"
    ],
    "answerIndex": 1,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 19,
    "prompt": "真正讯号是什么？",
    "cantoneseText": "佢讲“唔急”，但每五分钟问一次。",
    "spokenText": "佢讲“唔急”，但每五分钟问一次。",
    "choices": [
      "只是开玩笑",
      "完全没有情绪",
      "口头不急但实际很急",
      "已经正式同意"
    ],
    "answerIndex": 2,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 20,
    "prompt": "说话人要求什么？",
    "cantoneseText": "你唔好用笑声包装一个拒绝。",
    "spokenText": "你唔好用笑声包装一个拒绝。",
    "choices": [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意",
      "把拒绝讲清楚"
    ],
    "answerIndex": 3,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 21,
    "prompt": "这句话在戳破什么？",
    "cantoneseText": "你话“随缘”，但连座位方向都要风水。",
    "spokenText": "你话“随缘”，但连座位方向都要风水。",
    "choices": [
      "随缘只是口号，实际控制欲强",
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    "answerIndex": 0,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 22,
    "prompt": "更可能说明什么？",
    "cantoneseText": "佢话“我明”，但问返你同一个问题。",
    "spokenText": "佢话“我明”，但问返你同一个问题。",
    "choices": [
      "只是开玩笑",
      "对方其实未明",
      "完全没有情绪",
      "已经正式同意"
    ],
    "answerIndex": 1,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 23,
    "prompt": "这句如何理解情绪？",
    "cantoneseText": "你听港乐听到喊，唔代表你脆弱。",
    "spokenText": "你听港乐听到喊，唔代表你脆弱。",
    "choices": [
      "只是开玩笑",
      "完全没有情绪",
      "听懂语境后情绪更深",
      "已经正式同意"
    ],
    "answerIndex": 2,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 24,
    "prompt": "这句听出什么？",
    "cantoneseText": "你话“算啦”，但眼神仲喺度追数。",
    "spokenText": "你话“算啦”，但眼神仲喺度追数。",
    "choices": [
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意",
      "表面收场但心里未结案"
    ],
    "answerIndex": 3,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 25,
    "prompt": "这句的重点是？",
    "cantoneseText": "你讲“无所谓”，但语气似写咗三页投诉信。",
    "spokenText": "你讲“无所谓”，但语气似写咗三页投诉信。",
    "choices": [
      "语气暴露真实不满",
      "只是开玩笑",
      "完全没有情绪",
      "已经正式同意"
    ],
    "answerIndex": 0,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 26,
    "prompt": "这句讲什么？",
    "cantoneseText": "你笑佢夸张，其实夸张系帮你听到重点。",
    "spokenText": "你笑佢夸张，其实夸张系帮你听到重点。",
    "choices": [
      "只是开玩笑",
      "幽默会放大潜台词",
      "完全没有情绪",
      "已经正式同意"
    ],
    "answerIndex": 1,
    "explanation": "黄子华式节奏会用夸张显影潜台词。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dung6 duk6 siu3 jyu5 hei3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 03",
    "movieTitle": "黄子华/栋笃笑风格启发",
    "movieNote": "受黄子华/栋笃笑风格启发一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 27,
    "prompt": "这更像什么场面？",
    "cantoneseText": "办公室茶水间，佢讲“唔系八卦，系关心。”",
    "spokenText": "办公室茶水间，佢讲“唔系八卦，系关心。”",
    "choices": [
      "准备正式签约",
      "只是餐厅点单",
      "用关心包装打听",
      "完全无关情绪"
    ],
    "answerIndex": 2,
    "explanation": "场景题训练你从行为和语境补全意思。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 teoi1 dyun6",
    "trainingModule": "sceneInference",
    "dayTag": "Day 03",
    "movieTitle": "《男亲女爱》/港乐生活场景",
    "movieNote": "受《男亲女爱》/港乐生活场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 28,
    "prompt": "最可能是什么暗示？",
    "cantoneseText": "K房有人点完歌即刻望住你。",
    "spokenText": "K房有人点完歌即刻望住你。",
    "choices": [
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪",
      "这首歌同你有关"
    ],
    "answerIndex": 3,
    "explanation": "场景题训练你从行为和语境补全意思。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 teoi1 dyun6",
    "trainingModule": "sceneInference",
    "dayTag": "Day 03",
    "movieTitle": "《男亲女爱》/港乐生活场景",
    "movieNote": "受《男亲女爱》/港乐生活场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 29,
    "prompt": "可能说明什么？",
    "cantoneseText": "电梯入面两个人突然转普通话。",
    "spokenText": "电梯入面两个人突然转普通话。",
    "choices": [
      "他们想避开旁人听懂",
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    "answerIndex": 0,
    "explanation": "场景题训练你从行为和语境补全意思。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 teoi1 dyun6",
    "trainingModule": "sceneInference",
    "dayTag": "Day 03",
    "movieTitle": "《男亲女爱》/港乐生活场景",
    "movieNote": "受《男亲女爱》/港乐生活场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 30,
    "prompt": "更像哪种可能？",
    "cantoneseText": "唱到副歌，老友突然出去听电话。",
    "spokenText": "唱到副歌，老友突然出去听电话。",
    "choices": [
      "准备正式签约",
      "歌词触到他想避开的情绪",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    "answerIndex": 1,
    "explanation": "场景题训练你从行为和语境补全意思。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 teoi1 dyun6",
    "trainingModule": "sceneInference",
    "dayTag": "Day 03",
    "movieTitle": "《男亲女爱》/港乐生活场景",
    "movieNote": "受《男亲女爱》/港乐生活场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 31,
    "prompt": "这更像什么心态？",
    "cantoneseText": "会议后有人说“今晚听下 Eason 先。”",
    "spokenText": "会议后有人说“今晚听下 Eason 先。”",
    "choices": [
      "准备正式签约",
      "只是餐厅点单",
      "用歌消化职场情绪",
      "完全无关情绪"
    ],
    "answerIndex": 2,
    "explanation": "场景题训练你从行为和语境补全意思。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 teoi1 dyun6",
    "trainingModule": "sceneInference",
    "dayTag": "Day 03",
    "movieTitle": "《男亲女爱》/港乐生活场景",
    "movieNote": "受《男亲女爱》/港乐生活场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 32,
    "prompt": "这类表达训练什么？",
    "cantoneseText": "栋笃笑台上讲“成年人最贵系解释。”",
    "spokenText": "栋笃笑台上讲“成年人最贵系解释。”",
    "choices": [
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪",
      "用反差抓住职场成本"
    ],
    "answerIndex": 3,
    "explanation": "场景题训练你从行为和语境补全意思。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 teoi1 dyun6",
    "trainingModule": "sceneInference",
    "dayTag": "Day 03",
    "movieTitle": "《男亲女爱》/港乐生活场景",
    "movieNote": "受《男亲女爱》/港乐生活场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 33,
    "prompt": "最像什么场景？",
    "cantoneseText": "同事讲“你唔使覆咁快”，但望住你部手机。",
    "spokenText": "同事讲“你唔使覆咁快”，但望住你部手机。",
    "choices": [
      "嘴上不催，身体语言在催",
      "准备正式签约",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    "answerIndex": 0,
    "explanation": "场景题训练你从行为和语境补全意思。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 teoi1 dyun6",
    "trainingModule": "sceneInference",
    "dayTag": "Day 03",
    "movieTitle": "《男亲女爱》/港乐生活场景",
    "movieNote": "受《男亲女爱》/港乐生活场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 34,
    "prompt": "这句话功能可能是？",
    "cantoneseText": "老友听完你抱怨，只回“饮啖水先”。",
    "spokenText": "老友听完你抱怨，只回“饮啖水先”。",
    "choices": [
      "准备正式签约",
      "先降情绪再谈问题",
      "只是餐厅点单",
      "完全无关情绪"
    ],
    "answerIndex": 1,
    "explanation": "场景题训练你从行为和语境补全意思。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "coeng4 ging2 teoi1 dyun6",
    "trainingModule": "sceneInference",
    "dayTag": "Day 03",
    "movieTitle": "《男亲女爱》/港乐生活场景",
    "movieNote": "受《男亲女爱》/港乐生活场景一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 35,
    "prompt": "哪句更稳？",
    "cantoneseText": "将“你自己谂啦”转成职场表达。",
    "spokenText": "将“你自己谂啦”转成职场表达。",
    "choices": [
      "你自己搞掂佢",
      "我完全不理",
      "请你先给一个方案，我再反馈",
      "大家散会算"
    ],
    "answerIndex": 2,
    "explanation": "职场迁移把情绪句转成边界、时间和下一步。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 03",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把含糊话术落到行动。"
  },
  {
    "id": 36,
    "prompt": "更专业的是？",
    "cantoneseText": "将“你讲到我好乱”转成会议表达。",
    "spokenText": "将“你讲到我好乱”转成会议表达。",
    "choices": [
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算",
      "我需要先确认优先级和顺序"
    ],
    "answerIndex": 3,
    "explanation": "职场迁移把情绪句转成边界、时间和下一步。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 03",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把含糊话术落到行动。"
  },
  {
    "id": 37,
    "prompt": "最关键的问题是？",
    "cantoneseText": "老板讲“你睇住办”，你应该追问什么？",
    "spokenText": "老板讲“你睇住办”，你应该追问什么？",
    "choices": [
      "边界、预算和截止时间",
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算"
    ],
    "answerIndex": 0,
    "explanation": "职场迁移把情绪句转成边界、时间和下一步。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 03",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把含糊话术落到行动。"
  },
  {
    "id": 38,
    "prompt": "更稳的回应是？",
    "cantoneseText": "同事话“我尽量”，你要怎样落地？",
    "spokenText": "同事话“我尽量”，你要怎样落地？",
    "choices": [
      "你自己搞掂佢",
      "请给一个最晚回复时间",
      "我完全不理",
      "大家散会算"
    ],
    "answerIndex": 1,
    "explanation": "职场迁移把情绪句转成边界、时间和下一步。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 03",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把含糊话术落到行动。"
  },
  {
    "id": 39,
    "prompt": "更该追问什么？",
    "cantoneseText": "客户话“唔系钱问题”，你要听出什么？",
    "spokenText": "客户话“唔系钱问题”，你要听出什么？",
    "choices": [
      "你自己搞掂佢",
      "我完全不理",
      "真实顾虑可能在信任或风险",
      "大家散会算"
    ],
    "answerIndex": 2,
    "explanation": "职场迁移把情绪句转成边界、时间和下一步。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 03",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把含糊话术落到行动。"
  },
  {
    "id": 40,
    "prompt": "较稳的粤式表达是？",
    "cantoneseText": "你想反对方案，但又要留面。",
    "spokenText": "你想反对方案，但又要留面。",
    "choices": [
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算",
      "我明个方向，但想补一个风险位"
    ],
    "answerIndex": 3,
    "explanation": "职场迁移把情绪句转成边界、时间和下一步。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 03",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把含糊话术落到行动。"
  },
  {
    "id": 41,
    "prompt": "最好怎么讲？",
    "cantoneseText": "你需要催进度，但不想变讨债。",
    "spokenText": "你需要催进度，但不想变讨债。",
    "choices": [
      "我想确认下一步交付时间",
      "你自己搞掂佢",
      "我完全不理",
      "大家散会算"
    ],
    "answerIndex": 0,
    "explanation": "职场迁移把情绪句转成边界、时间和下一步。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 03",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把含糊话术落到行动。"
  },
  {
    "id": 42,
    "prompt": "较专业的追问是？",
    "cantoneseText": "收到含糊反馈“再谂下”，你该怎么拆？",
    "spokenText": "收到含糊反馈“再谂下”，你该怎么拆？",
    "choices": [
      "你自己搞掂佢",
      "想确认是方向、内容还是风险要改",
      "我完全不理",
      "大家散会算"
    ],
    "answerIndex": 1,
    "explanation": "职场迁移把情绪句转成边界、时间和下一步。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "zik1 coeng4 zyun2 jik6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 03",
    "movieTitle": "职场粤语",
    "movieNote": "受职场粤语一类港片/港乐/港剧场景启发，句子为原创。",
    "workplaceTip": "把含糊话术落到行动。"
  },
  {
    "id": 43,
    "prompt": "最实际办法是？",
    "cantoneseText": "听辨：“情 cing4”和“晴 cing4”同音时，靠什么分？",
    "spokenText": "听辨：“情 cing4”和“晴 cing4”同音时，靠什么分？",
    "choices": [
      "只看音量",
      "只看字形",
      "靠上下文和搭配",
      "全部当普通话"
    ],
    "answerIndex": 2,
    "explanation": "听感题减少规则背诵，改练语境辅助判断。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyut6 jyu5 teng1 gam2",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 03",
    "movieTitle": "粤语听感",
    "movieNote": "受粤语听感一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 44,
    "prompt": "更可能是什么功能？",
    "cantoneseText": "听辨：“先 sin1”在句尾有时不是时间。",
    "spokenText": "听辨：“先 sin1”在句尾有时不是时间。",
    "choices": [
      "只看音量",
      "只看字形",
      "全部当普通话",
      "缓和语气或保留空间"
    ],
    "answerIndex": 3,
    "explanation": "听感题减少规则背诵，改练语境辅助判断。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyut6 jyu5 teng1 gam2",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 03",
    "movieTitle": "粤语听感",
    "movieNote": "受粤语听感一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 45,
    "prompt": "更该听什么？",
    "cantoneseText": "听辨：“啦”和“喇”差别未必靠字。",
    "spokenText": "听辨：“啦”和“喇”差别未必靠字。",
    "choices": [
      "语气收束和情绪方向",
      "只看音量",
      "只看字形",
      "全部当普通话"
    ],
    "answerIndex": 0,
    "explanation": "听感题减少规则背诵，改练语境辅助判断。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyut6 jyu5 teng1 gam2",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 03",
    "movieTitle": "粤语听感",
    "movieNote": "受粤语听感一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 46,
    "prompt": "较常见功能是？",
    "cantoneseText": "听辨：“咁”放句首，常提示什么？",
    "spokenText": "听辨：“咁”放句首，常提示什么？",
    "choices": [
      "只看音量",
      "承接上文准备转折或推进",
      "只看字形",
      "全部当普通话"
    ],
    "answerIndex": 1,
    "explanation": "听感题减少规则背诵，改练语境辅助判断。",
    "theme": "进阶听感",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "进阶听感",
    "pronunciationHint": "jyut6 jyu5 teng1 gam2",
    "phoneticFocus": "进阶听感",
    "trainingModule": "toneEar",
    "dayTag": "Day 03",
    "movieTitle": "粤语听感",
    "movieNote": "受粤语听感一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 47,
    "prompt": "Day 03 建议策略是？",
    "cantoneseText": "复盘：一句话听不懂时，先抓哪三样？",
    "spokenText": "复盘：一句话听不懂时，先抓哪三样？",
    "choices": [
      "只背冷门读音",
      "只记明星名字",
      "关系、场景、语气方向",
      "每句都反击"
    ],
    "answerIndex": 2,
    "explanation": "复盘题把本章方法收束成可迁移策略。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "fuk6 pun4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 03",
    "movieTitle": "Day 03复盘",
    "movieNote": "受Day 03复盘一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 48,
    "prompt": "更符合本章目标的是？",
    "cantoneseText": "复盘：港乐训练最有用的不是背歌词，而是？",
    "spokenText": "复盘：港乐训练最有用的不是背歌词，而是？",
    "choices": [
      "只背冷门读音",
      "只记明星名字",
      "每句都反击",
      "借情绪建立语感记忆"
    ],
    "answerIndex": 3,
    "explanation": "复盘题把本章方法收束成可迁移策略。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "fuk6 pun4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 03",
    "movieTitle": "Day 03复盘",
    "movieNote": "受Day 03复盘一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 49,
    "prompt": "训练价值是？",
    "cantoneseText": "复盘：栋笃笑把普通事讲到夸张，目的是什么？",
    "spokenText": "复盘：栋笃笑把普通事讲到夸张，目的是什么？",
    "choices": [
      "放大矛盾帮助识别潜台词",
      "只背冷门读音",
      "只记明星名字",
      "每句都反击"
    ],
    "answerIndex": 0,
    "explanation": "复盘题把本章方法收束成可迁移策略。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "fuk6 pun4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 03",
    "movieTitle": "Day 03复盘",
    "movieNote": "受Day 03复盘一类港片/港乐/港剧场景启发，句子为原创。"
  },
  {
    "id": 50,
    "prompt": "最准确的是？",
    "cantoneseText": "复盘：职场粤语不是学会怼人，而是学会什么？",
    "spokenText": "复盘：职场粤语不是学会怼人，而是学会什么？",
    "choices": [
      "只背冷门读音",
      "有边界但不撕破脸",
      "只记明星名字",
      "每句都反击"
    ],
    "answerIndex": 1,
    "explanation": "复盘题把本章方法收束成可迁移策略。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "fuk6 pun4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 03",
    "movieTitle": "Day 03复盘",
    "movieNote": "受Day 03复盘一类港片/港乐/港剧场景启发，句子为原创。"
  }
];

const movieTrainingDay02ChapterTitle = '15天港片粤语训练 Day 02';

const movieTrainingDay02Questions = [
  {
    "id": 1,
    "prompt": "这句话真正指出什么？",
    "cantoneseText": "你而家唔系问意见，系想我企边。",
    "spokenText": "你而家唔系问意见，系想我企边。",
    "choices": [
      "对方在要求站队",
      "对方想听建议",
      "对方准备道歉",
      "对方只是闲聊"
    ],
    "answerIndex": 0,
    "explanation": "“企边”是站哪一边，重点是对方把问题变成站队。",
    "theme": "站队压力",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "站队压力",
    "pronunciationHint": "nei5 ji4 gaa1 m4 hai6 man6 ji3 gin3, hai6 soeng2 ngo5 kei5 bin1",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 2,
    "prompt": "说话人想把焦点拉回哪里？",
    "cantoneseText": "呢件事讲到尾，唔系边个赢。",
    "spokenText": "呢件事讲到尾，唔系边个赢。",
    "choices": [
      "输赢结果",
      "事情本身",
      "饭局安排",
      "声线高低"
    ],
    "answerIndex": 1,
    "explanation": "这句是在降冲突，提醒别把讨论变成输赢。",
    "theme": "降冲突",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "降冲突",
    "pronunciationHint": "ni1 gin6 si6 gong2 dou3 mei5, m4 hai6 bin1 go3 jeng4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 3,
    "prompt": "这题考的不是字面，而是什么？",
    "cantoneseText": "短摘：“我养你啊。”如果放在当下语境，最容易被误解成？",
    "spokenText": "短摘：“我养你啊。”如果放在当下语境，最容易被误解成？",
    "choices": [
      "承诺边界",
      "天气变化",
      "点餐速度",
      "开会流程"
    ],
    "answerIndex": 0,
    "explanation": "短句很经典，但训练重点是辨认它在不同关系里可能带来的承诺感。",
    "theme": "短摘语境",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "短摘语境",
    "pronunciationHint": "ngo5 joeng5 nei5 aa3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《喜剧之王》",
    "movieNote": "含短句级经典摘引；用于学习语境，不复刻长台词。"
  },
  {
    "id": 4,
    "prompt": "这句提醒什么？",
    "cantoneseText": "你讲得轻松，听嗰个未必轻松。",
    "spokenText": "你讲得轻松，听嗰个未必轻松。",
    "choices": [
      "玩笑有接收成本",
      "声音必须更大",
      "对方已经同意",
      "内容不用再讲"
    ],
    "answerIndex": 0,
    "explanation": "说话者轻松，不代表听的人没有压力。",
    "theme": "玩笑边界",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "玩笑边界",
    "pronunciationHint": "nei5 gong2 dak1 heng1 sung1, teng1 go2 go3 mei6 bit1 heng1 sung1",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《喜剧之王》",
    "movieNote": "受《喜剧之王》一类港片场景启发，句子为原创。"
  },
  {
    "id": 5,
    "prompt": "最准确的潜台词是？",
    "cantoneseText": "我唔系要你即刻答，我系要你唔好扮冇听到。",
    "spokenText": "我唔系要你即刻答，我系要你唔好扮冇听到。",
    "choices": [
      "要求对方承认收到",
      "要求马上签字",
      "准备取消合作",
      "只是换个座位"
    ],
    "answerIndex": 0,
    "explanation": "核心不是立刻给答案，而是不要逃避接收信息。",
    "theme": "回应边界",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "回应边界",
    "pronunciationHint": "ngo5 m4 hai6 jiu3 nei5 zik1 hak1 daap3, ngo5 hai6 jiu3 nei5 m4 hou2 baan6 mou5 teng1 dou2",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 02",
    "movieTitle": "《窃听风云》",
    "movieNote": "受《窃听风云》一类港片场景启发，句子为原创。",
    "workplaceTip": "职场里可转成“先确认收到，再约回复时间”。"
  },
  {
    "id": 6,
    "prompt": "更可靠的判断是？",
    "cantoneseText": "听辨进阶：“情 cing4”和“请 cing2”在句里差别靠什么抓？",
    "spokenText": "听辨进阶：“情 cing4”和“请 cing2”在句里差别靠什么抓？",
    "choices": [
      "只看声母",
      "结合声调和语境",
      "只看字数",
      "都读成普通话"
    ],
    "answerIndex": 1,
    "explanation": "两个音很接近，不能只靠拼音形状，要结合声调和句意。",
    "theme": "近音辨义",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "近音辨义",
    "pronunciationHint": "cing4 / cing2",
    "phoneticFocus": "近音辨义",
    "trainingModule": "toneEar",
    "dayTag": "Day 02",
    "movieTitle": "《花样年华》",
    "movieNote": "受《花样年华》一类港片场景启发，句子为原创。"
  },
  {
    "id": 7,
    "prompt": "这句在追问什么？",
    "cantoneseText": "你话可以，但你冇讲几时可以。",
    "spokenText": "你话可以，但你冇讲几时可以。",
    "choices": [
      "执行时间",
      "电影片名",
      "执行时间和交付点",
      "说话音量"
    ],
    "answerIndex": 0,
    "explanation": "“可以”只是态度，缺少可执行时间。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "nei5 waa6 ho2 ji5, daan6 nei5 mou5 gong2 gei2 si4 ho2 ji5",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《金鸡》",
    "movieNote": "受《金鸡》一类港片场景启发，句子为原创。",
    "workplaceTip": "把模糊承诺追到时间点。"
  },
  {
    "id": 8,
    "prompt": "最可能的原因是？",
    "cantoneseText": "场景：走廊里有人说“入房先，出面多耳。”",
    "spokenText": "场景：走廊里有人说“入房先，出面多耳。”",
    "choices": [
      "外面不适合谈",
      "准备开始唱歌",
      "想换一道菜",
      "已经完全公开"
    ],
    "answerIndex": 0,
    "explanation": "“多耳”是很多人听着，说明信息不适合公开讲。",
    "theme": "避开旁听",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "避开旁听",
    "pronunciationHint": "jap6 fong2 sin1, ceot1 min6 do1 ji5",
    "trainingModule": "sceneInference",
    "dayTag": "Day 02",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 9,
    "prompt": "这句批评的是？",
    "cantoneseText": "你唔系冇道理，系讲到人冇路落。",
    "spokenText": "你唔系冇道理，系讲到人冇路落。",
    "choices": [
      "表达不给台阶",
      "逻辑完全错误",
      "声音太小",
      "时间太早"
    ],
    "answerIndex": 0,
    "explanation": "对方也许有道理，但表达方式让别人没台阶。",
    "theme": "面子台阶",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "面子台阶",
    "pronunciationHint": "nei5 m4 hai6 mou5 dou6 lei5, hai6 gong2 dou3 jan4 mou5 lou6 lok6",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《黑社会》",
    "movieNote": "受《黑社会》一类港片场景启发，句子为原创。"
  },
  {
    "id": 10,
    "prompt": "它常带什么语气？",
    "cantoneseText": "短摘：“冇梦想。”放在训练里，更该听出什么？",
    "spokenText": "短摘：“冇梦想。”放在训练里，更该听出什么？",
    "choices": [
      "认真规劝",
      "纯粹点餐",
      "天气抱怨",
      "会议签到"
    ],
    "answerIndex": 0,
    "explanation": "短摘的趣味在反差：听起来轻，背后是在推人面对目标。",
    "theme": "短摘反差",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "短摘反差",
    "pronunciationHint": "mou5 mung6 soeng2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《少林足球》",
    "movieNote": "含短句级经典摘引；只取极短片段做语气训练。"
  },
  {
    "id": 11,
    "prompt": "职场里更像什么反馈？",
    "cantoneseText": "呢个答案好靓，但我唔知点执行。",
    "spokenText": "呢个答案好靓，但我唔知点执行。",
    "choices": [
      "认可包装但要行动",
      "完全赞成通过",
      "要求马上散会",
      "只是在夸设计"
    ],
    "answerIndex": 0,
    "explanation": "它承认答案漂亮，但追问可执行性。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "ni1 go3 daap3 on3 hou2 leng3, daan6 ngo5 m4 zi1 dim2 zat1 hang4",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《食神》",
    "movieNote": "受《食神》一类港片场景启发，句子为原创。",
    "workplaceTip": "把“好听”拉回“怎么做”。"
  },
  {
    "id": 12,
    "prompt": "说话人要分辨什么？",
    "cantoneseText": "你而家系提醒我，定系畀压力我？",
    "spokenText": "你而家系提醒我，定系畀压力我？",
    "choices": [
      "提醒与施压",
      "早饭与晚饭",
      "开门与关门",
      "长音与短音"
    ],
    "answerIndex": 0,
    "explanation": "同样一句话，语气不同会从提醒变成施压。",
    "theme": "提醒/施压",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "提醒/施压",
    "pronunciationHint": "nei5 ji4 gaa1 hai6 tai4 sing2 ngo5, ding6 hai6 bei2 aat3 lik6 ngo5",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 13,
    "prompt": "这句话是在说什么？",
    "cantoneseText": "场景：茶餐厅里说“唔该，飞砂走奶。”",
    "spokenText": "场景：茶餐厅里说“唔该，飞砂走奶。”",
    "choices": [
      "不要糖不要奶",
      "多放辣椒",
      "取消订单",
      "马上埋单"
    ],
    "answerIndex": 0,
    "explanation": "“飞砂走奶”是港式饮品常见说法：不要糖不要奶。",
    "theme": "茶餐厅表达",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "茶餐厅表达",
    "pronunciationHint": "m4 goi1, fei1 saa1 zau2 naai5",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《金鸡》",
    "movieNote": "受《金鸡》一类港片场景启发，句子为原创。"
  },
  {
    "id": 14,
    "prompt": "潜台词是什么？",
    "cantoneseText": "我畀你面，唔代表件事过去咗。",
    "spokenText": "我畀你面，唔代表件事过去咗。",
    "choices": [
      "暂时保全面子",
      "已经完全和解",
      "准备庆祝",
      "只是问路"
    ],
    "answerIndex": 0,
    "explanation": "给面子是处理方式，不等于问题已经消失。",
    "theme": "面子/结案",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "面子/结案",
    "pronunciationHint": "ngo5 bei2 nei5 min6, m4 doi6 biu2 gin6 si6 gwo3 zo2",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《黑社会》",
    "movieNote": "受《黑社会》一类港片场景启发，句子为原创。"
  },
  {
    "id": 15,
    "prompt": "最该补充什么线索？",
    "cantoneseText": "听辨进阶：“讲 gong2”和“港 gong2”单听相近，靠什么减少误判？",
    "spokenText": "听辨进阶：“讲 gong2”和“港 gong2”单听相近，靠什么减少误判？",
    "choices": [
      "前后词和语境",
      "音量大小",
      "是否有儿化",
      "字幕颜色"
    ],
    "answerIndex": 0,
    "explanation": "同音或近音时，靠上下文判断，不是硬猜单字。",
    "theme": "同音语境",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "同音语境",
    "pronunciationHint": "gong2 / gong2",
    "phoneticFocus": "同音语境",
    "trainingModule": "toneEar",
    "dayTag": "Day 02",
    "movieTitle": "《重庆森林》",
    "movieNote": "受《重庆森林》一类港片场景启发，句子为原创。"
  },
  {
    "id": 16,
    "prompt": "说话人真正需要什么？",
    "cantoneseText": "你讲“尽快”，我听到嘅系唔确定。",
    "spokenText": "你讲“尽快”，我听到嘅系唔确定。",
    "choices": [
      "具体承诺",
      "更大情绪",
      "换个片名",
      "多点玩笑"
    ],
    "answerIndex": 0,
    "explanation": "“尽快”太虚，听的人需要更明确的承诺。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "nei5 gong2 zeon6 faai3, ngo5 teng1 dou2 ge3 hai6 m4 kok3 ding6",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《窃听风云》",
    "movieNote": "受《窃听风云》一类港片场景启发，句子为原创。",
    "workplaceTip": "把“尽快”改成具体时间和交付物。"
  },
  {
    "id": 17,
    "prompt": "更像什么提醒？",
    "cantoneseText": "场景：电梯口有人说“上到去先笑，下面有人望住。”",
    "spokenText": "场景：电梯口有人说“上到去先笑，下面有人望住。”",
    "choices": [
      "控制表情别露馅",
      "准备唱生日歌",
      "马上叫外卖",
      "公开宣布好消息"
    ],
    "answerIndex": 0,
    "explanation": "“有人望住”说明要暂时收住表情，别露出信息。",
    "theme": "表情管理",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "表情管理",
    "pronunciationHint": "soeng5 dou3 heoi3 sin1 siu3, haa6 min6 jau5 jan4 mong6 zyu6",
    "trainingModule": "sceneInference",
    "dayTag": "Day 02",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 18,
    "prompt": "这句最在意什么？",
    "cantoneseText": "你可以唔认同，但唔好偷换我意思。",
    "spokenText": "你可以唔认同，但唔好偷换我意思。",
    "choices": [
      "观点被改写",
      "对方没付款",
      "地方太远",
      "声音不够甜"
    ],
    "answerIndex": 0,
    "explanation": "允许不同意，但不接受把原意改写后再反驳。",
    "theme": "偷换概念",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "偷换概念",
    "pronunciationHint": "nei5 ho2 ji5 m4 jing6 tung4, daan6 m4 hou2 tau1 wun6 ngo5 ji3 si1",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 19,
    "prompt": "更接近哪种含义？",
    "cantoneseText": "短摘：“出来行。”放在江湖语境里，后面通常带什么压力？",
    "spokenText": "短摘：“出来行。”放在江湖语境里，后面通常带什么压力？",
    "choices": [
      "要承担后果",
      "出去散步",
      "参加旅行",
      "准备收工"
    ],
    "answerIndex": 0,
    "explanation": "短摘本身很短，但江湖语境会带出“选择有代价”。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "ceot1 loi4 haang4",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《无间道》",
    "movieNote": "含短句级经典摘引；不复刻完整台词。"
  },
  {
    "id": 20,
    "prompt": "这句的冲突点是？",
    "cantoneseText": "你话冇问题，但成件事就系问题。",
    "spokenText": "你话冇问题，但成件事就系问题。",
    "choices": [
      "整体风险被轻描淡写",
      "菜不够热",
      "电话没电",
      "电影太长"
    ],
    "answerIndex": 0,
    "explanation": "“没问题”的态度和实际风险冲突。",
    "theme": "风险复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "风险复盘",
    "pronunciationHint": "nei5 waa6 mou5 man6 tai4, daan6 seng4 gin6 si6 zau6 hai6 man6 tai4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 21,
    "prompt": "关系里这句更看重什么？",
    "cantoneseText": "我唔需要你撑我，我需要你讲真话。",
    "spokenText": "我唔需要你撑我，我需要你讲真话。",
    "choices": [
      "真实反馈",
      "无条件站队",
      "立即离开",
      "把声音压低"
    ],
    "answerIndex": 0,
    "explanation": "说话人不要表面支持，而要真实判断。",
    "theme": "真话/撑场",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "真话/撑场",
    "pronunciationHint": "ngo5 m4 seoi1 jiu3 nei5 caang1 ngo5, ngo5 seoi1 jiu3 nei5 gong2 zan1 waa2",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《旺角卡门》",
    "movieNote": "受《旺角卡门》一类港片场景启发，句子为原创。"
  },
  {
    "id": 22,
    "prompt": "这句试图澄清什么？",
    "cantoneseText": "呢个唔系借口，系限制条件。",
    "spokenText": "呢个唔系借口，系限制条件。",
    "choices": [
      "不是逃避而是约束",
      "不是开会而是吃饭",
      "不是粤语而是英语",
      "不是现在而是昨天"
    ],
    "answerIndex": 0,
    "explanation": "限制条件是客观边界，借口是逃避责任；这句在区分两者。",
    "theme": "约束条件",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "约束条件",
    "pronunciationHint": "ni1 go3 m4 hai6 ze3 hau2, hai6 haan6 zai3 tiu4 gin6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 02",
    "movieTitle": "《窃听风云》",
    "movieNote": "受《窃听风云》一类港片场景启发，句子为原创。",
    "workplaceTip": "适合解释资源、时间、权限边界。"
  },
  {
    "id": 23,
    "prompt": "这句话最像什么状态？",
    "cantoneseText": "场景：码头边说“风大，讲重点。”",
    "spokenText": "场景：码头边说“风大，讲重点。”",
    "choices": [
      "环境紧张要压缩信息",
      "准备慢慢聊天",
      "要求唱完整首歌",
      "正在点甜品"
    ],
    "answerIndex": 0,
    "explanation": "风大和讲重点，说明环境不适合长聊。",
    "theme": "压缩信息",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "压缩信息",
    "pronunciationHint": "fung1 daai6, gong2 zung6 dim2",
    "trainingModule": "sceneInference",
    "dayTag": "Day 02",
    "movieTitle": "《英雄本色》",
    "movieNote": "受《英雄本色》一类港片场景启发，句子为原创。"
  },
  {
    "id": 24,
    "prompt": "最实用的策略是？",
    "cantoneseText": "听辨进阶：“买 maai5”和“卖 maai6”如果听不清，先抓什么？",
    "spokenText": "听辨进阶：“买 maai5”和“卖 maai6”如果听不清，先抓什么？",
    "choices": [
      "看交易方向",
      "只记声母",
      "忽略声调",
      "猜说话人心情"
    ],
    "answerIndex": 0,
    "explanation": "买和卖声调不同，但真实场景里也要看钱和货的方向。",
    "theme": "声调+语境",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "声调+语境",
    "pronunciationHint": "maai5 / maai6",
    "phoneticFocus": "声调+语境",
    "trainingModule": "toneEar",
    "dayTag": "Day 02",
    "movieTitle": "《食神》",
    "movieNote": "受《食神》一类港片场景启发，句子为原创。"
  },
  {
    "id": 25,
    "prompt": "这句在会议里最像什么？",
    "cantoneseText": "你话“大家都明”，但我未明。",
    "spokenText": "你话“大家都明”，但我未明。",
    "choices": [
      "请求显性说明",
      "已经完全同意",
      "准备换餐厅",
      "拒绝继续听"
    ],
    "answerIndex": 0,
    "explanation": "它把“大家都明”的假设打开放到台面上。",
    "theme": "显性说明",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "显性说明",
    "pronunciationHint": "nei5 waa6 daai6 gaa1 dou1 ming4, daan6 ngo5 mei6 ming4",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "适合避免被“默认共识”带走。"
  },
  {
    "id": 26,
    "prompt": "最可能担心什么？",
    "cantoneseText": "场景：有人低声说“车唔好泊门口。”",
    "spokenText": "场景：有人低声说“车唔好泊门口。”",
    "choices": [
      "被人认出或盯上",
      "车太干净",
      "门口太漂亮",
      "准备拍合照"
    ],
    "answerIndex": 0,
    "explanation": "不泊门口通常是避免暴露行踪或身份。",
    "theme": "低调避险",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "低调避险",
    "pronunciationHint": "ce1 m4 hou2 paak3 mun4 hau2",
    "trainingModule": "sceneInference",
    "dayTag": "Day 02",
    "movieTitle": "《暗战》",
    "movieNote": "受《暗战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 27,
    "prompt": "这句指出什么问题？",
    "cantoneseText": "你讲事实，我听到判断。",
    "spokenText": "你讲事实，我听到判断。",
    "choices": [
      "事实里夹了立场",
      "事实完全缺失",
      "声音太慢",
      "字数太少"
    ],
    "answerIndex": 0,
    "explanation": "有些表达看似陈述事实，其实已经带判断。",
    "theme": "事实/判断",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "事实/判断",
    "pronunciationHint": "nei5 gong2 si6 sat6, ngo5 teng1 dou2 pun3 dyun6",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《窃听风云》",
    "movieNote": "受《窃听风云》一类港片场景启发，句子为原创。"
  },
  {
    "id": 28,
    "prompt": "这句话最针对什么？",
    "cantoneseText": "你唔好成日用“迟啲”包住所有事。",
    "spokenText": "你唔好成日用“迟啲”包住所有事。",
    "choices": [
      "模糊拖延",
      "发音太准",
      "电影太短",
      "点餐太快"
    ],
    "answerIndex": 0,
    "explanation": "“迟啲”如果反复使用，会变成拖延和逃避。",
    "theme": "模糊时间",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "模糊时间",
    "pronunciationHint": "nei5 m4 hou2 seng4 jat6 jung6 ci4 di1 baau1 zyu6 so2 jau5 si6",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《金鸡》",
    "movieNote": "受《金鸡》一类港片场景启发，句子为原创。"
  },
  {
    "id": 29,
    "prompt": "更像哪种功能？",
    "cantoneseText": "短摘：“饮杯茶。”在港片里不一定只是喝茶，可能是？",
    "spokenText": "短摘：“饮杯茶。”在港片里不一定只是喝茶，可能是？",
    "choices": [
      "缓和或试探",
      "正式签约",
      "马上开打",
      "结束训练"
    ],
    "answerIndex": 0,
    "explanation": "短句在港片里常有社交功能：缓和、试探、留余地。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "jam2 bui1 caa4",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《无间道》",
    "movieNote": "含短句级经典摘引；重点是场景功能。"
  },
  {
    "id": 30,
    "prompt": "它通常保留了什么空间？",
    "cantoneseText": "如果你想拒绝，这句“我睇下先”最像什么？",
    "spokenText": "如果你想拒绝，这句“我睇下先”最像什么？",
    "choices": [
      "不马上答应",
      "已经确定接受",
      "马上付款",
      "完全听不懂"
    ],
    "answerIndex": 0,
    "explanation": "“我睇下先”常用于保留空间，不立刻承诺。",
    "theme": "保留空间",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "保留空间",
    "pronunciationHint": "ngo5 tai2 haa5 sin1",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《花样年华》",
    "movieNote": "受《花样年华》一类港片场景启发，句子为原创。"
  },
  {
    "id": 31,
    "prompt": "真正困难在哪里？",
    "cantoneseText": "呢个决定唔难，难系点同人交代。",
    "spokenText": "呢个决定唔难，难系点同人交代。",
    "choices": [
      "沟通交代",
      "选择菜式",
      "坐哪一边",
      "读哪个声调"
    ],
    "answerIndex": 0,
    "explanation": "决定本身可能简单，但对相关人解释才难。",
    "theme": "交代成本",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "交代成本",
    "pronunciationHint": "ni1 go3 kyut3 ding6 m4 naan4, naan4 hai6 dim2 tung4 jan4 gaau1 doi6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "职场里常见：方案易定，stakeholder沟通难。"
  },
  {
    "id": 32,
    "prompt": "更像什么考虑？",
    "cantoneseText": "场景：仓库里有人说“灯唔好开晒。”",
    "spokenText": "场景：仓库里有人说“灯唔好开晒。”",
    "choices": [
      "避免太显眼",
      "准备办派对",
      "方便拍广告",
      "已经安全"
    ],
    "answerIndex": 0,
    "explanation": "灯不开全，是为了低调或避免暴露。",
    "theme": "隐蔽行动",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "隐蔽行动",
    "pronunciationHint": "dang1 m4 hou2 hoi1 saai3",
    "trainingModule": "sceneInference",
    "dayTag": "Day 02",
    "movieTitle": "《警察故事》",
    "movieNote": "受《警察故事》一类港片场景启发，句子为原创。"
  },
  {
    "id": 33,
    "prompt": "这句不是追责，而是追什么？",
    "cantoneseText": "你话系误会，但误会点解会发生？",
    "spokenText": "你话系误会，但误会点解会发生？",
    "choices": [
      "机制原因",
      "谁声音最大",
      "哪部电影",
      "谁坐门口"
    ],
    "answerIndex": 0,
    "explanation": "重点从“误会”转到误会产生机制。",
    "theme": "机制复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "机制复盘",
    "pronunciationHint": "nei5 waa6 hai6 ng6 wui6, daan6 ng6 wui6 dim2 gaai2 wui5 faat3 sang1",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "复盘时追机制，比只追人更有用。"
  },
  {
    "id": 34,
    "prompt": "较稳的方式是？",
    "cantoneseText": "听辨进阶：“到 dou3”和“度 dou6”在快语速里，先看什么？",
    "spokenText": "听辨进阶：“到 dou3”和“度 dou6”在快语速里，先看什么？",
    "choices": [
      "看句中位置和意思",
      "只听音量",
      "全部当同一个词",
      "看说话人衣服"
    ],
    "answerIndex": 0,
    "explanation": "快语速里声调可能不明显，要靠语法位置和句意辅助。",
    "theme": "快语速辨义",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "快语速辨义",
    "pronunciationHint": "dou3 / dou6",
    "phoneticFocus": "快语速辨义",
    "trainingModule": "toneEar",
    "dayTag": "Day 02",
    "movieTitle": "《重庆森林》",
    "movieNote": "受《重庆森林》一类港片场景启发，句子为原创。"
  },
  {
    "id": 35,
    "prompt": "这句在识别什么？",
    "cantoneseText": "你畀我选择，但两个都系你想要嘅。",
    "spokenText": "你畀我选择，但两个都系你想要嘅。",
    "choices": [
      "假选择",
      "真道歉",
      "普通点餐",
      "假选择和被引导"
    ],
    "answerIndex": 3,
    "explanation": "看似有选择，其实两个选项都导向对方想要的结果。",
    "theme": "假选择",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "假选择",
    "pronunciationHint": "nei5 bei2 ngo5 syun2 zaak6, daan6 loeng5 go3 dou1 hai6 nei5 soeng2 jiu3 ge3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 36,
    "prompt": "这句鼓励什么？",
    "cantoneseText": "我唔怕你反对，我怕你唔讲原因。",
    "spokenText": "我唔怕你反对，我怕你唔讲原因。",
    "choices": [
      "有理由地反对",
      "保持沉默",
      "直接服从",
      "换个场地"
    ],
    "answerIndex": 0,
    "explanation": "成年人协作里，反对不是问题，无理由反对才难处理。",
    "theme": "高质量反对",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "高质量反对",
    "pronunciationHint": "ngo5 m4 paa3 nei5 faan2 deoi3, ngo5 paa3 nei5 m4 gong2 jyun4 jan1",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "适合团队讨论和方案评审。"
  },
  {
    "id": 37,
    "prompt": "这句话更像什么？",
    "cantoneseText": "场景：天台上说“唔好望落去，望住我。”",
    "spokenText": "场景：天台上说“唔好望落去，望住我。”",
    "choices": [
      "稳定对方情绪",
      "教人看风景",
      "准备拍照",
      "提醒点菜"
    ],
    "answerIndex": 0,
    "explanation": "天台语境下，重点是让对方把注意力放回来，稳定情绪。",
    "theme": "稳定情绪",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "稳定情绪",
    "pronunciationHint": "m4 hou2 mong6 lok6 heoi3, mong6 zyu6 ngo5",
    "trainingModule": "sceneInference",
    "dayTag": "Day 02",
    "movieTitle": "《新警察故事》",
    "movieNote": "受《新警察故事》一类港片场景启发，句子为原创。"
  },
  {
    "id": 38,
    "prompt": "说话人发现了什么？",
    "cantoneseText": "你话“唔紧要”，但之后每句都提。",
    "spokenText": "你话“唔紧要”，但之后每句都提。",
    "choices": [
      "其实还在意",
      "已经放下",
      "完全没听见",
      "正在练发音"
    ],
    "answerIndex": 0,
    "explanation": "反复提起说明“唔紧要”可能只是表面收住。",
    "theme": "表面放下",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "表面放下",
    "pronunciationHint": "nei5 waa6 m4 gan2 jiu3, daan6 zi1 hau6 mui5 geoi3 dou1 tai4",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《花样年华》",
    "movieNote": "受《花样年华》一类港片场景启发，句子为原创。"
  },
  {
    "id": 39,
    "prompt": "这句追问的是？",
    "cantoneseText": "呢个安排听落公平，但边个承担风险？",
    "spokenText": "呢个安排听落公平，但边个承担风险？",
    "choices": [
      "风险归属",
      "电影分类",
      "茶餐厅菜单",
      "声母韵母"
    ],
    "answerIndex": 0,
    "explanation": "安排表面公平，还要看风险落在谁身上。",
    "theme": "风险归属",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "风险归属",
    "pronunciationHint": "ni1 go3 on1 paai4 teng1 lok6 gung1 ping4, daan6 bin1 go3 sing4 daam1 fung1 him2",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 02",
    "movieTitle": "《窃听风云》",
    "movieNote": "受《窃听风云》一类港片场景启发，句子为原创。",
    "workplaceTip": "公平感之外，还要看风险分配。"
  },
  {
    "id": 40,
    "prompt": "潜台词更接近？",
    "cantoneseText": "如果对方说“你自己谂清楚”，最可能不是让你自由发挥，而是？",
    "spokenText": "如果对方说“你自己谂清楚”，最可能不是让你自由发挥，而是？",
    "choices": [
      "后果自负",
      "马上批准",
      "随便庆祝",
      "请你唱歌"
    ],
    "answerIndex": 0,
    "explanation": "这句常把决定和后果交回给你。",
    "theme": "后果自负",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "后果自负",
    "pronunciationHint": "nei5 zi6 gei2 nam2 cing1 co2",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《黑社会》",
    "movieNote": "受《黑社会》一类港片场景启发，句子为原创。"
  },
  {
    "id": 41,
    "prompt": "它把沟通切到哪一层？",
    "cantoneseText": "场景：收工后说“今晚唔讲公事，讲人情。”",
    "spokenText": "场景：收工后说“今晚唔讲公事，讲人情。”",
    "choices": [
      "关系层",
      "技术层",
      "价格层",
      "发音层"
    ],
    "answerIndex": 0,
    "explanation": "“讲人情”是从事情本身转到关系、人情和面子。",
    "theme": "关系沟通",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "关系沟通",
    "pronunciationHint": "gam1 maan5 m4 gong2 gung1 si6, gong2 jan4 cing4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 02",
    "movieTitle": "《金鸡》",
    "movieNote": "受《金鸡》一类港片场景启发，句子为原创。"
  },
  {
    "id": 42,
    "prompt": "这句把迟到解释成什么？",
    "cantoneseText": "你唔系迟到一分钟，系迟到一个信号。",
    "spokenText": "你唔系迟到一分钟，系迟到一个信号。",
    "choices": [
      "可靠性问题",
      "天气问题",
      "菜单问题",
      "字音问题"
    ],
    "answerIndex": 0,
    "explanation": "迟到本身小，但传递了可靠性信号。",
    "theme": "信号意识",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "信号意识",
    "pronunciationHint": "nei5 m4 hai6 ci4 dou3 jat1 fan1 zung1, hai6 ci4 dou3 jat1 go3 seon3 hou6",
    "trainingModule": "reviewMix",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 43,
    "prompt": "这句反映什么困难？",
    "cantoneseText": "你讲得越客气，我越唔知你真正想点。",
    "spokenText": "你讲得越客气，我越唔知你真正想点。",
    "choices": [
      "客套掩盖真实意图",
      "对方声音太低",
      "粤拼太复杂",
      "场地太吵"
    ],
    "answerIndex": 0,
    "explanation": "过度客气有时会让真实意图更不清楚。",
    "theme": "客套/意图",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "客套/意图",
    "pronunciationHint": "nei5 gong2 dak1 jyut6 haak3 hei3, ngo5 jyut6 m4 zi1 nei5 zan1 zing3 soeng2 dim2",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《花样年华》",
    "movieNote": "受《花样年华》一类港片场景启发，句子为原创。"
  },
  {
    "id": 44,
    "prompt": "较稳的转译是？",
    "cantoneseText": "将港片句“你咁讲我好难做”转成会议表达，最好是？",
    "spokenText": "将港片句“你咁讲我好难做”转成会议表达，最好是？",
    "choices": [
      "这会影响我方推进",
      "你真系玩我",
      "我而家走先",
      "大家饮茶啦"
    ],
    "answerIndex": 0,
    "explanation": "把情绪翻成业务影响，更容易被接住。",
    "theme": "情绪转译",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "情绪转译",
    "pronunciationHint": "nei5 gam2 gong2 ngo5 hou2 naan4 zou6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 02",
    "movieTitle": "《喜剧之王》",
    "movieNote": "受《喜剧之王》一类港片场景启发，句子为原创。",
    "workplaceTip": "把个人压力转成项目影响。"
  },
  {
    "id": 45,
    "prompt": "它最强调什么？",
    "cantoneseText": "场景：电话里只说“听朝见，唔好迟。”",
    "spokenText": "场景：电话里只说“听朝见，唔好迟。”",
    "choices": [
      "准时和严肃性",
      "随便聊天",
      "取消计划",
      "加点甜品"
    ],
    "answerIndex": 0,
    "explanation": "短电话加“不迟到”，说明事情严肃、时间重要。",
    "theme": "时间压力",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "时间压力",
    "pronunciationHint": "ting1 ziu1 gin3, m4 hou2 ci4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 02",
    "movieTitle": "《警察故事》",
    "movieNote": "受《警察故事》一类港片场景启发，句子为原创。"
  },
  {
    "id": 46,
    "prompt": "这句在拆解什么？",
    "cantoneseText": "你话“原则上可以”，我想知边个原则。",
    "spokenText": "你话“原则上可以”，我想知边个原则。",
    "choices": [
      "模糊许可",
      "正式拒绝",
      "粤语发音",
      "电影票价"
    ],
    "answerIndex": 0,
    "explanation": "“原则上可以”听似同意，但边界不清。",
    "theme": "模糊许可",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "模糊许可",
    "pronunciationHint": "nei5 waa6 jyun4 zak1 soeng6 ho2 ji5, ngo5 soeng2 zi1 bin1 go3 jyun4 zak1",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 47,
    "prompt": "这题最像 Day 02 的哪个训练目标？",
    "cantoneseText": "复盘：听粤语不只听词，还要听停顿、转折、称呼。",
    "spokenText": "复盘：听粤语不只听词，还要听停顿、转折、称呼。",
    "choices": [
      "语境综合判断",
      "只背入声规则",
      "只记电影名",
      "只看选项长度"
    ],
    "answerIndex": 0,
    "explanation": "Day 02 的目标是从单句字面升级到语境综合判断。",
    "theme": "综合判断",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "综合判断",
    "pronunciationHint": "teng1 jyut6 jyu5 m4 zi2 teng1 ci4, zung6 jiu3 teng1 ting4 deon6, zyun2 zit3, cing1 fu1",
    "trainingModule": "reviewMix",
    "dayTag": "Day 02",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 48,
    "prompt": "更可能隐藏了什么？",
    "cantoneseText": "如果一句“得啦”后面跟长沉默，通常要小心什么？",
    "spokenText": "如果一句“得啦”后面跟长沉默，通常要小心什么？",
    "choices": [
      "勉强接受但未放下",
      "强烈兴奋",
      "完全没事",
      "准备点歌"
    ],
    "answerIndex": 0,
    "explanation": "“得啦”加沉默，可能是暂时收住，不等于真的没情绪。",
    "theme": "语气复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "语气复盘",
    "pronunciationHint": "dak1 laa1",
    "trainingModule": "reviewMix",
    "dayTag": "Day 02",
    "movieTitle": "《花样年华》",
    "movieNote": "受《花样年华》一类港片场景启发，句子为原创。"
  },
  {
    "id": 49,
    "prompt": "这句提醒识别什么？",
    "cantoneseText": "你以为佢让步，其实佢只系换咗讲法。",
    "spokenText": "你以为佢让步，其实佢只系换咗讲法。",
    "choices": [
      "包装后的坚持",
      "真正退出",
      "语音播报",
      "点餐习惯"
    ],
    "answerIndex": 0,
    "explanation": "换说法不一定是让步，可能只是把原立场包装得柔一点。",
    "theme": "包装立场",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "包装立场",
    "pronunciationHint": "nei5 ji5 wai4 keoi5 joeng6 bou6, kei4 sat6 keoi5 zi2 hai6 wun6 zo2 gong2 faat3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 02",
    "movieTitle": "《窃听风云》",
    "movieNote": "受《窃听风云》一类港片场景启发，句子为原创。"
  },
  {
    "id": 50,
    "prompt": "最稳的理解是？",
    "cantoneseText": "最后一题：你听到“唔系唔得”，第一反应应该是什么？",
    "spokenText": "最后一题：你听到“唔系唔得”，第一反应应该是什么？",
    "choices": [
      "有条件地可以",
      "完全不可以",
      "只是问天气",
      "已经无条件通过"
    ],
    "answerIndex": 0,
    "explanation": "“唔系唔得”不是直接答应，而是有条件、有保留地可以谈。",
    "theme": "常用句意",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "常用句意",
    "pronunciationHint": "m4 hai6 m4 dak1",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 02",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。"
  }
];

const movieTrainingChapterTitle = '15天港片粤语训练 Day 01';

const movieTrainingQuestions = [
  {
    "id": 1,
    "prompt": "这句最核心的意思是？",
    "cantoneseText": "唔该，等我讲埋先。",
    "spokenText": "唔该，等我讲埋先。",
    "choices": [
      "先让我讲完这层理解",
      "帮我买杯茶",
      "请你快一点",
      "别再提这事"
    ],
    "answerIndex": 0,
    "explanation": "“讲埋先”是先讲完，再让对方判断。",
    "theme": "句意理解",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "句意理解",
    "pronunciationHint": "m4 goi1, dang2 ngo5 gong2 maai4 sin1",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 01",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 2,
    "prompt": "说话人真正卡住的是？",
    "cantoneseText": "你而家咁讲，我好难接。",
    "spokenText": "你而家咁讲，我好难接。",
    "choices": [
      "想换个地点这个判断",
      "对方说法难承接",
      "准备马上认同这种处理",
      "已经完全听懂这个方向"
    ],
    "answerIndex": 1,
    "explanation": "“好难接”不是接物件，而是话题或场面难接下去。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "nei5 ji4 gaa1 gam2 gong2, ngo5 hou2 naan4 zip3",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《喜剧之王》",
    "movieNote": "受《喜剧之王》一类港片场景启发，句子为原创。"
  },
  {
    "id": 3,
    "prompt": "最合适的理解是？",
    "cantoneseText": "呢件事，唔好急住定论。",
    "spokenText": "呢件事，唔好急住定论。",
    "choices": [
      "别再讨论下去这条线索",
      "先直接表态这种处理",
      "暂时别下结论这条线索",
      "马上通知所有人"
    ],
    "answerIndex": 2,
    "explanation": "“定论”是下判断；这句要求先保留判断。",
    "theme": "句意理解",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "句意理解",
    "pronunciationHint": "ni1 gin6 si6, m4 hou2 gap1 zyu6 ding6 leon6",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 4,
    "prompt": "这句在质疑什么？",
    "cantoneseText": "你系咪听到一半就判咗我输？",
    "spokenText": "你系咪听到一半就判咗我输？",
    "choices": [
      "对方太慢回应这种处理",
      "对方想换话题",
      "对方没有兴趣",
      "对方过早判断"
    ],
    "answerIndex": 3,
    "explanation": "重点是对方未听完整就先入为主。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "nei5 hai6 mai6 teng1 dou3 jat1 bun3 zau6 pun3 zo2 ngo5 syu1",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 5,
    "prompt": "这句区分了什么？",
    "cantoneseText": "我唔系推搪，系要时间核实。",
    "spokenText": "我唔系推搪，系要时间核实。",
    "choices": [
      "逃避与核实这层理解",
      "赞成与反对",
      "付款与找数",
      "开会与散会"
    ],
    "answerIndex": 0,
    "explanation": "“推搪”是敷衍拖延；核实是为了确认事实。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "ngo5 m4 hai6 teoi1 tong4, hai6 jiu3 si4 gaan3 hat6 sat6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "开会时可用来避免被误解成拖延。"
  },
  {
    "id": 6,
    "prompt": "这题训练哪种差别？",
    "cantoneseText": "听辨：先听“生 sang1”和“心 sam1”。",
    "spokenText": "听辨：先听“生 sang1”和“心 sam1”。",
    "choices": [
      "一声和六声这层理解这个判断",
      "-ng 和 -m 尾音",
      "长音和短音这条线索这种处理",
      "轻声和儿化这种处理这个方向"
    ],
    "answerIndex": 1,
    "explanation": "sang1 收 -ng，sam1 收 -m；普通话母语者容易忽略尾音。",
    "theme": "声调读音",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "声调读音",
    "pronunciationHint": "sang1 / sam1",
    "phoneticFocus": "声调读音",
    "trainingModule": "toneEar",
    "dayTag": "Day 01",
    "movieTitle": "《重庆森林》",
    "movieNote": "受《重庆森林》一类港片场景启发，句子为原创。"
  },
  {
    "id": 7,
    "prompt": "这句最提醒什么？",
    "cantoneseText": "唔好将客气当承诺。",
    "spokenText": "唔好将客气当承诺。",
    "choices": [
      "客气就是答应这个判断",
      "不礼貌才拒绝这条线索",
      "礼貌不等于同意",
      "承诺不用说清这个方向"
    ],
    "answerIndex": 2,
    "explanation": "很多港式场面话会客气，但不代表已经答应。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "m4 hou2 zoeng1 haak3 hei3 dong3 sing4 nok6",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《花样年华》",
    "movieNote": "受《花样年华》一类港片场景启发，句子为原创。"
  },
  {
    "id": 8,
    "prompt": "说话人关注的是？",
    "cantoneseText": "呢个讲法，听落好顺，但唔完整。",
    "spokenText": "呢个讲法，听落好顺，但唔完整。",
    "choices": [
      "语速太慢这条线索",
      "声音太低这种处理",
      "态度太硬这个方向",
      "信息不完整"
    ],
    "answerIndex": 3,
    "explanation": "“听落好顺”不代表信息充分，重点在缺漏。",
    "theme": "句意理解",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "句意理解",
    "pronunciationHint": "ni1 go3 gong2 faat3, teng1 lok6 hou2 seon6, daan6 m4 jyun4 zing2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 01",
    "movieTitle": "《窃听风云》",
    "movieNote": "受《窃听风云》一类港片场景启发，句子为原创。",
    "workplaceTip": "汇报时可要求补证据，不只听顺不顺。"
  },
  {
    "id": 9,
    "prompt": "这句感觉到什么？",
    "cantoneseText": "你咁样问，似系想我自己认。",
    "spokenText": "你咁样问，似系想我自己认。",
    "choices": [
      "对方在诱导这层理解",
      "对方在帮忙",
      "对方在道歉",
      "对方在祝贺"
    ],
    "answerIndex": 0,
    "explanation": "“似系想我自己认”说明问题带压力，像诱导承认。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "nei5 gam2 joeng2 man6, ci5 hai6 soeng2 ngo5 zi6 gei2 jing6",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 10,
    "prompt": "更像哪种处理顺序？",
    "cantoneseText": "我哋先对齐件事，再讲责任。",
    "spokenText": "我哋先对齐件事，再讲责任。",
    "choices": [
      "先处罚再解释这个方向",
      "先厘清事实这个判断",
      "先暂停沟通这个判断",
      "先照顾面子这条线索"
    ],
    "answerIndex": 1,
    "explanation": "先对齐事实，再分责任，是更稳的职场沟通顺序。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "ngo5 dei6 sin1 deoi3 cai4 gin6 si6, zoi3 gong2 zaak3 jam6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "适合会议复盘和跨部门对齐。"
  },
  {
    "id": 11,
    "prompt": "关键原因是？",
    "cantoneseText": "听辨：“急 gap1”最后为什么短？",
    "spokenText": "听辨：“急 gap1”最后为什么短？",
    "choices": [
      "声母很重这层理解",
      "音量很小这个判断",
      "-p 入声尾",
      "语速太快这种处理"
    ],
    "answerIndex": 2,
    "explanation": "gap1 的 -p 是入声尾，音节会短促收住。",
    "theme": "声调读音",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "声调读音",
    "pronunciationHint": "gap1",
    "phoneticFocus": "声调读音",
    "trainingModule": "toneEar",
    "dayTag": "Day 01",
    "movieTitle": "《警察故事》",
    "movieNote": "受《警察故事》一类港片场景启发，句子为原创。"
  },
  {
    "id": 12,
    "prompt": "这句真正批评的是？",
    "cantoneseText": "你唔系冇时间，系冇排优先。",
    "spokenText": "你唔系冇时间，系冇排优先。",
    "choices": [
      "时间太早这个判断",
      "会议太多这条线索",
      "表达太客气",
      "优先级管理"
    ],
    "answerIndex": 3,
    "explanation": "这句把问题从“没时间”转到“没安排优先级”。",
    "theme": "句意理解",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "句意理解",
    "pronunciationHint": "nei5 m4 hai6 mou5 si4 gaan3, hai6 mou5 paai4 jau1 sin1",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 01",
    "movieTitle": "《金鸡》",
    "movieNote": "受《金鸡》一类港片场景启发，句子为原创。",
    "workplaceTip": "适合提醒任务排序，不必上来就指责。"
  },
  {
    "id": 13,
    "prompt": "最准确的反馈是？",
    "cantoneseText": "我听到你嘅结论，未听到根据。",
    "spokenText": "我听到你嘅结论，未听到根据。",
    "choices": [
      "需要补依据这层理解",
      "说话声音不够",
      "结论太晚出现",
      "对方没有立场"
    ],
    "answerIndex": 0,
    "explanation": "这是职场里很实用的表达：不是否定结论，而是要依据。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "ngo5 teng1 dou2 nei5 ge3 git3 leon6, mei6 teng1 dou2 gan1 geoi3",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 01",
    "movieTitle": "《窃听风云》",
    "movieNote": "受《窃听风云》一类港片场景启发，句子为原创。",
    "workplaceTip": "可用于复盘、方案评审和风险讨论。"
  },
  {
    "id": 14,
    "prompt": "它可能是什么意思？",
    "cantoneseText": "呢句“都得啦”，要听语气。",
    "spokenText": "呢句“都得啦”，要听语气。",
    "choices": [
      "一定强烈支持这种处理",
      "可能勉强接受",
      "完全无法理解",
      "正在认真夸奖"
    ],
    "answerIndex": 1,
    "explanation": "“都得啦”可是真接受，也可能是勉强；要听语气。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "dou1 dak1 laa1",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《喜剧之王》",
    "movieNote": "受《喜剧之王》一类港片场景启发，句子为原创。"
  },
  {
    "id": 15,
    "prompt": "这句区分了什么？",
    "cantoneseText": "你讲得冇错，但唔代表啱做。",
    "spokenText": "你讲得冇错，但唔代表啱做。",
    "choices": [
      "声音与速度这个方向",
      "唱歌与演戏",
      "事实与选择",
      "时间与地点"
    ],
    "answerIndex": 2,
    "explanation": "“冇错”是逻辑上没错，“啱做”是行动上合适。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "nei5 gong2 dak1 mou5 co3, daan6 m4 doi6 biu2 ngaam1 zou6",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 16,
    "prompt": "他在问什么？",
    "cantoneseText": "场景：茶餐厅人多，伙计说“搭枱得唔得？”",
    "spokenText": "场景：茶餐厅人多，伙计说“搭枱得唔得？”",
    "choices": [
      "要不要加冰这层理解",
      "要不要外卖",
      "要不要唱歌",
      "要不要拼桌"
    ],
    "answerIndex": 3,
    "explanation": "“搭枱”是拼桌，茶餐厅高峰期常见。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "daap3 toi2 dak1 m4 dak1",
    "trainingModule": "sceneInference",
    "dayTag": "Day 01",
    "movieTitle": "《食神》",
    "movieNote": "受《食神》一类港片场景启发，句子为原创。"
  },
  {
    "id": 17,
    "prompt": "这句和“当你同意”相比如何？",
    "cantoneseText": "你唔出声，我当你未准备好。",
    "spokenText": "你唔出声，我当你未准备好。",
    "choices": [
      "更尊重沉默这层理解",
      "更强行推进",
      "更像威胁这种处理",
      "更像催账这个方向"
    ],
    "answerIndex": 0,
    "explanation": "它不把沉默当同意，而是当作准备不足。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "nei5 m4 ceot1 seng1, ngo5 dong3 nei5 mei6 zeon2 bei6 hou2",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "会议里比“你不说我就当同意”更稳。"
  },
  {
    "id": 18,
    "prompt": "主要差别是？",
    "cantoneseText": "听辨：“诗 si1”和“事 si6”差在哪？",
    "spokenText": "听辨：“诗 si1”和“事 si6”差在哪？",
    "choices": [
      "声母不同这条线索",
      "声调高低",
      "韵母不同",
      "字数不同"
    ],
    "answerIndex": 1,
    "explanation": "si1 高平，si6 较低；声调变了，意思也变。",
    "theme": "声调读音",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "声调读音",
    "pronunciationHint": "si1 / si6",
    "phoneticFocus": "声调读音",
    "trainingModule": "toneEar",
    "dayTag": "Day 01",
    "movieTitle": "《重庆森林》",
    "movieNote": "受《重庆森林》一类港片场景启发，句子为原创。"
  },
  {
    "id": 19,
    "prompt": "说话人捕捉到什么？",
    "cantoneseText": "你话冇所谓，但你停咗两秒。",
    "spokenText": "你话冇所谓，但你停咗两秒。",
    "choices": [
      "语速太快这种处理",
      "发音不清这个方向",
      "停顿透露情绪",
      "话题已结束这个判断"
    ],
    "answerIndex": 2,
    "explanation": "停顿可能暴露犹豫或不满，和“冇所谓”冲突。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "nei5 waa6 mou5 so2 wai6, daan6 nei5 ting4 zo2 loeng5 miu5",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《花样年华》",
    "movieNote": "受《花样年华》一类港片场景启发，句子为原创。"
  },
  {
    "id": 20,
    "prompt": "职场里更像什么反馈？",
    "cantoneseText": "呢个方案唔系差，系未落地。",
    "spokenText": "呢个方案唔系差，系未落地。",
    "choices": [
      "完全否定方案这个方向",
      "建议取消会议这层理解",
      "表示已经通过这个判断",
      "要求补执行细节"
    ],
    "answerIndex": 3,
    "explanation": "它保留方案价值，但要求补落地路径。",
    "theme": "句意理解",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "句意理解",
    "pronunciationHint": "ni1 go3 fong1 on3 m4 hai6 caa1, hai6 mei6 lok6 dei6",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 01",
    "movieTitle": "《金鸡》",
    "movieNote": "受《金鸡》一类港片场景启发，句子为原创。",
    "workplaceTip": "适合给方案反馈，避免一句“差”打死。"
  },
  {
    "id": 21,
    "prompt": "更像哪类场景？",
    "cantoneseText": "场景：街口有人说“行快两步，咪望返转头。”",
    "spokenText": "场景：街口有人说“行快两步，咪望返转头。”",
    "choices": [
      "赶路避开麻烦这层理解",
      "试菜现场这个判断",
      "开会签到这条线索",
      "朋友庆生这种处理"
    ],
    "answerIndex": 0,
    "explanation": "“行快两步”加“别回头看”像街头紧张场面。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "haang4 faai3 loeng5 bou6, mai5 mong6 faan1 zyun3 tau4",
    "trainingModule": "sceneInference",
    "dayTag": "Day 01",
    "movieTitle": "《旺角卡门》",
    "movieNote": "受《旺角卡门》一类港片场景启发，句子为原创。"
  },
  {
    "id": 22,
    "prompt": "这句在平衡什么？",
    "cantoneseText": "我明你急，但唔可以跳步骤。",
    "spokenText": "我明你急，但唔可以跳步骤。",
    "choices": [
      "价钱和质量这个判断",
      "速度和流程",
      "天气和地点",
      "歌单和音量"
    ],
    "answerIndex": 1,
    "explanation": "承认对方急，但强调流程不能省。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "ngo5 ming4 nei5 gap1, daan6 m4 ho2 ji5 tiu3 bou6 zeoi6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "可用于项目推进和风控沟通。"
  },
  {
    "id": 23,
    "prompt": "重点是？",
    "cantoneseText": "听辨：“七 cat1”尾音为什么收住？",
    "spokenText": "听辨：“七 cat1”尾音为什么收住？",
    "choices": [
      "-m 鼻音尾这条线索",
      "读成轻声这种处理",
      "-t 入声尾",
      "没有声调这层理解"
    ],
    "answerIndex": 2,
    "explanation": "cat1 的 -t 收尾短促，是粤语入声特征。",
    "theme": "声调读音",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "声调读音",
    "pronunciationHint": "cat1",
    "phoneticFocus": "声调读音",
    "trainingModule": "toneEar",
    "dayTag": "Day 01",
    "movieTitle": "《警察故事》",
    "movieNote": "受《警察故事》一类港片场景启发，句子为原创。"
  },
  {
    "id": 24,
    "prompt": "说话人怀疑什么？",
    "cantoneseText": "你而家系解释，定系重新包装？",
    "spokenText": "你而家系解释，定系重新包装？",
    "choices": [
      "对方发音太重这种处理",
      "对方没有出现这个方向",
      "对方已经让步这层理解",
      "对方在美化说法"
    ],
    "answerIndex": 3,
    "explanation": "“重新包装”暗示换说法掩盖原问题。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "nei5 ji4 gaa1 hai6 gaai2 sik1, ding6 hai6 cung4 san1 baau1 zong1",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《窃听风云》",
    "movieNote": "受《窃听风云》一类港片场景启发，句子为原创。"
  },
  {
    "id": 25,
    "prompt": "最可能发生在哪？",
    "cantoneseText": "场景：厨房里有人喊“火候过咗，快手啲。”",
    "spokenText": "场景：厨房里有人喊“火候过咗，快手啲。”",
    "choices": [
      "厨房出餐这层理解",
      "警署审讯",
      "码头谈判",
      "戏院散场"
    ],
    "answerIndex": 0,
    "explanation": "“火候”和“快手啲”很像厨房赶出餐。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "fo2 hau6 gwo3 zo2, faai3 sau2 di1",
    "trainingModule": "sceneInference",
    "dayTag": "Day 01",
    "movieTitle": "《食神》",
    "movieNote": "受《食神》一类港片场景启发，句子为原创。"
  },
  {
    "id": 26,
    "prompt": "它把问题升级到哪层？",
    "cantoneseText": "呢个唔系小问题，系会影响信任。",
    "spokenText": "呢个唔系小问题，系会影响信任。",
    "choices": [
      "个人口味这层理解",
      "信任基础",
      "交通安排",
      "点餐习惯"
    ],
    "answerIndex": 1,
    "explanation": "重点不是问题大小，而是影响信任。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "ni1 go3 m4 hai6 siu2 man6 tai4, hai6 wui5 jing2 hoeng2 seon3 jam6",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 27,
    "prompt": "普通话母语者容易怎样？",
    "cantoneseText": "听辨：“唔 m4”难在哪里？",
    "spokenText": "听辨：“唔 m4”难在哪里？",
    "choices": [
      "读成 ba这个判断",
      "读成 la",
      "读成 wu",
      "读成 go"
    ],
    "answerIndex": 2,
    "explanation": "“唔 m4”几乎是鼻音单独成节，不能套普通话 wu。",
    "theme": "句意理解",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "句意理解",
    "pronunciationHint": "m4",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 01",
    "movieTitle": "《喜剧之王》",
    "movieNote": "受《喜剧之王》一类港片场景启发，句子为原创。"
  },
  {
    "id": 28,
    "prompt": "这句要求的是？",
    "cantoneseText": "你可以唔同意，但要讲得清。",
    "spokenText": "你可以唔同意，但要讲得清。",
    "choices": [
      "必须马上同意这条线索",
      "声音要更大这种处理",
      "先别表达意见",
      "反对要有理由"
    ],
    "answerIndex": 3,
    "explanation": "它允许不同意，但要求表达清楚、有依据。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "nei5 ho2 ji5 m4 tung4 ji3, daan6 jiu3 gong2 dak1 cing1",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "适合团队讨论，鼓励高质量反对。"
  },
  {
    "id": 29,
    "prompt": "这句更像什么安排？",
    "cantoneseText": "场景：雨夜电话里说“你到咗先好讲。”",
    "spokenText": "场景：雨夜电话里说“你到咗先好讲。”",
    "choices": [
      "到场后再谈这层理解",
      "现在立刻公开",
      "取消所有计划",
      "先去买电影票"
    ],
    "answerIndex": 0,
    "explanation": "“到咗先”是到了以后再说，常用于不想电话里讲清。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "nei5 dou3 zo2 sin1 hou2 gong2",
    "trainingModule": "sceneInference",
    "dayTag": "Day 01",
    "movieTitle": "《重庆森林》",
    "movieNote": "受《重庆森林》一类港片场景启发，句子为原创。"
  },
  {
    "id": 30,
    "prompt": "这句想降低什么？",
    "cantoneseText": "我唔系针对你，系针对件事。",
    "spokenText": "我唔系针对你，系针对件事。",
    "choices": [
      "会议长度这个方向",
      "个人对立感",
      "茶餐厅音量",
      "电影票价格"
    ],
    "answerIndex": 1,
    "explanation": "把人和事分开，可减少防御心理。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "ngo5 m4 hai6 zam1 deoi3 nei5, hai6 zam1 deoi3 gin6 si6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "反馈时先分开人和事，冲突会小很多。"
  },
  {
    "id": 31,
    "prompt": "重点是？",
    "cantoneseText": "听辨：“我 ngo5”开头提醒什么？",
    "spokenText": "听辨：“我 ngo5”开头提醒什么？",
    "choices": [
      "p- 声母这层理解",
      "t- 韵尾这个判断",
      "ng- 声母",
      "儿化音这种处理"
    ],
    "answerIndex": 2,
    "explanation": "ngo5 的 ng- 对普通话母语者容易漏掉。",
    "theme": "声调读音",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "声调读音",
    "pronunciationHint": "ngo5",
    "phoneticFocus": "声调读音",
    "trainingModule": "toneEar",
    "dayTag": "Day 01",
    "movieTitle": "《花样年华》",
    "movieNote": "受《花样年华》一类港片场景启发，句子为原创。"
  },
  {
    "id": 32,
    "prompt": "说话人要什么？",
    "cantoneseText": "你话“迟啲”，但我要一个时间。",
    "spokenText": "你话“迟啲”，但我要一个时间。",
    "choices": [
      "更大声解释这个判断",
      "换个地点这条线索",
      "重新点餐这种处理",
      "具体时间点"
    ],
    "answerIndex": 3,
    "explanation": "“迟啲”太模糊；职场上要落到具体时间。",
    "theme": "句意理解",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "句意理解",
    "pronunciationHint": "nei5 waa6 ci4 di1, daan6 ngo5 jiu3 jat1 go3 si4 gaan3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 01",
    "movieTitle": "《金鸡》",
    "movieNote": "受《金鸡》一类港片场景启发，句子为原创。",
    "workplaceTip": "把模糊承诺改成可执行时间。"
  },
  {
    "id": 33,
    "prompt": "他为什么压低信息？",
    "cantoneseText": "场景：有人低声说“呢度唔方便讲。”",
    "spokenText": "场景：有人低声说“呢度唔方便讲。”",
    "choices": [
      "环境不适合谈这层理解",
      "忘记了内容这种处理",
      "准备唱歌这个方向",
      "想买外卖这层理解"
    ],
    "answerIndex": 0,
    "explanation": "“唔方便讲”通常是环境、身份或时机不适合。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "ni1 dou6 m4 fong1 bin6 gong2",
    "trainingModule": "sceneInference",
    "dayTag": "Day 01",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 34,
    "prompt": "这句听起来像？",
    "cantoneseText": "你讲得好满，我反而想问风险。",
    "spokenText": "你讲得好满，我反而想问风险。",
    "choices": [
      "盲目支持这种处理",
      "要求看风险",
      "想结束会议",
      "只关心语气"
    ],
    "answerIndex": 1,
    "explanation": "说得太满，反而需要看风险和边界。",
    "theme": "句意理解",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "句意理解",
    "pronunciationHint": "nei5 gong2 dak1 hou2 mun5, ngo5 faan2 ji4 soeng2 man6 fung1 him2",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "方案越漂亮，越要问风险。"
  },
  {
    "id": 35,
    "prompt": "关键是？",
    "cantoneseText": "听辨：“食 sik6”短促在哪里？",
    "spokenText": "听辨：“食 sik6”短促在哪里？",
    "choices": [
      "鼻音开头这个方向",
      "没有声母这层理解",
      "-k 入声尾",
      "读成轻声这条线索"
    ],
    "answerIndex": 2,
    "explanation": "sik6 的 -k 收尾明显，读感短促。",
    "theme": "声调读音",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "声调读音",
    "pronunciationHint": "sik6",
    "phoneticFocus": "声调读音",
    "trainingModule": "toneEar",
    "dayTag": "Day 01",
    "movieTitle": "《食神》",
    "movieNote": "受《食神》一类港片场景启发，句子为原创。"
  },
  {
    "id": 36,
    "prompt": "潜台词是什么？",
    "cantoneseText": "你笑住讲，唔代表我笑住收。",
    "spokenText": "你笑住讲，唔代表我笑住收。",
    "choices": [
      "双方都很开心这层理解",
      "对方已经同意这个判断",
      "事情已经结束这条线索",
      "玩笑也可能伤人"
    ],
    "answerIndex": 3,
    "explanation": "对方用玩笑说，不代表听的人也会轻松接受。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "nei5 siu3 zyu6 gong2, m4 doi6 biu2 ngo5 siu3 zyu6 sau1",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《喜剧之王》",
    "movieNote": "受《喜剧之王》一类港片场景启发，句子为原创。"
  },
  {
    "id": 37,
    "prompt": "最可能是什么状态？",
    "cantoneseText": "场景：有人说“今晚唔好散住，仲有数要计。”",
    "spokenText": "场景：有人说“今晚唔好散住，仲有数要计。”",
    "choices": [
      "事情还没算清这层理解",
      "大家要去唱歌",
      "准备正式开饭",
      "已经完全和解"
    ],
    "answerIndex": 0,
    "explanation": "“有数要计”可指账或恩怨还没算清。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "gam1 maan5 m4 hou2 saan3 zyu6, zung6 jau5 sou3 jiu3 gai3",
    "trainingModule": "sceneInference",
    "dayTag": "Day 01",
    "movieTitle": "《旺角卡门》",
    "movieNote": "受《旺角卡门》一类港片场景启发，句子为原创。"
  },
  {
    "id": 38,
    "prompt": "这句还缺什么？",
    "cantoneseText": "你畀我嘅唔系答案，系方向。",
    "spokenText": "你畀我嘅唔系答案，系方向。",
    "choices": [
      "更多称赞这条线索",
      "执行细节",
      "更大声音",
      "更多表情"
    ],
    "answerIndex": 1,
    "explanation": "方向有价值，但还不是可执行答案。",
    "theme": "句意理解",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "句意理解",
    "pronunciationHint": "nei5 bei2 ngo5 ge3 m4 hai6 daap3 on3, hai6 fong1 hoeng3",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 01",
    "movieTitle": "《窃听风云》",
    "movieNote": "受《窃听风云》一类港片场景启发，句子为原创。",
    "workplaceTip": "适合把战略话术拉回行动清单。"
  },
  {
    "id": 39,
    "prompt": "为什么？",
    "cantoneseText": "呢句“算啦”未必真系算。",
    "spokenText": "呢句“算啦”未必真系算。",
    "choices": [
      "一定完全放下这种处理",
      "只是问价格这个方向",
      "可能压住不满",
      "表示想唱歌这个判断"
    ],
    "answerIndex": 2,
    "explanation": "“算啦”可是真放下，也可能是暂时不追。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "syun3 laa1",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《花样年华》",
    "movieNote": "受《花样年华》一类港片场景启发，句子为原创。"
  },
  {
    "id": 40,
    "prompt": "更像哪类安排？",
    "cantoneseText": "场景：有人说“你企我后面，唔好出声。”",
    "spokenText": "场景：有人说“你企我后面，唔好出声。”",
    "choices": [
      "公开演讲这个方向",
      "茶餐厅点单",
      "会议投票这个判断",
      "暗中观察这种处理"
    ],
    "answerIndex": 3,
    "explanation": "“企我后面”“唔好出声”像低调观察或保护。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "nei5 kei5 ngo5 hau6 min6, m4 hou2 ceot1 seng1",
    "trainingModule": "sceneInference",
    "dayTag": "Day 01",
    "movieTitle": "《警察故事》",
    "movieNote": "受《警察故事》一类港片场景启发，句子为原创。"
  },
  {
    "id": 41,
    "prompt": "主要在？",
    "cantoneseText": "听辨：“三 saam1”和“心 sam1”差别是？",
    "spokenText": "听辨：“三 saam1”和“心 sam1”差别是？",
    "choices": [
      "元音长短这层理解",
      "声母不同",
      "声调相反",
      "语气不同"
    ],
    "answerIndex": 0,
    "explanation": "saam1 较长开，sam1 较短收；别只套普通话。",
    "theme": "声调读音",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "声调读音",
    "pronunciationHint": "saam1 / sam1",
    "phoneticFocus": "声调读音",
    "trainingModule": "toneEar",
    "dayTag": "Day 01",
    "movieTitle": "《重庆森林》",
    "movieNote": "受《重庆森林》一类港片场景启发，句子为原创。"
  },
  {
    "id": 42,
    "prompt": "这句分开了什么？",
    "cantoneseText": "我接受你嘅原因，但唔接受做法。",
    "spokenText": "我接受你嘅原因，但唔接受做法。",
    "choices": [
      "价钱和数量这个判断",
      "动机和行为",
      "地点和天气",
      "声调和声母"
    ],
    "answerIndex": 1,
    "explanation": "理解原因，不等于认同行动。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "ngo5 zip3 sau6 nei5 ge3 jyun4 jan1, daan6 m4 zip3 sau6 zou6 faat3",
    "trainingModule": "reviewMix",
    "dayTag": "Day 01",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 43,
    "prompt": "“执”在这里接近？",
    "cantoneseText": "场景：收工前有人说“今日到呢度，听朝再执。”",
    "spokenText": "场景：收工前有人说“今日到呢度，听朝再执。”",
    "choices": [
      "买票入场这条线索",
      "提高音量",
      "整理处理",
      "准备点菜"
    ],
    "answerIndex": 2,
    "explanation": "“执”可指整理、处理、收拾，语境是明天继续处理。",
    "theme": "句意理解",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "句意理解",
    "pronunciationHint": "gam1 jat6 dou3 ni1 dou6, ting1 ziu1 zoi3 zap1",
    "trainingModule": "phraseMeaning",
    "dayTag": "Day 01",
    "movieTitle": "《金鸡》",
    "movieNote": "受《金鸡》一类港片场景启发，句子为原创。"
  },
  {
    "id": 44,
    "prompt": "核心问题是？",
    "cantoneseText": "你唔系冇讲，系讲得太迟。",
    "spokenText": "你唔系冇讲，系讲得太迟。",
    "choices": [
      "声音太轻这种处理",
      "态度太好",
      "内容太短",
      "时机太晚"
    ],
    "answerIndex": 3,
    "explanation": "同一句话，讲迟了就失去价值。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "nei5 m4 hai6 mou5 gong2, hai6 gong2 dak1 taai3 ci4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 45,
    "prompt": "较稳的职场表达是？",
    "cantoneseText": "如果要同老板讲，这句应怎样转？“你咁搞我好难做。”",
    "spokenText": "如果要同老板讲，这句应怎样转？“你咁搞我好难做。”",
    "choices": [
      "这样会影响交付这层理解",
      "你真系好麻烦这层理解",
      "我完全不做了这个判断",
      "大家今晚散场这条线索"
    ],
    "answerIndex": 0,
    "explanation": "把情绪句转成影响交付，更容易被接住。",
    "theme": "职场迁移",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "职场迁移",
    "pronunciationHint": "nei5 gam2 gaau2 ngo5 hou2 naan4 zou6",
    "trainingModule": "workplaceTransfer",
    "dayTag": "Day 01",
    "movieTitle": "《喜剧之王》",
    "movieNote": "受《喜剧之王》一类港片场景启发，句子为原创。",
    "workplaceTip": "把个人委屈转为业务影响，是职场粤语训练重点。"
  },
  {
    "id": 46,
    "prompt": "最像什么判断？",
    "cantoneseText": "场景：有人讲“先唔好报警，等多一个电话。”",
    "spokenText": "场景：有人讲“先唔好报警，等多一个电话。”",
    "choices": [
      "已经完全安全这层理解",
      "再等关键信息",
      "只是点外卖这条线索",
      "准备庆祝成功"
    ],
    "answerIndex": 1,
    "explanation": "“等多一个电话”说明还有关键消息未到。",
    "theme": "场景推断",
    "difficulty": "挑战",
    "questionType": "scene",
    "skillTag": "场景推断",
    "pronunciationHint": "sin1 m4 hou2 bou3 ging2, dang2 do1 jat1 go3 din6 waa2",
    "trainingModule": "sceneInference",
    "dayTag": "Day 01",
    "movieTitle": "《暗战》",
    "movieNote": "受《暗战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 47,
    "prompt": "这题提醒什么？",
    "cantoneseText": "你听到嘅系语气，唔好漏咗内容。",
    "spokenText": "你听到嘅系语气，唔好漏咗内容。",
    "choices": [
      "只要听态度这个判断",
      "只看字幕就好这条线索",
      "语气内容都要听",
      "不用听句子这个方向"
    ],
    "answerIndex": 2,
    "explanation": "港片语气很有戏，但训练时不能只听情绪，要听信息。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "nei5 teng1 dou2 ge3 hai6 jyu5 hei3, m4 hou2 lau6 zo2 noi6 jung4",
    "trainingModule": "reviewMix",
    "dayTag": "Day 01",
    "movieTitle": "《花样年华》",
    "movieNote": "受《花样年华》一类港片场景启发，句子为原创。"
  },
  {
    "id": 48,
    "prompt": "最主要是？",
    "cantoneseText": "听辨：“份 fan6”和“分 fan1”差别是？",
    "spokenText": "听辨：“份 fan6”和“分 fan1”差别是？",
    "choices": [
      "声母不同这条线索",
      "韵尾不同",
      "字数不同",
      "声调不同"
    ],
    "answerIndex": 3,
    "explanation": "fan6 较低，fan1 较高平；声调决定词义。",
    "theme": "声调读音",
    "difficulty": "挑战",
    "questionType": "phonetic",
    "skillTag": "声调读音",
    "pronunciationHint": "fan6 / fan1",
    "phoneticFocus": "声调读音",
    "trainingModule": "toneEar",
    "dayTag": "Day 01",
    "movieTitle": "《无间道》",
    "movieNote": "受《无间道》一类港片场景启发，句子为原创。"
  },
  {
    "id": 49,
    "prompt": "最准确是？",
    "cantoneseText": "最后复盘：对方讲“我冇话唔做。”更可能在强调？",
    "spokenText": "最后复盘：对方讲“我冇话唔做。”更可能在强调？",
    "choices": [
      "没拒绝，但未承诺这层理解",
      "已经马上完成这个方向",
      "完全不想沟通这层理解",
      "正在认真道歉这个判断"
    ],
    "answerIndex": 0,
    "explanation": "“冇话唔做”只是没拒绝，不等于已经承诺完成。",
    "theme": "混合复盘",
    "difficulty": "挑战",
    "questionType": "meaning",
    "skillTag": "混合复盘",
    "pronunciationHint": "ngo5 mou5 waa6 m4 zou6",
    "trainingModule": "reviewMix",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。"
  },
  {
    "id": 50,
    "prompt": "这句最像哪种高质量追问？",
    "cantoneseText": "你讲到咁肯定，我想听多一个例子。",
    "spokenText": "你讲到咁肯定，我想听多一个例子。",
    "choices": [
      "准备马上定案这个方向",
      "要求补充例证这个判断",
      "暗示无需讨论这个判断",
      "只是在表达礼貌"
    ],
    "answerIndex": 1,
    "explanation": "它没有直接否定对方，而是要求再给一个例子来支撑判断。",
    "theme": "语气潜台词",
    "difficulty": "挑战",
    "questionType": "tone",
    "skillTag": "语气潜台词",
    "pronunciationHint": "nei5 gong2 dou3 gam2 hang2 ding6, ngo5 soeng2 teng1 do1 jat1 go3 lai6 zi2",
    "trainingModule": "pragmaticTone",
    "dayTag": "Day 01",
    "movieTitle": "《寒战》",
    "movieNote": "受《寒战》一类港片场景启发，句子为原创。",
    "workplaceTip": "适合会议里追问依据，同时保留对方面子。"
  }
];

const chapters = [
  {
    id: 'movie-training-day-10',
    eyebrow: 'Chapter 15 · 15天训练 Day 10',
    title: movieTrainingDay10ChapterTitle,
    description: '50 道蔡澜式人生智慧训练：从饮食、旅行、人情世故和豁达判断里练粤语语感。',
    questions: movieTrainingDay10Questions,
    recommended: true,
    versionLabel: 'v16',
    tone: '蔡澜、饮食人生、豁达分寸',
    releaseNote: '新增Day10：蔡澜式人生智慧，用饮食和生活态度练粤语判断。'
  },
  {
    id: 'movie-training-day-09',
    eyebrow: 'Chapter 14 · 15天训练 Day 09',
    title: movieTrainingDay09ChapterTitle,
    description: '50 道周润发经典港片气场训练：从容、义气、分寸、场面话和江湖式收场。',
    questions: movieTrainingDay09Questions,
    versionLabel: 'v15',
    tone: '周润发、从容气场、江湖分寸',
    releaseNote: '新增Day09：周润发经典港片气场，练从容、义气、分寸和场面话。'
  },
  {
    id: 'movie-training-day-08',
    eyebrow: 'Chapter 13 · 15天训练 Day 08',
    title: movieTrainingDay08ChapterTitle,
    description: '50 道新闻女王式职场表达训练：事实、立场、话语权、镜头前后和专业边界。',
    questions: movieTrainingDay08Questions,
    versionLabel: 'v14',
    tone: '新闻女王、话语权、专业表达',
    releaseNote: '新增Day08：新闻女王式新闻职场，练事实、立场、话语权和专业表达。'
  },
  {
    id: 'movie-training-day-07',
    eyebrow: 'Chapter 12 · 15天训练 Day 07',
    title: movieTrainingDay07ChapterTitle,
    description: '50 道创世纪式商业谈判训练：愿景、风险、承诺、利益交换和职场落地。',
    questions: movieTrainingDay07Questions,
    versionLabel: 'v13',
    tone: '创世纪、商业谈判、风险承诺',
    releaseNote: '新增Day07：创世纪式商战谈判，练愿景、风险、承诺和利益交换。'
  },
  {
    id: 'movie-training-day-06',
    eyebrow: 'Chapter 11 · 15天训练 Day 06',
    title: movieTrainingDay06ChapterTitle,
    description: '50 道大时代式压力训练：输赢、人性、家庭利益、情绪压迫和风险判断。',
    questions: movieTrainingDay06Questions,
    versionLabel: 'v12',
    tone: '大时代、输赢、人性压力',
    releaseNote: '新增Day06：大时代式人性和压力场，练输赢、情绪和利益冲突。'
  },
  {
    id: 'movie-training-day-05',
    eyebrow: 'Chapter 10 · 15天训练 Day 05',
    title: movieTrainingDay05ChapterTitle,
    description: '50 道男女交往粤语边界训练：暧昧、拒绝、误会、体面表达和亲密关系沟通。',
    questions: movieTrainingDay05Questions,
    versionLabel: 'v11',
    tone: '男女交往、边界、体面拒绝',
    releaseNote: '新增Day05：男女交往粤语边界，从暧昧、误会和拒绝里练语气。'
  },
  {
    id: 'movie-training-day-04',
    eyebrow: 'Chapter 09 · 15天训练 Day 04',
    title: movieTrainingDay04ChapterTitle,
    description: '50 道围绕《男亲女爱》式办公室、黄子华/栋笃笑节奏、港乐情绪和职场边界的语感训练。',
    questions: movieTrainingDay04Questions,
    versionLabel: 'v10',
    tone: '男亲女爱、栋笃笑、职场边界',
    releaseNote: '新增Day04：男亲女爱式办公室嘴仗、黄子华式反差观察、港乐情绪和职场边界。'
  },
  {
    id: 'movie-training-day-03',
    eyebrow: 'Chapter 08 · 15天训练 Day 03',
    title: movieTrainingDay03ChapterTitle,
    description: '50 道从经典港乐、K房情绪、办公室对白和栋笃笑式观察出发的粤语语感训练。',
    questions: movieTrainingDay03Questions,
    versionLabel: 'v9',
    tone: '港乐情绪、K房场景、职场转译',
    releaseNote: '新增Day03：从港乐情绪过渡到办公室语气、场景判断和职场表达。'
  },
  {
    id: 'movie-training-day-02',
    eyebrow: 'Chapter 07 · 15天训练 Day 02',
    title: movieTrainingDay02ChapterTitle,
    description: '50 道 Day 02 港片粤语训练题：减少简单声调题，强化语气、场景、职场迁移和语境综合判断。',
    questions: movieTrainingDay02Questions,
    versionLabel: 'v8',
    tone: 'Day 02、语境综合、少量短摘',
    releaseNote: '新增Day02可玩版：声调题降到4题，强化语气、场景和职场迁移。'
  },
  {
    id: 'movie-training-day-01',
    eyebrow: 'Chapter 06 · 15天训练 Day 01',
    title: movieTrainingChapterTitle,
    description: '50 道按声调感知、句意理解、语气潜台词、场景推断、职场迁移和混合复盘编排的港片粤语训练。',
    questions: movieTrainingQuestions,
    versionLabel: 'v7',
    tone: '15天训练、成人高效、港片兴趣入口',
    releaseNote: '新增15天训练Day01、计时记录、电影片名备注和答案长度去规律化。'
  },
  {
    id: 'movie-classic',
    eyebrow: 'Chapter 05 · 经典港片高阶',
    title: movieClassicChapterTitle,
    description: '50 道经典港片台词感高阶题：不显示泄题标签、无补全题，穿插九声六调与读音感知。',
    questions: movieClassicQuestions,
    versionLabel: 'v6',
    tone: '经典港片、语气潜台词、声调穿插',
    releaseNote: '新增经典港片高阶50题、错题本、错题复习和声调感知。'
  },
  {
    id: 'movie-comedy',
    eyebrow: 'Chapter 04 · 无厘头进阶',
    title: movieComedyChapterTitle,
    description: '50 道无厘头港片感进阶题，考语气、潜台词、面子、人情和近义干扰。答案已打散，别再一路 A 了。',
    questions: movieComedyQuestions,
    versionLabel: 'v5',
    tone: '无厘头、轻玩梗、学习优先',
    releaseNote: '新增50题、emoji选项、答案打散、成长面板和更新记录。'
  },
  {
    id: 'movie-advanced',
    eyebrow: 'Chapter 03 · 港片进阶',
    title: movieAdvancedChapterTitle,
    description: '20 道常用港片场景进阶题，不靠冷门词，重点考语气、潜台词、场面话和近义干扰。',
    questions: movieAdvancedQuestions,
    versionLabel: 'v4',
    tone: '常用场景进阶',
    releaseNote: '只播真粤语voice，不再fallback普通话。'
  },
  {
    id: 'movie',
    eyebrow: 'Chapter 02 · 港片句子挑战',
    title: movieChapterTitle,
    description: '20 道原创港片场景粤语句子题，先听再判断句意、语气和场景。目标难度校准在 60-80 分。',
    questions: movieQuestions,
    versionLabel: 'v3',
    tone: '港片句子理解',
    releaseNote: '新增港片句子题、粤语播报、自动播报开关和读音提示。'
  },
  {
    id: 'vocab',
    eyebrow: 'Chapter 01 · 词汇热身',
    title: chapterTitle,
    description: '50 道港乐/K 房词汇题，从唔该、冇、咁、啱、靓，到点样、边度、真系，适合先热身。',
    questions,
    versionLabel: 'v2',
    tone: '词汇热身',
    releaseNote: '词汇热身扩展到50题。'
  }
];

const releaseNotes = [
  'v1 词汇热身：跑通开始、答题、反馈、结算。',
  'v2 50题词汇章：扩充常用粤语词汇。',
  'v3 港片句子+粤语播报：从词汇过渡到句子场景。',
  'v4 只播真粤语voice：没有粤语voice就不再播普通话。',
  'v5 无厘头港片50题：答案打散、emoji选项、成长面板和更新记录。',
  'v6 经典港片高阶50题：隐藏泄题标签、取消补全题、加入错题本和声调穿插。',
  'v7 15天训练Day01：50题模块化训练、电影备注、计时统计和答案长度去规律化。',
  'v8 15天训练Day02：减少简单声调题，强化语气/场景/职场迁移。',
  'v9 15天训练Day03：加入港乐/K房情绪、办公室对白和栋笃笑式观察。',
  'v10 15天训练Day04：加入男亲女爱式办公室嘴仗、黄子华式反差和职场边界。',
  'v11 15天训练Day05：男女交往粤语边界，练暧昧、拒绝、误会和体面表达。',
  'v12 15天训练Day06：大时代式人性压力，练输赢、家庭利益和情绪压迫。',
  'v13 15天训练Day07：创世纪式商业谈判，练愿景、风险、承诺和利益交换。',
  'v14 15天训练Day08：新闻女王式职场表达，练事实、立场、话语权和专业边界。',
  'v15 15天训练Day09：周润发经典港片气场，练从容、义气、分寸和场面话。',
  'v16 15天训练Day10：蔡澜式人生智慧，用饮食、人情和豁达判断练粤语。'
];

const state = {
  phase: 'start',
  selectedChapterId: 'movie-training-day-10',
  currentIndex: 0,
  selectedIndex: null,
  answers: [],
  savedProgress: loadProgress(),
  isReviewMode: false,
  reviewQuestionIds: [],
  reviewMasteredCount: 0,
  autoSpeak: true,
  audioStatus: '进入句子挑战后会自动尝试粤语播报。',
  sessionStartedAt: null,
  accumulatedMs: 0,
  lastElapsedMs: 0
};

const root = bootRoot;

if (!root) {
  throw new Error('找不到页面根节点 #root');
}

function emptyStats() {
  return {
    bestScore: 0,
    lastScore: 0,
    attempts: 0,
    totalScore: 0,
    completed: false,
    lastFeedback: '',
    scoreHistory: []
  };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : { chapters: {}, wrongBook: {}, drafts: {}, timeStats: {} };
    return {
      chapters: parsed.chapters || {},
      wrongBook: parsed.wrongBook || {},
      drafts: parsed.drafts || {},
      timeStats: parsed.timeStats || {}
    };
  } catch {
    return { chapters: {}, wrongBook: {}, drafts: {}, timeStats: {} };
  }
}

function getActiveChapter() {
  return chapters.find((chapter) => chapter.id === state.selectedChapterId) || chapters[0];
}

function getChapterStats(chapterId) {
  const stats = state.savedProgress.chapters?.[chapterId] || {};
  return {
    ...emptyStats(),
    ...stats,
    scoreHistory: stats.scoreHistory || []
  };
}

function getChapterTimeStats(chapterId) {
  const stats = state.savedProgress.timeStats?.[chapterId] || {};
  return {
    lastMs: stats.lastMs || 0,
    totalMs: stats.totalMs || 0,
    completedRuns: stats.completedRuns || 0,
    bestMs: stats.bestMs || 0,
    historyMs: stats.historyMs || []
  };
}

function getChapterTimeStatsFromProgress(progress, chapterId) {
  const stats = progress.timeStats?.[chapterId] || {};
  return {
    lastMs: stats.lastMs || 0,
    totalMs: stats.totalMs || 0,
    completedRuns: stats.completedRuns || 0,
    bestMs: stats.bestMs || 0,
    historyMs: stats.historyMs || []
  };
}

function formatDuration(ms) {
  if (!ms || ms < 0) return '暂无';
  const totalSeconds = Math.max(1, Math.round(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes === 0) return `${seconds} 秒`;
  return `${minutes} 分 ${String(seconds).padStart(2, '0')} 秒`;
}

function getCurrentElapsedMs() {
  return state.accumulatedMs + (state.phase === 'quiz' && state.sessionStartedAt ? Date.now() - state.sessionStartedAt : 0);
}

function getTrainingModuleLabel(module) {
  return {
    toneEar: '声调/读音感知',
    phraseMeaning: '常用句意理解',
    pragmaticTone: '语气与潜台词',
    sceneInference: '港片场景推断',
    workplaceTransfer: '职场迁移表达',
    reviewMix: '混合复盘'
  }[module] || '';
}

function writeProgress(nextProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProgress));
  } catch {
    // Some file:// browser contexts can block storage; gameplay should still finish.
  }
  state.savedProgress = nextProgress;
}

function saveProgress(score, elapsedMs) {
  const chapter = getActiveChapter();
  const baseProgress = loadProgress();
  const previousStats = {
    ...emptyStats(),
    ...(baseProgress.chapters?.[chapter.id] || {}),
    scoreHistory: baseProgress.chapters?.[chapter.id]?.scoreHistory || []
  };
  const previousTimeStats = getChapterTimeStatsFromProgress(baseProgress, chapter.id);
  const nextStats = {
    bestScore: Math.max(previousStats.bestScore, score),
    lastScore: score,
    attempts: previousStats.attempts + 1,
    totalScore: previousStats.totalScore + score,
    completed: true,
    lastFeedback: getDifficultyFeedback(score),
    scoreHistory: [...previousStats.scoreHistory, score].slice(-5)
  };
  const nextTimeStats = {
    lastMs: elapsedMs,
    totalMs: previousTimeStats.totalMs + elapsedMs,
    completedRuns: previousTimeStats.completedRuns + 1,
    bestMs: previousTimeStats.bestMs === 0 ? elapsedMs : Math.min(previousTimeStats.bestMs, elapsedMs),
    historyMs: [...previousTimeStats.historyMs, elapsedMs].slice(-5)
  };
  const nextProgress = {
    chapters: {
      ...(baseProgress.chapters || {}),
      [chapter.id]: nextStats
    },
    wrongBook: baseProgress.wrongBook || {},
    drafts: baseProgress.drafts || {},
    timeStats: {
      ...(baseProgress.timeStats || {}),
      [chapter.id]: nextTimeStats
    }
  };
  writeProgress(withoutDraft(nextProgress, chapter.id));
}

function persistDraft(draft, progress = loadProgress()) {
  writeProgress(withDraft(progress, draft));
}

function clearDraft(chapterId) {
  writeProgress(withoutDraft(loadProgress(), chapterId));
}

function saveCurrentDraft() {
  const elapsedMs = getCurrentElapsedMs();
  persistDraft(
    makeDraft(
      state.selectedChapterId,
      state.currentIndex,
      state.selectedIndex,
      state.answers,
      state.isReviewMode,
      state.reviewQuestionIds,
      state.reviewMasteredCount,
      elapsedMs,
      state.sessionStartedAt ? new Date(state.sessionStartedAt).toISOString() : undefined
    )
  );
}

function getWrongEntries(chapterId) {
  return (state.savedProgress.wrongBook?.[chapterId] || []).filter((entry) => !entry.mastered);
}

function getTotalWrongCount() {
  return Object.values(state.savedProgress.wrongBook || {}).reduce(
    (total, entries) => total + entries.filter((entry) => !entry.mastered).length,
    0
  );
}

function getFirstChapterWithWrongEntries() {
  return chapters.find((chapter) => getWrongEntries(chapter.id).length > 0);
}

function getQuestionById(chapter, questionId) {
  return chapter.questions.find((question) => question.id === questionId);
}

function getChapterDraft(chapterId) {
  return state.savedProgress.drafts?.[chapterId];
}

function getDraftTotalQuestions(chapter, draft) {
  return draft.isReviewMode ? Math.max(draft.reviewQuestionIds.length, 1) : chapter.questions.length;
}

function formatDraftTime(value) {
  try {
    return new Intl.DateTimeFormat('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(value));
  } catch {
    return '刚刚';
  }
}

function makeDraft(chapterId, currentIndex, selectedIndex, answers, isReviewMode, reviewQuestionIds, reviewMasteredCount, elapsedMs = 0, startedAt) {
  return {
    chapterId,
    currentIndex,
    selectedIndex,
    answers: answers.map((answer) => ({ ...answer })),
    isReviewMode,
    reviewQuestionIds: [...reviewQuestionIds],
    reviewMasteredCount,
    startedAt,
    elapsedMs,
    updatedAt: new Date().toISOString()
  };
}

function withDraft(progress, draft) {
  return {
    chapters: progress.chapters || {},
    wrongBook: progress.wrongBook || {},
    timeStats: progress.timeStats || {},
    drafts: {
      ...(progress.drafts || {}),
      [draft.chapterId]: draft
    }
  };
}

function withoutDraft(progress, chapterId) {
  const drafts = { ...(progress.drafts || {}) };
  delete drafts[chapterId];
  return {
    chapters: progress.chapters || {},
    wrongBook: progress.wrongBook || {},
    timeStats: progress.timeStats || {},
    drafts
  };
}

function getQuizQuestions() {
  const chapter = getActiveChapter();
  if (!state.isReviewMode) return chapter.questions;
  return state.reviewQuestionIds
    .map((questionId) => getQuestionById(chapter, questionId))
    .filter(Boolean);
}

function updateWrongBookForAnswer(question, selectedIndex, isCorrect) {
  const chapter = getActiveChapter();
  const progress = loadProgress();
  const wrongBook = { ...(progress.wrongBook || {}) };
  const chapterEntries = [...(wrongBook[chapter.id] || [])];
  const existingIndex = chapterEntries.findIndex((entry) => entry.questionId === question.id);

  if (!isCorrect) {
    const previous = existingIndex >= 0 ? chapterEntries[existingIndex] : undefined;
    const nextEntry = {
      questionId: question.id,
      selectedIndex,
      wrongCount: (previous?.wrongCount || 0) + 1,
      lastWrongAt: new Date().toISOString(),
      mastered: false
    };
    if (existingIndex >= 0) chapterEntries[existingIndex] = nextEntry;
    else chapterEntries.push(nextEntry);
  } else if (state.isReviewMode && existingIndex >= 0) {
    chapterEntries[existingIndex] = {
      ...chapterEntries[existingIndex],
      selectedIndex,
      mastered: true
    };
  }

  wrongBook[chapter.id] = chapterEntries;
  writeProgress({
    chapters: progress.chapters || {},
    wrongBook,
    drafts: progress.drafts || {},
    timeStats: progress.timeStats || {}
  });
}

function getRating(score) {
  if (score >= 90) return '片场听力王';
  if (score >= 70) return '港片熟客';
  if (score >= 50) return '粤语入戏';
  return '返场复习';
}

function getFeedbackTitle(chapterId, isCorrect) {
  if (chapterId === 'movie-comedy') {
    return isCorrect ? '答啱，靓到离谱！' : '差少少，剧情未反转完';
  }
  return isCorrect ? '答啱！' : '差少少';
}

function getDifficultyFeedback(score) {
  if (score > 80) return '这章偏易，建议下次提高难度。';
  if (score >= 60) return '难度合适，处于有效练习区间。';
  return '建议复习句子结构、语气词和错题里的读音提示。';
}

function getAverageScore(stats) {
  return stats.attempts === 0 ? 0 : Math.round(stats.totalScore / stats.attempts);
}

function isCantoneseVoice(voice) {
  const lang = String(voice.lang || '').toLowerCase();
  const name = String(voice.name || '').toLowerCase();
  return (
    lang.includes('zh-hk') ||
    lang.includes('zh_hk') ||
    lang.includes('yue') ||
    name.includes('cantonese') ||
    name.includes('hong kong') ||
    name.includes('yue')
  );
}

function getPreferredCantoneseVoice(voices) {
  const cantoneseVoices = voices.filter((voice) => isCantoneseVoice(voice));
  return (
    cantoneseVoices.find((voice) => String(voice.name || '').toLowerCase().includes('sinji')) ||
    cantoneseVoices.find((voice) => /female|woman|mei|sin|sandy|flo|shelley/i.test(String(voice.name || ''))) ||
    cantoneseVoices[0]
  );
}

function getVoiceLabel(voice) {
  return `${voice.name} ${voice.lang}`.trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function speakQuestion(question) {
  const text = question.spokenText || question.cantoneseText;
  if (!text) {
    state.audioStatus = '这题没有朗读文本。';
    render();
    return;
  }

  if (!('speechSynthesis' in window)) {
    state.audioStatus = '当前浏览器不支持语音合成，仍可继续答题。';
    render();
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const voice = getPreferredCantoneseVoice(voices);
    if (!voice) {
      state.audioStatus = '未检测到粤语语音，本题暂不朗读；请参考粤拼提示。';
      render();
      return;
    }
    utterance.lang = 'zh-HK';
    utterance.rate = 0.86;
    utterance.pitch = 1;
    if (voice) utterance.voice = voice;
    const voiceLabel = getVoiceLabel(voice);
    utterance.onstart = () => {
      state.audioStatus = `使用粤语女声：${voiceLabel}`;
      render();
    };
    utterance.onend = () => {
      state.audioStatus = `播报完成：${voiceLabel}。可点重播再听一次。`;
      render();
    };
    utterance.onerror = () => {
      state.audioStatus = '浏览器阻止或中断了播报，可手动点重播。';
      render();
    };
    state.audioStatus = '正在请求浏览器播报…';
    window.speechSynthesis.speak(utterance);
    render();
  } catch {
    state.audioStatus = '朗读启动失败，但题目可以继续完成。';
    render();
  }
}

function startGame() {
  const chapter = getActiveChapter();
  const startedAt = Date.now();
  persistDraft(makeDraft(chapter.id, 0, null, [], false, [], 0, 0, new Date(startedAt).toISOString()));
  state.sessionStartedAt = startedAt;
  state.accumulatedMs = 0;
  state.lastElapsedMs = 0;
  state.isReviewMode = false;
  state.reviewQuestionIds = [];
  state.reviewMasteredCount = 0;
  state.phase = 'quiz';
  state.currentIndex = 0;
  state.selectedIndex = null;
  state.answers = [];
  state.audioStatus = chapter.questions[0]?.cantoneseText ? '准备播报第一句…' : '词汇热身不需要播报。';
  render();
  if (state.autoSpeak && chapter.questions[0]?.cantoneseText) speakQuestion(chapter.questions[0]);
}

function restartGame() {
  const chapter = getActiveChapter();
  const startedAt = Date.now();
  const nextProgress = withDraft(withoutDraft(loadProgress(), chapter.id), makeDraft(chapter.id, 0, null, [], false, [], 0, 0, new Date(startedAt).toISOString()));
  writeProgress(nextProgress);
  state.sessionStartedAt = startedAt;
  state.accumulatedMs = 0;
  state.lastElapsedMs = 0;
  state.isReviewMode = false;
  state.reviewQuestionIds = [];
  state.reviewMasteredCount = 0;
  state.phase = 'quiz';
  state.currentIndex = 0;
  state.selectedIndex = null;
  state.answers = [];
  state.audioStatus = chapter.questions[0]?.cantoneseText ? '准备播报第一句…' : '词汇热身不需要播报。';
  render();
  if (state.autoSpeak && chapter.questions[0]?.cantoneseText) speakQuestion(chapter.questions[0]);
}

function resumeDraft() {
  const draft = getChapterDraft(state.selectedChapterId);
  if (!draft) {
    startGame();
    return;
  }
  state.selectedChapterId = draft.chapterId;
  state.isReviewMode = draft.isReviewMode;
  state.reviewQuestionIds = [...draft.reviewQuestionIds];
  state.reviewMasteredCount = draft.reviewMasteredCount;
  state.accumulatedMs = draft.elapsedMs || 0;
  state.sessionStartedAt = Date.now();
  state.lastElapsedMs = 0;
  state.phase = 'quiz';
  state.currentIndex = draft.currentIndex;
  state.selectedIndex = draft.selectedIndex;
  state.answers = draft.answers.map((answer) => ({ ...answer }));
  state.audioStatus = '已恢复上次进度，可继续作答。';
  render();
  const question = getQuizQuestions()[state.currentIndex];
  if (state.autoSpeak && question?.cantoneseText) speakQuestion(question);
}

function exitAndSave() {
  saveCurrentDraft();
  state.accumulatedMs = getCurrentElapsedMs();
  state.sessionStartedAt = null;
  state.phase = 'start';
  render();
}

function startWrongReview(chapterId) {
  const chapter = chapters.find((item) => item.id === chapterId);
  const wrongEntries = getWrongEntries(chapterId);
  if (!chapter || wrongEntries.length === 0) return;
  const questionIds = wrongEntries.map((entry) => entry.questionId);
  const startedAt = Date.now();
  persistDraft(makeDraft(chapterId, 0, null, [], true, questionIds, 0, 0, new Date(startedAt).toISOString()));
  state.sessionStartedAt = startedAt;
  state.accumulatedMs = 0;
  state.lastElapsedMs = 0;
  state.selectedChapterId = chapterId;
  state.isReviewMode = true;
  state.reviewQuestionIds = questionIds;
  state.reviewMasteredCount = 0;
  state.phase = 'quiz';
  state.currentIndex = 0;
  state.selectedIndex = null;
  state.answers = [];
  state.audioStatus = chapter.questions[0]?.cantoneseText ? '错题复习开始，准备播报…' : '错题复习开始。';
  render();
  const question = getQuizQuestions()[0];
  if (state.autoSpeak && question?.cantoneseText) speakQuestion(question);
}

function selectChapter(chapterId) {
  state.selectedChapterId = chapterId;
  state.phase = 'start';
  state.currentIndex = 0;
  state.selectedIndex = null;
  state.answers = [];
  state.isReviewMode = false;
  state.reviewQuestionIds = [];
  state.reviewMasteredCount = 0;
  render();
}

function chooseAnswer(choiceIndex) {
  if (state.selectedIndex !== null) return;
  const elapsedMs = getCurrentElapsedMs();
  const question = getQuizQuestions()[state.currentIndex];
  const isCorrect = choiceIndex === question.answerIndex;
  const nextAnswers = [
    ...state.answers,
    {
      questionId: question.id,
      selectedIndex: choiceIndex,
      isCorrect
    }
  ];
  const nextMasteredCount = state.isReviewMode && isCorrect ? state.reviewMasteredCount + 1 : state.reviewMasteredCount;
  state.selectedIndex = choiceIndex;
  state.answers = nextAnswers;
  updateWrongBookForAnswer(question, choiceIndex, isCorrect);
  state.reviewMasteredCount = nextMasteredCount;
  persistDraft(
    makeDraft(
      state.selectedChapterId,
      state.currentIndex,
      choiceIndex,
      nextAnswers,
      state.isReviewMode,
      state.reviewQuestionIds,
      nextMasteredCount,
      elapsedMs,
      state.sessionStartedAt ? new Date(state.sessionStartedAt).toISOString() : undefined
    )
  );
  render();
}

function goNext() {
  const chapter = getActiveChapter();
  const quizQuestions = getQuizQuestions();
  if (state.currentIndex === quizQuestions.length - 1) {
    const elapsedMs = getCurrentElapsedMs();
    state.lastElapsedMs = elapsedMs;
    state.accumulatedMs = elapsedMs;
    state.sessionStartedAt = null;
    state.phase = 'result';
    if (!state.isReviewMode) saveProgress(getScore(), elapsedMs);
    else clearDraft(chapter.id);
    render();
    return;
  }
  state.currentIndex += 1;
  state.selectedIndex = null;
  persistDraft(
    makeDraft(
      chapter.id,
      state.currentIndex,
      null,
      state.answers,
      state.isReviewMode,
      state.reviewQuestionIds,
      state.reviewMasteredCount,
      getCurrentElapsedMs(),
      state.sessionStartedAt ? new Date(state.sessionStartedAt).toISOString() : undefined
    )
  );
  render();
  const question = quizQuestions[state.currentIndex];
  if (state.autoSpeak && question?.cantoneseText) speakQuestion(question);
}

function getScore() {
  const quizQuestions = getQuizQuestions();
  const correctCount = state.answers.filter((answer) => answer.isCorrect).length;
  return Math.round((correctCount / Math.max(quizQuestions.length, 1)) * 100);
}

function render() {
  if (state.phase === 'quiz') {
    renderQuiz();
  } else if (state.phase === 'result') {
    renderResult();
  } else if (state.phase === 'wrongbook') {
    renderWrongBook();
  } else {
    renderStart();
  }
}

function renderStart() {
  const chapter = getActiveChapter();
  const stats = getChapterStats(chapter.id);
  const timeStats = getChapterTimeStats(chapter.id);
  const wrongCount = getTotalWrongCount();
  const draft = getChapterDraft(chapter.id);
  const draftTotal = draft ? getDraftTotalQuestions(chapter, draft) : chapter.questions.length;
  const capabilityTags = [...new Set(chapter.questions.map((question) => question.phoneticFocus || question.skillTag).filter(Boolean))].slice(0, 6);
  root.innerHTML = `
    <main class="app-shell">
      <section class="hero-panel">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(chapter.eyebrow)}</p>
          <h1>${escapeHtml(chapter.title)}</h1>
          <p class="lede">${escapeHtml(chapter.description)}</p>
          <div class="chapter-switcher" aria-label="章节选择">
            ${chapters
              .map(
                (item) => `
                  <button class="chapter-tab ${item.id === chapter.id ? 'is-active' : ''}" type="button" data-chapter="${item.id}">
                    <span>${escapeHtml(item.eyebrow)}</span>
                    <strong>${item.recommended ? '推荐' : `${item.questions.length} 题`}</strong>
                  </button>
                `
              )
              .join('')}
          </div>
          <div class="start-actions">
            ${
              draft
                ? `
                  <button class="primary-button" type="button" data-action="resume">继续上次进度</button>
                  <button class="ghost-button" type="button" data-action="restart">重新开始</button>
                `
                : '<button class="primary-button" type="button" data-action="start">开始闯关</button>'
            }
            <button class="ghost-button" type="button" data-action="wrongbook">错题本 ${wrongCount}</button>
            <div class="saved-stat">
              <span>最高分</span>
              <strong>${stats.bestScore}</strong>
            </div>
            <div class="saved-stat">
              <span>平均分</span>
              <strong>${getAverageScore(stats)}</strong>
            </div>
          </div>
          <div class="growth-panel" aria-label="成长面板">
            <div>
              <span>最近分</span>
              <strong>${stats.lastScore}</strong>
            </div>
            <div>
              <span>尝试次数</span>
              <strong>${stats.attempts}</strong>
            </div>
            <div class="wide-stat">
              <span>最近记录</span>
              <strong>${stats.scoreHistory.length > 0 ? stats.scoreHistory.join(' / ') : '暂无'}</strong>
            </div>
            <div class="wide-stat">
              <span>难度反馈</span>
              <strong>${escapeHtml(stats.lastFeedback || '完成一轮后会生成反馈')}</strong>
            </div>
            <div class="wide-stat">
              <span>未完成进度</span>
              <strong>${
                draft
                  ? `第 ${Math.min(draft.currentIndex + 1, draftTotal)} / ${draftTotal} 题 · 已用 ${escapeHtml(formatDuration(draft.elapsedMs || 0))} · ${escapeHtml(formatDraftTime(draft.updatedAt))}`
                  : '暂无'
              }</strong>
            </div>
            <div class="wide-stat">
              <span>时间投入</span>
              <strong>最近 ${escapeHtml(formatDuration(timeStats.lastMs))} · 累计 ${escapeHtml(formatDuration(timeStats.totalMs))} · 完成 ${timeStats.completedRuns} 轮</strong>
            </div>
          </div>
          ${
            chapter.id.startsWith('movie-training-day-')
              ? `
                <div class="training-plan" aria-label="15天训练计划">
                  <span>15天训练计划</span>
                  <strong>${escapeHtml(chapter.questions[0]?.dayTag || 'Day 01')} · 建议 15 分钟 / 50 题</strong>
                  <p>交错训练：声调感知、句意、语气、场景、职场迁移和混合复盘，不靠死背 3000 字读音差异。</p>
                </div>
              `
              : ''
          }
          <div class="release-notes" aria-label="更新记录">
            <h2>更新记录</h2>
            ${releaseNotes.map((note) => `<p>${escapeHtml(note)}</p>`).join('')}
          </div>
        </div>
        <div class="chapter-board summary-board" aria-label="章节预览">
          <div class="scene-ribbon" aria-label="片场氛围">场记板 · 夜街霓虹 · K房热身</div>
          <div class="summary-row">
            <span>题量</span>
            <strong>${chapter.questions.length} 题</strong>
          </div>
          <div class="summary-row">
            <span>难度</span>
            <strong>${escapeHtml(chapter.questions[0]?.difficulty || '进阶')}</strong>
          </div>
          <div class="summary-row">
            <span>版本</span>
            <strong>${escapeHtml(chapter.versionLabel || 'MVP')}</strong>
          </div>
          <div class="summary-row wide">
            <span>能力覆盖</span>
            <strong>${escapeHtml(chapter.id.startsWith('movie-training-day-') ? '声调感知 / 句意理解 / 语气潜台词 / 场景推断 / 职场迁移 / 混合复盘' : capabilityTags.join(' / ') || chapter.tone || '词义理解')}</strong>
          </div>
          <div class="summary-row">
            <span>建议时间</span>
            <strong>${chapter.id.startsWith('movie-training-day-') ? '15 分钟 / 50 题' : '按章节节奏练习'}</strong>
          </div>
          <div class="summary-row">
            <span>最近用时</span>
            <strong>${escapeHtml(formatDuration(timeStats.lastMs))}</strong>
          </div>
          <div class="summary-note">${escapeHtml(chapter.releaseNote || '')}</div>
        </div>
      </section>
    </main>
  `;
}

function renderQuiz() {
  const chapter = getActiveChapter();
  const quizQuestions = getQuizQuestions();
  const question = quizQuestions[state.currentIndex];
  if (!question) {
    state.phase = 'wrongbook';
    render();
    return;
  }
  const progress = ((state.currentIndex + 1) / quizQuestions.length) * 100;
  const isAnswered = state.selectedIndex !== null;
  const isCorrect = state.selectedIndex === question.answerIndex;
  const shouldShowPreAnswerHint = chapter.id !== 'movie-classic' && !chapter.id.startsWith('movie-training-day-');

  root.innerHTML = `
    <main class="app-shell">
      <section class="quiz-panel">
        <div class="quiz-topbar">
          <div>
            <p class="eyebrow">${state.isReviewMode ? '错题复习' : escapeHtml(chapter.eyebrow)}</p>
            <h1>${escapeHtml(chapter.title)}</h1>
            <p class="set-status">${state.isReviewMode ? '返场补拍 · 只练未掌握片段' : '片场收音中 · 听句意，也听语气'}</p>
          </div>
          <span class="question-count">${state.currentIndex + 1}/${quizQuestions.length}</span>
          <button class="ghost-button" type="button" data-action="exit-save">退出并保存</button>
        </div>
        <div class="progress-track" aria-label="闯关进度"><span style="width: ${progress}%"></span></div>
        <article class="question-card">
          <div class="meta-row">
            <div class="difficulty">${escapeHtml(question.difficulty)}</div>
            <div class="difficulty muted">第 ${state.currentIndex + 1} 题</div>
          </div>
          ${question.cantoneseText ? `<p class="cantonese-line">${escapeHtml(question.cantoneseText)}</p>` : ''}
          ${
            question.cantoneseText
              ? `
                <div class="audio-bar">
                  <button class="ghost-button" type="button" data-action="replay">重播</button>
                  <button class="toggle-button ${state.autoSpeak ? 'is-on' : ''}" type="button" data-action="toggle-audio">
                    自动播报 ${state.autoSpeak ? '开' : '关'}
                  </button>
                  <span>${escapeHtml(state.audioStatus)}</span>
                </div>
              `
              : ''
          }
          ${
            question.pronunciationHint && shouldShowPreAnswerHint
              ? `<p class="pronunciation">读音提示：${escapeHtml(question.pronunciationHint)}</p>`
              : ''
          }
          <h2>${escapeHtml(question.prompt)}</h2>
          <div class="choice-grid">
            ${question.choices
              .map((choice, choiceIndex) => {
                const isRightChoice = choiceIndex === question.answerIndex;
                const isChosen = choiceIndex === state.selectedIndex;
                const stateClass =
                  isAnswered && isRightChoice ? 'is-correct' : isAnswered && isChosen ? 'is-wrong' : '';
                return `
                  <button class="choice-button ${stateClass}" ${isAnswered ? 'disabled' : ''} type="button" data-choice="${choiceIndex}">
                    <span>${String.fromCharCode(65 + choiceIndex)}</span>
                    ${escapeHtml(choice)}
                  </button>
                `;
              })
              .join('')}
          </div>
        </article>
        ${
          isAnswered
            ? `
              <section class="feedback ${isCorrect ? 'positive' : 'negative'}">
                <strong>${getFeedbackTitle(chapter.id, isCorrect)}</strong>
                <p>${escapeHtml(question.explanation)}</p>
                <p class="feedback-tags">${escapeHtml(getTrainingModuleLabel(question.trainingModule) || question.theme)} · ${escapeHtml(question.skillTag || question.questionType || '')}${
                  question.phoneticFocus ? ` · ${escapeHtml(question.phoneticFocus)}` : ''
                }</p>
                ${question.movieTitle ? `<p class="movie-note">片名备注：${escapeHtml(question.movieTitle)} · ${escapeHtml(question.movieNote || '')}</p>` : ''}
                ${question.pronunciationHint ? `<p>读音提示：${escapeHtml(question.pronunciationHint)}</p>` : ''}
                ${question.workplaceTip ? `<p class="workplace-tip">职场迁移：${escapeHtml(question.workplaceTip)}</p>` : ''}
                <button class="primary-button compact" type="button" data-action="next">
                  ${state.currentIndex === quizQuestions.length - 1 ? '查看成绩' : '下一题'}
                </button>
              </section>
            `
            : ''
        }
      </section>
    </main>
  `;
}

function renderResult() {
  const chapter = getActiveChapter();
  const quizQuestions = getQuizQuestions();
  const score = getScore();
  const elapsedMs = state.lastElapsedMs || state.accumulatedMs;
  const timeStats = getChapterTimeStats(chapter.id);
  const missedQuestions = state.answers
    .filter((answer) => !answer.isCorrect)
    .map((answer) => ({
      answer,
      question: chapter.questions.find((question) => question.id === answer.questionId)
    }));

  root.innerHTML = `
    <main class="app-shell">
      <section class="result-panel">
        <p class="eyebrow">${state.isReviewMode ? '错题复习结算' : '本章结算'}</p>
        <h1>${getRating(score)}</h1>
        <div class="score-ring" aria-label="得分 ${score}">
          <strong>${score}</strong>
          <span>分</span>
        </div>
        <p class="lede">
          你答对 ${state.answers.filter((answer) => answer.isCorrect).length} / ${quizQuestions.length} 题。
          ${state.isReviewMode ? `本轮错题复习掌握 ${state.reviewMasteredCount} 题。` : getDifficultyFeedback(score)}
        </p>
        <div class="time-summary" aria-label="本轮时间统计">
          <div>
            <span>本轮用时</span>
            <strong>${escapeHtml(formatDuration(elapsedMs))}</strong>
          </div>
          <div>
            <span>平均每题</span>
            <strong>${escapeHtml(formatDuration(elapsedMs / Math.max(quizQuestions.length, 1)))}</strong>
          </div>
          <div>
            <span>最近5次</span>
            <strong>${escapeHtml((timeStats.historyMs.length > 0 ? timeStats.historyMs : elapsedMs ? [elapsedMs] : []).map(formatDuration).join(' / ') || '暂无')}</strong>
          </div>
        </div>
        ${
          missedQuestions.length > 0
            ? `
              <div class="review-list">
                ${missedQuestions
                  .map(
                    ({ answer, question }) => `
                      <article class="review-item">
                        <span>${escapeHtml(getTrainingModuleLabel(question.trainingModule) || question.theme)}</span>
                        ${question.cantoneseText ? `<strong>${escapeHtml(question.cantoneseText)}</strong>` : `<strong>${escapeHtml(question.prompt)}</strong>`}
                        <p>你选了“${escapeHtml(question.choices[answer.selectedIndex])}”，正确答案是“${escapeHtml(
                          question.choices[question.answerIndex]
                        )}”。</p>
                        <p>${escapeHtml(question.explanation)}</p>
                        ${question.movieTitle ? `<p>片名备注：${escapeHtml(question.movieTitle)} · ${escapeHtml(question.movieNote || '')}</p>` : ''}
                        ${question.pronunciationHint ? `<p>读音提示：${escapeHtml(question.pronunciationHint)}</p>` : ''}
                        ${question.phoneticFocus ? `<p>读音点：${escapeHtml(question.phoneticFocus)}</p>` : ''}
                        ${question.workplaceTip ? `<p>职场迁移：${escapeHtml(question.workplaceTip)}</p>` : ''}
                      </article>
                    `
                  )
                  .join('')}
              </div>
            `
            : ''
        }
        <div class="result-actions">
          <button class="primary-button" type="button" data-action="start">${state.isReviewMode ? '重新挑战本章' : '再玩一次'}</button>
          <button class="ghost-button" type="button" data-action="home">返回首页</button>
        </div>
      </section>
    </main>
  `;
}

function renderWrongBook() {
  const totalWrongCount = getTotalWrongCount();
  const firstWrongChapter = getFirstChapterWithWrongEntries();
  const currentWrongCount = getWrongEntries(state.selectedChapterId).length;
  let switchedToChapter = null;

  if (totalWrongCount > 0 && currentWrongCount === 0 && firstWrongChapter) {
    state.selectedChapterId = firstWrongChapter.id;
    switchedToChapter = firstWrongChapter;
  }

  const selectedChapter = getActiveChapter();
  const entries = getWrongEntries(selectedChapter.id)
    .map((entry) => ({
      entry,
      question: getQuestionById(selectedChapter, entry.questionId)
    }))
    .filter((item) => item.question);

  root.innerHTML = `
    <main class="app-shell">
      <section class="result-panel wrongbook-panel">
        <p class="eyebrow">错题本</p>
        <h1>把没掌握的句子留在片场慢慢练</h1>
        <p class="lede">当前共有 ${totalWrongCount} 道未掌握错题。答对错题复习后，会自动标记为已掌握。</p>
        <div class="wrongbook-status" aria-label="错题本当前筛选">
          当前显示：${escapeHtml(selectedChapter.eyebrow)}；全部未掌握错题：${totalWrongCount} 道。
          ${switchedToChapter ? `其他章节有错题，已为你切到 ${escapeHtml(switchedToChapter.eyebrow)}。` : ''}
        </div>
        <div class="chapter-switcher compact-switcher" aria-label="错题章节选择">
          ${chapters
            .map((chapter) => {
              const count = getWrongEntries(chapter.id).length;
              return `
                <button class="chapter-tab ${chapter.id === selectedChapter.id ? 'is-active' : ''}" type="button" data-wrong-chapter="${chapter.id}">
                  <span>${escapeHtml(chapter.eyebrow)}</span>
                  <strong>${count} 题</strong>
                </button>
              `;
            })
            .join('')}
        </div>
        <div class="result-actions">
          <button class="primary-button" ${entries.length === 0 ? 'disabled' : ''} type="button" data-action="review-wrong">
            只复习本章错题
          </button>
          <button class="ghost-button" type="button" data-action="home">返回首页</button>
        </div>
        ${
          entries.length > 0
            ? `
              <div class="review-list">
                ${entries
                  .map(
                    ({ entry, question }) => `
                      <article class="review-item">
                        <span>错 ${entry.wrongCount} 次 · 最近 ${new Date(entry.lastWrongAt).toLocaleDateString()}</span>
                        ${question.cantoneseText ? `<strong>${escapeHtml(question.cantoneseText)}</strong>` : `<strong>${escapeHtml(question.prompt)}</strong>`}
                        <p>上次选了“${escapeHtml(question.choices[entry.selectedIndex])}”，正确答案是“${escapeHtml(
                          question.choices[question.answerIndex]
                        )}”。</p>
                        <p>${escapeHtml(question.explanation)}</p>
                        ${question.pronunciationHint ? `<p>读音提示：${escapeHtml(question.pronunciationHint)}</p>` : ''}
                        ${question.phoneticFocus ? `<p>读音点：${escapeHtml(question.phoneticFocus)}</p>` : ''}
                      </article>
                    `
                  )
                  .join('')}
              </div>
            `
            : '<div class="empty-state">这一章暂时没有未掌握错题，先去挑战一轮再回来复盘。</div>'
        }
      </section>
    </main>
  `;
}

try {
  root.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;

    if (target.dataset.chapter) {
      selectChapter(target.dataset.chapter);
      return;
    }

    if (target.dataset.wrongChapter) {
      state.selectedChapterId = target.dataset.wrongChapter;
      render();
      return;
    }

    if (target.dataset.action === 'start') {
      startGame();
      return;
    }

    if (target.dataset.action === 'resume') {
      resumeDraft();
      return;
    }

    if (target.dataset.action === 'restart') {
      restartGame();
      return;
    }

    if (target.dataset.action === 'exit-save') {
      exitAndSave();
      return;
    }

    if (target.dataset.action === 'wrongbook') {
      state.phase = 'wrongbook';
      state.currentIndex = 0;
      state.selectedIndex = null;
      state.answers = [];
      render();
      return;
    }

    if (target.dataset.action === 'review-wrong') {
      startWrongReview(state.selectedChapterId);
      return;
    }

    if (target.dataset.action === 'next') {
      goNext();
      return;
    }

    if (target.dataset.action === 'home') {
      state.phase = 'start';
      state.currentIndex = 0;
      state.selectedIndex = null;
      state.answers = [];
      state.isReviewMode = false;
      state.reviewQuestionIds = [];
      state.reviewMasteredCount = 0;
      render();
      return;
    }

    if (target.dataset.action === 'replay') {
      speakQuestion(getQuizQuestions()[state.currentIndex]);
      return;
    }

    if (target.dataset.action === 'toggle-audio') {
      state.autoSpeak = !state.autoSpeak;
      state.audioStatus = state.autoSpeak ? '自动播报已开启。' : '自动播报已关闭，可手动重播。';
      saveCurrentDraft();
      render();
      return;
    }

    if (target.dataset.choice) {
      chooseAnswer(Number(target.dataset.choice));
    }
  });

  render();
} catch (error) {
  showStartupError(error);
}
