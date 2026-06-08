import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useApp } from "@/lib/store";
import { Question, Subject, Difficulty } from "@/lib/types";
import { QuestionRunner } from "@/components/QuestionRunner";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getQuestionLimit } from "@/lib/featureAccess";
import { addAttempt, bumpStreak } from "@/lib/storage";
import { weakestSubject, weakestTopics, strongestTopics } from "@/lib/analytics";

type Mode = "topic" | "mixed" | "weakness" | "beast" | "mistakes";

async function pickQuestions(
  mode: Mode,
  subject: Subject | null,
  weak: Subject | null,
  weakTopics: string[],
  attempts:any[]
): Promise<Question[]> {
  const { getAllQuestionsAsync } = await import("@/data/questions");
  let pool = await getAllQuestionsAsync();

  // STRICT subject filtering
  // If a subject is selected from URL/query, NEVER allow other subjects.
  if (subject) {
    pool = pool.filter(q => q.subject === subject);
  }

  // Weakness mode
  // Only apply weakest subject automatically if user did not explicitly select one.
  if (mode === "weakness") {
    if (!subject && weak) {
      pool = pool.filter(q => q.subject === weak);
    }

    if (weakTopics.length) {
      pool = pool.filter(q => weakTopics.includes(q.topic));
    }
  }

  // Beast mode
  // Keep selected subject restriction while filtering difficulty.
  if (mode === "beast") {
    pool = pool.filter(
      q => q.difficulty === "hard" || q.difficulty === "beast"
    );
  }

  
  if (mode === "mistakes") {
    const wrongIds=new Set(
      attempts
      .filter(a=>!a.correct)
      .map(a=>a.questionId)
    )

    pool=pool.filter(
      q=>wrongIds.has(q.id)
    )
  }

const shuffled = [...pool].sort(() => Math.random() - 0.5);


  const practiceLimit = getQuestionLimit();
  const practiceCount = Number.isFinite(practiceLimit)
    ? practiceLimit
    : 100;

  return shuffled.slice(0, Math.min(practiceCount, shuffled.length));
}

