import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
const navigate = useNavigate();

return (
<div className="container mx-auto max-w-4xl p-6 space-y-6">

<button
onClick={()=>navigate(-1)}
className="mb-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
>
<ArrowLeft className="h-4 w-4"/>
Back
</button>

<h1 className="text-3xl font-bold">
About Astra Reviewer
</h1>

<div className="space-y-4 text-sm leading-7 text-muted-foreground">

<p>
Astra Reviewer is an independent educational application created to support students in self-study, academic review, and general entrance examination preparation.
</p>

<p>
The app provides original educational content including practice questions, explanations, examples, study materials, and learning tools designed to strengthen academic knowledge, improve study habits, and support learning progress.
</p>

<p>
All practice materials within Astra Reviewer are independently created educational content. Astra Reviewer does not claim to contain, reproduce, distribute, or provide actual, official, leaked, confidential, or previously administered examination materials.
</p>

<p>
Questions and study materials are developed from general academic concepts, educational competencies, and commonly taught subject areas. Similarities that may unintentionally occur with existing educational content, examinations, textbooks, learning materials, publications, or publicly available academic concepts are incidental and are not intended to reproduce proprietary works.
</p>

<p>
Astra Reviewer is not presented as an official source of examination content, academic policy, admission information, or institutional guidance. Users should refer to official sources for authoritative information.
</p>

<p>
The app is designed solely for educational and practice purposes.
</p>

<h2 className="font-semibold text-foreground">
Intellectual Property Notice
</h2>

<p>
If any individual or organization believes that specific content within Astra Reviewer may infringe intellectual property rights, please provide:
</p>

<ul className="list-disc pl-6">
<li>specific content involved</li>
<li>supporting information or proof of ownership</li>
<li>contact information</li>
</ul>

<p>
Valid concerns will be reviewed in good faith and content may be revised, restricted, or removed when appropriate.
</p>

</div>

</div>
)
}
