import { useEffect, useMemo, useState } from "react";
import { useApp } from "@/lib/store";
import { getAllQuestions } from "@/data/questions";
import { Question, Subject, MockExamResult } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, ArrowRight, ArrowLeft, Flag } from "lucide-react";
import { addAttempt, addMock, bumpStreak } from "@/lib/storage";
import { cn } from "@/lib/utils";

const EXAM_LEN = 500;
const TIME_SEC = 300 * 60;

function buildExam(): Question[] {
  const subjects: Subject[] = ["English Language", "Reading Comprehension", "Mathematics", "Science", "Filipino Language"];
  const out: Question[] = [];
  const all = getAllQuestions();
  for (const s of subjects) {
    const pool = all.filter(q => q.subject === s);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    out.push(...shuffled.slice(0, Math.ceil(EXAM_LEN / subjects.length)));
  }
  return out.slice(0, EXAM_LEN);
}

export default function MockExam() {
  const { state, setState } = useApp();
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [idx, setIdx] = useState(0);
  const [time, setTime] = useState(TIME_SEC);
  const [submitted, setSubmitted] = useState<MockExamResult | null>(null);

  useEffect(() => {
    if (!questions || submitted) return;
    if (time <= 0) { submit(); return; }
    const i = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, time, submitted]);

  const start = () => {
    setQuestions(buildExam());
    setAnswers({});
    setIdx(0);
    setTime(TIME_SEC);
    setSubmitted(null);
  };

  const submit = () => {
    if (!questions) return;
    const bySubject: Record<string, { correct: number; total: number }> = {};
    let correct = 0;
    questions.forEach((q, i) => {
      const ua = answers[i];
      const ok = ua === q.answerIndex;
      if (ok) correct++;
      bySubject[q.subject] ||= { correct: 0, total: 0 };
      bySubject[q.subject].total++;
      if (ok) bySubject[q.subject].correct++;
      setState(s => addAttempt(s, {
        id: crypto.randomUUID(), questionId: q.id, subject: q.subject, topic: q.topic,
        difficulty: q.difficulty, correct: ok, userAnswer: ua ?? -1,
        timeMs: 0, at: new Date().toISOString(),
        errorType: ok ? undefined : "concept",
      }));
    });
    const weakTopics = Array.from(new Set(questions
      .filter((q, i) => answers[i] !== q.answerIndex).map(q => q.topic))).slice(0, 5);
    const result: MockExamResult = {
      id: crypto.randomUUID(), at: new Date().toISOString(),
      totalQuestions: questions.length, correct, timeSec: TIME_SEC - time,
      bySubject, weakTopics,
    };
    setState(s => bumpStreak(addMock(s, result)));
    setSubmitted(result);
  };

  const mins = Math.floor(time / 60).toString().padStart(2, "0");
  const secs = (time % 60).toString().padStart(2, "0");

  if (!questions) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Mock Exam</h1>
        <Card className="bg-gradient-card">
          <CardHeader>
            <CardTitle>UPCAT-style Simulation</CardTitle>
            <CardDescription>{EXAM_LEN} questions • 300 minutes • Full verified bank • English, Reading, Math, Science, Filipino.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Calculator policy: <Badge variant="secondary">{state.settings.calculatorMode}</Badge> (change in Settings).</p>
            <Button className="bg-gradient-gold text-primary-foreground" onClick={start}>Begin Mock Exam</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (submitted) {
    const pct = Math.round(submitted.correct / submitted.totalQuestions * 100);
    return (
      <div className="space-y-4">
        <Card className="bg-gradient-card shadow-elegant">
          <CardHeader>
            <CardTitle>After-Action Review, {state.profile?.name}</CardTitle>
            <CardDescription>Score: {submitted.correct}/{submitted.totalQuestions} ({pct}%) • Time: {Math.floor(submitted.timeSec/60)}m {submitted.timeSec%60}s</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-2 md:grid-cols-2">
              {Object.entries(submitted.bySubject).map(([s, v]) => (
                <div key={s} className="rounded-lg border border-border p-3">
                  <p className="text-sm font-medium">{s}</p>
                  <p className="text-xs text-muted-foreground">{v.correct}/{v.total} ({Math.round(v.correct/v.total*100)}%)</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Weak topics</p>
              <div className="flex flex-wrap gap-1.5">
                {submitted.weakTopics.map(t => <Badge key={t} className="bg-destructive/20 text-destructive border-destructive/40">{t}</Badge>)}
              </div>
            </div>
            <Button onClick={() => setQuestions(null)}>Done</Button>
          </CardContent>
        </Card>

        <h2 className="text-xl font-semibold mt-6">Wrong-answer breakdown</h2>
        {questions.map((q, i) => {
          const ua = answers[i];
          if (ua === q.answerIndex) return null;
          return (
            <Card key={q.id} className="bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-base">Q{i + 1}. {q.question}</CardTitle>
                <CardDescription>{q.subject} • {q.topic}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Your answer:</span> <span className="text-destructive">{ua !== undefined ? q.choices[ua] : "—"}</span></p>
                <p><span className="text-muted-foreground">Correct:</span> <span className="text-success">{q.choices[q.answerIndex]}</span></p>
                <p className="text-foreground/90">{q.explanation}</p>
                {q.steps?.length ? <ol className="list-decimal pl-5 text-foreground/80">{q.steps.map((s, k) => <li key={k}>{s}</li>)}</ol> : null}
                {q.tip && <p className="text-xs italic text-muted-foreground">Tip: {q.tip}</p>}
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }

  const q = questions[idx];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between sticky top-14 z-20 bg-background/80 backdrop-blur p-2 rounded-lg border border-border">
        <Badge variant="secondary"><Timer className="h-3 w-3 mr-1" /> {mins}:{secs}</Badge>
        <span className="text-xs text-muted-foreground">Question {idx + 1} of {questions.length}</span>
        <Button size="sm" variant="destructive" onClick={submit}><Flag className="h-3 w-3 mr-1" />Submit Exam</Button>
      </div>

      <Card className="bg-gradient-card">
        <CardHeader>
          <div className="flex gap-2 text-xs">
            <Badge variant="outline">{q.subject}</Badge>
            <Badge variant="outline">{q.topic}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {q.passage && <div className="rounded-lg border border-border bg-muted/30 p-3 text-sm">{q.passage}</div>}
          <p className="font-medium">{q.question}</p>
          <div className="grid gap-2">
            {q.choices.map((c, i) => (
              <button key={i} onClick={() => setAnswers(a => ({ ...a, [idx]: i }))}
                className={cn("text-left rounded-lg border p-3 flex items-start gap-3",
                  answers[idx] === i ? "border-primary bg-primary/10" : "border-border hover:border-primary/50")}>
                <span className="font-semibold text-muted-foreground w-6">{String.fromCharCode(65 + i)}.</span>
                <span className="flex-1 text-sm">{c}</span>
              </button>
            ))}
          </div>
          <div className="flex justify-between pt-2">
            <Button variant="outline" disabled={idx === 0} onClick={() => setIdx(i => i - 1)}><ArrowLeft className="h-4 w-4 mr-1" />Prev</Button>
            <Button disabled={idx === questions.length - 1} onClick={() => setIdx(i => i + 1)}>Next<ArrowRight className="h-4 w-4 ml-1" /></Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card">
        <CardHeader className="pb-2"><CardTitle className="text-sm">Question Navigator</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-10 gap-1.5">
            {questions.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={cn("h-8 rounded text-xs font-medium border",
                  i === idx ? "border-primary bg-primary/20" :
                  answers[i] !== undefined ? "border-success/40 bg-success/10" : "border-border")}>
                {i + 1}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
