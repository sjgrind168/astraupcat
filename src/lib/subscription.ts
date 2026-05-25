export type SubscriptionType =
"free"
|"trial"
|"premium";

const TRIAL_KEY="astra_trial";
const TRIAL_DAYS=3;

export function getSubscription(){

const premium=
localStorage.getItem(
"premium"
)==="true";

if(premium){
return "premium";
}

const trial=
JSON.parse(
localStorage.getItem(
TRIAL_KEY
) || "{}"
);

if(
trial.used &&
trial.start
){

const days=
(Date.now()-trial.start)
/(1000*60*60*24);

if(days<TRIAL_DAYS){
return "trial";
}

}

return "free";

}

export function activateTrial(){

const trial=
JSON.parse(
localStorage.getItem(
TRIAL_KEY
)||"{}"
);

if(trial.used){
return false;
}

localStorage.setItem(
TRIAL_KEY,
JSON.stringify({
used:true,
start:Date.now()
})
);

return true;

}


export function getTrialDaysRemaining(){

const trial =
JSON.parse(
localStorage.getItem(TRIAL_KEY) || "{}"
);

if(!trial.used || !trial.start){
return 0;
}

const elapsed =
(Date.now()-trial.start)/(1000*60*60*24);

return Math.max(
0,
Math.ceil(TRIAL_DAYS-elapsed)
);

}
