import { getSubscription } from "./subscription";

export function canAccess(feature:string){

const subscription =
getSubscription();

if(
subscription==="trial" ||
subscription==="premium"
){
return true;
}

const freeAllowed=[

"reviewer",
"practice"

];

return freeAllowed.includes(
feature
);

}

export function getQuestionLimit(){

const subscription=
getSubscription();

if(
subscription==="trial" ||
subscription==="premium"
){
return Infinity;
}

return 10;

}

export function getReviewerLimit(){

const subscription=
getSubscription();

if(
subscription==="trial" ||
subscription==="premium"
){
return Infinity;
}

return 15;

}
