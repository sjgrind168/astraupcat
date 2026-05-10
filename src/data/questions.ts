import { Question } from "@/types/questions";

import { mathPack } from "@/data/questionPacks/mathPack";
import { sciencePack } from "@/data/questionPacks/sciencePack";
import { englishPack } from "@/data/questionPacks/englishPack";
import { readingPack } from "@/data/questionPacks/readingPack";
import { filipinoPack } from "@/data/questionPacks/filipinoPack";

let cachedQuestions: Question[] | null = null;

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
}
