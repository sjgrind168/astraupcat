import { Question, Subject, Difficulty } from "./types";
import { QUESTIONS } from "./questions";

const KEY = "astra-custom-questions-v1";

export interface CustomQuestion extends Question {
  formula?: string;
  tags?: string[];
  custom: true;
}

export function loadCustomQuestions(): CustomQuestion[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidQuestion).map((q) => ({ ...q, custom: true as const }));
  } catch {
    return [];
  }
}

export function saveCustomQuestions(qs: CustomQuestion[]) {
  localStorage.setItem(KEY, JSON.stringify(qs));
}

export function getAllQuestions(): Question[] {
  return [...QUESTIONS, ...loadCustomQuestions()];
}

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

export function validateQuestion(q: Partial<Question>): ValidationResult {
  const errors: string[] = [];
  if (!q.question || typeof q.question !== "string" || !q.question.trim()) {
    errors.push("Question text is required.");
  }
  if (!Array.isArray(q.choices) || q.choices.length !== 4) {
    errors.push("Exactly 4 choices are required.");
  } else if (q.choices.some((c) => typeof c !== "string" || !c.trim())) {
    errors.push("All 4 choices must be non-empty strings.");
  }
  if (
    typeof q.answerIndex !== "number" ||
    !Number.isInteger(q.answerIndex) ||
    q.answerIndex < 0 ||
    q.answerIndex > 3
  ) {
    errors.push("Correct answer index must be an integer 0-3.");
  }
  if (!q.explanation || typeof q.explanation !== "string" || !q.explanation.trim()) {
    errors.push("Explanation is required.");
  }
  if (!q.subject || typeof q.subject !== "string") errors.push("Subject is required.");
  if (!q.topic || typeof q.topic !== "string" || !q.topic.trim()) errors.push("Topic is required.");
  if (!q.difficulty || typeof q.difficulty !== "string") errors.push("Difficulty is required.");
  return { ok: errors.length === 0, errors };
}

/**
 * Stricter validator for JSON import. Enforces the documented import schema:
 * - exactly 4 non-empty choices
 * - answerIndex 0–3
 * - non-empty question, explanation
 * - steps array with at least 1 entry
 * - subject and topic required
 * - difficulty must be one of: easy | normal | hard | beast
 */
export function validateImportQuestion(q: unknown): ValidationResult {
  const errors: string[] = [];
  if (!q || typeof q !== "object") {
    return { ok: false, errors: ["Item is not an object."] };
  }
  const o = q as Record<string, unknown>;

  if (typeof o.question !== "string" || !o.question.trim()) {
    errors.push("`question` must be a non-empty string.");
  }
  if (!Array.isArray(o.choices) || o.choices.length !== 4) {
    errors.push("`choices` must be an array of exactly 4 items.");
  } else if (o.choices.some((c) => typeof c !== "string" || !c.trim())) {
    errors.push("All 4 `choices` must be non-empty strings.");
  }
  if (
    typeof o.answerIndex !== "number" ||
    !Number.isInteger(o.answerIndex) ||
    (o.answerIndex as number) < 0 ||
    (o.answerIndex as number) > 3
  ) {
    errors.push("`answerIndex` must be an integer between 0 and 3.");
  }
  if (typeof o.explanation !== "string" || !o.explanation.trim()) {
    errors.push("`explanation` must be a non-empty string.");
  }
  if (!Array.isArray(o.steps) || o.steps.length < 1) {
    errors.push("`steps` must be an array with at least 1 entry.");
  } else if (o.steps.some((s) => typeof s !== "string" || !s.trim())) {
    errors.push("All `steps` entries must be non-empty strings.");
  }
  if (typeof o.subject !== "string" || !o.subject.trim()) {
    errors.push("`subject` is required.");
  }
  if (typeof o.topic !== "string" || !o.topic.trim()) {
    errors.push("`topic` is required.");
  }
  if (
    typeof o.difficulty !== "string" ||
    !["easy", "normal", "hard", "beast"].includes(o.difficulty)
  ) {
    errors.push('`difficulty` must be one of "easy", "normal", "hard", "beast".');
  }
  if (o.passage !== undefined && typeof o.passage !== "string") {
    errors.push("`passage` must be a string if provided.");
  }
  if (o.tip !== undefined && typeof o.tip !== "string") {
    errors.push("`tip` must be a string if provided.");
  }
  if (
    o.tags !== undefined &&
    (!Array.isArray(o.tags) || o.tags.some((t) => typeof t !== "string"))
  ) {
    errors.push("`tags` must be an array of strings if provided.");
  }
  if (o.id !== undefined && typeof o.id !== "string") {
    errors.push("`id` must be a string if provided.");
  }
  return { ok: errors.length === 0, errors };
}

function isValidQuestion(q: unknown): q is Question {
  return validateQuestion(q as Partial<Question>).ok;
}

export const SUBJECTS: Subject[] = [
  "Mathematics",
  "Science",
  "English Language",
  "Filipino Language",
  "Reading Comprehension",
];

export const DIFFICULTIES: Difficulty[] = ["easy", "normal", "hard", "beast"];
