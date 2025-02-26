import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import useQuizData from "../hooks/useQuizData";
import Question from "./Question";
import QuestionHeader from "./QuestionHeader";
import StartQuizScreen from "./StartQuizScreen";

const Container = styled.section`
  padding: 4rem 2rem;
`;
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default function QuestionCard() {
  const query = useQueryParams();
  const categoryId = Number(query.get("categoryId"));
  const categoryName = query.get("categoryName");
  const difficulty = query.get("difficulty");

  const [hasStarted, setHasStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const { data: results, isLoading } = useQuizData(
    categoryId,
    difficulty || "medium",
    hasStarted
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (results && currentQuestionIndex >= results.length) {
      navigate("/results", {
        state: { score, categoryId, categoryName, difficulty },
      });
    }
  }, [
    currentQuestionIndex,
    results,
    score,
    categoryId,
    categoryName,
    difficulty,
    navigate,
  ]);

  if (!hasStarted) {
    return (
      <StartQuizScreen
        categoryName={categoryName}
        difficulty={difficulty}
        onStart={() => setHasStarted(true)}
      />
    );
  }

  if (isLoading) return <p>Loading questions...</p>;
  if (!results || results.length === 0) return <p>No Questions found</p>;

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const correct = answer === results[currentQuestionIndex].correct_answer;
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

  return (
    <Container>
      <QuestionContainer>
        <QuestionHeader
          categoryName={categoryName}
          difficulty={difficulty}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={results.length}
          score={score}
        />
        {currentQuestionIndex < results.length && (
          <Question
            questionData={results[currentQuestionIndex]}
            handleAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            isCorrect={isCorrect}
          />
        )}
      </QuestionContainer>
    </Container>
  );
}
