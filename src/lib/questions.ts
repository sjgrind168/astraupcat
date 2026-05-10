import { Question } from "./types";

// Legacy exports kept for compatibility.
// Do not import question packs here, or they will be forced into the main bundle.
export const QUESTIONS: Question[] = [];

export async function getQuestions(): Promise<Question[]> {
  const { getAllQuestionsAsync } = await import("@/data/questions");
  return getAllQuestionsAsync();
}

export const SUBJECTS = [
  "Mathematics",
  "Science",
  "English Language",
  "Filipino Language",
  "Reading Comprehension",
] as const;
