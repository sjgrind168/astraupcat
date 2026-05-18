from pathlib import Path
import random

OUT=Path("src/data/generated/readingGenerated001.ts")

questions=[]
qid=1

def add(topic,passage,question,correct,wrong,explanation,steps,tip,tags):
    global qid

    choices=list(wrong)+[correct]
    random.shuffle(choices)

    answer=choices.index(correct)

    questions.append(f'''
{{
id:"reading-gen-{qid:03d}",
subject:"Reading Comprehension",
topic:"{topic}",
difficulty:"hard",
passage:`{passage}`,
question:"{question}",
choices:{choices},
answerIndex:{answer},
explanation:"{explanation}",
steps:{steps},
tip:"{tip}",
tags:{tags}
}}
''')
    qid+=1


passages=[

{
"text":"Lena started bringing reusable containers to school because she noticed the growing amount of plastic waste in her community. After several months, some of her classmates adopted the same habit.",
"main":"Small actions can influence others.",
"inference":"Lena's classmates noticed her behavior.",
"purpose":"To describe how behavior can affect a community."
},

{
"text":"A town planted more trees around busy roads. A year later, residents reported cooler surroundings and improved air quality.",
"main":"Trees can positively affect the environment.",
"inference":"Planting trees may benefit residents.",
"purpose":"To explain environmental improvement."
},

{
"text":"Marco practiced solving difficult math problems every evening. At first he struggled, but over time he became more confident and faster.",
"main":"Practice improves skills.",
"inference":"Marco improved because of repetition.",
"purpose":"To show the effect of persistence."
}

]

while len(questions)<100:

    p=random.choice(passages)

    add(
    "Main Idea",
    p["text"],
    "What is the main idea of the passage?",
    p["main"],
    [
    "People dislike change",
    "School activities are difficult",
    "Weather changes quickly"
    ],
    p["main"],
    '["Identify repeated idea"]',
    "Focus on overall message.",
    '["main idea"]'
    )

    if len(questions)>=100:
        break

    add(
    "Inference",
    p["text"],
    "Which statement can be inferred?",
    p["inference"],
    [
    "Nobody noticed anything",
    "The situation became worse",
    "The action had no effect"
    ],
    p["inference"],
    '["Read implied meaning"]',
    "Inference is not directly stated.",
    '["inference"]'
    )

    if len(questions)>=100:
        break

    add(
    "Author Purpose",
    p["text"],
    "What is the author's purpose?",
    p["purpose"],
    [
    "To entertain with fantasy",
    "To advertise a product",
    "To criticize technology"
    ],
    p["purpose"],
    '["Determine why it was written"]',
    "Ask why the passage exists.",
    '["author purpose"]'
    )

content='import { Question } from "@/types/questions";\n\nexport const readingGenerated001: Question[]=[\n'+(",".join(questions[:100]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:100]))
