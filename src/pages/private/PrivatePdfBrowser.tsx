import { useState } from "react";
import rawPages from "@/data/private/collegio/rawPages.json";

export default function PrivatePdfBrowser() {
  const [page, setPage] = useState(1);

  const current = rawPages.find((p: any) => p.page === page);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-4">
          <button
            className="px-4 py-2 bg-zinc-800 rounded"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Prev
          </button>

          <div className="text-lg font-bold">
            Collegio Reviewer • Page {page} / {rawPages.length}
          </div>

          <button
            className="px-4 py-2 bg-zinc-800 rounded"
            onClick={() =>
              setPage((p) => Math.min(rawPages.length, p + 1))
            }
          >
            Next
          </button>
        </div>

        <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
          <img
            src={current?.image}
            alt={`Page ${page}`}
            className="w-full"
          />
        </div>

      </div>
    </div>
  );
}
