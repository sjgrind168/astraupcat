import { Question } from "@/types/questions";

export const englishPack: Question[] = [
  {
    id: "english-v1-001",
    subject: "English Language",
    topic: "Grammar: Subject-Verb Agreement",
    difficulty: "hard",
    question: "Neither the students nor the teacher _____ prepared for the sudden quiz.",
    choices: ["are", "were", "is", "have"],
    answerIndex: 2,
    explanation: "When subjects are joined by 'neither...nor,' the verb agrees with the subject closest to it. 'Teacher' is singular.",
    steps: [
      "Identify the subject nearest the verb",
      "Teacher is singular",
      "Use singular verb 'is'",
    ],
    tip: "With neither/nor, check the subject closest to the verb.",
    tags: ["grammar", "subject verb agreement"],
  },

  {
    id: "english-v1-002",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "hard",
    question: "Choose the word closest in meaning to 'abundant.'",
    choices: ["Scarce", "Plentiful", "Tiny", "Weak"],
    answerIndex: 1,
    explanation: "Abundant means existing in large quantities or plentiful.",
    steps: [
      "Abundant refers to a large amount",
      "Plentiful has the closest meaning",
    ],
    tip: "Context clues often reveal whether a word means many or few.",
    tags: ["vocabulary", "synonyms"],
  },

  {
    id: "english-v1-003",
    subject: "English Language",
    topic: "Grammar: Pronouns",
    difficulty: "hard",
    question: "Each of the players must bring _____ own uniform.",
    choices: ["their", "his or her", "our", "your"],
    answerIndex: 1,
    explanation: "'Each' is singular, so it takes the singular pronoun 'his or her.'",
    steps: [
      "Each refers to one member at a time",
      "Singular pronoun is needed",
    ],
    tip: "Words like each, everyone, and anybody are singular.",
    tags: ["grammar", "pronouns"],
  },

  {
    id: "english-v1-004",
    subject: "English Language",
    topic: "Sentence Correction",
    difficulty: "beast",
    question: "Choose the grammatically correct sentence.",
    choices: [
      "She don't like waking up early.",
      "She doesn't likes waking up early.",
      "She doesn't like waking up early.",
      "She not like waking up early.",
    ],
    answerIndex: 2,
    explanation: "After 'doesn't,' the base form of the verb should be used.",
    steps: [
      "Doesn't already shows present tense",
      "Main verb should remain in base form",
      "Correct form is 'doesn't like'",
    ],
    tip: "After do/does/did, use the base verb.",
    tags: ["grammar", "sentence correction"],
  },

  {
    id: "english-v1-005",
    subject: "English Language",
    topic: "Reading Skills",
    difficulty: "hard",
    question: "A conclusion based on evidence and reasoning rather than directly stated facts is called what?",
    choices: ["Prediction", "Inference", "Opinion", "Summary"],
    answerIndex: 1,
    explanation: "An inference is a logical conclusion drawn from clues and evidence.",
    steps: [
      "The information is implied, not directly stated",
      "Logical conclusion from clues = inference",
    ],
    tip: "Inference means reading between the lines.",
    tags: ["reading", "inference"],
  },

  {
    id: "english-v1-006",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "hard",
    question: "Choose the antonym of 'ancient.'",
    choices: ["Historic", "Modern", "Traditional", "Primitive"],
    answerIndex: 1,
    explanation: "Ancient means very old, while modern refers to the present or recent time.",
    steps: [
      "Ancient = old",
      "Opposite meaning = modern",
    ],
    tip: "Antonyms are opposite meanings.",
    tags: ["vocabulary", "antonyms"],
  },

  {
    id: "english-v1-007",
    subject: "English Language",
    topic: "Grammar: Tenses",
    difficulty: "hard",
    question: "By the time we arrived, the movie _____ already started.",
    choices: ["has", "have", "had", "was"],
    answerIndex: 2,
    explanation: "Past perfect tense is used for an action completed before another past action.",
    steps: [
      "Two actions happened in the past",
      "The movie started before we arrived",
      "Use past perfect: had started",
    ],
    tip: "Past perfect = had + past participle.",
    tags: ["grammar", "tenses"],
  },

  {
    id: "english-v1-008",
    subject: "English Language",
    topic: "Context Clues",
    difficulty: "beast",
    question: "The athlete was 'elated' after winning the championship. What does 'elated' most nearly mean?",
    choices: ["Angry", "Confused", "Extremely happy", "Disappointed"],
    answerIndex: 2,
    explanation: "Winning a championship suggests a strong positive emotion. 'Elated' means extremely happy.",
    steps: [
      "Look at the context: winning a championship",
      "The emotion is strongly positive",
      "Elated = extremely happy",
    ],
    tip: "Use surrounding context to decode unfamiliar words.",
    tags: ["vocabulary", "context clues"],
  },

  {
    id: "english-v1-009",
    subject: "English Language",
    topic: "Grammar: Modifiers",
    difficulty: "beast",
    question: "Choose the sentence with the correct modifier placement.",
    choices: [
      "Running quickly, the finish line was crossed by Maria.",
      "Maria crossed the finish line running quickly.",
      "Running quickly, Maria crossed the finish line.",
      "The finish line, running quickly, Maria crossed.",
    ],
    answerIndex: 2,
    explanation: "The modifier 'running quickly' correctly describes Maria in the sentence.",
    steps: [
      "A modifier should clearly describe the correct subject",
      "Maria is the one running quickly",
    ],
    tip: "Place modifiers near the words they describe.",
    tags: ["grammar", "modifiers"],
  },

  {
    id: "english-v1-010",
    subject: "English Language",
    topic: "Logical Organization",
    difficulty: "hard",
    question: "Which transition word best shows contrast?",
    choices: ["Furthermore", "Similarly", "However", "Therefore"],
    answerIndex: 2,
    explanation: "'However' introduces a contrasting idea.",
    steps: [
      "Contrast means showing difference or opposition",
      "However is used for contrast",
    ],
    tip: "However = contrast signal.",
    tags: ["writing", "transitions"],
  },

  {
    id: "english-v1-011",
    subject: "English Language",
    topic: "Grammar: Parallelism",
    difficulty: "beast",
    question: "Choose the sentence with correct parallel structure.",
    choices: [
      "She likes reading, to swim, and biking.",
      "She likes reading, swimming, and biking.",
      "She likes to read, swimming, and biking.",
      "She likes reading, swim, and biking.",
    ],
    answerIndex: 1,
    explanation: "Items in a series should follow the same grammatical form.",
    steps: [
      "Check the structure of each item in the series",
      "Reading, swimming, and biking are all gerunds",
      "The sentence is parallel",
    ],
    tip: "Parallel structure improves clarity and balance.",
    tags: ["grammar", "parallelism"],
  },

  {
    id: "english-v1-012",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "hard",
    question: "Choose the word closest in meaning to 'reluctant.'",
    choices: ["Eager", "Unwilling", "Cheerful", "Brave"],
    answerIndex: 1,
    explanation: "Reluctant means unwilling or hesitant to do something.",
    steps: [
      "Reluctant suggests hesitation",
      "Unwilling is the closest synonym",
    ],
    tip: "Reluctant often implies doubt or hesitation.",
    tags: ["vocabulary", "synonyms"],
  },

  {
    id: "english-v1-013",
    subject: "English Language",
    topic: "Grammar: Prepositions",
    difficulty: "hard",
    question: "Which sentence uses the correct preposition?",
    choices: [
      "She is interested on music.",
      "She is interested at music.",
      "She is interested in music.",
      "She is interested with music.",
    ],
    answerIndex: 2,
    explanation: "The correct expression is 'interested in.'",
    steps: [
      "Some adjectives require specific prepositions",
      "Interested is paired with 'in'",
    ],
    tip: "Memorize common adjective-preposition combinations.",
    tags: ["grammar", "prepositions"],
  },

  {
    id: "english-v1-014",
    subject: "English Language",
    topic: "Sentence Logic",
    difficulty: "beast",
    question: "Choose the sentence that is logical and clear.",
    choices: [
      "The candle melted because it was placed near the heat.",
      "The candle melted because it was frozen.",
      "The candle melted because it became colder.",
      "The candle melted because it avoided heat.",
    ],
    answerIndex: 0,
    explanation: "Heat causes candles to melt, making the sentence logical.",
    steps: [
      "Melting happens due to heat",
      "Only the first sentence presents a logical cause",
    ],
    tip: "Check whether the cause and effect make sense.",
    tags: ["logic", "sentence analysis"],
  },

  {
    id: "english-v1-015",
    subject: "English Language",
    topic: "Vocabulary in Context",
    difficulty: "beast",
    question: "The manager's remarks were 'concise,' yet they contained all the necessary details. What does 'concise' mean?",
    choices: ["Long and confusing", "Short but complete", "Emotional", "Unclear"],
    answerIndex: 1,
    explanation: "Concise means brief while still containing important information.",
    steps: [
      "The sentence says the remarks still contained necessary details",
      "This suggests they were brief but complete",
    ],
    tip: "Concise writing is short yet meaningful.",
    tags: ["vocabulary", "context clues"],
  },

  {
    id: "english-v1-016",
    subject: "English Language",
    topic: "Grammar: Fragments",
    difficulty: "hard",
    question: "Which of the following is a complete sentence?",
    choices: [
      "Because the rain was heavy.",
      "After the meeting ended.",
      "The students finished the project early.",
      "While waiting for the bus.",
    ],
    answerIndex: 2,
    explanation: "A complete sentence must contain a subject and a complete predicate expressing a full thought.",
    steps: [
      "The first, second, and fourth choices are fragments",
      "Only the third expresses a complete idea",
    ],
    tip: "Watch for dependent clauses pretending to be sentences.",
    tags: ["grammar", "sentence fragments"],
  },

  {
    id: "english-v1-017",
    subject: "English Language",
    topic: "Reading Skills",
    difficulty: "beast",
    question: "What is the main purpose of a topic sentence in a paragraph?",
    choices: ["To end the paragraph dramatically", "To introduce the main idea", "To provide dialogue", "To repeat details"],
    answerIndex: 1,
    explanation: "A topic sentence introduces the central idea of the paragraph.",
    steps: [
      "Paragraphs focus on one central idea",
      "The topic sentence states that idea",
    ],
    tip: "Topic sentence = paragraph roadmap.",
    tags: ["reading", "paragraph structure"],
  },

  {
    id: "english-v1-018",
    subject: "English Language",
    topic: "Grammar: Verb Tense Consistency",
    difficulty: "beast",
    question: "Choose the sentence with consistent verb tense.",
    choices: [
      "She walked to the store and buys bread.",
      "She walks to the store and bought bread.",
      "She walked to the store and bought bread.",
      "She buying bread and walked to the store.",
    ],
    answerIndex: 2,
    explanation: "Both verbs should remain in the same tense for consistency.",
    steps: [
      "The sentence describes past actions",
      "Walked and bought are both past tense",
    ],
    tip: "Keep related actions in consistent tense unless time changes.",
    tags: ["grammar", "verb tense"],
  },

  {
    id: "english-v1-019",
    subject: "English Language",
    topic: "Idioms",
    difficulty: "hard",
    question: "What does the idiom 'break the ice' mean?",
    choices: ["To damage something cold", "To start a friendly conversation", "To become angry", "To leave suddenly"],
    answerIndex: 1,
    explanation: "'Break the ice' means to ease tension and begin social interaction.",
    steps: [
      "Idioms have figurative meanings",
      "Breaking the ice refers to making people comfortable",
    ],
    tip: "Idioms usually cannot be interpreted literally.",
    tags: ["idioms", "figurative language"],
  },

  {
    id: "english-v1-020",
    subject: "English Language",
    topic: "Logical Organization",
    difficulty: "beast",
    question: "Which transition word best indicates a result?",
    choices: ["Meanwhile", "Although", "Therefore", "Likewise"],
    answerIndex: 2,
    explanation: "'Therefore' signals a conclusion or result.",
    steps: [
      "Result transitions show consequence",
      "Therefore introduces a result",
    ],
    tip: "Therefore = result or conclusion.",
    tags: ["writing", "transitions"],
  },

  {
    id: "english-v1-021",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the word closest in meaning to 'meticulous.'",
    choices: ["Careless", "Detailed", "Quick", "Lazy"],
    answerIndex: 1,
    explanation: "Meticulous means showing great attention to detail.",
    steps: [
      "Meticulous people are very careful",
      "They pay close attention to details",
    ],
    tip: "Meticulous = extremely careful and detailed.",
    tags: ["vocabulary", "synonyms"],
  },

  {
    id: "english-v1-022",
    subject: "English Language",
    topic: "Grammar: Subject-Verb Agreement",
    difficulty: "beast",
    question: "The bouquet of flowers _____ on the table.",
    choices: ["are", "were", "is", "have"],
    answerIndex: 2,
    explanation: "The subject is 'bouquet,' which is singular.",
    steps: [
      "Ignore the prepositional phrase 'of flowers'",
      "Bouquet is singular",
      "Use singular verb 'is'",
    ],
    tip: "Prepositional phrases do not change the subject.",
    tags: ["grammar", "subject verb agreement"],
  },

  {
    id: "english-v1-023",
    subject: "English Language",
    topic: "Grammar: Pronouns",
    difficulty: "hard",
    question: "Maria and Ana brought _____ notebooks to class.",
    choices: ["her", "their", "his", "its"],
    answerIndex: 1,
    explanation: "Maria and Ana form a plural subject, requiring the plural pronoun 'their.'",
    steps: [
      "Maria and Ana = plural subject",
      "Plural pronoun = their",
    ],
    tip: "Plural subjects need plural pronouns.",
    tags: ["grammar", "pronouns"],
  },

  {
    id: "english-v1-024",
    subject: "English Language",
    topic: "Context Clues",
    difficulty: "beast",
    question: "The abandoned house looked 'dilapidated' after years of neglect. What does 'dilapidated' most nearly mean?",
    choices: ["Beautiful", "Well-maintained", "Falling apart", "Crowded"],
    answerIndex: 2,
    explanation: "Neglect suggests poor condition, so 'dilapidated' means falling apart.",
    steps: [
      "The house was neglected for years",
      "Neglected buildings deteriorate",
      "Dilapidated = falling apart",
    ],
    tip: "Use the surrounding situation to infer word meaning.",
    tags: ["vocabulary", "context clues"],
  },

  {
    id: "english-v1-025",
    subject: "English Language",
    topic: "Sentence Correction",
    difficulty: "beast",
    question: "Choose the grammatically correct sentence.",
    choices: [
      "Everyone have completed the assignment.",
      "Everyone has completed the assignment.",
      "Everyone completed the assignment have.",
      "Everyone having completed the assignment.",
    ],
    answerIndex: 1,
    explanation: "Everyone is singular and requires the singular verb 'has.'",
    steps: [
      "Everyone is grammatically singular",
      "Singular subject takes singular verb",
    ],
    tip: "Words like everyone and somebody are singular.",
    tags: ["grammar", "sentence correction"],
  },

  {
    id: "english-v1-026",
    subject: "English Language",
    topic: "Reading Skills",
    difficulty: "hard",
    question: "What is the primary purpose of supporting details in a paragraph?",
    choices: ["To confuse readers", "To support the main idea", "To introduce unrelated topics", "To shorten the paragraph"],
    answerIndex: 1,
    explanation: "Supporting details explain, develop, or prove the main idea.",
    steps: [
      "Paragraphs contain a main idea",
      "Supporting details strengthen that idea",
    ],
    tip: "Details should connect directly to the topic sentence.",
    tags: ["reading", "paragraph structure"],
  },

  {
    id: "english-v1-027",
    subject: "English Language",
    topic: "Grammar: Adjectives and Adverbs",
    difficulty: "beast",
    question: "Choose the correct sentence.",
    choices: [
      "She sings beautiful.",
      "She sings beautifully.",
      "She beautifully sings beautiful.",
      "She singing beautifully.",
    ],
    answerIndex: 1,
    explanation: "Adverbs modify verbs. 'Beautifully' correctly modifies 'sings.'",
    steps: [
      "Sings is a verb",
      "Verbs are modified by adverbs",
      "Beautifully is an adverb",
    ],
    tip: "-ly words are often adverbs.",
    tags: ["grammar", "adverbs"],
  },

  {
    id: "english-v1-028",
    subject: "English Language",
    topic: "Idioms",
    difficulty: "hard",
    question: "What does the idiom 'hit the books' mean?",
    choices: ["To throw books away", "To study seriously", "To buy many books", "To damage books"],
    answerIndex: 1,
    explanation: "'Hit the books' means to begin studying intensely.",
    steps: [
      "Idioms are figurative expressions",
      "The phrase refers to studying",
    ],
    tip: "Idioms rarely mean the literal words.",
    tags: ["idioms", "figurative language"],
  },

  {
    id: "english-v1-029",
    subject: "English Language",
    topic: "Logical Organization",
    difficulty: "beast",
    question: "Which transition word best indicates an example?",
    choices: ["Consequently", "For example", "Nevertheless", "Otherwise"],
    answerIndex: 1,
    explanation: "'For example' introduces a specific illustration or example.",
    steps: [
      "Examples clarify ideas",
      "'For example' signals illustration",
    ],
    tip: "Transition words guide reader understanding.",
    tags: ["writing", "transitions"],
  },

  {
    id: "english-v1-030",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the antonym of 'expand.'",
    choices: ["Increase", "Stretch", "Contract", "Develop"],
    answerIndex: 2,
    explanation: "Expand means to grow larger, while contract means to become smaller.",
    steps: [
      "Expand = become larger",
      "Opposite meaning = contract",
    ],
    tip: "Antonyms express opposite meanings.",
    tags: ["vocabulary", "antonyms"],
  },

  {
    id: "english-v1-031",
    subject: "English Language",
    topic: "Grammar: Comparatives",
    difficulty: "hard",
    question: "Choose the correct sentence.",
    choices: [
      "This exam is more easier than the last one.",
      "This exam is easiest than the last one.",
      "This exam is easier than the last one.",
      "This exam is easy than the last one.",
    ],
    answerIndex: 2,
    explanation: "Comparative adjectives like 'easier' should not be paired with 'more.'",
    steps: [
      "Comparative form of easy is easier",
      "Do not use 'more easier'",
    ],
    tip: "Avoid double comparatives like 'more better.'",
    tags: ["grammar", "comparatives"],
  },

  {
    id: "english-v1-032",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the synonym of 'vivid.'",
    choices: ["Dull", "Bright", "Weak", "Silent"],
    answerIndex: 1,
    explanation: "Vivid means bright, intense, or producing strong images.",
    steps: [
      "Vivid describes something striking or clear",
      "Bright is the closest meaning",
    ],
    tip: "Vivid writing creates strong mental images.",
    tags: ["vocabulary", "synonyms"],
  },

  {
    id: "english-v1-033",
    subject: "English Language",
    topic: "Grammar: Run-on Sentences",
    difficulty: "beast",
    question: "Choose the correctly punctuated sentence.",
    choices: [
      "The rain stopped we continued the game.",
      "The rain stopped, we continued the game.",
      "The rain stopped; we continued the game.",
      "The rain stopped because we continued the game.",
    ],
    answerIndex: 2,
    explanation: "A semicolon correctly joins two closely related independent clauses.",
    steps: [
      "Both clauses can stand alone",
      "A semicolon properly connects them",
    ],
    tip: "Semicolons can fix run-on sentences.",
    tags: ["grammar", "punctuation"],
  },

  {
    id: "english-v1-034",
    subject: "English Language",
    topic: "Context Clues",
    difficulty: "beast",
    question: "The speaker's tone was 'sarcastic,' making the audience unsure whether he was serious. What does 'sarcastic' most nearly mean?",
    choices: ["Sincere", "Mocking", "Fearful", "Silent"],
    answerIndex: 1,
    explanation: "Sarcastic remarks often mock or express irony.",
    steps: [
      "The audience could not tell if he was serious",
      "This suggests irony or mockery",
      "Sarcastic = mocking",
    ],
    tip: "Sarcasm often means saying the opposite of what is truly meant.",
    tags: ["vocabulary", "context clues"],
  },

  {
    id: "english-v1-035",
    subject: "English Language",
    topic: "Reading Skills",
    difficulty: "hard",
    question: "What is the author's purpose if the passage mainly explains how volcanoes erupt?",
    choices: ["To entertain", "To persuade", "To inform", "To criticize"],
    answerIndex: 2,
    explanation: "Explanatory passages are generally written to inform readers.",
    steps: [
      "The passage explains a process",
      "Explanation aims to inform",
    ],
    tip: "Informational texts focus on facts and explanations.",
    tags: ["reading", "author's purpose"],
  },

  {
    id: "english-v1-036",
    subject: "English Language",
    topic: "Grammar: Apostrophes",
    difficulty: "hard",
    question: "Choose the sentence with correct apostrophe usage.",
    choices: [
      "The dogs bone was buried in the yard.",
      "The dog's bone was buried in the yard.",
      "The dogs' bone was buried in the yard.",
      "The dog's' bone was buried in the yard.",
    ],
    answerIndex: 1,
    explanation: "The apostrophe before the 's' shows singular possession.",
    steps: [
      "One dog owns the bone",
      "Singular possession uses apostrophe + s",
    ],
    tip: "Dog's = belonging to one dog.",
    tags: ["grammar", "apostrophes"],
  },

  {
    id: "english-v1-037",
    subject: "English Language",
    topic: "Idioms",
    difficulty: "beast",
    question: "What does the idiom 'once in a blue moon' mean?",
    choices: ["Very often", "Rarely", "At night", "Very quickly"],
    answerIndex: 1,
    explanation: "The idiom refers to something that happens very rarely.",
    steps: [
      "Blue moons are uncommon",
      "The expression means infrequent occurrence",
    ],
    tip: "Idioms rely on figurative meaning.",
    tags: ["idioms", "figurative language"],
  },

  {
    id: "english-v1-038",
    subject: "English Language",
    topic: "Grammar: Clauses",
    difficulty: "beast",
    question: "Which sentence contains a dependent clause?",
    choices: [
      "The cat slept.",
      "Although it was raining, we continued walking.",
      "Birds fly south.",
      "The class ended early.",
    ],
    answerIndex: 1,
    explanation: "'Although it was raining' cannot stand alone and is a dependent clause.",
    steps: [
      "Dependent clauses cannot form complete sentences alone",
      "'Although it was raining' depends on the main clause",
    ],
    tip: "Words like although, because, and since often begin dependent clauses.",
    tags: ["grammar", "clauses"],
  },

  {
    id: "english-v1-039",
    subject: "English Language",
    topic: "Logical Organization",
    difficulty: "hard",
    question: "Which transition word best signals a sequence of events?",
    choices: ["Finally", "However", "Instead", "Similarly"],
    answerIndex: 0,
    explanation: "'Finally' indicates the last step or event in a sequence.",
    steps: [
      "Sequence transitions show order",
      "Finally marks the concluding step",
    ],
    tip: "Transitions help organize ideas logically.",
    tags: ["writing", "transitions"],
  },

  {
    id: "english-v1-040",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the antonym of 'generous.'",
    choices: ["Kind", "Selfish", "Helpful", "Friendly"],
    answerIndex: 1,
    explanation: "Generous means willing to give, while selfish means concerned mainly with oneself.",
    steps: [
      "Generous involves sharing or giving",
      "The opposite is selfishness",
    ],
    tip: "Antonyms express opposite ideas.",
    tags: ["vocabulary", "antonyms"],
  },

  {
    id: "english-v1-041",
    subject: "English Language",
    topic: "Grammar: Agreement",
    difficulty: "beast",
    question: "Either the captain or the sailors _____ responsible for the damaged equipment.",
    choices: ["is", "was", "are", "has"],
    answerIndex: 2,
    explanation: "With either/or, the verb agrees with the subject closest to it. 'Sailors' is plural.",
    steps: [
      "Find the subject nearest the verb",
      "Sailors is plural",
      "Use plural verb 'are'",
    ],
    tip: "In either/or constructions, check the nearest subject.",
    tags: ["grammar", "subject verb agreement"],
  },

  {
    id: "english-v1-042",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "hard",
    question: "Choose the synonym of 'frugal.'",
    choices: ["Wasteful", "Economical", "Careless", "Luxurious"],
    answerIndex: 1,
    explanation: "Frugal means careful with money or resources.",
    steps: [
      "Frugal people avoid waste",
      "Economical is the closest meaning",
    ],
    tip: "Frugal relates to careful spending.",
    tags: ["vocabulary", "synonyms"],
  },

  {
    id: "english-v1-043",
    subject: "English Language",
    topic: "Grammar: Pronoun Reference",
    difficulty: "beast",
    question: "Choose the sentence with clear pronoun reference.",
    choices: [
      "When John met Mark, he was tired.",
      "Maria told Ana that she won the contest.",
      "After Carla finished the report, Carla submitted it.",
      "The teacher spoke to the student because he was late.",
    ],
    answerIndex: 2,
    explanation: "The third sentence avoids ambiguous pronoun reference by clearly naming Carla.",
    steps: [
      "Ambiguous pronouns create confusion",
      "The third sentence clearly identifies the subject",
    ],
    tip: "Clear writing avoids uncertain pronoun references.",
    tags: ["grammar", "pronouns"],
  },

  {
    id: "english-v1-044",
    subject: "English Language",
    topic: "Context Clues",
    difficulty: "beast",
    question: "The desert was described as 'arid,' with very little rainfall throughout the year. What does 'arid' most nearly mean?",
    choices: ["Cold", "Dry", "Crowded", "Stormy"],
    answerIndex: 1,
    explanation: "The clue 'very little rainfall' indicates dryness.",
    steps: [
      "Little rainfall means lack of water",
      "Arid means dry",
    ],
    tip: "Context clues often appear near unfamiliar words.",
    tags: ["vocabulary", "context clues"],
  },

  {
    id: "english-v1-045",
    subject: "English Language",
    topic: "Reading Skills",
    difficulty: "hard",
    question: "Which statement is most likely an opinion?",
    choices: [
      "Water boils at 100°C at sea level.",
      "The Philippines is in Southeast Asia.",
      "Basketball is the most exciting sport.",
      "Earth revolves around the Sun.",
    ],
    answerIndex: 2,
    explanation: "Opinions express personal beliefs or preferences and cannot be proven universally true.",
    steps: [
      "Facts can be verified",
      "Excitement is subjective",
      "Therefore the statement is an opinion",
    ],
    tip: "Opinions usually involve judgment or preference.",
    tags: ["reading", "fact and opinion"],
  },

  {
    id: "english-v1-046",
    subject: "English Language",
    topic: "Grammar: Capitalization",
    difficulty: "hard",
    question: "Choose the sentence with correct capitalization.",
    choices: [
      "We visited rizal park last summer.",
      "We visited Rizal park last summer.",
      "We visited Rizal Park last summer.",
      "We visited rizal Park last summer.",
    ],
    answerIndex: 2,
    explanation: "Proper nouns such as place names require capitalization.",
    steps: [
      "Rizal Park is a proper noun",
      "Both words must be capitalized",
    ],
    tip: "Names of places, people, and institutions are capitalized.",
    tags: ["grammar", "capitalization"],
  },

  {
    id: "english-v1-047",
    subject: "English Language",
    topic: "Idioms",
    difficulty: "beast",
    question: "What does the idiom 'under the weather' mean?",
    choices: ["Outside during a storm", "Feeling sick", "Traveling abroad", "Feeling excited"],
    answerIndex: 1,
    explanation: "The idiom means feeling ill or unwell.",
    steps: [
      "The phrase is figurative",
      "It refers to poor health",
    ],
    tip: "Idioms usually have meanings unrelated to the literal words.",
    tags: ["idioms", "figurative language"],
  },

  {
    id: "english-v1-048",
    subject: "English Language",
    topic: "Grammar: Sentence Structure",
    difficulty: "beast",
    question: "Which sentence is compound?",
    choices: [
      "The child laughed.",
      "Although it rained, we traveled.",
      "The lights flickered, and the crowd screamed.",
      "Running quickly, she reached the gate.",
    ],
    answerIndex: 2,
    explanation: "A compound sentence contains two independent clauses joined by a conjunction.",
    steps: [
      "Both clauses can stand alone",
      "They are joined by 'and'",
    ],
    tip: "Compound sentences contain two complete thoughts.",
    tags: ["grammar", "sentence structure"],
  },

  {
    id: "english-v1-049",
    subject: "English Language",
    topic: "Logical Organization",
    difficulty: "hard",
    question: "Which transition word best signals similarity?",
    choices: ["Likewise", "However", "Therefore", "Meanwhile"],
    answerIndex: 0,
    explanation: "'Likewise' indicates similarity between ideas.",
    steps: [
      "Similarity transitions connect related ideas",
      "Likewise shows similarity",
    ],
    tip: "Likewise = similarly.",
    tags: ["writing", "transitions"],
  },

  {
    id: "english-v1-050",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the antonym of 'scarce.'",
    choices: ["Rare", "Limited", "Abundant", "Tiny"],
    answerIndex: 2,
    explanation: "Scarce means lacking or limited, while abundant means plentiful.",
    steps: [
      "Scarce = limited supply",
      "Opposite meaning = abundant",
    ],
    tip: "Antonyms express opposite meanings.",
    tags: ["vocabulary", "antonyms"],
  },

  {
    id: "english-v1-051",
    subject: "English Language",
    topic: "Grammar: Subject-Verb Agreement",
    difficulty: "beast",
    question: "The list of required documents _____ on the bulletin board.",
    choices: ["are", "were", "is", "have"],
    answerIndex: 2,
    explanation: "The subject is 'list,' which is singular. The phrase 'of required documents' does not change the subject.",
    steps: [
      "Identify the true subject",
      "List is singular",
      "Use the singular verb 'is'",
    ],
    tip: "Ignore prepositional phrases when checking subject-verb agreement.",
    tags: ["grammar", "subject verb agreement"],
  },

  {
    id: "english-v1-052",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the word closest in meaning to 'persistent.'",
    choices: ["Easily discouraged", "Continuing despite difficulty", "Careless", "Silent"],
    answerIndex: 1,
    explanation: "Persistent means continuing firmly despite obstacles or difficulty.",
    steps: [
      "Persistent suggests not giving up",
      "The closest meaning is continuing despite difficulty",
    ],
    tip: "Persistent people keep going even when something is hard.",
    tags: ["vocabulary", "synonyms"],
  },

  {
    id: "english-v1-053",
    subject: "English Language",
    topic: "Grammar: Pronouns",
    difficulty: "hard",
    question: "Neither Carla nor her sisters brought _____ umbrellas.",
    choices: ["her", "his", "their", "its"],
    answerIndex: 2,
    explanation: "The pronoun refers to 'sisters,' the plural noun closest to the blank, so 'their' is appropriate.",
    steps: [
      "Find the closest noun before the pronoun",
      "Sisters is plural",
      "Use the plural possessive pronoun 'their'",
    ],
    tip: "Pronouns must agree clearly with their antecedents.",
    tags: ["grammar", "pronouns"],
  },

  {
    id: "english-v1-054",
    subject: "English Language",
    topic: "Sentence Correction",
    difficulty: "beast",
    question: "Choose the sentence that is grammatically correct.",
    choices: [
      "The students was excited for the field trip.",
      "The students were excited for the field trip.",
      "The students is excited for the field trip.",
      "The students be excited for the field trip.",
    ],
    answerIndex: 1,
    explanation: "'Students' is plural, so it requires the plural past-tense verb 'were.'",
    steps: [
      "Identify the subject: students",
      "Students is plural",
      "Use 'were'",
    ],
    tip: "Plural subjects usually take plural verbs.",
    tags: ["grammar", "sentence correction"],
  },

  {
    id: "english-v1-055",
    subject: "English Language",
    topic: "Context Clues",
    difficulty: "beast",
    question: "The room was so 'cluttered' that Maria could hardly find her notebook among the piles of paper. What does 'cluttered' most nearly mean?",
    choices: ["Empty", "Messy", "Quiet", "Bright"],
    answerIndex: 1,
    explanation: "Piles of paper and difficulty finding something suggest that the room was messy.",
    steps: [
      "Use nearby details as clues",
      "Piles of paper suggest disorder",
      "Cluttered means messy or crowded with things",
    ],
    tip: "Context clues often describe the effect of an unfamiliar word.",
    tags: ["vocabulary", "context clues"],
  },

  {
    id: "english-v1-056",
    subject: "English Language",
    topic: "Grammar: Active and Passive Voice",
    difficulty: "hard",
    question: "Which sentence is written in active voice?",
    choices: [
      "The ball was kicked by Leo.",
      "The report was written by the secretary.",
      "Leo kicked the ball.",
      "The window was opened by Ana.",
    ],
    answerIndex: 2,
    explanation: "In active voice, the subject performs the action. Leo performs the action of kicking.",
    steps: [
      "Find who performs the action",
      "In 'Leo kicked the ball,' Leo performs the action",
      "That sentence is active voice",
    ],
    tip: "Active voice: subject does the action.",
    tags: ["grammar", "voice"],
  },

  {
    id: "english-v1-057",
    subject: "English Language",
    topic: "Reading Skills",
    difficulty: "hard",
    question: "Which sentence would best support the claim: 'Libraries remain important in modern communities'?",
    choices: [
      "Libraries provide free access to books, internet, and study spaces.",
      "Some people prefer watching television.",
      "Many buildings are painted white.",
      "Coffee shops sell drinks.",
    ],
    answerIndex: 0,
    explanation: "The first sentence directly explains why libraries are useful to communities.",
    steps: [
      "Identify the claim",
      "Choose the detail that directly supports it",
      "Free access to resources supports the importance of libraries",
    ],
    tip: "Strong supporting details must connect directly to the claim.",
    tags: ["reading", "supporting details"],
  },

  {
    id: "english-v1-058",
    subject: "English Language",
    topic: "Grammar: Parallelism",
    difficulty: "beast",
    question: "Choose the sentence with correct parallel structure.",
    choices: [
      "The program teaches students to analyze, writing, and speaking clearly.",
      "The program teaches students to analyze, to write, and to speak clearly.",
      "The program teaches students analyzing, to write, and speak clearly.",
      "The program teaches students analyze, writing, and to speak clearly.",
    ],
    answerIndex: 1,
    explanation: "The items 'to analyze,' 'to write,' and 'to speak' follow the same grammatical pattern.",
    steps: [
      "Compare the forms in the series",
      "All three correct items use 'to' + base verb",
      "The structure is parallel",
    ],
    tip: "Parallel items should match in grammatical form.",
    tags: ["grammar", "parallelism"],
  },

  {
    id: "english-v1-059",
    subject: "English Language",
    topic: "Logical Organization",
    difficulty: "hard",
    question: "Which transition word best shows cause and effect?",
    choices: ["Similarly", "Because", "Meanwhile", "For example"],
    answerIndex: 1,
    explanation: "'Because' introduces a reason or cause.",
    steps: [
      "Cause and effect explains why something happens",
      "Because signals a cause",
    ],
    tip: "Because often introduces the reason behind an effect.",
    tags: ["writing", "transitions"],
  },

  {
    id: "english-v1-060",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the antonym of 'optimistic.'",
    choices: ["Hopeful", "Positive", "Pessimistic", "Confident"],
    answerIndex: 2,
    explanation: "Optimistic means expecting good outcomes, while pessimistic means expecting bad outcomes.",
    steps: [
      "Optimistic = hopeful or positive",
      "The opposite is pessimistic",
    ],
    tip: "Optimistic and pessimistic are common opposites.",
    tags: ["vocabulary", "antonyms"],
  },

  {
    id: "english-v1-061",
    subject: "English Language",
    topic: "Grammar: Subject-Verb Agreement",
    difficulty: "beast",
    question: "The quality of the answers _____ more important than the number of pages.",
    choices: ["are", "were", "is", "have"],
    answerIndex: 2,
    explanation: "The subject is 'quality,' which is singular. The phrase 'of the answers' does not change the subject.",
    steps: [
      "Identify the true subject: quality",
      "Quality is singular",
      "Use the singular verb 'is'",
    ],
    tip: "Do not let words inside prepositional phrases confuse subject-verb agreement.",
    tags: ["grammar", "subject verb agreement"],
  },

  {
    id: "english-v1-062",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the word closest in meaning to 'scarcity.'",
    choices: ["Shortage", "Plenty", "Luxury", "Speed"],
    answerIndex: 0,
    explanation: "Scarcity means a shortage or lack of something.",
    steps: [
      "Scarcity suggests limited supply",
      "Shortage has the closest meaning",
    ],
    tip: "Scarcity is the opposite of abundance.",
    tags: ["vocabulary", "synonyms"],
  },

  {
    id: "english-v1-063",
    subject: "English Language",
    topic: "Grammar: Pronoun Case",
    difficulty: "hard",
    question: "Choose the correct sentence.",
    choices: [
      "Me and Ana joined the contest.",
      "Ana and me joined the contest.",
      "Ana and I joined the contest.",
      "I and Ana joined the contest.",
    ],
    answerIndex: 2,
    explanation: "'I' is the correct subject pronoun, and it is polite/style-standard to place the other person first.",
    steps: [
      "The pronoun is part of the subject",
      "Use subject pronoun 'I'",
      "Place Ana before I",
    ],
    tip: "Use 'I' for subjects and 'me' for objects.",
    tags: ["grammar", "pronouns"],
  },

  {
    id: "english-v1-064",
    subject: "English Language",
    topic: "Sentence Correction",
    difficulty: "beast",
    question: "Choose the sentence with correct punctuation.",
    choices: [
      "After the bell rang the students left the room.",
      "After the bell rang, the students left the room.",
      "After, the bell rang the students left the room.",
      "After the bell, rang the students left the room.",
    ],
    answerIndex: 1,
    explanation: "An introductory dependent clause should be followed by a comma.",
    steps: [
      "'After the bell rang' is introductory",
      "Place a comma before the main clause",
      "Correct sentence: After the bell rang, the students left the room.",
    ],
    tip: "Introductory clauses often need a comma before the main clause.",
    tags: ["grammar", "punctuation"],
  },

  {
    id: "english-v1-065",
    subject: "English Language",
    topic: "Context Clues",
    difficulty: "beast",
    question: "The instructions were 'ambiguous,' so the students asked the teacher to clarify them. What does 'ambiguous' most nearly mean?",
    choices: ["Clear", "Uncertain or unclear", "Funny", "Brief"],
    answerIndex: 1,
    explanation: "The students asked for clarification because the instructions were unclear or had more than one possible meaning.",
    steps: [
      "Look at the result: students asked for clarification",
      "This suggests the instructions were not clear",
      "Ambiguous means unclear or open to more than one meaning",
    ],
    tip: "Clarify is a strong clue for words meaning unclear.",
    tags: ["vocabulary", "context clues"],
  },

  {
    id: "english-v1-066",
    subject: "English Language",
    topic: "Grammar: Misplaced Modifiers",
    difficulty: "beast",
    question: "Choose the sentence with the clearest modifier placement.",
    choices: [
      "Covered in chocolate, Mia ate the cake.",
      "Mia ate the cake covered in chocolate.",
      "The cake ate Mia covered in chocolate.",
      "Covered in chocolate, the plate held Mia's cake.",
    ],
    answerIndex: 1,
    explanation: "The phrase 'covered in chocolate' clearly describes the cake.",
    steps: [
      "Identify what is covered in chocolate",
      "The cake, not Mia, is covered in chocolate",
      "Place the modifier near 'cake'",
    ],
    tip: "Modifiers should be placed next to the words they describe.",
    tags: ["grammar", "modifiers"],
  },

  {
    id: "english-v1-067",
    subject: "English Language",
    topic: "Reading Skills",
    difficulty: "hard",
    question: "Which sentence best states a claim?",
    choices: [
      "The school library opens at 8 a.m.",
      "Students should be encouraged to read for at least twenty minutes daily.",
      "There are tables inside the library.",
      "The library has blue chairs.",
    ],
    answerIndex: 1,
    explanation: "A claim states a position that can be supported with reasons or evidence.",
    steps: [
      "A claim is arguable",
      "The sentence about encouraging daily reading takes a position",
      "It can be supported with evidence",
    ],
    tip: "Claims often use words like should, must, or ought to.",
    tags: ["reading", "claims"],
  },

  {
    id: "english-v1-068",
    subject: "English Language",
    topic: "Grammar: Parallelism",
    difficulty: "beast",
    question: "Choose the sentence with correct parallel structure.",
    choices: [
      "The coach values discipline, teamwork, and being honest.",
      "The coach values being disciplined, teamwork, and honesty.",
      "The coach values discipline, teamwork, and honesty.",
      "The coach values discipline, to work as a team, and honesty.",
    ],
    answerIndex: 2,
    explanation: "The nouns 'discipline,' 'teamwork,' and 'honesty' follow the same grammatical form.",
    steps: [
      "Check the items in the list",
      "All three are nouns",
      "The list is parallel",
    ],
    tip: "Parallel lists should use matching grammatical forms.",
    tags: ["grammar", "parallelism"],
  },

  {
    id: "english-v1-069",
    subject: "English Language",
    topic: "Logical Organization",
    difficulty: "hard",
    question: "Which transition best completes the sentence? 'The first experiment failed. _____, the team revised its method and tried again.'",
    choices: ["However", "For example", "Similarly", "Instead"],
    answerIndex: 3,
    explanation: "'Instead' shows that the team chose a different action after the failed attempt.",
    steps: [
      "The second sentence describes an alternative action",
      "Instead signals replacement or a different choice",
    ],
    tip: "Choose transitions based on the relationship between ideas.",
    tags: ["writing", "transitions"],
  },

  {
    id: "english-v1-070",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the antonym of 'temporary.'",
    choices: ["Brief", "Permanent", "Short-lived", "Momentary"],
    answerIndex: 1,
    explanation: "Temporary means lasting for a limited time, while permanent means lasting indefinitely.",
    steps: [
      "Temporary = not lasting long",
      "Permanent = lasting or continuing",
      "Permanent is the opposite",
    ],
    tip: "Temporary and permanent are common opposites.",
    tags: ["vocabulary", "antonyms"],
  },

  {
    id: "english-v1-071",
    subject: "English Language",
    topic: "Grammar: Subject-Verb Agreement",
    difficulty: "beast",
    question: "Neither the manager nor the employees _____ aware of the schedule change.",
    choices: ["is", "was", "are", "has"],
    answerIndex: 2,
    explanation: "With 'neither...nor,' the verb agrees with the subject closest to it. 'Employees' is plural, so use 'are.'",
    steps: [
      "Find the subject closest to the verb",
      "Employees is plural",
      "Use the plural verb 'are'",
    ],
    tip: "With neither/nor, check the nearest subject before choosing the verb.",
    tags: ["grammar", "subject verb agreement"],
  },

  {
    id: "english-v1-072",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the word closest in meaning to 'resilient.'",
    choices: ["Easily broken", "Able to recover", "Careless", "Unclear"],
    answerIndex: 1,
    explanation: "Resilient means able to recover or bounce back after difficulty.",
    steps: [
      "Resilient describes strength after hardship",
      "Able to recover is the closest meaning",
    ],
    tip: "Resilience is the ability to recover from problems.",
    tags: ["vocabulary", "synonyms"],
  },

  {
    id: "english-v1-073",
    subject: "English Language",
    topic: "Grammar: Pronoun Agreement",
    difficulty: "hard",
    question: "Every student should submit _____ project before Friday.",
    choices: ["their", "his or her", "our", "your"],
    answerIndex: 1,
    explanation: "'Every student' is singular, so the formal singular pronoun choice is 'his or her.'",
    steps: [
      "Every student refers to one student at a time",
      "Use a singular possessive pronoun",
    ],
    tip: "Every, each, and anyone are grammatically singular.",
    tags: ["grammar", "pronouns"],
  },

  {
    id: "english-v1-074",
    subject: "English Language",
    topic: "Sentence Correction",
    difficulty: "beast",
    question: "Choose the sentence that is grammatically correct.",
    choices: [
      "If I was you, I would review the notes again.",
      "If I were you, I would review the notes again.",
      "If I am you, I would review the notes again.",
      "If I be you, I would review the notes again.",
    ],
    answerIndex: 1,
    explanation: "For unreal or hypothetical situations, standard English uses 'were' in the subjunctive mood.",
    steps: [
      "The sentence is hypothetical",
      "Use 'were' for unreal condition",
      "Correct form: If I were you",
    ],
    tip: "Use 'If I were...' for hypothetical advice.",
    tags: ["grammar", "subjunctive"],
  },

  {
    id: "english-v1-075",
    subject: "English Language",
    topic: "Context Clues",
    difficulty: "beast",
    question: "The old bridge was 'fragile,' so engineers warned people not to cross it. What does 'fragile' most nearly mean?",
    choices: ["Strong", "Easily broken", "New", "Wide"],
    answerIndex: 1,
    explanation: "The warning not to cross the bridge suggests that it could break easily.",
    steps: [
      "Look at the warning",
      "Engineers warned people not to cross",
      "Fragile means easily broken or damaged",
    ],
    tip: "Safety warnings often reveal danger-related vocabulary.",
    tags: ["vocabulary", "context clues"],
  },

  {
    id: "english-v1-076",
    subject: "English Language",
    topic: "Grammar: Sentence Fragments",
    difficulty: "hard",
    question: "Which option is a complete sentence?",
    choices: [
      "Although the class ended early.",
      "Because the road was flooded.",
      "The team celebrated after the match.",
      "While waiting for the announcement.",
    ],
    answerIndex: 2,
    explanation: "The third option has a subject and predicate and expresses a complete thought.",
    steps: [
      "Check whether the idea is complete",
      "The first, second, and fourth options are dependent fragments",
      "The third option is complete",
    ],
    tip: "A complete sentence must express a full thought.",
    tags: ["grammar", "sentence fragments"],
  },

  {
    id: "english-v1-077",
    subject: "English Language",
    topic: "Reading Skills",
    difficulty: "hard",
    question: "Which sentence best supports the claim: 'Regular sleep improves student performance'?",
    choices: [
      "Students who sleep enough often concentrate better in class.",
      "Some students own alarm clocks.",
      "Classrooms usually have chairs.",
      "Homework can be submitted online.",
    ],
    answerIndex: 0,
    explanation: "Better concentration directly supports the claim that sleep improves performance.",
    steps: [
      "Identify the claim about sleep and performance",
      "Choose the detail that explains a performance benefit",
    ],
    tip: "Supporting evidence must connect directly to the claim.",
    tags: ["reading", "supporting details"],
  },

  {
    id: "english-v1-078",
    subject: "English Language",
    topic: "Grammar: Parallelism",
    difficulty: "beast",
    question: "Choose the sentence with correct parallel structure.",
    choices: [
      "The seminar focused on planning, budgeting, and evaluating projects.",
      "The seminar focused on planning, to budget, and evaluating projects.",
      "The seminar focused on planning, budget, and to evaluate projects.",
      "The seminar focused on to plan, budgeting, and evaluate projects.",
    ],
    answerIndex: 0,
    explanation: "The words 'planning,' 'budgeting,' and 'evaluating' use the same grammatical form.",
    steps: [
      "Check the items in the series",
      "All three are gerunds ending in -ing",
      "The list is parallel",
    ],
    tip: "Parallel structure keeps list items in the same form.",
    tags: ["grammar", "parallelism"],
  },

  {
    id: "english-v1-079",
    subject: "English Language",
    topic: "Logical Organization",
    difficulty: "hard",
    question: "Which transition best completes the sentence? 'The road was flooded; _____, classes were suspended.'",
    choices: ["however", "therefore", "similarly", "meanwhile"],
    answerIndex: 1,
    explanation: "'Therefore' shows the result of the flooded road.",
    steps: [
      "Flooding caused a consequence",
      "Class suspension is the result",
      "Therefore signals result",
    ],
    tip: "Therefore introduces a conclusion or result.",
    tags: ["writing", "transitions"],
  },

  {
    id: "english-v1-080",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the antonym of 'accurate.'",
    choices: ["Correct", "Precise", "Incorrect", "Exact"],
    answerIndex: 2,
    explanation: "Accurate means correct or exact, so the opposite is incorrect.",
    steps: [
      "Accurate = correct",
      "The opposite of correct is incorrect",
    ],
    tip: "Accurate and incorrect point in opposite directions.",
    tags: ["vocabulary", "antonyms"],
  },

  {
    id: "english-v1-081",
    subject: "English Language",
    topic: "Grammar: Subject-Verb Agreement",
    difficulty: "beast",
    question: "The results of the survey _____ surprising to the researchers.",
    choices: ["was", "is", "were", "has"],
    answerIndex: 2,
    explanation: "The subject is 'results,' which is plural, so the verb should be 'were.'",
    steps: [
      "Identify the true subject: results",
      "Results is plural",
      "Use the plural verb 'were'",
    ],
    tip: "Find the main subject before choosing the verb.",
    tags: ["grammar", "subject verb agreement"],
  },

  {
    id: "english-v1-082",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the word closest in meaning to 'inevitable.'",
    choices: ["Avoidable", "Certain to happen", "Unimportant", "Temporary"],
    answerIndex: 1,
    explanation: "Inevitable means certain to happen and impossible or very difficult to avoid.",
    steps: [
      "Inevitable suggests something cannot be avoided",
      "Certain to happen is the closest meaning",
    ],
    tip: "Inevitable events are bound to happen.",
    tags: ["vocabulary", "synonyms"],
  },

  {
    id: "english-v1-083",
    subject: "English Language",
    topic: "Grammar: Pronouns",
    difficulty: "hard",
    question: "Choose the correct sentence.",
    choices: [
      "The teacher gave the award to Ana and I.",
      "The teacher gave the award to Ana and me.",
      "The teacher gave the award to me and Ana I.",
      "The teacher gave the award to I and Ana.",
    ],
    answerIndex: 1,
    explanation: "After the preposition 'to,' the object pronoun 'me' is correct.",
    steps: [
      "The pronoun receives the action after 'to'",
      "Use object pronoun 'me'",
      "Correct phrase: to Ana and me",
    ],
    tip: "Use 'me' after prepositions like to, for, with, and between.",
    tags: ["grammar", "pronouns"],
  },

  {
    id: "english-v1-084",
    subject: "English Language",
    topic: "Sentence Correction",
    difficulty: "beast",
    question: "Choose the sentence with correct comma usage.",
    choices: [
      "Before the exam students reviewed quietly.",
      "Before the exam, students reviewed quietly.",
      "Before, the exam students reviewed quietly.",
      "Before the exam students, reviewed quietly.",
    ],
    answerIndex: 1,
    explanation: "An introductory phrase such as 'Before the exam' is commonly followed by a comma for clarity.",
    steps: [
      "Identify the introductory phrase",
      "Place a comma after it",
      "The main clause follows clearly",
    ],
    tip: "Short introductory phrases may use commas for clarity, especially in test grammar questions.",
    tags: ["grammar", "punctuation"],
  },

  {
    id: "english-v1-085",
    subject: "English Language",
    topic: "Context Clues",
    difficulty: "beast",
    question: "The committee reached a 'unanimous' decision; every member agreed with the proposal. What does 'unanimous' mean?",
    choices: ["Divided", "Agreed by all", "Secret", "Unfinished"],
    answerIndex: 1,
    explanation: "The clue 'every member agreed' shows that unanimous means agreed by all.",
    steps: [
      "Look for the explanation after the semicolon",
      "Every member agreed",
      "Unanimous means agreed by all",
    ],
    tip: "A semicolon can connect a word with its explanation.",
    tags: ["vocabulary", "context clues"],
  },

  {
    id: "english-v1-086",
    subject: "English Language",
    topic: "Grammar: Active and Passive Voice",
    difficulty: "hard",
    question: "Which sentence is in passive voice?",
    choices: [
      "The scientist recorded the results.",
      "The results were recorded by the scientist.",
      "The scientist explained the results.",
      "The class discussed the results.",
    ],
    answerIndex: 1,
    explanation: "Passive voice occurs when the subject receives the action. 'The results' receive the action of being recorded.",
    steps: [
      "Find who or what receives the action",
      "The results were recorded",
      "This is passive voice",
    ],
    tip: "Passive voice often uses a form of 'be' plus a past participle, sometimes followed by 'by.'",
    tags: ["grammar", "voice"],
  },

  {
    id: "english-v1-087",
    subject: "English Language",
    topic: "Reading Skills",
    difficulty: "hard",
    question: "Which statement best identifies a counterargument?",
    choices: [
      "A reason supporting the writer's claim",
      "An opposing viewpoint to the writer's claim",
      "A sentence that defines a word",
      "A detail that repeats the title",
    ],
    answerIndex: 1,
    explanation: "A counterargument presents an opposing viewpoint or objection to a claim.",
    steps: [
      "A claim is a position",
      "A counterargument goes against or challenges that position",
    ],
    tip: "Counter means opposite or against.",
    tags: ["reading", "argument"],
  },

  {
    id: "english-v1-088",
    subject: "English Language",
    topic: "Grammar: Parallelism",
    difficulty: "beast",
    question: "Choose the sentence with correct parallel structure.",
    choices: [
      "The applicant was asked to submit a resume, writing an essay, and to attend an interview.",
      "The applicant was asked to submit a resume, to write an essay, and to attend an interview.",
      "The applicant was asked submitting a resume, to write an essay, and attend an interview.",
      "The applicant was asked to submit a resume, wrote an essay, and attending an interview.",
    ],
    answerIndex: 1,
    explanation: "All items use the same structure: 'to' plus a base verb.",
    steps: [
      "Check each item in the list",
      "to submit, to write, and to attend match",
      "The sentence is parallel",
    ],
    tip: "Parallelism makes lists balanced and easier to read.",
    tags: ["grammar", "parallelism"],
  },

  {
    id: "english-v1-089",
    subject: "English Language",
    topic: "Logical Organization",
    difficulty: "beast",
    question: "Which transition best completes the sentence? 'Many students wanted to attend the seminar. _____, the room could hold only fifty people.'",
    choices: ["Therefore", "However", "For example", "Likewise"],
    answerIndex: 1,
    explanation: "'However' shows contrast between many students wanting to attend and the limited room capacity.",
    steps: [
      "The first idea shows high demand",
      "The second idea shows limitation",
      "Contrast transition is needed",
    ],
    tip: "However signals contrast or limitation.",
    tags: ["writing", "transitions"],
  },

  {
    id: "english-v1-090",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the antonym of 'transparent.'",
    choices: ["Clear", "Obvious", "Opaque", "Visible"],
    answerIndex: 2,
    explanation: "Transparent means allowing light to pass through clearly, while opaque means not transparent.",
    steps: [
      "Transparent = see-through",
      "Opaque = not see-through",
      "Opaque is the opposite",
    ],
    tip: "Transparent and opaque are common science and vocabulary opposites.",
    tags: ["vocabulary", "antonyms"],
  },

  {
    id: "english-v1-091",
    subject: "English Language",
    topic: "Grammar: Subject-Verb Agreement",
    difficulty: "beast",
    question: "One of the students _____ chosen to represent the class.",
    choices: ["were", "have", "was", "are"],
    answerIndex: 2,
    explanation: "The subject is 'one,' which is singular, so the correct verb is 'was.'",
    steps: [
      "Identify the true subject",
      "One is singular",
      "Use singular verb 'was'",
    ],
    tip: "The phrase 'of the students' does not change the singular subject 'one.'",
    tags: ["grammar", "subject verb agreement"],
  },

  {
    id: "english-v1-092",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the word closest in meaning to 'obstacle.'",
    choices: ["Advantage", "Barrier", "Reward", "Shortcut"],
    answerIndex: 1,
    explanation: "An obstacle is something that blocks progress or creates difficulty.",
    steps: [
      "Obstacle prevents movement or progress",
      "Barrier has the closest meaning",
    ],
    tip: "Obstacles create challenges or delays.",
    tags: ["vocabulary", "synonyms"],
  },

  {
    id: "english-v1-093",
    subject: "English Language",
    topic: "Grammar: Pronouns",
    difficulty: "hard",
    question: "Everyone in the group submitted _____ assignment on time.",
    choices: ["their", "his or her", "our", "your"],
    answerIndex: 1,
    explanation: "Everyone is grammatically singular, so the singular pronoun 'his or her' is formally correct.",
    steps: [
      "Everyone refers to one person at a time",
      "Use singular pronoun agreement",
    ],
    tip: "Words like everyone and anybody are singular in formal grammar.",
    tags: ["grammar", "pronouns"],
  },

  {
    id: "english-v1-094",
    subject: "English Language",
    topic: "Sentence Correction",
    difficulty: "beast",
    question: "Choose the sentence that is grammatically correct.",
    choices: [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answers were correct.",
      "Neither of the answers have correct.",
    ],
    answerIndex: 1,
    explanation: "Neither is singular and requires the singular verb 'is.'",
    steps: [
      "Neither is singular",
      "Singular subjects take singular verbs",
      "Use 'is correct'",
    ],
    tip: "Neither and either are usually singular in standard grammar.",
    tags: ["grammar", "sentence correction"],
  },

  {
    id: "english-v1-095",
    subject: "English Language",
    topic: "Context Clues",
    difficulty: "beast",
    question: "The witness gave a 'vague' response, so the investigators asked for more details. What does 'vague' most nearly mean?",
    choices: ["Clear", "Detailed", "Unclear", "Excited"],
    answerIndex: 2,
    explanation: "Because investigators asked for more details, the response was unclear or incomplete.",
    steps: [
      "Investigators wanted more details",
      "The response lacked clarity",
      "Vague means unclear",
    ],
    tip: "Requests for clarification are clues that something was vague.",
    tags: ["vocabulary", "context clues"],
  },

  {
    id: "english-v1-096",
    subject: "English Language",
    topic: "Grammar: Active and Passive Voice",
    difficulty: "hard",
    question: "Which sentence is written in active voice?",
    choices: [
      "The song was performed by the choir.",
      "The homework was checked by the teacher.",
      "The choir performed the song.",
      "The door was opened by the guard.",
    ],
    answerIndex: 2,
    explanation: "In active voice, the subject performs the action. The choir performs the action of performing.",
    steps: [
      "Identify who performs the action",
      "The choir performs the action",
      "That sentence is active voice",
    ],
    tip: "Active voice usually sounds more direct and clear.",
    tags: ["grammar", "voice"],
  },

  {
    id: "english-v1-097",
    subject: "English Language",
    topic: "Reading Skills",
    difficulty: "hard",
    question: "Which statement is most likely a fact?",
    choices: [
      "Chocolate ice cream is the best dessert.",
      "The Pacific Ocean is the largest ocean on Earth.",
      "Basketball is more exciting than football.",
      "Summer is the happiest season.",
    ],
    answerIndex: 1,
    explanation: "The size of the Pacific Ocean can be verified objectively, making it a fact.",
    steps: [
      "Facts can be proven or verified",
      "The statement about the Pacific Ocean is objectively verifiable",
    ],
    tip: "Facts are measurable or verifiable; opinions are personal beliefs.",
    tags: ["reading", "fact and opinion"],
  },

  {
    id: "english-v1-098",
    subject: "English Language",
    topic: "Grammar: Parallelism",
    difficulty: "beast",
    question: "Choose the sentence with correct parallel structure.",
    choices: [
      "The campers enjoyed hiking, swimming, and to fish.",
      "The campers enjoyed hiking, swimming, and fishing.",
      "The campers enjoyed hike, swimming, and fishing.",
      "The campers enjoyed hiking, to swim, and fishing.",
    ],
    answerIndex: 1,
    explanation: "The activities hiking, swimming, and fishing all use the same grammatical form.",
    steps: [
      "Compare the forms in the list",
      "All three should match",
      "Hiking, swimming, and fishing are parallel",
    ],
    tip: "Parallel structure keeps ideas balanced and readable.",
    tags: ["grammar", "parallelism"],
  },

  {
    id: "english-v1-099",
    subject: "English Language",
    topic: "Logical Organization",
    difficulty: "hard",
    question: "Which transition best completes the sentence? 'The team practiced daily. _____, they improved significantly before the tournament.'",
    choices: ["As a result", "Meanwhile", "However", "Similarly"],
    answerIndex: 0,
    explanation: "'As a result' correctly shows that improvement happened because of regular practice.",
    steps: [
      "Practice caused improvement",
      "A result transition is needed",
      "As a result fits best",
    ],
    tip: "Result transitions connect causes with outcomes.",
    tags: ["writing", "transitions"],
  },

  {
    id: "english-v1-100",
    subject: "English Language",
    topic: "Vocabulary",
    difficulty: "beast",
    question: "Choose the antonym of 'complex.'",
    choices: ["Complicated", "Detailed", "Simple", "Difficult"],
    answerIndex: 2,
    explanation: "Complex means complicated, while simple means easy to understand or uncomplicated.",
    steps: [
      "Complex = complicated",
      "Simple is the opposite",
    ],
    tip: "Simple and complex are common opposites.",
    tags: ["vocabulary", "antonyms"],
  },

  ] = [
  {
    "id": "english-v1-101",
    "subject": "English Language",
    "topic": "Grammar",
    "difficulty": "hard",
    "question": "Identify the error in the sentence: The apparent heir to the throne was expected to attend the ceremony.",
    "choices": [
      "apparent heir",
      "to the throne",
      "was expected",
      "no error"
    ],
    "answerIndex": 0,
    "explanation": "The correct fixed expression is 'heir apparent,' not 'apparent heir.'",
    "steps": [
      "Check each underlined phrase for idiomatic usage",
      "Recognize that the standard phrase is 'heir apparent'",
      "Select the phrase with the wrong word order"
    ],
    "tip": "Some grammar questions test fixed expressions, not just subject-verb agreement.",
    "tags": [
      "grammar",
      "error detection",
      "idiom"
    ]
  },
  {
    "id": "english-v1-102",
    "subject": "English Language",
    "topic": "Sentence Correction",
    "difficulty": "hard",
    "question": "She had only walked for about fifteen miles when her legs gave out.",
    "choices": [
      "She had only walked for about fifteen miles when her legs gave out.",
      "She had walked only fifteen miles when her legs gave out.",
      "She only walked fifteen miles when her legs gave out.",
      "She has walked only fifteen miles when her legs gave out."
    ],
    "answerIndex": 1,
    "explanation": "The adverb 'only' should modify the distance phrase 'fifteen miles,' so the correct placement is 'had walked only fifteen miles.'",
    "steps": [
      "Identify the phrase modified by 'only'",
      "Move 'only' so it directly precedes the intended phrase",
      "Choose the sentence with the correct adverb placement"
    ],
    "tip": "Place 'only' as close as possible to the word or phrase it limits.",
    "tags": [
      "grammar",
      "adverb placement"
    ]
  },
  {
    "id": "english-v1-103",
    "subject": "English Language",
    "topic": "Grammar",
    "difficulty": "hard",
    "question": "Rowena announced that the bonus will arrive during the meeting yesterday.",
    "choices": [
      "announced",
      "will arrive",
      "during the meeting yesterday",
      "no error"
    ],
    "answerIndex": 1,
    "explanation": "The future tense 'will arrive' conflicts with 'yesterday'; the correct sequence of tenses requires past or conditional form.",
    "steps": [
      "Locate the time expression 'yesterday'",
      "Check whether the verb tense matches past time",
      "Select the phrase that uses the wrong tense"
    ],
    "tip": "Time markers like 'yesterday' require past tense in the same clause.",
    "tags": [
      "grammar",
      "tense consistency"
    ]
  },
  {
    "id": "english-v1-104",
    "subject": "English Language",
    "topic": "Subject-Verb Agreement",
    "difficulty": "hard",
    "question": "A large percentage of the class ___ fascinated by the museum.",
    "choices": [
      "were",
      "be",
      "was",
      "any of the above"
    ],
    "answerIndex": 2,
    "explanation": "The noun phrase 'A large percentage' is singular, so the correct verb is 'was.'",
    "steps": [
      "Identify the subject of the sentence",
      "Determine whether the subject is singular or plural",
      "Choose the verb form that agrees with a singular subject"
    ],
    "tip": "Expressions like 'a percentage of' usually take a singular verb.",
    "tags": [
      "grammar",
      "agreement"
    ]
  },
  {
    "id": "english-v1-105",
    "subject": "English Language",
    "topic": "Error Detection",
    "difficulty": "hard",
    "question": "You do your homework right now or I won't let you go out with your friends.",
    "choices": [
      "You do",
      "right now",
      "with your friends",
      "no error"
    ],
    "answerIndex": 0,
    "explanation": "The phrase 'You do your homework right now' is not idiomatic for an instruction; it should be 'Do your homework right now.'",
    "steps": [
      "Identify the clause that sounds unnatural",
      "Compare it with the standard imperative form",
      "Select the portion that causes the error"
    ],
    "tip": "Commands usually omit the subject and use the base verb form.",
    "tags": [
      "grammar",
      "imperative"
    ]
  },
  {
    "id": "english-v1-106",
    "subject": "English Language",
    "topic": "Prepositions",
    "difficulty": "hard",
    "question": "Rita resides ___ #312 Mahabagin Street, Teacher\u2019s Village ___ Quezon City.",
    "choices": [
      "at \u2013 on",
      "at \u2013 in",
      "in \u2013 on",
      "on \u2013 in"
    ],
    "answerIndex": 1,
    "explanation": "A street address uses 'at,' and a city uses 'in.' Thus, 'at #312 ... in Quezon City' is correct.",
    "steps": [
      "Determine the appropriate preposition for a street address",
      "Determine the appropriate preposition for a city name",
      "Choose the pair that matches both rules"
    ],
    "tip": "Use 'at' for specific addresses and 'in' for cities or locations.",
    "tags": [
      "grammar",
      "prepositions"
    ]
  },
  {
    "id": "english-v1-107",
    "subject": "English Language",
    "topic": "Subjunctive Mood",
    "difficulty": "hard",
    "question": "According to Machiavelli, it is not imperative that a ruler ___ good, he just has to appear so.",
    "choices": [
      "was",
      "were",
      "is",
      "be"
    ],
    "answerIndex": 3,
    "explanation": "In expressions of necessity or recommendation, English uses the subjunctive 'be.'",
    "steps": [
      "Recognize the impersonal construction 'it is not imperative that'",
      "Recall the subjunctive form used after such expressions",
      "Choose 'be' to match the mood"
    ],
    "tip": "After 'imperative that,' use the base verb form for the subjunctive.",
    "tags": [
      "grammar",
      "subjunctive"
    ]
  },
  {
    "id": "english-v1-108",
    "subject": "English Language",
    "topic": "Prepositions",
    "difficulty": "hard",
    "question": "Lolita is going to Switzerland ___ May next year. Particularly, she would be leaving ___ eight o\u2019clock a.m ___ New Year\u2019s Day.",
    "choices": [
      "in \u2013 at \u2013 on",
      "at \u2013 on \u2013 at",
      "in \u2013 at \u2013 in",
      "in \u2013 on \u2013 on"
    ],
    "answerIndex": 0,
    "explanation": "Months use 'in,' clock times use 'at,' and calendar days use 'on.'",
    "steps": [
      "Apply 'in' to months",
      "Apply 'at' to specific times",
      "Apply 'on' to specific days"
    ],
    "tip": "Use 'in' with months, 'at' with times, and 'on' with days.",
    "tags": [
      "grammar",
      "prepositions"
    ]
  },
  {
    "id": "english-v1-109",
    "subject": "English Language",
    "topic": "Possessives",
    "difficulty": "hard",
    "question": "John and Susie own that yacht. ___ yacht is a beauty.",
    "choices": [
      "John and Susie\u2019s",
      "John\u2019s and Susie\u2019s",
      "Both a and b",
      "John\u2019s and Susie"
    ],
    "answerIndex": 0,
    "explanation": "When two people jointly own one yacht, the possessive apostrophe applies only to the second name.",
    "steps": [
      "Identify that the yacht is jointly owned",
      "Apply the possessive rule for joint ownership",
      "Choose the option with a single possessive marker"
    ],
    "tip": "Use one possessive apostrophe for joint ownership of the same item.",
    "tags": [
      "grammar",
      "possessives"
    ]
  },
  {
    "id": "english-v1-110",
    "subject": "English Language",
    "topic": "Error Detection",
    "difficulty": "hard",
    "question": "The doctor as well as some of the best doctors in the Philippines is giving a free medical checkup tomorrow.",
    "choices": [
      "The",
      "as well",
      "is giving",
      "no error"
    ],
    "answerIndex": 3,
    "explanation": "The phrase 'as well as' does not make the subject plural, so 'is giving' is correct.",
    "steps": [
      "Identify the true subject: 'The doctor'",
      "Note that 'as well as' is parenthetical",
      "Confirm that the singular verb is appropriate"
    ],
    "tip": "Subjects linked by 'as well as' do not require plural verbs.",
    "tags": [
      "grammar",
      "subject-verb agreement"
    ]
  },
  {
    "id": "english-v1-111",
    "subject": "English Language",
    "topic": "Pronouns",
    "difficulty": "hard",
    "question": "Whomsoever wishes to see a ghost is a fool.",
    "choices": [
      "Whomsoever",
      "wishes",
      "to see",
      "no error"
    ],
    "answerIndex": 0,
    "explanation": "'Whomsoever' is incorrect because it functions as the subject of 'wishes'; the correct form is 'whoever.'",
    "steps": [
      "Determine the pronoun\u2019s grammatical role",
      "Recognize that subjects require subject-case pronouns",
      "Select the pronoun that is wrongly used"
    ],
    "tip": "Use 'whoever' for subjects and 'whomever' for objects.",
    "tags": [
      "grammar",
      "pronouns"
    ]
  },
  {
    "id": "english-v1-112",
    "subject": "English Language",
    "topic": "Adjectives",
    "difficulty": "hard",
    "question": "Choose the correct completion: You smell very ___.",
    "choices": [
      "good",
      "well",
      "goodly",
      "best"
    ],
    "answerIndex": 0,
    "explanation": "When 'smell' is used as a linking verb describing the subject's odor, it takes the adjective 'good.' 'Well' would usually refer to the ability to smell.",
    "steps": [
      "Identify how 'smell' is used in the sentence",
      "The sentence describes the subject's odor",
      "Use the adjective 'good' after the linking verb"
    ],
    "tip": "Use 'You smell good' for odor; use 'You smell well' only when referring to someone's ability to smell.",
    "tags": [
      "grammar",
      "adjectives",
      "linking verbs"
    ]
  },
  {
    "id": "english-v1-113",
    "subject": "English Language",
    "topic": "Pronouns",
    "difficulty": "hard",
    "question": "Sakuragi did a slam dunk and the crowd roared ___ approval.",
    "choices": [
      "his",
      "its",
      "their",
      "our"
    ],
    "answerIndex": 1,
    "explanation": "A collective noun like 'crowd' is treated here as a single entity and takes the singular pronoun 'its.'",
    "steps": [
      "Identify 'crowd' as a collective noun",
      "Determine whether the sentence treats the crowd as a unit",
      "Choose the singular possessive pronoun"
    ],
    "tip": "Collective nouns can take singular pronouns when acting as a single group.",
    "tags": [
      "grammar",
      "pronouns"
    ]
  },
  {
    "id": "english-v1-114",
    "subject": "English Language",
    "topic": "Sentence Correction",
    "difficulty": "hard",
    "question": "Choose the most correct and effective sentence.",
    "choices": [
      "My sister is going to take a little trip in June next year to Italy in Europe.",
      "My sister is going to take a little trip to Europe next year, to Italy in June.",
      "My sister is going to take a little trip to Italy in Europe in June next year.",
      "My sister is going to take a little trip to Europe in Italy in June next year."
    ],
    "answerIndex": 1,
    "explanation": "The answer is clear and idiomatic, placing the general destination before the specific location and the time phrase at the end.",
    "steps": [
      "Compare the placement of destination and time phrases",
      "Choose the sentence with the most natural word order",
      "Eliminate options with awkward or redundant phrasing"
    ],
    "tip": "Aim for clarity by ordering general information before specifics.",
    "tags": [
      "grammar",
      "sentence structure"
    ]
  },
  {
    "id": "english-v1-115",
    "subject": "English Language",
    "topic": "Error Detection",
    "difficulty": "hard",
    "question": "The children were dismayed and depressed by the closing of the zoo.",
    "choices": [
      "The children",
      "were dismayed",
      "closing",
      "no error"
    ],
    "answerIndex": 3,
    "explanation": "The sentence is grammatically correct and the phrases are used properly.",
    "steps": [
      "Read the sentence for subject-verb agreement",
      "Check the noun phrase 'closing of the zoo' for correctness",
      "Confirm that the sentence is properly formed"
    ],
    "tip": "If every component is appropriate and agrees, choose no error.",
    "tags": [
      "grammar",
      "error detection"
    ]
  },
  {
    "id": "english-v1-116",
    "subject": "English Language",
    "topic": "Comparatives",
    "difficulty": "hard",
    "question": "No one was lovelier or more strikingly intelligent than her at the beauty contest yesterday.",
    "choices": [
      "lovelier",
      "more strikingly",
      "than her",
      "no error"
    ],
    "answerIndex": 2,
    "explanation": "The pronoun should be 'she' in the subject case after 'than,' so 'than her' is incorrect.",
    "steps": [
      "Identify the comparison structure",
      "Recognize that 'than' introduces a subject comparison",
      "Replace the objective pronoun with the subject pronoun"
    ],
    "tip": "After 'than,' use subject pronouns when comparing subjects.",
    "tags": [
      "grammar",
      "pronouns"
    ]
  },
  {
    "id": "english-v1-117",
    "subject": "English Language",
    "topic": "Quantifiers",
    "difficulty": "hard",
    "question": "I used too ___ of the bleach and so the stain remained on the shirt.",
    "choices": [
      "many",
      "little",
      "much",
      "few"
    ],
    "answerIndex": 2,
    "explanation": "Bleach is an uncountable noun, so it takes 'much' rather than 'many' or 'few.'",
    "steps": [
      "Classify 'bleach' as countable or uncountable",
      "Select the quantifier that matches an uncountable noun",
      "Avoid choices that only work with plural count nouns"
    ],
    "tip": "Use 'much' with uncountable nouns and 'many' with countable nouns.",
    "tags": [
      "grammar",
      "quantifiers"
    ]
  },
  {
    "id": "english-v1-118",
    "subject": "English Language",
    "topic": "Subject-Verb Agreement",
    "difficulty": "hard",
    "question": "Each man and each woman in the audience was affected by the passionate speech.",
    "choices": [
      "by",
      "was",
      "and",
      "no error"
    ],
    "answerIndex": 3,
    "explanation": "Each singular noun joined by 'and' is treated separately, so the singular verb 'was' is correct.",
    "steps": [
      "Identify the repeated singular subjects",
      "Confirm the verb agreement with each subject",
      "Choose no error if the verb matches"
    ],
    "tip": "Expressions like 'each man and each woman' usually take a singular verb.",
    "tags": [
      "grammar",
      "agreement"
    ]
  },
  {
    "id": "english-v1-119",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "The first permanent tooth usually appears about four years after the baby teeth have ___.",
    "choices": [
      "erupted",
      "exploded",
      "broken out",
      "burst out"
    ],
    "answerIndex": 0,
    "explanation": "In dental terminology, baby teeth 'erupt' when they emerge through the gums.",
    "steps": [
      "Understand the specific meaning of the term in context",
      "Compare the options for the most precise dental usage",
      "Select the verb that matches the emergence of teeth"
    ],
    "tip": "In biology and dentistry, 'erupt' describes teeth pushing through gums.",
    "tags": [
      "vocabulary",
      "context clues"
    ]
  },
  {
    "id": "english-v1-120",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "The professor took an immaculate handkerchief out of his pocket.",
    "choices": [
      "pure",
      "spotless",
      "error-free",
      "flawless"
    ],
    "answerIndex": 1,
    "explanation": "'Immaculate' means perfectly clean, so 'spotless' is the best synonym in this context.",
    "steps": [
      "Interpret the meaning of 'immaculate' in the sentence",
      "Compare the choices for the closest meaning",
      "Pick the synonym that describes cleanliness"
    ],
    "tip": "When a word describes cleanliness or perfection, choose a synonym that preserves that nuance.",
    "tags": [
      "vocabulary",
      "synonyms"
    ]
  },
  {
    "id": "english-v1-121",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "The workplace wore a macabre look after the company downsized its staff strength.",
    "choices": [
      "gameface",
      "serious",
      "tropical",
      "lugubrious"
    ],
    "answerIndex": 3,
    "explanation": "'Macabre' suggests a grim and mournful atmosphere, which is closest to 'lugubrious.'",
    "steps": [
      "Understand the emotional tone of the sentence",
      "Compare the choices for the one that conveys gloom",
      "Select the word that matches a dark mood"
    ],
    "tip": "Macabre often refers to an eerie or gloomy quality.",
    "tags": [
      "vocabulary",
      "tone"
    ]
  },
  {
    "id": "english-v1-122",
    "subject": "English Language",
    "topic": "Grammar",
    "difficulty": "hard",
    "question": "The conversation with her mother had a more profound affect on her than she expected.",
    "choices": [
      "affect",
      "more profound",
      "than she expected",
      "no error"
    ],
    "answerIndex": 0,
    "explanation": "The correct noun form is 'effect' when referring to a result; 'affect' is the verb form.",
    "steps": [
      "Identify the part of speech required by the sentence",
      "Choose the noun form used for outcomes",
      "Replace the incorrect verb form with the correct noun"
    ],
    "tip": "Use 'effect' for results and 'affect' for actions.",
    "tags": [
      "grammar",
      "word choice"
    ]
  },
  {
    "id": "english-v1-123",
    "subject": "English Language",
    "topic": "Grammar",
    "difficulty": "hard",
    "question": "The then Prime Minister had issued an order though he was not supposedly to.",
    "choices": [
      "had issued",
      "though",
      "supposedly",
      "no error"
    ],
    "answerIndex": 2,
    "explanation": "The adverb 'supposedly' is incorrect here; the correct adjective is 'supposed.'",
    "steps": [
      "Identify the word that modifies the verb phrase",
      "Determine whether an adjective or adverb is appropriate",
      "Choose the incorrectly used word"
    ],
    "tip": "After 'was,' use an adjective, not an adverb.",
    "tags": [
      "grammar",
      "word forms"
    ]
  },
  {
    "id": "english-v1-124",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "The interviewer turned his attention to us with a cramped sort of face.",
    "choices": [
      "paralyzed",
      "cheerful",
      "bothered",
      "expressionless"
    ],
    "answerIndex": 3,
    "explanation": "A 'cramped sort of face' suggests tension or lack of expression, making 'expressionless' the best fit.",
    "steps": [
      "Use context to infer the emotion conveyed by the description",
      "Compare the answer options for the one that matches a tense expression",
      "Pick the choice that reflects a limited facial expression"
    ],
    "tip": "Context clues often reveal whether a phrase describes mood or physical appearance.",
    "tags": [
      "vocabulary",
      "context clues"
    ]
  },
  {
    "id": "english-v1-125",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "The dog ambled to the door, which was slightly ajar.",
    "choices": [
      "crept",
      "ran",
      "walked",
      "jumped"
    ],
    "answerIndex": 2,
    "explanation": "'Ambled' means to move at a slow, leisurely pace, which corresponds to 'walked.'",
    "steps": [
      "Define the verb 'ambled' in context",
      "Choose the option with the closest meaning",
      "Avoid words that suggest speed or force"
    ],
    "tip": "'Amble' means to move slowly and comfortably.",
    "tags": [
      "vocabulary",
      "synonyms"
    ]
  },
  {
    "id": "english-v1-126",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "Harold lumbered at him and clouted him across the head.",
    "choices": [
      "cover with a clout",
      "hit forcefully",
      "stroke gently",
      "kissed"
    ],
    "answerIndex": 1,
    "explanation": "'Clouted' means to strike forcefully, so this choice matches the verb's meaning.",
    "steps": [
      "Identify the verb being defined",
      "Choose the option that describes a forceful physical action",
      "Discard answers that are gentle or unrelated"
    ],
    "tip": "A 'clout' is a heavy blow or hit.",
    "tags": [
      "vocabulary",
      "context clues"
    ]
  },
  {
    "id": "english-v1-127",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "I thought they were likely to bundle him into a car but the policeman simply led him back to the road.",
    "choices": [
      "wrap",
      "hustle",
      "a lot of things",
      "grouped together"
    ],
    "answerIndex": 1,
    "explanation": "In this context, 'bundle him into a car' means to move him quickly, so 'hustle' is the closest match.",
    "steps": [
      "Interpret the action described by the phrase",
      "Choose the option that conveys hurried movement",
      "Avoid literal or unrelated meanings"
    ],
    "tip": "When people are bundled somewhere, they are usually moved quickly or roughly.",
    "tags": [
      "vocabulary",
      "idioms"
    ]
  },
  {
    "id": "english-v1-128",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "Marc is far too sensible to have done a fatuous thing like that.",
    "choices": [
      "dangerous",
      "risky",
      "innate",
      "foolish"
    ],
    "answerIndex": 3,
    "explanation": "'Fatuous' means foolish or silly, so the best synonym is 'foolish.'",
    "steps": [
      "Understand the intended meaning of 'fatuous' in the sentence",
      "Compare the choices for the one that matches the meaning",
      "Choose the synonym that conveys a lack of good sense"
    ],
    "tip": "Use context to identify whether a word is negative, positive, or neutral.",
    "tags": [
      "vocabulary",
      "synonyms"
    ]
  },
  {
    "id": "english-v1-129",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "It is bizarre how often public figures who loudly espouse traditional family values are later caught in scandal.",
    "choices": [
      "remember",
      "reject",
      "recognize",
      "argue for"
    ],
    "answerIndex": 3,
    "explanation": "To 'espouse' something means to support or argue for it, so that is the correct meaning here.",
    "steps": [
      "Interpret the role of 'espouse' in the sentence",
      "Choose the answer that means to support an idea",
      "Discard options that do not fit the context"
    ],
    "tip": "'Espouse' generally means to adopt or support a belief or cause.",
    "tags": [
      "vocabulary",
      "context clues"
    ]
  },
  {
    "id": "english-v1-130",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "Which of the following is a synonym of 'vehement' as used in the passage?",
    "choices": [
      "agonizing",
      "violent",
      "imperturbable",
      "ardent"
    ],
    "answerIndex": 3,
    "explanation": "'Vehement' here means passionate or ardent, not merely violent or agonizing.",
    "steps": [
      "Consider the context in which the word appears",
      "Match the word to the answer with the closest emotional intensity",
      "Reject choices that do not express passion"
    ],
    "tip": "Vehement often describes strong emotion or conviction.",
    "tags": [
      "vocabulary",
      "synonyms"
    ]
  },
  {
    "id": "english-v1-131",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "The word 'contemned' in the passage is similar in meaning to all of the following EXCEPT:",
    "choices": [
      "disdained",
      "despised",
      "condemned",
      "wiped out"
    ],
    "answerIndex": 3,
    "explanation": "'Contemned' means to scorn or despise; it does not mean 'wiped out.'",
    "steps": [
      "Identify the meaning of 'contemned' from context",
      "Compare that meaning with each choice",
      "Select the option that does not match"
    ],
    "tip": "When a question asks for the EXCEPT option, choose the word that does not belong.",
    "tags": [
      "vocabulary",
      "antonyms"
    ]
  },
  {
    "id": "english-v1-132",
    "subject": "English Language",
    "topic": "Analogy",
    "difficulty": "hard",
    "question": "Verbose is to wordy as concise is to ___.",
    "choices": [
      "succinct",
      "rambling",
      "ornate",
      "redundant"
    ],
    "answerIndex": 0,
    "explanation": "Verbose and wordy are synonyms. In the same way, concise and succinct are synonyms.",
    "steps": [
      "Identify the relationship in the first pair",
      "Verbose means wordy",
      "Find the synonym of concise",
      "Succinct means brief and clear"
    ],
    "tip": "For analogy questions, first identify whether the relationship is synonym, antonym, cause-effect, or category-example.",
    "tags": [
      "analogies",
      "vocabulary"
    ]
  },
  {
    "id": "english-v1-133",
    "subject": "English Language",
    "topic": "Analogy",
    "difficulty": "hard",
    "question": "Simile is to metaphor as explicit is to ___.",
    "choices": [
      "implicit",
      "obvious",
      "comparative",
      "literal"
    ],
    "answerIndex": 0,
    "explanation": "A simile is explicit in its comparison, while a metaphor is often implicit, so the correct analogy is explicit : implicit.",
    "steps": [
      "Understand the contrast between simile and metaphor",
      "Apply the same contrast to the answer choices",
      "Select the antonym of explicit"
    ],
    "tip": "Look for the pair that mirrors the first relationship.",
    "tags": [
      "analogies",
      "rhetoric"
    ]
  },
  {
    "id": "english-v1-134",
    "subject": "English Language",
    "topic": "Analogies",
    "difficulty": "hard",
    "question": "Grammar is to correctness as diction is to ___.",
    "choices": [
      "word choice",
      "sound",
      "length",
      "tempo"
    ],
    "answerIndex": 0,
    "explanation": "Diction refers to word choice, just as grammar refers to correctness.",
    "steps": [
      "Define each term in the analogy",
      "Match the second concept to the appropriate answer",
      "Choose the term that corresponds to diction"
    ],
    "tip": "Analogies often use one word's definition to clue the other.",
    "tags": [
      "analogies",
      "grammar"
    ]
  },
  {
    "id": "english-v1-135",
    "subject": "English Language",
    "topic": "Logical Language Usage",
    "difficulty": "hard",
    "question": "Mendacity is to honesty as arrogance is to ___.",
    "choices": [
      "humility",
      "pride",
      "attitude",
      "modesty"
    ],
    "answerIndex": 0,
    "explanation": "Mendacity is the opposite of honesty, and arrogance is the opposite of humility.",
    "steps": [
      "Identify the antonym relationship in the first pair",
      "Apply the same opposite relationship to the second pair",
      "Choose the correct opposite of arrogance"
    ],
    "tip": "Many analogies ask for a word that is the opposite of the given term.",
    "tags": [
      "analogies",
      "logic"
    ]
  },
  {
    "id": "english-v1-136",
    "subject": "English Language",
    "topic": "Sentence Completion",
    "difficulty": "hard",
    "question": "The speaker insisted that the report ___ submitted by Friday.",
    "choices": [
      "is",
      "was",
      "be",
      "has been"
    ],
    "answerIndex": 2,
    "explanation": "After verbs of insistence, the subjunctive 'be' is used in formal English.",
    "steps": [
      "Recognize the verb 'insisted' as triggering the subjunctive",
      "Choose the base verb form that fits the construction",
      "Avoid past or perfect forms"
    ],
    "tip": "Use the subjunctive after verbs like insist, demand, or recommend.",
    "tags": [
      "grammar",
      "subjunctive"
    ]
  },
  {
    "id": "english-v1-137",
    "subject": "English Language",
    "topic": "Verb Forms",
    "difficulty": "hard",
    "question": "She said that by the time she arrived, the meeting ___ already ___.",
    "choices": [
      "has / started",
      "had / started",
      "have / started",
      "was / starting"
    ],
    "answerIndex": 1,
    "explanation": "The past perfect 'had started' is required because the meeting began before she arrived.",
    "steps": [
      "Sequence the two past events",
      "Choose the tense that places one action before the other",
      "Select the past perfect construction"
    ],
    "tip": "Use past perfect for the earlier event when describing two past actions.",
    "tags": [
      "grammar",
      "verb tenses"
    ]
  },
  {
    "id": "english-v1-138",
    "subject": "English Language",
    "topic": "Pronouns",
    "difficulty": "hard",
    "question": "Neither the students nor the teacher ___ prepared for the exam.",
    "choices": [
      "were",
      "was",
      "are",
      "have"
    ],
    "answerIndex": 1,
    "explanation": "When subjects are joined by 'nor,' the verb agrees with the nearer subject; 'teacher' is singular, so 'was' is correct.",
    "steps": [
      "Identify the subjects joined by 'nor'",
      "Choose the noun closest to the verb",
      "Match the verb to that nearer singular subject"
    ],
    "tip": "With 'neither/nor' and 'either/or,' the verb agrees with the closest subject.",
    "tags": [
      "grammar",
      "agreement"
    ]
  },
  {
    "id": "english-v1-139",
    "subject": "English Language",
    "topic": "Parallel Structure",
    "difficulty": "hard",
    "question": "The committee recommended hiring more staff, improving training programs, and ___ the budget.",
    "choices": [
      "raise",
      "raising",
      "to raise",
      "having raised"
    ],
    "answerIndex": 1,
    "explanation": "The list uses gerund forms, so 'raising the budget' maintains parallel structure.",
    "steps": [
      "Identify the form of the items in the list",
      "Match the missing item to those forms",
      "Choose the gerund that keeps the list parallel"
    ],
    "tip": "Maintain the same grammatical form for all items in a series.",
    "tags": [
      "grammar",
      "parallelism"
    ]
  },
  {
    "id": "english-v1-140",
    "subject": "English Language",
    "topic": "Context Clues",
    "difficulty": "hard",
    "question": "The mansion had an air of ostentation, with gold trim and crystal chandeliers everywhere.",
    "choices": [
      "modesty",
      "luxury",
      "decay",
      "simplicity"
    ],
    "answerIndex": 1,
    "explanation": "Context clues like gold trim and crystal chandeliers show that 'ostentation' refers to lavish display, so luxury is correct.",
    "steps": [
      "Look at the descriptive details in the sentence",
      "Infer the intended meaning from those details",
      "Choose the word that matches the context"
    ],
    "tip": "Use the surrounding words to infer the meaning of unfamiliar vocabulary.",
    "tags": [
      "vocabulary",
      "context clues"
    ]
  },
  {
    "id": "english-v1-141",
    "subject": "English Language",
    "topic": "Grammar",
    "difficulty": "hard",
    "question": "If I ___ the answer, I would have told you sooner.",
    "choices": [
      "know",
      "knew",
      "had known",
      "would know"
    ],
    "answerIndex": 2,
    "explanation": "The third conditional uses 'had known' in the if-clause to describe an unreal past condition.",
    "steps": [
      "Identify the sentence as a conditional about the past",
      "Choose the past perfect form for the if-clause",
      "Confirm the structure matches the conditional type"
    ],
    "tip": "Use past perfect in the if-clause for counterfactual past conditions.",
    "tags": [
      "grammar",
      "conditionals"
    ]
  },
  {
    "id": "english-v1-142",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "The politician\u2019s speech was full of platitudes that sounded comforting but offered no real plan.",
    "choices": [
      "clich\u00e9s",
      "truths",
      "questions",
      "warnings"
    ],
    "answerIndex": 0,
    "explanation": "'Platitudes' are trite or overused statements, so 'clich\u00e9s' is the best synonym.",
    "steps": [
      "Understand the negative shade of 'platitudes' in the sentence",
      "Compare possible meanings",
      "Choose the word that refers to overused expressions"
    ],
    "tip": "Platitudes are statements that are unoriginal and often meaningless.",
    "tags": [
      "vocabulary",
      "synonyms"
    ]
  },
  {
    "id": "english-v1-143",
    "subject": "English Language",
    "topic": "Sentence Correction",
    "difficulty": "hard",
    "question": "Choose the most correct sentence.",
    "choices": [
      "Either the teacher or the students are responsible for the mess.",
      "Either the teacher or the students is responsible for the mess.",
      "Either the teacher or the students has responsible for the mess.",
      "Either the teacher or the students responsible for the mess."
    ],
    "answerIndex": 0,
    "explanation": "With 'either/or,' the verb agrees with the nearer subject. Since 'students' is plural, the correct verb is 'are.'",
    "steps": [
      "Identify the either/or construction",
      "Find the subject closest to the verb: students",
      "Use the plural verb 'are'"
    ],
    "tip": "With either/or and neither/nor, match the verb with the subject nearest to it.",
    "tags": [
      "grammar",
      "agreement"
    ]
  },
  {
    "id": "english-v1-144",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "In the sentence, 'He was accused of embezzling funds, but he insisted that he was innocent,' what does 'innocent' mean?",
    "choices": [
      "free from guilt",
      "careless with money",
      "secretive",
      "already punished"
    ],
    "answerIndex": 0,
    "explanation": "Innocent means not guilty of the wrongdoing being discussed.",
    "steps": [
      "Read the contrast after 'but'",
      "He was accused, yet he denied wrongdoing",
      "Innocent means free from guilt"
    ],
    "tip": "Use the surrounding accusation or denial to understand legal vocabulary.",
    "tags": [
      "vocabulary",
      "context clues"
    ]
  },
  {
    "id": "english-v1-145",
    "subject": "English Language",
    "topic": "Analogy",
    "difficulty": "beast",
    "question": "Plagiarism is to originality as imitation is to ___.",
    "choices": [
      "authenticity",
      "repetition",
      "style",
      "variation"
    ],
    "answerIndex": 0,
    "explanation": "Plagiarism opposes originality in the same way that imitation opposes authenticity.",
    "steps": [
      "Identify the opposite relationship in the first pair",
      "Find the term that is opposite to imitation",
      "Select the answer that mirrors the same contrast"
    ],
    "tip": "Analogies often test relationships between opposites.",
    "tags": [
      "analogies",
      "logic"
    ]
  },
  {
    "id": "english-v1-146",
    "subject": "English Language",
    "topic": "Grammar",
    "difficulty": "hard",
    "question": "The editor recommended that the article ___ revised before publication.",
    "choices": [
      "was",
      "were",
      "be",
      "is"
    ],
    "answerIndex": 2,
    "explanation": "After 'recommended that,' the subjunctive form 'be' is used.",
    "steps": [
      "Identify that the verb follows a recommendation",
      "Choose the base verb form for the subjunctive",
      "Confirm the choice is grammatically correct"
    ],
    "tip": "Verbs of recommendation generally take the base form in a subordinate clause.",
    "tags": [
      "grammar",
      "subjunctive"
    ]
  },
  {
    "id": "english-v1-147",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "The report concluded that the company\u2019s prospects were tenuous at best.",
    "choices": [
      "strong",
      "uncertain",
      "secure",
      "expansive"
    ],
    "answerIndex": 1,
    "explanation": "'Tenuous' means weak or uncertain, so 'uncertain' is the best synonym.",
    "steps": [
      "Interpret the descriptor in the sentence",
      "Choose the answer with a similar meaning",
      "Avoid antonyms or unrelated terms"
    ],
    "tip": "Use context to determine whether vocabulary implies strength or weakness.",
    "tags": [
      "vocabulary",
      "synonyms"
    ]
  },
  {
    "id": "english-v1-148",
    "subject": "English Language",
    "topic": "Sentence Correction",
    "difficulty": "hard",
    "question": "Choose the most correct sentence.",
    "choices": [
      "If I had known about the change, I would attend the meeting.",
      "If I had known about the change, I would have attended the meeting.",
      "If I knew about the change, I would have attended the meeting.",
      "If I would have known about the change, I would attend the meeting."
    ],
    "answerIndex": 1,
    "explanation": "The third conditional requires past perfect in the if-clause and 'would have' in the result clause.",
    "steps": [
      "Identify the conditional structure",
      "Choose the option with the correct past perfect/result combination",
      "Confirm both clauses are grammatically matched"
    ],
    "tip": "For unreal past conditions, use 'If I had ... would have ...'.",
    "tags": [
      "grammar",
      "conditionals"
    ]
  },
  {
    "id": "english-v1-149",
    "subject": "English Language",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "question": "The committee\u2019s decision was deliberate and therefore carried weight.",
    "choices": [
      "thoughtless",
      "intentional",
      "rapid",
      "brief"
    ],
    "answerIndex": 1,
    "explanation": "'Deliberate' means intentional and carefully considered, not thoughtless or hasty.",
    "steps": [
      "Determine the meaning of 'deliberate' in this context",
      "Compare the answer choices",
      "Pick the synonym that matches careful intention"
    ],
    "tip": "Deliberate often implies careful thought and purpose.",
    "tags": [
      "vocabulary",
      "context clues"
    ]
  },
  {
    "id": "english-v1-150",
    "subject": "English Language",
    "topic": "Grammar",
    "difficulty": "beast",
    "question": "Although he had practiced for weeks, he still found the speech ___ to deliver.",
    "choices": [
      "difficulty",
      "difficult",
      "difficultly",
      "difficultness"
    ],
    "answerIndex": 1,
    "explanation": "The adjective 'difficult' correctly describes the noun phrase 'the speech' in the structure 'found the speech difficult.'",
    "steps": [
      "Identify the structure: found + object + complement",
      "The complement describes the speech",
      "Use the adjective 'difficult'"
    ],
    "tip": "After 'find/found + object,' use an adjective complement when describing the object.",
    "tags": [
      "grammar",
      "word choice"
    ]
  },
];
