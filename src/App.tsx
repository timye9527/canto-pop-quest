import { useEffect, useMemo, useState } from 'react';
import { movieClassicChapterTitle, movieClassicQuestions } from './movieClassicQuestions';
import { movieComedyChapterTitle, movieComedyQuestions } from './movieComedyQuestions';
import { movieAdvancedChapterTitle, movieAdvancedQuestions } from './movieAdvancedQuestions';
import { movieTrainingDay10ChapterTitle, movieTrainingDay10Questions } from './movieTrainingDay10Questions';
import { movieTrainingDay09ChapterTitle, movieTrainingDay09Questions } from './movieTrainingDay09Questions';
import { movieTrainingDay08ChapterTitle, movieTrainingDay08Questions } from './movieTrainingDay08Questions';
import { movieTrainingDay07ChapterTitle, movieTrainingDay07Questions } from './movieTrainingDay07Questions';
import { movieTrainingDay06ChapterTitle, movieTrainingDay06Questions } from './movieTrainingDay06Questions';
import { movieTrainingDay05ChapterTitle, movieTrainingDay05Questions } from './movieTrainingDay05Questions';
import { movieTrainingDay04ChapterTitle, movieTrainingDay04Questions } from './movieTrainingDay04Questions';
import { movieTrainingDay03ChapterTitle, movieTrainingDay03Questions } from './movieTrainingDay03Questions';
import { movieTrainingDay02ChapterTitle, movieTrainingDay02Questions } from './movieTrainingDay02Questions';
import { movieTrainingChapterTitle, movieTrainingQuestions } from './movieTrainingQuestions';
import { movieChapterTitle, movieQuestions } from './movieQuestions';
import { chapterTitle, questions as vocabularyQuestions } from './questions';
import type { AnswerRecord, Chapter, Question } from './types';
import './styles.css';

const STORAGE_KEY = 'canto-pop-quest-progress-v2';

