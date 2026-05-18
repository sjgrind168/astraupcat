from pathlib import Path
import random

OUT=Path("src/data/generated/readingGenerated003.ts")

questions=[]
qid=1

def add(topic,passage,question,correct,wrong,explanation):
    global qid

    choices=wrong+[correct]
    random.shuffle(choices)

    answer=choices.index(correct)

    questions.append(f'''
{{
id:"reading-v3-{qid:03d}",
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


subjects=[
("environment","Cities planted more trees and later residents reported cooler surroundings."),
("science","Researchers found improved concentration after better sleep habits."),
("technology","Students used online tools to collaborate more efficiently."),
("history","Communities preserved landmarks to remember important events."),
("health","Doctors encouraged exercise to support wellness."),
("education","Teachers introduced group activities in classrooms."),
("society","Volunteers organized neighborhood projects."),
("daily life","A student created a schedule to manage time better."),
("business","Small stores improved customer service."),
("transport","Cities expanded bike lanes.")
]

for i in range(25):

    topic,text=random.choice(subjects)

    passage=f"{text} Over time many people noticed positive outcomes."

    add(
    "Main Idea",
    passage,
    f"What is the central idea of passage {i+1}?",
    "Positive actions can create benefits.",
    ["People dislike change","Nothing improved","Weather changes quickly"],
    "The passage focuses on positive outcomes."
    )

    add(
    "Inference",
    passage,
    f"What can be inferred from passage {i+1}?",
    "The actions produced useful effects.",
    ["The effort failed","Nobody cared","Conditions worsened"],
    "Results imply improvement."
    )

    add(
    "Purpose",
    passage,
    f"What is the author's purpose in passage {i+1}?",
    "To explain the effect of actions",
    ["To advertise","To entertain","To criticize"],
    "The passage explains effects."
    )

    add(
    "Vocabulary",
    passage,
    f"In passage {i+1}, what does 'outcomes' most nearly mean?",
    "results",
    ["objects","questions","problems"],
    "'Outcomes' means results."
    )

content='import { Question } from "@/types/questions";\n\nexport const readingGenerated003: Question[]=[\n'+(",".join(questions[:100]))+'\n];'

OUT.write_text(content)

print("Generated:",len(questions[:100]))
