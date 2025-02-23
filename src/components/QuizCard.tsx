import { useState } from "react";
import styled from "styled-components";

const CategoryName = styled.h2`
  padding-top: 3rem;
  padding-bottom: 1rem;
  color: #310e6d;
  font-size: 2rem;
`;

const QuizCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const QuizCardItem = styled.div`
  background-color: #e8cbfd;
  border-radius: 0.5rem;
  max-width: 300px;
  min-width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  position: relative;
  &:hover {
    box-shadow: 0 8px 16px 0 #f893ff;
  }

  p {
    padding: 0.5rem;
    padding-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
  }

  img {
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

const DifficultyButtons = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transition: 0.3s; //fungerar ej ?
`;

const Button = styled.button`
  cursor: pointer;
  padding-block: 0.6rem;
  padding-inline: 1.5rem;
  border-radius: 0.5rem;
  background-color: #e8cbfd;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: Roboto, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #310e6d;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
    background-color: #daa6ff;
  }
`;

export default function QuizCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section>
      <CategoryName>Entertainment</CategoryName>
      <QuizCardGrid>
        <QuizCardItem
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src="/film.jpg" alt="" />
          <p>Movies</p>
          {/* Show the buttons at hover */}
          {isHovered && (
            <DifficultyButtons>
              <Button>Easy</Button>
              <Button>Medium</Button>
              <Button>Hard</Button>
            </DifficultyButtons>
          )}
        </QuizCardItem>
        <QuizCardItem>
          <img src="/film.jpg" alt="" />
          <p>Movies</p>
        </QuizCardItem>
        <QuizCardItem>
          <img src="/film.jpg" alt="" />
          <p>Movies</p>
        </QuizCardItem>
      </QuizCardGrid>
    </section>
  );
}