const chapters: Chapter[] = [
  {
    id: 'movie-training-day-10',
    eyebrow: 'Chapter 15 · 15天训练 Day 10',
    title: movieTrainingDay10ChapterTitle,
    description:
      '50 道蔡澜式人生智慧训练：从饮食、旅行、人情世故和豁达判断里练粤语语感。',
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
    description:
      '50 道周润发经典港片气场训练：从容、义气、分寸、场面话和江湖式收场。',
    questions: movieTrainingDay09Questions,
    versionLabel: 'v15',
    tone: '周润发、从容气场、江湖分寸',
    releaseNote: '新增Day09：周润发经典港片气场，练从容、义气、分寸和场面话。'
  },
  {
    id: 'movie-training-day-08',
    eyebrow: 'Chapter 13 · 15天训练 Day 08',
    title: movieTrainingDay08ChapterTitle,
    description:
      '50 道新闻女王式职场表达训练：事实、立场、话语权、镜头前后和专业边界。',
    questions: movieTrainingDay08Questions,
    versionLabel: 'v14',
    tone: '新闻女王、话语权、专业表达',
    releaseNote: '新增Day08：新闻女王式新闻职场，练事实、立场、话语权和专业表达。'
  },
  {
    id: 'movie-training-day-07',
    eyebrow: 'Chapter 12 · 15天训练 Day 07',
    title: movieTrainingDay07ChapterTitle,
    description:
      '50 道创世纪式商业谈判训练：愿景、风险、承诺、利益交换和职场落地。',
    questions: movieTrainingDay07Questions,
    versionLabel: 'v13',
    tone: '创世纪、商业谈判、风险承诺',
    releaseNote: '新增Day07：创世纪式商战谈判，练愿景、风险、承诺和利益交换。'
  },
  {
    id: 'movie-training-day-06',
    eyebrow: 'Chapter 11 · 15天训练 Day 06',
    title: movieTrainingDay06ChapterTitle,
    description:
      '50 道大时代式压力训练：输赢、人性、家庭利益、情绪压迫和风险判断。',
    questions: movieTrainingDay06Questions,
    versionLabel: 'v12',
    tone: '大时代、输赢、人性压力',
    releaseNote: '新增Day06：大时代式人性和压力场，练输赢、情绪和利益冲突。'
  },
  {
    id: 'movie-training-day-05',
    eyebrow: 'Chapter 10 · 15天训练 Day 05',
    title: movieTrainingDay05ChapterTitle,
    description:
      '50 道男女交往粤语边界训练：暧昧、拒绝、误会、体面表达和亲密关系沟通。',
    questions: movieTrainingDay05Questions,
    versionLabel: 'v11',
    tone: '男女交往、边界、体面拒绝',
    releaseNote: '新增Day05：男女交往粤语边界，从暧昧、误会和拒绝里练语气。'
  },
  {
    id: 'movie-training-day-04',
    eyebrow: 'Chapter 09 · 15天训练 Day 04',
    title: movieTrainingDay04ChapterTitle,
    description:
      '50 道围绕《男亲女爱》式办公室、黄子华/栋笃笑节奏、港乐情绪和职场边界的语感训练。',
    questions: movieTrainingDay04Questions,
    versionLabel: 'v10',
    tone: '男亲女爱、栋笃笑、职场边界',
    releaseNote: '新增Day04：男亲女爱式办公室嘴仗、黄子华式反差观察、港乐情绪和职场边界。'
  },
  {
    id: 'movie-training-day-03',
    eyebrow: 'Chapter 08 · 15天训练 Day 03',
    title: movieTrainingDay03ChapterTitle,
    description:
      '50 道从经典港乐、K房情绪、办公室对白和栋笃笑式观察出发的粤语语感训练。',
    questions: movieTrainingDay03Questions,
    versionLabel: 'v9',
    tone: '港乐情绪、K房场景、职场转译',
    releaseNote: '新增Day03：从港乐情绪过渡到办公室语气、场景判断和职场表达。'
  },
  {
    id: 'movie-training-day-02',
    eyebrow: 'Chapter 07 · 15天训练 Day 02',
    title: movieTrainingDay02ChapterTitle,
    description:
      '50 道 Day 02 港片粤语训练题：减少简单声调题，强化语气、场景、职场迁移和语境综合判断。',
    questions: movieTrainingDay02Questions,
    versionLabel: 'v8',
    tone: 'Day 02、语境综合、少量短摘',
    releaseNote: '新增Day02可玩版：声调题降到4题，强化语气、场景和职场迁移。'
  },
  {
    id: 'movie-training-day-01',
    eyebrow: 'Chapter 06 · 15天训练 Day 01',
    title: movieTrainingChapterTitle,
    description:
      '50 道按声调感知、句意理解、语气潜台词、场景推断、职场迁移和混合复盘编排的港片粤语训练。',
    questions: movieTrainingQuestions,
    versionLabel: 'v7',
    tone: '15天训练、成人高效、港片兴趣入口',
    releaseNote: '新增15天训练Day01、计时记录、电影片名备注和答案长度去规律化。'
  },
  {
    id: 'movie-classic',
    eyebrow: 'Chapter 05 · 经典港片高阶',
    title: movieClassicChapterTitle,
    description:
      '50 道经典港片台词感高阶题：不显示泄题标签、无补全题，穿插九声六调与读音感知。',
    questions: movieClassicQuestions,
    versionLabel: 'v6',
    tone: '经典港片、语气潜台词、声调穿插',
    releaseNote: '新增经典港片高阶50题、错题本、错题复习和声调感知。'
  },
  {
    id: 'movie-comedy',
    eyebrow: 'Chapter 04 · 无厘头进阶',
    title: movieComedyChapterTitle,
    description:
      '50 道无厘头港片感进阶题，考语气、潜台词、面子、人情和近义干扰。答案已打散，别再一路 A 了。',
    questions: movieComedyQuestions,
    versionLabel: 'v5',
    tone: '无厘头、轻玩梗、学习优先',
    releaseNote: '新增50题、emoji选项、答案打散、成长面板和更新记录。'
  },
  {
    id: 'movie-advanced',
    eyebrow: 'Chapter 03 · 港片进阶',
    title: movieAdvancedChapterTitle,
    description:
      '20 道常用港片场景进阶题，不靠冷门词，重点考语气、潜台词、场面话和近义干扰。',
    questions: movieAdvancedQuestions,
    versionLabel: 'v4',
    tone: '常用场景进阶',
    releaseNote: '只播真粤语voice，不再fallback普通话。'
  },
  {
    id: 'movie',
    eyebrow: 'Chapter 02 · 港片句子挑战',
    title: movieChapterTitle,
    description:
      '20 道原创港片场景粤语句子题，先听再判断句意、语气和场景。目标难度校准在 60-80 分。',
    questions: movieQuestions,
    versionLabel: 'v3',
    tone: '港片句子理解',
    releaseNote: '新增港片句子题、粤语播报、自动播报开关和读音提示。'
  },
  {
    id: 'vocab',
    eyebrow: 'Chapter 01 · 词汇热身',
    title: chapterTitle,
    description:
      '50 道港乐/K 房词汇题，从唔该、冇、咁、啱、靓，到点样、边度、真系，适合先热身。',
    questions: vocabularyQuestions,
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

type ChapterStats = {
  bestScore: number;
  lastScore: number;
  attempts: number;
  totalScore: number;
  completed: boolean;
  lastFeedback: string;
  scoreHistory: number[];
};

type WrongBookEntry = {
  questionId: number;
  selectedIndex: number;
  wrongCount: number;
  lastWrongAt: string;
  mastered?: boolean;
};

type ChapterTimeStats = {
  lastMs: number;
  totalMs: number;
  completedRuns: number;
  bestMs: number;
  historyMs: number[];
};

type ProgressDraft = {
  chapterId: string;
  currentIndex: number;
  selectedIndex: number | null;
  answers: AnswerRecord[];
  isReviewMode: boolean;
  reviewQuestionIds: number[];
  reviewMasteredCount: number;
  startedAt?: string;
  elapsedMs?: number;
  updatedAt: string;
};

type SavedProgress = {
  chapters: Record<string, ChapterStats>;
  wrongBook?: Record<string, WrongBookEntry[]>;
  drafts?: Record<string, ProgressDraft>;
  timeStats?: Record<string, ChapterTimeStats>;
};

type Phase = 'start' | 'quiz' | 'result' | 'wrongbook';

function emptyStats(): ChapterStats {
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

function emptyTimeStats(): ChapterTimeStats {
  return {
    lastMs: 0,
    totalMs: 0,
    completedRuns: 0,
    bestMs: 0,
    historyMs: []
  };
}

function loadProgress(): SavedProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        chapters: parsed.chapters || {},
        wrongBook: parsed.wrongBook || {},
        drafts: parsed.drafts || {},
        timeStats: parsed.timeStats || {}
      };
    }
  } catch {
    // Ignore blocked storage in local file contexts.
  }
  return { chapters: {}, wrongBook: {}, drafts: {}, timeStats: {} };
}

function getChapterStats(savedProgress: SavedProgress, chapterId: string): ChapterStats {
  const chapterProgress = savedProgress.chapters || {};
  return {
    ...emptyStats(),
    ...(chapterProgress[chapterId] || {}),
    scoreHistory: chapterProgress[chapterId]?.scoreHistory || []
  };
}

function getChapterTimeStats(savedProgress: SavedProgress, chapterId: string): ChapterTimeStats {
  const stats: Partial<ChapterTimeStats> = savedProgress.timeStats?.[chapterId] || {};
  return {
    ...emptyTimeStats(),
    ...stats,
    historyMs: stats.historyMs || []
  };
}

