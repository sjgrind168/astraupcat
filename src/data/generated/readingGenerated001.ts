import { Question } from "@/types/questions";

export const readingGenerated001: Question[
{ Question } from "@/types/questions";

export const readingGenerated001: Question[]=[

{
id:"reading-gen-001",
subject:"Reading Comprehension",
topic:"Main Idea",
difficulty:"hard",
passage:`Marco practiced solving difficult math problems every evening. At first he struggled, but over time he became more confident and faster.`,
question:"What is the main idea of the passage?",
choices:['Practice improves skills.', 'Weather changes quickly', 'School activities are difficult', 'People dislike change'],
answerIndex:0,
explanation:"Practice improves skills.",
steps:["Identify repeated idea"],
tip:"Focus on overall message.",
tags:["main idea"]
},
{
id:"reading-gen-002",
subject:"Reading Comprehension",
topic:"Inference",
difficulty:"hard",
passage:`Marco practiced solving difficult math problems every evening. At first he struggled, but over time he became more confident and faster.`,
question:"Which statement can be inferred?",
choices:['The action had no effect', 'Nobody noticed anything', 'Marco improved because of repetition.', 'The situation became worse'],
answerIndex:2,
explanation:"Marco improved because of repetition.",
steps:["Read implied meaning"],
tip:"Inference is not directly stated.",
tags:["inference"]
},
{
id:"reading-gen-003",
subject:"Reading Comprehension",
topic:"Author Purpose",
difficulty:"hard",
passage:`Marco practiced solving difficult math problems every evening. At first he struggled, but over time he became more confident and faster.`,
question:"What is the author's purpose?",
choices:['To show the effect of persistence.', 'To entertain with fantasy', 'To advertise a product', 'To criticize technology'],
answerIndex:0,
explanation:"To show the effect of persistence.",
steps:["Determine why it was written"],
tip:"Ask why the passage exists.",
tags:["author purpose"]
}
]