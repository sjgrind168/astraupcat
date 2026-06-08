const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(process.cwd(), "src/data");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : full;
  });
}

const files = walk(DATA_DIR).filter((f) => f.endsWith(".ts") || f.endsWith(".tsx"));

let text = "";
for (const file of files) {
  text += "\n// FILE: " + file + "\n" + fs.readFileSync(file, "utf8");
}

const questionBlocks = [...text.matchAll(/\{[\s\S]*?question\s*:\s*"([^"]+)"[\s\S]*?\}/g)];

const seen = new Map();
const duplicateTexts = [];
const suspicious = [];

for (const match of questionBlocks) {
  const block = match[0];
  const question = match[1].trim().replace(/\s+/g, " ");
  const normalized = question.toLowerCase();

  if (seen.has(normalized)) duplicateTexts.push({ question, first: seen.get(normalized) });
  else seen.set(normalized, question);

  const explanation = (block.match(/explanation\s*:\s*"([^"]*)"/)?.[1] || "").trim();
  const answer = (block.match(/answer\s*:\s*"([^"]*)"/)?.[1] || block.match(/correctAnswer\s*:\s*"([^"]*)"/)?.[1] || "").trim();

  if (/water is correct/i.test(explanation)) {
    suspicious.push({ question, answer, explanation, reason: "Water is correct explanation" });
  }

  if (/oxygen/i.test(question) && /water/i.test(explanation)) {
    suspicious.push({ question, answer, explanation, reason: "Oxygen-related question but water explanation" });
  }

  if (/breathe|respiration/i.test(question) && /water/i.test(explanation)) {
    suspicious.push({ question, answer, explanation, reason: "Respiration question but water explanation" });
  }
}

console.log("Files scanned:", files.length);
console.log("Question-like blocks found:", questionBlocks.length);
console.log("Duplicate question texts:", duplicateTexts.length);
console.log("Suspicious items:", suspicious.length);

console.log("\n=== DUPLICATES SAMPLE ===");
console.log(JSON.stringify(duplicateTexts.slice(0, 30), null, 2));

console.log("\n=== SUSPICIOUS ===");
console.log(JSON.stringify(suspicious.slice(0, 80), null, 2));
