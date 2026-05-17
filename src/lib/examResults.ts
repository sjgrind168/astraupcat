import { Question } from "@/types/questions";

export interface ExamResult {
  score:number;
  total:number;
  percent:number;
  weakTopics:string[];
}

export function analyzeResults(
questions:Question[],
answers:Record<string,number>
):ExamResult{

  let correct=0;

  const mistakes:Record<string,number>={};

  questions.forEach(q=>{

    const userAnswer=answers[q.id];

    if(userAnswer===q.answerIndex){
      correct++;
    } else {

      const topic=q.topic || "Unknown";

      mistakes[topic]=(mistakes[topic] || 0)+1;
    }

  });

  const weakTopics=Object.entries(mistakes)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,5)
    .map(([topic])=>topic);

  return {
    score:correct,
    total:questions.length,
    percent:Math.round(
      (correct/questions.length)*100
    ),
    weakTopics
  };

}
