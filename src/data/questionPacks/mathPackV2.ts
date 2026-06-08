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
];