function formatDuration(ms: number) {
  if (!ms || ms < 0) return '暂无';
  const totalSeconds = Math.max(1, Math.round(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes === 0) return `${seconds} 秒`;
  return `${minutes} 分 ${String(seconds).padStart(2, '0')} 秒`;
}

function getTrainingModuleLabel(module?: Question['trainingModule']) {
  const labels: Record<NonNullable<Question['trainingModule']>, string> = {
    toneEar: '声调/读音感知',
    phraseMeaning: '常用句意理解',
    pragmaticTone: '语气与潜台词',
    sceneInference: '港片场景推断',
    workplaceTransfer: '职场迁移表达',
    reviewMix: '混合复盘'
  };
  return module ? labels[module] : '';
}

function getRating(score: number) {
  if (score >= 90) return '片场听力王';
  if (score >= 70) return '港片熟客';
  if (score >= 50) return '粤语入戏';
  return '返场复习';
}

function getFeedbackTitle(chapterId: string, isCorrect: boolean) {
  if (chapterId === 'movie-comedy') {
    return isCorrect ? '答啱，靓到离谱！' : '差少少，剧情未反转完';
  }
  return isCorrect ? '答啱！' : '差少少';
}

function getDifficultyFeedback(score: number) {
  if (score > 80) return '这章偏易，建议下次提高难度。';
  if (score >= 60) return '难度合适，处于有效练习区间。';
  return '建议复习句子结构、语气词和错题里的读音提示。';
}

function getAverageScore(stats: ChapterStats) {
  return stats.attempts === 0 ? 0 : Math.round(stats.totalScore / stats.attempts);
}

function getWrongEntries(savedProgress: SavedProgress, chapterId: string) {
  return (savedProgress.wrongBook?.[chapterId] || []).filter((entry) => !entry.mastered);
}

function getQuestionById(chapter: Chapter, questionId: number): Question | undefined {
  return chapter.questions.find((question) => question.id === questionId);
}

function getChapterDraft(savedProgress: SavedProgress, chapterId: string) {
  return savedProgress.drafts?.[chapterId];
}

function getDraftTotalQuestions(chapter: Chapter, draft: ProgressDraft) {
  return draft.isReviewMode ? Math.max(draft.reviewQuestionIds.length, 1) : chapter.questions.length;
}

function formatDraftTime(value: string) {
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

function makeDraft(
  chapterId: string,
  currentIndex: number,
  selectedIndex: number | null,
  answers: AnswerRecord[],
  isReviewMode: boolean,
  reviewQuestionIds: number[],
  reviewMasteredCount: number,
  elapsedMs = 0,
  startedAt?: string
): ProgressDraft {
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

function withDraft(progress: SavedProgress, draft: ProgressDraft): SavedProgress {
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

function withoutDraft(progress: SavedProgress, chapterId: string): SavedProgress {
  const drafts = { ...(progress.drafts || {}) };
  delete drafts[chapterId];
  return {
    chapters: progress.chapters || {},
    wrongBook: progress.wrongBook || {},
    timeStats: progress.timeStats || {},
    drafts
  };
}

function getTotalWrongCount(savedProgress: SavedProgress) {
  return Object.values(savedProgress.wrongBook || {}).reduce(
    (total, entries) => total + entries.filter((entry) => !entry.mastered).length,
    0
  );
}

function getFirstChapterWithWrongEntries(savedProgress: SavedProgress, chapters: Chapter[]) {
  return chapters.find((chapter) => getWrongEntries(savedProgress, chapter.id).length > 0);
}

function saveProgress(nextProgress: SavedProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextProgress));
  } catch {
    // Local file contexts can block storage; the current screen still stays usable.
  }
}

function updateWrongBookForAnswer(
  progress: SavedProgress,
  chapterId: string,
  question: Question,
  selectedIndex: number,
  isCorrect: boolean,
  isReviewMode: boolean
): SavedProgress {
  const wrongBook = { ...(progress.wrongBook || {}) };
  const chapterEntries = [...(wrongBook[chapterId] || [])];
  const existingIndex = chapterEntries.findIndex((entry) => entry.questionId === question.id);

  if (!isCorrect) {
    const previous = existingIndex >= 0 ? chapterEntries[existingIndex] : undefined;
    const nextEntry: WrongBookEntry = {
      questionId: question.id,
      selectedIndex,
      wrongCount: (previous?.wrongCount || 0) + 1,
      lastWrongAt: new Date().toISOString(),
      mastered: false
    };
    if (existingIndex >= 0) chapterEntries[existingIndex] = nextEntry;
    else chapterEntries.push(nextEntry);
  } else if (isReviewMode && existingIndex >= 0) {
    chapterEntries[existingIndex] = {
      ...chapterEntries[existingIndex],
      selectedIndex,
      mastered: true
    };
  }

  wrongBook[chapterId] = chapterEntries;
  return {
    chapters: progress.chapters || {},
    wrongBook,
    drafts: progress.drafts || {},
    timeStats: progress.timeStats || {}
  };
}

function isCantoneseVoice(voice: SpeechSynthesisVoice) {
  const lang = voice.lang.toLowerCase();
  const name = voice.name.toLowerCase();
  return (
    lang.includes('zh-hk') ||
    lang.includes('zh_hk') ||
    lang.includes('yue') ||
    name.includes('cantonese') ||
    name.includes('hong kong') ||
    name.includes('yue')
  );
}

function getPreferredCantoneseVoice(voices: SpeechSynthesisVoice[]) {
  const cantoneseVoices = voices.filter((voice) => isCantoneseVoice(voice));
  return (
    cantoneseVoices.find((voice) => voice.name.toLowerCase().includes('sinji')) ||
    cantoneseVoices.find((voice) => /female|woman|mei|sin|sandy|flo|shelley/i.test(voice.name)) ||
    cantoneseVoices[0]
  );
}

function getVoiceLabel(voice: SpeechSynthesisVoice) {
  return `${voice.name} ${voice.lang}`.trim();
}

function speakQuestion(question: Question, setAudioStatus: (message: string) => void) {
  const text = question.spokenText || question.cantoneseText;
  if (!text) {
    setAudioStatus('这题没有朗读文本。');
    return;
  }

  if (!('speechSynthesis' in window)) {
    setAudioStatus('当前浏览器不支持语音合成，仍可继续答题。');
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const voice = getPreferredCantoneseVoice(voices);
    if (!voice) {
      setAudioStatus('未检测到粤语语音，本题暂不朗读；请参考粤拼提示。');
      return;
    }
    utterance.lang = 'zh-HK';
    utterance.rate = 0.86;
    utterance.pitch = 1;
    if (voice) utterance.voice = voice;
    const voiceLabel = getVoiceLabel(voice);
    utterance.onstart = () => setAudioStatus(`使用粤语女声：${voiceLabel}`);
    utterance.onend = () => setAudioStatus(`播报完成：${voiceLabel}。可点重播再听一次。`);
    utterance.onerror = () => setAudioStatus('浏览器阻止或中断了播报，可手动点重播。');
    window.speechSynthesis.speak(utterance);
  } catch {
    setAudioStatus('朗读启动失败，但题目可以继续完成。');
  }
}

export default function App() {
  const [phase, setPhase] = useState<Phase>('start');
  const [selectedChapterId, setSelectedChapterId] = useState('movie-training-day-10');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [savedProgress, setSavedProgress] = useState<SavedProgress>(() => loadProgress());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [reviewQuestionIds, setReviewQuestionIds] = useState<number[]>([]);
  const [reviewMasteredCount, setReviewMasteredCount] = useState(0);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [audioStatus, setAudioStatus] = useState('进入句子挑战后会自动尝试粤语播报。');
  const [sessionStartedAt, setSessionStartedAt] = useState<number | null>(null);
  const [accumulatedMs, setAccumulatedMs] = useState(0);
  const [lastElapsedMs, setLastElapsedMs] = useState(0);

  const activeChapter = chapters.find((chapter) => chapter.id === selectedChapterId) || chapters[0];
  const quizQuestions = useMemo(() => {
    if (!isReviewMode) return activeChapter.questions;
    return reviewQuestionIds
      .map((questionId) => getQuestionById(activeChapter, questionId))
      .filter((question): question is Question => question !== undefined);
  }, [activeChapter, isReviewMode, reviewQuestionIds]);
  const currentQuestion = quizQuestions[currentIndex] || quizQuestions[0] || activeChapter.questions[0];
  const correctCount = answers.filter((answer) => answer.isCorrect).length;
  const score = Math.round((correctCount / Math.max(quizQuestions.length, 1)) * 100);

  useEffect(() => {
    if (phase === 'quiz' && autoSpeak && currentQuestion?.cantoneseText) {
      speakQuestion(currentQuestion, setAudioStatus);
    }
  }, [phase, currentIndex, selectedChapterId, autoSpeak, currentQuestion]);

  function getCurrentElapsedMs() {
    return accumulatedMs + (phase === 'quiz' && sessionStartedAt ? Date.now() - sessionStartedAt : 0);
  }

  function persistProgress(finalScore: number, elapsedMs: number) {
    const baseProgress = loadProgress();
    const previousStats = getChapterStats(baseProgress, activeChapter.id);
    const previousTimeStats = getChapterTimeStats(baseProgress, activeChapter.id);
    const nextStats = {
      bestScore: Math.max(previousStats.bestScore, finalScore),
      lastScore: finalScore,
      attempts: previousStats.attempts + 1,
      totalScore: previousStats.totalScore + finalScore,
      completed: true,
      lastFeedback: getDifficultyFeedback(finalScore),
      scoreHistory: [...previousStats.scoreHistory, finalScore].slice(-5)
    };
    const nextTimeStats = {
      lastMs: elapsedMs,
      totalMs: previousTimeStats.totalMs + elapsedMs,
      completedRuns: previousTimeStats.completedRuns + 1,
      bestMs:
        previousTimeStats.bestMs === 0 ? elapsedMs : Math.min(previousTimeStats.bestMs, elapsedMs),
      historyMs: [...previousTimeStats.historyMs, elapsedMs].slice(-5)
    };
    const nextProgress = withoutDraft(
      {
        chapters: {
          ...(baseProgress.chapters || {}),
          [activeChapter.id]: nextStats
        },
        wrongBook: baseProgress.wrongBook || {},
        drafts: baseProgress.drafts || {},
        timeStats: {
          ...(baseProgress.timeStats || {}),
          [activeChapter.id]: nextTimeStats
        }
      },
      activeChapter.id
    );

    saveProgress(nextProgress);
    setSavedProgress(nextProgress);
  }

  function persistDraft(draft: ProgressDraft, progress: SavedProgress = loadProgress()) {
    const nextProgress = withDraft(progress, draft);
    saveProgress(nextProgress);
    setSavedProgress(nextProgress);
  }

  function clearDraft(chapterId: string) {
    const nextProgress = withoutDraft(loadProgress(), chapterId);
    saveProgress(nextProgress);
    setSavedProgress(nextProgress);
  }

  function saveCurrentDraft() {
    const elapsedMs = getCurrentElapsedMs();
    persistDraft(
      makeDraft(
        activeChapter.id,
        currentIndex,
        selectedIndex,
        answers,
        isReviewMode,
        reviewQuestionIds,
        reviewMasteredCount,
        elapsedMs,
        sessionStartedAt ? new Date(sessionStartedAt).toISOString() : undefined
      )
    );
  }

  function startGame() {
    const startedAt = Date.now();
    const draft = makeDraft(activeChapter.id, 0, null, [], false, [], 0, 0, new Date(startedAt).toISOString());
    persistDraft(draft);
    setSessionStartedAt(startedAt);
    setAccumulatedMs(0);
    setLastElapsedMs(0);
    setIsReviewMode(false);
    setReviewQuestionIds([]);
    setReviewMasteredCount(0);
    setPhase('quiz');
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers([]);
    setAudioStatus(activeChapter.questions[0]?.cantoneseText ? '准备播报第一句…' : '词汇热身不需要播报。');
  }

  function resumeDraft() {
    const draft = getChapterDraft(savedProgress, activeChapter.id);
    if (!draft) {
      startGame();
      return;
    }
    setSelectedChapterId(draft.chapterId);
    setIsReviewMode(draft.isReviewMode);
    setReviewQuestionIds(draft.reviewQuestionIds);
    setReviewMasteredCount(draft.reviewMasteredCount);
    setAccumulatedMs(draft.elapsedMs || 0);
    setSessionStartedAt(Date.now());
    setLastElapsedMs(0);
    setPhase('quiz');
    setCurrentIndex(draft.currentIndex);
    setSelectedIndex(draft.selectedIndex);
    setAnswers(draft.answers);
    setAudioStatus(activeChapter.questions[draft.currentIndex]?.cantoneseText ? '已恢复上次进度，可继续作答。' : '已恢复上次进度。');
  }

  function exitAndSave() {
    saveCurrentDraft();
    setAccumulatedMs(getCurrentElapsedMs());
    setSessionStartedAt(null);
    setPhase('start');
  }

  function toggleAutoSpeak() {
    setAutoSpeak((value) => !value);
    saveCurrentDraft();
  }

  function startGameFresh() {
    clearDraft(activeChapter.id);
    const startedAt = Date.now();
    const draft = makeDraft(activeChapter.id, 0, null, [], false, [], 0, 0, new Date(startedAt).toISOString());
    const nextProgress = withDraft(loadProgress(), draft);
    saveProgress(nextProgress);
    setSavedProgress(nextProgress);
    setSessionStartedAt(startedAt);
    setAccumulatedMs(0);
    setLastElapsedMs(0);
    setIsReviewMode(false);
    setReviewQuestionIds([]);
    setReviewMasteredCount(0);
    setPhase('quiz');
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers([]);
    setAudioStatus(activeChapter.questions[0]?.cantoneseText ? '准备播报第一句…' : '词汇热身不需要播报。');
  }

  function startWrongReview(chapterId: string) {
    const chapter = chapters.find((item) => item.id === chapterId);
    const wrongEntries = getWrongEntries(savedProgress, chapterId);
    if (!chapter || wrongEntries.length === 0) return;
    const questionIds = wrongEntries.map((entry) => entry.questionId);
    const startedAt = Date.now();
    const draft = makeDraft(chapterId, 0, null, [], true, questionIds, 0, 0, new Date(startedAt).toISOString());
    persistDraft(draft);
    setSessionStartedAt(startedAt);
    setAccumulatedMs(0);
    setLastElapsedMs(0);
    setSelectedChapterId(chapterId);
    setIsReviewMode(true);
    setReviewQuestionIds(questionIds);
    setReviewMasteredCount(0);
    setPhase('quiz');
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers([]);
    setAudioStatus(chapter.questions[0]?.cantoneseText ? '错题复习开始，准备播报…' : '错题复习开始。');
  }

  function chooseAnswer(choiceIndex: number) {
    if (selectedIndex !== null) return;
    const elapsedMs = getCurrentElapsedMs();
    const isCorrect = choiceIndex === currentQuestion.answerIndex;
    const nextAnswers = [
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedIndex: choiceIndex,
        isCorrect
      }
    ];
    const nextMasteredCount = isReviewMode && isCorrect ? reviewMasteredCount + 1 : reviewMasteredCount;
    const nextProgress = updateWrongBookForAnswer(
      loadProgress(),
      activeChapter.id,
      currentQuestion,
      choiceIndex,
      isCorrect,
      isReviewMode
    );
    const nextProgressWithDraft = withDraft(
      nextProgress,
      makeDraft(
        activeChapter.id,
        currentIndex,
        choiceIndex,
        nextAnswers,
        isReviewMode,
        reviewQuestionIds,
        nextMasteredCount,
        elapsedMs,
        sessionStartedAt ? new Date(sessionStartedAt).toISOString() : undefined
      )
    );

    setSelectedIndex(choiceIndex);
    setAnswers(nextAnswers);
    saveProgress(nextProgressWithDraft);
    setSavedProgress(nextProgressWithDraft);
    if (isReviewMode && isCorrect) {
      setReviewMasteredCount(nextMasteredCount);
    }
  }

  function goNext() {
    if (currentIndex === quizQuestions.length - 1) {
      const elapsedMs = getCurrentElapsedMs();
      setLastElapsedMs(elapsedMs);
      setAccumulatedMs(elapsedMs);
      setSessionStartedAt(null);
      if (!isReviewMode) persistProgress(score, elapsedMs);
      else clearDraft(activeChapter.id);
      setPhase('result');
      return;
    }
    const nextIndex = currentIndex + 1;
    const elapsedMs = getCurrentElapsedMs();
    persistDraft(
      makeDraft(
        activeChapter.id,
        nextIndex,
        null,
        answers,
        isReviewMode,
        reviewQuestionIds,
        reviewMasteredCount,
        elapsedMs,
        sessionStartedAt ? new Date(sessionStartedAt).toISOString() : undefined
      )
    );
    setCurrentIndex(nextIndex);
    setSelectedIndex(null);
  }

  function selectChapter(chapterId: string) {
    setSelectedChapterId(chapterId);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers([]);
    setIsReviewMode(false);
    setReviewQuestionIds([]);
    setReviewMasteredCount(0);
    setPhase('start');
  }

  if (phase === 'quiz') {
    if (!currentQuestion) {
      setPhase('wrongbook');
      return null;
    }
    return (
      <QuizScreen
        autoSpeak={autoSpeak}
        audioStatus={audioStatus}
        chapter={activeChapter}
        currentIndex={currentIndex}
        totalQuestions={quizQuestions.length}
        isReviewMode={isReviewMode}
        onChoose={chooseAnswer}
        onExit={exitAndSave}
        onNext={goNext}
        onReplay={() => speakQuestion(currentQuestion, setAudioStatus)}
        onToggleAutoSpeak={toggleAutoSpeak}
        question={currentQuestion}
        selectedIndex={selectedIndex}
      />
    );
  }

  if (phase === 'result') {
    return (
      <ResultScreen
        answers={answers}
        chapter={activeChapter}
        elapsedMs={lastElapsedMs || accumulatedMs}
        isReviewMode={isReviewMode}
        masteredCount={reviewMasteredCount}
        savedProgress={savedProgress}
        score={score}
        totalQuestions={quizQuestions.length}
        onHome={() => setPhase('start')}
        onRestart={startGame}
      />
    );
  }

  if (phase === 'wrongbook') {
    return (
      <WrongBookScreen
        chapters={chapters}
        savedProgress={savedProgress}
        onBack={() => setPhase('start')}
        onReview={startWrongReview}
      />
    );
  }

  return (
    <StartScreen
      activeChapter={activeChapter}
      chapters={chapters}
      savedProgress={savedProgress}
      selectedChapterId={selectedChapterId}
      onSelectChapter={selectChapter}
      onOpenWrongBook={() => setPhase('wrongbook')}
      onResume={resumeDraft}
      onRestart={startGameFresh}
      onStart={startGame}
    />
  );
}

