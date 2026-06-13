// PDF-ONLY PRIVATE MODE
// Old/generated V2 question packs are archived and inactive.

import { pdfQuestionBank } from "@/data/private/collegio/pdfOnly/pdfQuestionBank";

export const questions = pdfQuestionBank;

export function getAllQuestions() {
  return questions;
}

export function getQuestionsBySubject(subject: string) {
  return questions.filter(
    (q: any) =>
      q.subject?.toLowerCase() === subject.toLowerCase()
  );
}

export function getQuestionsByTopic(topic: string) {
  return questions.filter(
    (q: any) =>
      q.topic?.toLowerCase() === topic.toLowerCase()
  );
}

export function getQuestionById(id: string) {
  return questions.find((q: any) => q.id === id);
}

export default questions;
