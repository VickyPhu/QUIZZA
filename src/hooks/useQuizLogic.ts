import { useState } from "react";

export function useQuizLogic() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string, correctAnswer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      setCurrentQuestionIndex((prev) => prev + 1);
    }, 1000);
  };

  return {
    currentQuestionIndex,
    selectedAnswer,
    isCorrect,
    score,
    handleAnswer,
  };
}
