import { Question } from "@/types/questions";

export const mathPack: Question[] = [
  {
    id: "math-v1-001",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "hard",
    question:
      "If 2x + 3y = 18 and x − y = 2, what is the value of x?",
    choices: ["4.8", "5", "6", "7"],
    answerIndex: 0,
    explanation:
      "From x − y = 2, we get x = y + 2. Substitute into 2x + 3y = 18.",
    steps: [
      "x = y + 2",
      "2(y + 2) + 3y = 18",
      "2y + 4 + 3y = 18",
      "5y = 14",
      "y = 2.8",
      "x = 2.8 + 2 = 4.8",
    ],
    tip: "In system equations, isolate the simpler equation first.",
    tags: ["algebra", "systems"],
  },

  {
    id: "math-v1-002",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "beast",
    question:
      "A train travels 240 km in 3 hours. At the same rate, how far will it travel in 7 hours?",
    choices: ["480 km", "520 km", "560 km", "600 km"],
    answerIndex: 2,
    explanation:
      "Find the speed first, then multiply by the new time.",
    steps: [
      "Speed = 240 ÷ 3 = 80 km/h",
      "Distance = speed × time",
      "80 × 7 = 560 km",
    ],
    tip: "Most rate problems become easy once you identify speed.",
    tags: ["rate", "distance"],
  },

  {
    id: "math-v1-003",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "hard",
    question:
      "What is the area of a triangle with base 16 cm and height 9 cm?",
    choices: ["72 cm²", "81 cm²", "144 cm²", "160 cm²"],
    answerIndex: 0,
    explanation:
      "Use the triangle area formula: 1/2 × base × height.",
    steps: [
      "Area = 1/2 × 16 × 9",
      "Area = 8 × 9",
      "Area = 72 cm²",
    ],
    tip: "Always divide by 2 in triangle area problems.",
    tags: ["geometry", "area"],
  },

  {
    id: "math-v1-004",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "hard",
    question:
      "If two fair coins are tossed, what is the probability of getting exactly one head?",
    choices: ["1/4", "1/2", "3/4", "1"],
    answerIndex: 1,
    explanation:
      "List all possible outcomes and count the favorable ones.",
    steps: [
      "Possible outcomes: HH, HT, TH, TT",
      "Exactly one head: HT and TH",
      "2 favorable outcomes out of 4",
      "Probability = 2/4 = 1/2",
    ],
    tip: "Write the sample space when solving probability.",
    tags: ["probability"],
  },

  {
    id: "math-v1-005",
    subject: "Mathematics",
    topic: "Statistics",
    difficulty: "normal",
    question:
      "Find the mean of 4, 7, 9, 10, and 15.",
    choices: ["8", "9", "9.5", "10"],
    answerIndex: 1,
    explanation:
      "Add all the values and divide by the number of values.",
    steps: [
      "4 + 7 + 9 + 10 + 15 = 45",
      "45 ÷ 5 = 9",
    ],
    tip: "Mean = total sum divided by total count.",
    tags: ["statistics", "mean"],
  },

  {
    id: "math-v1-006",
    subject: "Mathematics",
    topic: "Sequences",
    difficulty: "hard",
    question:
      "What is the next number in the sequence: 3, 6, 12, 24, 48, ___?",
    choices: ["72", "84", "96", "100"],
    answerIndex: 2,
    explanation:
      "Each term is multiplied by 2.",
    steps: [
      "3 × 2 = 6",
      "6 × 2 = 12",
      "12 × 2 = 24",
      "24 × 2 = 48",
      "48 × 2 = 96",
    ],
    tip: "Check for repeated multiplication or addition patterns.",
    tags: ["patterns", "sequence"],
  },

  {
    id: "math-v1-007",
    subject: "Mathematics",
    topic: "Trigonometry",
    difficulty: "beast",
    question:
      "In a right triangle, if the opposite side is 6 and the hypotenuse is 10, what is sin θ?",
    choices: ["3/5", "4/5", "5/6", "6/5"],
    answerIndex: 0,
    explanation:
      "sin θ = opposite ÷ hypotenuse.",
    steps: [
      "sin θ = 6/10",
      "Simplify to 3/5",
    ],
    tip: "SOH-CAH-TOA is essential for trig problems.",
    tags: ["trigonometry"],
  },

  {
    id: "math-v1-008",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "beast",
    question:
      "If x² − 5x + 6 = 0, what are the values of x?",
    choices: ["1 and 6", "2 and 3", "−2 and −3", "−1 and −6"],
    answerIndex: 1,
    explanation:
      "Factor the quadratic equation.",
    steps: [
      "(x − 2)(x − 3) = 0",
      "x = 2 or x = 3",
    ],
    tip: "Look for factors that multiply to +6 and add to −5.",
    tags: ["quadratic"],
  },

  {
    id: "math-v1-009",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "hard",
    question:
      "A circle has a radius of 7 cm. What is its circumference? Use π = 22/7.",
    choices: ["22 cm", "33 cm", "44 cm", "49 cm"],
    answerIndex: 2,
    explanation:
      "Circumference formula: C = 2πr.",
    steps: [
      "C = 2 × (22/7) × 7",
      "C = 44 cm",
    ],
    tip: "Circumference uses the full distance around the circle.",
    tags: ["circle"],
  },

  {
    id: "math-v1-010",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "beast",
    question:
      "A boat travels 60 km downstream in 3 hours and upstream in 5 hours. What is the speed of the current?",
    choices: ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
    answerIndex: 2,
    explanation:
      "Downstream speed is faster than upstream speed because of the current.",
    steps: [
      "Downstream speed = 60 ÷ 3 = 20 km/h",
      "Upstream speed = 60 ÷ 5 = 12 km/h",
      "Current speed = (20 − 12) ÷ 2",
      "Current speed = 4 km/h",
    ],
    tip: "Current problems often use (downstream − upstream) ÷ 2.",
    tags: ["current", "rate"],
  },

  {
    id: "math-v1-011",
    subject: "Mathematics",
    topic: "Ratios",
    difficulty: "hard",
    question:
      "The ratio of boys to girls in a class is 3:5. If there are 40 students total, how many are boys?",
    choices: ["12", "15", "18", "20"],
    answerIndex: 1,
    explanation:
      "The total ratio parts are 3 + 5 = 8. Divide 40 by 8 to get one part.",
    steps: [
      "3 + 5 = 8 parts",
      "40 ÷ 8 = 5 students per part",
      "Boys = 3 × 5 = 15",
    ],
    tip: "Ratio problems usually require finding the value of one part first.",
    tags: ["ratio"],
  },

  {
    id: "math-v1-012",
    subject: "Mathematics",
    topic: "Age Problems",
    difficulty: "beast",
    question:
      "Maria is 4 years older than Ana. Five years ago, Maria was twice Ana's age. How old is Ana now?",
    choices: ["7", "8", "9", "10"],
    answerIndex: 2,
    explanation:
      "Translate the statements into equations carefully.",
    steps: [
      "Let Ana's present age = x",
      "Maria's age = x + 4",
      "Five years ago: x + 4 − 5 = 2(x − 5)",
      "x − 1 = 2x − 10",
      "9 = x",
      "Ana is 9 years old now",
    ],
    tip: "For age problems, define the present age first before adjusting time.",
    tags: ["age", "algebra"],
  },

  {
    id: "math-v1-013",
    subject: "Mathematics",
    topic: "Work Problems",
    difficulty: "beast",
    question:
      "If Worker A can finish a job in 6 days and Worker B can finish the same job in 3 days, how many days will they need working together?",
    choices: ["1 day", "2 days", "2.5 days", "3 days"],
    answerIndex: 1,
    explanation:
      "Add their work rates, not their days.",
    steps: [
      "A's rate = 1/6",
      "B's rate = 1/3",
      "Combined rate = 1/6 + 1/3",
      "Combined rate = 1/6 + 2/6 = 3/6 = 1/2",
      "Time = 2 days",
    ],
    tip: "In work problems, rates add together.",
    tags: ["work", "rate"],
  },

  {
    id: "math-v1-014",
    subject: "Mathematics",
    topic: "Sequences",
    difficulty: "hard",
    question:
      "Find the next number: 2, 5, 11, 23, 47, ___",
    choices: ["91", "93", "95", "97"],
    answerIndex: 2,
    explanation:
      "Each term is multiplied by 2 then increased by 1.",
    steps: [
      "2 × 2 + 1 = 5",
      "5 × 2 + 1 = 11",
      "11 × 2 + 1 = 23",
      "23 × 2 + 1 = 47",
      "47 × 2 + 1 = 95",
    ],
    tip: "Complex sequences often combine multiplication and addition.",
    tags: ["sequence", "patterns"],
  },

  {
    id: "math-v1-015",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "beast",
    question:
      "A bag contains 5 red balls, 3 blue balls, and 2 green balls. What is the probability of drawing a blue ball?",
    choices: ["1/10", "3/10", "1/3", "1/2"],
    answerIndex: 1,
    explanation:
      "Probability = favorable outcomes divided by total outcomes.",
    steps: [
      "Total balls = 5 + 3 + 2 = 10",
      "Blue balls = 3",
      "Probability = 3/10",
    ],
    tip: "Always count the total possible outcomes carefully.",
    tags: ["probability"],
  },
];