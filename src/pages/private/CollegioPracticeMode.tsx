import { useMemo, useState } from "react";
import { collegioPracticeQuestions } from "@/data/private/collegio/practice/collegioPractice";

const SUBJECTS = [
  "Science",
  "Mathematics",
  "Language Proficiency",
  "Reading Comprehension English",
  "Reading Comprehension Filipino",
  "Filipino",
  "Abstract Reasoning",
];

export default function CollegioPracticeMode() {
  const [subject, setSubject] = useState("Science");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const questions = useMemo(() => {
    return collegioPracticeQuestions.filter(
      (q) => q.subject === subject
    );
  }, [subject]);

  const current = questions[index];

  if (!current) {
    return (
      <div className="p-6 text-white">
        No questions found for {subject}
      </div>
    );
  }

  const selected = answers[current.id];
  const isChecked = checked[current.id];

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary">
          Exact PDF Practice
        </p>

        <h1 className="text-3xl font-bold">
          Practice Mode
        </h1>
      </div>

      <div className="flex flex-wrap gap-2">
        {SUBJECTS.map((s) => {
          const count = collegioPracticeQuestions.filter(
            (q) => q.subject === s
          ).length;

          return (
            <button
              key={s}
              onClick={() => {
                setSubject(s);
                setIndex(0);
              }}
              className={`px-4 py-2 rounded-xl border ${
                subject === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-card"
              }`}
            >
              {s} ({count})
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border bg-card p-5 space-y-4">
        <div className="flex justify-between">
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
              Page
            </div>

            <div className="font-bold">
              {current.sourcePage}
            </div>
          </div>
        </div>

        {current.passage && (
          <div className="rounded-xl border bg-background p-4 text-sm leading-7 whitespace-pre-line text-muted-foreground">
            {current.passage}
          </div>
        )}

        {current.sourcePage && current.topic === "Reading Passage" && (
          <div className="rounded-xl border bg-background p-3">
            <img
              src={`/private-reviewer/collegio/pages/page-${current.sourcePage}.jpg`}
              alt={`Page ${current.sourcePage}`}
              className="w-full rounded-lg"
            />
          </div>
        )}

        <div className="rounded-xl border bg-background p-4">
          <div className="font-semibold leading-relaxed whitespace-pre-line">
            {current.question}
          </div>
        </div>

        {current.subject === "Abstract Reasoning" && (
          <div className="rounded-xl overflow-hidden border bg-black">
            <img
              src={current.image}
              alt={current.question}
              className="w-full"
            />
          </div>
        )}

        <div className="space-y-2">
          {current.choices.map((choiceText, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const correct =
              isChecked &&
              (
                letter === current.correctLetter ||
                choiceText.trim() === current.answer?.trim()
              );

            const wrong =
              isChecked &&
              selected === letter &&
              !correct;

            return (
              <button
                key={letter}
                onClick={() => {
                  if (isChecked) return;

                  setAnswers((prev) => ({
                    ...prev,
                    [current.id]: letter,
                  }));
                }}
                className={[
                  "w-full rounded-xl border p-4 text-base transition text-left",
                  correct
                    ? "border-green-500 bg-green-500/20"
                    : "",
                  wrong
                    ? "border-red-500 bg-red-500/20"
                    : "",
                  !correct && !wrong && selected === letter
                    ? "border-primary bg-primary/10"
                    : "",
                ].join(" ")}
              >
                <div className="flex gap-3 text-left w-full">
                  <span className="font-bold shrink-0">
                    {letter}.
                  </span>

                  <span className="leading-relaxed">
                    {choiceText}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {isChecked && (
          <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
            <div className="text-sm font-semibold text-primary">
              Correct Answer
            </div>

            <div className="text-xl font-bold">
              {current.answer}
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <button
            disabled={index === 0}
            onClick={() => {
              setIndex((v) => Math.max(0, v - 1));
            }}
            className="px-4 py-3 rounded-xl border disabled:opacity-40"
          >
            Previous
          </button>

          <button
            disabled={!selected}
            onClick={() => {
              setChecked((prev) => ({
                ...prev,
                [current.id]: true,
              }));
            }}
            className="px-4 py-3 rounded-xl border bg-primary text-primary-foreground disabled:opacity-40"
          >
            Check Answer
          </button>

          <button
            disabled={index === questions.length - 1}
            onClick={() => {
              setIndex((v) =>
                Math.min(
                  questions.length - 1,
                  v + 1
                )
              );
            }}
            className="px-4 py-3 rounded-xl border disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
