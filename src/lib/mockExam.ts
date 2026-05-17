import { getQuestions } from "@/data/questions";
import { Question } from "@/types/questions";

type Difficulty = "easy" | "medium" | "hard";

export interface MockExamConfig {
  totalQuestions:number;
}

function shuffle<T>(arr:T[]):T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function generateMockExam(
config:MockExamConfig
):Question[]{

  const all=getQuestions();

  const subjects={
    math: all.filter(q=>q.subject?.includes("Math")),
    science: all.filter(q=>q.subject?.includes("Science")),
    english: all.filter(q=>q.subject?.includes("English")),
    filipino: all.filter(q=>q.subject?.includes("Filipino")),
    reading: all.filter(q=>q.subject?.includes("Reading")),
    logic: all.filter(q=>q.subject?.includes("Logic"))
  };

  const exam=[

    ...shuffle(subjects.math).slice(0,15),
    ...shuffle(subjects.science).slice(0,15),
    ...shuffle(subjects.english).slice(0,10),
    ...shuffle(subjects.filipino).slice(0,5),
    ...shuffle(subjects.reading).slice(0,10),
    ...shuffle(subjects.logic).slice(0,5)

  ];

  return shuffle(exam)
  .slice(0,config.totalQuestions);
}

console.log(
"Mock exam engine ready"
);
