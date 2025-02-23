import styled from "styled-components";

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  letter-spacing: 0.2rem;
  color: #af66fc;
  text-shadow: 3px 3px 6px #d60be4;
  /* text-shadow: 3px 3px 6px #5912bb; */
`;

const InfoText = styled.p`
text-align: center;
padding-top: 1rem;
/* color: #333; */
`

export default function WelcomeText() {
  return (
    <TextContainer>
      <Title>QUIZZA</Title>
      <InfoText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt iusto
        eligendi numquam enim minima reprehenderit alias natus qui! Inventore
        incidunt praesentium consequatur ullam, veniam error unde velit
        voluptatibus illo eligendi.
      </InfoText>
    </TextContainer>
  );
}
