import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { TriviaData } from "../api";
import Question from "./Question";
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

const InfoText = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  p {
    font-size: 1.2rem;
  }

  p:nth-child(1) {
    text-align: left;
  }

  p:nth-child(2) {
    text-align: center;
  }

  p:nth-child(3) {
    text-align: right;
  }
`;

const Line = styled.div`
  background-color: #310e6d;
  margin: 0.5rem 0rem 2rem 0rem;
  width: 300%;
  height: 3px;
  border-radius: 3px;
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

  const { data: results, isLoading } = useQuery({
    queryKey: ["quiz", categoryId, difficulty],
    queryFn: () => TriviaData(Number(categoryId), difficulty || "medium"),
    enabled: hasStarted,
  });

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

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      setCurrentQuestionIndex((prev) => prev + 1);
    }, 2000);
  };

  return (
    <Container>
      <QuestionContainer>
        <InfoText>
          <p>
            {categoryName}:{" "}
            {difficulty
              ? difficulty?.charAt(0).toUpperCase() + difficulty.slice(1)
              : ""}
          </p>
          <p>Question number</p>
          <p>Score:</p>
          <Line />
        </InfoText>
        {currentQuestionIndex < results.length ? (
          <Question
            questionData={results[currentQuestionIndex]}
            handleAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            isCorrect={isCorrect}
          />
        ) : (
          <p>Quiz Completed! Final Score:</p>
        )}
      </QuestionContainer>
    </Container>
  );
}
