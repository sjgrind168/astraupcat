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

const counts = [0,0,0,0];
const candidates = [];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");

  const blocks = [...content.matchAll(/\{[\s\S]*?answerIndex:\s*(\d)[\s\S]*?\}/g)];

  blocks.forEach((m) => {
    const block = m[0];
    const idx = Number(m[1]);

    if (idx >=0 && idx <=3) counts[idx]++;

    const idMatch = block.match(/id:\s*"([^"]+)"/);

    if (!idMatch) return;

    const qid = idMatch[1];

    candidates.push({
      id: qid,
      file,
      answerIndex: idx,
    });
  });
}

console.log("\n=== ANSWER BALANCE REPORT ===\n");

console.table({
  A_index0: counts[0],
  B_index1: counts[1],
  C_index2: counts[2],
  D_index3: counts[3],
});

console.log("\nTOP B/C CANDIDATES TO REBALANCE\n");

const rebalance = candidates
  .filter(c => c.answerIndex === 1 || c.answerIndex === 2)
  .slice(0,40);

rebalance.forEach(c => {
  console.log(
    `${c.id} | currentIndex=${c.answerIndex} | ${c.file}`
  );
});

console.log("\n=== END ===\n");
