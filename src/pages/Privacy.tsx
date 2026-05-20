import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
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
Privacy Policy
</h1>

<p>
Astra Reviewer collects only the information needed
for account access, subscriptions, and app functionality.
</p>

<p>
We do not sell personal information to advertisers
or third parties.
</p>

</div>
)
}
