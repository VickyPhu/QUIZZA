import styled from "styled-components";

const QuestionText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  padding-bottom: 1.5rem;
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

interface Props {
  questions: {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }[];
}

function decodeHtml(html: string): string {
  const text = document.createElement("textarea");
  text.innerHTML = html;
  return text.value;
}

export default function Question({ questions }: Props) {
  const currentQuestion = questions[0];

  const shuffledAnswers: string[] = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <QuestionText>{decodeHtml(currentQuestion.question)}</QuestionText>
      <ButtonContainer>
        {shuffledAnswers.map((answer: string, index: number) => (
          <AnswerButtons key={index}>{decodeHtml(answer)}</AnswerButtons>
        ))}
      </ButtonContainer>
    </div>
  );
}
