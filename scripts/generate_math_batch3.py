from pathlib import Path
import random

OUT=Path("src/data/generated/mathGenerated003.ts")

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
id:"math-gen3-{qid:03d}",
subject:"Math",
topic:"{topic}",
difficulty:"hard",
question:"{question}",
choices:{choices},
answerIndex:{answer},
explanation:"{explanation}"
}}
''')

    qid+=1


# Algebra

for x in range(2,42):

    answer=x+3

    add(
    "Algebra",
    f"If x={x}, what is x+3?",
    str(answer),
    [
    str(answer+1),
    str(answer+2),
    str(answer-1)
    ],
    "Substitute x into expression."
    )


# Geometry

for s in range(5,35):

    area=s*s

    add(
    "Geometry",
    f"What is the area of a square with side {s}?",
    str(area),
    [
    str(area+2),
    str(area+5),
    str(area-2)
    ],
    "Area = side²."
    )


# Percent

for n in range(10,60,2):

    val=int(n*.20)

    add(
    "Percent",
    f"What is 20% of {n}?",
    str(val),
    [
    str(val+2),
    str(val+3),
    str(val-1)
    ],
    "Multiply by 0.20"
    )


# Fill remaining

while len(questions)<150:

    a=random.randint(1,30)
    b=random.randint(1,20)

    add(
    "Word Problem",
    f"A box has {a} apples and receives {b} more. Total?",
    str(a+b),
    [
    str(a+b+2),
    str(a+b+3),
    str(a+b-1)
    ],
    "Addition problem."
    )

content='import { Question } from "@/types/questions";\n\nexport const mathGenerated003=[\n'+(",".join(questions[:150]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:150]))