export default function Practice() {
  const { state, setState } = useApp();
  const [params] = useSearchParams();
  const initialMode = (params.get("mode") as Mode) || "mixed";
  const initialSubject = (params.get("subject") as Subject) || null;

  const [mode, setMode] = useState<Mode>(initialMode);
  const [subject, setSubject] = useState<Subject | null>(initialSubject);
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [results, setResults] = useState<{ correct: number; total: number } | null>(null);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const weak = useMemo(() => weakestSubject(state.attempts), [state.attempts]);
  const weakTopicsList = useMemo(() => weakestTopics(state.attempts).map(t => t.topic), [state.attempts]);

  const start = async () => {
    setIsLoadingQuestions(true);
    setLoadError(null);

    try {
      const qs = await pickQuestions(mode, subject, weak, weakTopicsList, state.attempts);

      if (!qs.length) {
        setQuestions(null);
        setIdx(0);
        setResults(null);
        setLoadError("No questions were found for this practice mode. Try Mixed Practice or choose another subject.");
        return;
      }

      setQuestions(qs);
      setIdx(0);
      setResults({ correct: 0, total: qs.length });
    } catch (error) {
      console.error("Failed to load practice questions:", error);
      setQuestions(null);
      setIdx(0);
      setResults(null);
      setLoadError("Unable to load practice questions. Please refresh and try again.");
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  if (!questions) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Practice Mode</h1>
          <p className="text-muted-foreground text-sm">{state.profile?.name}, choose a mode and let's drill.</p>
        </div>
        <Card className="bg-gradient-card">
          <CardHeader><CardTitle>Mode</CardTitle></CardHeader>
          <CardContent className="grid gap-2 md:grid-cols-2">
            {([
              { k: "topic", t: "Topic Practice", d: "Pick one subject" },
              { k: "mixed", t: "Mixed Practice", d: "All subjects randomized" },
              { k: "weakness", t: "Weakness Drill", d: "Targets your weakest topics" },
              { k: "beast", t: "Beast Mode", d: "Hard + Beast difficulty only" },
{ k: "mistakes", t: "Mistake Book Drill", d: "Practice only your wrong answers" },
            ] as { k: Mode; t: string; d: string }[]).map(m => (
              <button key={m.k} onClick={() => setMode(m.k)}
                className={`text-left rounded-lg border p-4 transition ${mode === m.k ? "border-primary bg-primary/5" : "border-border"}`}>
                <p className="font-semibold">{m.t}</p>
                <p className="text-xs text-muted-foreground">{m.d}</p>
              </button>
            ))}
          </CardContent>
        </Card>
        {mode === "topic" && (
          <Card className="bg-gradient-card">
            <CardHeader><CardTitle>Subject</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {(["Mathematics","Science","English Language","Filipino Language","Reading Comprehension"] as Subject[]).map(s => (
                <Button key={s} variant={subject === s ? "default" : "outline"} size="sm" onClick={() => setSubject(s)}>{s}</Button>
              ))}
            </CardContent>
          </Card>
        )}
        {mode === "weakness" && (
          <Card className="bg-gradient-card border-warning/30">
            <CardHeader>
              <CardTitle>Weakness Analysis</CardTitle>
              <CardDescription>
                Areas detected from your recent attempts
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">

              <div>
                <p className="font-medium">
                  Weakest Subject:
                </p>

                <Badge>
                  {weak || "No data yet"}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2">

                {weakTopicsList.length
                ? weakTopicsList
                  .slice(0,5)
                  .map(topic=>(
                    <Badge
                    key={topic}
                    variant="outline"
                    className="border-destructive/40 text-destructive">
                    ⚠️ {topic}
                    </Badge>
                  ))
                :
                <p className="text-sm text-muted-foreground">
                Complete some drills first so Astra can detect weak areas.
                </p>
                }

              </div>

            </CardContent>
          </Card>
        )}

        

        {loadError && (
          <Card className="border-destructive/40 bg-destructive/10">
            <CardContent className="pt-6 text-sm text-destructive">
              {loadError}
            </CardContent>
          </Card>
        )}
        <Button className="bg-gradient-gold text-primary-foreground" onClick={start}
          disabled={isLoadingQuestions || (mode === "topic" && !subject)}>{isLoadingQuestions ? "Loading questions..." : "Start Drill"}</Button>
      </div>
    );
  }

  if (results && idx >= questions.length) {
    const pct = Math.round(results.correct / results.total * 100);
    return (
      <Card className="bg-gradient-card shadow-elegant">
        <CardHeader>
          <CardTitle>Nice work, {state.profile?.name}.</CardTitle>
          <CardDescription>Score: {results.correct}/{results.total} ({pct}%)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {(() => {
            const telemetry = getTelemetryStats();

            return (
              <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3 text-xs text-cyan-100 space-y-2">
                <div className="font-semibold text-cyan-300">QA Telemetry</div>
                <div>Total answered: {telemetry.total}</div>
                <div>Accuracy: {telemetry.accuracy}%</div>
                <div>Avg time/question: {telemetry.avgTimeSeconds}s</div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    clearTelemetry();
                    window.location.reload();
                  }}
                >
                  Clear QA Telemetry
                </Button>
              </div>
            );
          })()}

          <div className="flex flex-wrap gap-2">
            {strongestTopics(state.attempts, 2).map(t => (
              <Badge key={t.topic} className="bg-success/20 text-success border-success/40">Strong: {t.topic}</Badge>
            ))}
            {weakestTopics(state.attempts, 2).map(t => (
              <Badge key={t.topic} className="bg-destructive/20 text-destructive border-destructive/40">Weak: {t.topic}</Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button onClick={() => { setQuestions(null); setResults(null); setLoadError(null); }}>Run another drill</Button>
            <Button variant="outline" onClick={start} disabled={isLoadingQuestions}>{isLoadingQuestions ? "Loading questions..." : "Same mode again"}</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <QuestionRunner
      question={questions[idx]}
      index={idx}
      total={questions.length}
      onAnswered={(a) => {
        setState(s => bumpStreak(addAttempt(s, a)));
        setResults(r => r ? { ...r, correct: r.correct + (a.correct ? 1 : 0) } : r);
      }}
      onNext={() => setIdx(i => i + 1)}
    />
  );
}
