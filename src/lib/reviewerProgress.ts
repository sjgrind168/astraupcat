type QuestionLike = {
  id: string;
  subject?: string;
  topic?: string;
  question?: string;
  choices?: string[];
  correctLetter?: string;
  answer?: string;
  sourcePage?: number;
};

type StoredAnswer = {
  questionId: string;
  subject: string;
  topic: string;
  selectedLetter: string;
  selectedAnswer: string;
  correctLetter: string;
  correctAnswer: string;
  isCorrect: boolean;
  sourcePage?: number;
  answeredAt: string;
};

type ProgressStore = {
  answers: StoredAnswer[];
  mistakes: Record<string, StoredAnswer & { attempts: number; mastered?: boolean }>;
  mockAttempts: Array<{
    id: string;
    score: number;
    total: number;
    accuracy: number;
    takenAt: string;
  }>;
};

const KEY = "astra_reviewer_progress_v1";

function emptyStore(): ProgressStore {
  return { answers: [], mistakes: {}, mockAttempts: [] };
}

function readStore(): ProgressStore {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...emptyStore(), ...JSON.parse(raw) } : emptyStore();
  } catch {
    return emptyStore();
  }
}

function writeStore(store: ProgressStore) {
  localStorage.setItem(KEY, JSON.stringify(store));
}

export function getCorrectLetter(q: QuestionLike) {
  if (q.correctLetter) return q.correctLetter;
  if (q.answer && q.choices?.length) {
    const idx = q.choices.findIndex(
      (c) => c.trim().toLowerCase() === q.answer?.trim().toLowerCase()
    );
    return idx >= 0 ? String.fromCharCode(65 + idx) : "";
  }
  return "";
}

export function getAnswerText(q: QuestionLike, letter?: string) {
  const finalLetter = letter || getCorrectLetter(q);
  const idx = finalLetter ? finalLetter.charCodeAt(0) - 65 : -1;
  return q.choices?.[idx] ?? q.answer ?? "";
}

export function isAnswerCorrect(q: QuestionLike, selectedLetter?: string) {
  if (!selectedLetter) return false;
  const correctLetter = getCorrectLetter(q);
  if (correctLetter && selectedLetter === correctLetter) return true;

  const selectedText = getAnswerText(q, selectedLetter).trim().toLowerCase();
  const correctText = getAnswerText(q, correctLetter).trim().toLowerCase();
  return Boolean(selectedText && correctText && selectedText === correctText);
}

export function recordPracticeAnswer(q: QuestionLike, selectedLetter?: string) {
  if (!q?.id || !selectedLetter) return;

  const correctLetter = getCorrectLetter(q);
  const selectedAnswer = getAnswerText(q, selectedLetter);
  const correctAnswer = getAnswerText(q, correctLetter);
  const isCorrect = isAnswerCorrect(q, selectedLetter);

  const entry: StoredAnswer = {
    questionId: q.id,
    subject: q.subject || "Unknown",
    topic: q.topic || "General",
    selectedLetter,
    selectedAnswer,
    correctLetter,
    correctAnswer,
    isCorrect,
    sourcePage: q.sourcePage,
    answeredAt: new Date().toISOString(),
  };

  const store = readStore();
  store.answers.push(entry);

  if (!isCorrect) {
    const prev = store.mistakes[q.id];
    store.mistakes[q.id] = {
      ...entry,
      attempts: (prev?.attempts || 0) + 1,
      mastered: false,
    };
  } else if (store.mistakes[q.id]) {
    store.mistakes[q.id] = {
      ...store.mistakes[q.id],
      mastered: true,
    };
  }

  writeStore(store);
}

export function recordMockAttempt(questions: QuestionLike[], answers: Record<string, string>) {
  const realQuestions = questions.filter((q) => q?.id && q.choices?.length);
  const total = realQuestions.length;
  const score = realQuestions.filter((q) => isAnswerCorrect(q, answers[q.id])).length;

  realQuestions.forEach((q) => {
    if (answers[q.id]) recordPracticeAnswer(q, answers[q.id]);
  });

  const store = readStore();
  store.mockAttempts.push({
    id: `mock_${Date.now()}`,
    score,
    total,
    accuracy: total ? Math.round((score / total) * 100) : 0,
    takenAt: new Date().toISOString(),
  });
  writeStore(store);
}

export function getReviewerStats() {
  const store = readStore();
  const total = store.answers.length;
  const correct = store.answers.filter((a) => a.isCorrect).length;

  const bySubject: Record<string, { total: number; correct: number }> = {};
  for (const a of store.answers) {
    bySubject[a.subject] ||= { total: 0, correct: 0 };
    bySubject[a.subject].total += 1;
    if (a.isCorrect) bySubject[a.subject].correct += 1;
  }

  return {
    totalAnswered: total,
    correct,
    wrong: total - correct,
    accuracy: total ? Math.round((correct / total) * 100) : 0,
    mistakes: Object.values(store.mistakes).filter((m) => !m.mastered),
    mockAttempts: store.mockAttempts,
    bySubject,
  };
}

export function clearReviewerProgress() {
  localStorage.removeItem(KEY);
}