function StartScreen({
  activeChapter,
  chapters,
  savedProgress,
  selectedChapterId,
  onSelectChapter,
  onOpenWrongBook,
  onResume,
  onRestart,
  onStart
}: {
  activeChapter: Chapter;
  chapters: Chapter[];
  savedProgress: SavedProgress;
  selectedChapterId: string;
  onSelectChapter: (chapterId: string) => void;
  onOpenWrongBook: () => void;
  onResume: () => void;
  onRestart: () => void;
  onStart: () => void;
}) {
  const stats = getChapterStats(savedProgress, selectedChapterId);
  const timeStats = getChapterTimeStats(savedProgress, selectedChapterId);
  const wrongCount = getTotalWrongCount(savedProgress);
  const draft = getChapterDraft(savedProgress, selectedChapterId);
  const draftTotal = draft ? getDraftTotalQuestions(activeChapter, draft) : activeChapter.questions.length;
  const capabilityTags = Array.from(
    new Set(activeChapter.questions.map((question) => question.phoneticFocus || question.skillTag).filter(Boolean))
  ).slice(0, 6);

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">{activeChapter.eyebrow}</p>
          <h1>{activeChapter.title}</h1>
          <p className="lede">{activeChapter.description}</p>
          <div className="chapter-switcher" aria-label="章节选择">
            {chapters.map((chapter) => (
              <button
                className={`chapter-tab ${chapter.id === selectedChapterId ? 'is-active' : ''}`}
                key={chapter.id}
                type="button"
                onClick={() => onSelectChapter(chapter.id)}
              >
                <span>{chapter.eyebrow}</span>
                <strong>{chapter.recommended ? '推荐' : `${chapter.questions.length} 题`}</strong>
              </button>
            ))}
          </div>
          <div className="start-actions">
            {draft ? (
              <>
                <button className="primary-button" type="button" onClick={onResume}>
                  继续上次进度
                </button>
                <button className="ghost-button" type="button" onClick={onRestart}>
                  重新开始
                </button>
              </>
            ) : (
              <button className="primary-button" type="button" onClick={onStart}>
                开始闯关
              </button>
            )}
            <button className="ghost-button" type="button" onClick={onOpenWrongBook}>
              错题本 {wrongCount}
            </button>
            <div className="saved-stat">
              <span>最高分</span>
              <strong>{stats.bestScore}</strong>
            </div>
            <div className="saved-stat">
              <span>平均分</span>
              <strong>{getAverageScore(stats)}</strong>
            </div>
          </div>
          <div className="growth-panel" aria-label="成长面板">
            <div>
              <span>最近分</span>
              <strong>{stats.lastScore}</strong>
            </div>
            <div>
              <span>尝试次数</span>
              <strong>{stats.attempts}</strong>
            </div>
            <div className="wide-stat">
              <span>最近记录</span>
              <strong>{stats.scoreHistory.length > 0 ? stats.scoreHistory.join(' / ') : '暂无'}</strong>
            </div>
            <div className="wide-stat">
              <span>难度反馈</span>
              <strong>{stats.lastFeedback || '完成一轮后会生成反馈'}</strong>
            </div>
            <div className="wide-stat">
              <span>未完成进度</span>
              <strong>
                {draft
                  ? `第 ${Math.min(draft.currentIndex + 1, draftTotal)} / ${draftTotal} 题 · 已用 ${formatDuration(draft.elapsedMs || 0)} · ${formatDraftTime(draft.updatedAt)}`
                  : '暂无'}
              </strong>
            </div>
            <div className="wide-stat">
              <span>时间投入</span>
              <strong>
                最近 {formatDuration(timeStats.lastMs)} · 累计 {formatDuration(timeStats.totalMs)} · 完成 {timeStats.completedRuns} 轮
              </strong>
            </div>
          </div>
          {activeChapter.id.startsWith('movie-training-day-') && (
            <div className="training-plan" aria-label="15天训练计划">
              <span>15天训练计划</span>
              <strong>{activeChapter.questions[0]?.dayTag || 'Day 01'} · 建议 15 分钟 / 50 题</strong>
              <p>交错训练：声调感知、句意、语气、场景、职场迁移和混合复盘，不靠死背 3000 字读音差异。</p>
            </div>
          )}
          <div className="release-notes" aria-label="更新记录">
            <h2>更新记录</h2>
            {releaseNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
        <div className="chapter-board summary-board" aria-label="章节预览">
          <div className="scene-ribbon" aria-label="片场氛围">
            场记板 · 夜街霓虹 · K房热身
          </div>
          <div className="summary-row">
            <span>题量</span>
            <strong>{activeChapter.questions.length} 题</strong>
          </div>
          <div className="summary-row">
            <span>难度</span>
            <strong>{activeChapter.questions[0]?.difficulty || '进阶'}</strong>
          </div>
          <div className="summary-row">
            <span>版本</span>
            <strong>{activeChapter.versionLabel || 'MVP'}</strong>
          </div>
          <div className="summary-row wide">
            <span>能力覆盖</span>
            <strong>
              {activeChapter.id.startsWith('movie-training-day-')
                ? '声调感知 / 句意理解 / 语气潜台词 / 场景推断 / 职场迁移 / 混合复盘'
                : capabilityTags.join(' / ') || activeChapter.tone || '词义理解'}
            </strong>
          </div>
          <div className="summary-row">
            <span>建议时间</span>
            <strong>{activeChapter.id.startsWith('movie-training-day-') ? '15 分钟 / 50 题' : '按章节节奏练习'}</strong>
          </div>
          <div className="summary-row">
            <span>最近用时</span>
            <strong>{formatDuration(timeStats.lastMs)}</strong>
          </div>
          <div className="summary-note">{activeChapter.releaseNote}</div>
        </div>
      </section>
    </main>
  );
}

