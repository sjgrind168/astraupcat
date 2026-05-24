import { useLocation } from "react-router-dom";
import { shouldShowAds } from "@/lib/adRules";
import { useApp } from "@/lib/store";

export default function AdContainer(){

const { pathname } = useLocation();
const { state } = useApp();

const subscription =
state.profile?.subscription || "free";

if(
!shouldShowAds(
pathname,
subscription
)
){
return null;
}

return(

<div className="mt-6">

<div
className="
w-full
min-h-[90px]
rounded-lg
border
border-border
bg-card
flex
items-center
justify-center
overflow-hidden
"
>

<div className="text-sm text-muted-foreground">

AdMob Banner
<br/>

Fallback: MerchLab

</div>

</div>

</div>

);

}
