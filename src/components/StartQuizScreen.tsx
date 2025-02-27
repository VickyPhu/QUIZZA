import { useNavigate } from "react-router";
import styled from "styled-components";

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
  margin-top: 2rem;
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

const StartButton = styled.button`
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

const BackButton = styled(StartButton)``;

interface Props {
  categoryName: string | null;
  difficulty: string | null;
  onStart: () => void;
}

export default function StartQuizScreen({
  categoryName,
  difficulty,
  onStart,
}: Props) {
  const navigate = useNavigate();
  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>Back to Home</BackButton>
      <QuestionContainer>
        <InfoText>
          <p>
            {categoryName}:{" "}
            {difficulty
              ? difficulty?.charAt(0).toUpperCase() + difficulty.slice(1)
              : ""}
          </p>
          <p>0 / 10</p>
          <p>Score:</p>
          <Line></Line>
        </InfoText>
        <StartButton onClick={onStart}>Start Quiz</StartButton>
      </QuestionContainer>
    </Container>
  );
}
