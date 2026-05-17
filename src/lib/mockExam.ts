import { getAllQuestions } from "@/data/questions";
import { Question } from "@/types/questions";

export interface MockExamConfig{
  totalQuestions:number;
}

function shuffle<T>(arr:T[]):T[]{
  return [...arr]
    .sort(()=>Math.random()-0.5);
}

function excludeRecent(
questions:Question[]
):Question[]{

  const recentIds=
    JSON.parse(
      localStorage.getItem(
        "recentMockQuestions"
      ) || "[]"
    );

  return questions.filter(
    q=>!recentIds.includes(q.id)
  );
}

function saveRecent(
questions:Question[]
){

  const ids=questions.map(
    q=>q.id
  );

  localStorage.setItem(
    "recentMockQuestions",
    JSON.stringify(
      ids.slice(-300)
    )
  );
}

export function generateMockExam(
config:MockExamConfig
):Question[]{

  const all=getAllQuestions();

  let available=
    excludeRecent(all);

  if(
    available.length
    < config.totalQuestions
  ){
    available=all;
  }

  const exam=
    shuffle(available)
      .slice(
        0,
        config.totalQuestions
      );

  saveRecent(exam);

  return exam;
}
