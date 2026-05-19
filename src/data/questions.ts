import { Question } from "@/types/questions";

import { mathPack } from "@/data/questionPacks/mathPack";
import { mathGenerated003 as mathGeneratedPack } from "@/data/questionPacks/mathGeneratedPack";
import { sciencePack } from "@/data/questionPacks/sciencePack";
import { scienceGenerated002 as scienceGeneratedPack } from "@/data/questionPacks/scienceGeneratedPack";
import { englishPack } from "@/data/questionPacks/englishPack";
import { englishGenerated001 as englishGeneratedPack } from "@/data/questionPacks/englishGeneratedPack";
import { readingPack } from "@/data/questionPacks/readingPack";
import { readingGenerated005 as readingGeneratedPack } from "@/data/questionPacks/readingGeneratedPack";
import { filipinoPack } from "@/data/questionPacks/filipinoPack";
import { filipinoGenerated001 as filipinoGeneratedPack } from "@/data/questionPacks/filipinoGeneratedPack";
import { logicGenerated001 as logicPack } from "@/data/questionPacks/logicPack";
import { logicGenerated003 as logicGeneratedPack } from "@/data/questionPacks/logicGeneratedPack";

let cachedQuestions: Question[] | null = null;

export function getAllQuestions(): Question[] {
  if (cachedQuestions) {
    return cachedQuestions;
  }

  cachedQuestions = [
    ...mathPack,
    ...mathGeneratedPack,
    ...sciencePack,
    ...scienceGeneratedPack,
    ...englishPack,
    ...englishGeneratedPack,
    ...readingPack,
    ...readingGeneratedPack,
    ...filipinoPack,
    ...filipinoGeneratedPack,
    ...logicPack,
    ...logicGeneratedPack,
  ];

  return cachedQuestions;
}

export async function getAllQuestionsAsync(): Promise<Question[]> {
  return getAllQuestions();
}

export function clearQuestionCache() {
  cachedQuestions = null;
}
