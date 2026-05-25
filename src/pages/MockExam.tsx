import { useEffect, useState } from "react";
import { useMockExam } from "@/hooks/useMockExam";
import { useExamTimer } from "@/hooks/useExamTimer";
import { analyzeResults } from "@/lib/examResults";
import { saveMistakes } from "@/lib/mistakeBook";
import FeatureGate from "@/components/FeatureGate";

export default function MockExam() {
  const [examSeed, setExamSeed] = useState(0);
  const questions = useMockExam(500, examSeed);
  const timer = useExamTimer(300);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);

  const currentQuestion = questions[currentIndex];
  const result = submitted ? analyzeResults(questions, answers) : null;

  useEffect(() => {
    if (timer.isFinished && !submitted) {
      saveMistakes(questions, answers);
      setSubmitted(true);
    }
  }, [timer.isFinished, submitted, questions, answers]);

  const selectAnswer = (questionId: string, answerIndex: number) => {
    if (submitted) return;

    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const retakeExam = () => {
    setExamSeed(seed => seed + 1);
    setCurrentIndex(0);
    setAnswers({});
    setSubmitted(false);
    setShowMistakes(false);
  };

  const answeredCount = Object.keys(answers).length;

  const mistakes = questions.filter(q => answers[q.id] !== q.answerIndex);

  if (!questions.length || !currentQuestion) {
    return (
      <FeatureGate feature="mockExam">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Mock Entrance Exam</h1>
          <p className="mt-4">Loading exam questions...</p>
        </div>
      </FeatureGate>
    );
  }

  if (submitted && result) {
    return (
      <FeatureGate feature="mockExam">
        <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Mock Exam Results</h1>
          <p className="text-muted-foreground">
            Review your score, weak topics, and mistakes.
          </p>
        </div>

        <div className="border rounded p-6 space-y-3 bg-card">
          <p className="text-xl font-bold">
            Score: {result.score}/{result.total}
          </p>

          <p className="text-lg">
            Percent: {result.percent}%
          </p>

          <p>
            Answered: {answeredCount}/{questions.length}
          </p>
        </div>

        <div className="border rounded p-6 bg-card">
          <h2 className="text-lg font-bold mb-3">Weak Topics</h2>

          {result.weakTopics.length ? (
            <ul className="list-disc ml-6 space-y-1">
              {result.weakTopics.map(topic => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          ) : (
            <p>No weak topics detected. Excellent work.</p>
          )}
        </div>

        <div className="border rounded p-6 bg-card">
          <button
            onClick={() => setShowMistakes(v => !v)}
            className="font-bold underline"
          >
            {showMistakes ? "Hide Mistake Book" : `Show Mistake Book (${mistakes.length})`}
          </button>

          {showMistakes && (
            <div className="mt-4 space-y-4">
              {mistakes.map((q, index) => {
                const userAnswer = answers[q.id];
                const userChoice =
                  typeof userAnswer === "number"
                    ? q.choices[userAnswer]
                    : "No answer";

                const correctChoice = q.choices[q.answerIndex];

                return (
                  <div key={q.id} className="border rounded p-4 space-y-2">
                    <p className="font-semibold">
                      {index + 1}. {q.question}
                    </p>

                    <p>
                      Your answer: <span className="text-destructive">{userChoice}</span>
                    </p>

                    <p>
                      Correct answer: <span className="font-bold">{correctChoice}</span>
                    </p>

                    {q.explanation && (
                      <p className="text-sm text-muted-foreground">
                        Explanation: {q.explanation}
                      </p>
                    )}

                    <p className="text-xs text-muted-foreground">
                      Topic: {q.topic || "Unknown"}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <button
          onClick={retakeExam}
          className="px-6 py-3 rounded bg-primary text-primary-foreground"
        >
          Retake Mock Exam
        </button>
        </div>
      </FeatureGate>
    );
  }

  const passage = (currentQuestion as { passage?: string }).passage;

  return (
    <FeatureGate feature="mockExam">
      <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Mock Entrance Exam</h1>
          <p className="text-muted-foreground">
            Question {currentIndex + 1} of {questions.length}
          </p>
        </div>

        <div className="text-right">
          <p className="font-bold">⏱ {timer.display}</p>
          <p className="text-sm text-muted-foreground">
            Answered {answeredCount}/{questions.length}
          </p>
        </div>
      </div>

      <div className="border rounded p-5 space-y-4 bg-card">
        {passage && (
          <div className="rounded bg-muted p-4 text-sm leading-relaxed">
            {passage}
          </div>
        )}

        <p className="font-semibold">
          {currentIndex + 1}. {currentQuestion.question}
        </p>

        <div className="space-y-2">
          {currentQuestion.choices?.map((choice, index) => (
            <button
              key={index}
              onClick={() => selectAnswer(currentQuestion.id, index)}
              className={`block w-full text-left border rounded p-3 ${
                answers[currentQuestion.id] === index
                  ? "bg-primary/15 border-primary"
                  : "bg-card hover:bg-muted"
              }`}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between gap-3">
        <button
          onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentIndex(i => Math.min(questions.length - 1, i + 1))}
            disabled={currentIndex === questions.length - 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>

          <button
            onClick={() => {
            saveMistakes(questions, answers);
            setSubmitted(true);
          }}
            className="px-5 py-2 rounded bg-primary text-primary-foreground"
          >
            Submit Exam
          </button>
        </div>
      </div>
      </div>
    </FeatureGate>
  );
}
