/**
 * 条漫模式的存档与间隔重复（SRS）。
 *
 * 刻意使用独立的 storage key：题库模式的
 * `canto-pop-quest-progress-v2` 完全不碰，两边互不影响。
 */

const STRIP_STORAGE_KEY = 'canto-pop-quest-strips-v1';

/** 每天最多推几条新的，控制单次时长在 90 秒左右 */
export const DAILY_NEW_LIMIT = 3;

/** 答对后的间隔阶梯（天）。答错退回第一级。 */
const INTERVAL_LADDER = [1, 3, 7, 16, 35];

export type StripState = {
  /** 已经看过几次 */
  seen: number;
  /** 在间隔阶梯上的位置 */
  level: number;
  /** 下次该看的日期（YYYY-MM-DD） */
  dueOn: string;
  /** 最后一次看的日期 */
  lastOn: string;
  /** 确认题累计答对／答错 */
  right: number;
  wrong: number;
};

export type StripProgress = {
  strips: Record<string, StripState>;
  /** 连续到访天数 */
  streak: number;
  /** 最长连续天数 */
  bestStreak: number;
  /** 最后一次到访日期 */
  lastVisit: string;
  /** 每天完成条数，YYYY-MM-DD -> count */
  daily: Record<string, number>;
};

export function todayKey(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function addDays(dayKey: string, days: number): string {
  const [y, m, d] = dayKey.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  return todayKey(date);
}

function daysBetween(from: string, to: string): number {
  const [fy, fm, fd] = from.split('-').map(Number);
  const [ty, tm, td] = to.split('-').map(Number);
  const a = Date.UTC(fy, fm - 1, fd);
  const b = Date.UTC(ty, tm - 1, td);
  return Math.round((b - a) / 86400000);
}

export function emptyProgress(): StripProgress {
  return { strips: {}, streak: 0, bestStreak: 0, lastVisit: '', daily: {} };
}

export function loadStripProgress(): StripProgress {
  try {
    const raw = localStorage.getItem(STRIP_STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Partial<StripProgress>;
    return {
      strips: parsed.strips || {},
      streak: parsed.streak || 0,
      bestStreak: parsed.bestStreak || 0,
      lastVisit: parsed.lastVisit || '',
      daily: parsed.daily || {}
    };
  } catch {
    // 存档损坏或浏览器禁用了 localStorage：当作新用户，不影响继续使用
    return emptyProgress();
  }
}

export function saveStripProgress(progress: StripProgress): void {
  try {
    localStorage.setItem(STRIP_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // 无痕模式等写入失败：本轮照样能看完，只是不留记录
  }
}

/** 到访时更新连续天数。同一天重复进入不会重复累加。 */
export function touchVisit(progress: StripProgress, today = todayKey()): StripProgress {
  if (progress.lastVisit === today) return progress;
  const gap = progress.lastVisit ? daysBetween(progress.lastVisit, today) : 0;
  const streak = !progress.lastVisit || gap > 1 ? 1 : progress.streak + 1;
  return {
    ...progress,
    streak,
    bestStreak: Math.max(progress.bestStreak, streak),
    lastVisit: today
  };
}

/**
 * 今天该看哪几条：先补到期复习，再用新条填满。
 * 断更再回来时不会堆积成几十条，上限就是 review + DAILY_NEW_LIMIT。
 */
export function pickTodayStrips(
  allStrips: { id: string }[],
  progress: StripProgress,
  today = todayKey(),
  newLimit = DAILY_NEW_LIMIT
): { due: string[]; fresh: string[] } {
  const due: string[] = [];
  const fresh: string[] = [];
  for (const strip of allStrips) {
    const state = progress.strips[strip.id];
    if (!state) {
      if (fresh.length < newLimit) fresh.push(strip.id);
    } else if (state.dueOn <= today) {
      due.push(strip.id);
    }
  }
  return { due, fresh };
}

/**
 * 看完一条后推进间隔。
 * gotAllRight=false 时退回第一级，下次还会很快再见到。
 */
export function reviewStrip(
  progress: StripProgress,
  stripId: string,
  gotAllRight: boolean,
  today = todayKey()
): StripProgress {
  const prev = progress.strips[stripId];
  const level = gotAllRight ? Math.min((prev?.level ?? -1) + 1, INTERVAL_LADDER.length - 1) : 0;
  const state: StripState = {
    seen: (prev?.seen ?? 0) + 1,
    level,
    dueOn: addDays(today, INTERVAL_LADDER[level]),
    lastOn: today,
    right: (prev?.right ?? 0) + (gotAllRight ? 1 : 0),
    wrong: (prev?.wrong ?? 0) + (gotAllRight ? 0 : 1)
  };
  return {
    ...progress,
    strips: { ...progress.strips, [stripId]: state },
    daily: { ...progress.daily, [today]: (progress.daily[today] || 0) + 1 }
  };
}

/** 首页要显示的总览数字 */
export function summarize(allStrips: { id: string }[], progress: StripProgress, today = todayKey()) {
  const states = allStrips.map((s) => progress.strips[s.id]).filter(Boolean) as StripState[];
  const dueCount = states.filter((s) => s.dueOn <= today).length;
  // 到了阶梯后段（间隔 ≥ 7 天）才算真正记住了
  const mastered = states.filter((s) => s.level >= 2).length;
  return {
    total: allStrips.length,
    started: states.length,
    mastered,
    dueCount,
    doneToday: progress.daily[today] || 0
  };
}
