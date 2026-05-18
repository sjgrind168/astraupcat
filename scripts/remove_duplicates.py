from pathlib import Path
import re

base=Path("src/data")

seen=set()
removed=0

for file in base.rglob("*.ts"):

    text=file.read_text(errors="ignore")

    blocks=re.findall(
        r'\{.*?\n\}',
        text,
        re.DOTALL
    )

    cleaned=[]

    for b in blocks:

        m=re.search(
            r'question:"([^"]+)"',
            b
        )

        if not m:
            cleaned.append(b)
            continue

        q=m.group(1).strip()

        if q in seen:
            removed+=1
            continue

        seen.add(q)
        cleaned.append(b)

    if cleaned:

        header=re.search(
            r'^(.*?)\[',
            text,
            re.DOTALL
        )

        if header:

            newText=header.group(1)+"[\n"+",\n".join(cleaned)+"\n]"

            file.write_text(newText)

print("\nRemoved:",removed)
print("Remaining unique:",len(seen))
