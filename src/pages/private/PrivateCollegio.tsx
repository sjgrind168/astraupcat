import { useMemo, useState } from "react";
import rawPages from "@/data/private/collegio/rawPages.json";
import { collegioSections } from "@/data/private/collegio/sections";

type Mode = "review" | "assessment" | "answerKey";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function PrivateCollegio() {
  const [sectionId, setSectionId] = useState("science");
  const [mode, setMode] = useState<Mode>("review");

  const section = collegioSections.find((s) => s.id === sectionId) || collegioSections[0];

  const range = useMemo(() => {
    if (mode === "assessment") return section.assessmentPages || section.reviewPages;
    if (mode === "answerKey") return section.answerKeyPages || section.reviewPages;
    return section.reviewPages;
  }, [section, mode]);

  const [page, setPage] = useState(range[0]);

  const safePage = clamp(page, range[0], range[1]);

  const current = rawPages.find((p: any) => p.page === safePage);

  const setModeSafe = (nextMode: Mode) => {
    setMode(nextMode);

    const nextRange =
      nextMode === "assessment"
        ? section.assessmentPages || section.reviewPages
        : nextMode === "answerKey"
          ? section.answerKeyPages || section.reviewPages
          : section.reviewPages;

    setPage(nextRange[0]);
  };

  const setSectionSafe = (id: string) => {
    const next = collegioSections.find((s) => s.id === id) || collegioSections[0];
    setSectionId(id);
    setMode("review");
    setPage(next.reviewPages[0]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Private Reviewer Mode
          </p>
          <h1 className="text-3xl font-bold">Collegio Digital Reviewer</h1>
          <p className="text-sm text-muted-foreground">
            Digital CET reviewer with review mode, assessments, answer keys, and real reviewer content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-3">
          {collegioSections.map((s) => (
            <button
              key={s.id}
              onClick={() => setSectionSafe(s.id)}
              className={`text-left rounded-xl border p-4 transition ${
                s.id === section.id
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              <div className="font-semibold">{s.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.subtitle}</div>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setModeSafe("review")}
            className={`px-4 py-2 rounded-lg border ${
              mode === "review" ? "bg-primary text-primary-foreground" : "bg-card"
            }`}
          >
            Review Only
          </button>

          <button
            onClick={() => setModeSafe("assessment")}
            className={`px-4 py-2 rounded-lg border ${
              mode === "assessment" ? "bg-primary text-primary-foreground" : "bg-card"
            }`}
          >
            Assessment
          </button>

          <button
            onClick={() => setModeSafe("answerKey")}
            className={`px-4 py-2 rounded-lg border ${
              mode === "answerKey" ? "bg-primary text-primary-foreground" : "bg-card"
            }`}
          >
            Answer Key
          </button>
        </div>

        <div className="rounded-2xl border bg-card overflow-hidden">
          <div className="flex items-center justify-between gap-3 p-3 border-b bg-muted/40">
            <button
              className="px-4 py-2 rounded bg-background border disabled:opacity-40"
              disabled={safePage <= range[0]}
              onClick={() => setPage((p) => clamp(p - 1, range[0], range[1]))}
            >
              Prev
            </button>

            <div className="text-center">
              <div className="font-bold">
                {section.title} • {mode === "review" ? "Review Only" : mode === "assessment" ? "Assessment" : "Answer Key"}
              </div>
              <div className="text-xs text-muted-foreground">
                Page {safePage} / {rawPages.length} • Section pages {range[0]}–{range[1]}
              </div>
            </div>

            <button
              className="px-4 py-2 rounded bg-background border disabled:opacity-40"
              disabled={safePage >= range[1]}
              onClick={() => setPage((p) => clamp(p + 1, range[0], range[1]))}
            >
              Next
            </button>
          </div>

          <div className="bg-black flex justify-center p-3">
            <img
              src={current?.image}
              alt={`${section.title} page ${safePage}`}
              className="max-w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
