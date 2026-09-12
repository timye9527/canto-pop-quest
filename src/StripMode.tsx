import { useMemo, useState } from 'react';
import type { Strip, StripPack } from './stripTypes';
import { financePack } from './stripsFinance';
import { lifePack } from './stripsLife';
import { speakCanto } from './speech';
import {
  DAILY_NEW_LIMIT,
  loadStripProgress,
  pickTodayStrips,
  reviewStrip,
  saveStripProgress,
  summarize,
  todayKey,
  touchVisit,
  type StripProgress
} from './stripStorage';

const packs: StripPack[] = [financePack, lifePack];
const allStrips: Strip[] = packs.flatMap((pack) => pack.strips);
const stripById = new Map(allStrips.map((strip) => [strip.id, strip]));

/** 一条 strip 展开成的步骤序列 */
type Step =
  | { kind: 'cover' }
  | { kind: 'panel'; index: number }
  | { kind: 'words' }
  | { kind: 'check'; index: number }
  | { kind: 'done' };

function buildSteps(strip: Strip): Step[] {
  return [
    { kind: 'cover' },
    ...strip.panels.map((_, index) => ({ kind: 'panel' as const, index })),
    { kind: 'words' },
    ...strip.checks.map((_, index) => ({ kind: 'check' as const, index })),
    { kind: 'done' }
  ];
}

