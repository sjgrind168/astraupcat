import { AttemptRecord, Subject } from "./types";

export function accuracyBySubject(attempts: AttemptRecord[]): Record<string, { acc: number; total: number; correct: number }> {
  const out: Record<string, { acc: number; total: number; correct: number }> = {};
  for (const a of attempts) {
    const k = a.subject;
    if (!out[k]) out[k] = { acc: 0, total: 0, correct: 0 };
    out[k].total++;
    if (a.correct) out[k].correct++;
  }
  for (const k of Object.keys(out)) {
    out[k].acc = out[k].total ? out[k].correct / out[k].total : 0;
  }
  return out;
}

export function topicStats(attempts: AttemptRecord[]) {
  const map: Record<string, { topic: string; subject: Subject; total: number; correct: number; acc: number }> = {};
  for (const a of attempts) {
    const k = `${a.subject}::${a.topic}`;
    if (!map[k]) map[k] = { topic: a.topic, subject: a.subject, total: 0, correct: 0, acc: 0 };
    map[k].total++;
    if (a.correct) map[k].correct++;
  }
  const arr = Object.values(map).map(t => ({ ...t, acc: t.total ? t.correct / t.total : 0 }));
  return arr;
}

export function weakestSubject(attempts: AttemptRecord[]): Subject | null {
  const acc = accuracyBySubject(attempts);
  const entries = Object.entries(acc).filter(([, v]) => v.total >= 3);
  if (!entries.length) return null;
  entries.sort((a, b) => a[1].acc - b[1].acc);
  return entries[0][0] as Subject;
}

export function weakestTopics(attempts: AttemptRecord[], n = 3) {
  const t = topicStats(attempts).filter(t => t.total >= 2);
  t.sort((a, b) => a.acc - b.acc);
  return t.slice(0, n);
}

export function strongestTopics(attempts: AttemptRecord[], n = 3) {
  const t = topicStats(attempts).filter(t => t.total >= 2);
  t.sort((a, b) => b.acc - a.acc);
  return t.slice(0, n);
}

export function masteryPct(attempts: AttemptRecord[]) {
  if (!attempts.length) return 0;
  const correct = attempts.filter(a => a.correct).length;
  return Math.round((correct / attempts.length) * 100);
}
