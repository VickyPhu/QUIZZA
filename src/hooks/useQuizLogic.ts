import { useEffect, useState } from "react";

export function useQuizLogic() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    setTimeLeft(15); // Reset time for every question
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timeLeft === 0) {
      setSelectedAnswer(null);
      setIsCorrect(null);
      setCurrentQuestionIndex((prev) => prev + 1);
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 2000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleAnswer = (answer: string, correctAnswer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (selectedAnswer !== null) {
      const timeOut = setTimeout(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timeOut);
    }
  }, [selectedAnswer]);

  return {
    currentQuestionIndex,
    selectedAnswer,
    isCorrect,
    score,
    handleAnswer,
    timeLeft,
  };
}
