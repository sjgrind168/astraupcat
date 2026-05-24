export const HIDE_AD_ROUTES = [
"/settings",
"/about",
"/terms",
"/privacy",
"/upgrade",
"/onboarding"
];

export function shouldShowAds(
pathname:string,
subscription:"free"|"trial"|"premium"
){

if(subscription!=="free"){
return false;
}

return !HIDE_AD_ROUTES.some(
route=>pathname.startsWith(route)
);

}
