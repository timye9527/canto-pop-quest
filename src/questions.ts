import type { Question } from './types';

export const chapterTitle = '陈奕迅港乐卡拉 OK 夜';

export const questions: Question[] = [
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
