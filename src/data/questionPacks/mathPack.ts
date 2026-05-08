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

  {
    id: "math-v1-016",
    subject: "Mathematics",
    topic: "Percentages",
    difficulty: "hard",
    question:
      "What is 35% of 240?",
    choices: ["72", "84", "96", "108"],
    answerIndex: 1,
    explanation:
      "Convert the percentage into decimal form, then multiply.",
    steps: [
      "35% = 0.35",
      "0.35 × 240 = 84",
    ],
    tip: "To find a percentage of a number, multiply.",
    tags: ["percentage"],
  },

  {
    id: "math-v1-017",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "beast",
    question:
      "A rectangle has a length of 15 cm and a width of 8 cm. What is its perimeter?",
    choices: ["46 cm", "48 cm", "50 cm", "52 cm"],
    answerIndex: 0,
    explanation:
      "Perimeter of a rectangle is 2(length + width).",
    steps: [
      "15 + 8 = 23",
      "2 × 23 = 46",
    ],
    tip: "Perimeter measures the distance around the figure.",
    tags: ["geometry", "perimeter"],
  },

  {
    id: "math-v1-018",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "beast",
    question:
      "If 4x − 7 = 21, what is the value of x?",
    choices: ["5", "6", "7", "8"],
    answerIndex: 2,
    explanation:
      "Solve the equation step-by-step.",
    steps: [
      "4x − 7 = 21",
      "4x = 28",
      "x = 7",
    ],
    tip: "Move constants first before dividing.",
    tags: ["algebra"],
  },

  {
    id: "math-v1-019",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "hard",
    question:
      "A die is rolled once. What is the probability of getting an even number?",
    choices: ["1/6", "1/3", "1/2", "2/3"],
    answerIndex: 2,
    explanation:
      "Even numbers on a die are 2, 4, and 6.",
    steps: [
      "Possible outcomes = 6",
      "Even outcomes = 3",
      "Probability = 3/6 = 1/2",
    ],
    tip: "Probability = favorable outcomes ÷ total outcomes.",
    tags: ["probability", "dice"],
  },

  {
    id: "math-v1-020",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "beast",
    question:
      "A car travels 150 km in 2.5 hours. What is its average speed?",
    choices: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answerIndex: 2,
    explanation:
      "Average speed is distance divided by time.",
    steps: [
      "Speed = 150 ÷ 2.5",
      "Speed = 60 km/h",
    ],
    tip: "Average speed = total distance ÷ total time.",
    tags: ["speed", "rate"],
  },
  {
    id: "math-v1-021",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "hard",
    question:
      "What is 3/4 + 2/5?",
    choices: ["23/20", "7/10", "15/20", "1"],
    answerIndex: 0,
    explanation:
      "Use a common denominator before adding fractions.",
    steps: [
      "Common denominator of 4 and 5 is 20",
      "3/4 = 15/20",
      "2/5 = 8/20",
      "15/20 + 8/20 = 23/20",
    ],
    tip: "Always find the least common denominator first.",
    tags: ["fractions"],
  },

  {
    id: "math-v1-022",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "beast",
    question:
      "A square has an area of 144 cm². What is the length of one side?",
    choices: ["10 cm", "11 cm", "12 cm", "13 cm"],
    answerIndex: 2,
    explanation:
      "The side of a square is the square root of its area.",
    steps: [
      "Area = side²",
      "side² = 144",
      "side = √144 = 12",
    ],
    tip: "Squares have equal sides, so area is side × side.",
    tags: ["square", "geometry"],
  },

  {
    id: "math-v1-023",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "hard",
    question:
      "Simplify: 5(2x − 3) + 4",
    choices: ["10x − 11", "10x − 15", "9x − 11", "10x + 1"],
    answerIndex: 0,
    explanation:
      "Distribute 5 to both terms inside the parentheses.",
    steps: [
      "5 × 2x = 10x",
      "5 × (−3) = −15",
      "10x − 15 + 4",
      "10x − 11",
    ],
    tip: "Be careful with negative signs during distribution.",
    tags: ["algebra", "distribution"],
  },

  {
    id: "math-v1-024",
    subject: "Mathematics",
    topic: "Percentages",
    difficulty: "beast",
    question:
      "A shirt originally costs ₱800 and is discounted by 25%. What is the sale price?",
    choices: ["₱500", "₱550", "₱600", "₱650"],
    answerIndex: 2,
    explanation:
      "Find the discount amount, then subtract from the original price.",
    steps: [
      "25% of 800 = 0.25 × 800 = 200",
      "800 − 200 = 600",
    ],
    tip: "Discount problems are subtraction problems after finding the percentage.",
    tags: ["discount", "percentage"],
  },

  {
    id: "math-v1-025",
    subject: "Mathematics",
    topic: "Sequences",
    difficulty: "beast",
    question:
      "Find the next number: 1, 4, 9, 16, 25, ___",
    choices: ["30", "35", "36", "49"],
    answerIndex: 2,
    explanation:
      "These are perfect squares.",
    steps: [
      "1 = 1²",
      "4 = 2²",
      "9 = 3²",
      "16 = 4²",
      "25 = 5²",
      "Next = 6² = 36",
    ],
    tip: "Check whether terms are squares, cubes, or powers.",
    tags: ["sequence", "patterns"],
  },

  {
    id: "math-v1-026",
    subject: "Mathematics",
    topic: "Decimals",
    difficulty: "hard",
    question: "What is 0.75 × 0.4?",
    choices: ["0.03", "0.3", "3", "30"],
    answerIndex: 1,
    explanation: "Multiply normally then count decimal places.",
    steps: [
      "75 × 4 = 300",
      "Two decimal places total",
      "Answer = 0.30 = 0.3",
    ],
    tip: "Ignore decimals first, then place them back later.",
    tags: ["decimals"],
  },

  {
    id: "math-v1-027",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "hard",
    question: "If 3x + 8 = 29, what is x?",
    choices: ["5", "6", "7", "8"],
    answerIndex: 2,
    explanation: "Isolate the variable.",
    steps: [
      "3x = 29 − 8",
      "3x = 21",
      "x = 7",
    ],
    tip: "Undo addition/subtraction before division.",
    tags: ["algebra"],
  },

  {
    id: "math-v1-028",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "hard",
    question: "What is the area of a rectangle with length 14 cm and width 5 cm?",
    choices: ["60 cm²", "65 cm²", "70 cm²", "75 cm²"],
    answerIndex: 2,
    explanation: "Area of rectangle = length × width.",
    steps: [
      "14 × 5 = 70",
      "Area = 70 cm²",
    ],
    tip: "Rectangle area is one of the fastest formulas to memorize.",
    tags: ["geometry", "area"],
  },

  {
    id: "math-v1-029",
    subject: "Mathematics",
    topic: "Ratios",
    difficulty: "beast",
    question: "The ratio of cats to dogs is 7:3. If there are 42 cats, how many dogs are there?",
    choices: ["16", "18", "20", "22"],
    answerIndex: 1,
    explanation: "Use equivalent ratios.",
    steps: [
      "7 parts = 42",
      "1 part = 6",
      "Dogs = 3 × 6 = 18",
    ],
    tip: "Find the value of one ratio unit first.",
    tags: ["ratio"],
  },

  {
    id: "math-v1-030",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "hard",
    question: "What is the probability of drawing a king from a standard deck of 52 cards?",
    choices: ["1/13", "1/26", "1/52", "4/13"],
    answerIndex: 0,
    explanation: "There are 4 kings in a 52-card deck.",
    steps: [
      "Probability = favorable ÷ total",
      "4 ÷ 52 = 1/13",
    ],
    tip: "Simplify fractions whenever possible.",
    tags: ["probability", "cards"],
  },

  {
    id: "math-v1-031",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "beast",
    question: "What is 5/6 − 1/4?",
    choices: ["7/12", "1/2", "5/12", "2/3"],
    answerIndex: 0,
    explanation: "Find the least common denominator.",
    steps: [
      "LCD of 6 and 4 is 12",
      "5/6 = 10/12",
      "1/4 = 3/12",
      "10/12 − 3/12 = 7/12",
    ],
    tip: "Fractions require equal denominators before subtraction.",
    tags: ["fractions"],
  },

  {
    id: "math-v1-032",
    subject: "Mathematics",
    topic: "Sequences",
    difficulty: "beast",
    question: "Find the next number: 81, 27, 9, 3, ___",
    choices: ["1", "0", "1/3", "3"],
    answerIndex: 0,
    explanation: "Each term is divided by 3.",
    steps: [
      "81 ÷ 3 = 27",
      "27 ÷ 3 = 9",
      "9 ÷ 3 = 3",
      "3 ÷ 3 = 1",
    ],
    tip: "Check whether the sequence is increasing or decreasing.",
    tags: ["sequence"],
  },

  {
    id: "math-v1-033",
    subject: "Mathematics",
    topic: "Percentages",
    difficulty: "hard",
    question: "A student scored 45 out of 60. What is the percentage score?",
    choices: ["65%", "70%", "75%", "80%"],
    answerIndex: 2,
    explanation: "Percentage = (part ÷ whole) × 100.",
    steps: [
      "45 ÷ 60 = 0.75",
      "0.75 × 100 = 75%",
    ],
    tip: "Convert the decimal to percent by multiplying by 100.",
    tags: ["percentage"],
  },

  {
    id: "math-v1-034",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "beast",
    question: "What is the volume of a cube with side length 4 cm?",
    choices: ["16 cm³", "32 cm³", "64 cm³", "128 cm³"],
    answerIndex: 2,
    explanation: "Volume of cube = side³.",
    steps: [
      "4 × 4 × 4 = 64",
      "Volume = 64 cm³",
    ],
    tip: "Cube volume uses three dimensions.",
    tags: ["geometry", "volume"],
  },

  {
    id: "math-v1-035",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "beast",
    question: "A worker earns ₱560 for 8 hours of work. How much does the worker earn per hour?",
    choices: ["₱60", "₱65", "₱70", "₱75"],
    answerIndex: 2,
    explanation: "Divide total earnings by total hours.",
    steps: [
      "560 ÷ 8 = 70",
      "Hourly wage = ₱70",
    ],
    tip: "Rate problems usually involve division.",
    tags: ["rate", "money"],
  },

  {
    id: "math-v1-036",
    subject: "Mathematics",
    topic: "Integers",
    difficulty: "hard",
    question: "What is −8 + 13?",
    choices: ["3", "4", "5", "6"],
    answerIndex: 2,
    explanation: "Adding a positive number moves to the right on the number line.",
    steps: [
      "-8 + 13 = 5",
    ],
    tip: "Subtract absolute values and keep the sign of the larger number.",
    tags: ["integers"],
  },

  {
    id: "math-v1-037",
    subject: "Mathematics",
    topic: "Exponents",
    difficulty: "hard",
    question: "What is 2⁵?",
    choices: ["16", "25", "32", "64"],
    answerIndex: 2,
    explanation: "Exponents mean repeated multiplication.",
    steps: [
      "2 × 2 × 2 × 2 × 2 = 32",
    ],
    tip: "Practice common powers like 2², 2³, 2⁴, and 2⁵.",
    tags: ["exponents"],
  },

  {
    id: "math-v1-038",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "beast",
    question: "What is the sum of the interior angles of a triangle?",
    choices: ["90°", "180°", "270°", "360°"],
    answerIndex: 1,
    explanation: "The interior angles of every triangle always total 180°.",
    steps: [
      "Triangle angle sum = 180°",
    ],
    tip: "This rule is one of the most important geometry foundations.",
    tags: ["geometry", "angles"],
  },

  {
    id: "math-v1-039",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "hard",
    question: "What is 2/3 × 3/5?",
    choices: ["2/5", "3/8", "5/6", "6/15"],
    answerIndex: 0,
    explanation: "Multiply numerators and denominators directly.",
    steps: [
      "2 × 3 = 6",
      "3 × 5 = 15",
      "6/15 simplifies to 2/5",
    ],
    tip: "Always simplify fractions at the end.",
    tags: ["fractions"],
  },

  {
    id: "math-v1-040",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "beast",
    question: "A faucet fills a tank in 12 minutes. How much of the tank is filled in 3 minutes?",
    choices: ["1/2", "1/3", "1/4", "1/6"],
    answerIndex: 2,
    explanation: "Find the fraction filled per minute.",
    steps: [
      "Whole tank = 12 minutes",
      "3 minutes is 3/12",
      "3/12 simplifies to 1/4",
    ],
    tip: "Work problems often involve fractions of the whole task.",
    tags: ["work", "fractions"],
  },

  {
    id: "math-v1-041",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "beast",
    question: "If 2x + 5 = 17, what is the value of x?",
    choices: ["5", "6", "7", "8"],
    answerIndex: 1,
    explanation: "Isolate the variable by undoing operations.",
    steps: [
      "2x = 17 − 5",
      "2x = 12",
      "x = 6",
    ],
    tip: "Reverse PEMDAS when solving equations.",
    tags: ["algebra"],
  },

  {
    id: "math-v1-042",
    subject: "Mathematics",
    topic: "Decimals",
    difficulty: "hard",
    question: "What is 4.2 + 3.75?",
    choices: ["7.85", "7.95", "8.05", "8.15"],
    answerIndex: 1,
    explanation: "Align decimal places before adding.",
    steps: [
      "4.20 + 3.75 = 7.95",
    ],
    tip: "Always line up decimal points vertically.",
    tags: ["decimals"],
  },

  {
    id: "math-v1-043",
    subject: "Mathematics",
    topic: "Percentages",
    difficulty: "beast",
    question: "What is 15% of 360?",
    choices: ["45", "54", "60", "72"],
    answerIndex: 1,
    explanation: "Convert the percent into decimal form.",
    steps: [
      "15% = 0.15",
      "0.15 × 360 = 54",
    ],
    tip: "Move the decimal point two places left for percentages.",
    tags: ["percentage"],
  },

  {
    id: "math-v1-044",
    subject: "Mathematics",
    topic: "Sequences",
    difficulty: "beast",
    question: "Find the next number: 5, 10, 20, 40, ___",
    choices: ["60", "70", "80", "90"],
    answerIndex: 2,
    explanation: "Each number doubles.",
    steps: [
      "5 × 2 = 10",
      "10 × 2 = 20",
      "20 × 2 = 40",
      "40 × 2 = 80",
    ],
    tip: "Geometric sequences often use repeated multiplication.",
    tags: ["sequence"],
  },

  {
    id: "math-v1-045",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "hard",
    question: "A coin is tossed once. What is the probability of getting tails?",
    choices: ["0", "1/4", "1/2", "1"],
    answerIndex: 2,
    explanation: "A fair coin has two equally likely outcomes.",
    steps: [
      "Possible outcomes: heads or tails",
      "1 favorable outcome out of 2",
      "Probability = 1/2",
    ],
    tip: "Probability ranges from 0 to 1.",
    tags: ["probability"],
  },

  {
    id: "math-v1-046",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "beast",
    question: "Solve for x: 5x − 12 = 3x + 8",
    choices: ["8", "9", "10", "11"],
    answerIndex: 2,
    explanation: "Move variable terms to one side and constants to the other.",
    steps: [
      "5x − 3x = 8 + 12",
      "2x = 20",
      "x = 10",
    ],
    tip: "Keep variables on one side to simplify equations.",
    tags: ["algebra", "equations"],
  },

  {
    id: "math-v1-047",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "hard",
    question: "What is the circumference of a circle with diameter 14 cm? Use π = 22/7.",
    choices: ["22 cm", "33 cm", "44 cm", "55 cm"],
    answerIndex: 2,
    explanation: "Circumference = π × diameter.",
    steps: [
      "C = (22/7) × 14",
      "C = 44 cm",
    ],
    tip: "Using diameter is often faster than using radius.",
    tags: ["geometry", "circle"],
  },

  {
    id: "math-v1-048",
    subject: "Mathematics",
    topic: "Ratios",
    difficulty: "beast",
    question: "The ratio of red marbles to blue marbles is 4:7. If there are 28 blue marbles, how many red marbles are there?",
    choices: ["12", "16", "20", "24"],
    answerIndex: 1,
    explanation: "Find the value of one ratio unit first.",
    steps: [
      "7 parts = 28",
      "1 part = 4",
      "Red marbles = 4 × 4 = 16",
    ],
    tip: "Equivalent ratios scale proportionally.",
    tags: ["ratios"],
  },

  {
    id: "math-v1-049",
    subject: "Mathematics",
    topic: "Fractions",
    difficulty: "hard",
    question: "What is 7/8 ÷ 1/4?",
    choices: ["7/32", "7/8", "7/2", "14/8"],
    answerIndex: 2,
    explanation: "Dividing by a fraction means multiplying by its reciprocal.",
    steps: [
      "7/8 ÷ 1/4 = 7/8 × 4/1",
      "28/8 = 7/2",
    ],
    tip: "Flip the second fraction when dividing.",
    tags: ["fractions", "division"],
  },

  {
    id: "math-v1-050",
    subject: "Mathematics",
    topic: "Percentages",
    difficulty: "beast",
    question: "A phone worth ₱12,000 increased in price by 10%. What is the new price?",
    choices: ["₱12,100", "₱12,500", "₱13,000", "₱13,200"],
    answerIndex: 3,
    explanation: "Find 10% of the original amount and add it.",
    steps: [
      "10% of 12,000 = 1,200",
      "12,000 + 1,200 = 13,200",
    ],
    tip: "Increase problems require addition after finding the percentage.",
    tags: ["percentage", "increase"],
  },

  {
    id: "math-v1-051",
    subject: "Mathematics",
    topic: "Sequences",
    difficulty: "beast",
    question: "Find the next number: 7, 14, 28, 56, ___",
    choices: ["84", "98", "112", "124"],
    answerIndex: 2,
    explanation: "Each number doubles.",
    steps: [
      "7 × 2 = 14",
      "14 × 2 = 28",
      "28 × 2 = 56",
      "56 × 2 = 112",
    ],
    tip: "Geometric sequences often use multiplication patterns.",
    tags: ["sequence", "patterns"],
  },

  {
    id: "math-v1-052",
    subject: "Mathematics",
    topic: "Decimals",
    difficulty: "hard",
    question: "What is 8.5 − 2.75?",
    choices: ["5.25", "5.5", "5.75", "6.25"],
    answerIndex: 2,
    explanation: "Align decimal points before subtraction.",
    steps: [
      "8.50 − 2.75 = 5.75",
    ],
    tip: "Always write equal decimal places for accuracy.",
    tags: ["decimals"],
  },

  {
    id: "math-v1-053",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "beast",
    question: "Two dice are rolled. What is the probability that both show 6?",
    choices: ["1/6", "1/12", "1/18", "1/36"],
    answerIndex: 3,
    explanation: "Multiply independent probabilities.",
    steps: [
      "Probability of one 6 = 1/6",
      "1/6 × 1/6 = 1/36",
    ],
    tip: "Independent events multiply together.",
    tags: ["probability", "dice"],
  },

  {
    id: "math-v1-054",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "beast",
    question: "A bus travels 360 km in 6 hours. What is its average speed?",
    choices: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answerIndex: 2,
    explanation: "Average speed = total distance ÷ total time.",
    steps: [
      "360 ÷ 6 = 60",
      "Average speed = 60 km/h",
    ],
    tip: "Speed problems are usually simple division.",
    tags: ["speed", "rate"],
  },

  {
    id: "math-v1-055",
    subject: "Mathematics",
    topic: "Exponents",
    difficulty: "hard",
    question: "What is 3³?",
    choices: ["6", "9", "18", "27"],
    answerIndex: 3,
    explanation: "Exponents represent repeated multiplication.",
    steps: [
      "3 × 3 × 3 = 27",
    ],
    tip: "Memorize common cube values for speed.",
    tags: ["exponents"],
  },

  {
    id: "math-v1-056",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "beast",
    question: "If 3(x − 2) = 2x + 5, what is x?",
    choices: ["9", "10", "11", "12"],
    answerIndex: 2,
    explanation: "Distribute first, then isolate x.",
    steps: [
      "3(x − 2) = 2x + 5",
      "3x − 6 = 2x + 5",
      "3x − 2x = 5 + 6",
      "x = 11",
    ],
    tip: "Parentheses first. Many errors come from forgetting to distribute the negative or coefficient.",
    tags: ["algebra", "distribution"],
  },

  {
    id: "math-v1-057",
    subject: "Mathematics",
    topic: "Percentages",
    difficulty: "beast",
    question: "A price is increased by 20% and then decreased by 20%. What is the net effect?",
    choices: ["No change", "4% decrease", "4% increase", "20% decrease"],
    answerIndex: 1,
    explanation: "Successive percentage changes are multiplicative, not additive.",
    steps: [
      "Let the original price be 100",
      "After 20% increase: 100 × 1.20 = 120",
      "After 20% decrease: 120 × 0.80 = 96",
      "96 is 4 less than 100, so the net effect is a 4% decrease",
    ],
    tip: "Equal percent increase and decrease do not cancel out.",
    tags: ["percentage", "successive change"],
  },

  {
    id: "math-v1-058",
    subject: "Mathematics",
    topic: "Statistics",
    difficulty: "beast",
    question: "The average of 5 numbers is 18. Four of the numbers are 12, 16, 20, and 22. What is the fifth number?",
    choices: ["18", "20", "22", "24"],
    answerIndex: 1,
    explanation: "Use the average to find the total sum first.",
    steps: [
      "Total sum = 18 × 5 = 90",
      "Known sum = 12 + 16 + 20 + 22 = 70",
      "Fifth number = 90 − 70 = 20",
    ],
    tip: "Average problems often become total-sum problems.",
    tags: ["statistics", "average"],
  },

  {
    id: "math-v1-059",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "beast",
    question: "A right triangle has legs of 9 cm and 12 cm. What is the hypotenuse?",
    choices: ["13 cm", "14 cm", "15 cm", "16 cm"],
    answerIndex: 2,
    explanation: "Use the Pythagorean theorem.",
    steps: [
      "c² = 9² + 12²",
      "c² = 81 + 144 = 225",
      "c = √225 = 15",
    ],
    tip: "Recognize the 9-12-15 triangle as a scaled 3-4-5 triple.",
    tags: ["geometry", "pythagorean"],
  },

  {
    id: "math-v1-060",
    subject: "Mathematics",
    topic: "Ratios",
    difficulty: "beast",
    question: "A recipe uses flour and sugar in the ratio 5:2. If 35 cups of flour are used, how many cups of sugar are needed?",
    choices: ["10", "12", "14", "16"],
    answerIndex: 2,
    explanation: "Use the ratio scale factor.",
    steps: [
      "5 parts flour = 35 cups",
      "1 part = 7 cups",
      "Sugar = 2 parts = 2 × 7 = 14 cups",
    ],
    tip: "Match the given value to its correct ratio part before scaling.",
    tags: ["ratio", "proportion"],
  },

  {
    id: "math-v1-061",
    subject: "Mathematics",
    topic: "Word Problems",
    difficulty: "beast",
    question: "A tank is 1/3 full. After adding 20 liters, it becomes 1/2 full. What is the tank's full capacity?",
    choices: ["80 L", "100 L", "120 L", "140 L"],
    answerIndex: 2,
    explanation: "The added 20 liters represents the difference between 1/2 and 1/3 of the tank.",
    steps: [
      "1/2 − 1/3 = 3/6 − 2/6 = 1/6",
      "1/6 of the tank = 20 liters",
      "Full capacity = 20 × 6 = 120 liters",
    ],
    tip: "When fractions of a whole change, find the fractional difference first.",
    tags: ["fractions", "word problem"],
  },

  {
    id: "math-v1-062",
    subject: "Mathematics",
    topic: "Sequences",
    difficulty: "beast",
    question: "Find the next number: 4, 9, 19, 39, 79, ___",
    choices: ["119", "139", "159", "179"],
    answerIndex: 2,
    explanation: "Each term is doubled then increased by 1.",
    steps: [
      "4 × 2 + 1 = 9",
      "9 × 2 + 1 = 19",
      "19 × 2 + 1 = 39",
      "39 × 2 + 1 = 79",
      "79 × 2 + 1 = 159",
    ],
    tip: "If differences are not constant, test multiplication patterns.",
    tags: ["sequence", "patterns"],
  },

  {
    id: "math-v1-063",
    subject: "Mathematics",
    topic: "Probability",
    difficulty: "beast",
    question: "A box has 4 black pens and 6 blue pens. One pen is chosen at random. What is the probability it is not black?",
    choices: ["2/5", "3/5", "4/5", "1/2"],
    answerIndex: 1,
    explanation: "Not black means blue in this box.",
    steps: [
      "Total pens = 4 + 6 = 10",
      "Not black pens = 6",
      "Probability = 6/10 = 3/5",
    ],
    tip: "For 'not' probability, count the complement carefully.",
    tags: ["probability", "complement"],
  },

  {
    id: "math-v1-064",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "beast",
    question: "If x + y = 14 and x − y = 4, what is xy?",
    choices: ["40", "45", "48", "50"],
    answerIndex: 1,
    explanation: "Solve for x and y by adding and subtracting the equations.",
    steps: [
      "x + y = 14",
      "x − y = 4",
      "Add: 2x = 18, so x = 9",
      "Then y = 5",
      "xy = 9 × 5 = 45",
    ],
    tip: "Sum-and-difference systems are fast if you add the equations first.",
    tags: ["algebra", "systems"],
  },

  {
    id: "math-v1-065",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "beast",
    question: "The perimeter of a square is 52 cm. What is its area?",
    choices: ["144 cm²", "156 cm²", "169 cm²", "196 cm²"],
    answerIndex: 2,
    explanation: "Find the side length from the perimeter first, then square it.",
    steps: [
      "Side = 52 ÷ 4 = 13 cm",
      "Area = 13² = 169 cm²",
    ],
    tip: "For squares, perimeter gives side length before area.",
    tags: ["geometry", "square"],
  },
];