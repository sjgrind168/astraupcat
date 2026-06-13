import { useMemo, useState } from "react";
import { collegioPracticeQuestions } from "@/data/private/collegio/practice/collegioPractice";

function FeatureGate({ children }: { feature?: string; children: React.ReactNode }) {
  return <>{children}</>;
}

function shuffleArray<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function answerText(q: any) {
  if (q.correctLetter && q.choices?.length) {
    const idx = q.correctLetter.charCodeAt(0) - 65;
    return q.choices[idx] ?? q.answer;
  }
  return q.answer;
}

export default function MockExam() {
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = useMemo(() => {
    return shuffleArray(collegioPracticeQuestions);
  }, [seed]);

  const current = questions[index];
  const selected = current ? answers[current.id] : undefined;

  const score = useMemo(() => {
    return questions.filter((q: any) => {
      const correct = q.correctLetter || "";
      return answers[q.id] === correct;
    }).length;
  }, [answers, questions]);

  if (!current) {
    return (
      <FeatureGate feature="mockExam">
        <div className="p-6">No mock questions found.</div>
      </FeatureGate>
    );
  }

  if (submitted) {
    return (
      <FeatureGate feature="mockExam">
        <div className="p-6 max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Mock Exam Results</h1>

          <div className="rounded-2xl border bg-card p-6">
            <p className="text-2xl font-bold">
              Score: {score}/{questions.length}
            </p>
            <p className="text-muted-foreground">
              Answered: {Object.keys(answers).length}/{questions.length}
            </p>
          </div>

          <button
            onClick={() => {
              setAnswers({});
              setIndex(0);
              setSubmitted(false);
              setSeed((v) => v + 1);
            }}
            className="px-5 py-3 rounded-xl border bg-primary text-primary-foreground"
          >
            Retake Mock Exam
          </button>
        </div>
      </FeatureGate>
    );
  }

  const isReadingPage = current.topic === "Reading Passage";

  return (
    <FeatureGate feature="mockExam">
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Mock Entrance Exam</h1>
          <p className="text-muted-foreground">
            Question {index + 1} of {questions.length}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-5 space-y-4">
          <div className="text-xs font-mono text-primary">
            {current.subject} • {current.topic} • Page {current.sourcePage}
          </div>

          {isReadingPage && current.sourcePage && (
            <div className="rounded-xl border bg-background p-3">
              <img
                src={`/private-reviewer/collegio/pages/page-${current.sourcePage}.jpg`}
                alt={`Page ${current.sourcePage}`}
                className="w-full rounded-lg"
              />
            </div>
          )}

          {current.passage && (
            <div className="rounded-xl border bg-background p-4 text-sm leading-7 whitespace-pre-line text-muted-foreground">
              {current.passage}
            </div>
          )}

          <div className="rounded-xl border bg-background p-4">
            <div className="font-semibold leading-relaxed whitespace-pre-line">
              {current.question}
            </div>
          </div>

          <div className="space-y-2">
            {current.choices.map((choice: string, choiceIndex: number) => {
              const letter = String.fromCharCode(65 + choiceIndex);
              const picked = selected === letter;

              return (
                <button
                  key={letter}
                  onClick={() =>
                    setAnswers((prev) => ({
                      ...prev,
                      [current.id]: letter,
                    }))
                  }
                  className={[
                    "w-full rounded-xl border p-4 text-left transition",
                    picked ? "border-primary bg-primary/15" : "bg-background hover:bg-muted",
                  ].join(" ")}
                >
                  <span className="font-bold">{letter}. </span>
                  {choice}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between gap-3">
          <button
            onClick={() => setIndex((v) => Math.max(0, v - 1))}
            disabled={index === 0}
            className="px-4 py-3 rounded-xl border disabled:opacity-40"
          >
            Previous
          </button>

          {index === questions.length - 1 ? (
            <button
              onClick={() => setSubmitted(true)}
              className="px-4 py-3 rounded-xl border bg-primary text-primary-foreground"
            >
              Submit Exam
            </button>
          ) : (
            <button
              onClick={() => setIndex((v) => Math.min(questions.length - 1, v + 1))}
              className="px-4 py-3 rounded-xl border bg-primary text-primary-foreground"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </FeatureGate>
  );
}
