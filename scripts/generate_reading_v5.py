from pathlib import Path
import random

OUT=Path("src/data/generated/readingGenerated005.ts")

questions=[]
qid=1

topics=[]

categories=[
"Environment",
"Science",
"Technology",
"Education",
"Health",
"History",
"Daily Life",
"Society",
"Business",
"Transport"
]

actions=[
"introduced new programs",
"expanded community projects",
"improved study methods",
"adopted modern systems",
"organized volunteer activities",
"created structured schedules",
"planted additional trees",
"improved public facilities",
"developed learning tools",
"encouraged healthier habits"
]

effects=[
"people reported better results",
"students became more engaged",
"communities noticed improvements",
"productivity increased",
"participation improved"
]

for i in range(50):

    category=random.choice(categories)
    action=random.choice(actions)
    effect=random.choice(effects)

    passage=f"{category} groups {action}. Over time {effect}."

    topics.append(passage)

questionTypes=[

("Main Idea",
"What is the main idea?",
"Positive actions can create useful outcomes."),

("Inference",
"What can be inferred?",
"The actions produced beneficial results."),

("Purpose",
"What is the author's purpose?",
"To explain the effects of actions."),

("Conclusion",
"What conclusion can be drawn?",
"Small changes may improve situations.")
]

for i,passage in enumerate(topics):

    for topic,question,correct in questionTypes:

        wrong=[
        "People dislike change",
        "Nothing improved",
        "Weather changes suddenly"
        ]

        choices=wrong+[correct]
        random.shuffle(choices)

        answer=choices.index(correct)

        questions.append(f'''
{{
id:"reading-v5-{qid:03d}",
subject:"Reading Comprehension",
topic:"{topic}",
difficulty:"hard",
passage:`{passage}`,
question:"{question} #{i+1}",
choices:{choices},
answerIndex:{answer},
explanation:"The passage supports this answer."
}}
''')

        qid+=1


content='import { Question } from "@/types/questions";\n\nexport const readingGenerated005=[\n'+(",".join(questions[:200]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:200]))
print("Unique passages:",len(set(topics)))
