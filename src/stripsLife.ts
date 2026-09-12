import type { StripPack } from './stripTypes';

/**
 * 港式生活梗包。
 *
 * 选词标准：香港人日常真正挂喺口边、而且普通话直译会失真嘅词
 * （得闲饮茶、执生、蛇王、食花生、抽水…），
 * 用茶餐厅／办公室／群组对话带出来。
 */
export const lifePack: StripPack = {
  id: 'life',
  name: '港式生活梗',
  eyebrow: 'PACK 02 · 生活粤语',
  description: '25 条：茶餐厅黑话、办公室潜台词、群组日常，学识听弦外之音。',
  accent: 'teal',
  strips: [
    {
      id: 'life-dak-haan',
      packId: 'life',
      title: '得闲饮茶',
      hook: '听落好亲切，其实多数唔会饮。',
      scene: '街上偶遇',
      panels: [
        { speaker: '旧同事', canto: '哗，好耐冇见！', cn: '哇，好久不见！', jyut: '好耐 hou2 noi6' },
        { speaker: '阿Ken', canto: '系呀，你都冇乜变。', cn: '是啊，你都没怎么变。' },
        { speaker: '旧同事', canto: '得闲饮茶啦！', cn: '有空喝茶啊！', jyut: '得闲饮茶 dak1 haan4 jam2 caa4' },
        { speaker: '阿Ken', canto: '好好好，一定一定。', cn: '好好好，一定一定。' },
        { canto: '', cn: '', aside: '「得闲饮茶」九成系客气收场白，同「改天约饭」一样，讲完多数唔会真约。真心想约会讲具体：「下星期三得唔得？」' }
      ],
      words: [
        { term: '得闲', jyut: 'dak1 haan4', means: '有空', usage: '你几时得闲？' },
        { term: '得闲饮茶', jyut: 'dak1 haan4 jam2 caa4', means: '客套的道别语，多数不会真约', usage: '倾完两句就得闲饮茶。' },
        { term: '一定一定', jyut: 'jat1 ding6', means: '口头答应的客套回应', usage: '好好好，一定一定。' }
      ],
      checks: [
        {
          prompt: '人哋话「得闲饮茶」，最贴切嘅理解？',
          choices: ['一句客套的收场白', '他明天就要约你', '他想你请客'],
          answerIndex: 0,
          explanation: '多数只系礼貌收尾。想真约就会讲具体时间。'
        }
      ]
    },
    {
      id: 'life-caa-gei-hak-waa',
      packId: 'life',
      title: '靓仔定白饭',
      hook: '茶餐厅嘅暗号，唔识听会好尴尬。',
      scene: '茶餐厅落单',
      panels: [
        { speaker: '伙记', canto: '要碗靓仔？', cn: '要碗白饭吗？', jyut: '靓仔 leng3 zai2' },
        { speaker: '阿May', canto: '（心谂：我边有靓仔）', cn: '（心想：我哪来的帅哥）' },
        { speaker: '伙记', canto: '靓仔即系白饭，靓女系白粥。', cn: '靓仔就是白饭，靓女是白粥。', jyut: '靓女 leng3 neoi5' },
        { speaker: '阿May', canto: '咁细蓉呢？', cn: '那细蓉呢？', jyut: '细蓉 sai3 jung2' },
        { speaker: '伙记', canto: '细蓉＝细碗云吞面。', cn: '细蓉＝小碗云吞面。' },
        { canto: '', cn: '', aside: '呢套黑话源自伙记落单要快、要够响亮。识听已经算半个熟客。' }
      ],
      words: [
        { term: '靓仔', jyut: 'leng3 zai2', means: '（茶餐厅黑话）白饭', usage: '一个靓仔唔该。' },
        { term: '靓女', jyut: 'leng3 neoi5', means: '（茶餐厅黑话）白粥', usage: '要碗靓女。' },
        { term: '细蓉', jyut: 'sai3 jung2', means: '小碗云吞面', usage: '一个细蓉走青。' }
      ],
      checks: [
        {
          prompt: '伙记问你要唔要「靓仔」，佢问紧？',
          choices: ['要不要白饭', '要不要加菜', '要不要换座位'],
          answerIndex: 0,
          explanation: '茶餐厅黑话：靓仔＝白饭，靓女＝白粥。'
        }
      ]
    },
    {
      id: 'life-zau-tim',
      packId: 'life',
      title: '少甜走冰',
      hook: '一句话讲晒你要点饮。',
      scene: '茶餐厅落单',
      panels: [
        { speaker: '阿Ken', canto: '冻柠茶少甜，走冰。', cn: '冻柠檬茶少糖，不要冰。', jyut: '走冰 zau2 bing1' },
        { speaker: '伙记', canto: '走冰要加钱。', cn: '不要冰要加钱。' },
        { speaker: '阿May', canto: '我要斋啡。', cn: '我要黑咖啡。', jyut: '斋啡 zaai1 fe1' },
        { speaker: '伙记', canto: '即系飞沙走奶。', cn: '就是不要糖不要奶。', jyut: '飞沙走奶 fei1 saa1 zau2 naai5' },
        { canto: '', cn: '', aside: '「走」＝不要（走糖、走冰、走青），「飞」＝去掉（飞边＝去面包边）。「沙」指砂糖。' }
      ],
      words: [
        { term: '走', jyut: 'zau2', means: '（点单）不要某样东西', usage: '走葱走冰。' },
        { term: '飞沙走奶', jyut: 'fei1 saa1 zau2 naai5', means: '不加糖不加奶', usage: '一杯飞沙走奶。' },
        { term: '斋啡', jyut: 'zaai1 fe1', means: '黑咖啡', usage: '我净系饮斋啡。' }
      ],
      checks: [
        {
          prompt: '点单讲「走冰」即系？',
          choices: ['不要冰', '多加冰', '要冰镇过的'],
          answerIndex: 0,
          explanation: '「走」＝去掉。走冰、走糖、走青（不要葱）。'
        }
      ]
    },
    {
      id: 'life-daap-toi',
      packId: 'life',
      title: '搭枱',
      hook: '同陌生人共用一张枱，香港日常。',
      scene: '午饭高峰',
      panels: [
        { speaker: '伙记', canto: '搭枱得唔得？', cn: '拼桌可以吗？', jyut: '搭枱 daap3 toi2' },
        { speaker: '阿Ken', canto: '冇问题，坐啦。', cn: '没问题，坐吧。' },
        { speaker: '陌生人', canto: '唔该借借。', cn: '麻烦让一下。', jyut: '借借 ze3 ze3' },
        { canto: '', cn: '', aside: '午饭时间搭枱系常态，唔系冒犯。「唔该借借」＝借过／让一让，逼地铁都用得着。' }
      ],
      words: [
        { term: '搭枱', jyut: 'daap3 toi2', means: '拼桌', usage: '唔介意搭枱吖？' },
        { term: '唔该借借', jyut: 'm4 goi1 ze3 ze3', means: '麻烦让一让', usage: '唔该借借，我落车。' },
        { term: '冇问题', jyut: 'mou5 man6 tai4', means: '没问题', usage: '冇问题，交畀我。' }
      ],
      checks: [
        {
          prompt: '想挤过人群，讲边句最自然？',
          choices: ['唔该借借', '唔好意思我走先', '多谢晒'],
          answerIndex: 0,
          explanation: '「唔该借借」＝借过，挤地铁、过人堆都用。'
        }
      ]
    },
    {
      id: 'life-se-wong',
      packId: 'life',
      title: '蛇王',
      hook: '返紧工，但唔系做紧嘢。',
      scene: '办公室下午三点',
      panels: [
        { speaker: '阿May', canto: '阿Ken去咗边？', cn: '阿Ken去哪了？' },
        { speaker: '同事', canto: '落咗楼下蛇王。', cn: '下楼偷懒去了。', jyut: '蛇王 se4 wong4' },
        { speaker: '阿May', canto: '佢台机仲开住㖭。', cn: '他电脑还开着呢。', jyut: '㖭 tim1' },
        { speaker: '同事', canto: '咁先似扮紧工。', cn: '这样才像在假装工作。', jyut: '扮工 baan6 gung1' },
        { canto: '', cn: '', aside: '「蛇王」＝上班时间偷懒（蛇＝懒），「扮工」＝装作在工作。两个都系办公室高频词。' }
      ],
      words: [
        { term: '蛇王', jyut: 'se4 wong4', means: '上班偷懒', usage: '唔好成日蛇王。' },
        { term: '扮工', jyut: 'baan6 gung1', means: '假装在工作', usage: '扮咗成日工。' },
        { term: '㖭', jyut: 'tim1', means: '句末语气词，表示「还…呢」', usage: '佢仲未走㖭。' }
      ],
      checks: [
        {
          prompt: '同事话你「蛇王」，佢指你？',
          choices: ['上班时间偷懒', '很会带团队', '胆子很大'],
          answerIndex: 0,
          explanation: '蛇＝懒。蛇王＝偷懒之王。'
        }
      ]
    },
    {
      id: 'life-zap-saang',
      packId: 'life',
      title: '执生',
      hook: '冇剧本嘅时候，自己睇住办。',
      scene: '活动现场出事',
      panels: [
        { speaker: '老细', canto: '讲者迟到半个钟。', cn: '讲者迟到半小时。', jyut: '半个钟 bun3 go3 zung1' },
        { speaker: '阿Ken', canto: '咁点算？', cn: '那怎么办？', jyut: '点算 dim2 syun3' },
        { speaker: '老细', canto: '你执生啦。', cn: '你随机应变吧。', jyut: '执生 zap1 saang1' },
        { speaker: '阿Ken', canto: '（即系自己谂办法）', cn: '（就是自己想办法）' },
        { canto: '', cn: '', aside: '「执生」＝按现场情况自己处理。老细讲呢两个字，通常代表佢唔会畀指示。' }
      ],
      words: [
        { term: '执生', jyut: 'zap1 saang1', means: '随机应变、自己看着办', usage: '现场执生。' },
        { term: '点算', jyut: 'dim2 syun3', means: '怎么办', usage: '而家点算好？' },
        { term: '半个钟', jyut: 'bun3 go3 zung1', means: '半小时', usage: '等咗半个钟。' }
      ],
      checks: [
        {
          prompt: '老细话「你执生啦」，即系？',
          choices: ['你自己看着办', '你要小心安全', '你可以下班了'],
          answerIndex: 0,
          explanation: '执生＝随机应变，多数代表冇进一步指示。'
        }
      ]
    },
    {
      id: 'life-daai-wok',
      packId: 'life',
      title: '大镬',
      hook: '一个字讲晒「出事了」。',
      scene: '发现报表出错',
      panels: [
        { speaker: '阿May', canto: '份报表寄咗畀客未？', cn: '报表发给客户了吗？' },
        { speaker: '阿Ken', canto: '寄咗喇。', cn: '发了。' },
        { speaker: '阿May', canto: '弊，个数错咗。', cn: '糟了，数字错了。', jyut: '弊 bai6' },
        { speaker: '阿Ken', canto: '大镬。', cn: '闯大祸了。', jyut: '大镬 daai6 wok6' },
        { canto: '', cn: '', aside: '「镬」＝大铁锅，「大镬」＝闯大祸；「弊」系短促嘅「糟了」。两个连住讲最有戏。' }
      ],
      words: [
        { term: '大镬', jyut: 'daai6 wok6', means: '闯大祸、事情严重', usage: '今次真系大镬。' },
        { term: '弊', jyut: 'bai6', means: '糟了', usage: '弊，唔记得咗。' },
        { term: '孭镬', jyut: 'me1 wok6', means: '背黑锅', usage: '唔好要我孭镬。' }
      ],
      checks: [
        {
          prompt: '「孭镬」系咩意思？',
          choices: ['背黑锅、担责任', '拿着锅做饭', '升职加薪'],
          answerIndex: 0,
          explanation: '镬＝锅。孭＝背。孭镬＝背黑锅。'
        }
      ]
    },
    {
      id: 'life-tau-han',
      packId: 'life',
      title: '头痕',
      hook: '唔系真系头痒，系谂到烦。',
      scene: '死线前',
      panels: [
        { speaker: '阿Ken', canto: '听日就死线，我好头痕。', cn: '明天就是截止日，我很头疼。', jyut: '头痕 tau4 han4' },
        { speaker: '阿May', canto: '做咗几多？', cn: '做了多少？' },
        { speaker: '阿Ken', canto: '得个头。', cn: '只有个开头。', jyut: '得个头 dak1 go3 tau4' },
        { speaker: '阿May', canto: '咁真系头痕。', cn: '那确实头疼。' },
        { canto: '', cn: '', aside: '「痕」＝痒。头痕＝愁到抓头，等于普通话「头疼」。「得个头」系食字：只得一个开头。' }
      ],
      words: [
        { term: '头痕', jyut: 'tau4 han4', means: '发愁、头疼', usage: '呢单嘢好头痕。' },
        { term: '痕', jyut: 'han4', means: '痒', usage: '背脊好痕。' },
        { term: '死线', jyut: 'sei2 sin3', means: '截止期限', usage: '死线系听日。' }
      ],
      checks: [
        {
          prompt: '「我好头痕」讲紧？',
          choices: ['很发愁', '头皮发痒要洗头', '头撞到了'],
          answerIndex: 0,
          explanation: '头痕＝愁到抓头，即头疼、烦恼。'
        }
      ]
    },
    {
      id: 'life-sam-daai-sai',
      packId: 'life',
      title: '心大心细',
      hook: '拣唔落手嗰种状态。',
      scene: '商场试衫',
      panels: [
        { speaker: '阿May', canto: '买定唔买好？', cn: '买还是不买好？' },
        { speaker: '阿Ken', canto: '你已经心大心细咗半个钟。', cn: '你已经犹豫了半小时。', jyut: '心大心细 sam1 daai6 sam1 sai3' },
        { speaker: '阿May', canto: '我心郁郁。', cn: '我有点心动。', jyut: '心郁郁 sam1 juk1 juk1' },
        { speaker: '阿Ken', canto: '心郁郁即系想买。', cn: '心动就是想买。' },
        { canto: '', cn: '', aside: '「心大心细」＝拿不定主意；「心郁郁」＝心思浮动、跃跃欲试。两个状态一前一后，好准。' }
      ],
      words: [
        { term: '心大心细', jyut: 'sam1 daai6 sam1 sai3', means: '犹豫不决', usage: '唔好再心大心细。' },
        { term: '心郁郁', jyut: 'sam1 juk1 juk1', means: '心动、跃跃欲试', usage: '见到减价就心郁郁。' },
        { term: '拣', jyut: 'gaan2', means: '挑选', usage: '拣个啱嘅。' }
      ],
      checks: [
        {
          prompt: '「心大心细」形容咩状态？',
          choices: ['犹豫不决', '野心很大', '心胸狭窄'],
          answerIndex: 0,
          explanation: '心大心细＝两个念头拉扯，拿不定主意。'
        }
      ]
    },
    {
      id: 'life-sik-faa-sang',
      packId: 'life',
      title: '食花生',
      hook: '唔关我事，但我睇得好开心。',
      scene: '公司群组',
      panels: [
        { speaker: '阿Ken', canto: '两个部门喺群组嗌交。', cn: '两个部门在群里吵架。', jyut: '嗌交 aai3 gaau1' },
        { speaker: '阿May', canto: '我搬定櫈食花生。', cn: '我搬好凳子吃瓜。', jyut: '食花生 sik6 faa1 sang1' },
        { speaker: '阿Ken', canto: '花生友一号。', cn: '吃瓜群众一号。', jyut: '花生友 faa1 sang1 jau5' },
        { canto: '', cn: '', aside: '睇戏食花生 → 引申为旁观热闹。普通话「吃瓜」，香港系「食花生」，画面一样。' }
      ],
      words: [
        { term: '食花生', jyut: 'sik6 faa1 sang1', means: '旁观看热闹（吃瓜）', usage: '我净系食花生。' },
        { term: '花生友', jyut: 'faa1 sang1 jau5', means: '吃瓜群众', usage: '一班花生友。' },
        { term: '嗌交', jyut: 'aai3 gaau1', means: '吵架', usage: '唔好喺度嗌交。' }
      ],
      checks: [
        {
          prompt: '「食花生」相当于普通话嘅？',
          choices: ['吃瓜看热闹', '吃夜宵', '花钱买零食'],
          answerIndex: 0,
          explanation: '睇戏食花生 → 旁观热闹，即「吃瓜」。'
        }
      ]
    },
    {
      id: 'life-cau-seoi',
      packId: 'life',
      title: '抽水',
      hook: '借人哋件事，抽自己嘅好处。',
      scene: '会议室',
      panels: [
        { speaker: '阿May', canto: '个案系我哋做㗎喎。', cn: '这个案子是我们做的啊。' },
        { speaker: '阿Ken', canto: '佢上台一句都冇提我哋。', cn: '他上台一句都没提我们。' },
        { speaker: '阿May', canto: '仲要抽埋水。', cn: '还顺便蹭了功劳。', jyut: '抽水 cau1 seoi2' },
        { canto: '', cn: '', aside: '「抽水」原指赌场抽佣，而家引申为「借势占便宜／蹭热度」，语气偏负面。' }
      ],
      words: [
        { term: '抽水', jyut: 'cau1 seoi2', means: '蹭好处、借势占便宜', usage: '唔好抽我水。' },
        { term: '上台', jyut: 'soeng5 toi4', means: '上台（发言）', usage: '佢上台讲咗十分钟。' },
        { term: '埋', jyut: 'maai4', means: '顺带、一并', usage: '一齐做埋佢。' }
      ],
      checks: [
        {
          prompt: '「抽水」多数带咩语气？',
          choices: ['负面，指蹭好处', '中性，指抽取样本', '正面，指帮忙'],
          answerIndex: 0,
          explanation: '抽水＝借势占便宜／蹭功劳，语气负面。'
        }
      ]
    },
    {
      id: 'life-cim-seoi',
      packId: 'life',
      title: '潜水同放飞机',
      hook: '一个消失，一个临时放你鸽子。',
      scene: '群组等回复',
      panels: [
        { speaker: '阿May', canto: '阿Ken成个礼拜潜咗水。', cn: '阿Ken整周都失联了。', jyut: '潜水 cim4 seoi2' },
        { speaker: '同事', canto: '上次仲放咗我飞机。', cn: '上次还放我鸽子。', jyut: '放飞机 fong3 fei1 gei1' },
        { speaker: '阿May', canto: '今次唔好再等佢。', cn: '这次别再等他了。' },
        { canto: '', cn: '', aside: '「潜水」＝长期唔出声、失联；「放飞机」＝约好又唔嚟，即放鸽子。两个都系关系杀手。' }
      ],
      words: [
        { term: '潜水', jyut: 'cim4 seoi2', means: '长期不出声、失联', usage: '佢喺群组潜咗好耐。' },
        { term: '放飞机', jyut: 'fong3 fei1 gei1', means: '放鸽子、爽约', usage: '唔好再放我飞机。' },
        { term: '成个礼拜', jyut: 'seng4 go3 lai5 baai3', means: '整整一周', usage: '成个礼拜冇消息。' }
      ],
      checks: [
        {
          prompt: '「放飞机」即系？',
          choices: ['约好了却不出现', '去坐飞机', '把事情办得很快'],
          answerIndex: 0,
          explanation: '放飞机＝爽约、放鸽子。'
        }
      ]
    },
    {
      id: 'life-si-daan',
      packId: 'life',
      title: '是但同求其',
      hook: '两个「随便」，语气差好远。',
      scene: '夜晚拣食咩',
      panels: [
        { speaker: '阿Ken', canto: '今晚食咩？', cn: '今晚吃什么？' },
        { speaker: '阿May', canto: '是但啦。', cn: '随便吧。', jyut: '是但 si6 daan6' },
        { speaker: '阿Ken', canto: '咁求其食个快餐？', cn: '那随便吃个快餐？', jyut: '求其 kau4 kei4' },
        { speaker: '阿May', canto: '又唔好咁求其。', cn: '又别那么敷衍。' },
        { canto: '', cn: '', aside: '「是但」＝都可以（中性）；「求其」＝马虎求过关（带敷衍味）。所以「是但」得，「求其」易中伏。' }
      ],
      words: [
        { term: '是但', jyut: 'si6 daan6', means: '随便、都可以', usage: '是但你话事。' },
        { term: '求其', jyut: 'kau4 kei4', means: '马虎、敷衍了事', usage: '唔好求其做。' },
        { term: '话事', jyut: 'waa6 si6', means: '做主、说了算', usage: '你话事。' }
      ],
      checks: [
        {
          prompt: '老细话「唔好求其做」，佢想点？',
          choices: ['不要马虎敷衍', '不要问太多', '随便做就好'],
          answerIndex: 0,
          explanation: '求其＝敷衍。「唔好求其做」＝别马虎。'
        }
      ]
    },
    {
      id: 'life-mou-ngaan-tai',
      packId: 'life',
      title: '冇眼睇',
      hook: '唔想再望多一眼。',
      scene: '睇波／睇同事表演',
      panels: [
        { speaker: '阿Ken', canto: '仲输紧几多？', cn: '还落后多少？' },
        { speaker: '阿May', canto: '冇眼睇。', cn: '看不下去了。', jyut: '冇眼睇 mou5 ngaan5 tai2' },
        { speaker: '阿Ken', canto: '咁你走先啦。', cn: '那你先走吧。' },
        { speaker: '阿May', canto: '走都费事走。', cn: '连走都懒得走。', jyut: '费事 fai3 si6' },
        { canto: '', cn: '', aside: '「冇眼睇」＝惨到唔想睇；「费事」＝懒得、免得。「费事讲」＝懒得说。' }
      ],
      words: [
        { term: '冇眼睇', jyut: 'mou5 ngaan5 tai2', means: '看不下去、不忍直视', usage: '佢个房乱到冇眼睇。' },
        { term: '费事', jyut: 'fai3 si6', means: '懒得、免得', usage: '费事同佢嘈。' },
        { term: '输紧', jyut: 'syu1 gan2', means: '正在落后', usage: '输紧两球。' }
      ],
      checks: [
        {
          prompt: '「费事同佢嘈」系咩意思？',
          choices: ['懒得跟他吵', '要费力跟他吵', '喜欢跟他吵'],
          answerIndex: 0,
          explanation: '费事＝懒得／免得，唔系「费力」。'
        }
      ]
    },
    {
      id: 'life-jing-lek',
      packId: 'life',
      title: '认叻',
      hook: '识就够，唔使周围讲。',
      scene: '饭局',
      panels: [
        { speaker: '阿Ken', canto: '呢样嘢我一睇就知。', cn: '这个我一看就懂。' },
        { speaker: '阿May', canto: '又认叻。', cn: '又显摆。', jyut: '认叻 jing6 lek1' },
        { speaker: '阿Ken', canto: '我讲事实咋。', cn: '我只是说事实。' },
        { speaker: '阿May', canto: '叻唔使认，人哋会睇到。', cn: '厉害不用自己说，别人看得到。' },
        { canto: '', cn: '', aside: '「叻」lek1＝聪明、能干（褒），但「认叻」＝自认叻、显摆（贬）。一字之差，评价啱啱相反。' }
      ],
      words: [
        { term: '叻', jyut: 'lek1', means: '聪明、能干', usage: '你真系好叻。' },
        { term: '认叻', jyut: 'jing6 lek1', means: '自夸、显摆', usage: '唔好成日认叻。' },
        { term: '咋', jyut: 'zaa3', means: '句末语气词，「而已」', usage: '讲笑咋。' }
      ],
      checks: [
        {
          prompt: '「你真系好叻」系？',
          choices: ['称赞', '讽刺显摆', '责怪'],
          answerIndex: 0,
          explanation: '「叻」系褒义称赞；「认叻」先系贬义。'
        }
      ]
    },
    {
      id: 'life-faan-wun-dai',
      packId: 'life',
      title: '食碗面反碗底',
      hook: '食完人哋，再拆人哋台。',
      scene: '行家茶叙',
      panels: [
        { speaker: '阿强', canto: '佢跳咗槽，仲话前公司唔掂。', cn: '他跳槽了，还说前公司不行。', jyut: '跳槽 tiu3 cou4' },
        { speaker: '阿May', canto: '食碗面反碗底。', cn: '吃完饭砸锅。', jyut: '食碗面反碗底 sik6 wun2 min6 faan2 wun2 dai2' },
        { speaker: '阿强', canto: '行内好细㗎。', cn: '圈子很小的。' },
        { canto: '', cn: '', aside: '「碗面」系碗入面嗰啖饭，「反碗底」系翻转个碗。食咗人哋饭再翻脸，中文叫忘恩负义。' }
      ],
      words: [
        { term: '食碗面反碗底', jyut: 'sik6 wun2 min6 faan2 wun2 dai2', means: '忘恩负义', usage: '做人唔好食碗面反碗底。' },
        { term: '唔掂', jyut: 'm4 dim6', means: '不行、搞不定', usage: '呢个方案唔掂。' },
        { term: '行内', jyut: 'hong4 noi6', means: '业内', usage: '行内个个都识。' }
      ],
      checks: [
        {
          prompt: '「唔掂」系咩意思？',
          choices: ['不行、搞不定', '不碰、不接触', '不甜'],
          answerIndex: 0,
          explanation: '掂＝妥当。搞掂＝搞定，唔掂＝不行。'
        }
      ]
    },
    {
      id: 'life-paak-ngaang-dong',
      packId: 'life',
      title: '拍硬档',
      hook: '唔够人手嘅时候，大家顶硬上。',
      scene: '赶工夜晚',
      panels: [
        { speaker: '老细', canto: '今晚要赶起佢。', cn: '今晚要赶完。' },
        { speaker: '阿Ken', canto: '得，大家拍硬档。', cn: '行，大家一起扛。', jyut: '拍硬档 paak3 ngaang6 dong3' },
        { speaker: '阿May', canto: '顶硬上啦。', cn: '硬着头皮上吧。', jyut: '顶硬上 ding2 ngaang6 soeng5' },
        { canto: '', cn: '', aside: '「拍硬档」＝齐心协力撑住场面，「顶硬上」＝硬着头皮上。两句都带港式义气。' }
      ],
      words: [
        { term: '拍硬档', jyut: 'paak3 ngaang6 dong3', means: '齐心协力、互相支援', usage: '大家拍硬档做埋佢。' },
        { term: '顶硬上', jyut: 'ding2 ngaang6 soeng5', means: '硬着头皮上', usage: '冇办法，顶硬上。' },
        { term: '赶起', jyut: 'gon2 hei2', means: '赶完、赶出来', usage: '听朝要赶起。' }
      ],
      checks: [
        {
          prompt: '「拍硬档」系咩语气？',
          choices: ['同伴之间讲义气、一起扛', '抱怨工作太多', '批评别人偷懒'],
          answerIndex: 0,
          explanation: '拍硬档＝齐心协力撑住，带义气味。'
        }
      ]
    },
    {
      id: 'life-taan-dau',
      packId: 'life',
      title: '摊抖同叹世界',
      hook: '香港人嘅休息，分两级。',
      scene: '放大假',
      panels: [
        { speaker: '阿May', canto: '放假去边？', cn: '放假去哪？' },
        { speaker: '阿Ken', canto: '边都唔去，摊抖。', cn: '哪都不去，躺平休息。', jyut: '摊抖 taan1 dau2' },
        { speaker: '阿May', canto: '我就去叹世界。', cn: '我就去享受生活。', jyut: '叹世界 taan3 sai3 gaai3' },
        { speaker: '阿Ken', canto: '叹＝享受，唔系叹气。', cn: '叹＝享受，不是叹气。' },
        { canto: '', cn: '', aside: '「叹」喺粤语系「享受」：叹冷气、叹茶、叹世界。同普通话「叹息」完全唔同。' }
      ],
      words: [
        { term: '摊抖', jyut: 'taan1 dau2', means: '躺着休息、放松', usage: '喺屋企摊抖。' },
        { term: '叹世界', jyut: 'taan3 sai3 gaai3', means: '享受生活', usage: '退休去叹世界。' },
        { term: '叹', jyut: 'taan3', means: '享受', usage: '叹返杯咖啡。' }
      ],
      checks: [
        {
          prompt: '「叹冷气」系？',
          choices: ['享受空调', '对着空调叹气', '抱怨太冷'],
          answerIndex: 0,
          explanation: '粤语「叹」＝享受。叹茶、叹冷气、叹世界。'
        }
      ]
    },
    {
      id: 'life-lat-to',
      packId: 'life',
      title: '拍拖同甩拖',
      hook: '一个开始，一个结束。',
      scene: '朋友八卦',
      panels: [
        { speaker: '阿May', canto: '佢哋仲拍紧拖？', cn: '他们还在谈恋爱？', jyut: '拍拖 paak3 to1' },
        { speaker: '阿Ken', canto: '甩咗拖喇。', cn: '分手了。', jyut: '甩拖 lat1 to1' },
        { speaker: '阿May', canto: '几时嘅事？', cn: '什么时候的事？' },
        { speaker: '阿Ken', canto: '上个月，佢冇出声。', cn: '上个月，他没说。' },
        { canto: '', cn: '', aside: '「拖」原指拖船并行，引申做拍拖。「甩」＝脱落，甩拖＝分手，甩色＝掉色。' }
      ],
      words: [
        { term: '拍拖', jyut: 'paak3 to1', means: '谈恋爱', usage: '拍咗三年拖。' },
        { term: '甩拖', jyut: 'lat1 to1', means: '分手', usage: '啱啱甩咗拖。' },
        { term: '甩', jyut: 'lat1', means: '脱落、掉', usage: '粒钮甩咗。' }
      ],
      checks: [
        {
          prompt: '「甩拖」系咩事？',
          choices: ['分手', '开始恋爱', '拖延时间'],
          answerIndex: 0,
          explanation: '甩＝脱落。甩拖＝分手。'
        }
      ]
    },
    {
      id: 'life-leon-zeon',
      packId: 'life',
      title: '论尽',
      hook: '唔系蠢，系手脚唔协调。',
      scene: '搬嘢现场',
      panels: [
        { speaker: '阿Ken', canto: '（打烂咗个杯）', cn: '（打碎了杯子）' },
        { speaker: '阿May', canto: '你真系论尽。', cn: '你真笨手笨脚。', jyut: '论尽 leon6 zeon6' },
        { speaker: '阿Ken', canto: '手滑咋嘛。', cn: '手滑而已嘛。' },
        { speaker: '阿May', canto: '第二次喇。', cn: '第二次了。' },
        { canto: '', cn: '', aside: '「论尽」＝笨手笨脚、动作不利索，语气多数系抵死唔系恶意。' }
      ],
      words: [
        { term: '论尽', jyut: 'leon6 zeon6', means: '笨手笨脚、不利索', usage: '我今日好论尽。' },
        { term: '打烂', jyut: 'daa2 laan6', means: '打碎', usage: '打烂咗只碗。' },
        { term: '咋嘛', jyut: 'zaa3 maa3', means: '「而已嘛」的语气', usage: '讲笑咋嘛。' }
      ],
      checks: [
        {
          prompt: '「论尽」形容人？',
          choices: ['笨手笨脚', '讲道理很厉害', '话很多'],
          answerIndex: 0,
          explanation: '论尽＝动作不利索、常出小状况。'
        }
      ]
    },
    {
      id: 'life-daa-fu-tau',
      packId: 'life',
      title: '打斧头',
      hook: '买嘢报大数，中间嗰笔自己袋。',
      scene: '家用买餸',
      panels: [
        { speaker: '阿妈', canto: '买餸五十蚊？', cn: '买菜五十块？' },
        { speaker: '阿Ken', canto: '系呀。', cn: '是啊。' },
        { speaker: '阿妈', canto: '单据写三十。', cn: '收据写三十。' },
        { speaker: '阿妈', canto: '你打斧头。', cn: '你从中揩油。', jyut: '打斧头 daa2 fu2 tau4' },
        { canto: '', cn: '', aside: '「打斧头」＝代人买嘢时报大个价，中间差价自己收起。旧时家佣、伙记语境嚟，而家泛指揩油。' }
      ],
      words: [
        { term: '打斧头', jyut: 'daa2 fu2 tau4', means: '从中揩油、虚报开销', usage: '畀人打咗斧头。' },
        { term: '买餸', jyut: 'maai5 sung3', means: '买菜', usage: '落街买餸。' },
        { term: '单据', jyut: 'daan1 geoi3', means: '收据', usage: '记得攞单据。' }
      ],
      checks: [
        {
          prompt: '「打斧头」系做紧咩？',
          choices: ['虚报开销从中揩油', '用斧头劈柴', '砍价'],
          answerIndex: 0,
          explanation: '打斧头＝代买时报大数，差价自己收起。'
        }
      ]
    },
    {
      id: 'life-m-tong-seoi',
      packId: 'life',
      title: '唔汤唔水',
      hook: '唔算失败，但都唔算做完。',
      scene: '项目中期检讨',
      panels: [
        { speaker: '老细', canto: '个 project 而家点？', cn: '这个项目现在怎样？' },
        { speaker: '阿Ken', canto: '做咗一半。', cn: '做了一半。' },
        { speaker: '老细', canto: '即系唔汤唔水。', cn: '就是不上不下。', jyut: '唔汤唔水 m4 tong1 m4 seoi2' },
        { speaker: '阿Ken', canto: '下星期收到尾。', cn: '下周能收尾。', jyut: '收尾 sau1 mei5' },
        { canto: '', cn: '', aside: '「唔汤唔水」＝唔系汤又唔系水，形容半成品、不上不下。讲人讲事都用得。' }
      ],
      words: [
        { term: '唔汤唔水', jyut: 'm4 tong1 m4 seoi2', means: '不上不下、半吊子', usage: '做到唔汤唔水最麻烦。' },
        { term: '收尾', jyut: 'sau1 mei5', means: '收尾、完成最后部分', usage: '听日收尾。' },
        { term: '一半', jyut: 'jat1 bun3', means: '一半', usage: '做咗一半。' }
      ],
      checks: [
        {
          prompt: '「唔汤唔水」形容？',
          choices: ['不上不下、半吊子', '没有汤也没有水喝', '味道很淡'],
          answerIndex: 0,
          explanation: '唔汤唔水＝既不是汤也不是水，半成品状态。'
        }
      ]
    },
    {
      id: 'life-wat-gei',
      packId: 'life',
      title: '屈机',
      hook: '强到唔畀人玩落去。',
      scene: '打机／睇比赛',
      panels: [
        { speaker: '阿Ken', canto: '佢个角色屈机。', cn: '他那个角色太强了。', jyut: '屈机 wat1 gei1' },
        { speaker: '阿May', canto: '即系强到唔公平？', cn: '就是强到不公平？' },
        { speaker: '阿Ken', canto: '系，玩都唔使玩。', cn: '对，根本没得玩。' },
        { canto: '', cn: '', aside: '「屈机」出自街机年代：用机制漏洞压死对手。而家泛指「强到离谱、唔公平」，日常都会用。' }
      ],
      words: [
        { term: '屈机', jyut: 'wat1 gei1', means: '强到不公平、碾压', usage: '呢个价钱简直屈机。' },
        { term: '唔使', jyut: 'm4 sai2', means: '不用', usage: '唔使客气。' },
        { term: '打机', jyut: 'daa2 gei1', means: '打游戏', usage: '收工打机。' }
      ],
      checks: [
        {
          prompt: '「屈机」形容咩？',
          choices: ['强到不公平、碾压对手', '机器坏了', '被人冤枉'],
          answerIndex: 0,
          explanation: '屈机源自街机，指强到唔公平。'
        }
      ]
    },
    {
      id: 'life-jau-wun-waa-wun',
      packId: 'life',
      title: '有碗话碗',
      hook: '系点就讲点，唔加唔减。',
      scene: '开会讲真话',
      panels: [
        { speaker: '老细', canto: '你老实讲。', cn: '你老实说。' },
        { speaker: '阿Ken', canto: '我有碗话碗。', cn: '我实话实说。', jyut: '有碗话碗 jau5 wun2 waa6 wun2' },
        { speaker: '阿Ken', canto: '个死线唔够时间。', cn: '这个期限时间不够。' },
        { speaker: '老细', canto: '讲多无谓，改期。', cn: '多说无益，改期。', jyut: '讲多无谓 gong2 do1 mou4 wai6' },
        { canto: '', cn: '', aside: '「有碗话碗，有碟话碟」＝实话实说。「讲多无谓」＝多讲都冇用，通常接住就系落决定。' }
      ],
      words: [
        { term: '有碗话碗', jyut: 'jau5 wun2 waa6 wun2', means: '实话实说', usage: '我有碗话碗，唔帮边个。' },
        { term: '讲多无谓', jyut: 'gong2 do1 mou4 wai6', means: '多说无益', usage: '讲多无谓，做啦。' },
        { term: '改期', jyut: 'goi2 kei4', means: '改时间', usage: '不如改期。' }
      ],
      checks: [
        {
          prompt: '「有碗话碗」即系？',
          choices: ['实话实说', '只管吃饭', '重复别人的话'],
          answerIndex: 0,
          explanation: '有碗话碗，有碟话碟＝见到咩讲咩，实话实说。'
        }
      ]
    },
    {
      id: 'life-pek-paau',
      packId: 'life',
      title: '劈炮唔捞',
      hook: '一句讲晒「我唔做喇」。',
      scene: '受够咗嘅一日',
      panels: [
        { speaker: '阿Ken', canto: '我谂住劈炮。', cn: '我想辞职不干了。', jyut: '劈炮 pek3 paau3' },
        { speaker: '阿May', canto: '劈炮唔捞？咁突然？', cn: '撂挑子不干？这么突然？', jyut: '唔捞 m4 lou1' },
        { speaker: '阿Ken', canto: '顶唔顺喇。', cn: '受不了了。', jyut: '顶唔顺 ding2 m4 seon6' },
        { speaker: '阿May', canto: '搵定下家先啦。', cn: '先找好下家吧。', jyut: '下家 haa6 gaa1' },
        { canto: '', cn: '', aside: '「劈炮唔捞」＝撂挑子辞职，语气比「辞职」重好多，带即刻唔做嘅火气。「捞」＝混口饭吃。' }
      ],
      words: [
        { term: '劈炮唔捞', jyut: 'pek3 paau3 m4 lou1', means: '撂挑子辞职不干', usage: '佢一嬲就话劈炮唔捞。' },
        { term: '顶唔顺', jyut: 'ding2 m4 seon6', means: '受不了', usage: '真系顶唔顺。' },
        { term: '搵', jyut: 'wan2', means: '找', usage: '搵份新工。' }
      ],
      checks: [
        {
          prompt: '「顶唔顺」系？',
          choices: ['受不了', '顶得住', '不顺路'],
          answerIndex: 0,
          explanation: '顶＝撑，顶唔顺＝撑不住、受不了。'
        }
      ]
    }
  ]
};
