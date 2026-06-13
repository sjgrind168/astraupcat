from pathlib import Path
import json
import fitz

ROOT = Path(".")
PDF = ROOT / "private-source" / "collegio.pdf"

OUT_IMG = ROOT / "public" / "private-reviewer" / "collegio" / "pages"
OUT_DATA = ROOT / "src" / "data" / "private" / "collegio"

if not PDF.exists():
    raise SystemExit(f"PDF not found: {PDF}")

OUT_IMG.mkdir(parents=True, exist_ok=True)
OUT_DATA.mkdir(parents=True, exist_ok=True)

doc = fitz.open(PDF)

pages = []

for i, page in enumerate(doc, start=1):
    text = page.get_text("text")

    pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)

    img_name = f"page-{i:03d}.jpg"
    img_path = OUT_IMG / img_name

    pix.save(img_path)

    pages.append({
        "page": i,
        "image": f"/private-reviewer/collegio/pages/{img_name}",
        "text": text
    })

manifest = {
    "title": "Private Collegio CET Reviewer",
    "pageCount": len(pages),
    "mode": "private-study-only"
}

(OUT_DATA / "rawPages.json").write_text(
    json.dumps(pages, ensure_ascii=False, indent=2)
)

(OUT_DATA / "manifest.json").write_text(
    json.dumps(manifest, ensure_ascii=False, indent=2)
)

print(f"Extracted {len(pages)} pages")
print("DONE")
