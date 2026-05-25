import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SUBJECTS } from "@/lib/questions";
import { Question } from "@/types/questions";
import { BookOpen } from "lucide-react";
import { getReviewerLimit } from "@/lib/featureAccess";

export default function Reviewer() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const reviewerLimit = getReviewerLimit();
  const isLimited = Number.isFinite(reviewerLimit);

  useEffect(() => {
    let isMounted = true;

    import("@/data/questions")
      .then(({ getAllQuestionsAsync }) => getAllQuestionsAsync())
      .then(loadedQuestions => {
        if (isMounted) {
          setQuestions(loadedQuestions);
        }
      })
      .catch(error => {
        console.error("Failed to load reviewer questions:", error);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoadingQuestions(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const questionsBySubject = useMemo(() => {
    return SUBJECTS.reduce((acc, subject) => {
      const subjectQuestions = questions.filter(q => q.subject === subject);
      acc[subject] = {
        questions: subjectQuestions,
        topics: Array.from(new Set(subjectQuestions.map(q => q.topic))),
      };
      return acc;
    }, {} as Record<(typeof SUBJECTS)[number], { questions: Question[]; topics: string[] }>);
  }, [questions]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Reviewer Library</h1>
        <p className="text-muted-foreground text-sm">Topic-by-topic mastery across entrance exam subject areas.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {SUBJECTS.map(s => {
          const subjectData = questionsBySubject[s] ?? { questions: [], topics: [] };
          const visibleQuestions = isLimited
            ? subjectData.questions.slice(0, reviewerLimit)
            : subjectData.questions;
          const topics = Array.from(new Set(visibleQuestions.map(q => q.topic)));
          return (
            <Card key={s} className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" /> {s}</CardTitle>
                <CardDescription>
                  {isLoadingQuestions
                    ? "Loading questions..."
                    : `${topics.length} topics • ${visibleQuestions.length} questions${isLimited ? " available on Free" : ""}`}
                </CardDescription>
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
