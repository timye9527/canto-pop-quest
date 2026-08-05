// 选题分类 + 爆款钩子词库。
// 简繁体、粤语口语、英文都要覆盖 —— 名单里同时有港式繁体、普通话简体和英文频道。
// 这是整套系统唯一的“运营 IP”所在，调词库就等于调你看盘的视角。

export const TOPICS = [
  {
    id: 'index',
    name: '大盘/指数走势',
    color: '#4c8dff',
    brief: '恒指、A股、大市方向、后市预判。流量最稳但同质化最重，靠观点鲜明度和更新速度取胜。',
    kw: ['恒指', '恆指', '大市', '港股', 'A股', '恒生', '恆生', '指數', '指数', '大盤', '大盘', '盈富', '國指', '国指', '點數', '点数', '走勢', '走势', '後市', '后市', '熊市', '牛市', '調整', '调整', '反彈', '反弹', '崩盤', '崩盘', '股災', '股灾', '牛熊', '恒科', '恆科', '直播', '回放', '拆局', '早晨', '重點', '重点', '速遞', '速递', '快訊', '快讯', '市場', '市场', 'Market', 'Stocks', 'S&P', 'Nasdaq', 'Rally', 'Crash', 'Correction', 'Bear Market', 'Bull Market', 'Sell-off']
  },
  {
    id: 'stock',
    name: '个股拆解',
    color: '#37c9a3',
    brief: '单只股票的业绩/估值/买点。搜索长尾好，容易被“持股的人”反复看，评论区活跃。',
    kw: ['騰訊', '腾讯', '阿里', '小米', '比亞迪', '比亚迪', '美團', '美团', '京東', '京东', '中芯', '匯豐', '汇丰', '港交所', '快手', '網易', '网易', '泡泡瑪特', '泡泡玛特', '蔚來', '蔚来', '小鵬', '小鹏', '業績', '业绩', '財報', '财报', '年報', '年报', '派息', '股息', '高息股', '公用股', '銀行股', '银行股', '藍籌', '蓝筹', '仙股', '板塊', '板块', '睇好', '看好', '部署', '倉位', '仓位', '增持', '減持', '减持', '估值', 'Earnings', 'Buyback', 'Dividend']
  },
  {
    id: 'us',
    name: '美股/AI科技',
    color: '#8b7bff',
    brief: '英伟达、七巨头、AI 叙事。天花板最高，但要跟美盘时差，讲究“开市前/收市后”的发布节奏。',
    kw: ['美股', '納指', '纳指', '標普', '标普', '道指', '英偉達', '英伟达', 'NVDA', 'Nvidia', 'Tesla', '特斯拉', '蘋果', '苹果', 'Apple', 'Meta', 'Google', '微軟', '微软', 'AI', '人工智能', '七巨頭', '七巨头', 'Mag 7', 'OpenAI', '半導體', '半导体', '晶片', '芯片', 'Palantir', 'Nasdaq', 'Magnificent', 'Chip', 'Semiconductor', 'Big Tech', 'Capex']
  },
  {
    id: 'crypto',
    name: '加密货币',
    color: '#ffa63d',
    brief: '币价、稳定币、政策。情绪最极端，点赞率和评论量都偏高，但掉粉也快，别做成频道主线。',
    kw: ['比特幣', '比特币', 'BTC', 'ETH', '以太', '加密', '虛擬貨幣', '虚拟货币', '幣圈', '币圈', '穩定幣', '稳定币', 'Crypto', 'Bitcoin', '山寨幣', '山寨币', '鏈上', '链上', 'Web3', '迷因幣', '迷因币', 'meme', '減半', '减半', '合約', '合约', 'Stablecoin', 'Altcoin', 'Ethereum', 'Solana', 'Halving', 'On-chain']
  },
  {
    id: 'macro',
    name: '宏观/政策/央行',
    color: '#ff6b8a',
    brief: '议息、减息、关税、国策。事件驱动，48 小时内发才有量，过期即废。适合做“快评”栏目。',
    kw: ['減息', '减息', '加息', '聯儲', '联储', 'Fed', '美聯儲', '美联储', '議息', '议息', '利率', '通脹', '通胀', '通縮', '通缩', '關稅', '关税', 'GDP', '政策', '人民幣', '人民币', '匯率', '汇率', '貿易戰', '贸易战', '國策', '国策', '兩會', '两会', '刺激', '救市', '衰退', '暴雷', 'Tariff', 'Inflation', 'Recession', 'Rate Cut', 'Rate Cuts', 'Central Bank', 'Powell', 'Stimulus', 'Deficit']
  },
  {
    id: 'property',
    name: '楼市/房产',
    color: '#c9a227',
    brief: '香港人最痛的选题，天然自带情绪。买楼/租楼、负资产、供楼压力，评论区必吵。',
    kw: ['樓市', '楼市', '買樓', '买楼', '層樓', '层楼', '按揭', '供樓', '供楼', '負資產', '负资产', '租金', '劏房', '公屋', '居屋', '納米樓', '纳米楼', '地產', '地产', '新盤', '新盘', '業主', '业主', '收租', '上車', '上车', '呎價', '尺价', 'Housing', 'Mortgage', 'Real Estate', 'Rent ', 'Property']
  },
  {
    id: 'personal',
    name: '个人理财/储蓄/保险',
    color: '#5ccfe6',
    brief: '强积金、高息户口、月供、保险。最容易被小频道跑出来的赛道 —— 不需要行情、不会过时、可长尾。',
    kw: ['儲蓄', '储蓄', '理財', '理财', '強積金', '强积金', 'MPF', '保險', '保险', '年金', '退休', '月供', '定存', '定期存款', '高息戶口', '高息户口', '現金流', '现金流', '慳錢', '悭钱', '省錢', '省钱', '預算', '预算', '債務', '债务', '卡數', '卡数', '信用卡', '基金', '被動收入', '被动收入', '慳', 'Rich', 'Money', 'Wealth', 'Retire', 'Retirement', 'Savings', 'Budget', 'Debt', 'Passive Income', 'Millionaire', 'Net Worth', 'Broke', 'Salary']
  },
  {
    id: 'wealth',
    name: '财富故事/人物访谈',
    color: '#e879f9',
    brief: '专访、身家、第一桶金。完播率高、涨粉强，但依赖嘉宾资源，是“护城河型”内容。',
    kw: ['專訪', '专访', '訪問', '访问', '對談', '对谈', '身家', '富豪', '創業', '创业', '老闆', '老板', '白手', '發達', '发达', '第一桶金', '財自', '财自', '財務自由', '财务自由', 'FIRE', '揀股王', '拣股王', 'EP', 'Interview', 'Founder', 'Billionaire', 'Self-made', 'Made $', 'How I Built', 'How I Made', 'My First', 'By Age']
  },
  {
    id: 'career',
    name: '打工/收入/生活成本',
    color: '#94a3b8',
    brief: '月入、加薪、北上消费、移民。财经泛化到生活，破圈能力最强，非财经用户也点。',
    kw: ['打工', '月入', '人工', '加薪', '轉工', '转工', '裁員', '裁员', '失業', '失业', '移民', 'BNO', '搵食', '揾食', '生活費', '生活费', '消費', '消费', '北上', '深圳', '副業', '副业', '斜槓', '斜杠', '搵錢', '揾钱', '年薪', '窮', '穷', 'Career', 'Job ', 'Layoff', 'Salary', 'Cost of Living']
  },
  {
    id: 'psychology',
    name: '投资心理/亏损复盘',
    color: '#fb923c',
    brief: '“我输咗XX万学到的事”、散户 vs 大行。讲自己的亏比讲赚更容易信，是小号最快建立信任的路。',
    kw: ['心態', '心态', '心理', '輸咗', '输了', '蝕咗', '亏了', '虧損', '亏损', '爆倉', '爆仓', '復盤', '复盘', '教訓', '教训', '後悔', '后悔', '錯誤', '错误', '散戶', '散户', '人性', '貪', '贪', '恐懼', '恐惧', 'FOMO', '止蝕', '止损', '追高', '接火棒', 'Mistake', 'Mistakes', 'Lost', 'Losing', 'Regret', 'Lesson', 'Psychology']
  },
  {
    id: 'risk',
    name: '骗局/风险预警',
    color: '#ef4444',
    brief: '爆雷、老千股、投资陷阱。点击率天花板最高的一类，但要控制频率，做多了频道调性变负面。',
    kw: ['騙', '骗', '呃', '爆雷', '爆煲', '清盤', '清盘', '停牌', '老千', '陷阱', '小心', '當心', '当心', '風險', '风险', '警告', '血虧', '血亏', '爆倉', '爆仓', '踩雷', '龐氏', '庞氏', '走數', '走数', '傳銷', '传销', '暴雷', '信號', '信号', 'Scam', 'Fraud', 'Collapse', 'Bubble', 'Warning', 'Ponzi', 'Blow Up']
  },
  {
    id: 'commodity',
    name: '黄金/外汇/债券',
    color: '#f59e0b',
    brief: '金价、美元、国债。避险情绪一起来就有量，属于“看天吃饭”的补位选题。',
    kw: ['黃金', '黄金', '金價', '金价', '白銀', '白银', '原油', '油價', '油价', '美元', '日圓', '日元', '外匯', '外汇', '債券', '债券', '國債', '国债', '孳息', '商品', '避險', '避险', 'Gold', 'Silver', 'Oil ', 'Dollar', 'Bond', 'Yield', 'Treasury']
  },
  {
    id: 'ipo',
    name: '新股/IPO',
    color: '#22c55e',
    brief: '招股、暗盘、孖展。窗口极短（3–5 天），但转化意图最强，券商号必做。',
    kw: ['新股', 'IPO', '招股', '暗盤', '暗盘', '抽新股', '上市', '孖展', '中籤', '中签', '保薦', '保荐', '打新']
  },
  {
    id: 'edu',
    name: '投资入门/教学',
    color: '#a3e635',
    brief: '开户、ETF 是什么、看图入门。搜索流量池，不吃时效，是频道的“地基内容”。',
    kw: ['入門', '入门', '新手', '教學', '教学', '教程', '點揀', '点拣', '點買', '点买', '開戶', '开户', '基礎', '基础', '一條片', '一条片', '睇懂', '睇得明', '技術分析', '技术分析', '估值', '咩係', '咩系', '是什麼', '是什么', '教你', 'Beginner', 'Explained', 'How To', 'Guide', 'Basics', '101', '策略', '測試', '测试']
  }
];

