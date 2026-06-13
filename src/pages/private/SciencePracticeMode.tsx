import { useMemo, useState } from "react";
import { scienceAssessmentReview } from "@/data/private/collegio/science/scienceAssessmentReview";

type MCQ = {
  id: string;
  question: string;
  answer: string;
  topic: string;
  sourcePage: number;
};

function generateChoices(correct: string, pool: string[]) {
  const filtered = pool.filter(
    (p) => p !== correct && p.length > 3
  );

  const shuffled = filtered.sort(() => Math.random() - 0.5);

  const choices = [
    correct,
    ...shuffled.slice(0, 3),
  ].sort(() => Math.random() - 0.5);

  return choices;
}

export default function SciencePracticeMode() {
  const questions: MCQ[] = scienceAssessmentReview;

  const answerPool = useMemo(
    () => questions.map((q) => q.answer),
    [questions]
  );

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const current = questions[index];

  const choices = useMemo(
    () => generateChoices(current.answer, answerPool),
    [current, answerPool]
  );

  const next = () => {
    setSelected(null);
    setShowAnswer(false);
    setIndex((v) => Math.min(v + 1, questions.length - 1));
  };

  const selectChoice = (choice: string) => {
    if (showAnswer) return;

    setSelected(choice);
    setShowAnswer(true);

    if (choice === current.answer) {
      setScore((s) => s + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-6">
      <div className="max-w-4xl mx-auto space-y-5">

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Private CET Reviewer
          </p>

          <h1 className="text-3xl font-bold">
            Science Practice Mode
          </h1>

          <p className="text-sm text-muted-foreground">
            Multiple-choice practice generated from PDF reviewer content.
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-5 space-y-4">

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">
                Question {index + 1} / {questions.length}
              </div>

              <div className="font-semibold">
                {current.topic}
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-muted-foreground">
                Score
              </div>

              <div className="text-2xl font-bold">
                {score}
              </div>
            </div>
          </div>

          <div className="text-lg font-semibold leading-relaxed">
            {current.question}
          </div>

          <div className="grid gap-3">
            {choices.map((choice) => {
              const correct = choice === current.answer;

              const selectedWrong =
                showAnswer &&
                selected === choice &&
                !correct;

              const selectedCorrect =
                showAnswer &&
                selected === choice &&
                correct;

              return (
                <button
                  key={choice}
                  onClick={() => selectChoice(choice)}
                  className={[
                    "rounded-xl border p-4 text-left transition",
                    selectedCorrect
                      ? "border-green-500 bg-green-500/10"
                      : selectedWrong
                        ? "border-red-500 bg-red-500/10"
                        : showAnswer && correct
                          ? "border-green-500/40 bg-green-500/5"
                          : "bg-background hover:bg-muted"
                  ].join(" ")}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {showAnswer && (
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
              <div className="font-semibold text-primary">
                Correct Answer
              </div>

              <div className="mt-1 text-lg font-bold">
                {current.answer}
              </div>

              <div className="mt-3 text-xs text-muted-foreground">
                Source page {current.sourcePage}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={next}
              disabled={index === questions.length - 1}
              className="px-5 py-3 rounded-xl border bg-primary text-primary-foreground disabled:opacity-40"
            >
              Next Question
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
