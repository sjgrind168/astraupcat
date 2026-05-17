from pathlib import Path
import random

OUT = Path("src/data/generated/mathGenerated001.ts")
OUT.parent.mkdir(parents=True, exist_ok=True)

def make_linear(i, a, b, x):
    c = a * x + b
    wrongs = sorted(set([x + 1, x - 1, x + 2, x - 2, x + 3]))
    wrongs = [w for w in wrongs if w != x][:3]
    choices = wrongs + [x]
    random.shuffle(choices)
    answer = choices.index(x)

    return f'''  {{
    id: "math-gen-{i:03d}",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "hard",
    question: "If {a}x + {b} = {c}, what is the value of x?",
    choices: {choices},
    answerIndex: {answer},
    explanation: "Solving {a}x + {b} = {c} gives {a}x = {c - b}, so x = {x}.",
    steps: [
      "Subtract {b} from both sides: {a}x = {c - b}",
      "Divide both sides by {a}: x = {x}",
    ],
    tip: "Isolate x by reversing the operations in order.",
    tags: ["algebra", "linear equations"],
  }}'''

questions = []
used = set()

i = 1
for a in range(2, 12):
    for b in range(3, 20, 2):
        for x in range(2, 15):
            key = (a, b, x)
            if key in used:
                continue
            used.add(key)
            questions.append(make_linear(i, a, b, x))
            i += 1
            if len(questions) >= 50:
                break
        if len(questions) >= 50:
            break
    if len(questions) >= 50:
        break

content = '''import { Question } from "@/types/questions";

export const mathGenerated001: Question[] = [
''' + ",\n\n".join(questions) + '''
];
'''

OUT.write_text(content)
print(f"Generated {len(questions)} math questions → {OUT}")
