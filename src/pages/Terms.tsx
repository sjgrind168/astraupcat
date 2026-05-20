import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Terms() {
  const navigate = useNavigate();
return (
<div className="container mx-auto max-w-4xl p-6 space-y-4">


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

<p>
All content in Astra Reviewer including practice questions,
explanations, examples, and review materials is provided for
educational use only.
</p>

<p>
Users may not reproduce, redistribute, scrape,
or resell app content without written permission.
</p>

<p>
If you believe content infringes intellectual property rights,
contact AstraLabs with supporting information for review.
</p>

</div>
)
}
