export type Difficulty = '基础' | '进阶' | '挑战';

export type QuestionType = 'meaning' | 'scene' | 'tone' | 'missingPhrase' | 'listenFirst' | 'phonetic';

export type Question = {
  id: number;
  prompt: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
  theme: string;
  difficulty: Difficulty;
  cantoneseText?: string;
  spokenText?: string;
  questionType?: QuestionType;
  skillTag?: string;
  phoneticFocus?: string;
  pronunciationHint?: string;
  trainingModule?: 'toneEar' | 'phraseMeaning' | 'pragmaticTone' | 'sceneInference' | 'workplaceTransfer' | 'reviewMix';
  dayTag?: string;
  movieTitle?: string;
  movieNote?: string;
  workplaceTip?: string;
};

export type AnswerRecord = {
  questionId: number;
  selectedIndex: number;
  isCorrect: boolean;
};

export type Chapter = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  questions: Question[];
  recommended?: boolean;
  versionLabel?: string;
  tone?: string;
  releaseNote?: string;
};
