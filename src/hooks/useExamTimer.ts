import { useEffect, useState } from "react";

export function useExamTimer(minutes=60){

  const [secondsLeft,setSecondsLeft]=useState(minutes*60);

  useEffect(()=>{

    const timer=setInterval(()=>{

      setSecondsLeft(prev=>{

        if(prev<=1){
          clearInterval(timer);
          return 0;
        }

        return prev-1;
      });

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  const mins=Math.floor(secondsLeft/60);
  const secs=secondsLeft%60;

  return {
    secondsLeft,
    display:
      `${mins}:${secs.toString().padStart(2,"0")}`,
    isFinished:secondsLeft===0
  };
}
