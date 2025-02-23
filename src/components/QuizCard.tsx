import { useState } from "react";
import { Link } from "react-router";
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
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 0.6rem;
  padding-inline: 1.5rem;
  border-radius: 0.5rem;
  background-color: #e8cbfd;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
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

const categories = [
  {
    id: 11,
    name: "Film",
    img: "/film.jpg",
  },
  {
    id: 12,
    name: "Music",
    img: "/music.jpg",
  },
  {
    id: 15,
    name: "Video Games",
    img: "/videogame.jpg",
  },
];

const difficulties = ["Easy", "Medium", "Hard"];

export default function QuizCard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section>
      <CategoryName>Entertainment</CategoryName>
      <QuizCardGrid>
        {categories.map((category) => (
          <QuizCardItem
            key={category.id}
            onMouseEnter={() => setHoveredCard(category.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
            {/* Show the buttons at hover */}
            <DifficultyButtons
              style={{ opacity: hoveredCard === category.id ? 1 : 0 }}
            >
              {difficulties.map((difficulty) => (
                <Button key={difficulty} to="/quiz">
                  {difficulty}
                </Button>
              ))}
            </DifficultyButtons>
          </QuizCardItem>
        ))}
      </QuizCardGrid>
    </section>
  );
}
