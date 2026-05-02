# Astra UPCAT Reviewer

Personalized UPCAT preparation app — Dashboard, Smart Study Plan, Reviewer, Practice Mode, Mock Exam, Formula Vault, Calculator Center, Mistake Book, Question Bank (with JSON import/export), Progress Report, and Settings.

Built with **React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui**. All data is stored locally in the browser via `localStorage` — no backend required.

## Requirements

- Node.js 18+ (Node 20 recommended)
- npm 9+

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:8080

## Build for production

```bash
npm run build
npm run preview
```

The production bundle is emitted to `dist/`.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run build:dev` — development-mode build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run test` — run Vitest once
- `npm run test:watch` — watch-mode tests

## Project structure

```
.
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig*.json
├── public/                    # static assets (favicon, etc.)
└── src/
    ├── main.tsx               # entry point
    ├── App.tsx                # router
    ├── index.css              # design tokens (UP-inspired theme)
    ├── components/            # layout + shadcn/ui + feature components
    ├── pages/                 # one file per route
    ├── hooks/
    └── lib/                   # store, types, storage, question bank, planner, etc.
```

## Data & persistence

All user state (profile, attempts, mock results, study plan, custom questions) is persisted in `localStorage` under keys prefixed with `astra-upcat-`. Clearing browser storage will reset the app.

### Question Bank

Open **Question Bank** to add, edit, import, or export questions. The Import JSON tab accepts an array of:

```ts
{
  id: string;
  subject: string;
  topic: string;
  difficulty: "easy" | "normal" | "hard" | "beast";
  question: string;
  passage?: string;
  choices: string[]; // exactly 4
  answerIndex: number; // 0..3
  explanation: string;
  steps: string[];
  tip?: string;
  tags?: string[];
}
```

Imported questions are merged with the seed bank and used by Practice Mode and Mock Exam automatically.

## License

MIT — use freely.
