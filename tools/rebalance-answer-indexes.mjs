import fs from "fs";

const files = [
  "src/data/questionPacks/sciencePackV2.ts",
  "src/data/questionPacks/englishPackV2.ts",
  "src/data/questionPacks/filipinoPackV2.ts",
];

let moveBtoD = 55;
let moveCtoA = 25;

function parseChoices(raw) {
  const items = [];
  const re = /"([^"\\]*(?:\\.[^"\\]*)*)"|(-?\d+(?:\.\d+)?)/g;
  let m;

  while ((m = re.exec(raw))) {
    if (m[1] !== undefined) items.push({ type: "string", value: m[1] });
    else items.push({ type: "number", value: m[2] });
  }

  return items;
}

function serializeChoices(items) {
  const allStrings = items.every(i => i.type === "string");
  const allNumbers = items.every(i => i.type === "number");

  const rendered = items.map(i =>
    i.type === "string" ? JSON.stringify(i.value) : i.value
  );

  if (allNumbers) return `[${rendered.join(", ")}]`;

  return `[\n      ${rendered.join(",\n      ")}\n    ]`;
}

function moveCorrectChoice(items, currentIndex, targetIndex) {
  const correct = items[currentIndex];
  const rest = items.filter((_, i) => i !== currentIndex);
  rest.splice(targetIndex, 0, correct);
  return rest;
}

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");

  s = s.replace(/\n  \{[\s\S]*?\n  \},/g, block => {
    const id = block.match(/id:\s*"([^"]+)"/)?.[1] || "unknown";
    const choicesMatch = block.match(/choices:\s*\[([\s\S]*?)\],/);
    const answerMatch = block.match(/answerIndex:\s*(\d+),/);

    if (!choicesMatch || !answerMatch) return block;

    const currentIndex = Number(answerMatch[1]);
    let targetIndex = currentIndex;

    if (currentIndex === 1 && moveBtoD > 0) {
      targetIndex = 3;
      moveBtoD--;
    } else if (currentIndex === 2 && moveCtoA > 0) {
      targetIndex = 0;
      moveCtoA--;
    } else {
      return block;
    }

    const choices = parseChoices(choicesMatch[1]);

    if (choices.length !== 4) {
      console.log(`Skipped ${id}: choices length ${choices.length}`);
      return block;
    }

    const moved = moveCorrectChoice(choices, currentIndex, targetIndex);
    const newChoices = serializeChoices(moved);

    let next = block.replace(/choices:\s*\[[\s\S]*?\],/, `choices: ${newChoices},`);
    next = next.replace(/answerIndex:\s*\d+,/, `answerIndex: ${targetIndex},`);

    console.log(`Rebalanced ${id}: ${currentIndex} -> ${targetIndex}`);
    return next;
  });

  fs.writeFileSync(file, s);
}

console.log("Remaining B->D moves:", moveBtoD);
console.log("Remaining C->A moves:", moveCtoA);
