import { Question } from "@/types/questions";

export const logicHardPackV2: Question[] = [
  {
    id: "logic-hard-v2-001",
    subject: "Logic",
    topic: "Deductive Reasoning",
    difficulty: "hard",
    question: "All engineers are problem solvers. Some problem solvers are artists. Which statement must be true?",
    choices: [
      "All artists are engineers.",
      "Some engineers are artists.",
      "All engineers are problem solvers.",
      "No artists are engineers."
    ],
    answerIndex: 2,
    explanation: "The first statement directly guarantees that all engineers are problem solvers.",
    tip: "Choose only what is guaranteed by the information.",
  },

  {
    id: "logic-hard-v2-002",
    subject: "Logic",
    topic: "Sequences",
    difficulty: "hard",
    question: "What comes next in the sequence? 2, 6, 12, 20, 30, ?",
    choices: [36, 40, 42, 44],
    answerIndex: 2,
    explanation: "The differences are +4, +6, +8, +10, so the next difference is +12. Therefore, 30 + 12 = 42.",
    tip: "Check how the differences change.",
  },

  {
    id: "logic-hard-v2-003",
    subject: "Logic",
    topic: "Analogy",
    difficulty: "hard",
    question: "Book is to author as painting is to ___?",
    choices: ["Museum", "Artist", "Brush", "Color"],
    answerIndex: 1,
    explanation: "An author creates a book, just as an artist creates a painting.",
    tip: "Focus on creator relationships.",
  },

  {
    id: "logic-hard-v2-004",
    subject: "Logic",
    topic: "Critical Reasoning",
    difficulty: "hard",
    question: "A survey showed that students who sleep at least 8 hours tend to score higher on exams. Which conclusion is most reasonable?",
    choices: [
      "Sleeping 8 hours guarantees high scores.",
      "Adequate sleep may help academic performance.",
      "Students who sleep less never pass exams.",
      "Exams should only be taken in the morning."
    ],
    answerIndex: 1,
    explanation: "The data suggests a possible relationship, but not an absolute guarantee.",
    tip: "Avoid conclusions that overstate the evidence.",
  },

  {
    id: "logic-hard-v2-005",
    subject: "Logic",
    topic: "Directions",
    difficulty: "hard",
    question: "A person walks 5 meters north, 3 meters east, then 5 meters south. Where is the person relative to the starting point?",
    choices: [
      "3 meters east",
      "3 meters west",
      "5 meters north",
      "5 meters south"
    ],
    answerIndex: 0,
    explanation: "The north and south movements cancel out, leaving the person 3 meters east.",
    tip: "Track horizontal and vertical movement separately.",
  },

  {
    id: "logic-hard-v2-006",
    subject: "Logic",
    topic: "Deductive Reasoning",
    difficulty: "hard",
    question: "If all roses are flowers and some flowers fade quickly, which statement must be true?",
    choices: [
      "All roses fade quickly.",
      "Some roses are not flowers.",
      "All roses are flowers.",
      "No flowers fade quickly."
    ],
    answerIndex: 2,
    explanation: "The first statement directly establishes that all roses are flowers.",
    tip: "Do not assume extra information.",
  },

  {
    id: "logic-hard-v2-007",
    subject: "Logic",
    topic: "Patterns",
    difficulty: "hard",
    question: "What comes next in the pattern? A, C, F, J, O, ?",
    choices: ["S", "T", "U", "V"],
    answerIndex: 2,
    explanation: "The jumps are +2, +3, +4, +5. The next jump is +6: O → U.",
    tip: "Look at the changing interval pattern.",
  },

  {
    id: "logic-hard-v2-008",
    subject: "Logic",
    topic: "Classification",
    difficulty: "hard",
    question: "Which item does not belong? Mercury, Venus, Mars, Moon",
    choices: ["Mercury", "Venus", "Mars", "Moon"],
    answerIndex: 3,
    explanation: "Mercury, Venus, and Mars are planets, while the Moon is a natural satellite.",
    tip: "Group items by category.",
  },

  {
    id: "logic-hard-v2-009",
    subject: "Logic",
    topic: "Conditional Logic",
    difficulty: "hard",
    question: "If it rains, the game will be canceled. It is raining. What conclusion follows logically?",
    choices: [
      "The game may continue.",
      "The game will be canceled.",
      "The rain will stop immediately.",
      "The players will leave town."
    ],
    answerIndex: 1,
    explanation: "The condition directly states that rain causes cancellation.",
    tip: "Follow the conditional statement exactly.",
  },

  {
    id: "logic-hard-v2-010",
    subject: "Logic",
    topic: "Critical Thinking",
    difficulty: "hard",
    question: "A company increased employee salaries and productivity improved afterward. Which conclusion is most reasonable?",
    choices: [
      "Higher salaries may have improved motivation.",
      "Salary increases always guarantee productivity.",
      "Employees only work for money.",
      "Productivity is unrelated to motivation."
    ],
    answerIndex: 0,
    explanation: "The evidence suggests a possible connection without proving an absolute rule.",
    tip: "Choose the conclusion most supported by the evidence.",
  },
];