export default function StripMode({ onExit }: { onExit: () => void }) {
  const [progress, setProgress] = useState<StripProgress>(() => {
    const loaded = touchVisit(loadStripProgress());
    saveStripProgress(loaded);
    return loaded;
  });
  const [queue, setQueue] = useState<string[]>([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [checkAnswers, setCheckAnswers] = useState<(number | null)[]>([]);
  const [sessionDone, setSessionDone] = useState(false);
  const [spokenNote, setSpokenNote] = useState('');

  const today = todayKey();
  const stats = useMemo(() => summarize(allStrips, progress, today), [progress, today]);
  const todayPick = useMemo(
    () => pickTodayStrips(allStrips, progress, today),
    [progress, today]
  );

  const currentStrip = queue.length ? stripById.get(queue[queueIndex]) : undefined;
  const steps = useMemo(() => (currentStrip ? buildSteps(currentStrip) : []), [currentStrip]);
  const step = steps[stepIndex];

  function startQueue(ids: string[]) {
    if (!ids.length) return;
    setQueue(ids);
    setQueueIndex(0);
    setStepIndex(0);
    setCheckAnswers([]);
    setSessionDone(false);
    setSpokenNote('');
  }

  function startToday() {
    startQueue([...todayPick.due, ...todayPick.fresh]);
  }

  function speak(text: string) {
    const ok = speakCanto(text);
    setSpokenNote(ok ? '' : '未检测到粤语语音，可参考粤拼。');
  }

  function goNext() {
    if (!currentStrip) return;
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
      return;
    }
    // 这一条看完：推进间隔，再去下一条
    const allRight =
      currentStrip.checks.length === 0 ||
      currentStrip.checks.every((check, i) => checkAnswers[i] === check.answerIndex);
    const next = reviewStrip(progress, currentStrip.id, allRight, today);
    setProgress(next);
    saveStripProgress(next);

    if (queueIndex < queue.length - 1) {
      setQueueIndex(queueIndex + 1);
      setStepIndex(0);
      setCheckAnswers([]);
      setSpokenNote('');
    } else {
      setSessionDone(true);
      setQueue([]);
    }
  }

  function answerCheck(checkIndex: number, choiceIndex: number) {
    if (checkAnswers[checkIndex] != null) return;
    const next = [...checkAnswers];
    next[checkIndex] = choiceIndex;
    setCheckAnswers(next);
  }

  // ── 一轮做完 ────────────────────────────────────────────────
  if (sessionDone) {
    const remaining = pickTodayStrips(allStrips, progress, today);
    return (
      <main className="app-shell">
        <section className="strip-panel strip-finish">
          <span className="strip-eyebrow">今日收工</span>
          <h1>睇完喇，收工！</h1>
          <p className="strip-lede">
            今日睇咗 {progress.daily[today] || 0} 条，连续 {progress.streak} 日。
          </p>
          <div className="strip-stat-row">
            <div className="strip-stat">
              <span>已开始</span>
              <strong>{stats.started} / {stats.total}</strong>
            </div>
            <div className="strip-stat">
              <span>已记住</span>
              <strong>{stats.mastered}</strong>
            </div>
            <div className="strip-stat">
              <span>最长连续</span>
              <strong>{progress.bestStreak} 日</strong>
            </div>
          </div>
          <p className="strip-note">
            {remaining.due.length + remaining.fresh.length > 0
              ? `仲有 ${remaining.due.length + remaining.fresh.length} 条可以睇，唔够喉可以继续。`
              : '今日嘅都睇完，听日再嚟。间隔重复会自动帮你翻旧账。'}
          </p>
          <div className="strip-actions">
            {remaining.due.length + remaining.fresh.length > 0 && (
              <button
                className="primary-button"
                type="button"
                onClick={() => startQueue([...remaining.due, ...remaining.fresh])}
              >
                再睇一轮
              </button>
            )}
            <button className="ghost-button" type="button" onClick={() => setSessionDone(false)}>
              返条漫首页
            </button>
            <button className="ghost-button" type="button" onClick={onExit}>
              返题库
            </button>
          </div>
        </section>
      </main>
    );
  }

  // ── 阅读中 ──────────────────────────────────────────────────
  if (currentStrip && step) {
    const pack = packs.find((p) => p.id === currentStrip.packId);
    return (
      <main className="app-shell">
        <section className={`strip-panel accent-${pack?.accent || 'gold'}`}>
          <header className="strip-head">
            <div>
              <span className="strip-eyebrow">{pack?.eyebrow}</span>
              <h1 className="strip-title">{currentStrip.title}</h1>
            </div>
            <div className="strip-head-right">
              <span className="strip-counter">
                {queueIndex + 1}/{queue.length}
              </span>
              <button className="ghost-button compact" type="button" onClick={() => setQueue([])}>
                退出
              </button>
            </div>
          </header>

          <div className="strip-progress" aria-hidden="true">
            {steps.map((_, i) => (
              <i key={i} className={i <= stepIndex ? 'is-on' : ''} />
            ))}
          </div>

          {step.kind === 'cover' && (
            <div className="strip-stage strip-cover">
              <span className="strip-scene">{currentStrip.scene}</span>
              <h2>{currentStrip.hook}</h2>
              <p className="strip-note">3-4 个词，睇完大约一分钟。</p>
            </div>
          )}

          {step.kind === 'panel' && (() => {
            const panel = currentStrip.panels[step.index];
            const isAside = !panel.canto;
            return (
              <div className={`strip-stage ${isAside ? 'is-aside' : ''}`}>
                {!isAside && (
                  <>
                    {panel.speaker && <span className="strip-speaker">{panel.speaker}</span>}
                    <p className="strip-canto">{panel.canto}</p>
                    <p className="strip-cn">{panel.cn}</p>
                    {panel.jyut && <span className="strip-jyut">{panel.jyut}</span>}
                    <div className="strip-inline-actions">
                      <button
                        className="ghost-button compact"
                        type="button"
                        onClick={() => speak(panel.canto)}
                      >
                        朗读
                      </button>
                      {spokenNote && <span className="strip-note">{spokenNote}</span>}
                    </div>
                  </>
                )}
                {panel.aside && <p className="strip-aside">{panel.aside}</p>}
              </div>
            );
          })()}

          {step.kind === 'words' && (
            <div className="strip-stage">
              <h2 className="strip-section-title">呢条学到嘅词</h2>
              <div className="strip-word-grid">
                {currentStrip.words.map((word) => (
                  <article className="strip-word" key={word.term}>
                    <strong>{word.term}</strong>
                    <span className="strip-jyut">{word.jyut}</span>
                    <p>{word.means}</p>
                    {word.usage && <p className="strip-usage">例：{word.usage}</p>}
                  </article>
                ))}
              </div>
            </div>
          )}

          {step.kind === 'check' && (() => {
            const check = currentStrip.checks[step.index];
            const picked = checkAnswers[step.index];
            const answered = picked != null;
            return (
              <div className="strip-stage">
                <h2 className="strip-section-title">对一对</h2>
                <p className="strip-question">{check.prompt}</p>
                <div className="strip-choices">
                  {check.choices.map((choice, i) => {
                    const isRight = i === check.answerIndex;
                    const cls = answered
                      ? isRight
                        ? 'is-correct'
                        : i === picked
                          ? 'is-wrong'
                          : ''
                      : '';
                    return (
                      <button
                        className={`choice-button ${cls}`}
                        disabled={answered}
                        key={choice}
                        type="button"
                        onClick={() => answerCheck(step.index, i)}
                      >
                        <span>{String.fromCharCode(65 + i)}</span>
                        {choice}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <div className={`strip-feedback ${picked === check.answerIndex ? 'positive' : 'negative'}`}>
                    <strong>{picked === check.answerIndex ? '啱晒！' : '差少少'}</strong>
                    <p>{check.explanation}</p>
                  </div>
                )}
              </div>
            );
          })()}

          {step.kind === 'done' && (
            <div className="strip-stage strip-cover">
              <span className="strip-scene">{currentStrip.title} · 完</span>
              <h2>记住咗未？</h2>
              <p className="strip-note">
                答啱就隔耐啲先再见到，答错就好快返嚟揾你。唔使自己记几时复习。
              </p>
            </div>
          )}

          <div className="strip-actions">
            <button
              className="primary-button"
              disabled={step.kind === 'check' && checkAnswers[step.index] == null}
              type="button"
              onClick={goNext}
            >
              {step.kind === 'done'
                ? queueIndex < queue.length - 1
                  ? '下一条'
                  : '完成'
                : step.kind === 'check' && checkAnswers[step.index] == null
                  ? '拣一个先'
                  : '继续'}
            </button>
          </div>
        </section>
      </main>
    );
  }

  // ── 条漫首页 ────────────────────────────────────────────────
  const todayCount = todayPick.due.length + todayPick.fresh.length;
  return (
    <main className="app-shell">
      <section className="strip-panel strip-home">
        <header className="strip-head">
          <div>
            <span className="strip-eyebrow">条漫模式 · 一日几条，唔使下决心</span>
            <h1 className="strip-title">睇条漫，唔使刷题</h1>
          </div>
          <button className="ghost-button compact" type="button" onClick={onExit}>
            返题库
          </button>
        </header>

        <p className="strip-lede">
          一条 = 一个梗 + 3-4 个词 + 一道对一对，大约一分钟。
          答啱嘅隔耐啲再出现，答错嘅好快返嚟，唔使自己安排复习。
        </p>

        <div className="strip-stat-row">
          <div className="strip-stat is-lead">
            <span>今日要睇</span>
            <strong>{todayCount} 条</strong>
          </div>
          <div className="strip-stat">
            <span>连续</span>
            <strong>{progress.streak} 日</strong>
          </div>
          <div className="strip-stat">
            <span>已开始</span>
            <strong>{stats.started} / {stats.total}</strong>
          </div>
          <div className="strip-stat">
            <span>已记住</span>
            <strong>{stats.mastered}</strong>
          </div>
        </div>

        <div className="strip-actions">
          <button className="primary-button" disabled={todayCount === 0} type="button" onClick={startToday}>
            {todayCount > 0 ? `开始今日 ${todayCount} 条` : '今日已睇完'}
          </button>
          <button
            className="ghost-button"
            type="button"
            onClick={() => startQueue(allStrips.map((s) => s.id))}
          >
            由头睇晒（{allStrips.length} 条）
          </button>
        </div>

        <p className="strip-note">
          今日包含 {todayPick.due.length} 条到期复习 + {todayPick.fresh.length} 条新嘅
          （每日最多 {DAILY_NEW_LIMIT} 条新嘅，断咗几日返嚟都唔会堆成一座山）。
        </p>

        <div className="strip-pack-grid">
          {packs.map((pack) => {
            const done = pack.strips.filter((s) => progress.strips[s.id]).length;
            return (
              <article className={`strip-pack accent-${pack.accent}`} key={pack.id}>
                <span className="strip-eyebrow">{pack.eyebrow}</span>
                <strong>{pack.name}</strong>
                <p>{pack.description}</p>
                <div className="strip-pack-foot">
                  <span>
                    {done} / {pack.strips.length} 条已开始
                  </span>
                  <button
                    className="ghost-button compact"
                    type="button"
                    onClick={() => startQueue(pack.strips.map((s) => s.id))}
                  >
                    只睇呢个包
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
