import { useEffect, useState } from "react";
import { getMistakeBook } from "@/lib/mistakeBook";
import { useNavigate } from "react-router-dom";

export default function MistakeBook(){

  const [mistakes,setMistakes]=useState<any[]>([]);
const navigate=useNavigate();


  useEffect(()=>{

    setMistakes(
      getMistakeBook()
    );

  },[]);

  const clearMistakes=()=>{

    localStorage.removeItem(
      "mistakeBook"
    );

    setMistakes([]);

  };

  return (

    <div className="p-6 max-w-5xl mx-auto space-y-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
            Mistake Book
          </h1>

          <p className="text-muted-foreground">
            Review questions you answered incorrectly.
          </p>
        </div>

        <button
          onClick={clearMistakes}
          className="px-4 py-2 border rounded"
        >
          Clear Book
        </button>

      </div>

      <div className="border rounded p-4 bg-card">

        <p className="font-semibold">
          Saved mistakes:
          {" "}
          {mistakes.length}
        </p>

      </div>

      {mistakes.length===0 && (

        <div className="border rounded p-6 bg-card">

          <p>
            No saved mistakes yet.
          </p>

        </div>

      )}

      {mistakes.map((q,index)=>(

        <div
          key={q.id}
          className="border rounded p-5 bg-card space-y-3"
        >

          <p className="font-semibold">

            {index+1}. {q.question}

          </p>

          <p>

            Correct Answer:
            {" "}
            <span className="font-bold">

            {q.choices?.[q.answerIndex]}

            </span>

          </p>

          {q.explanation && (

            <p className="text-sm text-muted-foreground">

              Explanation:
              {" "}
              {q.explanation}

            </p>

          )}

          <p className="text-xs text-muted-foreground">

            Topic:
            {" "}
            {q.topic || "Unknown"}

          </p>

        </div>

      ))}

      {mistakes.length>0 && (

        <button
          onClick={()=>{
            navigate("/practice?mode=mistakes")
          }}
          className="px-6 py-3 rounded bg-primary text-primary-foreground"
        >
          Practice Mistakes
        </button>

      )}

    </div>

  );

}
