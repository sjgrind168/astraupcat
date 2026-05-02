import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QUESTIONS, SUBJECTS } from "@/lib/questions";
import { BookOpen } from "lucide-react";

export default function Reviewer() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Reviewer Library</h1>
        <p className="text-muted-foreground text-sm">Topic-by-topic mastery across all UPCAT subject areas.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {SUBJECTS.map(s => {
          const topics = Array.from(new Set(QUESTIONS.filter(q => q.subject === s).map(q => q.topic)));
          return (
            <Card key={s} className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" /> {s}</CardTitle>
                <CardDescription>{topics.length} topics • {QUESTIONS.filter(q => q.subject === s).length} questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {topics.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border">{t}</span>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-2">
                  <Link to={`/practice?subject=${encodeURIComponent(s)}`}>Practice {s}</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
