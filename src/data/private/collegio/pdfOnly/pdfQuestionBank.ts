import { scienceAssessmentReview } from "@/data/private/collegio/science/scienceAssessmentReview";

export const pdfQuestionBank = scienceAssessmentReview.map((item, index) => ({
  id: item.id,
  subject: item.subject,
  topic: item.topic,
  difficulty: "pdf" as const,
  question: item.question,
  choices: ["Reveal answer in Reviewer Library"],
  answerIndex: 0,
  explanation: item.answer,
  tip: `Source page ${item.sourcePage}`,
}));

export const pdfReviewOnlyBank = scienceAssessmentReview;
