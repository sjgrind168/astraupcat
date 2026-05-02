import { useApp } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generatePlan, rescheduleMissed } from "@/lib/planner";
import { setPlan } from "@/lib/storage";
import { weakestSubject } from "@/lib/analytics";
import { useMemo } from "react";

export default function StudyPlan() {
  const { state, setState } = useApp();
  const profile = state.profile!;

  const grouped = useMemo(() => {
    const by: Record<string, typeof state.plan> = {};
    for (const t of state.plan) {
      (by[t.date] ||= []).push(t);
    }
    return Object.entries(by).sort(([a], [b]) => a.localeCompare(b));
  }, [state.plan]);

  const regenerate = () => {
    const weak = weakestSubject(state.attempts);
    const plan = generatePlan(profile, weak ? [weak] : []);
    setState(s => setPlan(s, plan));
  };

  const reschedule = () => {
    setState(s => setPlan(s, rescheduleMissed(s.plan)));
  };

  const toggle = (id: string) => {
    setState(s => setPlan(s, s.plan.map(t => t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-bold">Smart Study Plan</h1>
          <p className="text-muted-foreground text-sm">Adaptive plan from {profile.startDate} to {profile.examDate}.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={reschedule}>Reschedule missed</Button>
          <Button onClick={regenerate} className="bg-gradient-gold text-primary-foreground">Regenerate (adaptive)</Button>
        </div>
      </div>

      <div className="grid gap-3">
        {grouped.slice(0, 30).map(([date, tasks]) => (
          <Card key={date} className="bg-gradient-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{date}</CardTitle>
                <CardDescription>{tasks.filter(t => t.done).length}/{tasks.length} done</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {tasks.map(t => (
                <button key={t.id} onClick={() => toggle(t.id)}
                  className={`w-full text-left rounded-lg border p-3 flex items-center justify-between transition ${
                    t.done ? "bg-success/10 border-success/30" : "border-border hover:border-primary/40"
                  }`}>
                  <div>
                    <p className={`text-sm font-medium ${t.done ? "line-through text-muted-foreground" : ""}`}>{t.title}</p>
                    <p className="text-xs text-muted-foreground capitalize">{t.type} • {t.durationMin} min</p>
                  </div>
                  <Badge variant={t.done ? "secondary" : "outline"}>{t.type}</Badge>
                </button>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
