import { activateTrial } from "@/lib/subscription";

export default function Upgrade(){

function handleTrial(){

const ok=activateTrial();

if(ok){

alert(
"3-Day Trial Activated 🚀"
);

window.location.reload();

}else{

alert(
"Trial already used on this device."
);

}

}

return(

<div className="space-y-6">

<div>

<h1 className="text-3xl font-bold">
Astra Premium
</h1>

<p className="text-muted-foreground">
Unlock the full reviewer experience.
</p>

</div>

<div className="grid gap-4">

<div className="border rounded-xl p-4">

<h2 className="font-bold">
FREE
</h2>

<ul className="mt-3 space-y-1">

<li>✓ 15 reviewer questions / subject</li>
<li>✓ 10 practice questions</li>
<li>✓ Ads enabled</li>

</ul>

</div>

<div className="border rounded-xl p-4">

<h2 className="font-bold">
3 DAY TRIAL
</h2>

<ul className="mt-3 space-y-1">

<li>✓ Premium experience</li>
<li>✓ No ads</li>

</ul>

<button
onClick={handleTrial}
className="
mt-4
w-full
rounded-lg
bg-primary
text-primary-foreground
p-3
"
>

Activate Trial

</button>

</div>

<div className="border rounded-xl p-4">

<h2 className="font-bold">
PREMIUM ₱299 Lifetime
</h2>

<ul className="mt-3 space-y-1">

<li>✓ Unlimited questions</li>
<li>✓ Unlimited mock exams</li>
<li>✓ Formula Vault</li>
<li>✓ Calculator Center</li>
<li>✓ Advanced analytics</li>
<li>✓ No ads</li>

</ul>

<button
className="
mt-4
w-full
rounded-lg
bg-green-600
text-white
p-3
"
>

Upgrade Now

</button>

</div>

</div>

</div>

);

}
