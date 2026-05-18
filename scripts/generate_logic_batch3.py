from pathlib import Path
import random

OUT=Path("src/data/generated/logicGenerated003.ts")

questions=[]
seen=set()
qid=1

def add(topic,q,correct,wrong,exp):
    global qid

    if q in seen:
        return

    seen.add(q)

    choices=wrong+[correct]
    random.shuffle(choices)

    ans=choices.index(correct)

    questions.append(f'''
{{
id:"logic-gen3-{qid:03d}",
subject:"Logic",
topic:"{topic}",
difficulty:"hard",
question:"{q}",
choices:{choices},
answerIndex:{ans},
explanation:"{exp}"
}}
''')
    qid+=1


# Sequence 40

for s in range(2,22):
    step=random.choice([2,3,4,5])

    seq=[s+i*step for i in range(5)]

    add(
    "Sequence",
    f"What comes next? {', '.join(map(str,seq))}, ?",
    str(seq[-1]+step),
    [str(seq[-1]+1),
     str(seq[-1]+2),
     str(seq[-1]+3)],
    "Constant increase."
    )


# Odd one out 35

groups=[
(["Apple","Orange","Banana","Chair"],"Chair"),
(["Dog","Cat","Bird","Laptop"],"Laptop"),
(["Blue","Red","Green","Phone"],"Phone"),
(["Rose","Tulip","Lily","Table"],"Table")
]

for i in range(35):
    items,correct=random.choice(groups)

    add(
    "Odd One Out",
    f"Which does not belong? {' , '.join(items)} #{i}",
    correct,
    random.sample(
    [x for x in items if x!=correct],
    3
    ),
    "Different category."
    )


# Deductive 35

for i in range(35):

    add(
    "Deductive Reasoning",
    f"If all A are B and all B are C, what follows? #{i}",
    "All A are C",
    [
    "No A are C",
    "Only C are A",
    "Some A are not C"
    ],
    "Transitive logic."
    )


# Analogies fill to 150

pairs=[
("Bird","Nest","Bee","Hive"),
("Puppy","Dog","Kitten","Cat"),
("Author","Book","Composer","Music")
]

while len(questions)<150:

    a,b,c,d=random.choice(pairs)

    add(
    "Analogy",
    f"{a}:{b} = {c}:___ #{len(questions)}",
    d,
    ["Chair","Paper","Window"],
    "Relationship pattern."
    )

content='import { Question } from "@/types/questions";\n\nexport const logicGenerated003=[\n'+(",".join(questions[:150]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:150]))
