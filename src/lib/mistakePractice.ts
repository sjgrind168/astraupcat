import { getMistakeBook } from "./mistakeBook";

export function getPracticeMistakes(){

  const mistakes=getMistakeBook();

  return [...mistakes]
    .sort(()=>Math.random()-0.5)
    .slice(0,20);

}
