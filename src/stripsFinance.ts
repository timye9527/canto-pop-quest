import type { StripPack } from './stripTypes';

/**
 * 粤语财经梗包。
 *
 * 选词标准：香港财经口语里真正高频、而且普通话里没有对应说法的词
 * （止蚀、沽、孖展、坐艇、执笠、上车、负资产…），
 * 用交易室／茶餐厅／睇楼现场的对白带出来。
 */
export const financePack: StripPack = {
  id: 'finance',
  name: '港式财经梗',
  eyebrow: 'PACK 01 · 财经粤语',
  description: '26 条：由交易室到睇楼团，学港式财经口语里真正在用的词。',
  accent: 'gold',
  strips: [
    {
      id: 'fin-co-teng',
      packId: 'finance',
      title: '坐艇',
      hook: '买完就跌，从此住喺只艇度。',
      scene: '交易室 · 收市后',
      panels: [
        { speaker: '阿Ken', canto: '我上个月追嗰只，而家点？', cn: '我上个月追高买的那只，现在怎样？', jyut: '追 zeoi1' },
        { speaker: '阿强', canto: '你仲喺度坐紧艇。', cn: '你还在船上坐着呢。', jyut: '坐艇 co5 teng5' },
        { speaker: '阿Ken', canto: '坐到几时？', cn: '要坐到什么时候？' },
        { speaker: '阿强', canto: '坐到返家乡为止。', cn: '坐到回本为止。', aside: '「返家乡」＝价格回到你买入的成本价，唔系真系返乡下。' },
        { canto: '', cn: '', aside: '「坐艇」＝买入后价格跌穿成本，唯有揸住等回本。香港财经台日日讲，普通话叫「被套」。' }
      ],
      words: [
        { term: '坐艇', jyut: 'co5 teng5', means: '买入后被套，只能揸住等回本', usage: '我只股票坐紧艇，唔敢睇。' },
        { term: '返家乡', jyut: 'faan1 gaa1 hoeng1', means: '价格回到成本价', usage: '等咗两年终于返到家乡。' },
        { term: '追', jyut: 'zeoi1', means: '高位追入', usage: '唔好追得咁急。' }
      ],
      checks: [
        {
          prompt: '朋友话「我坐紧艇」，即系？',
          choices: ['他正在坐船旅行', '他买的东西跌了，被套住', '他赚了一笔'],
          answerIndex: 1,
          explanation: '「坐艇」＝买入后跌价被套。留意唔系真系讲船。'
        }
      ]
    },
    {
      id: 'fin-haai-fo',
      packId: 'finance',
      title: '蟹货同大闸蟹',
      hook: '被绑住手脚嗰只，叫大闸蟹。',
      scene: '茶餐厅 · 午饭倾股',
      panels: [
        { speaker: '阿May', canto: '你手上仲有几多蟹货？', cn: '你手上还有多少套牢的股票？', jyut: '蟹货 haai5 fo3' },
        { speaker: '阿Ken', canto: '一篮子，够开海鲜档。', cn: '一大堆，够开海鲜档了。' },
        { speaker: '阿May', canto: '咁你咪即系大闸蟹。', cn: '那你不就是大闸蟹。', jyut: '大闸蟹 daai6 zaap6 haai5' },
        { canto: '', cn: '', aside: '大闸蟹被草绳绑住手脚，动弹不得——香港用嚟形容亏到唔郁得嘅投资者，九七同二千年之后叫到街知巷闻。' }
      ],
      words: [
        { term: '蟹货', jyut: 'haai5 fo3', means: '亏损中、卖不出手的持仓', usage: '呢批蟹货放咗三年。' },
        { term: '大闸蟹', jyut: 'daai6 zaap6 haai5', means: '亏到动弹不得的投资者', usage: '嗰年个个都做咗大闸蟹。' },
        { term: '一篮子', jyut: 'jat1 laam4 zi2', means: '一大堆', usage: '一篮子问题等住解决。' }
      ],
      checks: [
        {
          prompt: '「大闸蟹」喺财经语境里指边个？',
          choices: ['被套得很惨的投资者', '很会做菜的人', '刚入市的新手'],
          answerIndex: 0,
          explanation: '大闸蟹被绳绑住，比喻亏到郁唔到、走唔甩。'
        }
      ]
    },
    {
      id: 'fin-zi-sit',
      packId: 'finance',
      title: '止蚀唔止损',
      hook: '同一件事，香港叫止蚀。',
      scene: '交易室 · 开市中',
      panels: [
        { speaker: '阿强', canto: '跌穿咗，止蚀走人。', cn: '跌破了，止损离场。', jyut: '止蚀 zi2 sit6' },
        { speaker: '阿Ken', canto: '再等等会唔会反弹？', cn: '再等等会不会反弹？', jyut: '反弹 faan2 daan6' },
        { speaker: '阿强', canto: '等到蚀本先走，就迟咗。', cn: '等到亏本才走，就晚了。', jyut: '蚀本 sit6 bun2' },
        { canto: '', cn: '', aside: '「蚀」hai 香港就系「亏」：蚀本、蚀让、蚀住卖。普通话嘅「损」喺呢度基本唔出现。' }
      ],
      words: [
        { term: '止蚀', jyut: 'zi2 sit6', means: '止损', usage: '设好止蚀位先入市。' },
        { term: '蚀本', jyut: 'sit6 bun2', means: '亏本', usage: '蚀本生意冇人做。' },
        { term: '跌穿', jyut: 'dit3 cyun1', means: '跌破某个价位', usage: '跌穿支持位就麻烦。' }
      ],
      checks: [
        {
          prompt: '香港人讲「止蚀」，普通话对应边个词？',
          choices: ['止损', '止盈', '止步'],
          answerIndex: 0,
          explanation: '「蚀」＝亏。止蚀＝止损，止赚先系止盈。'
        }
      ]
    },
    {
      id: 'fin-gu-zaa',
      packId: 'finance',
      title: '沽同揸',
      hook: '两个字讲晒买定卖。',
      scene: '电话落盘',
      panels: [
        { speaker: '阿Ken', canto: '而家沽定揸？', cn: '现在卖还是持有？', jyut: '沽 gu1 · 揸 zaa1' },
        { speaker: '阿强', canto: '沽一半，揸一半。', cn: '卖一半，留一半。' },
        { speaker: '阿Ken', canto: '咁另外嗰只呢？', cn: '那另外那只呢？' },
        { speaker: '阿强', canto: '扫多啲，趁平。', cn: '多买一些，趁便宜。', jyut: '扫货 sou3 fo3' },
        { canto: '', cn: '', aside: '「沽／揸／扫」三个字，香港财经节目一分钟可以讲十次。「揸」本意系「握住」，揸车＝开车。' }
      ],
      words: [
        { term: '沽', jyut: 'gu1', means: '卖出', usage: '高位沽咗一半。' },
        { term: '揸', jyut: 'zaa1', means: '持有（也指握、开车）', usage: '揸住唔好郁。' },
        { term: '扫货', jyut: 'sou3 fo3', means: '大量买入', usage: '低位扫货。' }
      ],
      checks: [
        {
          prompt: '「揸住唔好郁」系咩意思？',
          choices: ['拿着别动，继续持有', '赶快卖掉', '再买一些'],
          answerIndex: 0,
          explanation: '揸＝持有，郁＝动。揸住唔好郁＝拿着别动。'
        }
      ]
    },
    {
      id: 'fin-maa-zin',
      packId: 'finance',
      title: '孖展',
      hook: 'margin 嘅广东话译音，读出嚟先明。',
      scene: '券商开户',
      panels: [
        { speaker: '经纪', canto: '你要开现金户口定孖展户口？', cn: '你要开现金账户还是保证金账户？', jyut: '孖展 maa1 zin2' },
        { speaker: '阿Ken', canto: '孖展系咩？', cn: '孖展是什么？' },
        { speaker: '经纪', canto: '即系借钱畀你买，赚就赚多啲。', cn: '就是借钱给你买，赚就赚得多一些。' },
        { speaker: '经纪', canto: '蚀嘅时候都蚀多啲。', cn: '亏的时候也亏得多一些。' },
        { canto: '', cn: '', aside: '「孖展」系 margin 嘅音译，「孖」本身解「一对、双」——孖仔＝双胞胎。香港好多金融词都系咁音译入嚟。' }
      ],
      words: [
        { term: '孖展', jyut: 'maa1 zin2', means: '保证金交易（margin）', usage: '唔好掂孖展。' },
        { term: '孖', jyut: 'maa1', means: '成双、一对', usage: '佢生咗对孖仔。' },
        { term: '户口', jyut: 'wu6 hau2', means: '账户', usage: '开个户口先。' }
      ],
      checks: [
        {
          prompt: '「孖展」来自哪个英文词？',
          choices: ['margin', 'market', 'merger'],
          answerIndex: 0,
          explanation: '孖展＝margin 嘅粤语音译，即借钱做杠杆。'
        }
      ]
    },
    {
      id: 'fin-wo-leon',
      packId: 'finance',
      title: '窝轮同牛熊证',
      hook: '香港散户最爱嘅两件武器。',
      scene: '财经台直播',
      panels: [
        { speaker: '主持', canto: '今日窝轮成交好活跃。', cn: '今天认股证成交很活跃。', jyut: '窝轮 wo1 leon4' },
        { speaker: '嘉宾', canto: '牛证仲要爆咗几只。', cn: '牛证还爆了好几只。', jyut: '牛熊证 ngau4 hung4 zing3' },
        { speaker: '主持', canto: '即系打靶咗。', cn: '就是被强制收回了。' },
        { canto: '', cn: '', aside: '窝轮＝warrant 音译；牛熊证跌穿收回价会「打靶」——即刻作废，呢个讲法好港式。' }
      ],
      words: [
        { term: '窝轮', jyut: 'wo1 leon4', means: '认股证（warrant 音译）', usage: '炒窝轮蚀得好快。' },
        { term: '牛熊证', jyut: 'ngau4 hung4 zing3', means: '可收回牛熊证', usage: '牛证睇升，熊证睇跌。' },
        { term: '打靶', jyut: 'daa2 baa2', means: '（牛熊证）被强制收回作废', usage: '一跌穿就打靶。' }
      ],
      checks: [
        {
          prompt: '「窝轮」系边个英文词音译过嚟？',
          choices: ['warrant', 'volume', 'wallet'],
          answerIndex: 0,
          explanation: '窝轮＝warrant。同孖展一样，都系港式音译。'
        }
      ]
    },
    {
      id: 'fin-mo-deng',
      packId: 'finance',
      title: '摸顶同撈底',
      hook: '一个买喺最高，一个想买喺最低。',
      scene: '散户群',
      panels: [
        { speaker: '阿Ken', canto: '我上次摸咗个顶。', cn: '我上次买在最高点。', jyut: '摸顶 mo2 deng2' },
        { speaker: '阿May', canto: '我就次次想撈底。', cn: '我就每次都想抄底。', jyut: '撈底 lou1 dai2' },
        { speaker: '阿强', canto: '结果两个都坐艇。', cn: '结果两个都被套。' },
        { canto: '', cn: '', aside: '「摸顶」买喺高位，「撈底」想买喺低位。撈＝捞，同一个字，香港写「撈」读 lou1。' }
      ],
      words: [
        { term: '摸顶', jyut: 'mo2 deng2', means: '买在最高点', usage: '摸顶入货最伤。' },
        { term: '撈底', jyut: 'lou1 dai2', means: '抄底', usage: '想撈底要有耐性。' },
        { term: '高追', jyut: 'gou1 zeoi1', means: '在高价追买', usage: '唔好高追。' }
      ],
      checks: [
        {
          prompt: '「撈底」系做紧咩？',
          choices: ['在低位买入', '在高位卖出', '把钱全部取出'],
          answerIndex: 0,
          explanation: '撈底＝抄底，喺低位买入。相反系摸顶。'
        }
      ]
    },
    {
      id: 'fin-fei-dou',
      packId: 'finance',
      title: '唔好接飞刀',
      hook: '跌紧嘅嘢，接住会割手。',
      scene: '大跌市当日',
      panels: [
        { speaker: '阿Ken', canto: '跌咗三成喎，买唔买得过？', cn: '跌了三成，值不值得买？' },
        { speaker: '阿强', canto: '唔好接飞刀。', cn: '别接飞刀。', jyut: '接飞刀 zip3 fei1 dou1' },
        { speaker: '阿Ken', canto: '咁要等到几时？', cn: '那要等到什么时候？' },
        { speaker: '阿强', canto: '等把刀插咗落地先。', cn: '等刀插到地上再说。' },
        { canto: '', cn: '', aside: '英文 catching a falling knife，香港照译照用。配合「撈底」一齐记：撈底撈得太早，就系接飞刀。' }
      ],
      words: [
        { term: '接飞刀', jyut: 'zip3 fei1 dou1', means: '在急跌途中买入', usage: '仲跌紧就唔好接飞刀。' },
        { term: '买得过', jyut: 'maai5 dak1 gwo3', means: '值得买', usage: '呢个价买得过。' },
        { term: '三成', jyut: 'saam1 sing4', means: '百分之三十', usage: '跌咗三成。' }
      ],
      checks: [
        {
          prompt: '「买得过」系咩意思？',
          choices: ['值得买', '买不到', '买过了'],
          answerIndex: 0,
          explanation: '「V 得过」＝值得做。买得过、做得过、去得过。'
        }
      ]
    },
    {
      id: 'fin-dou-zai',
      packId: 'finance',
      title: '刀仔锯大树',
      hook: '细本钱，博大回报。',
      scene: '师徒对话',
      panels: [
        { speaker: '阿Ken', canto: '我得几万蚊，做到啲咩？', cn: '我只有几万块，能做什么？', jyut: '蚊 man1（元）' },
        { speaker: '阿强', canto: '有人想刀仔锯大树。', cn: '有人想以小博大。', jyut: '刀仔锯大树 dou1 zai2 goe3 daai6 syu6' },
        { speaker: '阿强', canto: '锯到嘅少，锯断刀嘅多。', cn: '锯得动的少，锯断刀的多。' },
        { canto: '', cn: '', aside: '「刀仔锯大树」＝以小博大，通常带少少提醒意味：听落威，做起上嚟好易断刀。' }
      ],
      words: [
        { term: '刀仔锯大树', jyut: 'dou1 zai2 goe3 daai6 syu6', means: '以小博大', usage: '唔好次次谂住刀仔锯大树。' },
        { term: '蚊', jyut: 'man1', means: '元、块钱', usage: '一百蚊。' },
        { term: '博', jyut: 'bok3', means: '赌一把、争取', usage: '博一铺。' }
      ],
      checks: [
        {
          prompt: '「刀仔锯大树」讲紧咩？',
          choices: ['用小本钱博取大回报', '做事很费力', '把大问题拆小'],
          answerIndex: 0,
          explanation: '细刀锯大树＝以小博大，多数带提醒意味。'
        }
      ]
    },
    {
      id: 'fin-cing-doi',
      packId: 'finance',
      title: '一铺清袋',
      hook: '一次就输晒成副身家。',
      scene: '收市之后',
      panels: [
        { speaker: '阿May', canto: '佢点解唔见咗成个月？', cn: '他怎么一个月没出现？' },
        { speaker: '阿强', canto: '一铺清袋，收咗档。', cn: '一把输光，收摊了。', jyut: '一铺清袋 jat1 pou1 cing1 doi2' },
        { speaker: '阿May', canto: '咁大镬？', cn: '这么严重？', jyut: '大镬 daai6 wok6' },
        { canto: '', cn: '', aside: '「铺」系量词，一铺＝一局、一把。「清袋」＝口袋清空。多数用喺赌同重仓。' }
      ],
      words: [
        { term: '一铺清袋', jyut: 'jat1 pou1 cing1 doi2', means: '一次输个精光', usage: '重仓落去，随时一铺清袋。' },
        { term: '收档', jyut: 'sau1 dong3', means: '收摊、结束营业', usage: '做唔掂就收档。' },
        { term: '大镬', jyut: 'daai6 wok6', means: '闯大祸、很严重', usage: '今次大镬喇。' }
      ],
      checks: [
        {
          prompt: '「一铺清袋」形容咩？',
          choices: ['一次全部输光', '慢慢亏损', '赚了一大笔'],
          answerIndex: 0,
          explanation: '一铺＝一局，清袋＝口袋清空。'
        }
      ]
    },
    {
      id: 'fin-faa-seoi',
      packId: 'finance',
      title: '见财化水',
      hook: '账面见到，一眨眼冇咗。',
      scene: '手机睇户口',
      panels: [
        { speaker: '阿Ken', canto: '琴日仲赚紧廿万。', cn: '昨天还赚着二十万。', jyut: '廿 jaa6（二十）' },
        { speaker: '阿May', canto: '而家呢？', cn: '现在呢？' },
        { speaker: '阿Ken', canto: '见财化水。', cn: '眼看着钱化成水。', jyut: '见财化水 gin3 coi4 faa3 seoi2' },
        { canto: '', cn: '', aside: '「见财化水」形容账面财富瞬间蒸发，讲落有画面：见到笔财，化咗做水。' }
      ],
      words: [
        { term: '见财化水', jyut: 'gin3 coi4 faa3 seoi2', means: '眼看财富蒸发', usage: '冇止蚀，最后见财化水。' },
        { term: '廿', jyut: 'jaa6', means: '二十', usage: '廿蚊。' },
        { term: '琴日', jyut: 'kam4 jat6', means: '昨天', usage: '琴日同今日差好远。' }
      ],
      checks: [
        {
          prompt: '「琴日」系边日？',
          choices: ['昨天', '明天', '前天'],
          answerIndex: 0,
          explanation: '琴日＝昨天，听日＝明天，今日＝今天。'
        }
      ]
    },
    {
      id: 'fin-gai-seoi',
      packId: 'finance',
      title: '鸡碎咁多',
      hook: '细到唔好意思讲出口。',
      scene: '派息公布日',
      panels: [
        { speaker: '阿Ken', canto: '今年派几多息？', cn: '今年派多少股息？', jyut: '派息 paai3 sik1' },
        { speaker: '阿强', canto: '鸡碎咁多。', cn: '少得可怜。', jyut: '鸡碎咁多 gai1 seoi3 gam3 do1' },
        { speaker: '阿Ken', canto: '即系几多？', cn: '到底多少？' },
        { speaker: '阿强', canto: '够买杯冻柠茶。', cn: '够买杯冻柠檬茶。' },
        { canto: '', cn: '', aside: '「鸡碎咁多」＝鸡啄剩嘅碎屑咁多，形容极少。日常都用：加人工鸡碎咁多。' }
      ],
      words: [
        { term: '鸡碎咁多', jyut: 'gai1 seoi3 gam3 do1', means: '极少、一点点', usage: '加人工加咗鸡碎咁多。' },
        { term: '派息', jyut: 'paai3 sik1', means: '派发股息', usage: '每年派两次息。' },
        { term: '咁多', jyut: 'gam3 do1', means: '这么多', usage: '净系得咁多？' }
      ],
      checks: [
        {
          prompt: '老细话加人工「鸡碎咁多」，你应该？',
          choices: ['高兴，加得多', '失望，加得极少', '看不出多少'],
          answerIndex: 1,
          explanation: '鸡碎咁多＝少得可怜，系抱怨嘅讲法。'
        }
      ]
    },
    {
      id: 'fin-soeng-ce',
      packId: 'finance',
      title: '上车',
      hook: '香港人讲上车，多数唔关车事。',
      scene: '睇楼现场',
      panels: [
        { speaker: '经纪', canto: '呢个价好适合上车。', cn: '这个价格很适合首次置业。', jyut: '上车 soeng5 ce1' },
        { speaker: '阿May', canto: '我净系够首期。', cn: '我只够付首付。', jyut: '首期 sau2 kei4' },
        { speaker: '经纪', canto: '够首期就上到车。', cn: '够首付就能上车。' },
        { speaker: '阿May', canto: '之后供三十年。', cn: '之后还三十年房贷。', jyut: '供楼 gung1 lau4' },
        { canto: '', cn: '', aside: '「上车」＝买第一层楼。「上车盘」就系入门级单位。呢个词已经变成香港楼市嘅核心词。' }
      ],
      words: [
        { term: '上车', jyut: 'soeng5 ce1', means: '首次置业', usage: '而家好难上车。' },
        { term: '首期', jyut: 'sau2 kei4', means: '首付', usage: '储够首期先。' },
        { term: '供楼', jyut: 'gung1 lau4', means: '还房贷', usage: '供楼供到六十岁。' }
      ],
      checks: [
        {
          prompt: '香港人讲「上车」，最常指？',
          choices: ['买人生第一套房', '搭公交', '升职'],
          answerIndex: 0,
          explanation: '上车＝首次置业，上车盘＝入门级单位。'
        }
      ]
    },
    {
      id: 'fin-on-kit',
      packId: 'finance',
      title: '按揭同分期',
      hook: '借得几多，银行话事。',
      scene: '银行按揭部',
      panels: [
        { speaker: '职员', canto: '你想做几多成按揭？', cn: '你想做多少成的房贷？', jyut: '按揭 on3 kit3' },
        { speaker: '阿Ken', canto: '做到七成得唔得？', cn: '能做到七成吗？' },
        { speaker: '职员', canto: '要睇你嘅入息同压力测试。', cn: '要看你的收入和压力测试。', jyut: '入息 jap6 sik1' },
        { canto: '', cn: '', aside: '「入息」＝收入，「人工」＝工资，两个都好常用：人工系每月嗰笔，入息系整体。' }
      ],
      words: [
        { term: '按揭', jyut: 'on3 kit3', means: '房贷、抵押贷款', usage: '做八成按揭。' },
        { term: '入息', jyut: 'jap6 sik1', means: '收入', usage: '入息证明。' },
        { term: '几多成', jyut: 'gei2 do1 sing4', means: '百分之几十', usage: '做到几多成？' }
      ],
      checks: [
        {
          prompt: '「入息」系咩？',
          choices: ['收入', '支出', '利息'],
          answerIndex: 0,
          explanation: '入息＝收入。利息系另一个词：息。'
        }
      ]
    },
    {
      id: 'fin-fu-zi-caan',
      packId: 'finance',
      title: '负资产',
      hook: '层楼跌到低过你欠银行嗰笔。',
      scene: '旧同事聚会',
      panels: [
        { speaker: '阿强', canto: '嗰阵好多人做咗负资产。', cn: '那时候很多人成了负资产。', jyut: '负资产 fu6 zi1 caan2' },
        { speaker: '阿May', canto: '即系点？', cn: '具体是什么意思？' },
        { speaker: '阿强', canto: '层楼市值低过你未还嗰笔。', cn: '房子市值低于你未还的贷款。' },
        { speaker: '阿强', canto: '卖咗都仲要倒贴。', cn: '卖了还得倒贴钱。' },
        { canto: '', cn: '', aside: '九七之后香港楼市大跌，「负资产」变咗一代人嘅共同记忆，到而家讲起仲有重量。' }
      ],
      words: [
        { term: '负资产', jyut: 'fu6 zi1 caan2', means: '资不抵债的房产', usage: '唔想再做负资产。' },
        { term: '倒贴', jyut: 'dou2 tip3', means: '反过来还要付钱', usage: '卖咗仲要倒贴。' },
        { term: '嗰阵', jyut: 'go2 zan6', means: '那时候', usage: '嗰阵仲后生。' }
      ],
      checks: [
        {
          prompt: '「嗰阵」系咩意思？',
          choices: ['那时候', '那个人', '那边'],
          answerIndex: 0,
          explanation: '嗰阵＝那时候。嗰＝那，阵＝阵子。'
        }
      ]
    },
    {
      id: 'fin-lau-faa',
      packId: 'finance',
      title: '楼花同劈价',
      hook: '未起好就卖，卖唔出就劈。',
      scene: '地产代理行',
      panels: [
        { speaker: '经纪', canto: '呢个系楼花，两年后收楼。', cn: '这是期房，两年后交房。', jyut: '楼花 lau4 faa1' },
        { speaker: '阿Ken', canto: '如果到时跌市呢？', cn: '如果到时候跌市呢？' },
        { speaker: '经纪', canto: '发展商就劈价。', cn: '开发商就大幅降价。', jyut: '劈价 pek3 gaa3' },
        { speaker: '经纪', canto: '业主想走就要蚀让。', cn: '业主想脱手就得亏本卖。', jyut: '蚀让 sit6 joeng6' },
        { canto: '', cn: '', aside: '「劈」＝狠狠砍落去，劈价＝大减价；「蚀让」＝蚀住转让，两个字就讲晒个惨况。' }
      ],
      words: [
        { term: '楼花', jyut: 'lau4 faa1', means: '期房、未落成的楼盘', usage: '买楼花有风险。' },
        { term: '劈价', jyut: 'pek3 gaa3', means: '大幅降价', usage: '劈到七折。' },
        { term: '蚀让', jyut: 'sit6 joeng6', means: '亏本转售', usage: '蚀让离场。' }
      ],
      checks: [
        {
          prompt: '「劈价」即系？',
          choices: ['大幅降价', '抬高价格', '价格不变'],
          answerIndex: 0,
          explanation: '劈＝砍。劈价＝狠狠降价。'
        }
      ]
    },
    {
      id: 'fin-zap-lap',
      packId: 'finance',
      title: '执笠',
      hook: '结业嘅港式讲法。',
      scene: '街市门口',
      panels: [
        { speaker: '阿May', canto: '楼下间茶记点解落闸？', cn: '楼下那家茶餐厅怎么关门了？', jyut: '茶记 caa4 gei2' },
        { speaker: '阿强', canto: '执咗笠喇。', cn: '倒闭了。', jyut: '执笠 zap1 lap1' },
        { speaker: '阿May', canto: '做咗几十年喎。', cn: '做了几十年啊。' },
        { speaker: '阿强', canto: '捱唔住租。', cn: '扛不住租金。', jyut: '捱 ngaai4' },
        { canto: '', cn: '', aside: '「执笠」＝执埋啲嘢收档，即结业。「茶记」＝茶餐厅嘅简称，好亲切。' }
      ],
      words: [
        { term: '执笠', jyut: 'zap1 lap1', means: '结业、倒闭', usage: '间铺执咗笠。' },
        { term: '茶记', jyut: 'caa4 gei2', means: '茶餐厅', usage: '落楼下茶记食个饭。' },
        { term: '捱', jyut: 'ngaai4', means: '硬撑、熬', usage: '捱咗好多年。' }
      ],
      checks: [
        {
          prompt: '「执笠」系咩事？',
          choices: ['结业倒闭', '扩大营业', '装修暂停'],
          answerIndex: 0,
          explanation: '执笠＝收拾东西收档，即结业。'
        }
      ]
    },
    {
      id: 'fin-saan-wu',
      packId: 'finance',
      title: '散户同大户',
      hook: '出货嘅时候，边个接？',
      scene: '财经节目',
      panels: [
        { speaker: '嘉宾', canto: '大户喺高位出货。', cn: '大资金在高位派货。', jyut: '出货 ceot1 fo3' },
        { speaker: '主持', canto: '边个接？', cn: '谁接盘？' },
        { speaker: '嘉宾', canto: '散户接。', cn: '散户接。', jyut: '散户 saan2 wu6' },
        { speaker: '主持', canto: '年年都系咁。', cn: '年年都这样。' },
        { canto: '', cn: '', aside: '「出货」＝派发手上持仓畀人接，同「入货」相反。散户 saan2 wu6，唔好读成 saan3。' }
      ],
      words: [
        { term: '散户', jyut: 'saan2 wu6', means: '个人投资者', usage: '散户最易高追。' },
        { term: '大户', jyut: 'daai6 wu6', means: '大资金、机构', usage: '大户先知消息。' },
        { term: '出货', jyut: 'ceot1 fo3', means: '派发持仓、卖给别人', usage: '喺高位慢慢出货。' }
      ],
      checks: [
        {
          prompt: '「出货」系做紧咩？',
          choices: ['把手上持仓卖出去', '买进更多', '暂停交易'],
          answerIndex: 0,
          explanation: '出货＝派货卖出，入货＝买进。'
        }
      ]
    },
    {
      id: 'fin-cau-san-gu',
      packId: 'finance',
      title: '抽新股同暗盘',
      hook: '未上市已经有得买卖。',
      scene: '手机落单',
      panels: [
        { speaker: '阿Ken', canto: '今次新股你抽唔抽？', cn: '这次新股你申购吗？', jyut: '抽新股 cau1 san1 gu2' },
        { speaker: '阿May', canto: '抽一手试下。', cn: '申购一手试试。', jyut: '一手 jat1 sau2' },
        { speaker: '阿Ken', canto: '暗盘已经升咗两成。', cn: '暗盘已经涨了两成。', jyut: '暗盘 am3 pun2' },
        { canto: '', cn: '', aside: '「暗盘」＝上市前一晚喺券商内部撮合嘅交易，香港特色。「一手」＝一个买卖单位。' }
      ],
      words: [
        { term: '抽新股', jyut: 'cau1 san1 gu2', means: '申购新股（打新）', usage: '抽中咗一手。' },
        { term: '暗盘', jyut: 'am3 pun2', means: '上市前的场外交易', usage: '睇暗盘估开市价。' },
        { term: '一手', jyut: 'jat1 sau2', means: '一个买卖单位', usage: '一手几多股？' }
      ],
      checks: [
        {
          prompt: '「暗盘」系几时进行？',
          choices: ['正式上市前', '收市之后一个月', '停牌期间'],
          answerIndex: 0,
          explanation: '暗盘＝上市前夕嘅场外撮合，睇得出市场热唔热。'
        }
      ]
    },
    {
      id: 'fin-sik-hau',
      packId: 'finance',
      title: '息口',
      hook: '加定减，成个市都跟住郁。',
      scene: '晨早财经',
      panels: [
        { speaker: '主持', canto: '息口点睇？', cn: '利率怎么看？', jyut: '息口 sik1 hau2' },
        { speaker: '嘉宾', canto: '短期内难减息。', cn: '短期内难降息。', jyut: '减息 gaam2 sik1' },
        { speaker: '主持', canto: '咁供楼嗰班？', cn: '那还房贷的那群人呢？' },
        { speaker: '嘉宾', canto: '要睇拆息。', cn: '要看银行同业拆息。', jyut: '拆息 caak3 sik1' },
        { canto: '', cn: '', aside: '「息口」＝利率水平，「拆息」＝银行同业拆借利率（HIBOR），香港供楼多数同拆息挂钩。' }
      ],
      words: [
        { term: '息口', jyut: 'sik1 hau2', means: '利率水平', usage: '息口见顶未？' },
        { term: '拆息', jyut: 'caak3 sik1', means: '银行同业拆借利率', usage: '拆息抽高咗。' },
        { term: '加息／减息', jyut: 'gaa1 sik1 / gaam2 sik1', means: '加息／降息', usage: '市场估会减息。' }
      ],
      checks: [
        {
          prompt: '「息口」讲紧咩？',
          choices: ['利率水平', '进出口', '消息来源'],
          answerIndex: 0,
          explanation: '息＝利息，息口＝利率水平。'
        }
      ]
    },
    {
      id: 'fin-haan-cin',
      packId: 'finance',
      title: '慳钱定孤寒',
      hook: '一字之差，一个褒一个贬。',
      scene: '同事午饭',
      panels: [
        { speaker: '阿May', canto: '佢日日带饭，好慳得。', cn: '他天天带饭，很会省。', jyut: '慳 haan1' },
        { speaker: '阿Ken', canto: '我觉得佢好孤寒。', cn: '我觉得他很吝啬。', jyut: '孤寒 gu1 hon4' },
        { speaker: '阿May', canto: '慳系叻，孤寒先系寸。', cn: '会省是本事，吝啬才难听。' },
        { canto: '', cn: '', aside: '「慳」＝节省，中性偏褒；「孤寒」＝吝啬小气，明显贬义。讲错会得罪人。' }
      ],
      words: [
        { term: '慳', jyut: 'haan1', means: '节省', usage: '慳返笔钱。' },
        { term: '孤寒', jyut: 'gu1 hon4', means: '吝啬、小气', usage: '唔好咁孤寒。' },
        { term: '豪', jyut: 'hou4', means: '大方、舍得花', usage: '佢今晚好豪。' }
      ],
      checks: [
        {
          prompt: '想赞人识慳钱，应该讲边个？',
          choices: ['你好慳得', '你好孤寒', '你好豪'],
          answerIndex: 0,
          explanation: '慳＝节省（褒），孤寒＝吝啬（贬），豪＝花钱大方。'
        }
      ]
    },
    {
      id: 'fin-jyut-cing',
      packId: 'finance',
      title: '月月清',
      hook: '香港版嘅月光族。',
      scene: '出粮日',
      panels: [
        { speaker: '阿Ken', canto: '出咗粮未？', cn: '发工资了吗？', jyut: '出粮 ceot1 loeng4' },
        { speaker: '阿May', canto: '出咗，又还晒卡数。', cn: '发了，又全还了信用卡。', jyut: '卡数 kaat1 sou3' },
        { speaker: '阿Ken', canto: '即系月月清。', cn: '就是月月光。', jyut: '月月清 jyut6 jyut6 cing1' },
        { speaker: '阿May', canto: '手停口停，唔敢病。', cn: '不干活就没饭吃，不敢生病。', jyut: '手停口停 sau2 ting4 hau2 ting4' },
        { canto: '', cn: '', aside: '「出粮」＝发工资，「卡数」＝信用卡欠款，「手停口停」＝没有收入就立刻断炊，三个词串起香港打工仔嘅现实。' }
      ],
      words: [
        { term: '出粮', jyut: 'ceot1 loeng4', means: '发工资', usage: '月尾出粮。' },
        { term: '卡数', jyut: 'kaat1 sou3', means: '信用卡欠款', usage: '还卡数还到怕。' },
        { term: '手停口停', jyut: 'sau2 ting4 hau2 ting4', means: '不工作就没收入', usage: '自由身手停口停。' }
      ],
      checks: [
        {
          prompt: '「出粮」系咩？',
          choices: ['发工资', '出门买粮食', '交房租'],
          answerIndex: 0,
          explanation: '出粮＝发薪。粮＝薪水，人工都系同一件事。'
        }
      ]
    },
    {
      id: 'fin-tai-sung',
      packId: 'finance',
      title: '睇餸食饭',
      hook: '有几多餸，食几多饭。',
      scene: '家庭理财',
      panels: [
        { speaker: '阿妈', canto: '想去旅行？睇餸食饭啦。', cn: '想去旅行？量力而行吧。', jyut: '睇餸食饭 tai2 sung3 sik6 faan6' },
        { speaker: '阿Ken', canto: '我计掂咗条数。', cn: '我算好账了。', jyut: '计掂条数 gai3 dim6 tiu4 sou3' },
        { speaker: '阿妈', canto: '有数为就去。', cn: '划得来就去。', jyut: '有数为 jau5 sou3 wai4' },
        { canto: '', cn: '', aside: '「餸」sung3＝配饭嘅菜。睇餸食饭＝按现有条件安排，量入为出。「有数为」＝算下来划算。' }
      ],
      words: [
        { term: '睇餸食饭', jyut: 'tai2 sung3 sik6 faan6', means: '量力而行、量入为出', usage: '买楼都要睇餸食饭。' },
        { term: '有数为', jyut: 'jau5 sou3 wai4', means: '划算、值得', usage: '计过觉得有数为。' },
        { term: '餸', jyut: 'sung3', means: '配饭的菜', usage: '今晚煮咩餸？' }
      ],
      checks: [
        {
          prompt: '「有数为」即系？',
          choices: ['划算、值得做', '没法计算', '数字有错'],
          answerIndex: 0,
          explanation: '有数为＝算下来划得来。反面系「唔化算」。'
        }
      ]
    },
    {
      id: 'fin-jung-zi',
      packId: 'finance',
      title: '心口挂个勇字',
      hook: '唔系胆大，系冇谂过后果。',
      scene: '同事围炉',
      panels: [
        { speaker: '阿May', canto: '佢全副身家押晒落去。', cn: '他把全部家当押进去了。', jyut: '身家 san1 gaa1' },
        { speaker: '阿强', canto: '心口挂个勇字。', cn: '胸口挂个勇字，蛮干。', jyut: '心口挂个勇字 sam1 hau2 gwaa3 go3 jung5 zi6' },
        { speaker: '阿May', canto: '博一铺啫。', cn: '搏一把罢了。', jyut: '博一铺 bok3 jat1 pou1' },
        { speaker: '阿强', canto: '博输咗就一铺清袋。', cn: '赌输了就一次输光。' },
        { canto: '', cn: '', aside: '「心口挂个勇字」形容只凭胆识、冇部署就冲，港片同财经评论都爱用。' }
      ],
      words: [
        { term: '心口挂个勇字', jyut: 'sam1 hau2 gwaa3 go3 jung5 zi6', means: '只凭胆量蛮干', usage: '投资唔可以净系心口挂个勇字。' },
        { term: '博一铺', jyut: 'bok3 jat1 pou1', means: '赌一把', usage: '唔想博一铺。' },
        { term: '身家', jyut: 'san1 gaa1', means: '全部财产', usage: '押上成副身家。' }
      ],
      checks: [
        {
          prompt: '「心口挂个勇字」系褒定贬？',
          choices: ['多数带提醒：有勇无谋', '纯粹称赞很勇敢', '形容人很谨慎'],
          answerIndex: 0,
          explanation: '通常带「冇部署就冲」嘅提醒意味，唔系单纯赞人。'
        }
      ]
    },
    {
      id: 'fin-zaam-cong',
      packId: 'finance',
      title: '斩仓',
      hook: '唔系你想走，系人哋逼你走。',
      scene: '孖展户口告急',
      panels: [
        { speaker: '经纪', canto: '你要补孖展，否则斩仓。', cn: '你要追加保证金，否则强制平仓。', jyut: '斩仓 zaam2 cong1' },
        { speaker: '阿Ken', canto: '畀多两日得唔得？', cn: '能多给两天吗？' },
        { speaker: '经纪', canto: '收市前唔到数就斩。', cn: '收市前钱不到账就平仓。', jyut: '到数 dou3 sou3' },
        { canto: '', cn: '', aside: '「斩仓」＝被强制平仓，同「止蚀」最大分别：止蚀系你自己决定，斩仓系人哋帮你决定。' }
      ],
      words: [
        { term: '斩仓', jyut: 'zaam2 cong1', means: '强制平仓', usage: '唔够保证金就畀人斩仓。' },
        { term: '补仓', jyut: 'bou2 cong1', means: '追加保证金／补仓位', usage: '要即刻补仓。' },
        { term: '到数', jyut: 'dou3 sou3', means: '款项到账', usage: '听日先到数。' }
      ],
      checks: [
        {
          prompt: '「止蚀」同「斩仓」最大分别系？',
          choices: ['止蚀是自己决定，斩仓是被强制', '两个完全一样', '斩仓是赚钱时的操作'],
          answerIndex: 0,
          explanation: '止蚀系主动离场，斩仓系保证金不足畀人强制平仓。'
        }
      ]
    },
    {
      id: 'fin-fu-sau',
      packId: 'finance',
      title: '收手同睇错市',
      hook: '肯认错，先至走得甩。',
      scene: '年尾埋数',
      panels: [
        { speaker: '阿强', canto: '今年点？', cn: '今年怎么样？' },
        { speaker: '阿Ken', canto: '睇错市，蚀咗少少。', cn: '看错行情，亏了一点。', jyut: '睇错市 tai2 co3 si5' },
        { speaker: '阿强', canto: '肯认就好过死揸。', cn: '肯认错好过死扛。', jyut: '死揸 sei2 zaa1' },
        { speaker: '阿Ken', canto: '明年埋少啲数。', cn: '明年少算点账。', jyut: '埋数 maai4 sou3' },
        { canto: '', cn: '', aside: '「埋数」＝结账、埋单结算，年尾埋数就系盘点全年盈亏。「睇错市」＝判断错方向。' }
      ],
      words: [
        { term: '睇错市', jyut: 'tai2 co3 si5', means: '看错行情', usage: '今次真系睇错市。' },
        { term: '埋数', jyut: 'maai4 sou3', means: '结账、结算', usage: '月尾埋数。' },
        { term: '走得甩', jyut: 'zau2 dak1 lat1', means: '脱得了身', usage: '今次走唔甩。' }
      ],
      checks: [
        {
          prompt: '「埋数」系做紧咩？',
          choices: ['结账、盘点', '埋起数据', '增加数量'],
          answerIndex: 0,
          explanation: '埋数＝结算。餐厅埋单、公司埋数，同一个「埋」。'
        }
      ]
    }
  ]
};
