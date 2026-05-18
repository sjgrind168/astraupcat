from pathlib import Path
import re
from collections import Counter

base=Path("src/data")

questions=[]

for file in base.rglob("*.ts"):

    text=file.read_text(errors="ignore")

    qs=re.findall(
        r'question:"([^"]+)"',
        text
    )

    for q in qs:
        questions.append(
            (file.name,q)
        )

allQuestions=[q for _,q in questions]

print("="*50)
print("QUESTION AUDIT")
print("="*50)

print("\nTotal Questions:")
print(len(allQuestions))

print("\nUnique Questions:")
print(len(set(allQuestions)))

dupes=Counter(allQuestions)

duplicateCount=0

print("\nDuplicates:\n")

for q,c in dupes.items():

    if c>1:
        duplicateCount+=1
        print(f"{c}x | {q[:100]}")

print("\nDuplicate count:")
print(duplicateCount)

print("\nDuplicate rate:")
print(
round(
duplicateCount/
len(allQuestions)*100,
2
),
"%"
)
