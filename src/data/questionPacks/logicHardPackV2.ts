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
  {
    id: "logic-hard-v2-011",
    subject: "Logic",
    topic: "Conditional Logic",
    difficulty: "hard",
    question: "If all pilots are trained professionals and some trained professionals are engineers, which statement must be true?",
    choices: [
      "All engineers are pilots.",
      "All pilots are trained professionals.",
      "Some pilots are engineers.",
      "No engineers are pilots."
    ],
    answerIndex: 1,
    explanation: "The statement directly guarantees that all pilots are trained professionals.",
    tip: "Choose only what is explicitly guaranteed.",
  },

  {
    id: "logic-hard-v2-012",
    subject: "Logic",
    topic: "Sequences",
    difficulty: "hard",
    question: "What comes next in the sequence? 1, 4, 9, 16, 25, ?",
    choices: [30, 35, 36, 49],
    answerIndex: 2,
    explanation: "These are perfect squares: 1², 2², 3², 4², 5². Next is 6² = 36.",
    tip: "Check for square-number patterns.",
  },

  {
    id: "logic-hard-v2-013",
    subject: "Logic",
    topic: "Deduction",
    difficulty: "hard",
    question: "All fruits contain seeds. Tomatoes contain seeds. Which conclusion is logically valid?",
    choices: [
      "Tomatoes may be fruits.",
      "All seeds are tomatoes.",
      "Tomatoes are definitely vegetables.",
      "No fruits contain seeds."
    ],
    answerIndex: 0,
    explanation: "The statements suggest tomatoes may belong to the fruit category.",
    tip: "Avoid conclusions stronger than the evidence.",
  },

  {
    id: "logic-hard-v2-014",
    subject: "Logic",
    topic: "Patterns",
    difficulty: "hard",
    question: "What comes next in the pattern? B, E, H, K, ?",
    choices: ["M", "N", "O", "P"],
    answerIndex: 1,
    explanation: "The pattern increases by 3 letters each step: B→E→H→K→N.",
    tip: "Check alphabetical intervals carefully.",
  },

  {
    id: "logic-hard-v2-015",
    subject: "Logic",
    topic: "Critical Reasoning",
    difficulty: "hard",
    question: "A town planted more trees along major roads. Within two years, air quality measurements improved noticeably. Which conclusion is most reasonable?",
    choices: [
      "Trees may have contributed to cleaner air.",
      "Trees always solve all pollution problems.",
      "Roads should be removed permanently.",
      "Air quality has no measurable effects."
    ],
    answerIndex: 0,
    explanation: "The evidence suggests trees may have helped improve air quality.",
    tip: "Choose conclusions supported but not exaggerated.",
  },

  {
    id: "logic-hard-v2-016",
    subject: "Logic",
    topic: "Directions",
    difficulty: "hard",
    question: "A person walks 8 meters east, then 6 meters north, then 8 meters west. Where is the person relative to the starting point?",
    choices: [
      "6 meters north",
      "6 meters south",
      "8 meters east",
      "8 meters west"
    ],
    answerIndex: 0,
    explanation: "East and west movements cancel out, leaving the person 6 meters north.",
    tip: "Track vertical and horizontal movement separately.",
  },

  {
    id: "logic-hard-v2-017",
    subject: "Logic",
    topic: "Analogy",
    difficulty: "hard",
    question: "Heart is to circulatory system as lungs are to ___?",
    choices: [
      "Digestive system",
      "Respiratory system",
      "Nervous system",
      "Skeletal system"
    ],
    answerIndex: 1,
    explanation: "Lungs are primary organs of the respiratory system.",
    tip: "Identify the relationship category.",
  },

  {
    id: "logic-hard-v2-018",
    subject: "Logic",
    topic: "Odd One Out",
    difficulty: "hard",
    question: "Which item does not belong? Triangle, Square, Circle, Cylinder",
    choices: [
      "Triangle",
      "Square",
      "Circle",
      "Cylinder"
    ],
    answerIndex: 3,
    explanation: "Cylinder is a three-dimensional figure while the others are two-dimensional shapes.",
    tip: "Look for classification differences.",
  },

  {
    id: "logic-hard-v2-019",
    subject: "Logic",
    topic: "Conditional Logic",
    difficulty: "hard",
    question: "If the alarm rings, the guards investigate immediately. The alarm rang last night. What logically follows?",
    choices: [
      "The guards investigated.",
      "The guards ignored the alarm.",
      "The alarm system failed.",
      "The building was evacuated."
    ],
    answerIndex: 0,
    explanation: "The condition directly states guards investigate when the alarm rings.",
    tip: "Apply the conditional rule exactly.",
  },

  {
    id: "logic-hard-v2-020",
    subject: "Logic",
    topic: "Critical Thinking",
    difficulty: "hard",
    question: "A school introduced mandatory reading periods each morning. After several months, student reading scores improved. Which conclusion is most reasonable?",
    choices: [
      "Reading periods may have improved literacy skills.",
      "Reading guarantees perfect academic performance.",
      "Students stopped attending other classes.",
      "Morning schedules are unnecessary."
    ],
   answerIndex: 0,
    explanation: "The evidence suggests the reading periods may have contributed to improved scores.",
    tip: "Avoid conclusions stronger than the evidence.",
  },
  {
    id: "logic-hard-v2-021",
    subject: "Logic",
    topic: "Conditional Logic",
    difficulty: "hard",
    question: "If all marine officers are licensed professionals and some licensed professionals are instructors, which statement must be true?",
    choices: [
      "All marine officers are licensed professionals.",
      "All instructors are marine officers.",
      "Some instructors are marine officers.",
      "No instructors are licensed professionals."
    ],
    answerIndex: 0,
    explanation: "The first statement guarantees that all marine officers are licensed professionals.",
    tip: "Choose only conclusions directly supported.",
  },

  {
    id: "logic-hard-v2-022",
    subject: "Logic",
    topic: "Sequences",
    difficulty: "hard",
    question: "What comes next in the sequence? 5, 10, 20, 40, ?",
    choices: [60, 70, 75, 80],
    answerIndex: 3,
    explanation: "Each term doubles: 40 × 2 = 80.",
    tip: "Check multiplication patterns first.",
  },

  {
    id: "logic-hard-v2-023",
    subject: "Logic",
    topic: "Deduction",
    difficulty: "hard",
    question: "All roses are flowers. Some flowers fade quickly. Which conclusion is logically valid?",
    choices: [
      "Some roses may fade quickly.",
      "All flowers are roses.",
      "No flowers fade quickly.",
      "Roses cannot fade."
    ],
    answerIndex: 0,
    explanation: "The statements allow the possibility that some roses fade quickly.",
    tip: "Avoid conclusions stronger than the evidence.",
  },

  {
    id: "logic-hard-v2-024",
    subject: "Logic",
    topic: "Patterns",
    difficulty: "hard",
    question: "What comes next in the pattern? 3, 6, 11, 18, 27, ?",
    choices: [36, 37, 38, 39],
    answerIndex: 2,
    explanation: "Differences are +3, +5, +7, +9. Next is +11 → 38.",
    tip: "Check increasing interval patterns.",
  },

  {
    id: "logic-hard-v2-025",
    subject: "Logic",
    topic: "Critical Reasoning",
    difficulty: "hard",
    question: "A city expanded bicycle lanes downtown. Six months later, bicycle use increased significantly. Which conclusion is most reasonable?",
    choices: [
      "Bicycle lanes may have encouraged more cycling.",
      "All residents now use bicycles exclusively.",
      "Cars were permanently banned.",
      "Cycling has no environmental benefits."
    ],
    answerIndex: 0,
    explanation: "The evidence suggests the added lanes may have encouraged cycling.",
    tip: "Choose conclusions supported but not exaggerated.",
  },

  {
    id: "logic-hard-v2-026",
    subject: "Logic",
    topic: "Directions",
    difficulty: "hard",
    question: "A person walks 12 meters north, then 5 meters east, then 12 meters south. Where is the person relative to the starting point?",
    choices: [
      "12 meters north",
      "5 meters west",
      "12 meters south",
      "5 meters east"
    ],
    answerIndex: 3,
    explanation: "North and south movements cancel, leaving the person 5 meters east.",
    tip: "Track horizontal and vertical movement separately.",
  },

  {
    id: "logic-hard-v2-027",
    subject: "Logic",
    topic: "Analogy",
    difficulty: "hard",
    question: "Thermometer is to temperature as compass is to ___?",
    choices: [
      "Direction",
      "Distance",
      "Pressure",
      "Weight"
    ],
    answerIndex: 0,
    explanation: "A compass measures direction just as a thermometer measures temperature.",
    tip: "Identify the relationship function.",
  },

  {
    id: "logic-hard-v2-028",
    subject: "Logic",
    topic: "Odd One Out",
    difficulty: "hard",
    question: "Which item does not belong? Rectangle, Triangle, Pyramid, Circle",
    choices: [
      "Rectangle",
      "Triangle",
      "Pyramid",
      "Circle"
    ],
    answerIndex: 2,
    explanation: "Pyramid is three-dimensional while the others are two-dimensional figures.",
    tip: "Look for category differences.",
  },

  {
    id: "logic-hard-v2-029",
    subject: "Logic",
    topic: "Conditional Logic",
    difficulty: "hard",
    question: "If the warning light flashes, technicians inspect the system immediately. The warning light flashed this morning. What logically follows?",
    choices: [
      "Technicians inspected the system.",
      "The system was replaced.",
      "The warning light malfunctioned.",
      "The inspection was canceled."
    ],
    answerIndex: 0,
    explanation: "The conditional rule directly states technicians inspect when the light flashes.",
    tip: "Apply the condition exactly as stated.",
  },

  {
    id: "logic-hard-v2-030",
    subject: "Logic",
    topic: "Critical Thinking",
    difficulty: "hard",
    question: "A university introduced mandatory study workshops for freshmen. At the end of the year, average freshman grades improved. Which conclusion is most reasonable?",
    choices: [
      "Study workshops may have contributed to better academic performance.",
      "Freshmen no longer needed professors.",
      "All students attended every workshop.",
      "Grades improved without any effort."
    ],
    answerIndex: 0,
    explanation: "The evidence suggests the workshops may have helped improve grades.",
    tip: "Avoid exaggerated conclusions.",
  },
];
