import { Question } from "@/types/questions";

export function saveMistakes(
questions: Question[],
answers: Record<string,number>
){

  const wrong = questions
  .filter(
    q => answers[q.id] !== q.answerIndex
  )
  .map(q=>({

    ...q,

    userAnswerIndex:
      answers[q.id],

    userAnswerText:
      q.choices?.[
        answers[q.id]
      ] || "No answer",

    correctAnswerText:
      q.choices?.[
        q.answerIndex
      ]

  }));

  const existing = JSON.parse(
    localStorage.getItem(
      "mistakeBook"
    ) || "[]"
  );

  const merged = [
    ...existing,
    ...wrong
  ];

  const unique = Array.from(
    new Map(
      merged.map(
        (q:any)=>[q.id,q]
      )
    ).values()
  );

  localStorage.setItem(
    "mistakeBook",
    JSON.stringify(unique)
  );

}

export function getMistakeBook(){

  return JSON.parse(
    localStorage.getItem(
      "mistakeBook"
    ) || "[]"
  );

}
