from pathlib import Path
import random

OUT=Path("src/data/generated/readingGenerated002.ts")

questions=[]
qid=1

def add(topic,passage,question,correct,wrong,explanation):
    global qid

    choices=wrong+[correct]
    random.shuffle(choices)
    answer=choices.index(correct)

    questions.append(f'''
{{
id:"reading-v2-{qid:03d}",
subject:"Reading Comprehension",
topic:"{topic}",
difficulty:"hard",
passage:`{passage}`,
question:"{question}",
choices:{choices},
answerIndex:{answer},
explanation:"{explanation}"
}}
''')

    qid+=1


topics=[

("environment","Cities that increased green spaces observed lower temperatures and cleaner surroundings."),
("science","Researchers found that regular sleep improves concentration and memory."),
("technology","Students increasingly use online platforms to collaborate on projects."),
("history","Communities often preserve historical landmarks to remember important events."),
("daily life","A student created a weekly schedule and noticed better time management."),
("health","Doctors recommend regular exercise because it supports overall wellness."),
("education","Teachers observed stronger participation after introducing group activities."),
("society","Volunteer groups organized neighborhood cleanups to improve shared spaces.")
]

while len(questions)<100:

    topic,base=random.choice(topics)

    passage=f"{base} Many people later noticed positive effects from these changes."

    add(
    "Main Idea",
    passage,
    "What is the main idea of the passage?",
    "Positive actions can create benefits.",
    ["Weather changes suddenly","People dislike routines","Technology replaces schools"],
    "The passage focuses on beneficial outcomes."
    )

    if len(questions)>=100: break

    add(
    "Inference",
    passage,
    "What can be inferred from the passage?",
    "The changes had useful results.",
    ["Nothing improved","The effort failed","People ignored the changes"],
    "The results imply improvement."
    )

    if len(questions)>=100: break

    add(
    "Author Purpose",
    passage,
    "What is the author's purpose?",
    "To explain effects of an action",
    ["To sell a product","To tell fantasy","To criticize a person"],
    "The passage explains results."
    )

    if len(questions)>=100: break

    add(
    "Vocabulary in Context",
    passage,
    "What does the word 'observed' most nearly mean?",
    "noticed",
    ["forgot","avoided","removed"],
    "'Observed' means noticed."
    )

OUT.write_text(
'import { Question } from "@/types/questions";\n\nexport const readingGenerated002: Question[]=[\n'
+ ",".join(questions[:100])
+ '\n];'
)

print("Generated:",len(questions[:100]))
