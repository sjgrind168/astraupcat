from pathlib import Path
import random

OUT=Path("src/data/generated/scienceGenerated001.ts")

questions=[]
qid=1

def q(topic,question,correct,wrong,explanation,steps,tip,tags):
    global qid

    choices=wrong[:3]+[correct]
    random.shuffle(choices)

    answer=choices.index(correct)

    obj=f'''
{{
id:"science-gen-{qid:03d}",
subject:"Science",
topic:"{topic}",
difficulty:"hard",
question:"{question}",
choices:{choices},
answerIndex:{answer},
explanation:"{explanation}",
steps:{steps},
tip:"{tip}",
tags:{tags}
}}
'''
    qid+=1
    questions.append(obj)

# PHYSICS 25
while qid<=25:
    d=random.choice([60,80,100,120,150,180])
    t=random.choice([2,4,5])

    if d%t!=0:
        continue

    speed=d//t

    q(
    "Physics",
    f"A vehicle travels {d} km in {t} hours. What is its average speed?",
    f"{speed} km/h",
    [f"{speed+5} km/h",f"{speed-5} km/h",f"{speed+10} km/h"],
    f"Speed={d}/{t}={speed}",
    '["Use speed=distance/time"]',
    "Distance divided by time.",
    '["physics"]'
    )

# CHEMISTRY 25
chem=[
("Which particle has a negative charge?","Electron",["Proton","Neutron","Ion"]),
("What is the center of an atom?","Nucleus",["Electron","Molecule","Compound"]),
("What is H₂O commonly called?","Water",["Hydrogen","Oxygen","Salt"])
]

while qid<=50:
    item=random.choice(chem)

    q(
    "Chemistry",
    item[0],
    item[1],
    item[2],
    f"{item[1]} is correct.",
    '["Recall concept"]',
    "Understand atomic structure.",
    '["chemistry"]'
    )

# BIOLOGY 25
bio=[
("Which organelle is the powerhouse of the cell?","Mitochondrion",["Nucleus","Ribosome","Vacuole"]),
("Which process allows plants to make food?","Photosynthesis",["Respiration","Digestion","Fermentation"])
]

while qid<=75:
    item=random.choice(bio)

    q(
    "Biology",
    item[0],
    item[1],
    item[2],
    f"{item[1]} is correct.",
    '["Recall biological function"]',
    "Know the function.",
    '["biology"]'
    )

# EARTH + REASONING until exactly 100
earth=[
("What causes day and night?","Earth rotation",["Moon orbit","Revolution","Tides"]),
("Which rock forms from cooled magma?","Igneous",["Sedimentary","Metamorphic","Fossil"])
]

while len(questions)<100:

    item=random.choice(earth)

    q(
    "Earth Science",
    item[0],
    item[1],
    item[2],
    f"{item[1]} is correct.",
    '["Recall Earth process"]',
    "Connect processes.",
    '["earth"]'
    )

content='import { Question } from "@/types/questions";\n\nexport const scienceGenerated001: Question[]=[\n'+(",".join(questions))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions))
