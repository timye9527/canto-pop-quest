import type { Question } from './types';

export const movieTrainingDay02ChapterTitle = '15天港片粤语训练 Day 02';

type Module = NonNullable<Question['trainingModule']>;

type Seed = [
  string,
  string,
  string[],
  number,
  string,
  Module,
  string,
  string,
  string,
  string?,
  string?
];

const note = (title: string, extra?: string) =>
  extra || `受${title}一类港片场景启发，句子为原创。`;

const seeds: Seed[] = [
  ["你而家唔系问意见，系想我企边。", "这句话真正指出什么？", ["对方在要求站队","对方想听建议","对方准备道歉","对方只是闲聊"], 0, "“企边”是站哪一边，重点是对方把问题变成站队。", "pragmaticTone", "站队压力", "《无间道》", "nei5 ji4 gaa1 m4 hai6 man6 ji3 gin3, hai6 soeng2 ngo5 kei5 bin1"],
  ["呢件事讲到尾，唔系边个赢。", "说话人想把焦点拉回哪里？", ["输赢结果","事情本身","饭局安排","声线高低"], 1, "这句是在降冲突，提醒别把讨论变成输赢。", "pragmaticTone", "降冲突", "《寒战》", "ni1 gin6 si6 gong2 dou3 mei5, m4 hai6 bin1 go3 jeng4"],
  ["短摘：“我养你啊。”如果放在当下语境，最容易被误解成？", "这题考的不是字面，而是什么？", ["承诺边界","天气变化","点餐速度","开会流程"], 0, "短句很经典，但训练重点是辨认它在不同关系里可能带来的承诺感。", "phraseMeaning", "短摘语境", "《喜剧之王》", "ngo5 joeng5 nei5 aa3", , "含短句级经典摘引；用于学习语境，不复刻长台词。"],
  ["你讲得轻松，听嗰个未必轻松。", "这句提醒什么？", ["玩笑有接收成本","声音必须更大","对方已经同意","内容不用再讲"], 0, "说话者轻松，不代表听的人没有压力。", "pragmaticTone", "玩笑边界", "《喜剧之王》", "nei5 gong2 dak1 heng1 sung1, teng1 go2 go3 mei6 bit1 heng1 sung1"],
  ["我唔系要你即刻答，我系要你唔好扮冇听到。", "最准确的潜台词是？", ["要求对方承认收到","要求马上签字","准备取消合作","只是换个座位"], 0, "核心不是立刻给答案，而是不要逃避接收信息。", "workplaceTransfer", "回应边界", "《窃听风云》", "ngo5 m4 hai6 jiu3 nei5 zik1 hak1 daap3, ngo5 hai6 jiu3 nei5 m4 hou2 baan6 mou5 teng1 dou2", "职场里可转成“先确认收到，再约回复时间”。"],
  ["听辨进阶：“情 cing4”和“请 cing2”在句里差别靠什么抓？", "更可靠的判断是？", ["只看声母","结合声调和语境","只看字数","都读成普通话"], 1, "两个音很接近，不能只靠拼音形状，要结合声调和句意。", "toneEar", "近音辨义", "《花样年华》", "cing4 / cing2"],
  ["你话可以，但你冇讲几时可以。", "这句在追问什么？", ["执行时间","电影片名","执行时间和交付点","说话音量"], 0, "“可以”只是态度，缺少可执行时间。", "phraseMeaning", "常用句意", "《金鸡》", "nei5 waa6 ho2 ji5, daan6 nei5 mou5 gong2 gei2 si4 ho2 ji5", "把模糊承诺追到时间点。"],
  ["场景：走廊里有人说“入房先，出面多耳。”", "最可能的原因是？", ["外面不适合谈","准备开始唱歌","想换一道菜","已经完全公开"], 0, "“多耳”是很多人听着，说明信息不适合公开讲。", "sceneInference", "避开旁听", "《无间道》", "jap6 fong2 sin1, ceot1 min6 do1 ji5"],
  ["你唔系冇道理，系讲到人冇路落。", "这句批评的是？", ["表达不给台阶","逻辑完全错误","声音太小","时间太早"], 0, "对方也许有道理，但表达方式让别人没台阶。", "pragmaticTone", "面子台阶", "《黑社会》", "nei5 m4 hai6 mou5 dou6 lei5, hai6 gong2 dou3 jan4 mou5 lou6 lok6"],
  ["短摘：“冇梦想。”放在训练里，更该听出什么？", "它常带什么语气？", ["认真规劝","纯粹点餐","天气抱怨","会议签到"], 0, "短摘的趣味在反差：听起来轻，背后是在推人面对目标。", "phraseMeaning", "短摘反差", "《少林足球》", "mou5 mung6 soeng2", , "含短句级经典摘引；只取极短片段做语气训练。"],
  ["呢个答案好靓，但我唔知点执行。", "职场里更像什么反馈？", ["认可包装但要行动","完全赞成通过","要求马上散会","只是在夸设计"], 0, "它承认答案漂亮，但追问可执行性。", "phraseMeaning", "常用句意", "《食神》", "ni1 go3 daap3 on3 hou2 leng3, daan6 ngo5 m4 zi1 dim2 zat1 hang4", "把“好听”拉回“怎么做”。"],
  ["你而家系提醒我，定系畀压力我？", "说话人要分辨什么？", ["提醒与施压","早饭与晚饭","开门与关门","长音与短音"], 0, "同样一句话，语气不同会从提醒变成施压。", "pragmaticTone", "提醒/施压", "《寒战》", "nei5 ji4 gaa1 hai6 tai4 sing2 ngo5, ding6 hai6 bei2 aat3 lik6 ngo5"],
  ["场景：茶餐厅里说“唔该，飞砂走奶。”", "这句话是在说什么？", ["不要糖不要奶","多放辣椒","取消订单","马上埋单"], 0, "“飞砂走奶”是港式饮品常见说法：不要糖不要奶。", "phraseMeaning", "茶餐厅表达", "《金鸡》", "m4 goi1, fei1 saa1 zau2 naai5"],
  ["我畀你面，唔代表件事过去咗。", "潜台词是什么？", ["暂时保全面子","已经完全和解","准备庆祝","只是问路"], 0, "给面子是处理方式，不等于问题已经消失。", "pragmaticTone", "面子/结案", "《黑社会》", "ngo5 bei2 nei5 min6, m4 doi6 biu2 gin6 si6 gwo3 zo2"],
  ["听辨进阶：“讲 gong2”和“港 gong2”单听相近，靠什么减少误判？", "最该补充什么线索？", ["前后词和语境","音量大小","是否有儿化","字幕颜色"], 0, "同音或近音时，靠上下文判断，不是硬猜单字。", "toneEar", "同音语境", "《重庆森林》", "gong2 / gong2"],
  ["你讲“尽快”，我听到嘅系唔确定。", "说话人真正需要什么？", ["具体承诺","更大情绪","换个片名","多点玩笑"], 0, "“尽快”太虚，听的人需要更明确的承诺。", "phraseMeaning", "常用句意", "《窃听风云》", "nei5 gong2 zeon6 faai3, ngo5 teng1 dou2 ge3 hai6 m4 kok3 ding6", "把“尽快”改成具体时间和交付物。"],
  ["场景：电梯口有人说“上到去先笑，下面有人望住。”", "更像什么提醒？", ["控制表情别露馅","准备唱生日歌","马上叫外卖","公开宣布好消息"], 0, "“有人望住”说明要暂时收住表情，别露出信息。", "sceneInference", "表情管理", "《无间道》", "soeng5 dou3 heoi3 sin1 siu3, haa6 min6 jau5 jan4 mong6 zyu6"],
  ["你可以唔认同，但唔好偷换我意思。", "这句最在意什么？", ["观点被改写","对方没付款","地方太远","声音不够甜"], 0, "允许不同意，但不接受把原意改写后再反驳。", "pragmaticTone", "偷换概念", "《寒战》", "nei5 ho2 ji5 m4 jing6 tung4, daan6 m4 hou2 tau1 wun6 ngo5 ji3 si1"],
  ["短摘：“出来行。”放在江湖语境里，后面通常带什么压力？", "更接近哪种含义？", ["要承担后果","出去散步","参加旅行","准备收工"], 0, "短摘本身很短，但江湖语境会带出“选择有代价”。", "phraseMeaning", "常用句意", "《无间道》", "ceot1 loi4 haang4", , "含短句级经典摘引；不复刻完整台词。"],
  ["你话冇问题，但成件事就系问题。", "这句的冲突点是？", ["整体风险被轻描淡写","菜不够热","电话没电","电影太长"], 0, "“没问题”的态度和实际风险冲突。", "reviewMix", "风险复盘", "《寒战》", "nei5 waa6 mou5 man6 tai4, daan6 seng4 gin6 si6 zau6 hai6 man6 tai4"],
  ["我唔需要你撑我，我需要你讲真话。", "关系里这句更看重什么？", ["真实反馈","无条件站队","立即离开","把声音压低"], 0, "说话人不要表面支持，而要真实判断。", "pragmaticTone", "真话/撑场", "《旺角卡门》", "ngo5 m4 seoi1 jiu3 nei5 caang1 ngo5, ngo5 seoi1 jiu3 nei5 gong2 zan1 waa2"],
  ["呢个唔系借口，系限制条件。", "这句试图澄清什么？", ["不是逃避而是约束","不是开会而是吃饭","不是粤语而是英语","不是现在而是昨天"], 0, "限制条件是客观边界，借口是逃避责任；这句在区分两者。", "workplaceTransfer", "约束条件", "《窃听风云》", "ni1 go3 m4 hai6 ze3 hau2, hai6 haan6 zai3 tiu4 gin6", "适合解释资源、时间、权限边界。"],
  ["场景：码头边说“风大，讲重点。”", "这句话最像什么状态？", ["环境紧张要压缩信息","准备慢慢聊天","要求唱完整首歌","正在点甜品"], 0, "风大和讲重点，说明环境不适合长聊。", "sceneInference", "压缩信息", "《英雄本色》", "fung1 daai6, gong2 zung6 dim2"],
  ["听辨进阶：“买 maai5”和“卖 maai6”如果听不清，先抓什么？", "最实用的策略是？", ["看交易方向","只记声母","忽略声调","猜说话人心情"], 0, "买和卖声调不同，但真实场景里也要看钱和货的方向。", "toneEar", "声调+语境", "《食神》", "maai5 / maai6"],
  ["你话“大家都明”，但我未明。", "这句在会议里最像什么？", ["请求显性说明","已经完全同意","准备换餐厅","拒绝继续听"], 0, "它把“大家都明”的假设打开放到台面上。", "workplaceTransfer", "显性说明", "《寒战》", "nei5 waa6 daai6 gaa1 dou1 ming4, daan6 ngo5 mei6 ming4", "适合避免被“默认共识”带走。"],
  ["场景：有人低声说“车唔好泊门口。”", "最可能担心什么？", ["被人认出或盯上","车太干净","门口太漂亮","准备拍合照"], 0, "不泊门口通常是避免暴露行踪或身份。", "sceneInference", "低调避险", "《暗战》", "ce1 m4 hou2 paak3 mun4 hau2"],
  ["你讲事实，我听到判断。", "这句指出什么问题？", ["事实里夹了立场","事实完全缺失","声音太慢","字数太少"], 0, "有些表达看似陈述事实，其实已经带判断。", "pragmaticTone", "事实/判断", "《窃听风云》", "nei5 gong2 si6 sat6, ngo5 teng1 dou2 pun3 dyun6"],
  ["你唔好成日用“迟啲”包住所有事。", "这句话最针对什么？", ["模糊拖延","发音太准","电影太短","点餐太快"], 0, "“迟啲”如果反复使用，会变成拖延和逃避。", "phraseMeaning", "模糊时间", "《金鸡》", "nei5 m4 hou2 seng4 jat6 jung6 ci4 di1 baau1 zyu6 so2 jau5 si6"],
  ["短摘：“饮杯茶。”在港片里不一定只是喝茶，可能是？", "更像哪种功能？", ["缓和或试探","正式签约","马上开打","结束训练"], 0, "短句在港片里常有社交功能：缓和、试探、留余地。", "phraseMeaning", "常用句意", "《无间道》", "jam2 bui1 caa4", , "含短句级经典摘引；重点是场景功能。"],
  ["如果你想拒绝，这句“我睇下先”最像什么？", "它通常保留了什么空间？", ["不马上答应","已经确定接受","马上付款","完全听不懂"], 0, "“我睇下先”常用于保留空间，不立刻承诺。", "phraseMeaning", "保留空间", "《花样年华》", "ngo5 tai2 haa5 sin1"],
  ["呢个决定唔难，难系点同人交代。", "真正困难在哪里？", ["沟通交代","选择菜式","坐哪一边","读哪个声调"], 0, "决定本身可能简单，但对相关人解释才难。", "workplaceTransfer", "交代成本", "《寒战》", "ni1 go3 kyut3 ding6 m4 naan4, naan4 hai6 dim2 tung4 jan4 gaau1 doi6", "职场里常见：方案易定，stakeholder沟通难。"],
  ["场景：仓库里有人说“灯唔好开晒。”", "更像什么考虑？", ["避免太显眼","准备办派对","方便拍广告","已经安全"], 0, "灯不开全，是为了低调或避免暴露。", "sceneInference", "隐蔽行动", "《警察故事》", "dang1 m4 hou2 hoi1 saai3"],
  ["你话系误会，但误会点解会发生？", "这句不是追责，而是追什么？", ["机制原因","谁声音最大","哪部电影","谁坐门口"], 0, "重点从“误会”转到误会产生机制。", "workplaceTransfer", "机制复盘", "《寒战》", "nei5 waa6 hai6 ng6 wui6, daan6 ng6 wui6 dim2 gaai2 wui5 faat3 sang1", "复盘时追机制，比只追人更有用。"],
  ["听辨进阶：“到 dou3”和“度 dou6”在快语速里，先看什么？", "较稳的方式是？", ["看句中位置和意思","只听音量","全部当同一个词","看说话人衣服"], 0, "快语速里声调可能不明显，要靠语法位置和句意辅助。", "toneEar", "快语速辨义", "《重庆森林》", "dou3 / dou6"],
  ["你畀我选择，但两个都系你想要嘅。", "这句在识别什么？", ["假选择","真道歉","普通点餐","假选择和被引导"], 3, "看似有选择，其实两个选项都导向对方想要的结果。", "pragmaticTone", "假选择", "《无间道》", "nei5 bei2 ngo5 syun2 zaak6, daan6 loeng5 go3 dou1 hai6 nei5 soeng2 jiu3 ge3"],
  ["我唔怕你反对，我怕你唔讲原因。", "这句鼓励什么？", ["有理由地反对","保持沉默","直接服从","换个场地"], 0, "成年人协作里，反对不是问题，无理由反对才难处理。", "workplaceTransfer", "高质量反对", "《寒战》", "ngo5 m4 paa3 nei5 faan2 deoi3, ngo5 paa3 nei5 m4 gong2 jyun4 jan1", "适合团队讨论和方案评审。"],
  ["场景：天台上说“唔好望落去，望住我。”", "这句话更像什么？", ["稳定对方情绪","教人看风景","准备拍照","提醒点菜"], 0, "天台语境下，重点是让对方把注意力放回来，稳定情绪。", "sceneInference", "稳定情绪", "《新警察故事》", "m4 hou2 mong6 lok6 heoi3, mong6 zyu6 ngo5"],
  ["你话“唔紧要”，但之后每句都提。", "说话人发现了什么？", ["其实还在意","已经放下","完全没听见","正在练发音"], 0, "反复提起说明“唔紧要”可能只是表面收住。", "pragmaticTone", "表面放下", "《花样年华》", "nei5 waa6 m4 gan2 jiu3, daan6 zi1 hau6 mui5 geoi3 dou1 tai4"],
  ["呢个安排听落公平，但边个承担风险？", "这句追问的是？", ["风险归属","电影分类","茶餐厅菜单","声母韵母"], 0, "安排表面公平，还要看风险落在谁身上。", "workplaceTransfer", "风险归属", "《窃听风云》", "ni1 go3 on1 paai4 teng1 lok6 gung1 ping4, daan6 bin1 go3 sing4 daam1 fung1 him2", "公平感之外，还要看风险分配。"],
  ["如果对方说“你自己谂清楚”，最可能不是让你自由发挥，而是？", "潜台词更接近？", ["后果自负","马上批准","随便庆祝","请你唱歌"], 0, "这句常把决定和后果交回给你。", "pragmaticTone", "后果自负", "《黑社会》", "nei5 zi6 gei2 nam2 cing1 co2"],
  ["场景：收工后说“今晚唔讲公事，讲人情。”", "它把沟通切到哪一层？", ["关系层","技术层","价格层","发音层"], 0, "“讲人情”是从事情本身转到关系、人情和面子。", "sceneInference", "关系沟通", "《金鸡》", "gam1 maan5 m4 gong2 gung1 si6, gong2 jan4 cing4"],
  ["你唔系迟到一分钟，系迟到一个信号。", "这句把迟到解释成什么？", ["可靠性问题","天气问题","菜单问题","字音问题"], 0, "迟到本身小，但传递了可靠性信号。", "reviewMix", "信号意识", "《寒战》", "nei5 m4 hai6 ci4 dou3 jat1 fan1 zung1, hai6 ci4 dou3 jat1 go3 seon3 hou6"],
  ["你讲得越客气，我越唔知你真正想点。", "这句反映什么困难？", ["客套掩盖真实意图","对方声音太低","粤拼太复杂","场地太吵"], 0, "过度客气有时会让真实意图更不清楚。", "pragmaticTone", "客套/意图", "《花样年华》", "nei5 gong2 dak1 jyut6 haak3 hei3, ngo5 jyut6 m4 zi1 nei5 zan1 zing3 soeng2 dim2"],
  ["将港片句“你咁讲我好难做”转成会议表达，最好是？", "较稳的转译是？", ["这会影响我方推进","你真系玩我","我而家走先","大家饮茶啦"], 0, "把情绪翻成业务影响，更容易被接住。", "workplaceTransfer", "情绪转译", "《喜剧之王》", "nei5 gam2 gong2 ngo5 hou2 naan4 zou6", "把个人压力转成项目影响。"],
  ["场景：电话里只说“听朝见，唔好迟。”", "它最强调什么？", ["准时和严肃性","随便聊天","取消计划","加点甜品"], 0, "短电话加“不迟到”，说明事情严肃、时间重要。", "sceneInference", "时间压力", "《警察故事》", "ting1 ziu1 gin3, m4 hou2 ci4"],
  ["你话“原则上可以”，我想知边个原则。", "这句在拆解什么？", ["模糊许可","正式拒绝","粤语发音","电影票价"], 0, "“原则上可以”听似同意，但边界不清。", "phraseMeaning", "模糊许可", "《寒战》", "nei5 waa6 jyun4 zak1 soeng6 ho2 ji5, ngo5 soeng2 zi1 bin1 go3 jyun4 zak1"],
  ["复盘：听粤语不只听词，还要听停顿、转折、称呼。", "这题最像 Day 02 的哪个训练目标？", ["语境综合判断","只背入声规则","只记电影名","只看选项长度"], 0, "Day 02 的目标是从单句字面升级到语境综合判断。", "reviewMix", "综合判断", "《无间道》", "teng1 jyut6 jyu5 m4 zi2 teng1 ci4, zung6 jiu3 teng1 ting4 deon6, zyun2 zit3, cing1 fu1"],
  ["如果一句“得啦”后面跟长沉默，通常要小心什么？", "更可能隐藏了什么？", ["勉强接受但未放下","强烈兴奋","完全没事","准备点歌"], 0, "“得啦”加沉默，可能是暂时收住，不等于真的没情绪。", "reviewMix", "语气复盘", "《花样年华》", "dak1 laa1"],
  ["你以为佢让步，其实佢只系换咗讲法。", "这句提醒识别什么？", ["包装后的坚持","真正退出","语音播报","点餐习惯"], 0, "换说法不一定是让步，可能只是把原立场包装得柔一点。", "pragmaticTone", "包装立场", "《窃听风云》", "nei5 ji5 wai4 keoi5 joeng6 bou6, kei4 sat6 keoi5 zi2 hai6 wun6 zo2 gong2 faat3"],
  ["最后一题：你听到“唔系唔得”，第一反应应该是什么？", "最稳的理解是？", ["有条件地可以","完全不可以","只是问天气","已经无条件通过"], 0, "“唔系唔得”不是直接答应，而是有条件、有保留地可以谈。", "phraseMeaning", "常用句意", "《寒战》", "m4 hai6 m4 dak1"]
];

export const movieTrainingDay02Questions: Question[] = seeds.map(
  ([cantoneseText, prompt, choices, answerIndex, explanation, trainingModule, theme, movieTitle, pronunciationHint, workplaceTip, movieNote], index) => ({
    id: index + 1,
    prompt,
    cantoneseText,
    spokenText: cantoneseText,
    choices,
    answerIndex,
    explanation,
    theme,
    difficulty: '挑战',
    questionType: trainingModule === 'toneEar' ? 'phonetic' : trainingModule === 'sceneInference' ? 'scene' : trainingModule === 'pragmaticTone' ? 'tone' : 'meaning',
    skillTag: theme,
    pronunciationHint,
    phoneticFocus: trainingModule === 'toneEar' ? theme : undefined,
    trainingModule,
    dayTag: 'Day 02',
    movieTitle,
    movieNote: note(movieTitle, movieNote),
    workplaceTip
  })
);
