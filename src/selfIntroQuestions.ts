import type { Question } from './types';

export const selfIntroChapterTitle = '返工第一日：自我介绍生存包';

type Module = NonNullable<Question['trainingModule']>;

type RawQuestion = {
  prompt: string;
  correctAnswer: string;
  distractors: [string, string, string];
  explanation: string;
  theme: string;
  trainingModule: Module;
  difficulty: Question['difficulty'];
  questionType: Question['questionType'];
  /** 只在不会泄题时给出原句，答题前会显示出来并可朗读 */
  cantoneseText?: string;
  pronunciationHint?: string;
  workplaceTip?: string;
};

// 正确答案位置打散，避免靠位置猜答案
const targetIndexes = [
  2, 0, 3, 1, 0, 2, 1, 3, 2, 1,
  3, 0, 2, 1, 0, 3, 1, 2,
  0, 3, 1, 2, 3, 0, 2, 1,
  1, 3, 0, 2, 3, 1, 0, 2,
  3, 1, 2, 0, 1, 3
];

const rawQuestions: RawQuestion[] = [
  // ── 模块一：自我介绍核心词（10 题）──────────────────────────
  {
    cantoneseText: '我姓陈，叫我阿陈得喇。',
    prompt: '句尾嘅「得喇」系咩意思？',
    correctAnswer: '就可以了、这样就行',
    distractors: ['我得到了一个称号', '一定要这样叫我', '我的姓很少见'],
    explanation:
      '「得喇」＝就可以了。「叫我阿陈得喇」就系「叫我阿陈就行了」。呢句系港式自我介绍最常见嘅收尾，一讲出嚟就唔似读稿。',
    theme: '开场白',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：得喇 dak1 laa3'
  },
  {
    prompt: '粤语里「系」同「喺」系两个唔同嘅字。想讲「我是深圳来的」，应该用边个？',
    correctAnswer: '我系深圳嚟嘅（系＝是）',
    distractors: ['我喺深圳嚟嘅（喺＝是）', '我系深圳喺嘅', '两个字通用，点写都得'],
    explanation:
      '「系」hai6＝是，「喺」hai2＝在。讲出身、身份用「系…嚟嘅」；讲地点先用「喺」，例如「我喺深圳返工」。呢对字系普通话母语者最常撞板嘅一组。',
    theme: '核心字辨析',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning'
  },
  {
    cantoneseText: '你住喺边度㗎？',
    prompt: '对方想知道咩？',
    correctAnswer: '你住在哪里',
    distractors: ['你搬来多久了', '你跟谁一起住', '你住得远不远'],
    explanation: '「喺」＝在，「边度」＝哪里。「你住喺边度」就系「你住在哪里」，自我介绍第二句最常被问到。',
    theme: '核心字辨析',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：喺 hai2 · 边度 bin1 dou6'
  },
  {
    cantoneseText: '我屋企喺荃湾，返工搭西铁。',
    prompt: '「屋企」系咩？',
    correctAnswer: '家',
    distractors: ['房子的企业', '公司宿舍', '房东'],
    explanation:
      '「屋企」uk1 kei2＝家，唔系「屋子的企业」。「返屋企」＝回家，系日常出现率最高嘅词之一。',
    theme: '生活场景词',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：屋企 uk1 kei2'
  },
  {
    prompt: '人哋问「请问你贵姓？」，最贴题嘅答法系边句？',
    correctAnswer: '我姓陈',
    distractors: ['我贵姓陈', '我叫陈', '我系陈大文嚟嘅'],
    explanation:
      '「贵姓」系敬语，只可以用嚟问人，唔可以讲「我贵姓」。人哋问姓，答姓就够；最后嗰句报全名唔算错，但答唔到重点。',
    theme: '称呼分寸',
    trainingModule: 'pragmaticTone',
    difficulty: '基础',
    questionType: 'scene'
  },
  {
    cantoneseText: '陈生，呢边请。',
    prompt: '「陈生」系点嘅称呼？',
    correctAnswer: '陈先生',
    distractors: ['陈医生', '姓陈的学生', '陈老板的儿子'],
    explanation:
      '「生」系「先生」嘅缩写。陈生＝陈先生、陈太＝陈太太、陈小姐＝未婚女士。香港日常几乎唔会叫全名，识呢套称呼先入到场。',
    theme: '称呼分寸',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：陈生 can4 saang1'
  },
  {
    cantoneseText: '大家叫我阿May得喇。',
    prompt: '名前面加个「阿」，作用系咩？',
    correctAnswer: '表示亲切，把距离一下拉近',
    distractors: ['表示对方是长辈', '表示英文名比中文名正式', '表示对方职位比你高'],
    explanation:
      '「阿」系香港最常用嘅亲切前缀：阿明、阿May、阿Sir。加咗之后，关系即刻由「同事」变「熟人」。自己主动讲「叫我阿X」比等人哋叫你全名自然好多。',
    theme: '称呼分寸',
    trainingModule: 'pragmaticTone',
    difficulty: '基础',
    questionType: 'tone'
  },
  {
    cantoneseText: '你今年几大呀？',
    prompt: '对方问紧咩？',
    correctAnswer: '你今年多大年纪',
    distractors: ['你有多高', '你家里几个人', '你职级多高'],
    explanation:
      '「几大」＝几多岁。问细路讲「几岁」，问成年人讲「几大」会自然啲。问「几多」就系问数量，唔好撞乱。',
    theme: '基本资料',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：几大 gei2 daai6'
  },
  {
    cantoneseText: '我识少少广东话，讲得唔好唔好笑我。',
    prompt: '「识少少」系咩意思？',
    correctAnswer: '会一点点',
    distractors: ['完全不会', '认识几个说广东话的人', '只看得懂不会说'],
    explanation:
      '「识」＝会，「少少」＝一点点。「我识少少广东话」系成年人学粤语嘅万用开场白：既讲清楚水平，又留咗余地，比「我唔识讲」友善得多。',
    theme: '开场白',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：识 sik1 · 少少 siu2 siu2'
  },
  {
    cantoneseText: '佢系我旧同事嚟嘅。',
    prompt: '「…嚟嘅」喺呢句度做咩用？',
    correctAnswer: '用来交代身份、来历，等于「是…来的」',
    distractors: ['表示对方要过来了', '表示这件事已经过去', '表示不太确定'],
    explanation:
      '「系…嚟嘅」系介绍身份嘅固定框架：我系北京嚟嘅、佢系我旧同事嚟嘅。「嚟」喺呢度唔系「来」嘅动作，唔好照字面译。',
    theme: '句型框架',
    trainingModule: 'phraseMeaning',
    difficulty: '进阶',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：嚟嘅 lai4 ge3'
  },

  // ── 模块二：问句词同语序（8 题）────────────────────────────
  {
    cantoneseText: '同你倾紧偈嗰个系边个？',
    prompt: '「边个」系咩意思？',
    correctAnswer: '谁',
    distractors: ['哪一边', '哪个部门', '什么时候'],
    explanation:
      '「边」系粤语疑问词嘅核心：边个（谁）、边度（哪里）、边样（哪个）、边行（哪一行）。记住一个「边」字，一次过解决四个问题。',
    theme: '疑问词',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：边个 bin1 go3 · 倾偈 king1 gai2（聊天）'
  },
  {
    prompt: '想问对方「你是做哪一行的」，边句最贴？',
    correctAnswer: '你做边行㗎？',
    distractors: ['你做紧乜嘢？', '你系咩行㗎？', '你有乜嘢工做？'],
    explanation:
      '「做边行」专指职业、行业。「做紧乜嘢」系问「你而家喺度做紧咩动作」，问出嚟对方可能答「我覆紧email」。一字之差，答案差好远。',
    theme: '疑问词',
    trainingModule: 'workplaceTransfer',
    difficulty: '进阶',
    questionType: 'scene',
    workplaceTip: '饭局上问职业，用「你做边行」最安全；熟啲先好问公司同职位。'
  },
  {
    prompt: '「我先走了」用粤语讲，语序应该系点？',
    correctAnswer: '我走先',
    distractors: ['我先走', '先我走', '我先走先'],
    explanation:
      '粤语把「先」放喺动词后面：我走先、你食先、听我讲先。呢个系普通话母语者最常撞板嘅语序差异，改过嚟即刻地道好多。',
    theme: '语序',
    trainingModule: 'phraseMeaning',
    difficulty: '进阶',
    questionType: 'missingPhrase'
  },
  {
    prompt: '「给我一杯水」，传统粤语语序系点排？',
    correctAnswer: '畀杯水我',
    distractors: ['畀我杯水', '我畀杯水', '畀水我杯'],
    explanation:
      '粤语系「畀＋物＋人」：畀杯水我、畀本书我，同普通话「给我一杯水」啱啱调转。近年受普通话影响，「畀我杯水」喺香港都听到，但「畀杯水我」先系正宗语序。',
    theme: '语序',
    trainingModule: 'phraseMeaning',
    difficulty: '进阶',
    questionType: 'missingPhrase'
  },
  {
    prompt: '「多吃点」用粤语点讲？',
    correctAnswer: '食多啲',
    distractors: ['多食啲', '啲多食', '多多食'],
    explanation:
      '粤语习惯「动词＋多／少＋啲」：食多啲、饮少啲、讲多两句。同「走先」一样，都系把修饰成分推到动词后面。',
    theme: '语序',
    trainingModule: 'phraseMeaning',
    difficulty: '进阶',
    questionType: 'missingPhrase'
  },
  {
    cantoneseText: '你系咪香港人嚟㗎？',
    prompt: '「系咪」等于普通话嘅边个词？',
    correctAnswer: '是不是',
    distractors: ['是谁', '喜不喜欢', '会不会'],
    explanation:
      '「系咪」hai6 mai6 系「系唔系」嘅缩读＝是不是。万用问句：你系咪返工？佢系咪走咗？识咗呢个，问句一下子就够用。',
    theme: '疑问词',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning'
  },
  {
    prompt: '想问「你有没有兄弟姐妹」，边句啱？',
    correctAnswer: '你有冇兄弟姊妹？',
    distractors: ['你有唔有兄弟姊妹？', '你冇有兄弟姊妹？', '你有无冇兄弟姊妹？'],
    explanation:
      '粤语正反问一般系「动词＋唔＋动词」（去唔去、得唔得），但「有」嘅否定系「冇」，所以要讲「有冇」，唔讲「有唔有」。呢个系唯一要特别记嘅例外。',
    theme: '语序',
    trainingModule: 'phraseMeaning',
    difficulty: '进阶',
    questionType: 'missingPhrase',
    pronunciationHint: 'jyutping：有冇 jau5 mou5'
  },
  {
    cantoneseText: '我北京人嚟㗎。',
    prompt: '句尾个「㗎」带出咩语气？',
    correctAnswer: '解释、确认，「本来就是这样」的感觉',
    distractors: ['疑问，等于「吗」', '否定，等于「不是」', '将来，等于「会」'],
    explanation:
      '「㗎」gaa3 系「嘅＋呀」嘅合音，带确认同解释嘅语气。同一句去掉语气词就变得好硬；语气词用得啱，系粤语听落地唔地道嘅分水岭。',
    theme: '语气词',
    trainingModule: 'pragmaticTone',
    difficulty: '进阶',
    questionType: 'tone'
  },

  // ── 模块三：工作同身份（8 题）──────────────────────────────
  {
    cantoneseText: '你间公司人工高唔高㗎？',
    prompt: '「人工」喺粤语里系咩？',
    correctAnswer: '工资、薪水',
    distractors: ['人手、人力', '人工智能', '加班费'],
    explanation:
      '粤语「人工」＝工资。「人工几多？」就系问月薪几多。呢个系普通话母语者最容易误会嘅词之一——听落似「人力」，其实讲紧你个荷包。',
    theme: '职场词',
    trainingModule: 'workplaceTransfer',
    difficulty: '基础',
    questionType: 'meaning',
    workplaceTip: '香港职场问人工唔算大忌，但答「麻麻地啦」就可以轻轻带过。'
  },
  {
    cantoneseText: '我听日要返工，唔去得喇。',
    prompt: '「返工」系咩意思？',
    correctAnswer: '上班',
    distractors: ['返回工厂', '把做错的重做一次', '回公司拿东西'],
    explanation:
      '粤语「返工」＝上班，「收工／放工」＝下班。注意普通话「返工」系「重做」，意思完全唔同——呢个系最经典嘅粤普假朋友。',
    theme: '职场词',
    trainingModule: 'workplaceTransfer',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：返工 faan1 gung1 · 收工 sau1 gung1'
  },
  {
    cantoneseText: '我都系打工仔啫。',
    prompt: '「打工仔」系点样嘅身份？',
    correctAnswer: '受雇于人的上班族（常带自嘲）',
    distractors: ['打零工赚外快的人', '正在找工作的人', '刚入职的实习生'],
    explanation:
      '香港讲「打工」＝受雇于人，同「做老细」相对，唔一定系零散工。「我都系打工仔啫」系一句好用嘅自嘲，可以瞬间拉近距离。',
    theme: '职场词',
    trainingModule: 'workplaceTransfer',
    difficulty: '基础',
    questionType: 'meaning'
  },
  {
    cantoneseText: '老细揾你呀。',
    prompt: '「老细」系边个？',
    correctAnswer: '老板',
    distractors: ['资历老的同事', '细心的前辈', '年纪大的长辈'],
    explanation:
      '「老细」lou5 sai3＝老板。喺茶餐厅叫伙记、喺街市叫档主，都可以叫一声「老细」，系一种客气；「揾」＝找。',
    theme: '职场词',
    trainingModule: 'workplaceTransfer',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：老细 lou5 sai3 · 揾 wan2（找）'
  },
  {
    cantoneseText: '佢畀人炒咗鱿鱼。',
    prompt: '佢发生咗咩事？',
    correctAnswer: '被解雇了',
    distractors: ['被请了一顿饭', '被调去别的部门', '升职了'],
    explanation:
      '「炒鱿鱼」＝解雇，「畀人炒」＝被炒。反过来「我炒老细鱿鱼」就系我辞职唔捞——港片金句，讲返转头仲有几分气势。',
    theme: '职场词',
    trainingModule: 'workplaceTransfer',
    difficulty: '进阶',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：炒鱿鱼 caau2 jau4 jyu2 · 畀人 bei2 jan4（被）'
  },
  {
    cantoneseText: '我啱啱转咗工，仲喺适应紧。',
    prompt: '「转工」同「啱啱」分别系咩意思？',
    correctAnswer: '换工作／刚刚',
    distractors: ['换部门／正好', '转正／恰巧', '调班／马上'],
    explanation:
      '「转工」＝跳槽换工作，「啱啱」＝刚刚。自我介绍讲经历好用：「我啱啱转咗工」，既交代咗现状，又解释咗点解你仲未熟。',
    theme: '职场词',
    trainingModule: 'workplaceTransfer',
    difficulty: '进阶',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：转工 zyun2 gung1 · 啱啱 ngaam1 ngaam1'
  },
  {
    cantoneseText: '今晚要OT，唔食得饭喇。',
    prompt: '呢句嘅「OT」系咩？',
    correctAnswer: '加班',
    distractors: ['开会', '出差', '值夜班'],
    explanation:
      'OT＝overtime＝加班。香港人日常直接夹英文缩写：OT、send个file畀你、开个meeting。中英夹杂系港式口语嘅常态，唔系唔正宗。',
    theme: '职场词',
    trainingModule: 'workplaceTransfer',
    difficulty: '基础',
    questionType: 'meaning',
    workplaceTip: '写email用书面语，倾偈就照夹英文——分场合系港式职场语感嘅一部分。'
  },
  {
    cantoneseText: '搞掂晒，你可以收工喇。',
    prompt: '「搞掂」系咩意思？',
    correctAnswer: '搞定、办妥',
    distractors: ['搞砸了', '正在处理中', '太复杂做唔到'],
    explanation:
      '「搞掂」gaau2 dim6＝搞定，「搞掂晒」＝全部搞定，反面系「搞唔掂」。呢个词喺办公室出现率极高，答完事讲一句好用得过「已完成」。',
    theme: '职场词',
    trainingModule: 'workplaceTransfer',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：搞掂 gaau2 dim6'
  },

  // ── 模块四：寒暄同场面话（8 题）────────────────────────────
  {
    cantoneseText: '喂，食咗饭未呀？',
    prompt: '街上撞到熟人讲呢句，最贴切嘅理解系？',
    correctAnswer: '一句寒暄，未必真系想知你食咗未',
    distractors: ['他想请你吃饭', '他嫌你来得不是时候', '他在问你有没有空'],
    explanation:
      '「食咗饭未」同「你好」差唔多，系打招呼。答「食咗喇，你呢？」就得，唔使认真汇报餐单——当真答落去，反而系新手标志。',
    theme: '寒暄',
    trainingModule: 'pragmaticTone',
    difficulty: '进阶',
    questionType: 'tone'
  },
  {
    cantoneseText: '有心，佢好返好多喇。',
    prompt: '你问候咗对方屋企人身体，佢答「有心」，系咩意思？',
    correctAnswer: '多谢你关心',
    distractors: ['我有这个打算', '你太客气了，不用来', '他还有心愿未了'],
    explanation:
      '「有心」系答谢人哋关心嘅固定讲法，等于「多谢你挂住」。唔识呢句好容易以为对方答非所问，其实佢已经好礼貌咁多咗你一句。',
    theme: '寒暄',
    trainingModule: 'pragmaticTone',
    difficulty: '进阶',
    questionType: 'tone'
  },
  {
    prompt: '朋友送咗份礼物畀你，应该讲边句？',
    correctAnswer: '多谢',
    distractors: ['唔该', '唔该晒你', '麻烦晒'],
    explanation:
      '收礼物、受赞美讲「多谢」；人哋帮手、提供服务讲「唔该」。呢对系粤语最经典嘅分界线——收咗礼物讲「唔该」，一开口就听得出系新手。',
    theme: '寒暄',
    trainingModule: 'pragmaticTone',
    difficulty: '进阶',
    questionType: 'scene'
  },
  {
    cantoneseText: '好耐冇见喎，你都冇乜变。',
    prompt: '「好耐冇见」系咩意思？',
    correctAnswer: '好久不见',
    distractors: ['很难约到你', '你变了很多', '我等了很久'],
    explanation:
      '「耐」noi6＝久，「好耐冇见」＝好久不见。顺手记埋「耐唔耐」＝偶尔、时不时，两个词一齐记性价比最高。',
    theme: '寒暄',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：好耐 hou2 noi6'
  },
  {
    cantoneseText: '你好熟口熟面喎。',
    prompt: '对方想讲咩？',
    correctAnswer: '你看着好面熟',
    distractors: ['你很会说话', '你人缘很好', '你吃得很熟练'],
    explanation:
      '「熟口熟面」＝面善、眼熟，系饭局上嘅破冰金句。听到之后顺住认一认就得，例如「系咩？我都觉得，系咪喺边度见过？」',
    theme: '破冰',
    trainingModule: 'pragmaticTone',
    difficulty: '进阶',
    questionType: 'tone'
  },
  {
    cantoneseText: '麻麻地啦，唔好意思。',
    prompt: '人哋赞你粤语讲得好，你答「麻麻地啦」，即系？',
    correctAnswer: '一般般、马马虎虎',
    distractors: ['非常流利', '完全不会', '妈妈教的'],
    explanation:
      '「麻麻地」maa4 maa2 dei2＝一般般，系港式谦虚嘅万用词。讲自己能力、评价一间餐厅都用得，比直接讲「唔好」软好多。',
    theme: '寒暄',
    trainingModule: 'phraseMeaning',
    difficulty: '进阶',
    questionType: 'meaning'
  },
  {
    cantoneseText: '唔使客气，小事啫。',
    prompt: '「唔使」系咩意思？',
    correctAnswer: '不用、不必',
    distractors: ['不能', '不会', '不许'],
    explanation:
      '「唔使」m4 sai2＝不用。「唔使客气」「唔使唔好意思」「唔使急」都系高频组合，回应多谢用呢句最标准。',
    theme: '寒暄',
    trainingModule: 'phraseMeaning',
    difficulty: '基础',
    questionType: 'meaning',
    pronunciationHint: 'jyutping：唔使 m4 sai2'
  },
  {
    prompt: '正式场合第一次见客户，边句最得体？',
    correctAnswer: '幸会，日后有咩做得唔啱请多多包涵',
    distractors: ['好耐冇见喎', '食咗饭未呀', '你好熟口熟面喎'],
    explanation:
      '「幸会」用喺正式初次见面；「好耐冇见」要见过先讲得；「食咗饭未」「熟口熟面」系熟人或者饭局嘅语气。同一堆客套话，分错场合就变失礼——呢个就系分寸。',
    theme: '场面话',
    trainingModule: 'pragmaticTone',
    difficulty: '挑战',
    questionType: 'scene',
    workplaceTip: '正式度排序：幸会 ＞ 你好 ＞ 食咗饭未。见客户揀第一个，同事之间揀第三个。'
  },

  // ── 模块五：小测试（6 题，综合复盘）──────────────────────────
  {
    prompt:
      '返工第一日，老细叫你自我介绍：「大家好，我叫阿Ken，我＿＿深圳嚟嘅，做开市场推广，识少少广东话，讲得唔好请大家＿＿。」两个空点填？',
    correctAnswer: '系／包涵',
    distractors: ['喺／包涵', '系／客气', '喺／客气'],
    explanation:
      '「系…嚟嘅」讲来历，唔可以用表示地点嘅「喺」；「请多多包涵」系谦辞，「唔使客气」系回应人哋道谢，方向啱啱调转。',
    theme: '小测试',
    trainingModule: 'reviewMix',
    difficulty: '挑战',
    questionType: 'missingPhrase'
  },
  {
    cantoneseText: '你好熟口熟面喎，系咪喺边度见过？',
    prompt: '饭局上对面嘅人咁讲，最自然嘅接法系？',
    correctAnswer: '系咩？我都觉得，你系咪喺荃湾返工㗎？',
    distractors: ['多谢晒你', '唔使客气', '我食咗饭喇'],
    explanation:
      '「熟口熟面」系破冰，对方想开话题，顺住认一认、抛返个线索畀佢最自然。道谢同「唔使客气」都系答错场，讲食饭就更加接唔上。',
    theme: '小测试',
    trainingModule: 'reviewMix',
    difficulty: '挑战',
    questionType: 'scene'
  },
  {
    cantoneseText: '食咗饭未呀？',
    prompt: '喺电梯撞到隔篱部门嘅老细，佢问你呢句，最得体嘅答法系？',
    correctAnswer: '食咗喇，你呢？',
    distractors: ['仲未，你想请我食？', '多谢晒，唔使客气', '我平时唔食晏㗎'],
    explanation:
      '呢句系寒暄，最安全系答完反问返，两秒钟收场。当佢真系请客、或者认真讲自己嘅饮食习惯，都会令电梯剩低嘅十秒好尴尬。',
    theme: '小测试',
    trainingModule: 'reviewMix',
    difficulty: '挑战',
    questionType: 'scene'
  },
  {
    cantoneseText: '你间公司人工高唔高㗎？',
    prompt: '啱啱识嘅人问你呢句，你唔想认真答，边句最得体？',
    correctAnswer: '麻麻地啦，够使咋',
    distractors: ['高，好高', '我冇人工㗎', '呢啲唔关你事'],
    explanation:
      '「人工」＝工资，「麻麻地」＝一般般，「够使」＝够用。用谦虚词软化敏感问题，唔答又唔失礼——呢种软钉子系港式对话嘅分寸。',
    theme: '小测试',
    trainingModule: 'reviewMix',
    difficulty: '挑战',
    questionType: 'scene'
  },
  {
    prompt: '「你先吃，我等一下走」，边句语序最地道？',
    correctAnswer: '你食先，我阵间走',
    distractors: ['你先食，我阵间走', '你食先，我走阵间', '先你食，我走阵间'],
    explanation:
      '「先」要放喺动词后面（食先、走先），但时间词「阵间」照旧放喺动词前面。语序唔系一刀切全部调转——识分呢一层，先算真系明咗。',
    theme: '小测试',
    trainingModule: 'reviewMix',
    difficulty: '挑战',
    questionType: 'missingPhrase',
    pronunciationHint: 'jyutping：阵间 zan6 gaan1（等一下）'
  },
  {
    prompt: '以下边一句，最唔应该出现喺第一次自我介绍？',
    correctAnswer: '我啱啱畀人炒咗鱿鱼',
    distractors: ['我做开市场推广', '我识少少广东话', '我屋企喺荃湾'],
    explanation:
      '「畀人炒鱿鱼」＝被解雇，第一次见面就自曝，语气太重。同一件事讲成「我啱啱转紧工」就得体好多。识个词系第一步，知几时唔好讲，先系分寸。',
    theme: '小测试',
    trainingModule: 'reviewMix',
    difficulty: '挑战',
    questionType: 'scene',
    workplaceTip: '自我介绍报三样就够：点称呼、做边行、住边区。其余留返畀对方问。'
  }
];

export const selfIntroQuestions: Question[] = rawQuestions.map((raw, index) => {
  const answerIndex = targetIndexes[index] ?? index % 4;
  const choices = [...raw.distractors];
  choices.splice(answerIndex, 0, raw.correctAnswer);
  return {
    id: index + 1,
    prompt: raw.prompt,
    choices,
    answerIndex,
    explanation: raw.explanation,
    theme: raw.theme,
    difficulty: raw.difficulty,
    cantoneseText: raw.cantoneseText,
    spokenText: raw.cantoneseText,
    questionType: raw.questionType,
    skillTag: raw.theme,
    pronunciationHint: raw.pronunciationHint,
    trainingModule: raw.trainingModule,
    workplaceTip: raw.workplaceTip
  };
});
