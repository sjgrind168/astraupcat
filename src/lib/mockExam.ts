import { getAllQuestions } from "@/data/questions";
import { Question } from "@/types/questions";

export interface MockExamConfig {
  totalQuestions: number;
}

interface MockExamHistory {
  usedQuestionIds: string[];
  cycle: number;
}

const HISTORY_KEY = "astraReviewerMockExamHistory";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function readHistory(): MockExamHistory {
  try {
    return JSON.parse(
      localStorage.getItem(HISTORY_KEY) ||
      '{"usedQuestionIds":[],"cycle":0}'
    );
  } catch {
    return {
      usedQuestionIds: [],
      cycle: 0,
    };
  }
}

function saveHistory(history: MockExamHistory) {
  localStorage.setItem(
    HISTORY_KEY,
    JSON.stringify(history)
  );
}

function subjectKey(q: Question): string {
  const subject = q.subject || "";

  if (subject.includes("Math")) return "Math";
  if (subject.includes("Science")) return "Science";
  if (subject.includes("English")) return "English";
  if (subject.includes("Filipino")) return "Filipino";
  if (subject.includes("Reading")) return "Reading";
  if (subject.includes("Logic")) return "Logic";

  return "Other";
}

function takeBalanced(
  available: Question[],
  total: number
): Question[] {
  const groups: Record<string, Question[]> = {};

  available.forEach((q) => {
    const key = subjectKey(q);
    groups[key] = groups[key] || [];
    groups[key].push(q);
  });

  Object.keys(groups).forEach((key) => {
    groups[key] = shuffle(groups[key]);
  });

  const preferred = [
    "Math",
    "Science",
    "English",
    "Reading",
    "Filipino",
    "Logic",
    "Other",
  ];

  const selected: Question[] = [];
  let index = 0;

  while (selected.length < total) {
    const key = preferred[index % preferred.length];
    const next = groups[key]?.shift();

    if (next) {
      selected.push(next);
    }

    const remaining = Object.values(groups)
      .reduce((sum, arr) => sum + arr.length, 0);

    if (remaining === 0) break;

    index++;
  }

  return shuffle(selected).slice(0, total);
}

export function generateMockExam(
  config: MockExamConfig
): Question[] {
  const all = getAllQuestions();

  const target = Math.min(
    config.totalQuestions,
    all.length
  );

  let history = readHistory();

  let used = new Set(history.usedQuestionIds);

  let available = all.filter(
    q => !used.has(q.id)
  );

  if (available.length < target) {
    history = {
      usedQuestionIds: [],
      cycle: history.cycle + 1,
    };

    used = new Set();
    available = all;
  }

  const exam = takeBalanced(
    available,
    target
  );

  const updatedUsed = [
    ...history.usedQuestionIds,
    ...exam.map(q => q.id),
  ];

  saveHistory({
    usedQuestionIds: Array.from(new Set(updatedUsed)),
    cycle: history.cycle,
  });

  return exam;
}
