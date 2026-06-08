const fs = require("fs");

const files = [
  "src/data/questionPacks/sciencePack.ts",
  "src/data/generated/scienceGenerated001.ts"
];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");

  const matches = [...text.matchAll(
    /question:"([^"]+)"[\s\S]{0,600}?explanation:"Water is correct\."/g
  )];

  console.log("\n====================");
  console.log(file);
  console.log("====================");

  matches.forEach((m, i) => {
    console.log(`${i + 1}. ${m[1]}`);
  });
}