function QuizScreen({
  autoSpeak,
  audioStatus,
  chapter,
  currentIndex,
  totalQuestions,
  isReviewMode,
  question,
  selectedIndex,
  onChoose,
  onExit,
  onNext,
  onReplay,
  onToggleAutoSpeak
}: {
  autoSpeak: boolean;
  audioStatus: string;
  chapter: Chapter;
  currentIndex: number;
  totalQuestions: number;
  isReviewMode: boolean;
  question: Question;
  selectedIndex: number | null;
  onChoose: (choiceIndex: number) => void;
  onExit: () => void;
  onNext: () => void;
  onReplay: () => void;
  onToggleAutoSpeak: () => void;
}) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const isAnswered = selectedIndex !== null;
  const isCorrect = selectedIndex === question.answerIndex;
  const hasAudio = Boolean(question.cantoneseText);
  const shouldShowPreAnswerHint = chapter.id !== 'movie-classic' && !chapter.id.startsWith('movie-training-day-');

  return (
    <main className="app-shell">
      <section className="quiz-panel">
        <div className="quiz-topbar">
          <div>
            <p className="eyebrow">{isReviewMode ? '错题复习' : chapter.eyebrow}</p>
            <h1>{chapter.title}</h1>
            <p className="set-status">
              {isReviewMode ? '返场补拍 · 只练未掌握片段' : '片场收音中 · 听句意，也听语气'}
            </p>
          </div>
          <span className="question-count">
            {currentIndex + 1}/{totalQuestions}
          </span>
          <button className="ghost-button" type="button" onClick={onExit}>
            退出并保存
          </button>
        </div>
        <div className="progress-track" aria-label="闯关进度">
          <span style={{ width: `${progress}%` }} />
        </div>
        <article className="question-card">
          <div className="meta-row">
            <div className="difficulty">{question.difficulty}</div>
            <div className="difficulty muted">第 {currentIndex + 1} 题</div>
          </div>
          {question.cantoneseText && <p className="cantonese-line">{question.cantoneseText}</p>}
          {hasAudio && (
            <div className="audio-bar">
              <button className="ghost-button" type="button" onClick={onReplay}>
                重播
              </button>
              <button className={`toggle-button ${autoSpeak ? 'is-on' : ''}`} type="button" onClick={onToggleAutoSpeak}>
                自动播报 {autoSpeak ? '开' : '关'}
              </button>
              <span>{audioStatus}</span>
            </div>
          )}
          {question.pronunciationHint && shouldShowPreAnswerHint && (
            <p className="pronunciation">读音提示：{question.pronunciationHint}</p>
          )}
          <h2>{question.prompt}</h2>
          <div className="choice-grid">
            {question.choices.map((choice, choiceIndex) => {
              const isRightChoice = choiceIndex === question.answerIndex;
              const isChosen = choiceIndex === selectedIndex;
              const stateClass =
                isAnswered && isRightChoice ? 'is-correct' : isAnswered && isChosen ? 'is-wrong' : '';
              return (
                <button
                  className={`choice-button ${stateClass}`}
                  disabled={isAnswered}
                  key={choice}
                  type="button"
                  onClick={() => onChoose(choiceIndex)}
                >
                  <span>{String.fromCharCode(65 + choiceIndex)}</span>
                  {choice}
                </button>
              );
            })}
          </div>
        </article>
        {isAnswered && (
          <section className={`feedback ${isCorrect ? 'positive' : 'negative'}`}>
            <strong>{getFeedbackTitle(chapter.id, isCorrect)}</strong>
            <p>{question.explanation}</p>
            <p className="feedback-tags">
              {getTrainingModuleLabel(question.trainingModule) || question.theme} · {question.skillTag || question.questionType}
              {question.phoneticFocus ? ` · ${question.phoneticFocus}` : ''}
            </p>
            {question.movieTitle && (
              <p className="movie-note">
                片名备注：{question.movieTitle} · {question.movieNote}
              </p>
            )}
            {question.pronunciationHint && <p>读音提示：{question.pronunciationHint}</p>}
            {question.workplaceTip && <p className="workplace-tip">职场迁移：{question.workplaceTip}</p>}
            <button className="primary-button compact" type="button" onClick={onNext}>
              {currentIndex === totalQuestions - 1 ? '查看成绩' : '下一题'}
            </button>
          </section>
        )}
      </section>
    </main>
  );
}

