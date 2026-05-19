import { useApp } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, Flame, Target, TrendingUp, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { weakestSubject, masteryPct } from "@/lib/analytics";

export default function Dashboard() {
  const { state } = useApp();
  const profile = state.profile!;
  const today = new Date().toISOString().slice(0, 10);
  const todayTasks = state.plan.filter(t => t.date === today);
  const examDays = Math.max(0, Math.ceil((new Date(profile.examDate).getTime() - Date.now()) / 86400000));
  const lastMock = state.mocks[0];
  const weak = weakestSubject(state.attempts);
  const mastery = masteryPct(state.attempts);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome back, <span className="text-gradient-gold">{profile.name}</span>.</h1>
        <p className="text-muted-foreground">One sharp session at a time. Let's get to work.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-card shadow-elegant">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2"><CalendarClock className="h-4 w-4" /> Exam countdown</CardDescription>
            <CardTitle className="text-3xl text-gradient-gold">{examDays} <span className="text-sm font-normal text-muted-foreground">days</span></CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-gradient-card shadow-elegant">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2"><Flame className="h-4 w-4 text-warning" /> Study streak</CardDescription>
            <CardTitle className="text-3xl">{state.streak.current} <span className="text-sm font-normal text-muted-foreground">days</span></CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-gradient-card shadow-elegant">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-success" /> Mastery</CardDescription>
            <CardTitle className="text-3xl">{mastery}<span className="text-sm font-normal text-muted-foreground">%</span></CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-gradient-card shadow-elegant">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-2"><Target className="h-4 w-4 text-primary" /> Latest mock</CardDescription>
            <CardTitle className="text-3xl">
              {lastMock ? `${Math.round(lastMock.correct / lastMock.totalQuestions * 100)}%` : "—"}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2 bg-gradient-card shadow-elegant">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today's mission</CardTitle>
              <Badge variant="secondary">{todayTasks.length} task{todayTasks.length !== 1 && "s"}</Badge>
            </div>
            <CardDescription>{profile.name}, finish these to keep your streak alive.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {todayTasks.length === 0 ? (
              <p className="text-sm text-muted-foreground">No tasks scheduled today. Take a recovery walk or do a mistake review.</p>
            ) : todayTasks.slice(0, 5).map(t => (
              <div key={t.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{t.title}</span>
                  <span className="text-xs text-muted-foreground capitalize">{t.type} • {t.durationMin} min</span>
                </div>
                <Badge variant={t.done ? "secondary" : "outline"}>{t.done ? "Done" : "Pending"}</Badge>
              </div>
            ))}
            <Button asChild className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90">
              <Link to="/practice">Continue Studying <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> Focus area</CardTitle>
            <CardDescription>Where {profile.name} should sharpen next.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {weak ? (
              <>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Weakest subject</p>
                  <p className="text-lg font-semibold">{weak}</p>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/practice?mode=weakness">Run Weakness Drill</Link>
                </Button>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">Answer at least a few questions to surface your weakest subject.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
