from pathlib import Path
import re

root = Path("src/data/questionPacks")

issues = []

total = 0

for f in root.rglob("*.ts"):
    text = f.read_text(errors="ignore")

    blocks = re.findall(
        r'\{[^{}]*id\s*:\s*"[^"]+"[^{}]*\}',
        text,
        re.S
    )

    for b in blocks:
        idm = re.search(r'id\s*:\s*"([^"]+)"', b)
        q = re.search(r'question\s*:\s*"([^"]*)"', b)
        exp = re.search(r'explanation\s*:\s*"([^"]*)"', b)
        ans = re.search(r'answerIndex\s*:\s*(\d+)', b)
        choices = re.search(r'choices\s*:\s*\[(.*?)\]', b, re.S)

        if not idm:
            continue

        total += 1
        qid = idm.group(1)

        choice_count = 0
        if choices:
            choice_count = len(re.findall(r'''["'][^"']+["']''', choices.group(1)))

        if not q or not q.group(1).strip():
            issues.append((f.name, qid, "EMPTY_QUESTION"))

        if not exp or not exp.group(1).strip():
            issues.append((f.name, qid, "EMPTY_EXPLANATION"))

        if not ans:
            issues.append((f.name, qid, "MISSING_ANSWER_INDEX"))
        else:
            idx = int(ans.group(1))
            if idx < 0 or idx > 3:
                issues.append((f.name, qid, f"BAD_ANSWER_INDEX:{idx}"))

        if choice_count != 4:
            issues.append((f.name, qid, f"BAD_CHOICE_COUNT:{choice_count}"))

print("===== QUESTION INTEGRITY AUDIT V2 =====")
print("Total parsed:", total)
print("Issue count:", len(issues))

for file, qid, issue in issues[:200]:
    print(f"{file} | {qid} | {issue}")
