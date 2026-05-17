from pathlib import Path
import random

OUT=Path("src/data/generated/englishGenerated001.ts")

questions=[]
seen=set()
qid=1

def add(topic,question,correct,wrong,explanation,steps,tip,tags):
    global qid

    if question in seen:
        return

    seen.add(question)

    choices=wrong+[correct]
    random.shuffle(choices)

    answer=choices.index(correct)

    questions.append(f'''
{{
id:"english-gen-{qid:03d}",
subject:"English Language",
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
''')

    qid+=1


# SUBJECT VERB

subjects=[
"The committee",
"The team",
"The children",
"The dogs",
"The teacher",
"The athletes",
"Every student",
"Several books",
"The manager",
"The workers"
]

actions=[
"preparing for the examination",
"working on the project",
"walking toward school",
"studying for finals",
"running in the field",
"attending the meeting"
]

for s in subjects:

    singular=not (
    s.startswith("The children")
    or s.startswith("The dogs")
    or s.startswith("The athletes")
    or s.startswith("Several")
    or s.startswith("The workers")
    )

    verb="is" if singular else "are"

    for a in actions:

        add(
        "Subject Verb",
        f"{s} ___ {a}.",
        verb,
        ["are" if verb=="is" else "is","was","were"],
        f'"{verb}" agrees with the subject.',
        '["Identify subject"]',
        "Match singular/plural.",
        '["grammar"]'
        )


# VOCAB

pairs=[
("abundant","Plentiful"),
("diligent","Hardworking"),
("fragile","Delicate"),
("rapid","Fast"),
("ancient","Old"),
("brilliant","Intelligent"),
("scarce","Rare"),
("vivid","Bright"),
("hostile","Unfriendly"),
("expand","Increase")
]

wrong_pool=[
"Weak","Tiny","Heavy","Lazy",
"Slow","Common","Small",
"Friendly","Reduce","Dark"
]

for word,correct in pairs:

    for style in [
    "closest meaning",
    "best synonym",
    "nearest meaning"
    ]:

        wrong=random.sample(
        [x for x in wrong_pool if x!=correct],
        3
        )

        add(
        "Vocabulary",
        f"Select the {style} of '{word}'.",
        correct,
        wrong,
        f"{correct} best matches.",
        '["Determine meaning"]',
        "Look for roots/context.",
        '["vocabulary"]'
        )


# ANALOGIES

pairs=[
("Bird","Nest","Bee","Hive"),
("Puppy","Dog","Kitten","Cat"),
("Author","Book","Composer","Music"),
("Painter","Brush","Writer","Pen"),
("Fish","Water","Human","Air")
]

wrong_pool=["Chair","Phone","Window","Paper","Car"]

for a,b,c,d in pairs:

    add(
    "Analogies",
    f"{a} is to {b} as {c} is to ___",
    d,
    random.sample(wrong_pool,3),
    f"{d} matches relationship.",
    '["Find relationship"]',
    "Match relationship type.",
    '["analogies"]'
    )

questions=questions[:100]

content='import { Question } from "@/types/questions";\n\nexport const englishGenerated001: Question[]=[\n'+(",".join(questions))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions))
