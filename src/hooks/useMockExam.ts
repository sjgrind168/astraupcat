import { useMemo } from "react";
import { generateMockExam } from "@/lib/mockExam";

export function useMockExam(totalQuestions = 500, seed = 0) {
  const exam = useMemo(
    () => generateMockExam({ totalQuestions }),
    [totalQuestions, seed]
  );

  return exam;
}
