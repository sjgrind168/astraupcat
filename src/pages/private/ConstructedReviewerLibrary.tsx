import { useState } from "react";
import { scienceAssessmentReview } from "@/data/private/collegio/science/scienceAssessmentReview";
import { mathAssessmentReview } from "@/data/private/collegio/math/mathAssessmentReview";
import { languageAssessmentReview } from "@/data/private/collegio/language/languageAssessmentReview";
import { abstractAssessmentReview } from "@/data/private/collegio/abstract/abstractAssessmentReview";

const subjects = [
  {
    id: "science",
    title: "Science Assessment Review",
    items: scienceAssessmentReview,
  },
  {
    id: "math",
    title: "Mathematics Assessment Review",
    items: mathAssessmentReview,
  },
  {
    id: "language",
    title: "Language Proficiency Review",
    items: languageAssessmentReview,
  },
  {
    id: "abstract",
    title: "Abstract Reasoning Review",
    items: abstractAssessmentReview,
  },
];

export default function ConstructedReviewerLibrary() {
  const [subjectId, setSubjectId] = useState("science");
  const [openId, setOpenId] = useState<string | null>(null);
  const [mode, setMode] = useState<"cards" | "pdf">("cards");

  const current = subjects.find((s) => s.id === subjectId) || subjects[0];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 rounded-xl border bg-card hover:bg-muted text-sm"
        >
          ← Back
        </button>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Private Digital Reviewer
          </p>
          <h1 className="text-3xl font-bold">Reviewer Library</h1>
          <p className="text-sm text-muted-foreground">
            Review-only Q&A mode plus full Collegio PDF source viewer.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => {
            setMode("pdf");
            setOpenId(null);
          }}
          className={`px-4 py-2 rounded-xl border ${
            mode === "pdf"
              ? "bg-primary text-primary-foreground"
              : "bg-card hover:bg-muted"
          }`}
        >
          Collegio PDF
        </button>

        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => {
              setSubjectId(subject.id);
              setMode("cards");
              setOpenId(null);
            }}
            className={`px-4 py-2 rounded-xl border ${
              mode === "cards" && subject.id === subjectId
                ? "bg-primary text-primary-foreground"
                : "bg-card hover:bg-muted"
            }`}
          >
            {subject.title.replace(" Assessment Review", "").replace(" Review", "")} ({subject.items.length})
          </button>
        ))}
      </div>

      {mode === "pdf" ? (
        <div className="space-y-4">
          <div className="rounded-2xl border bg-card p-5">
            <h2 className="text-2xl font-bold">Collegio PDF Reviewer</h2>
            <p className="text-sm text-muted-foreground">
              Full PDF viewer for lessons, explanations, and source review pages.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-4 space-y-6">
            {Array.from({ length: 286 }, (_, i) => i + 1).map((page) => (
              <div key={page} className="rounded-xl border bg-background p-3">
                <div className="mb-2 text-xs font-mono text-muted-foreground">
                  Page {page}
                </div>
                <img
                  src={`/private-reviewer/collegio/pages/page-${String(page).padStart(3, "0")}.jpg`}
                  alt={`Collegio PDF page ${page}`}
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="rounded-2xl border bg-card p-5">
            <h2 className="text-2xl font-bold">{current.title}</h2>
            <p className="text-sm text-muted-foreground">
              {current.items.length} verified Q&A cards from the private reviewer source.
            </p>
          </div>

          <div className="grid gap-3">
            {current.items.map((item, index) => {
              const open = openId === item.id;
              const image = "image" in item ? item.image : undefined;

              return (
                <button
                  key={item.id}
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="text-left rounded-xl border bg-card hover:bg-muted/40 p-4 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs text-primary font-mono">
                        {index + 1}. {item.topic} • Source page {item.sourcePage}
                      </div>
                      <div className="font-semibold mt-1">{item.question}</div>
                    </div>
                    <div className="text-xs rounded-full border px-3 py-1">
                      {open ? "Hide" : "Reveal"}
                    </div>
                  </div>

                  {open && (
                    <div className="mt-4 space-y-3">
                      {image ? (
                        <img
                          src={image}
                          alt={item.question}
                          className="w-full rounded-xl border"
                        />
                      ) : null}

                      <div className="rounded-lg bg-primary/10 border border-primary/30 p-3">
                        <div className="text-sm font-semibold text-primary">Answer</div>
                        <div className="text-lg font-bold mt-1">{item.answer}</div>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
