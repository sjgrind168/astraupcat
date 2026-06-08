const fs = require("fs");

const files = [
  "src/data/questionPacks/sciencePack.ts",
  "src/data/generated/scienceGenerated001.ts",
  "src/data/generated/scienceGenerated002.ts",
];

const rows = [];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const blocks = text.match(/\{[\s\S]*?\n\s*\}/g) || [];

  for (const block of blocks) {
    const id = block.match(/id:\s*"([^"]+)"/)?.[1] || "";
    const question = block.match(/question:\s*"([^"]+)"/)?.[1] || "";
    const answer = block.match(/answer:\s*"([^"]+)"/)?.[1] || "";
    const explanation = block.match(/explanation:\s*"([^"]*)"/)?.[1] || "";
    const choices = [...block.matchAll(/"([^"]+)"/g)].map(m => m[1]);

    if (!question) continue;

    rows.push({
      file,
      id,
      question,
      answer,
      explanation,
      suspicious:
        !answer ||
        !explanation ||
        /water is correct/i.test(explanation) ||
        /correct\.$/i.test(explanation) ||
        !choices.includes(answer),
    });
  }
}

fs.writeFileSync("science-review-report.json", JSON.stringify(rows, null, 2));

const suspicious = rows.filter(r => r.suspicious);
fs.writeFileSync("science-suspicious.json", JSON.stringify(suspicious, null, 2));

console.log("Science questions:", rows.length);
console.log("Suspicious:", suspicious.length);
console.log("Created: science-review-report.json");
console.log("Created: science-suspicious.json");
