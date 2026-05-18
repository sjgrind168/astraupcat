from pathlib import Path
import re

base=Path("src/data/questionPacks")

print("\nMISSING QUESTION CHECK\n")

for file in base.glob("*.ts"):

    text=file.read_text(errors="ignore")

    ids=len(
        re.findall(
        r'id:"',
        text
        )
    )

    questions=len(
        re.findall(
        r'question:"',
        text
        )
    )

    if ids!=questions:
        print(
        f"{file.name}"
        )
        print(
        f"IDs:{ids} Questions:{questions}"
        )
        print()
