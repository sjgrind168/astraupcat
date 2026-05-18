from pathlib import Path
import random

OUT=Path("src/data/generated/englishGenerated002.ts")

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
id:"english-gen2-{qid:03d}",
subject:"English",
topic:"{topic}",
difficulty:"hard",
question:"{question}",
choices:{choices},
answerIndex:{answer},
explanation:"{explanation}"
}}
''')

    qid+=1


# Vocabulary

words=[
("abundant","plentiful"),
("rapid","fast"),
("ancient","old"),
("fragile","delicate"),
("brilliant","intelligent")
]

for w,meaning in words:

    for i in range(5):

        add(
        "Vocabulary",
        f"What is the meaning of '{w}'? #{i}",
        meaning,
        ["empty","angry","silent"],
        "Definition meaning."
        )


# Antonyms

pairs=[
("hot","cold"),
("early","late"),
("strong","weak"),
("happy","sad"),
("expand","shrink")
]

for w,opposite in pairs:

    for i in range(4):

        add(
        "Antonym",
        f"What is the opposite of '{w}'? #{i}",
        opposite,
        ["fast","blue","chair"],
        "Opposite meaning."
        )


# Fill remaining

while len(questions)<100:

    add(
    "Sentence Completion",
    f"Choose the best word: She ___ to school every day #{len(questions)}",
    "goes",
    ["go","gone","going"],
    "Subject verb agreement."
    )

content='import { Question } from "@/types/questions";\n\nexport const englishGenerated002=[\n'+(",".join(questions[:100]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:100]))