export const HOOKS = [
  {
    id: 'number',
    name: '数字锚点',
    color: '#4c8dff',
    brief: '标题里有具体金额/年限/百分比。把抽象收益变成可想象的画面，是财经类最稳的钩子。',
    play: '把“如何储蓄”改成“月入 2 万，点样 5 年储到 100 万”。'
  },
  {
    id: 'identity',
    name: '身份代入',
    color: '#37c9a3',
    brief: '点名一类人：打工仔、散户、90后、月入X万。让目标观众觉得“讲紧我”。',
    play: '标题前 6 个字就要出现身份词，别放在句尾。',
    kw: ['打工仔', '打工族', '散戶', '散户', '90後', '90后', '00後', '00后', '80後', '80后', '新手', '小資', '小资', '中產', '中产', '港人', '香港人', '大學生', '大学生', '媽媽', '妈妈', '窮人', '穷人', '月入', '年輕人', '年轻人', '退休人士', '基層', '基层', 'Most People', 'Beginners', 'If You', 'Your 20s', 'Millennials', 'Gen Z', 'Average Person']
  },
  {
    id: 'suspense',
    name: '悬念/反常识',
    color: '#8b7bff',
    brief: '点解、原来、真相、你唔知。制造信息差，逼人点开找答案。',
    play: '“点解”+ 一个反直觉结论，是粤语财经标题命中率最高的开头。',
    kw: ['點解', '点解', '為咩', '为什么', '為何', '为何', '原來', '原来', '真相', '唔講', '唔會話你知', '不会告诉你', '背後', '背后', '秘密', '其實', '其实', '估唔到', '想不到', '竟然', '驚人', '惊人', '?', '？', 'Why ', 'Nobody', 'No One', 'Secret', 'The Truth', 'Actually', 'What They']
  },
  {
    id: 'negative',
    name: '否定/劝阻',
    color: '#ff6b8a',
    brief: '唔好、千祈唔好、咪买、避开。反向指令比正向建议的点击率高一截。',
    play: '同一个选题做正反两版：“值唔值得买” vs “千祈唔好买”，后者通常赢。',
    kw: ['唔好', '不要', '千祈', '別再', '别再', '停止', '唔值', '不值', '咪買', '咪买', '避開', '避开', '唔掂', '失敗', '失败', '錯', '错', '唔好再', 'Stop ', 'Do Not', 'Don\'t', 'Never ', 'Avoid', 'Worst', 'Mistake']
  },
  {
    id: 'fear',
    name: '恐惧/损失厌恶',
    color: '#ef4444',
    brief: '小心、爆、蚀、插水、陷阱。损失厌恶的点击驱动力约是收益的两倍。',
    play: '有效但会伤调性，建议每 5 条里最多 1 条，且内容必须真的给出解法。',
    kw: ['小心', '當心', '当心', '爆', '蝕', '蚀', '輸', '输', '插水', '崩', '災', '灾', '陷阱', '風暴', '风暴', '危機', '危机', '末日', '清袋', '歸零', '归零', '暴跌', '急跌', 'Crash', 'Collapse', 'Bubble', 'Warning', 'Danger', 'Losing', 'Broke', 'Recession', 'Blow Up']
  },
  {
    id: 'certain',
    name: '确定性承诺',
    color: '#22c55e',
    brief: '一次过、一条片睇晒、懒人包、全攻略。承诺“看完就不用再找了”，降低点开成本。',
    play: '适合做长视频和教学向，能显著拉高完播。',
    kw: ['一定', '必', '穩陣', '稳阵', '最強', '最强', '唯一', '終極', '终极', '齊晒', '齐晒', '一條片', '一条片', '一次過', '一次过', '全攻略', '懶人包', '懒人包', '清單', '清单', '攻略', '秘笈', '法則', '法则', '睇晒', 'Everything', 'Ultimate', 'Complete', 'Exactly', 'Full Guide', 'All You Need', 'Definitive']
  },
  {
    id: 'timely',
    name: '时效热点',
    color: '#ffa63d',
    brief: '今日、突发、最新、开市前。绑定当天事件，吃平台的热点分发。',
    play: '事件发生后 6 小时内发布最优，超过 24 小时基本吃不到红利。',
    kw: ['今日', '今晚', '本周', '今周', '最新', '即時', '即时', '剛剛', '刚刚', '速報', '速报', '突發', '突发', '下周', '聽日', '听日', '開市', '开市', '收市', '盤前', '盘前', '2025', '2026', 'Breaking', 'This Week', 'Right Now', 'Just Happened', 'Latest']
  },
  {
    id: 'authority',
    name: '权威背书',
    color: '#c9a227',
    brief: '前 Banker、基金经理、大行、X年经验。用身份换信任，直接影响转化。',
    play: 'RainIsHere 的“前 Banker”就是靠这条立住的 —— 人设写进标题，不要只写在简介。',
    kw: ['前', 'Banker', 'banker', '基金經理', '基金经理', '分析師', '分析师', 'CFA', '大行', '高盛', '摩根', '專家', '专家', '教授', '操盤', '操盘', '內幕', '内幕', '業內', '业内', '年經驗', '年经验', 'Expert', 'Former', 'Economist', 'Professor', 'Hedge Fund', 'Goldman', 'Billionaire', 'Insider']
  },
  {
    id: 'conflict',
    name: '对立/对比',
    color: '#e879f9',
    brief: 'A vs B、定系、边只好。二选一天然引发评论区站队，是拉评论数最有效的手段。',
    play: '想冲评论门槛（≥20）就用这条，比任何“求评论”话术都管用。',
    kw: ['VS', 'vs', 'Vs', '定係', '定系', '還是', '还是', '邊個', '边个', '對比', '对比', '比較', '比较', '邊隻', '边只', '點揀', '点拣', '之爭', '之争', '大戰', '大战', ' vs ', ' VS ', 'Which One', 'Better Than']
  },
  {
    id: 'series',
    name: '系列/连载',
    color: '#5ccfe6',
    brief: 'EP、第X集、实测第N日、周报。把单片变成栏目，训练用户的收看习惯。',
    play: '券商号最该抄这条 —— 栏目化比单片更容易积累订阅。',
    // 不要放裸的「第」「集」：「第一桶金」「集團」会误伤，改用 re 匹配「第N集/期/日」。
    kw: ['EP', 'Ep', '實測', '实测', '挑戰', '挑战', 'Day ', '日記', '日记', '系列', 'Part', '上集', '下集', '周報', '周报', '每週', '每周'],
    re: /第\s*\d+\s*[集期話话日课課]|\bEP\.?\s*\d|\bPart\s*\d|\bDay\s*\d/i
  },
  {
    id: 'dream',
    name: '致富愿景',
    color: '#a3e635',
    brief: '财自、被动收入、躺平、第一桶金。卖的是身份跃迁的想象，涨粉最快。',
    play: '愿景做标题，方法做内容。只有愿景没有方法 = 高点击低完播，会被算法惩罚。',
    kw: ['財自', '财自', '財務自由', '财务自由', '躺平', '被動收入', '被动收入', 'FIRE', '退休', '發達', '发达', '翻倍', '致富', '第一桶金', '上車', '上车', '增值', '賺', '赚', 'Get Rich', 'Wealthy', 'Millionaire', 'Passive Income', 'Retire Early', 'Financial Freedom', 'Net Worth']
  }
];

