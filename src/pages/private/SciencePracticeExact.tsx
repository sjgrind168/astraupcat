import { useMemo, useState } from "react";
import { scienceAssessmentReview } from "@/data/private/collegio/science/scienceAssessmentReview";


const scienceGeneratedChoices: Record<string, string[]> = {
  "sci-p021-q001": ["Oxygen", "Silicon", "Aluminum", "Iron"],
  "sci-p021-q002": ["Ozone layer", "Lithosphere", "Ionosphere", "Thermosphere"],
  "sci-p021-q003": ["The Moon's orbit is at an angle to Earth's orbit around the Sun", "Earth stops rotating during a full moon", "The Sun blocks the Moon every month", "The Moon has no shadow during most months"],
  "sci-p021-q004": ["Physical change", "Nuclear change", "Chemical change", "Phase change"],
  "sci-p021-q005": ["Dust particles", "Tiny droplets of water", "Solid rocks", "Pure oxygen"],
  "sci-p021-q006": ["Centigrade", "Kelvin", "Newton", "Joules"],

  "sci-p022-q007": ["Series circuit", "Parallel circuit", "Open circuit", "Short circuit"],
  "sci-p022-q008": ["300 N·m", "500 N·m", "1000 N·m", "1500 N·m"],
  "sci-p022-q009": ["1.44 × 10^-6 cm", "1.44 × 10^-7 cm", "1.44 × 10^-9 cm", "1.44 × 10^-8 cm"],
  "sci-p022-q010": ["Formation of new substances", "Breaking of chemical bonds", "Separation of the molecules in a mixture", "Rearrangement of atoms"],
  "sci-p022-q011": ["1 ionization stage", "2 ionization stages", "3 ionization stages", "4 ionization stages"],
};


const scienceAnswerKeys: Record<string, string> = {
  "sci-p021-q001": "B",
  "sci-p021-q002": "A",
  "sci-p021-q003": "A",
  "sci-p021-q004": "C",
  "sci-p021-q005": "B",
  "sci-p021-q006": "D",
  "sci-p022-q007": "A",
  "sci-p022-q008": "D",
  "sci-p022-q009": "D",
  "sci-p022-q010": "C",
  "sci-p022-q011": "B",
  "sci-p023-q012": "B",
  "sci-p023-q013": "D",
  "sci-p023-q014": "B",
  "sci-p023-q015": "C",
  "sci-p023-q016": "A",
  "sci-p023-q017": "C",
  "sci-p024-q018": "D",
  "sci-p024-q019": "C",
  "sci-p024-q020": "C",
  "sci-p024-q021": "A",
  "sci-p024-q022": "D",
  "sci-p024-q023": "D",
  "sci-p025-q024": "A",
  "sci-p025-q025": "C",
  "sci-p025-q026": "B",
  "sci-p025-q027": "D",
  "sci-p025-q028": "B",
  "sci-p025-q029": "A",
  "sci-p026-q030": "C",
  "sci-p026-q031": "B",
  "sci-p026-q032": "C",
  "sci-p026-q033": "A",
  "sci-p026-q034": "D",
  "sci-p026-q035": "D",
  "sci-p027-q036": "D",
  "sci-p027-q037": "B",
  "sci-p027-q038": "A",
  "sci-p027-q039": "C",
  "sci-p027-q040": "C",
};

function pageImage(page: number) {
  return `/private-reviewer/collegio/pages/page-${String(page).padStart(3, "0")}.jpg`;
}

export default function SciencePracticeExact() {
  const questions = scienceAssessmentReview;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const current = questions[index];
  const correctLetter = scienceAnswerKeys[current.id];
  const selected = answers[current.id];

  const score = useMemo(() => {
    return questions.filter((q) => answers[q.id] === scienceAnswerKeys[q.id]).length;
  }, [answers, questions]);

  const choose = (letter: string) => {
    if (submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [current.id]: letter,
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-6">
      <div className="max-w-5xl mx-auto space-y-4">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 rounded-xl border bg-card hover:bg-muted text-sm"
        >
          ← Back
        </button>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Private PDF Practice
          </p>
          <h1 className="text-3xl font-bold">Science Practice</h1>
          <p className="text-sm text-muted-foreground">
            Exact PDF-style multiple choice. Read the choices from the page image, then select A-D.
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-4 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm text-muted-foreground">
                Question {index + 1} / {questions.length}
              </div>
              <div className="font-semibold">
                {current.topic} • Page {current.sourcePage}
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-muted-foreground">Score</div>
              <div className="text-2xl font-bold">{score}</div>
            </div>
          </div>

          <div className="rounded-xl border bg-background p-4">
            <div className="font-semibold leading-relaxed">
              {current.question}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border bg-black">
            <img
              src={pageImage(current.sourcePage)}
              alt={`Science page ${current.sourcePage}`}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {(scienceGeneratedChoices[current.id] ?? ["A", "B", "C", "D"]).map((choiceText, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selected === letter;
              const isCorrect = submitted && letter === correctLetter;
              const isWrong = submitted && isSelected && letter !== correctLetter;

              return (
                <button
                  key={letter}
                  onClick={() => choose(letter)}
                  className={[
                    "rounded-xl border py-4 font-bold text-lg transition",
                    isCorrect
                      ? "border-green-500 bg-green-500/15"
                      : isWrong
                        ? "border-red-500 bg-red-500/15"
                        : isSelected
                          ? "border-primary bg-primary/15"
                          : "bg-background hover:bg-muted"
                  ].join(" ")}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {submitted && (
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
              <div className="text-sm text-primary font-semibold">Correct Answer</div>
              <div className="text-xl font-bold">{correctLetter}. {current.answer}</div>
            </div>
          )}

          <div className="flex justify-between gap-2">
            <button
              disabled={index === 0}
              onClick={() => {
                setSubmitted(false);
                setIndex((v) => Math.max(0, v - 1));
              }}
              className="px-4 py-3 rounded-xl border disabled:opacity-40"
            >
              Previous
            </button>

            <button
              onClick={() => setSubmitted(true)}
              disabled={!selected}
              className="px-4 py-3 rounded-xl border bg-primary text-primary-foreground disabled:opacity-40"
            >
              Check Answer
            </button>

            <button
              disabled={index === questions.length - 1}
              onClick={() => {
                setSubmitted(false);
                setIndex((v) => Math.min(questions.length - 1, v + 1));
              }}
              className="px-4 py-3 rounded-xl border disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
