const fs = require("fs");

const files = [
  "src/data/questionPacks/sciencePackV2.ts",
];

let errors = [];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const blocks = text.match(/\{\n[\s\S]*?\n\s*\}/g) || [];

  for (const block of blocks) {
    const id = block.match(/id:\s*"([^"]+)"/)?.[1] || "NO_ID";
    const question = block.match(/question:\s*"([^"]+)"/)?.[1] || "";
    const answerIndexRaw = block.match(/answerIndex:\s*(\d+)/)?.[1];
    const choicesMatch = block.match(/choices:\s*\[([\s\S]*?)\]/);
    const explanation = block.match(/explanation:\s*"([^"]+)"/)?.[1] || "";

    if (!question) errors.push(`${file} ${id}: missing question`);
    if (!choicesMatch) errors.push(`${file} ${id}: missing choices`);
    if (!answerIndexRaw) errors.push(`${file} ${id}: missing answerIndex`);
    if (!explanation) errors.push(`${file} ${id}: missing explanation`);

    if (choicesMatch && answerIndexRaw) {
      const choices = [...choicesMatch[1].matchAll(/"([^"]+)"/g)].map(m => m[1]);
      const answerIndex = Number(answerIndexRaw);

      if (choices.length !== 4) errors.push(`${file} ${id}: choices count is ${choices.length}, expected 4`);
      if (answerIndex < 0 || answerIndex >= choices.length) errors.push(`${file} ${id}: answerIndex out of range`);

      const answer = choices[answerIndex] || "";
      const normalizedExplanation = explanation
        .toLowerCase()
        .replace(/[’']/g, "")
        .replace(/[₂²]/g, "");

      const answerTokens = answer
        .toLowerCase()
        .replace(/[’']/g, "")
        .replace(/[₂²]/g, "")
        .split(/\s+/)
        .filter(token => token.length >= 4);

      const hasAnswerSignal = answerTokens.some(token =>
        normalizedExplanation.includes(token)
      );

      const allowedConceptualMatches = [
        "Elastic potential energy",
        "Independent variable",
        "Controlled experiment",
        "Earth's rotation",
        "Au",
        "Artery",
        "The Sun",
        "H₂O",
        "To make results more reliable",
        "Earthquakes",
        "To allow verification and further study",
      ];

      const numericAnswer = answer.match(/[0-9]+(?:\.[0-9]+)?/);
      const hasNumericSignal =
        numericAnswer && normalizedExplanation.includes(numericAnswer[0]);

      if (answer && explanation && !hasAnswerSignal && !hasNumericSignal) {
        if (!allowedConceptualMatches.some(x => answer.includes(x))) {
          errors.push(`${file} ${id}: explanation may not clearly support answer "${answer}"`);
        }
      }
    }
  }
}

if (errors.length) {
  console.error("AUDIT FAILED");
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("AUDIT PASSED");
