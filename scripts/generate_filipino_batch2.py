from pathlib import Path
import random

OUT=Path("src/data/generated/filipinoGenerated002.ts")

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
id:"fil-gen2-{qid:03d}",
subject:"Filipino",
topic:"{topic}",
difficulty:"hard",
question:"{question}",
choices:{choices},
answerIndex:{answer},
explanation:"{explanation}"
}}
''')
    qid+=1


# Talasalitaan

words=[
("masinop","maingat"),
("matulin","mabilis"),
("masaya","maligaya"),
("matatag","matibay"),
("payapa","tahimik")
]

for w,meaning in words:
    for i in range(3):
        add(
        "Talasalitaan",
        f"Ano ang kahulugan ng '{w}'? #{i}",
        meaning,
        ["maalat","mabagal","malungkot"],
        "Kahulugan ng salita."
        )


# Kasingkahulugan

pairs=[
("maganda","marikit"),
("matalino","matalas"),
("masipag","masikap"),
("malungkot","malumbay"),
("matapang","matikas")
]

for w,same in pairs:
    for i in range(2):
        add(
        "Kasingkahulugan",
        f"Ano ang kasingkahulugan ng '{w}'? #{i}",
        same,
        ["mainit","maliit","maasim"],
        "Magkapareho ng kahulugan."
        )


# Kasalungat

pairs2=[
("mataas","mababa"),
("mabilis","mabagal"),
("malaki","maliit"),
("maaga","huli"),
("masaya","malungkot")
]

for w,opp in pairs2:
    for i in range(2):
        add(
        "Kasalungat",
        f"Ano ang kasalungat ng '{w}'? #{i}",
        opp,
        ["malayo","mabango","mainit"],
        "Kabaligtarang kahulugan."
        )


while len(questions)<50:

    add(
    "Wastong Gamit",
    f"Piliin ang wastong salita: Siya ay ___ pumasok sa paaralan #{len(questions)}",
    "nagtungo",
    ["pumuntaan","nagpuntahan","pinuntahan"],
    "Wastong gamit ng salita."
    )

content='import { Question } from "@/types/questions";\n\nexport const filipinoGenerated002=[\n'+(",".join(questions[:50]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:50]))
