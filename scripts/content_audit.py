from pathlib import Path
import re, json, csv, hashlib
from difflib import SequenceMatcher
from collections import Counter, defaultdict

ROOT = Path(".")
QUESTION_DIRS = [
    ROOT / "src/data/questionPacks",
    ROOT / "src/data/stagingQuestions",
]
JSON_DIRS = [
    ROOT / "source_reviewers",
    ROOT / "src/data",
]
SOURCE_TEXT_DIR = ROOT / "source_reviewers"
OUT = ROOT / "audit_reports"
OUT.mkdir(exist_ok=True)

LEGAL_PATTERNS = [
    "actual upcat", "leaked", "recalled", "official upcat", "upcat 20",
    "filipiknow", "lim upcat", "esc upcat", "office of admissions",
    "the story", "the passage", "selection", "excerpt", "article above",
    "figure", "diagram", "table above", "chart",
]

BROKEN_PATTERNS = [
    "refer to the figure", "see figure", "shown above", "story above",
    "passage above", "paragraph above", "selection above", "chart above",
    "table above", "diagram above", "image", "____", "???", "�",
    "continuing", "for brevity", "placeholder",
]

PASSAGE_REF_PATTERNS = [
    r"\baccording to (the )?(passage|story|paragraph|selection|article|text)\b",
    r"\bin (the )?(passage|story|paragraph|selection|article|text)\b",
    r"\bthe author\b",
    r"\bthe narrator\b",
    r"\bthe story\b",
    r"\bthe passage\b",
    r"\bselection\b",
]

SUBJECT_BUCKETS = {
    "Mathematics": "Math",
    "Science": "Science",
    "English Language": "Language",
    "Filipino Language": "Language",
    "Reading Comprehension": "Reading Comprehension",
}

def norm(s):
    return re.sub(r"[^a-z0-9]+", " ", (s or "").lower()).strip()

def compact(s):
    return re.sub(r"\s+", " ", (s or "")).strip()

def extract_string_field(obj, key):
    patterns = [
        rf'{key}\s*:\s*"((?:\\.|[^"\\])*)"',
        rf'{key}\s*:\s*`([\s\S]*?)`',
        rf'"{key}"\s*:\s*"((?:\\.|[^"\\])*)"',
        rf'"{key}"\s*:\s*`([\s\S]*?)`',
    ]
    for p in patterns:
        m = re.search(p, obj)
        if m:
            return compact(m.group(1).replace("\\n", "\n").replace('\\"', '"'))
    return ""

def extract_number_field(obj, key):
    m = re.search(rf'{key}"?\s*:\s*(\d+)', obj)
    return int(m.group(1)) if m else None

def extract_choices(obj):
    m = re.search(r'choices"?\s*:\s*\[([\s\S]*?)\]\s*,\s*(answerIndex|explanation)', obj)
    if not m:
        return []
    raw = m.group(1)
    return [compact(x.replace("\\n", "\n").replace('\\"', '"')) for x in re.findall(r'"((?:\\.|[^"\\])*)"', raw)]

def split_objects(text):
    objs = []
    positions = [m.start() for m in re.finditer(r'id"?\s*:\s*["`]', text)]
    for i, pos in enumerate(positions):
        start = text.rfind("{", 0, pos)
        end_hint = positions[i+1] if i+1 < len(positions) else len(text)
        chunk = text[start:end_hint]
        last = chunk.rfind("},")
        if last == -1:
            last = chunk.rfind("}")
        if start != -1 and last != -1:
            objs.append(chunk[:last+1])
    return objs

