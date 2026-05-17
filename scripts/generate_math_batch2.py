from pathlib import Path
import random

OUT = Path("src/data/generated/mathGenerated002.ts")

questions=[]
qid=51

def make_question(topic,question,correct,wrong,explanation,steps,tip,tags):

    global qid

    choices = wrong[:3] + [correct]
    random.shuffle(choices)

    answer = choices.index(correct)

    obj=f'''
{{
id:"math-gen-{qid:03d}",
subject:"Mathematics",
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
    return obj


# ALGEBRA
for a in range(2,12):
    x=random.randint(2,20)
    b=random.randint(2,20)

    c=a*x+b

    questions.append(
    make_question(
    "Algebra",
    f"If {a}x + {b} = {c}, what is x?",
    str(x),
    [str(x+1),str(x-1),str(x+2)],
    f"Solve {a}x={c-b}. x={x}",
    '["Subtract first","Divide by coefficient"]',
    "Reverse operations carefully.",
    '["algebra"]'
    )
    )

# PERCENTAGE
for _ in range(25):

    num=random.randint(20,500)
    pct=random.choice([10,15,20,25,30,40])

    ans=int(num*pct/100)

    questions.append(
    make_question(
    "Percentages",
    f"What is {pct}% of {num}?",
    str(ans),
    [str(ans+5),str(ans-5),str(ans+10)],
    f"{pct}% × {num}",
    '["Convert percent","Multiply"]',
    "Percent means per hundred.",
    '["percentage"]'
    )
    )

# PROBABILITY
for total in range(10,35):

    red=total//2

    ans=round(red/total,2)

    questions.append(
    make_question(
    "Probability",
    f"A bag contains {red} red and {total-red} blue balls. Probability of selecting red?",
    str(ans),
    [str(round(ans+.1,2)),str(round(ans-.1,2)),str(round(ans+.2,2))],
    f"{red}/{total}={ans}",
    '["Favorable/Total"]',
    "Probability ranges from 0 to 1.",
    '["probability"]'
    )
    )

    if len(questions)>=100:
        break




# AVERAGES
for n1 in range(60, 90, 3):
    n2 = n1 + 6
    n3 = n1 + 12
    ans = int((n1+n2+n3)/3)
    questions.append(
    make_question(
    "Statistics",
    f"What is the average of {n1}, {n2}, and {n3}?",
    str(ans),
    [str(ans+2), str(ans-2), str(ans+4)],
    f"Average = ({n1}+{n2}+{n3})/3 = {ans}",
    '["Add all values","Divide by the number of values"]',
    "Average means total divided by count.",
    '["statistics","average"]'
    )
    )
    if len(questions)>=100:
        break

# SEQUENCES
for start in range(2, 20):
    diff = 3
    a1 = start
    a2 = start + diff
    a3 = start + 2*diff
    a4 = start + 3*diff
    ans = start + 4*diff
    questions.append(
    make_question(
    "Sequences",
    f"What is the next term in the sequence {a1}, {a2}, {a3}, {a4}, ...?",
    str(ans),
    [str(ans+3), str(ans-3), str(ans+6)],
    f"The common difference is {diff}, so the next term is {ans}.",
    '["Find the common difference","Add it to the last term"]',
    "Arithmetic sequences add the same number each step.",
    '["sequences","arithmetic sequence"]'
    )
    )
    if len(questions)>=100:
        break



# GEOMETRY: RECTANGLE AREA
for length in range(8, 20):
    width = length - 3
    ans = length * width
    questions.append(
    make_question(
    "Geometry",
    f"A rectangle has length {length} cm and width {width} cm. What is its area?",
    str(ans),
    [str(ans+length), str(ans-width), str(ans+10)],
    f"Area of a rectangle = length × width = {length} × {width} = {ans}.",
    '["Use A = length × width","Multiply the dimensions"]',
    "Area measures the space inside a shape.",
    '["geometry","area"]'
    )
    )
    if len(questions)>=100:
        break

content='import { Question } from "@/types/questions";\n\nexport const mathGenerated002: Question[]=['+(",".join(questions))+'];'

OUT.write_text(content)

print("Generated:",len(questions))
