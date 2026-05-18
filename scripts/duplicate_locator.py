from pathlib import Path
import re
from collections import defaultdict

base = Path("src/data/questionPacks")

dupes = defaultdict(list)

for file in base.glob("*.ts"):

    text = file.read_text(errors="ignore")

    blocks = re.findall(
        r'\{(.*?)\}',
        text,
        re.DOTALL
    )

    for b in blocks:

        q = re.search(
            r'question:"([^"]+)"',
            b
        )

        qid = re.search(
            r'id:"([^"]+)"',
            b
        )

        if q:
            question = q.group(1).strip()

            dupes[question].append({
                "file": file.name,
                "id": qid.group(1) if qid else "NO_ID"
            })

print("\n====================")
print("DUPLICATE LOCATOR")
print("====================\n")

count = 0

for q,items in dupes.items():

    if len(items) > 1:

        count += 1

        print(f'{len(items)}x | {q}')

        for x in items:
            print(
                f'   → {x["file"]} | {x["id"]}'
            )

        print()

print("Total duplicate groups:",count)