function ResultScreen({
  answers,
  chapter,
  elapsedMs,
  isReviewMode,
  masteredCount,
  savedProgress,
  score,
  totalQuestions,
  onHome,
  onRestart
}: {
  answers: AnswerRecord[];
  chapter: Chapter;
  elapsedMs: number;
  isReviewMode: boolean;
  masteredCount: number;
  savedProgress: SavedProgress;
  score: number;
  totalQuestions: number;
  onHome: () => void;
  onRestart: () => void;
}) {
  const timeStats = getChapterTimeStats(savedProgress, chapter.id);
  const missedQuestions = useMemo(
    (): { answer: AnswerRecord; question: Question }[] =>
      answers
        .filter((answer) => !answer.isCorrect)
        .filter((answer) => chapter.questions.some((item) => item.id === answer.questionId))
        .map((answer) => ({
          answer,
          question: chapter.questions.find((item) => item.id === answer.questionId)!
        })),
    [answers, chapter.questions]
  );

  return (
    <main className="app-shell">
      <section className="result-panel">
        <p className="eyebrow">{isReviewMode ? '错题复习结算' : '本章结算'}</p>
        <h1>{getRating(score)}</h1>
        <div className="score-ring" aria-label={`得分 ${score}`}>
          <strong>{score}</strong>
          <span>分</span>
        </div>
        <p className="lede">
          你答对 {answers.filter((answer) => answer.isCorrect).length} / {totalQuestions} 题。
          {isReviewMode ? `本轮错题复习掌握 ${masteredCount} 题。` : getDifficultyFeedback(score)}
        </p>
        <div className="time-summary" aria-label="本轮时间统计">
          <div>
            <span>本轮用时</span>
            <strong>{formatDuration(elapsedMs)}</strong>
          </div>
          <div>
            <span>平均每题</span>
            <strong>{formatDuration(elapsedMs / Math.max(totalQuestions, 1))}</strong>
          </div>
          <div>
            <span>最近5次</span>
            <strong>
              {(timeStats.historyMs.length > 0 ? timeStats.historyMs : elapsedMs ? [elapsedMs] : [])
                .map((item) => formatDuration(item))
                .join(' / ') || '暂无'}
            </strong>
          </div>
        </div>
        {missedQuestions.length > 0 && (
          <div className="review-list">
            {missedQuestions.map(({ answer, question }) => (
              <article className="review-item" key={question.id}>
                <span>{getTrainingModuleLabel(question.trainingModule) || question.theme}</span>
                {question.cantoneseText && <strong>{question.cantoneseText}</strong>}
                <p>
                  你选了“{question.choices[answer.selectedIndex]}”，正确答案是“
                  {question.choices[question.answerIndex]}”。
                </p>
                <p>{question.explanation}</p>
                {question.movieTitle && <p>片名备注：{question.movieTitle} · {question.movieNote}</p>}
                {question.pronunciationHint && <p>读音提示：{question.pronunciationHint}</p>}
                {question.phoneticFocus && <p>读音点：{question.phoneticFocus}</p>}
                {question.workplaceTip && <p>职场迁移：{question.workplaceTip}</p>}
              </article>
            ))}
          </div>
        )}
        <div className="result-actions">
          <button className="primary-button" type="button" onClick={onRestart}>
            {isReviewMode ? '重新挑战本章' : '再玩一次'}
          </button>
          <button className="ghost-button" type="button" onClick={onHome}>
            返回首页
          </button>
        </div>
      </section>
    </main>
  );
}

