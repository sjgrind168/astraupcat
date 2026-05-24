import { useLocation } from "react-router-dom";
import { shouldShowAds } from "@/lib/adRules";
import { useApp } from "@/lib/store";

export default function AdContainer(){

const { pathname } = useLocation();
const { state } = useApp();

const subscription=
state.profile?.subscription || "free";

if(
!shouldShowAds(
pathname,
subscription
)
){
return null;
}

const ads=[

{
name:"Shopee",
link:"https://shopee.ph/shop/80730266",
title:"MerchLab Luxury You Can Afford",
subtitle:"Shopee Deals",
bg:"#EE4D2D",
button:"#ff7a59"
},

{
name:"Lazada",
link:"https://www.lazada.com.ph/shop/merchlab-online/",
title:"MerchLab Luxury You Can Afford",
subtitle:"Lazada Finds",
bg:"#0F146D",
button:"#4A2BFF"
}

];

const ad=
JSON.parse(
sessionStorage.getItem("merchAd")
||
"null"
)
||
(()=>{
const chosen=
ads[
Math.floor(
Math.random()*ads.length
)
];

sessionStorage.setItem(
"merchAd",
JSON.stringify(chosen)
);

return chosen;

})();

return(

<div className="mt-6">

<a
href={ad.link}
target="_blank"
rel="noopener noreferrer"
>

<div
style={{
background:ad.bg
}}
className="
rounded-xl
p-4
flex
items-center
justify-between
gap-4
hover:opacity-95
transition
"
>

<div
className="
flex
items-center
gap-4
"
>

<img
src="/ML.png"
alt="MerchLab"
className="
w-14
h-14
rounded-md
bg-white
p-1
"
/>

<div>

<div
className="
text-white
font-bold
"
>
{ad.title}
</div>

<div
className="
text-white/80
text-sm
"
>
{ad.subtitle}
</div>

</div>

</div>

<button
style={{
background:ad.button
}}
className="
px-4
py-2
rounded-lg
text-white
font-medium
"
>
Shop Now
</button>

</div>

</a>

</div>

);

}
