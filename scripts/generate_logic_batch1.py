from pathlib import Path
import random

OUT = Path("src/data/generated/logicGenerated001.ts")

questions=[]
qid=1

def q(topic,question,correct,wrong,explanation,steps,tip,tags):
    global qid

    choices=wrong[:3]+[correct]
    random.shuffle(choices)

    answer=choices.index(correct)

    obj=f'''
{{
id:"logic-gen-{qid:03d}",
subject:"Logic",
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


# NUMBER PATTERNS (40)

for start in range(2,42):

    seq=[start]

    diff=random.choice([2,3,4,5])

    for _ in range(4):
        seq.append(seq[-1]+diff)

    ans=seq[-1]+diff

    q(
    "Number Patterns",
    f"What is the next number in the sequence: {', '.join(map(str,seq))}?",
    str(ans),
    [str(ans+diff),str(ans-diff),str(ans+2*diff)],
    f"The sequence increases by {diff}.",
    '["Find common difference","Continue pattern"]',
    "Check for repeated change.",
    '["patterns"]'
    )


# LETTER PATTERNS (30)

alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for i in range(30):

    start=random.randint(0,10)

    step=random.choice([1,2,3])

    seq=[]

    for j in range(5):
        seq.append(alphabet[start+j*step])

    ans=alphabet[start+5*step]

    wrong=[
    alphabet[start+4*step],
    alphabet[min(25,start+5*step+1)],
    alphabet[min(25,start+5*step+2)]
    ]

    q(
    "Letter Patterns",
    f"What comes next: {', '.join(seq)} ?",
    ans,
    wrong,
    f"Letters advance by {step}.",
    '["Check alphabetical spacing"]',
    "Look at the jump size.",
    '["letters"]'
    )


# LOGIC STATEMENTS (30)

for i in range(30):

    q(
    "Logic",
    "All cats are animals. All animals are living things. Which statement must be true?",
    "All cats are living things",
    [
    "All living things are cats",
    "All animals are cats",
    "Some cats are not living things"
    ],
    "Use transitive logic.",
    '["Connect premises","Find guaranteed conclusion"]',
    "Follow only given facts.",
    '["logic"]'
    )

content='import { Question } from "@/types/questions";\n\nexport const logicGenerated001: Question[]=[\n'+(",".join(questions[:100]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:100]))
