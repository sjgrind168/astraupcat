import { canAccess } from "@/lib/featureAccess";
import { Link } from "react-router-dom";

type Props={

feature:string;
children:React.ReactNode;

};

export default function FeatureGate({

feature,
children

}:Props){

if(
canAccess(feature)
){
return <>{children}</>;
}

return(

<div
className="
rounded-xl
border
p-6
bg-card
text-center
space-y-4
"
>

<div
className="
text-4xl
"
>
🔒
</div>

<h2
className="
font-bold
text-xl
"
>
Premium Feature
</h2>

<p
className="
text-muted-foreground
"
>

Unlock Astra Premium
to access this feature.

</p>

<Link
to="/upgrade"
className="
inline-flex
rounded-lg
bg-primary
px-4
py-2
text-primary-foreground
font-medium
"
>

Upgrade

</Link>

</div>

);

}
