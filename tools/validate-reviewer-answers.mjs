import fs from "fs";

const files = [
  "src/data/private/collegio/science/scienceAssessmentReview.ts",
  "src/data/private/collegio/math/mathAssessmentReview.ts",
  "src/data/private/collegio/language/languageAssessmentReview.ts",
  "src/data/private/collegio/abstract/abstractAssessmentReview.ts",
];

let failed = false;

for (const file of files) {
  const s = fs.readFileSync(file, "utf8");

  if (/Correct choice:\s*[A-D]/i.test(s)) {
    console.error(`FAILED: letter-only answer found in ${file}`);
    failed = true;
  }
}

if (failed) process.exit(1);

console.log("Reviewer answers clean: no letter-only answers found.");