const NUMBER_UNIT = new RegExp(
  [
    '\\d[\\d,.]*\\s*(?:萬|万|蚊|元|億|亿|%|倍|年|個月|个月|日|次|人|歲|岁|K|M|美金|美元|港元|蚊雞)',
    '\\$\\s*\\d',
    '\\d[\\d,.]*\\s*(?:years?|months?|days?|weeks?|hours?|minutes?)\\b',
    '\\b(?:age|top|by)\\s*\\d'
  ].join('|'),
  'i'
);

// 英文关键词要大小写不敏感（标题里 Tariff/TARIFF/tariff 都有），
// 但短词不能这样搞 —— 'AI' 小写后会命中 said / chain / available。
// 规则：4 个字符以上的纯 ASCII 词才做大小写不敏感匹配。
function countHits(text, kw) {
  if (!kw) return 0;
  const lower = text.toLowerCase();
  let n = 0;
  for (const w of kw) {
    if (text.includes(w)) {
      n += 1;
    } else if (w.length >= 4 && /^[\x20-\x7e]+$/.test(w) && lower.includes(w.toLowerCase())) {
      n += 1;
    }
  }
  return n;
}

/** 给标题打选题标签，返回按命中数排序的 topic id 数组（最多 2 个）。 */
export function tagTopics(title, description = '') {
  const text = `${title} ${description.slice(0, 300)}`;
  const scored = TOPICS
    .map((t, i) => ({ id: t.id, hits: countHits(text, t.kw) * 2 + countHits(title, t.kw), order: i }))
    .filter((t) => t.hits > 0)
    .sort((a, b) => b.hits - a.hits || a.order - b.order);
  if (!scored.length) return ['other'];
  return scored.slice(0, 2).map((t) => t.id);
}

/** 给标题打爆款钩子标签。钩子是可以叠加的 —— 命中越多，通常点击率越高。 */
export function tagHooks(title) {
  const hits = [];
  if (NUMBER_UNIT.test(title)) hits.push('number');
  for (const h of HOOKS) {
    if (h.id === 'number') continue;
    if (countHits(title, h.kw) > 0 || (h.re && h.re.test(title))) hits.push(h.id);
  }
  return hits;
}

export const TOPIC_MAP = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
export const HOOK_MAP = Object.fromEntries(HOOKS.map((h) => [h.id, h]));

export const OTHER_TOPIC = {
  id: 'other',
  name: '未归类',
  color: '#64748b',
  brief: '词库没命中。看到这类变多，就该往 taxonomy.mjs 里补词了。'
};
