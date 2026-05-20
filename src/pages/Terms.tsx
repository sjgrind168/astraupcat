import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Terms() {
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
Terms & Content Notice
</h1>

<div className="space-y-4 text-sm leading-7 text-muted-foreground">

<p>
All content within Astra Reviewer including practice questions, explanations, examples, interface text, study materials, visual elements, and educational content is provided for educational purposes only.
</p>

<p>
Users may not copy, reproduce, scrape, redistribute, republish, sell, or commercially exploit Astra Reviewer content without written permission from AstraLabs.
</p>

<p>
Astra Reviewer does not claim to provide actual, official, leaked, confidential, or previously administered examination materials.
</p>

<p>
Practice questions and educational content are independently created learning materials developed from general academic subjects and educational competencies. Any unintended similarity to external educational content, examinations, textbooks, publications, or learning materials does not imply copying, reproduction, affiliation, endorsement, or ownership claims.
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
