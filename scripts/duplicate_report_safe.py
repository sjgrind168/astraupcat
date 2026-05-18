from pathlib import Path
import re
from collections import Counter

base=Path("src/data/questionPacks")

questions=[]

for file in base.glob("*GeneratedPack.ts"):

    text=file.read_text(errors="ignore")

    qs=re.findall(
        r'question:"([^"]+)"',
        text
    )

    questions.extend(qs)

count=Counter(questions)

dupes=[]

for q,c in count.items():
    if c>1:
        dupes.append((c,q))

dupes.sort(reverse=True)

print("\nTOP DUPLICATES\n")

for c,q in dupes[:100]:
    print(f"{c}x | {q}")

print("\nTotal duplicate templates:",
      len(dupes))
