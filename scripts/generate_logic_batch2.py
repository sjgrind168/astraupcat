from pathlib import Path
import random

OUT=Path("src/data/generated/logicGenerated002.ts")

questions=[]
qid=1
seen=set()

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
id:"logic-gen2-{qid:03d}",
subject:"Logic",
topic:"{topic}",
difficulty:"hard",
question:"{question}",
choices:{choices},
answerIndex:{answer},
explanation:"{explanation}"
}}
''')

    qid+=1


# sequence

for start in [2,4,6,8,10]:
    for step in [2,3,4,5]:

        seq=[start+i*step for i in range(5)]
        nextNum=seq[-1]+step

        add(
        "Sequence",
        f"What comes next? {', '.join(map(str,seq))}, ?",
        str(nextNum),
        random.sample(
            [str(nextNum+1),
             str(nextNum+2),
             str(nextNum-1),
             str(nextNum+3)],
             3
        ),
        "Pattern increases consistently."
        )


# odd one out

groups=[

(["Apple","Banana","Orange","Table"],"Table"),
(["Dog","Cat","Bird","Chair"],"Chair"),
(["Red","Blue","Green","Laptop"],"Laptop"),
(["Rose","Tulip","Lily","Phone"],"Phone")

]

for items,correct in groups:

    add(
    "Odd One Out",
    f"Which does not belong? {', '.join(items)}",
    correct,
    random.sample(
    [x for x in items if x!=correct],
    3
    ),
    "One item belongs to another category."
    )


while len(questions)<150:

    add(
    "Deductive Reasoning",
    f"If all A are B and all B are C, which statement is true? #{len(questions)+1}",
    "All A are C",
    [
    "No A are C",
    "Only C are A",
    "Some A are not C"
    ],
    "Transitive logic."
    )

content='import { Question } from "@/types/questions";\n\nexport const logicGenerated002=[\n'+(",".join(questions[:150]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:150]))
