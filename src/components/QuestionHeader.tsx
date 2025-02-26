import styled from "styled-components";

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

interface Props {
  categoryName: string | null;
  difficulty: string | null;
  currentQuestionIndex: number;
  totalQuestions: number | null;
  score: number;
}

export default function QuestionHeader({
  categoryName,
  difficulty,
  currentQuestionIndex,
  totalQuestions,
  score,
}: Props) {
  return (
    <InfoText>
      <p>
        {categoryName}:{" "}
        {difficulty
          ? difficulty?.charAt(0).toUpperCase() + difficulty.slice(1)
          : ""}
      </p>
      <p>
        {currentQuestionIndex + 1} / {totalQuestions}
      </p>
      <p>Score: {score}</p>
      <Line />
    </InfoText>
  );
}
