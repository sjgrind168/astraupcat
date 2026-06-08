import { Question } from "@/types/questions";

// TEMP DISABLED: repetitive math pack pending rebuild
// // TEMP DISABLED: repetitive math pack pending rebuild
// import { mathPack } from "@/data/questionPacks/mathPack";
// TEMP DISABLED: repetitive math generated pack pending rebuild
// // TEMP DISABLED: repetitive math generated pack pending rebuild
// import { mathGenerated003 as mathGeneratedPack } from "@/data/questionPacks/mathGeneratedPack";
import { mathPackV2 } from "@/data/questionPacks/mathPackV2";
import { mathHardPackV2 } from "@/data/questionPacks/mathHardPackV2";
// TEMP DISABLED: corrupted science pack pending rebuild
// import { sciencePack } from "@/data/questionPacks/sciencePack";
import { sciencePackV2 } from "@/data/questionPacks/sciencePackV2";
// TEMP DISABLED: corrupted science generated pack pending rebuild
// import { scienceGenerated002 as scienceGeneratedPack } from "@/data/questionPacks/scienceGeneratedPack";
// TEMP DISABLED: repetitive english pack pending rebuild
// import { englishPack } from "@/data/questionPacks/englishPack";
// TEMP DISABLED: repetitive english generated pack pending rebuild
// import { englishGenerated001 as englishGeneratedPack } from "@/data/questionPacks/englishGeneratedPack";
import { englishPackV2 } from "@/data/questionPacks/englishPackV2";
import { englishHardPackV2 } from "@/data/questionPacks/englishHardPackV2";
import { readingPack } from "@/data/questionPacks/readingPack";
import { readingGenerated005 as readingGeneratedPack } from "@/data/questionPacks/readingGeneratedPack";
// TEMP DISABLED: repetitive filipino pack pending rebuild
// import { filipinoPack } from "@/data/questionPacks/filipinoPack";
// TEMP DISABLED: repetitive filipino generated pack pending rebuild
// import { filipinoGenerated001 as filipinoGeneratedPack } from "@/data/questionPacks/filipinoGeneratedPack";
import { filipinoPackV2 } from "@/data/questionPacks/filipinoPackV2";
import { balancePackV2 } from "@/data/questionPacks/balancePackV2";
// TEMP DISABLED: low-quality repetitive logic pack pending rebuild
// import { logicGenerated001 as logicPack } from "@/data/questionPacks/logicPack";
// TEMP DISABLED: low-quality repetitive logic generated pack pending rebuild
// import { logicGenerated003 as logicGeneratedPack } from "@/data/questionPacks/logicGeneratedPack";
import { logicPackV2 } from "@/data/questionPacks/logicPackV2";
import { logicHardPackV2 } from "@/data/questionPacks/logicHardPackV2";

let cachedQuestions: Question[] | null = null;

export function getAllQuestions(): Question[] {
  if (cachedQuestions) {
    return cachedQuestions;
  }

  cachedQuestions = [
    // ...mathPack,
    // ...mathGeneratedPack,
    ...mathPackV2,
    ...mathHardPackV2,
    ...sciencePackV2,
    // ...scienceGeneratedPack,
    // ...englishPack,
    // ...englishGeneratedPack,
    ...englishPackV2,
    ...englishHardPackV2,
    ...readingPack,
    ...readingGeneratedPack,
    // ...filipinoPack,
    // ...filipinoGeneratedPack,
    ...filipinoPackV2,
    ...balancePackV2,
    // ...logicPack,
    // ...logicGeneratedPack,
    ...logicPackV2,
    ...logicHardPackV2,
  ];

  return cachedQuestions;
}

export async function getAllQuestionsAsync(): Promise<Question[]> {
  return getAllQuestions();
}

export function clearQuestionCache() {
  cachedQuestions = null;
}
