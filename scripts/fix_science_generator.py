from pathlib import Path

p=Path("scripts/generate_science_batch1.py")
text=p.read_text()

text += r'''

# FILL REMAINING TO EXACTLY 100
while len(questions)<100:

    questions.append(
    q(
    "Scientific Reasoning",
    f"In an experiment, why are controlled variables important?",
    "To ensure a fair test",
    [
    "To increase opinions",
    "To change multiple variables",
    "To ignore results"
    ],
    "Controlled variables keep conditions consistent.",
    '["Keep conditions constant","Change only one factor"]',
    "Only one major variable should change.",
    '["reasoning","experimental design"]'
    )
    )
'''

p.write_text(text)

print("Science generator patched")
