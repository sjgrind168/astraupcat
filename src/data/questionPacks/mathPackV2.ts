import { Question } from "@/types/questions";

export const mathPackV2: Question[] = [
  {
    id: "math-v2-001",
    subject: "Mathematics",
    topic: "Arithmetic",
    difficulty: "normal",
    question: "What is 15% of 200?",
    choices: [20, 25, 30, 35],
    answerIndex: 2,
    explanation: "15% of 200 is 0.15 × 200 = 30.",
    steps: [
      "Convert 15% to decimal: 0.15",
      "Multiply 0.15 × 200",
      "Result = 30"
    ],
    tip: "Percent means per hundred.",
  },

  {
    id: "math-v2-002",
    subject: "Mathematics",
    topic: "Arithmetic",
    difficulty: "normal",
    question: "A shirt costs ₱800 and is discounted by 25%. What is the sale price?",
    choices: ["₱500", "₱600", "₱650", "₱700"],
    answerIndex: 1,
    explanation: "25% of ₱800 is ₱200. Subtracting gives ₱600.",
    steps: [
      "Find 25% of 800: 0.25 × 800 = 200",
      "Subtract discount: 800 − 200 = 600"
    ],
    tip: "Sale price = original price minus discount.",
  },

  {
    id: "math-v2-003",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "normal",
    question: "Solve for x: 3x + 5 = 20",
    choices: [3, 4, 5, 6],
    answerIndex: 2,
    explanation: "Subtract 5 from both sides to get 3x = 15, then divide by 3 to get x = 5.",
    steps: [
      "3x + 5 = 20",
      "3x = 15",
      "x = 5"
    ],
    tip: "Undo addition before division.",
  },

  {
    id: "math-v2-004",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "normal",
    question: "Solve for x: 5x = 45",
    choices: [7, 8, 9, 10],
    answerIndex: 2,
    explanation: "Divide both sides by 5: x = 45 ÷ 5 = 9.",
    steps: [
      "5x = 45",
      "x = 45 ÷ 5",
      "x = 9"
    ],
    tip: "Isolate x using inverse operations.",
  },

  {
    id: "math-v2-005",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "What is the area of a rectangle with length 8 and width 5?",
    choices: [13, 26, 40, 45],
    answerIndex: 2,
    explanation: "Area of a rectangle = length × width = 8 × 5 = 40.",
    steps: [
      "Area = length × width",
      "8 × 5 = 40"
    ],
    tip: "Rectangle area uses multiplication.",
  },

  {
    id: "math-v2-006",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "What is the perimeter of a square with side length 7?",
    choices: [14, 21, 28, 35],
    answerIndex: 2,
    explanation: "Perimeter of a square = 4 × side length = 4 × 7 = 28.",
    steps: [
      "Perimeter = 4 × side",
      "4 × 7 = 28"
    ],
    tip: "A square has four equal sides.",
  },

  {
    id: "math-v2-007",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "normal",
    question: "What is 1/2 + 1/4?",
    choices: ["1/4", "2/4", "3/4", "4/4"],
    answerIndex: 2,
    explanation: "Convert 1/2 into 2/4, then add: 2/4 + 1/4 = 3/4.",
    steps: [
      "1/2 = 2/4",
      "2/4 + 1/4 = 3/4"
    ],
    tip: "Use common denominators when adding fractions.",
  },

  {
    id: "math-v2-008",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "normal",
    question: "What is 3/5 of 20?",
    choices: [10, 12, 15, 18],
    answerIndex: 1,
    explanation: "3/5 of 20 means (3 ÷ 5) × 20 = 12.",
    steps: [
      "3 ÷ 5 = 0.6",
      "0.6 × 20 = 12"
    ],
    tip: "“Of” usually means multiply.",
  },

  {
    id: "math-v2-009",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "normal",
    question: "A bus travels 240 km in 4 hours. What is its average speed?",
    choices: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    answerIndex: 2,
    explanation: "Average speed = distance ÷ time = 240 ÷ 4 = 60 km/h.",
    steps: [
      "Speed = distance ÷ time",
      "240 ÷ 4 = 60"
    ],
    tip: "Use the formula speed = distance ÷ time.",
  },

  {
    id: "math-v2-010",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "normal",
    question: "Maria bought 3 notebooks costing ₱25 each. How much did she spend in total?",
    choices: ["₱50", "₱65", "₱75", "₱85"],
    answerIndex: 2,
    explanation: "Multiply the number of notebooks by the price each: 3 × 25 = 75.",
    steps: [
      "3 notebooks × ₱25 each",
      "3 × 25 = 75"
    ],
    tip: "Total cost = quantity × price per item.",
  },
  {
    id: "math-v2-011",
    subject: "Mathematics",
    topic: "Arithmetic",
    difficulty: "normal",
    question: "What is 20% of 150?",
    choices: [20, 25, 30, 35],
    answerIndex: 2,
    explanation: "20% of 150 is 0.20 × 150 = 30.",
    steps: [
      "Convert 20% to decimal: 0.20",
      "Multiply 0.20 × 150",
      "Result = 30"
    ],
    tip: "Percent means divide by 100.",
  },

  {
    id: "math-v2-012",
    subject: "Mathematics",
    topic: "Arithmetic",
    difficulty: "normal",
    question: "A bag costs ₱1200 and is discounted by 10%. What is the sale price?",
    choices: ["₱1000", "₱1080", "₱1100", "₱1150"],
    answerIndex: 1,
    explanation: "10% of ₱1200 is ₱120. Subtracting gives ₱1080.",
    steps: [
      "0.10 × 1200 = 120",
      "1200 − 120 = 1080"
    ],
    tip: "Subtract the discount from the original price.",
  },

  {
    id: "math-v2-013",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "normal",
    question: "Solve for x: x + 18 = 45",
    choices: [25, 27, 29, 31],
    answerIndex: 1,
    explanation: "Subtract 18 from both sides: x = 45 − 18 = 27.",
    steps: [
      "x + 18 = 45",
      "x = 45 − 18",
      "x = 27"
    ],
    tip: "Undo addition using subtraction.",
  },

  {
    id: "math-v2-014",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "normal",
    question: "Solve for x: 4x = 52",
    choices: [11, 12, 13, 14],
    answerIndex: 2,
    explanation: "Divide both sides by 4: x = 52 ÷ 4 = 13.",
    steps: [
      "4x = 52",
      "x = 52 ÷ 4",
      "x = 13"
    ],
    tip: "Use inverse operations to isolate x.",
  },

  {
    id: "math-v2-015",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "What is the area of a triangle with base 10 and height 6?",
    choices: [16, 30, 40, 60],
    answerIndex: 1,
    explanation: "Area of a triangle = (base × height) ÷ 2 = (10 × 6) ÷ 2 = 30.",
    steps: [
      "Area = (b × h) ÷ 2",
      "(10 × 6) ÷ 2 = 30"
    ],
    tip: "Triangle area is half of a rectangle with the same base and height.",
  },

  {
    id: "math-v2-016",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "A circle has a radius of 7. What is its diameter?",
    choices: [7, 12, 14, 21],
    answerIndex: 2,
    explanation: "Diameter = 2 × radius = 2 × 7 = 14.",
    steps: [
      "Diameter = 2r",
      "2 × 7 = 14"
    ],
    tip: "Diameter is twice the radius.",
  },

  {
    id: "math-v2-017",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "normal",
    question: "What is 2/3 + 1/3?",
    choices: ["1/3", "2/3", "1", "4/3"],
    answerIndex: 2,
    explanation: "Add the numerators because the denominators are the same: 2/3 + 1/3 = 3/3 = 1.",
    steps: [
      "2/3 + 1/3 = 3/3",
      "3/3 = 1"
    ],
    tip: "Fractions with the same denominator are easier to add.",
  },

  {
    id: "math-v2-018",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "normal",
    question: "What is 3/4 of 32?",
    choices: [18, 20, 24, 28],
    answerIndex: 2,
    explanation: "3/4 of 32 means (3 ÷ 4) × 32 = 24.",
    steps: [
      "3 ÷ 4 = 0.75",
      "0.75 × 32 = 24"
    ],
    tip: "“Of” means multiply.",
  },

  {
    id: "math-v2-019",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "normal",
    question: "A car travels 360 km in 6 hours. What is its average speed?",
    choices: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answerIndex: 2,
    explanation: "Average speed = distance ÷ time = 360 ÷ 6 = 60 km/h.",
    steps: [
      "Speed = distance ÷ time",
      "360 ÷ 6 = 60"
    ],
    tip: "Use the speed formula carefully.",
  },

  {
    id: "math-v2-020",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "normal",
    question: "John bought 5 pens costing ₱12 each. How much did he spend in total?",
    choices: ["₱48", "₱50", "₱60", "₱72"],
    answerIndex: 2,
    explanation: "Multiply quantity by price each: 5 × 12 = 60.",
    steps: [
      "5 pens × ₱12 each",
      "5 × 12 = 60"
    ],
    tip: "Total cost = quantity × unit price.",
  },
  {
    id: "math-v2-021",
    subject: "Mathematics",
    topic: "Arithmetic",
    difficulty: "normal",
    question: "What is 35% of 400?",
    choices: [120, 140, 160, 180],
    answerIndex: 1,
    explanation: "35% of 400 is 0.35 × 400 = 140.",
    steps: [
      "Convert 35% to decimal: 0.35",
      "Multiply 0.35 × 400",
      "Result = 140"
    ],
    tip: "Convert percentages to decimals before multiplying.",
  },

  {
    id: "math-v2-022",
    subject: "Mathematics",
    topic: "Arithmetic",
    difficulty: "normal",
    question: "A phone costs ₱5000 and is discounted by 20%. What is the sale price?",
    choices: ["₱3500", "₱4000", "₱4500", "₱4800"],
    answerIndex: 1,
    explanation: "20% of ₱5000 is ₱1000. Subtracting gives ₱4000.",
    steps: [
      "0.20 × 5000 = 1000",
      "5000 − 1000 = 4000"
    ],
    tip: "Sale price = original price − discount.",
  },

  {
    id: "math-v2-023",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "normal",
    question: "Solve for x: 2x + 6 = 18",
    choices: [4, 5, 6, 7],
    answerIndex: 2,
    explanation: "Subtract 6 from both sides to get 2x = 12, then divide by 2 to get x = 6.",
    steps: [
      "2x + 6 = 18",
      "2x = 12",
      "x = 6"
    ],
    tip: "Undo addition before division.",
  },

  {
    id: "math-v2-024",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "normal",
    question: "Solve for x: 7x = 63",
    choices: [7, 8, 9, 10],
    answerIndex: 2,
    explanation: "Divide both sides by 7: x = 63 ÷ 7 = 9.",
    steps: [
      "7x = 63",
      "x = 63 ÷ 7",
      "x = 9"
    ],
    tip: "Use inverse operations to isolate the variable.",
  },

  {
    id: "math-v2-025",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "What is the area of a square with side length 9?",
    choices: [18, 36, 72, 81],
    answerIndex: 3,
    explanation: "Area of a square = side × side = 9 × 9 = 81.",
    steps: [
      "Area = side²",
      "9 × 9 = 81"
    ],
    tip: "Square area uses side multiplied by itself.",
  },

  {
    id: "math-v2-026",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "What is the circumference of a circle with diameter 10? (Use π = 3.14)",
    choices: [15.7, 25.6, 31.4, 62.8],
    answerIndex: 2,
    explanation: "Circumference = π × diameter = 3.14 × 10 = 31.4.",
    steps: [
      "Circumference = πd",
      "3.14 × 10 = 31.4"
    ],
    tip: "Circumference measures the distance around a circle.",
  },

  {
    id: "math-v2-027",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "normal",
    question: "What is 5/8 + 1/8?",
    choices: ["5/16", "6/8", "7/8", "1"],
    answerIndex: 1,
    explanation: "Add the numerators since the denominators are the same: 5/8 + 1/8 = 6/8.",
    steps: [
      "5 + 1 = 6",
      "Result = 6/8"
    ],
    tip: "Keep the denominator when adding like fractions.",
  },

  {
    id: "math-v2-028",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "normal",
    question: "What is 2/5 of 45?",
    choices: [15, 18, 20, 25],
    answerIndex: 1,
    explanation: "2/5 of 45 means (2 ÷ 5) × 45 = 18.",
    steps: [
      "2 ÷ 5 = 0.4",
      "0.4 × 45 = 18"
    ],
    tip: "“Of” means multiply.",
  },

  {
    id: "math-v2-029",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "normal",
    question: "A train travels 420 km in 7 hours. What is its average speed?",
    choices: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answerIndex: 2,
    explanation: "Average speed = distance ÷ time = 420 ÷ 7 = 60 km/h.",
    steps: [
      "Speed = distance ÷ time",
      "420 ÷ 7 = 60"
    ],
    tip: "Use the speed formula carefully.",
  },

  {
    id: "math-v2-030",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "normal",
    question: "A box contains 12 packs with 8 candies each. How many candies are there in total?",
    choices: [84, 88, 96, 104],
    answerIndex: 2,
    explanation: "Multiply the number of packs by candies per pack: 12 × 8 = 96.",
    steps: [
      "12 packs × 8 candies",
      "12 × 8 = 96"
    ],
    tip: "Total items = groups × items per group.",
  },
  {
    id: "math-v2-031",
    subject: "Mathematics",
    topic: "Arithmetic",
    difficulty: "normal",
    question: "What is 45% of 200?",
    choices: [70, 80, 90, 100],
    answerIndex: 2,
    explanation: "45% of 200 is 0.45 × 200 = 90.",
    steps: [
      "Convert 45% to decimal: 0.45",
      "Multiply 0.45 × 200",
      "Result = 90"
    ],
    tip: "Convert percentages into decimals before multiplying.",
  },

  {
    id: "math-v2-032",
    subject: "Mathematics",
    topic: "Arithmetic",
    difficulty: "normal",
    question: "A jacket costs ₱2500 and is discounted by 15%. What is the sale price?",
    choices: ["₱2000", "₱2125", "₱2250", "₱2375"],
    answerIndex: 1,
    explanation: "15% of ₱2500 is ₱375. Subtracting gives ₱2125.",
    steps: [
      "0.15 × 2500 = 375",
      "2500 − 375 = 2125"
    ],
    tip: "Sale price = original price minus discount.",
  },

  {
    id: "math-v2-033",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "normal",
    question: "Solve for x: 6x + 4 = 40",
    choices: [4, 5, 6, 7],
    answerIndex: 2,
    explanation: "Subtract 4 from both sides to get 6x = 36, then divide by 6 to get x = 6.",
    steps: [
      "6x + 4 = 40",
      "6x = 36",
      "x = 6"
    ],
    tip: "Undo addition before division.",
  },

  {
    id: "math-v2-034",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "normal",
    question: "Solve for x: 9x = 81",
    choices: [7, 8, 9, 10],
    answerIndex: 2,
    explanation: "Divide both sides by 9: x = 81 ÷ 9 = 9.",
    steps: [
      "9x = 81",
      "x = 81 ÷ 9",
      "x = 9"
    ],
    tip: "Use inverse operations to isolate the variable.",
  },

  {
    id: "math-v2-035",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "What is the area of a rectangle with length 12 and width 7?",
    choices: [72, 84, 96, 108],
    answerIndex: 1,
    explanation: "Area of a rectangle = length × width = 12 × 7 = 84.",
    steps: [
      "Area = length × width",
      "12 × 7 = 84"
    ],
    tip: "Rectangle area uses multiplication.",
  },

  {
    id: "math-v2-036",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "A triangle has base 8 and height 5. What is its area?",
    choices: [20, 25, 30, 40],
    answerIndex: 0,
    explanation: "Area of a triangle = (base × height) ÷ 2 = (8 × 5) ÷ 2 = 20.",
    steps: [
      "(8 × 5) ÷ 2",
      "40 ÷ 2 = 20"
    ],
    tip: "Triangle area is half the rectangle area.",
  },

  {
    id: "math-v2-037",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "normal",
    question: "What is 1/6 + 2/6?",
    choices: ["1/2", "2/3", "3/6", "4/6"],
    answerIndex: 2,
    explanation: "Add the numerators because denominators are equal: 1/6 + 2/6 = 3/6.",
    steps: [
      "1 + 2 = 3",
      "Result = 3/6"
    ],
    tip: "Keep the denominator when adding like fractions.",
  },

  {
    id: "math-v2-038",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "normal",
    question: "What is 4/5 of 25?",
    choices: [15, 18, 20, 22],
    answerIndex: 2,
    explanation: "4/5 of 25 means (4 ÷ 5) × 25 = 20.",
    steps: [
      "4 ÷ 5 = 0.8",
      "0.8 × 25 = 20"
    ],
    tip: "“Of” means multiply.",
  },

  {
    id: "math-v2-039",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "normal",
    question: "A plane travels 900 km in 3 hours. What is its average speed?",
    choices: ["200 km/h", "250 km/h", "300 km/h", "350 km/h"],
    answerIndex: 2,
    explanation: "Average speed = distance ÷ time = 900 ÷ 3 = 300 km/h.",
    steps: [
      "Speed = distance ÷ time",
      "900 ÷ 3 = 300"
    ],
    tip: "Use the speed formula carefully.",
  },

  {
    id: "math-v2-040",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "normal",
    question: "A bakery sold 14 boxes with 6 cupcakes each. How many cupcakes were sold in total?",
    choices: [72, 78, 84, 90],
    answerIndex: 2,
    explanation: "Multiply the number of boxes by cupcakes per box: 14 × 6 = 84.",
    steps: [
      "14 × 6 = 84"
    ],
    tip: "Total items = groups × items per group.",
  },
  {
    id: "math-v2-041",
    subject: "Mathematics",
    topic: "Percentages",
    difficulty: "normal",
    question: "What is 35% of 240?",
    choices: [72, 84, 96, 70],
    answerIndex: 1,
    explanation: "35% of 240 is 0.35 × 240 = 84.",
    tip: "Convert percent into decimal form.",
  },

  {
    id: "math-v2-042",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "normal",
    question: "Solve for x: 5x - 9 = 31",
    choices: [6, 7, 8, 9],
    answerIndex: 2,
    explanation: "Add 9 to both sides: 5x = 40. Divide by 5: x = 8.",
    tip: "Isolate the variable step by step.",
  },

  {
    id: "math-v2-043",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "What is the area of a triangle with base 12 cm and height 9 cm?",
    choices: ["54 cm²", "96 cm²", "108 cm²", "48 cm²"],
    answerIndex: 0,
    explanation: "Area = 1/2 × base × height = 1/2 × 12 × 9 = 54 cm².",
    tip: "Triangle area uses one-half of base times height.",
  },

  {
    id: "math-v2-044",
    subject: "Mathematics",
    topic: "Ratios",
    difficulty: "normal",
    question: "The ratio of cats to dogs in a shelter is 7:5. If there are 35 cats, how many dogs are there?",
    choices: [20, 25, 30, 40],
    answerIndex: 1,
    explanation: "7 parts = 35, so 1 part = 5. Dogs = 5 × 5 = 25.",
    tip: "Find the value of one ratio part first.",
  },

  {
    id: "math-v2-045",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "normal",
    question: "A coin is flipped once. What is the probability of getting tails?",
    choices: ["1/4", "1/3", "1/2", "3/4"],
    answerIndex: 2,
    explanation: "There are 2 equally likely outcomes, so probability is 1/2.",
    tip: "Probability = favorable outcomes ÷ total outcomes.",
  },

  {
    id: "math-v2-046",
    subject: "Mathematics",
    topic: "Averages",
    difficulty: "hard",
    question: "The average of four numbers is 18. If three numbers are 12, 20, and 22, what is the fourth number?",
    choices: [16, 18, 20, 24],
    answerIndex: 1,
    explanation: "Total needed = 4 × 18 = 72. Known sum = 54. Fourth number = 18.",
    tip: "Average × number of values gives the total sum.",
  },

  {
    id: "math-v2-047",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "hard",
    question: "A bus travels 180 km in 3 hours. What is its average speed?",
    choices: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answerIndex: 2,
    explanation: "Average speed = distance ÷ time = 180 ÷ 3 = 60 km/h.",
    tip: "Speed = distance ÷ time.",
  },

  {
    id: "math-v2-048",
    subject: "Mathematics",
    topic: "Sequences",
    difficulty: "hard",
    question: "What comes next in the sequence? 4, 9, 16, 25, ?",
    choices: [30, 35, 36, 49],
    answerIndex: 2,
    explanation: "These are perfect squares: 2², 3², 4², 5². Next is 6² = 36.",
    tip: "Look for hidden square patterns.",
  },

  {
    id: "math-v2-049",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "normal",
    question: "What is 5/6 + 1/3?",
    choices: ["1", "7/6", "8/9", "3/2"],
    answerIndex: 1,
    explanation: "1/3 = 2/6, so 5/6 + 2/6 = 7/6.",
    tip: "Use a common denominator.",
  },

  {
    id: "math-v2-050",
    subject: "Mathematics",
    topic: "Decimals",
    difficulty: "normal",
    question: "What is 0.75 × 40?",
    choices: [25, 28, 30, 35],
    answerIndex: 2,
    explanation: "0.75 × 40 = 30.",
    tip: "Convert decimals carefully during multiplication.",
  },

  {
    id: "math-v2-051",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "What is the circumference of a circle with radius 7 cm? Use π = 22/7.",
    choices: ["22 cm", "44 cm", "49 cm", "56 cm"],
    answerIndex: 1,
    explanation: "Circumference = 2πr = 2 × 22/7 × 7 = 44 cm.",
    tip: "Circumference uses 2πr.",
  },

  {
    id: "math-v2-052",
    subject: "Mathematics",
    topic: "Percentages",
    difficulty: "hard",
    question: "A jacket originally costs ₱2,400 and is discounted by 25%. What is the sale price?",
    choices: ["₱1,600", "₱1,700", "₱1,800", "₱1,900"],
    answerIndex: 2,
    explanation: "25% of 2400 is 600. Sale price = 2400 − 600 = 1800.",
    tip: "Subtract the discount from the original price.",
  },

  {
    id: "math-v2-053",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "hard",
    question: "Solve for x: 4(x + 3) = 32",
    choices: [4, 5, 6, 8],
    answerIndex: 1,
    explanation: "Divide both sides by 4: x + 3 = 8. Therefore x = 5.",
    tip: "Undo multiplication before subtraction.",
  },

  {
    id: "math-v2-054",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "normal",
    question: "A die is rolled once. What is the probability of getting an even number?",
    choices: ["1/6", "1/3", "1/2", "2/3"],
    answerIndex: 2,
    explanation: "Even numbers are 2, 4, and 6. So probability = 3/6 = 1/2.",
    tip: "Count favorable outcomes carefully.",
  },

  {
    id: "math-v2-055",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "hard",
    question: "Maria bought 3 notebooks costing ₱45 each and paid with ₱200. How much change did she receive?",
    choices: ["₱55", "₱60", "₱65", "₱70"],
    answerIndex: 2,
    explanation: "Total cost = 3 × 45 = 135. Change = 200 − 135 = 65.",
    tip: "Compute total cost before subtraction.",
  },

  {
    id: "math-v2-056",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "normal",
    question: "A square has side length 11 cm. What is its perimeter?",
    choices: ["22 cm", "33 cm", "44 cm", "55 cm"],
    answerIndex: 2,
    explanation: "Perimeter of a square = 4 × side = 44 cm.",
    tip: "All sides of a square are equal.",
  },

  {
    id: "math-v2-057",
    subject: "Mathematics",
    topic: "Ratios",
    difficulty: "hard",
    question: "The ratio of teachers to students is 1:18. If there are 9 teachers, how many students are there?",
    choices: [144, 152, 162, 171],
    answerIndex: 2,
    explanation: "1 teacher corresponds to 18 students. 9 × 18 = 162.",
    tip: "Multiply ratio values carefully.",
  },

  {
    id: "math-v2-058",
    subject: "Mathematics",
    topic: "Sequences",
    difficulty: "hard",
    question: "What comes next in the sequence? 3, 6, 12, 24, ?",
    choices: [36, 42, 48, 54],
    answerIndex: 2,
    explanation: "Each term doubles: 24 × 2 = 48.",
    tip: "Check for multiplication patterns.",
  },

  {
    id: "math-v2-059",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "normal",
    question: "What is 7/8 − 1/4?",
    choices: ["3/8", "5/8", "1/2", "7/12"],
    answerIndex: 1,
    explanation: "1/4 = 2/8, so 7/8 − 2/8 = 5/8.",
    tip: "Convert fractions to common denominators.",
  },

  {
    id: "math-v2-060",
    subject: "Mathematics",
    topic: "Decimals",
    difficulty: "normal",
    question: "What is 2.5 + 3.75?",
    choices: ["5.75", "6.00", "6.25", "6.50"],
    answerIndex: 2,
    explanation: "2.5 + 3.75 = 6.25.",
    tip: "Align decimal places before adding.",
  },
  {
    id: "math-v2-061",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "hard",
    question: "Solve for x: 7x - 13 = 36",
    choices: [7, 6, 5, 8],
    answerIndex: 0,
    explanation: "Add 13: 7x = 49. Divide by 7: x = 7.",
    tip: "Undo subtraction before division.",
  },
  {
    id: "math-v2-062",
    subject: "Mathematics",
    topic: "Percentages",
    difficulty: "normal",
    question: "What is 18% of 250?",
    choices: [40, 42, 44, 45],
    answerIndex: 3,
    explanation: "0.18 × 250 = 45.",
    tip: "Convert percentages into decimals.",
  },
  {
    id: "math-v2-063",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "hard",
    question: "What is the perimeter of a rectangle with length 18 cm and width 11 cm?",
    choices: ["58 cm", "54 cm", "62 cm", "56 cm"],
    answerIndex: 0,
    explanation: "Perimeter = 2(l + w) = 2(18 + 11) = 58 cm.",
    tip: "Add all sides or use 2(l+w).",
  },
  {
    id: "math-v2-064",
    subject: "Mathematics",
    topic: "Ratios",
    difficulty: "hard",
    question: "The ratio of red marbles to blue marbles is 5:8. If there are 40 blue marbles, how many red marbles are there?",
    choices: [20, 25, 30, 35],
    answerIndex: 1,
    explanation: "8 parts = 40, so 1 part = 5. Red marbles = 5 × 5 = 25.",
    tip: "Find one ratio unit first.",
  },
  {
    id: "math-v2-065",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "hard",
    question: "A box contains 4 yellow balls, 5 green balls, and 1 black ball. What is the probability of drawing a black ball?",
    choices: ["1/10", "1/5", "1/4", "1/2"],
    answerIndex: 0,
    explanation: "Total balls = 10. Black balls = 1. Probability = 1/10.",
    tip: "Probability = favorable ÷ total outcomes.",
  },
  {
    id: "math-v2-066",
    subject: "Mathematics",
    topic: "Sequences",
    difficulty: "hard",
    question: "What comes next in the sequence? 7, 14, 28, 56, ?",
    choices: [98, 102, 112, 120],
    answerIndex: 2,
    explanation: "Each term doubles: 56 × 2 = 112.",
    tip: "Check multiplication progression.",
  },
  {
    id: "math-v2-067",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "hard",
    question: "A delivery truck traveled 540 km in 9 hours. What was its average speed?",
    choices: ["55 km/h", "60 km/h", "65 km/h", "70 km/h"],
    answerIndex: 1,
    explanation: "Average speed = 540 ÷ 9 = 60 km/h.",
    tip: "Speed = distance ÷ time.",
  },
  {
    id: "math-v2-068",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "hard",
    question: "What is 5/12 + 1/3?",
    choices: ["3/4", "5/6", "7/12", "2/3"],
    answerIndex: 0,
    explanation: "1/3 = 4/12, so 5/12 + 4/12 = 9/12 = 3/4.",
    tip: "Use common denominators.",
  },
  {
    id: "math-v2-069",
    subject: "Mathematics",
    topic: "Decimals",
    difficulty: "hard",
    question: "What is 6.4 × 0.5?",
    choices: [3.0, 3.2, 3.4, 3.6],
    answerIndex: 1,
    explanation: "Half of 6.4 is 3.2.",
    tip: "Multiplying by 0.5 means taking half.",
  },
  {
    id: "math-v2-070",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "hard",
    question: "If 4x + 9 = 45, what is the value of x?",
    choices: [7, 8, 9, 10],
    answerIndex: 2,
    explanation: "4x = 36, so x = 9.",
    tip: "Isolate the variable step by step.",
  },
];