function WrongBookScreen({
  chapters,
  savedProgress,
  onBack,
  onReview
}: {
  chapters: Chapter[];
  savedProgress: SavedProgress;
  onBack: () => void;
  onReview: (chapterId: string) => void;
}) {
  const firstWrongChapter = getFirstChapterWithWrongEntries(savedProgress, chapters);
  const [selectedChapterId, setSelectedChapterId] = useState(firstWrongChapter?.id || chapters[0].id);
  const selectedChapter = chapters.find((chapter) => chapter.id === selectedChapterId) || chapters[0];
  const selectedWrongCount = getWrongEntries(savedProgress, selectedChapter.id).length;
  const shouldAutoSwitch = selectedWrongCount === 0 && Boolean(firstWrongChapter);

  useEffect(() => {
    if (shouldAutoSwitch && firstWrongChapter) {
      setSelectedChapterId(firstWrongChapter.id);
    }
  }, [firstWrongChapter, shouldAutoSwitch]);

  const entries = getWrongEntries(savedProgress, selectedChapter.id)
    .map((entry) => ({
      entry,
      question: getQuestionById(selectedChapter, entry.questionId)
    }))
    .filter((item): item is { entry: WrongBookEntry; question: Question } => Boolean(item.question));
  const totalWrongCount = getTotalWrongCount(savedProgress);

  return (
    <main className="app-shell">
      <section className="result-panel wrongbook-panel">
        <p className="eyebrow">错题本</p>
        <h1>把没掌握的句子留在片场慢慢练</h1>
        <p className="lede">
          当前共有 {totalWrongCount} 道未掌握错题。答对错题复习后，会自动标记为已掌握。
        </p>
        <div className="wrongbook-status" aria-label="错题本当前筛选">
          当前显示：{selectedChapter.eyebrow}；全部未掌握错题：{totalWrongCount} 道。
          {shouldAutoSwitch && firstWrongChapter ? ` 其他章节有错题，已为你切到 ${firstWrongChapter.eyebrow}。` : ''}
        </div>
        <div className="chapter-switcher compact-switcher" aria-label="错题章节选择">
          {chapters.map((chapter) => {
            const count = getWrongEntries(savedProgress, chapter.id).length;
            return (
              <button
                className={`chapter-tab ${chapter.id === selectedChapterId ? 'is-active' : ''}`}
                key={chapter.id}
                type="button"
                onClick={() => setSelectedChapterId(chapter.id)}
              >
                <span>{chapter.eyebrow}</span>
                <strong>{count} 题</strong>
              </button>
            );
          })}
        </div>
        <div className="result-actions">
          <button className="primary-button" disabled={entries.length === 0} type="button" onClick={() => onReview(selectedChapter.id)}>
            只复习本章错题
          </button>
          <button className="ghost-button" type="button" onClick={onBack}>
            返回首页
          </button>
        </div>
        {entries.length > 0 ? (
          <div className="review-list">
            {entries.map(({ entry, question }) => (
              <article className="review-item" key={question.id}>
                <span>
                  错 {entry.wrongCount} 次 · 最近 {new Date(entry.lastWrongAt).toLocaleDateString()}
                </span>
                {question.cantoneseText && <strong>{question.cantoneseText}</strong>}
                <p>
                  上次选了“{question.choices[entry.selectedIndex]}”，正确答案是“
                  {question.choices[question.answerIndex]}”。
                </p>
                <p>{question.explanation}</p>
                {question.movieTitle && <p>片名备注：{question.movieTitle} · {question.movieNote}</p>}
                {question.pronunciationHint && <p>读音提示：{question.pronunciationHint}</p>}
                {question.phoneticFocus && <p>读音点：{question.phoneticFocus}</p>}
                {question.workplaceTip && <p>职场迁移：{question.workplaceTip}</p>}
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">这一章暂时没有未掌握错题，先去挑战一轮再回来复盘。</div>
        )}
      </section>
    </main>
  );
}
