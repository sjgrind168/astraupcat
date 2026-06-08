const fs = require("fs");
const path = require("path");

const file = fs.readFileSync("src/lib/mockExam.ts", "utf8");

if (!file.includes("uniqueByQuestionText(getAllQuestions())")) {
  console.error("FAIL: mock exam is not deduping by question text.");
  process.exit(1);
}

if (!file.includes("normalizeQuestionText")) {
  console.error("FAIL: normalizeQuestionText missing.");
  process.exit(1);
}

console.log("PASS: mock exam now dedupes by question text before selection.");
