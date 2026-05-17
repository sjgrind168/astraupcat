from pathlib import Path
import re

text = Path(
"src/data/generated/mathGenerated001.ts"
).read_text()

ids = re.findall(r'id:\s*"([^"]+)"',text)
questions = re.findall(r'question:\s*"([^"]+)"',text)
answers = re.findall(r'answerIndex:\s*(\d+)',text)
choices = re.findall(
r'choices:\s*\[(.*?)\]',
text
)

print("Questions:",len(ids))
print("Unique IDs:",len(set(ids)))
print("Answer indices:",len(answers))
print("Choices blocks:",len(choices))

bad=[]

for i,c in enumerate(choices):
    count=len(c.split(","))

    if count!=4:
        bad.append(ids[i])

print("Broken choices:",len(bad))

if bad:
    print("\nBroken IDs:")
    print("\n".join(bad))
