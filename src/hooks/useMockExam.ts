import { useMemo } from "react";
import { generateMockExam } from "@/lib/mockExam";

export function useMockExam(totalQuestions=60){

  const exam = useMemo(
    ()=>generateMockExam({
      totalQuestions
    }),
    [totalQuestions]
  );

  return exam;
}
