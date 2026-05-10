import { Question } from "@/types/questions";

let cachedQuestions: Question[] | null = null;
let asyncCachedQuestions: Question[] | null = null;

export function getAllQuestions(): Question[] {
  return asyncCachedQuestions ?? cachedQuestions ?? [];
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
  cachedQuestions = asyncCachedQuestions;

  return asyncCachedQuestions;
}
