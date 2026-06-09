import { Question } from "@/types/questions";

export const readingPackV2: Question[] = [
  {
    id: "reading-v2-001",
    subject: "Reading Comprehension",
    topic: "Main Idea",
    difficulty: "normal",
    question: "Passage:\n\nLena reviewed her notes every night before the science competition. She also practiced answering sample questions with her classmates.\n\nWhat is the main idea of the passage?",
    choices: [
      "Science competitions are expensive.",
      "Lena prepared seriously for the competition.",
      "Classmates dislike studying together.",
      "Reviewing notes is unnecessary."
    ],
    answerIndex: 1,
    explanation: "The passage focuses on Lena's preparation for the competition.",
    steps: [
      "Identify repeated actions",
      "Notice all details relate to preparation"
    ],
    tip: "The main idea is the central message of the passage.",
    tags: ["reading", "main idea"],
  },
  {
    id: "reading-v2-002",
    subject: "Reading Comprehension",
    topic: "Inference",
    difficulty: "normal",
    question: "Passage:\n\nThe restaurant remained nearly empty even during lunch hours after several negative online reviews appeared.\n\nWhat can be inferred?",
    choices: [
      "The restaurant became more popular.",
      "Customers were influenced by the reviews.",
      "The restaurant stopped serving lunch.",
      "Online reviews are always false."
    ],
    answerIndex: 1,
    explanation: "The passage suggests the negative reviews affected customer behavior.",
    steps: [
      "Connect reviews with reduced customers",
      "Infer likely cause and effect"
    ],
    tip: "Inference uses clues, not direct statements.",
    tags: ["reading", "inference"],
  },
  {
    id: "reading-v2-003",
    subject: "Reading Comprehension",
    topic: "Author's Purpose",
    difficulty: "normal",
    question: "Passage:\n\nRegular exercise strengthens the heart, improves mood, and helps reduce stress levels.\n\nWhat is the author's purpose?",
    choices: [
      "To entertain readers with a story",
      "To persuade readers to avoid exercise",
      "To inform readers about exercise benefits",
      "To describe a historical event"
    ],
    answerIndex: 2,
    explanation: "The passage gives factual benefits of exercise.",
    steps: [
      "Notice the factual tone",
      "Identify the informative purpose"
    ],
    tip: "Ask why the author wrote the passage.",
    tags: ["reading", "author purpose"],
  },
  {
    id: "reading-v2-004",
    subject: "Reading Comprehension",
    topic: "Sequence",
    difficulty: "normal",
    question: "Passage:\n\nFirst, Carlo washed the vegetables. Next, he sliced them carefully. Finally, he placed them into the soup.\n\nWhat happened immediately before the vegetables were placed into the soup?",
    choices: [
      "Carlo bought vegetables.",
      "Carlo sliced the vegetables.",
      "Carlo washed the dishes.",
      "Carlo served the soup."
    ],
    answerIndex: 1,
    explanation: "Slicing the vegetables occurred immediately before placing them into the soup.",
    steps: [
      "Track sequence words",
      "Find the event before finally"
    ],
    tip: "Sequence questions focus on order.",
    tags: ["reading", "sequence"],
  },
  {
    id: "reading-v2-005",
    subject: "Reading Comprehension",
    topic: "Tone",
    difficulty: "normal",
    question: "Passage:\n\nThe children cheered excitedly as fireworks illuminated the night sky during the celebration.\n\nWhat is the tone of the passage?",
    choices: [
      "Joyful",
      "Angry",
      "Fearful",
      "Hopeless"
    ],
    answerIndex: 0,
    explanation: "Words like cheered and celebration create a joyful tone.",
    steps: [
      "Identify emotional words",
      "Determine overall feeling"
    ],
    tip: "Tone reflects emotion or attitude.",
    tags: ["reading", "tone"],
  },
  {
    id: "reading-v2-006",
    subject: "Reading Comprehension",
    topic: "Cause and Effect",
    difficulty: "normal",
    question: "Passage:\n\nHeavy rainfall continued for three days, causing the river to overflow into nearby streets.\n\nWhat was the effect of the heavy rainfall?",
    choices: [
      "The streets became flooded.",
      "The river disappeared.",
      "People stopped drinking water.",
      "The rainfall weakened immediately."
    ],
    answerIndex: 0,
    explanation: "The passage states that the river overflowed into nearby streets.",
    steps: [
      "Identify the cause",
      "Find the result mentioned"
    ],
    tip: "Effects happen after causes.",
    tags: ["reading", "cause effect"],
  },
  {
    id: "reading-v2-007",
    subject: "Reading Comprehension",
    topic: "Supporting Details",
    difficulty: "hard",
    question: "Passage:\n\nReading books regularly improves vocabulary, strengthens comprehension skills, and encourages critical thinking.\n\nWhich detail supports the main idea?",
    choices: [
      "Books can improve vocabulary.",
      "Libraries are usually quiet.",
      "Some readers prefer digital devices.",
      "Critical thinking is difficult."
    ],
    answerIndex: 0,
    explanation: "Improved vocabulary directly supports the benefits of reading.",
    steps: [
      "Identify the main idea",
      "Choose a supporting benefit"
    ],
    tip: "Supporting details strengthen the central idea.",
    tags: ["reading", "supporting details"],
  },
  {
    id: "reading-v2-008",
    subject: "Reading Comprehension",
    topic: "Conclusion",
    difficulty: "hard",
    question: "Passage:\n\nNina practiced public speaking every weekend. During the school program, she delivered her speech clearly and confidently.\n\nWhat is the best conclusion?",
    choices: [
      "Practice improved Nina's speaking ability.",
      "Nina dislikes speaking in public.",
      "The school program was canceled.",
      "Nina avoided practicing."
    ],
    answerIndex: 0,
    explanation: "The passage connects repeated practice with confident performance.",
    steps: [
      "Observe effort and result",
      "Form a logical conclusion"
    ],
    tip: "Conclusions combine clues into one idea.",
    tags: ["reading", "conclusion"],
  },
  {
    id: "reading-v2-009",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "hard",
    question: "Passage:\n\nThe teacher's brief explanation was too vague for the students to fully understand the lesson.\n\nWhat does vague most nearly mean?",
    choices: [
      "Detailed",
      "Unclear",
      "Exciting",
      "Accurate"
    ],
    answerIndex: 1,
    explanation: "Vague means unclear or lacking detail.",
    steps: [
      "Use context clues",
      "Notice students struggled to understand"
    ],
    tip: "Context helps define unfamiliar words.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-010",
    subject: "Reading Comprehension",
    topic: "Logical Reasoning",
    difficulty: "hard",
    question: "Passage:\n\nThe school added more recycling bins around campus. Within a few months, litter around the grounds noticeably decreased.\n\nWhich statement is most reasonable?",
    choices: [
      "Students may have recycled more because bins were accessible.",
      "Recycling bins increase school tuition.",
      "Littering became legally impossible.",
      "Students stopped attending school."
    ],
    answerIndex: 0,
    explanation: "The added recycling bins likely encouraged proper waste disposal.",
    steps: [
      "Connect the action with the result",
      "Choose the most logical explanation"
    ],
    tip: "Logical reasoning connects evidence with conclusions.",
    tags: ["reading", "logic"],
  },
  {
    id: "reading-v2-011",
    subject: "Reading Comprehension",
    topic: "Inference",
    difficulty: "normal",
    question: "Passage:\n\nThe lights in the library remained on long after closing time while Andrea continued reviewing her notes quietly.\n\nWhat can be inferred about Andrea?",
    choices: [
      "She was preparing seriously for something important.",
      "She disliked studying.",
      "She worked at the library.",
      "She forgot to go home."
    ],
    answerIndex: 0,
    explanation: "Staying late to review notes suggests dedication and serious preparation.",
    steps: [
      "Notice Andrea stayed beyond normal hours",
      "Connect studying behavior with preparation"
    ],
    tip: "Inference combines clues into a logical idea.",
    tags: ["reading", "inference"],
  },
  {
    id: "reading-v2-012",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "normal",
    question: "Passage:\n\nThe manager gave a concise explanation that lasted less than a minute.\n\nWhat does concise most nearly mean?",
    choices: [
      "Detailed",
      "Brief",
      "Confusing",
      "Emotional"
    ],
    answerIndex: 1,
    explanation: "Concise means short and clear.",
    steps: [
      "Notice the explanation lasted less than a minute",
      "Identify the matching meaning"
    ],
    tip: "Use surrounding clues to define unfamiliar words.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-013",
    subject: "Reading Comprehension",
    topic: "Author's Tone",
    difficulty: "normal",
    question: "Passage:\n\nThe exhausted hikers finally reached the campsite just as the sun disappeared behind the mountains.\n\nWhat is the tone of the passage?",
    choices: [
      "Humorous",
      "Relieved",
      "Angry",
      "Careless"
    ],
    answerIndex: 1,
    explanation: "The hikers are exhausted but finally arrive safely, creating a relieved tone.",
    steps: [
      "Observe emotional wording",
      "Determine overall feeling"
    ],
    tip: "Tone reflects attitude or emotion.",
    tags: ["reading", "tone"],
  },
  {
    id: "reading-v2-014",
    subject: "Reading Comprehension",
    topic: "Cause and Effect",
    difficulty: "normal",
    question: "Passage:\n\nSeveral roads became flooded after the typhoon brought nonstop rain for two days.\n\nWhat caused the flooding?",
    choices: [
      "Heavy continuous rain",
      "Road repairs",
      "Strong sunlight",
      "Traffic congestion"
    ],
    answerIndex: 0,
    explanation: "The nonstop rain from the typhoon caused the flooding.",
    steps: [
      "Identify the event",
      "Find the reason stated"
    ],
    tip: "Causes happen before effects.",
    tags: ["reading", "cause effect"],
  },
  {
    id: "reading-v2-015",
    subject: "Reading Comprehension",
    topic: "Main Idea",
    difficulty: "hard",
    question: "Passage:\n\nOnline libraries allow students to access thousands of books from home. They also make research faster by offering searchable articles and digital references.\n\nWhat is the main idea of the passage?",
    choices: [
      "Libraries should remove printed books.",
      "Digital libraries provide convenient access to information.",
      "Research is impossible without technology.",
      "Students dislike traditional libraries."
    ],
    answerIndex: 1,
    explanation: "The passage focuses on the convenience and usefulness of digital libraries.",
    steps: [
      "Identify repeated ideas",
      "Summarize the central message"
    ],
    tip: "The main idea covers the whole passage.",
    tags: ["reading", "main idea"],
  },
  {
    id: "reading-v2-016",
    subject: "Reading Comprehension",
    topic: "Logical Conclusion",
    difficulty: "hard",
    question: "Passage:\n\nRico practiced basketball every morning before school and every evening after class. By the end of the season, he became one of the team's best players.\n\nWhich conclusion is most reasonable?",
    choices: [
      "Practice contributed to Rico's improvement.",
      "Rico never attended school.",
      "Basketball requires no effort.",
      "The team stopped practicing."
    ],
    answerIndex: 0,
    explanation: "The passage connects Rico's consistent practice with his improvement.",
    steps: [
      "Observe effort and result",
      "Form the most logical conclusion"
    ],
    tip: "Logical conclusions connect evidence and outcome.",
    tags: ["reading", "logic"],
  },
  {
    id: "reading-v2-017",
    subject: "Reading Comprehension",
    topic: "Supporting Detail",
    difficulty: "hard",
    question: "Passage:\n\nEating fruits regularly may improve overall health because fruits contain vitamins, minerals, and fiber.\n\nWhich detail best supports the main idea?",
    choices: [
      "Fruits contain important nutrients.",
      "Many fruits are colorful.",
      "Some people dislike vegetables.",
      "Fiber is difficult to spell."
    ],
    answerIndex: 0,
    explanation: "The nutrient content directly supports the health benefits mentioned.",
    steps: [
      "Identify the main point",
      "Choose evidence that strengthens it"
    ],
    tip: "Supporting details directly reinforce the main idea.",
    tags: ["reading", "supporting details"],
  },
  {
    id: "reading-v2-018",
    subject: "Reading Comprehension",
    topic: "Sequence",
    difficulty: "hard",
    question: "Passage:\n\nFirst, Mia gathered all the ingredients. Next, she mixed them carefully. Finally, she baked the cake for forty minutes.\n\nWhat happened immediately after gathering the ingredients?",
    choices: [
      "She baked the cake.",
      "She mixed the ingredients.",
      "She served the cake.",
      "She cleaned the kitchen."
    ],
    answerIndex: 1,
    explanation: "Mixing the ingredients happened after gathering them.",
    steps: [
      "Track sequence words",
      "Find the event after next"
    ],
    tip: "Sequence questions follow order.",
    tags: ["reading", "sequence"],
  },
  {
    id: "reading-v2-019",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "hard",
    question: "Passage:\n\nThe witness gave an accurate description of the accident, allowing investigators to understand what happened clearly.\n\nWhat does accurate most nearly mean?",
    choices: [
      "Correct",
      "Confusing",
      "Emotional",
      "Short"
    ],
    answerIndex: 0,
    explanation: "Accurate means correct or precise.",
    steps: [
      "Use surrounding context",
      "Identify matching meaning"
    ],
    tip: "Context clues define unfamiliar words.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-020",
    subject: "Reading Comprehension",
    topic: "Author's Purpose",
    difficulty: "hard",
    question: "Passage:\n\nWashing hands regularly can help reduce the spread of germs and prevent certain illnesses.\n\nWhat is the author's purpose?",
    choices: [
      "To inform readers about hygiene",
      "To entertain readers with fiction",
      "To criticize doctors",
      "To advertise soap brands"
    ],
    answerIndex: 0,
    explanation: "The passage provides factual health information about handwashing.",
    steps: [
      "Observe the informative tone",
      "Determine why the passage was written"
    ],
    tip: "Author's purpose explains the writer's goal.",
    tags: ["reading", "author purpose"],
  },
  {
    id: "reading-v2-021",
    subject: "Reading Comprehension",
    topic: "Inference",
    difficulty: "normal",
    question: "Passage:\n\nDespite the heavy rain, the volunteers continued distributing food and supplies throughout the afternoon.\n\nWhat can be inferred about the volunteers?",
    choices: [
      "They wanted to leave early.",
      "They were committed to helping others.",
      "They disliked outdoor activities.",
      "They ignored the weather forecast."
    ],
    answerIndex: 1,
    explanation: "Continuing their work despite difficult conditions shows dedication.",
    steps: [
      "Observe the volunteers' actions",
      "Infer their motivation"
    ],
    tip: "Inference comes from actions and context clues.",
    tags: ["reading", "inference"],
  },
  {
    id: "reading-v2-022",
    subject: "Reading Comprehension",
    topic: "Main Idea",
    difficulty: "normal",
    question: "Passage:\n\nPublic parks provide spaces for exercise, relaxation, and community gatherings. Many cities continue improving parks to encourage healthier lifestyles.\n\nWhat is the main idea of the passage?",
    choices: [
      "Cities dislike public gatherings.",
      "Exercise should only happen indoors.",
      "Public parks benefit communities in many ways.",
      "Relaxation is unimportant."
    ],
    answerIndex: 2,
    explanation: "The passage highlights several benefits of public parks.",
    steps: [
      "Identify repeated ideas",
      "Find the central message"
    ],
    tip: "The main idea summarizes the whole passage.",
    tags: ["reading", "main idea"],
  },
  {
    id: "reading-v2-023",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "normal",
    question: "Passage:\n\nThe speaker's energetic presentation immediately captured the audience's attention.\n\nWhat does energetic most nearly mean?",
    choices: [
      "Boring",
      "Detailed",
      "Quiet",
      "Lively"
    ],
    answerIndex: 3,
    explanation: "Energetic means lively and full of energy.",
    steps: [
      "Use surrounding context",
      "Match the best synonym"
    ],
    tip: "Context clues help define unfamiliar words.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-024",
    subject: "Reading Comprehension",
    topic: "Author's Purpose",
    difficulty: "normal",
    question: "Passage:\n\nDrinking enough water daily may help maintain body temperature and support proper body functions.\n\nWhat is the author's purpose?",
    choices: [
      "To entertain readers",
      "To advertise bottled water",
      "To inform readers about hydration",
      "To criticize unhealthy habits"
    ],
    answerIndex: 2,
    explanation: "The passage provides factual information about hydration.",
    steps: [
      "Observe the informative tone",
      "Identify the writer's goal"
    ],
    tip: "Author's purpose explains why the text was written.",
    tags: ["reading", "author purpose"],
  },
  {
    id: "reading-v2-025",
    subject: "Reading Comprehension",
    topic: "Tone",
    difficulty: "hard",
    question: "Passage:\n\nAfter months of preparation, the researchers finally celebrated when the experiment succeeded exactly as planned.\n\nWhat is the tone of the passage?",
    choices: [
      "Fearful",
      "Triumphant",
      "Confused",
      "Angry"
    ],
    answerIndex: 1,
    explanation: "Words like celebrated and succeeded create a triumphant tone.",
    steps: [
      "Identify emotional language",
      "Determine the overall mood"
    ],
    tip: "Tone reflects feelings or attitude.",
    tags: ["reading", "tone"],
  },
  {
    id: "reading-v2-026",
    subject: "Reading Comprehension",
    topic: "Cause and Effect",
    difficulty: "hard",
    question: "Passage:\n\nThe internet connection repeatedly failed during the online class, causing students to miss important instructions.\n\nWhat was the effect of the connection problem?",
    choices: [
      "Students improved their grades immediately.",
      "The internet became faster.",
      "Students missed important instructions.",
      "Teachers canceled all assignments forever."
    ],
    answerIndex: 2,
    explanation: "The passage directly states the result of the failed connection.",
    steps: [
      "Identify the cause",
      "Find the resulting event"
    ],
    tip: "Effects occur because of causes.",
    tags: ["reading", "cause effect"],
  },
  {
    id: "reading-v2-027",
    subject: "Reading Comprehension",
    topic: "Logical Conclusion",
    difficulty: "hard",
    question: "Passage:\n\nEven after failing twice, Mara continued reviewing and practicing daily until she finally passed the certification exam.\n\nWhich conclusion is most reasonable?",
    choices: [
      "Mara disliked learning.",
      "Persistence helped Mara succeed.",
      "Certification exams are impossible.",
      "Reviewing has no effect on results."
    ],
    answerIndex: 1,
    explanation: "The passage connects continuous effort with eventual success.",
    steps: [
      "Observe repeated effort",
      "Connect effort with outcome"
    ],
    tip: "Conclusions combine evidence into one idea.",
    tags: ["reading", "logic"],
  },
  {
    id: "reading-v2-028",
    subject: "Reading Comprehension",
    topic: "Supporting Details",
    difficulty: "hard",
    question: "Passage:\n\nSolar energy is becoming more popular because it reduces electricity costs and produces less pollution compared to fossil fuels.\n\nWhich detail best supports the main idea?",
    choices: [
      "Solar panels come in different sizes.",
      "Many countries experience sunny weather.",
      "Solar energy can lower electricity expenses.",
      "Pollution affects air quality."
    ],
    answerIndex: 2,
    explanation: "Lower electricity expenses directly support the advantages of solar energy.",
    steps: [
      "Identify the main idea",
      "Choose supporting evidence"
    ],
    tip: "Supporting details strengthen the central idea.",
    tags: ["reading", "supporting details"],
  },
  {
    id: "reading-v2-029",
    subject: "Reading Comprehension",
    topic: "Sequence",
    difficulty: "hard",
    question: "Passage:\n\nFirst, Tina drafted her essay outline. Then, she wrote the introduction and body paragraphs. Finally, she edited grammar mistakes before submission.\n\nWhat happened immediately before Tina edited grammar mistakes?",
    choices: [
      "She submitted the essay.",
      "She drafted the outline.",
      "She wrote the introduction and body paragraphs.",
      "She printed the essay."
    ],
    answerIndex: 2,
    explanation: "Writing the essay came immediately before editing.",
    steps: [
      "Track sequence words",
      "Find the event before finally"
    ],
    tip: "Sequence questions focus on order.",
    tags: ["reading", "sequence"],
  },
  {
    id: "reading-v2-030",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "hard",
    question: "Passage:\n\nThe athlete remained resilient despite several injuries during the season.\n\nWhat does resilient most nearly mean?",
    choices: [
      "Weak",
      "Careless",
      "Unable to continue",
      "Able to recover quickly"
    ],
    answerIndex: 3,
    explanation: "Resilient means able to recover or adapt despite difficulties.",
    steps: [
      "Use surrounding context",
      "Identify the best matching meaning"
    ],
    tip: "Context clues reveal word meaning.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-031",
    subject: "Reading Comprehension",
    topic: "Inference",
    difficulty: "hard",
    question: "Passage:\n\nEven after the meeting ended, several employees remained in the conference room discussing possible solutions to the company's declining sales.\n\nWhat can be inferred?",
    choices: [
      "The employees were unconcerned about sales.",
      "The employees were trying to solve an ongoing problem.",
      "The conference room was being renovated.",
      "The meeting had been canceled."
    ],
    answerIndex: 1,
    explanation: "The employees continued discussing solutions, showing concern about declining sales.",
    steps: [
      "Notice employees stayed after the meeting",
      "Connect discussion with problem-solving"
    ],
    tip: "Inference uses implied information.",
    tags: ["reading", "inference"],
  },
  {
    id: "reading-v2-032",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "normal",
    question: "Passage:\n\nThe athlete remained cautious while recovering from a recent injury.\n\nWhat does cautious most nearly mean?",
    choices: [
      "Careful",
      "Excited",
      "Fearless",
      "Energetic"
    ],
    answerIndex: 0,
    explanation: "Cautious means careful and avoiding unnecessary risks.",
    steps: [
      "Use the injury context",
      "Find the closest synonym"
    ],
    tip: "Context clues reveal meaning.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-033",
    subject: "Reading Comprehension",
    topic: "Main Idea",
    difficulty: "normal",
    question: "Passage:\n\nCommunity gardens allow residents to grow vegetables, strengthen neighborhood relationships, and promote healthier eating habits.\n\nWhat is the main idea?",
    choices: [
      "Vegetables are difficult to grow.",
      "Neighborhoods should avoid gardening.",
      "Community gardens provide several benefits.",
      "Healthy eating is expensive."
    ],
    answerIndex: 2,
    explanation: "The passage highlights multiple positive effects of community gardens.",
    steps: [
      "Identify repeated benefits",
      "Choose the broadest summary"
    ],
    tip: "The main idea covers all details.",
    tags: ["reading", "main idea"],
  },
  {
    id: "reading-v2-034",
    subject: "Reading Comprehension",
    topic: "Author's Purpose",
    difficulty: "normal",
    question: "Passage:\n\nTurning off unused appliances can help reduce electricity consumption and lower monthly utility costs.\n\nWhat is the author's purpose?",
    choices: [
      "To entertain readers with a story",
      "To inform readers about saving electricity",
      "To criticize utility companies",
      "To advertise appliances"
    ],
    answerIndex: 1,
    explanation: "The passage provides practical information about reducing electricity use.",
    steps: [
      "Observe the informative tone",
      "Identify why the passage was written"
    ],
    tip: "Author's purpose explains intent.",
    tags: ["reading", "author purpose"],
  },
  {
    id: "reading-v2-035",
    subject: "Reading Comprehension",
    topic: "Cause and Effect",
    difficulty: "hard",
    question: "Passage:\n\nThe school installed additional lights around the campus parking area, and reports of theft decreased over the following months.\n\nWhat was the effect of installing more lights?",
    choices: [
      "The campus became smaller.",
      "The parking area closed permanently.",
      "Reports of theft decreased.",
      "Students stopped using vehicles."
    ],
    answerIndex: 2,
    explanation: "The passage directly states that theft reports decreased afterward.",
    steps: [
      "Identify the action taken",
      "Find the resulting outcome"
    ],
    tip: "Effects happen after causes.",
    tags: ["reading", "cause effect"],
  },
  {
    id: "reading-v2-036",
    subject: "Reading Comprehension",
    topic: "Logical Conclusion",
    difficulty: "hard",
    question: "Passage:\n\nDuring the semester, Paula consistently attended tutorials and reviewed difficult lessons with classmates. Her grades improved significantly by the final exams.\n\nWhich conclusion is most reasonable?",
    choices: [
      "Paula's study habits contributed to her improvement.",
      "Tutorials always guarantee perfect grades.",
      "Classmates completed Paula's work.",
      "Final exams were canceled."
    ],
    answerIndex: 0,
    explanation: "The passage connects Paula's consistent effort with better grades.",
    steps: [
      "Observe effort and result",
      "Choose the strongest logical conclusion"
    ],
    tip: "Conclusions should match the evidence.",
    tags: ["reading", "logic"],
  },
  {
    id: "reading-v2-037",
    subject: "Reading Comprehension",
    topic: "Tone",
    difficulty: "hard",
    question: "Passage:\n\nThe villagers watched silently as the storm clouds gathered above the coastline.\n\nWhat is the tone of the passage?",
    choices: [
      "Excited",
      "Tense",
      "Humorous",
      "Joyful"
    ],
    answerIndex: 1,
    explanation: "The gathering storm clouds create tension and uncertainty.",
    steps: [
      "Identify emotional atmosphere",
      "Determine the overall mood"
    ],
    tip: "Tone reflects emotion.",
    tags: ["reading", "tone"],
  },
  {
    id: "reading-v2-038",
    subject: "Reading Comprehension",
    topic: "Supporting Details",
    difficulty: "hard",
    question: "Passage:\n\nCycling to work may reduce fuel expenses, improve fitness, and decrease traffic congestion in crowded cities.\n\nWhich detail best supports the main idea?",
    choices: [
      "Cycling can improve physical fitness.",
      "Many cities have tall buildings.",
      "Traffic lights control vehicle movement.",
      "Some workers prefer walking."
    ],
    answerIndex: 0,
    explanation: "Improved fitness directly supports the benefits of cycling.",
    steps: [
      "Identify the main point",
      "Choose evidence that supports it"
    ],
    tip: "Supporting details strengthen the idea.",
    tags: ["reading", "supporting details"],
  },
  {
    id: "reading-v2-039",
    subject: "Reading Comprehension",
    topic: "Sequence",
    difficulty: "normal",
    question: "Passage:\n\nFirst, the scientist gathered water samples from the river. Next, the samples were tested in the laboratory. Finally, the results were presented to local officials.\n\nWhat happened immediately after the water samples were gathered?",
    choices: [
      "The results were presented.",
      "The river was closed.",
      "The samples were tested in the laboratory.",
      "Officials collected taxes."
    ],
    answerIndex: 2,
    explanation: "Testing the samples occurred after gathering them.",
    steps: [
      "Track the sequence words",
      "Identify the next event"
    ],
    tip: "Sequence questions follow order.",
    tags: ["reading", "sequence"],
  },
  {
    id: "reading-v2-040",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "hard",
    question: "Passage:\n\nThe committee reached a unanimous decision after several hours of discussion.\n\nWhat does unanimous most nearly mean?",
    choices: [
      "Divided",
      "Quick",
      "Secret",
      "Fully agreed"
    ],
    answerIndex: 3,
    explanation: "Unanimous means everyone agreed on the decision.",
    steps: [
      "Use discussion context",
      "Find the closest meaning"
    ],
    tip: "Context clues reveal vocabulary meaning.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-041",
    subject: "Reading Comprehension",
    topic: "Inference",
    difficulty: "hard",
    question: "Passage:\n\nAlthough the rain continued throughout the afternoon, the volunteers remained outside distributing food and medicine to affected families.\n\nWhat can most reasonably be inferred?",
    choices: [
      "The volunteers were committed to helping others.",
      "The volunteers wanted the rain to continue.",
      "The families refused assistance.",
      "The volunteers were forced to stay outside."
    ],
    answerIndex: 0,
    explanation: "Continuing despite difficult conditions suggests dedication and commitment.",
    tip: "Inference relies on actions and implied meaning.",
    tags: ["reading", "inference"],
  },
  {
    id: "reading-v2-042",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "hard",
    question: "Passage:\n\nThe professor gave a concise explanation before moving to the next topic.\n\nWhat does concise most nearly mean?",
    choices: [
      "Complicated",
      "Detailed",
      "Emotional",
      "Brief"
    ],
    answerIndex: 3,
    explanation: "Concise means brief yet clear.",
    tip: "Use surrounding clues to identify meaning.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-043",
    subject: "Reading Comprehension",
    topic: "Main Idea",
    difficulty: "normal",
    question: "Passage:\n\nPublic transportation systems can reduce traffic congestion, lower fuel consumption, and decrease air pollution in urban areas.\n\nWhat is the main idea of the passage?",
    choices: [
      "Public transportation provides several environmental and social benefits.",
      "Fuel consumption should increase in cities.",
      "Traffic congestion cannot be solved.",
      "Urban pollution affects only drivers."
    ],
    answerIndex: 0,
    explanation: "The passage highlights multiple benefits of public transportation.",
    tip: "The main idea summarizes the entire passage.",
    tags: ["reading", "main idea"],
  },
  {
    id: "reading-v2-044",
    subject: "Reading Comprehension",
    topic: "Author's Purpose",
    difficulty: "normal",
    question: "Passage:\n\nWearing seat belts significantly reduces the risk of serious injuries during vehicle accidents.\n\nWhat is the author's purpose?",
    choices: [
      "To entertain readers with a story",
      "To advertise automobiles",
      "To inform readers about safety",
      "To criticize drivers"
    ],
    answerIndex: 2,
    explanation: "The passage presents factual safety information.",
    tip: "Author's purpose explains why the text was written.",
    tags: ["reading", "author purpose"],
  },
  {
    id: "reading-v2-045",
    subject: "Reading Comprehension",
    topic: "Tone",
    difficulty: "hard",
    question: "Passage:\n\nThe exhausted climbers finally reached the summit moments before sunset and quietly admired the view below.\n\nWhat is the tone of the passage?",
    choices: [
      "Relieved",
      "Humorous",
      "Angry",
      "Careless"
    ],
    answerIndex: 0,
    explanation: "The successful climb creates a relieved and calm emotional tone.",
    tip: "Tone reflects emotion and attitude.",
    tags: ["reading", "tone"],
  },
  {
    id: "reading-v2-046",
    subject: "Reading Comprehension",
    topic: "Cause and Effect",
    difficulty: "hard",
    question: "Passage:\n\nAfter the city added more recycling stations, the amount of plastic waste found in public parks decreased noticeably.\n\nWhat was the effect of adding recycling stations?",
    choices: [
      "Public parks closed permanently.",
      "Plastic waste in parks decreased.",
      "Citizens stopped visiting parks.",
      "The city removed garbage trucks."
    ],
    answerIndex: 1,
    explanation: "The passage directly states that plastic waste decreased afterward.",
    tip: "Effects occur after causes.",
    tags: ["reading", "cause effect"],
  },
  {
    id: "reading-v2-047",
    subject: "Reading Comprehension",
    topic: "Logical Conclusion",
    difficulty: "hard",
    question: "Passage:\n\nJared reviewed his notes every evening and completed additional practice exercises before the final examination. He later received one of the highest scores in the class.\n\nWhich conclusion is most reasonable?",
    choices: [
      "Consistent preparation contributed to Jared's success.",
      "Practice exercises guarantee perfect scores.",
      "Jared avoided attending classes.",
      "Final examinations are unnecessary."
    ],
    answerIndex: 0,
    explanation: "The passage connects preparation with improved performance.",
    tip: "Conclusions should match the evidence provided.",
    tags: ["reading", "logic"],
  },
  {
    id: "reading-v2-048",
    subject: "Reading Comprehension",
    topic: "Supporting Details",
    difficulty: "hard",
    question: "Passage:\n\nReading newspapers regularly may improve awareness of current events, strengthen vocabulary, and encourage critical thinking.\n\nWhich detail best supports the main idea?",
    choices: [
      "Newspapers are often sold daily.",
      "Vocabulary may improve through regular reading.",
      "Critical thinking is difficult for some readers.",
      "Some newspapers contain advertisements."
    ],
    answerIndex: 1,
    explanation: "Improved vocabulary directly supports the benefits of reading newspapers.",
    tip: "Supporting details strengthen the central idea.",
    tags: ["reading", "supporting details"],
  },
  {
    id: "reading-v2-049",
    subject: "Reading Comprehension",
    topic: "Sequence",
    difficulty: "normal",
    question: "Passage:\n\nFirst, the researcher gathered survey responses. Next, the data was organized into charts. Finally, the findings were presented during the conference.\n\nWhat happened immediately before the findings were presented?",
    choices: [
      "Survey responses were gathered.",
      "The conference ended.",
      "The data was organized into charts.",
      "The charts were destroyed."
    ],
    answerIndex: 2,
    explanation: "The data organization occurred before the presentation.",
    tip: "Sequence questions depend on order.",
    tags: ["reading", "sequence"],
  },
  {
    id: "reading-v2-050",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "hard",
    question: "Passage:\n\nThe committee remained reluctant to approve the proposal because several details were still unclear.\n\nWhat does reluctant most nearly mean?",
    choices: [
      "Excited",
      "Prepared",
      "Willing",
      "Hesitant"
    ],
    answerIndex: 3,
    explanation: "Reluctant means unwilling or hesitant.",
    tip: "Context clues reveal meaning.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-051",
    subject: "Reading Comprehension",
    topic: "Inference",
    difficulty: "hard",
    question: "Passage:\n\nAfter several failed attempts, Alina revised her design and tested it again until the model finally worked.\n\nWhat can be inferred about Alina?",
    choices: ["She was persistent.", "She avoided solving problems.", "She disliked testing.", "She copied the model."],
    answerIndex: 0,
    explanation: "Alina continued improving and testing despite failures, showing persistence.",
    tip: "Inference uses actions as clues.",
    tags: ["reading", "inference"],
  },
  {
    id: "reading-v2-052",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "normal",
    question: "Passage:\n\nThe instructions were explicit, so the students knew exactly what to do.\n\nWhat does explicit most nearly mean?",
    choices: ["Hidden", "Clear", "Incorrect", "Unfinished"],
    answerIndex: 1,
    explanation: "Explicit means clearly stated.",
    tip: "Use nearby clues like exactly what to do.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-053",
    subject: "Reading Comprehension",
    topic: "Main Idea",
    difficulty: "normal",
    question: "Passage:\n\nProper sleep helps students concentrate, remember lessons, and manage stress during examinations.\n\nWhat is the main idea?",
    choices: ["Sleep has several benefits for students.", "Exams should be removed.", "Students never feel stress.", "Memory does not affect learning."],
    answerIndex: 0,
    explanation: "The passage lists benefits of proper sleep for students.",
    tip: "Main idea covers all supporting details.",
    tags: ["reading", "main idea"],
  },
  {
    id: "reading-v2-054",
    subject: "Reading Comprehension",
    topic: "Cause and Effect",
    difficulty: "hard",
    question: "Passage:\n\nBecause the bridge was damaged by the flood, traffic had to be redirected through a longer route.\n\nWhat was the effect of the damaged bridge?",
    choices: ["Traffic was redirected.", "The flood disappeared.", "The bridge became stronger.", "The route became shorter."],
    answerIndex: 0,
    explanation: "The damaged bridge caused traffic to be redirected.",
    tip: "Effects happen because of causes.",
    tags: ["reading", "cause effect"],
  },
  {
    id: "reading-v2-055",
    subject: "Reading Comprehension",
    topic: "Author's Purpose",
    difficulty: "normal",
    question: "Passage:\n\nUsing reusable bags can reduce plastic waste and help protect marine life.\n\nWhat is the author's purpose?",
    choices: ["To explain an environmental benefit", "To tell a fictional story", "To criticize all shoppers", "To advertise a specific store"],
    answerIndex: 0,
    explanation: "The passage informs readers about the environmental benefit of reusable bags.",
    tip: "Purpose depends on why the text was written.",
    tags: ["reading", "author purpose"],
  },
  {
    id: "reading-v2-056",
    subject: "Reading Comprehension",
    topic: "Tone",
    difficulty: "hard",
    question: "Passage:\n\nThe village waited anxiously as the river continued rising through the night.\n\nWhat is the tone?",
    choices: ["Joyful", "Relaxed", "Tense", "Playful"],
    answerIndex: 2,
    explanation: "Words like anxiously and continued rising create a tense tone.",
    tip: "Tone reflects emotional atmosphere.",
    tags: ["reading", "tone"],
  },
  {
    id: "reading-v2-057",
    subject: "Reading Comprehension",
    topic: "Logical Conclusion",
    difficulty: "hard",
    question: "Passage:\n\nThe clinic extended its weekend hours, and more workers began scheduling checkups without missing workdays.\n\nWhich conclusion is most reasonable?",
    choices: ["Extended hours made checkups more accessible.", "Workers stopped needing doctors.", "The clinic closed on weekdays.", "Checkups became illegal."],
    answerIndex: 0,
    explanation: "Weekend hours likely helped workers access checkups more easily.",
    tip: "Choose the conclusion best supported by the evidence.",
    tags: ["reading", "logic"],
  },
  {
    id: "reading-v2-058",
    subject: "Reading Comprehension",
    topic: "Supporting Details",
    difficulty: "hard",
    question: "Passage:\n\nSchool gardens can teach students responsibility, improve science learning, and encourage healthier food choices.\n\nWhich detail supports the main idea?",
    choices: ["Gardens can improve science learning.", "Some schools have gates.", "Food choices are always easy.", "Students dislike outdoor areas."],
    answerIndex: 0,
    explanation: "Improved science learning directly supports the benefits of school gardens.",
    tip: "Supporting details strengthen the main idea.",
    tags: ["reading", "supporting details"],
  },
  {
    id: "reading-v2-059",
    subject: "Reading Comprehension",
    topic: "Sequence",
    difficulty: "normal",
    question: "Passage:\n\nFirst, the team collected data. Then, they compared the results. Finally, they wrote their report.\n\nWhat happened immediately before the report was written?",
    choices: ["The results were compared.", "The report was submitted.", "The team ignored the data.", "The project was canceled."],
    answerIndex: 0,
    explanation: "Comparing the results happened before writing the report.",
    tip: "Follow the order of events.",
    tags: ["reading", "sequence"],
  },
  {
    id: "reading-v2-060",
    subject: "Reading Comprehension",
    topic: "Vocabulary in Context",
    difficulty: "hard",
    question: "Passage:\n\nThe evidence was substantial enough to convince the committee.\n\nWhat does substantial most nearly mean?",
    choices: ["Enough or significant", "Tiny", "Unrelated", "Imaginary"],
    answerIndex: 0,
    explanation: "Substantial means significant or enough in amount.",
    tip: "Use context clues from convince the committee.",
    tags: ["reading", "vocabulary"],
  },
  {
    id: "reading-v2-061",
    subject: "Reading Comprehension",
    topic: "Inference",
    difficulty: "hard",
    question: "Passage:\n\nRina packed extra batteries and a flashlight before traveling to the island, where electricity was often unreliable.\n\nWhat can be inferred?",
    choices: ["Rina expected possible power problems.", "Rina disliked traveling.", "The island had no people.", "The flashlight was broken."],
    answerIndex: 0,
    explanation: "Packing batteries and a flashlight suggests Rina expected possible power interruptions.",
    tip: "Infer based on preparation and context.",
    tags: ["reading", "inference"],
  },
];
