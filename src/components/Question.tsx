import { useMemo } from "react";
import styled from "styled-components";

const QuestionText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  text-align: center;
  padding-bottom: 2rem;
`;

const AnswerButtons = styled.button`
  border: none;
  padding-block: 0.6rem;
  padding-inline: 1.5rem;
  border-radius: 0.5rem;
  background-color: #e8cbfd;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: Roboto, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #310e6d;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
    background-color: #daa6ff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Timer = styled.div`
  font-size: 1.5rem;
  color: #a31313;
  margin-bottom: 1rem;
  text-align: end;
`;

interface Props {
  questionData: {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
  handleAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  timeLeft: number;
}

function decodeHtml(html: string): string {
  const text = document.createElement("textarea");
  text.innerHTML = html;
  return text.value;
}

export default function Question({
  questionData,
  handleAnswer,
  selectedAnswer,
  isCorrect,
  timeLeft,
}: Props) {
  const shuffledAnswers = useMemo(() => {
    return [
      ...questionData.incorrect_answers,
      questionData.correct_answer,
    ].sort(() => Math.random() - 0.5);
  }, [questionData]);

  return (
    <div>
      <Timer>{timeLeft}</Timer>
      <QuestionText>{decodeHtml(questionData.question)}</QuestionText>
      <ButtonContainer>
        {shuffledAnswers.map((answer: string, index: number) => (
          <AnswerButtons
            key={index}
            onClick={() => handleAnswer(answer)}
            disabled={selectedAnswer !== null}
            style={{
              backgroundColor:
                selectedAnswer === answer
                  ? isCorrect
                    ? "#7DFC86"
                    : "#FF7878"
                  : "#e8cbfd",
            }}
          >
            {decodeHtml(answer)}
          </AnswerButtons>
        ))}
      </ButtonContainer>
    </div>
  );
}
