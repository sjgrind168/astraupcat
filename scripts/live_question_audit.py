from pathlib import Path
import re
from collections import Counter

questions_file = Path("src/data/questions.ts").read_text()

imports = re.findall(
    r'import \{ .*? as (\w+) \} from "@/data/questionPacks/(.*?)";|import \{ (\w+) \} from "@/data/questionPacks/(.*?)";',
    questions_file
)

packs = []

for a, path1, b, path2 in imports:
    pack_path = path1 or path2
    packs.append(Path(f"src/data/questionPacks/{pack_path}.ts"))

all_questions = []

for pack in packs:
    if not pack.exists():
        print("Missing:", pack)
        continue

    text = pack.read_text(errors="ignore")

    ids = re.findall(r'id: ?"([^"]+)"', text)
    qs = re.findall(r'question: ?"([^"]+)"', text)
    subjects = re.findall(r'subject: ?"([^"]+)"', text)

    print(f"{pack.name}: ids={len(ids)} questions={len(qs)} subjects={len(subjects)}")

    for q in qs:
        all_questions.append(q.strip())

counts = Counter(all_questions)
dupes = [(q,c) for q,c in counts.items() if c > 1]

print("\n==============================")
print("LIVE QUESTION AUDIT")
print("==============================")
print("Total live questions:", len(all_questions))
print("Unique live questions:", len(counts))
print("Duplicate templates:", len(dupes))
print("Duplicate rate:", round((len(dupes) / max(len(all_questions), 1)) * 100, 2), "%")

if dupes:
    print("\nTop duplicates:")
    for q,c in sorted(dupes, key=lambda x: x[1], reverse=True)[:30]:
        print(f"{c}x | {q[:120]}")
