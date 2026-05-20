import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
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
About Astra Reviewer
</h1>

<p>
Astra Reviewer is an independent educational app for self-study,
academic review, and general entrance exam preparation.
</p>

<p>
The app provides original practice questions, explanations,
and learning tools to help students strengthen knowledge,
build confidence, and improve study habits.
</p>

<p>
Astra Reviewer is not affiliated with or endorsed by any school,
university, admissions office, testing body, learning service,
publisher, or government agency.
</p>
</div>
)
}
