import { Question } from "@/types/questions";

import { mathPack } from "@/data/questionPacks/mathPack";
import { sciencePack } from "@/data/questionPacks/sciencePack";
import { englishPack } from "@/data/questionPacks/englishPack";
import { readingPack } from "@/data/questionPacks/readingPack";
import { filipinoPack } from "@/data/questionPacks/filipinoPack";

let cachedQuestions: Question[] | null = null;
let asyncCachedQuestions: Question[] | null = null;

export function getAllQuestions(): Question[] {
  if (cachedQuestions) {
    return cachedQuestions;
  }

  cachedQuestions = [
    ...mathPack,
    ...sciencePack,
    ...englishPack,
    ...readingPack,
    ...filipinoPack,
  ];

  return cachedQuestions;
}

export function clearQuestionCache() {
  cachedQuestions = null;
  asyncCachedQuestions = null;
}

export async function getAllQuestionsAsync(): Promise<Question[]> {
  if (asyncCachedQuestions) {
    return asyncCachedQuestions;
  }

  const [
    mathModule,
    scienceModule,
    englishModule,
    readingModule,
    filipinoModule,
  ] = await Promise.all([
    import("@/data/questionPacks/mathPack"),
    import("@/data/questionPacks/sciencePack"),
    import("@/data/questionPacks/englishPack"),
    import("@/data/questionPacks/readingPack"),
    import("@/data/questionPacks/filipinoPack"),
  ]);

  asyncCachedQuestions = [
    ...mathModule.mathPack,
    ...scienceModule.sciencePack,
    ...englishModule.englishPack,
    ...readingModule.readingPack,
    ...filipinoModule.filipinoPack,
  ];

  return asyncCachedQuestions;
}
