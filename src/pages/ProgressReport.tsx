import { useApp } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { accuracyBySubject, weakestTopics, strongestTopics, masteryPct } from "@/lib/analytics";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";

export default function ProgressReport() {
  const { state } = useApp();
  const acc = accuracyBySubject(state.attempts);
  const weak = weakestTopics(state.attempts);
  const strong = strongestTopics(state.attempts);
  const mastery = masteryPct(state.attempts);

  const trend = [...state.mocks].reverse().map((m, i) => ({
    name: `Mock ${i + 1}`, score: Math.round(m.correct / m.totalQuestions * 100),
  }));
  const subjData = Object.entries(acc).map(([k, v]) => ({ name: k.split(" ")[0], acc: Math.round(v.acc * 100) }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Progress Report</h1>
        <p className="text-muted-foreground text-sm">{state.profile?.name}, here's your full picture.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-card"><CardHeader><CardDescription>Total questions</CardDescription><CardTitle className="text-3xl">{state.attempts.length}</CardTitle></CardHeader></Card>
        <Card className="bg-gradient-card"><CardHeader><CardDescription>Mastery</CardDescription><CardTitle className="text-3xl text-gradient-gold">{mastery}%</CardTitle></CardHeader></Card>
        <Card className="bg-gradient-card"><CardHeader><CardDescription>Streak</CardDescription><CardTitle className="text-3xl">{state.streak.current}d</CardTitle></CardHeader></Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-gradient-card">
          <CardHeader><CardTitle>Mock score trend</CardTitle></CardHeader>
          <CardContent className="h-64">
            {trend.length === 0 ? <p className="text-sm text-muted-foreground">Take a mock exam to see trend.</p> : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} domain={[0, 100]} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
        <Card className="bg-gradient-card">
          <CardHeader><CardTitle>Accuracy by subject</CardTitle></CardHeader>
          <CardContent className="h-64">
            {subjData.length === 0 ? <p className="text-sm text-muted-foreground">Practice to populate this chart.</p> : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} domain={[0, 100]} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Bar dataKey="acc" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-gradient-card">
          <CardHeader><CardTitle>Weakest topics</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {weak.length === 0 ? <p className="text-sm text-muted-foreground">—</p> :
              weak.map(t => <Badge key={t.topic} className="bg-destructive/20 text-destructive border-destructive/40">{t.topic} ({Math.round(t.acc*100)}%)</Badge>)}
          </CardContent>
        </Card>
        <Card className="bg-gradient-card">
          <CardHeader><CardTitle>Strongest topics</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {strong.length === 0 ? <p className="text-sm text-muted-foreground">—</p> :
              strong.map(t => <Badge key={t.topic} className="bg-success/20 text-success border-success/40">{t.topic} ({Math.round(t.acc*100)}%)</Badge>)}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-card">
        <CardHeader><CardTitle>Mock exam history</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {state.mocks.length === 0 ? <p className="text-sm text-muted-foreground">No mock exams yet.</p> :
            state.mocks.map(m => (
              <div key={m.id} className="flex items-center justify-between rounded-lg border border-border p-2 text-sm">
                <span>{new Date(m.at).toLocaleString()}</span>
                <Badge>{m.correct}/{m.totalQuestions}</Badge>
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