def load_questions():
    qs = []
    files = []
    for d in QUESTION_DIRS:
        if d.exists():
            files += list(d.glob("*.ts"))
    for f in files:
        txt = f.read_text(errors="ignore")
        for obj in split_objects(txt):
            qid = extract_string_field(obj, "id")
            if not qid:
                continue
            q = {
                "file": str(f),
                "id": qid,
                "subject": extract_string_field(obj, "subject"),
                "topic": extract_string_field(obj, "topic"),
                "difficulty": extract_string_field(obj, "difficulty"),
                "question": extract_string_field(obj, "question"),
                "choices": extract_choices(obj),
                "answerIndex": extract_number_field(obj, "answerIndex"),
                "explanation": extract_string_field(obj, "explanation"),
                "raw": obj,
            }
            qs.append(q)

    for d in JSON_DIRS:
        if d.exists():
            for f in d.rglob("*.json"):
                try:
                    data = json.loads(f.read_text(errors="ignore"))
                except Exception:
                    continue
                items = data if isinstance(data, list) else data.get("questions", [])
                if not isinstance(items, list):
                    continue
                for item in items:
                    if not isinstance(item, dict): continue
                    qs.append({
                        "file": str(f),
                        "id": str(item.get("id","")),
                        "subject": str(item.get("subject","")),
                        "topic": str(item.get("topic","")),
                        "difficulty": str(item.get("difficulty","")),
                        "question": str(item.get("question","")),
                        "choices": item.get("choices", []),
                        "answerIndex": item.get("answerIndex"),
                        "explanation": str(item.get("explanation","")),
                        "raw": json.dumps(item, ensure_ascii=False),
                    })
    return qs

def load_source_text():
    chunks = []
    if SOURCE_TEXT_DIR.exists():
        for f in SOURCE_TEXT_DIR.rglob("*.txt"):
            try:
                chunks.append((str(f), norm(f.read_text(errors="ignore"))))
            except Exception:
                pass
    return chunks

def source_similarity(question, sources):
    nq = norm(question)
    if len(nq) < 30:
        return ("", 0.0)
    best = ("", 0.0)
    snippet = " ".join(nq.split()[:40])
    for path, src in sources:
        if snippet and snippet in src:
            return (path, 1.0)
        # light fuzzy check against beginning of question
        if len(src) > 0:
            ratio = SequenceMatcher(None, snippet, src[:max(1000, len(snippet)*20)]).quick_ratio()
            if ratio > best[1]:
                best = (path, ratio)
    return best

def has_passage(qtext):
    t = qtext.lower()
    return ("passage:" in t or "read:" in t or "basahin:" in t or "\n\n" in qtext or len(qtext) > 280)

def score_and_flags(q, sources):
    flags = []
    risk = "LOW"
    action = "KEEP"

    qtext = q["question"]
    raw = q["raw"]
    ntext = norm(qtext + " " + q["explanation"])

    # broken structure
    if not q["id"] or not qtext:
        flags.append("Missing ID or question text")
        action = "REMOVE"
    if len(q["choices"]) != 4:
        flags.append(f"Invalid choices count: {len(q['choices'])}")
        action = "REMOVE"
    if q["answerIndex"] is None or not isinstance(q["answerIndex"], int) or q["answerIndex"] < 0 or q["answerIndex"] > 3:
        flags.append("Missing or invalid answerIndex")
        action = "REMOVE"
    if q["answerIndex"] is not None and len(q["choices"]) == 4 and q["answerIndex"] < len(q["choices"]):
        if not q["choices"][q["answerIndex"]].strip():
            flags.append("Correct answer choice is empty")
            action = "REMOVE"

    # OCR/broken text
    for p in BROKEN_PATTERNS:
        if p in ntext:
            flags.append(f"Broken/OCR marker: {p}")
            action = "REMOVE" if action == "KEEP" else action

    if re.search(r"[�]|_{3,}|\.{4,}|[A-Za-z]\s{2,}[A-Za-z]\s{2,}[A-Za-z]", raw):
        flags.append("Possible OCR/encoding/spacing corruption")
        action = "REWRITE" if action == "KEEP" else action

    # missing passage
    passage_ref = any(re.search(p, qtext.lower()) for p in PASSAGE_REF_PATTERNS)
    if q["subject"] == "Reading Comprehension" and passage_ref and not has_passage(qtext):
        flags.append("Reading question appears to reference missing passage/story/context")
        risk = "MEDIUM"
        action = "REMOVE"

    if any(x in ntext for x in ["figure", "diagram", "chart", "table above", "shown above"]):
        flags.append("References missing visual/table/figure")
        risk = "MEDIUM"
        action = "REMOVE"

    # copyright/legal heuristic
    for p in LEGAL_PATTERNS:
        if p in ntext:
            flags.append(f"Legal/source-risk phrase: {p}")
            risk = "MEDIUM" if risk == "LOW" else risk

    src_path, sim = source_similarity(qtext, sources)
    if sim >= 1.0:
        flags.append(f"Question opening text appears copied from source TXT: {src_path}")
        risk = "HIGH"
        action = "REWRITE" if action != "REMOVE" else action

    if len(qtext) > 900:
        flags.append("Long passage/question text, possible copyrighted passage risk")
        risk = "HIGH"
        action = "REWRITE" if action == "KEEP" else action

    # quality heuristics
    clarity = 100
    if len(qtext) < 20: clarity -= 40
    if len(q["explanation"]) < 25: clarity -= 30
    if len(set(map(norm, q["choices"]))) < len(q["choices"]): 
        flags.append("Duplicate or near-identical answer choices")
        clarity -= 30
        action = "REWRITE" if action == "KEEP" else action

    quality = max(0, min(100, clarity))
    if flags and action == "KEEP":
        action = "NEEDS MANUAL REVIEW"

    category = SUBJECT_BUCKETS.get(q["subject"], "Other")
    if "vocab" in norm(q["topic"]): category = "Vocabulary"
    if "logic" in norm(q["topic"]): category = "Logic"
    if "abstract" in norm(q["topic"]): category = "Abstract Reasoning"
    if "general" in norm(q["topic"]): category = "General Knowledge"

    return flags, risk, action, quality, category

