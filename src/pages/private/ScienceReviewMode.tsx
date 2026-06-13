import { useState } from "react";
import { scienceReviewPages } from "@/data/private/collegio/science/reviewPages";

export default function ScienceReviewMode() {
  const [index, setIndex] = useState(0);

  const current = scienceReviewPages[index];

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-6">
      <div className="max-w-5xl mx-auto space-y-4">

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Private CET Reviewer
          </p>

          <h1 className="text-3xl font-bold">
            Science Review Mode
          </h1>

          <p className="text-muted-foreground text-sm">
            Review-only mode with real reviewer content and diagrams.
          </p>
        </div>

        <div className="flex items-center justify-between rounded-xl border bg-card p-3">

          <button
            className="px-4 py-2 rounded-lg border"
            disabled={index === 0}
            onClick={() => setIndex((v) => Math.max(0, v - 1))}
          >
            Prev
          </button>

          <div className="text-center">
            <div className="font-semibold">
              Science Page {current.page}
            </div>

            <div className="text-xs text-muted-foreground">
              {index + 1} / {scienceReviewPages.length}
            </div>
          </div>

          <button
            className="px-4 py-2 rounded-lg border"
            disabled={index === scienceReviewPages.length - 1}
            onClick={() =>
              setIndex((v) =>
                Math.min(scienceReviewPages.length - 1, v + 1)
              )
            }
          >
            Next
          </button>

        </div>

        <div className="rounded-2xl overflow-hidden border bg-black">
          <img
            src={current.image}
            alt={`Science Page ${current.page}`}
            className="w-full"
          />
        </div>

      </div>
    </div>
  );
}
