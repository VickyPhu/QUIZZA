import { useLocation, useNavigate } from "react-router";
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
`;

const Button = styled.button`
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

const TextContainer = styled.div`
  padding-bottom: 2rem;
  text-align: center;

  h2 {
    padding-bottom: 1rem;
    font-size: 3rem;
    color: #310e6d;
  }

  p {
    font-size: 1.2rem;
  }
`;

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, categoryId, categoryName, difficulty } = location.state || {};

  // Om ingen data finns (t.ex. om användaren laddar om sidan)
  if (!score || !categoryId || !categoryName || !difficulty) {
    return <p>No results were found. Please play the quiz first.</p>;
  }

  return (
    <Container>
      <QuestionContainer>
        <TextContainer>
          <h2>Quiz Completed! 🎉</h2>
          <p>Your final score: {score} / 10</p>
        </TextContainer>
        <ButtonContainer>
          <Button
            onClick={() =>
              navigate(
                `/quiz?categoryId=${categoryId}&categoryName=${categoryName}&difficulty=${difficulty}`
              )
            }
          >
            Play Again
          </Button>
          <Button onClick={() => navigate("/")}>Home</Button>
        </ButtonContainer>
      </QuestionContainer>
    </Container>
  );
}
