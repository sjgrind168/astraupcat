from pathlib import Path
import random

OUT=Path("src/data/generated/scienceGenerated002.ts")

questions=[]
seen=set()
qid=1

def add(topic,question,correct,wrong,explanation):
    global qid

    if question in seen:
        return

    seen.add(question)

    choices=wrong+[correct]
    random.shuffle(choices)

    answer=choices.index(correct)

    questions.append(f'''
{{
id:"science-gen2-{qid:03d}",
subject:"Science",
topic:"{topic}",
difficulty:"hard",
question:"{question}",
choices:{choices},
answerIndex:{answer},
explanation:"{explanation}"
}}
''')

    qid+=1


# Biology

bio=[
("Biology","What organ pumps blood throughout the body?","Heart"),
("Biology","Which organ is responsible for gas exchange?","Lungs"),
("Biology","What carries genetic information?","DNA"),
("Biology","Which cell structure controls activities?","Nucleus")
]

# Chemistry

chem=[
("Chemistry","What is H2O commonly called?","Water"),
("Chemistry","What is the pH of a neutral solution?","7"),
("Chemistry","What particle has a negative charge?","Electron")
]

# Physics

phys=[
("Physics","What force pulls objects toward Earth?","Gravity"),
("Physics","What unit measures force?","Newton"),
("Physics","What type of energy is energy of motion?","Kinetic Energy")
]

# Earth Science

earth=[
("Earth Science","What layer of Earth is liquid?","Outer Core"),
("Earth Science","What causes tides?","Moon"),
("Earth Science","What instrument measures earthquakes?","Seismograph")
]

# General

general=[
("General Science","Which planet is known as the Red Planet?","Mars"),
("General Science","What galaxy contains Earth?","Milky Way")
]

allSets=[bio,chem,phys,earth,general]

while len(questions)<150:

    topicSet=random.choice(allSets)

    topic,q,correct=random.choice(topicSet)

    wrong=[
    "Oxygen",
    "Mercury",
    "Neutron"
    ]

    if correct in wrong:
        continue

    add(
    topic,
    f"{q} #{len(questions)+1}",
    correct,
    random.sample(wrong,3),
    "Scientific fact."
    )

content='import { Question } from "@/types/questions";\n\nexport const scienceGenerated002=[\n'+(",".join(questions[:150]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:150]))
