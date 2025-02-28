import styled from "styled-components";

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

const Title = styled.h1`
  font-size: 6rem;
  letter-spacing: 0.3rem;
  color: #af66fc;
  text-shadow: 4px 4px 8px #d60be4;
`;

const InfoText = styled.p`
  text-align: center;
  padding: 1.5rem 2rem 0rem 2rem;
  font-size: 1.2rem;
`;

export default function WelcomeText() {
  return (
    <TextContainer>
      <Title>QUIZZA</Title>
      <InfoText>
        Select a quiz category and difficulty to start playing! You'll answer 10 questions, each with a time limit. The questions will be multiple choice or true and false. Good luck!
      </InfoText>
    </TextContainer>
  );
}
