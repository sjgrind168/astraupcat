import { Question } from "./types";
import { mathPack } from "@/data/questionPacks/mathPack";
import { sciencePack } from "@/data/questionPacks/sciencePack";
import { englishPack } from "@/data/questionPacks/englishPack";
import { filipinoPack } from "@/data/questionPacks/filipinoPack";
import { readingPack } from "@/data/questionPacks/readingPack";

// All questions are ORIGINAL UPCAT-style items written for this app.
// They follow the official UPCAT subject areas; no leaked / copyrighted items.

export const QUESTIONS: Question[] = [
  ...mathPack,
  ...sciencePack,
  ...englishPack,
  ...filipinoPack,
  ...readingPack,
];

export const SUBJECTS = [
  "Mathematics",
  "Science",
  "English Language",
  "Filipino Language",
  "Reading Comprehension",
] as const;
