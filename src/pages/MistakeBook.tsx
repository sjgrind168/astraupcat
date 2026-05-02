import { useMemo } from "react";
import { useApp } from "@/lib/store";
import { QUESTIONS } from "@/lib/questions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function MistakeBook() {
  const { state, setState } = useApp();
  const wrong = useMemo(() => state.attempts.filter(a => !a.correct && !a.mastered), [state.attempts]);
  const grouped = useMemo(() => {
    const m: Record<string, typeof wrong> = {};
    for (const w of wrong) (m[w.subject] ||= []).push(w);
    return m;
  }, [wrong]);

  const markMastered = (id: string) =>
    setState(s => ({ ...s, attempts: s.attempts.map(a => a.id === id ? { ...a, mastered: true } : a) }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mistake Book</h1>
        <p className="text-muted-foreground text-sm">{state.profile?.name}, every wrong answer becomes fuel.</p>
      </div>
      {Object.keys(grouped).length === 0 ? (
        <Card className="bg-gradient-card"><CardContent className="py-10 text-center text-muted-foreground">No mistakes yet — keep practicing.</CardContent></Card>
      ) : Object.entries(grouped).map(([subj, items]) => (
        <Card key={subj} className="bg-gradient-card">
          <CardHeader>
            <CardTitle>{subj}</CardTitle>
            <CardDescription>{items.length} mistake{items.length !== 1 && "s"} to review</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {items.map(it => {
              const q = QUESTIONS.find(q => q.id === it.questionId);
              if (!q) return null;
              return (
                <div key={it.id} className="rounded-lg border border-border p-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <Badge variant="outline">{it.topic}</Badge>
                    <Badge variant="secondary">{it.difficulty}</Badge>
                    {it.errorType && <Badge className="bg-warning/20 text-warning border-warning/40">{it.errorType}</Badge>}
                  </div>
                  <p className="text-sm font-medium">{q.question}</p>
                  <p className="text-xs"><span className="text-destructive">Your answer:</span> {q.choices[it.userAnswer] ?? "—"}</p>
                  <p className="text-xs"><span className="text-success">Correct:</span> {q.choices[q.answerIndex]}</p>
                  <p className="text-xs text-muted-foreground">{q.explanation}</p>
                  <Button size="sm" variant="outline" onClick={() => markMastered(it.id)}>Mark as mastered</Button>
                </div>
              );
            })}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
