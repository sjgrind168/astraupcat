from pathlib import Path
import random

OUT=Path("src/data/generated/readingGenerated004.ts")

questions=[]
qid=1

subjects=[

("Environment",
"Communities that expanded green areas later noticed cooler surroundings and cleaner public spaces."),

("Science",
"Researchers observed that students who maintained consistent sleep schedules performed better in concentration tasks."),

("Technology",
"Schools began using collaborative online tools which allowed students to work together more efficiently."),

("Education",
"Teachers introduced activity-based learning and many students became more engaged during lessons."),

("Health",
"Doctors encouraged regular exercise because it supports long-term wellness."),

("Society",
"Volunteers organized community projects to improve shared spaces and increase participation."),

("Daily Life",
"A student created a structured schedule and eventually noticed improved time management."),

("History",
"Towns preserved historical landmarks to maintain connections with important events.")
]

questionStyles=[

("Main Idea",
"What is the central idea of this passage?",
"Positive actions can create meaningful outcomes."),

("Inference",
"What can be inferred from the passage?",
"The actions produced beneficial effects."),

("Author Purpose",
"Why was this passage written?",
"To explain the effects of actions."),

("Vocabulary",
"What does 'observed' most nearly mean?",
"noticed"),

("Conclusion",
"What conclusion can be drawn?",
"Small changes may produce useful results.")
]

wrongPools={
"Main Idea":["People avoid change","Weather changes rapidly","Nothing improved"],
"Inference":["Nobody noticed","The effort failed","Conditions worsened"],
"Author Purpose":["To advertise","To entertain","To criticize"],
"Vocabulary":["removed","forgot","avoided"],
"Conclusion":["Improvement is impossible","People dislike routines","Success happens instantly"]
}

for i in range(50):

    category,text=random.choice(subjects)

    passage=f"{text} Over time many people reported noticeable improvements."

    for topic,question,correct in questionStyles:

        choices=wrongPools[topic]+[correct]
        random.shuffle(choices)

        answer=choices.index(correct)

        questions.append(f'''
{{
id:"reading-v4-{qid:03d}",
subject:"Reading Comprehension",
topic:"{topic}",
difficulty:"hard",
passage:`{passage}`,
question:"{question} Passage {i+1}",
choices:{choices},
answerIndex:{answer},
explanation:"The passage supports this answer."
}}
''')

        qid+=1

content='import { Question } from "@/types/questions";\n\nexport const readingGenerated004=[\n'+(",".join(questions[:200]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:200]))
