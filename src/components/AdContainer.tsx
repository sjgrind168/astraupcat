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

const merchLinks=[
"https://shopee.ph/shop/80730266",
"https://www.lazada.com.ph/shop/merchlab-online/"
];

const merchLink=
sessionStorage.getItem("merchLink")
||
(() => {

const chosen=
merchLinks[
Math.floor(
Math.random()*merchLinks.length
)
];

sessionStorage.setItem(
"merchLink",
chosen
);

return chosen;

})();

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
overflow-hidden
"
>

<a
href={merchLink}
target="_blank"
rel="noopener noreferrer"
className="
flex
items-center
justify-center
p-3
hover:opacity-90
transition
"
>

<img
src="/ML.png"
alt="MerchLab"
className="
max-h-[70px]
object-contain
"
/>

</a>

</div>

</div>

);

}
