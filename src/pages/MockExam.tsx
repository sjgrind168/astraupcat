import { useMemo, useState } from "react";
import { collegioPracticeQuestions } from "@/data/private/collegio/practice/collegioPractice";

type PracticeQuestion = any;

type MockBlock =
  | {
      id: string;
      type: "single";
      title: string;
      questions: PracticeQuestion[];
    }
  | {
      id: string;
      type: "package";
      title: string;
      pages: PracticeQuestion[];
      questions: PracticeQuestion[];
    };

const PACKAGE_SUBJECTS = [
  "Reading Comprehension English",
  "Reading Comprehension Filipino",
  "Abstract Reasoning",
];

function shuffleArray<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function letterForIndex(index: number) {
  return String.fromCharCode(65 + index);
}

function answerText(q: PracticeQuestion) {
  if (q.correctLetter && q.choices?.length) {
    const idx = q.correctLetter.charCodeAt(0) - 65;
    return q.choices[idx] ?? q.answer;
  }
  return q.answer;
}

function isReadingPage(q: PracticeQuestion) {
  return q.topic === "Reading Passage";
}

function isRealQuestion(q: PracticeQuestion) {
  return Array.isArray(q.choices) && q.choices.length > 1 && !isReadingPage(q);
}

function buildMockBlocks() {
  const packaged: MockBlock[] = [];
  const singles: MockBlock[] = [];

  for (const subject of PACKAGE_SUBJECTS) {
    const items = collegioPracticeQuestions.filter((q) => q.subject === subject);
    if (!items.length) continue;

    packaged.push({
      id: `package-${subject}`,
      type: "package",
      title: subject,
      pages: items.filter(isReadingPage),
      questions: items.filter(isRealQuestion),
    });
  }

  for (const q of collegioPracticeQuestions) {
    if (PACKAGE_SUBJECTS.includes(q.subject)) continue;
    if (!isRealQuestion(q)) continue;

    singles.push({
      id: q.id,
      type: "single",
      title: q.subject,
      questions: [q],
    });
  }

  return shuffleArray([...singles, ...packaged]);
}

export default function MockExam() {
  const [seed, setSeed] = useState(0);
  const [blockIndex, setBlockIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const blocks = useMemo(() => buildMockBlocks(), [seed]);
  const current = blocks[blockIndex];

  const allQuestions = useMemo(
    () => blocks.flatMap((block) => block.questions),
    [blocks]
  );

  const answeredCount = allQuestions.filter((q) => answers[q.id]).length;

  const score = useMemo(() => {
    return allQuestions.filter((q) => {
      const selected = answers[q.id];
      if (!selected) return false;

      const selectedText = q.choices?.[selected.charCodeAt(0) - 65];
      return (
        selected === q.correctLetter ||
        selectedText?.trim().toLowerCase() === answerText(q)?.trim().toLowerCase()
      );
    }).length;
  }, [answers, allQuestions]);

  if (!current) {
    return <div className="p-6">No mock questions found.</div>;
  }

  if (submitted) {
    return (
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Mock Exam Results</h1>

        <div className="rounded-2xl border bg-card p-6">
          <p className="text-2xl font-bold">
            Score: {score}/{allQuestions.length}
          </p>
          <p className="text-muted-foreground">
            Answered: {answeredCount}/{allQuestions.length}
          </p>
        </div>

        <button
          onClick={() => {
            setAnswers({});
            setBlockIndex(0);
            setSubmitted(false);
            setSeed((v) => v + 1);
          }}
          className="px-5 py-3 rounded-xl border bg-primary text-primary-foreground"
        >
          Retake Mock Exam
        </button>
      </div>
    );
  }

  const isPackage = current.type === "package";

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mock Entrance Exam</h1>
        <p className="text-muted-foreground">
          Block {blockIndex + 1} of {blocks.length}
        </p>
        <p className="text-sm text-muted-foreground">
          Answered {answeredCount}/{allQuestions.length}
        </p>
      </div>

      <div className="rounded-2xl border bg-card p-5 space-y-5">
        <div className="text-xs font-mono text-primary">
          {current.title} {isPackage ? "• Reading/Visual Package" : ""}
        </div>

        {isPackage && current.pages.length > 0 && (
          <div className="space-y-4">
            <div className="rounded-xl border bg-background p-4">
              <div className="font-bold">Read these pages first.</div>
              <div className="text-sm text-muted-foreground">
                The questions for this package are below the reading pages.
              </div>
            </div>

            {current.pages.map((page) => (
              <div key={page.id} className="rounded-xl border bg-background p-3">
                <div className="mb-2 text-xs font-mono text-muted-foreground">
                  Page {page.sourcePage}
                </div>
                <img
                  src={`/private-reviewer/collegio/pages/page-${String(
                    page.sourcePage
                  ).padStart(3, "0")}.jpg`}
                  alt={`Page ${page.sourcePage}`}
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        <div className="space-y-5">
          {current.questions.map((q, qIndex) => (
            <div key={q.id} className="rounded-xl border bg-background p-4 space-y-3">
              <div className="text-xs font-mono text-primary">
                {q.subject} • {q.topic} • Page {q.sourcePage}
              </div>

              {q.passage && (
                <div className="rounded-lg border bg-card p-3 text-sm leading-7 whitespace-pre-line text-muted-foreground">
                  {q.passage}
                </div>
              )}

              <div className="font-semibold leading-relaxed whitespace-pre-line">
                {isPackage ? `${qIndex + 1}. ` : ""}
                {q.question}
              </div>

              <div className="space-y-2">
                {q.choices.map((choice: string, choiceIndex: number) => {
                  const letter = letterForIndex(choiceIndex);
                  const picked = answers[q.id] === letter;

                  return (
                    <button
                      key={letter}
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [q.id]: letter,
                        }))
                      }
                      className={[
                        "w-full rounded-xl border p-4 text-left transition",
                        picked
                          ? "border-primary bg-primary/15"
                          : "bg-background hover:bg-muted",
                      ].join(" ")}
                    >
                      <span className="font-bold">{letter}. </span>
                      {choice}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between gap-3">
        <button
          onClick={() => setBlockIndex((v) => Math.max(0, v - 1))}
          disabled={blockIndex === 0}
          className="px-4 py-3 rounded-xl border disabled:opacity-40"
        >
          Previous
        </button>

        {blockIndex === blocks.length - 1 ? (
          <button
            onClick={() => setSubmitted(true)}
            className="px-4 py-3 rounded-xl border bg-primary text-primary-foreground"
          >
            Submit Exam
          </button>
        ) : (
          <button
            onClick={() => setBlockIndex((v) => Math.min(blocks.length - 1, v + 1))}
            className="px-4 py-3 rounded-xl border bg-primary text-primary-foreground"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
