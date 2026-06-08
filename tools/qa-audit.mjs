import fs from "fs";

const files = [
  "src/data/questionPacks/sciencePackV2.ts",
  "src/data/questionPacks/logicPackV2.ts",
  "src/data/questionPacks/logicHardPackV2.ts",
  "src/data/questionPacks/mathPackV2.ts",
  "src/data/questionPacks/mathHardPackV2.ts",
  "src/data/questionPacks/englishPackV2.ts",
  "src/data/questionPacks/englishHardPackV2.ts",
  "src/data/questionPacks/filipinoPackV2.ts",
  "src/data/questionPacks/balancePackV2.ts",
];

const stats = {
  total: 0,
  answers: [0, 0, 0, 0],
  difficulties: {},
  topics: {},
  duplicateQuestions: new Map(),
};

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");

  const questions = [...content.matchAll(/question:\s*"([^"]+)"/g)];
  const answerIndexes = [...content.matchAll(/answerIndex:\s*(\d+)/g)];
  const difficulties = [...content.matchAll(/difficulty:\s*"([^"]+)"/g)];
  const topics = [...content.matchAll(/topic:\s*"([^"]+)"/g)];

  stats.total += questions.length;

  answerIndexes.forEach(m => {
    const i = Number(m[1]);
    if (i >= 0 && i <= 3) stats.answers[i]++;
  });

  difficulties.forEach(m => {
    stats.difficulties[m[1]] = (stats.difficulties[m[1]] || 0) + 1;
  });

  topics.forEach(m => {
    stats.topics[m[1]] = (stats.topics[m[1]] || 0) + 1;
  });

  const choiceBlocks = [...content.matchAll(/choices:\s*\[([\s\S]*?)\]/g)];

  questions.forEach((m, idx) => {
    const q = m[1].trim().toLowerCase().replace(/\s+/g, " ");

    const choicesRaw = choiceBlocks[idx]
      ? choiceBlocks[idx][1]
      : "";

    const normalizedChoices = choicesRaw
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

    const fingerprint = q + " || " + normalizedChoices;

    stats.duplicateQuestions.set(
      fingerprint,
      (stats.duplicateQuestions.get(fingerprint) || 0) + 1
    );
  });
}

console.log("\n=== ACTIVE V2 QA AUDIT REPORT ===\n");
console.log("TOTAL ACTIVE V2 QUESTIONS:", stats.total);

console.log("\nANSWER INDEX DISTRIBUTION");
console.table({
  A_index0: stats.answers[0],
  B_index1: stats.answers[1],
  C_index2: stats.answers[2],
  D_index3: stats.answers[3],
});

console.log("\nDIFFICULTY DISTRIBUTION");
console.table(stats.difficulties);

console.log("\nTOP TOPICS");
console.table(Object.fromEntries(
  Object.entries(stats.topics).sort((a,b) => b[1]-a[1]).slice(0,20)
));

console.log("\nDUPLICATE ACTIVE V2 QUESTIONS");
const dups = [...stats.duplicateQuestions.entries()].filter(([_, count]) => count > 1);

if (!dups.length) console.log("No exact duplicate active V2 question text found.");
else dups.forEach(([q, c]) => console.log(`[${c}x] ${q.slice(0,120)}...`));

console.log("\n=== END REPORT ===\n");