questions = load_questions()
sources = load_source_text()

seen = {}
near_groups = defaultdict(list)
rows = []

for q in questions:
    key = norm(q["question"])
    qhash = hashlib.md5(key.encode()).hexdigest()
    flags, risk, action, quality, category = score_and_flags(q, sources)

    if key in seen:
        flags.append(f"Exact duplicate of {seen[key]}")
        risk = "MEDIUM"
        action = "REMOVE"
    else:
        seen[key] = q["id"]

    near_key = " ".join(key.split()[:12])
    if near_key:
        near_groups[near_key].append(q["id"])

    if flags:
        rows.append({
            "id": q["id"],
            "file": q["file"],
            "subject": q["subject"],
            "topic": q["topic"],
            "category": category,
            "risk": risk,
            "action": action,
            "quality": quality,
            "problem": " | ".join(flags),
            "question_preview": compact(q["question"])[:220],
        })

# near duplicate pass
for k, ids in near_groups.items():
    if len(ids) > 1:
        rows.append({
            "id": ", ".join(ids),
            "file": "multiple",
            "subject": "",
            "topic": "",
            "category": "Duplicate",
            "risk": "LOW",
            "action": "NEEDS MANUAL REVIEW",
            "quality": "",
            "problem": "Possible near-duplicate opening wording",
            "question_preview": k,
        })

total = len(questions)
flagged = len(rows)
broken = sum(1 for r in rows if r["action"] == "REMOVE")
high = sum(1 for r in rows if r["risk"] == "HIGH")
dupes = sum(1 for r in rows if "duplicate" in r["problem"].lower())

clean_score = max(0, round(100 - (flagged / max(total,1))*60 - (high/max(total,1))*25 - (broken/max(total,1))*20, 1))
legal = "SAFE"
if high > 0 or flagged / max(total,1) > 0.20:
    legal = "NEEDS CLEANUP"
if high > 10 or flagged / max(total,1) > 0.40:
    legal = "HIGH LEGAL RISK"
elif flagged / max(total,1) > 0.08:
    legal = "MOSTLY SAFE"

with open(OUT / "flagged_questions.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=["id","file","subject","topic","category","risk","action","quality","problem","question_preview"])
    w.writeheader()
    w.writerows(rows)

summary = f"""# UPCAT Question Bank Audit Report

## A. Summary Report
- Total questions scanned: {total}
- Total flagged entries: {flagged}
- Total broken/remove candidates: {broken}
- Total duplicate/near-duplicate flags: {dupes}
- Total high-risk copyright flags: {high}

## C. Cleanliness Score
**{clean_score}/100**

## D. Legal Safety Estimate
**{legal}**

## Notes
This is a strict automated audit. It flags risk heuristically and does not replace legal review. For a commercial paid platform, all HIGH and MEDIUM items should be rewritten or removed before launch.

## Output Files
- `audit_reports/flagged_questions.csv`
- `audit_reports/audit_summary.md`
"""
(OUT / "audit_summary.md").write_text(summary, encoding="utf-8")

print(summary)
print(f"Detailed flagged list saved to: {OUT / 'flagged_questions.csv'}")
