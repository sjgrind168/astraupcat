from pathlib import Path
import random
from itertools import product

OUT=Path("src/data/generated/filipinoGenerated001.ts")

questions=[]
seen=set()
qid=1

def add(topic,question,correct,wrong,explanation,steps,tip,tags):
    global qid

    if question in seen:
        return

    seen.add(question)

    choices=list(wrong)+[correct]
    random.shuffle(choices)

    answer=choices.index(correct)

    questions.append(f'''
{{
id:"fil-gen-{qid:03d}",
subject:"Filipino Language",
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


# KASINGKAHULUGAN
pairs=[
("masaya","maligaya"),
("matulin","mabilis"),
("matapang","magiting"),
("matalino","matalas"),
("malungkot","malumbay"),
("mahirap","dukha"),
("tahimik","payapa"),
("maganda","marikit"),
("masipag","matiyaga"),
("malawak","malaki")
]

styles=[
"kasingkahulugan",
"kahulugan",
"katulad na salita",
"pinakamalapit na salita"
]

wrong_pool=[
"mabagal","maingay","mahina",
"payat","galit","tamad",
"pangit","magulo","maliit"
]

for (word,correct),style in product(pairs,styles):

    add(
    "Kasingkahulugan",
    f"Ano ang {style} ng '{word}'?",
    correct,
    random.sample(wrong_pool,3),
    f"'{correct}' ang pinakamalapit na kahulugan.",
    '["Unawain ang salita"]',
    "Hanapin ang pinakamalapit na kahulugan.",
    '["filipino"]'
    )


# KASALUNGAT
opposites=[
("mataas","mababa"),
("mainit","malamig"),
("mabilis","mabagal"),
("masaya","malungkot"),
("malaki","maliit"),
("malinis","marumi"),
("matapang","duwag")
]

styles2=[
"kasalungat",
"kabaligtaran",
"salitang kabaligtaran",
"pinakabaligtad"
]

wrong_pool2=[
"maganda","matalino","masipag",
"maingay","payapa","matalas"
]

for (word,correct),style in product(opposites,styles2):

    add(
    "Kasalungat",
    f"Ano ang {style} ng '{word}'?",
    correct,
    random.sample(wrong_pool2,3),
    f"'{correct}' ang tamang kabaligtaran.",
    '["Hanapin ang kabaligtaran"]',
    "Tukuyin ang salitang kabaligtad.",
    '["filipino"]'
    )


# ANALOGIYA

analogies=[
("Aso","Tuta","Pusa","Kuting"),
("Guro","Paaralan","Doktor","Ospital"),
("Magsasaka","Bukid","Mangingisda","Dagat"),
("Ibon","Pugad","Bubuyog","Pukyutan"),
("Manunulat","Libro","Pintor","Kulay"),
("Pulis","Istasyon","Bumbero","Himpilan"),
("Isda","Tubig","Tao","Hangin"),
("Puno","Ugat","Gusali","Pundasyon")
]

wrong_pool3=[
"Bundok","Lamesa",
"Papel","Bintana",
"Silya","Telepono"
]

for a,b,c,d in analogies:

    for pattern in [
        f"{a} ay sa {b} gaya ng {c} ay sa ___",
        f"Ang relasyon ng {a} at {b} ay katulad ng {c} at ___",
        f"{a}:{b} = {c}:___"
    ]:

        add(
        "Analohiya",
        pattern,
        d,
        random.sample(wrong_pool3,3),
        f"'{d}' ang tamang ugnayan.",
        '["Hanapin ang relasyon"]',
        "Tingnan ang ugnayan ng pares.",
        '["analohiya"]'
        )

questions=questions[:100]

content='import { Question } from "@/types/questions";\n\nexport const filipinoGenerated001: Question[]=[\n'+(",".join(questions))+'];'

OUT.write_text(content)

print("Generated:",len(questions))
