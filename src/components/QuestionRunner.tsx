import { useState } from "react";
import { Question, AttemptRecord, ErrorType } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Lightbulb, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  question: Question;
  index: number;
  total: number;
  onAnswered: (a: AttemptRecord) => void;
  onNext: () => void;
  hideExplanationUntilSubmit?: boolean;
}

export function QuestionRunner({ question, index, total, onAnswered, onNext, hideExplanationUntilSubmit }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [start] = useState(Date.now());

  const submit = () => {
    if (selected === null || submitted) return;
    setSubmitted(true);
    const correct = selected === question.answerIndex;
    const errorType: ErrorType | undefined = correct ? undefined :
      (Date.now() - start < 8000 ? "careless" : "concept");
    onAnswered({
      id: crypto.randomUUID(),
      questionId: question.id,
      subject: question.subject,
      topic: question.topic,
      difficulty: question.difficulty,
      correct,
      userAnswer: selected,
      timeMs: Date.now() - start,
      errorType,
      at: new Date().toISOString(),
    });
  };

  const showFeedback = submitted && !hideExplanationUntilSubmit;

  return (
    <Card className="bg-gradient-card shadow-elegant">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Question {index + 1} of {total}</span>
          <div className="flex gap-2">
            <Badge variant="secondary">{question.subject}</Badge>
            <Badge variant="outline">{question.topic}</Badge>
            <Badge className={cn(
              question.difficulty === "easy" && "bg-success/20 text-success border-success/40",
              question.difficulty === "normal" && "bg-accent/20 text-accent-foreground border-accent/40",
              question.difficulty === "hard" && "bg-warning/20 text-warning border-warning/40",
              question.difficulty === "beast" && "bg-destructive/20 text-destructive border-destructive/40",
            )}>{question.difficulty.toUpperCase()}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.passage && (
          <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm leading-relaxed">
            {question.passage}
          </div>
        )}
        <p className="text-base md:text-lg font-medium leading-relaxed">{question.question}</p>
        <div className="grid gap-2">
          {question.choices.map((c, i) => {
            const isCorrect = i === question.answerIndex;
            const isSelected = i === selected;
            return (
              <button
                key={i}
                disabled={submitted}
                onClick={() => setSelected(i)}
                className={cn(
                  "text-left rounded-lg border p-3 transition-all flex items-start gap-3",
                  !submitted && "hover:border-primary/60 hover:bg-primary/5",
                  isSelected && !submitted && "border-primary bg-primary/10",
                  showFeedback && isCorrect && "border-success bg-success/10",
                  showFeedback && isSelected && !isCorrect && "border-destructive bg-destructive/10",
                  !showFeedback && !isSelected && "border-border",
                )}
              >
                <span className="font-semibold text-muted-foreground w-6">{String.fromCharCode(65 + i)}.</span>
                <span className="flex-1 text-sm">{c}</span>
                {showFeedback && isCorrect && <CheckCircle2 className="h-5 w-5 text-success" />}
                {showFeedback && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-destructive" />}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 space-y-3 animate-fade-in">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Lightbulb className="h-4 w-4" /> Explanation
            </div>
            <p className="text-sm text-foreground/90">{question.explanation}</p>
            {question.steps?.length ? (
              <ol className="text-sm text-foreground/80 list-decimal pl-5 space-y-1">
                {question.steps.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
            ) : null}
            {question.tip && (
              <p className="text-xs text-muted-foreground italic">UPCAT tip: {question.tip}</p>
            )}
          </div>
        )}

        <div className="flex justify-end gap-2 pt-2">
          {!submitted ? (
            <Button onClick={submit} disabled={selected === null} className="bg-gradient-gold text-primary-foreground hover:opacity-90">
              Submit Answer
            </Button>
          ) : (
            <Button onClick={onNext}>
              {index + 1 === total ? "Finish" : "Next"} <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
