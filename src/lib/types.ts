export type Intensity = "chill" | "balanced" | "beast";

export type Subject =
  | "Mathematics"
  | "Science"
  | "English Language"
  | "Filipino Language"
  | "Reading Comprehension";

export type Difficulty = "easy" | "normal" | "hard" | "beast";

export type ErrorType =
  | "careless"
  | "concept"
  | "formula"
  | "time"
  | "misread"
  | "guess";

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  difficulty: Difficulty;
  question: string;
  passage?: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
  steps?: string[];
  tip?: string;
  errorTags?: ErrorType[];
}

export interface UserProfile {
  name: string;
  examDate: string; // ISO
  startDate: string; // ISO
  hoursPerDay: number;
  intensity: Intensity;
  createdAt: string;
}

export interface AttemptRecord {
  id: string;
  questionId: string;
  subject: Subject;
  topic: string;
  difficulty: Difficulty;
  correct: boolean;
  userAnswer: number;
  timeMs: number;
  errorType?: ErrorType;
  at: string;
  mastered?: boolean;
}

export interface MockExamResult {
  id: string;
  at: string;
  totalQuestions: number;
  correct: number;
  timeSec: number;
  bySubject: Record<string, { correct: number; total: number }>;
  weakTopics: string[];
}

export interface StudyTask {
  id: string;
  date: string; // YYYY-MM-DD
  type: "lesson" | "drill" | "challenge" | "mock" | "review" | "rest";
  subject?: Subject;
  topic?: string;
  title: string;
  durationMin: number;
  done: boolean;
}

export interface AppState {
  profile: UserProfile | null;
  attempts: AttemptRecord[];
  mocks: MockExamResult[];
  plan: StudyTask[];
  streak: {
current:number;
longest:number;
lastStudyDate:string|null;
activityDates:string[];
};
  settings: { calculatorMode: "none" | "scientific" | "no-advanced" };
}
