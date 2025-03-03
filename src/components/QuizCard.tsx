import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { triviaCategory } from "../api";

const CategoryName = styled.h2`
  padding: 3rem 2rem 1rem 2rem;
  color: #310e6d;
  font-size: 2rem;

  @media (max-width: 460px) {
    text-align: center;
  }
`;

const QuizCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  padding-inline: 2rem;
  justify-content: center;

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const QuizCardItem = styled.div`
  background-color: #e8cbfd;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  position: relative;
  &:hover {
    box-shadow: 0 8px 16px 0 #f893ff;
  }

  p {
    padding: 0.5rem;
    padding-bottom: 0.7rem;
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
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 0.4rem;
  padding-inline: 1rem;
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

interface Category {
  id: number;
  name: string;
}

interface CategoryImage {
  id: number;
  img: string;
}

const categoryImages: CategoryImage[] = [
  { id: 10, img: "/images/books.jpg" },
  { id: 11, img: "/images/film.jpg" },
  { id: 12, img: "/images/music.jpg" },
  { id: 13, img: "/images/theater.jpg" },
  { id: 14, img: "/images/television.jpg" },
  { id: 15, img: "/images/videogame.jpg" },
  { id: 16, img: "/images/boardgame.jpg" },
  { id: 29, img: "/images/comics.jpg" },
  { id: 31, img: "/images/manga.jpg" },
  { id: 32, img: "/images/cartoon.jpg" },
];

const difficulties = ["easy", "medium", "hard"];

export default function QuizCard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { data: categories = [], isLoading } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: triviaCategory,
  });
  if (isLoading) return <p>Loading categories...</p>;

  return (
    <section>
      <CategoryName>Entertainment</CategoryName>
      <QuizCardGrid>
        {categories.map((category) => {
          const categoryImage = categoryImages.find(
            (img) => img.id === category.id
          );
          return (
            <QuizCardItem
              key={category.id}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={categoryImage?.img || "/images/default.jpg"}
                alt={category.name}
              />
              <p>{category.name}</p>
              {/* Show the buttons at hover */}
              <DifficultyButtons
                style={{ opacity: hoveredCard === category.id ? 1 : 0 }}
              >
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    to={`/quiz?categoryId=${
                      category.id
                    }&categoryName=${encodeURIComponent(
                      category.name
                    )}&difficulty=${difficulty}`}
                  >
                    {difficulty
                      ? difficulty?.charAt(0).toUpperCase() +
                        difficulty.slice(1)
                      : ""}
                  </Button>
                ))}
              </DifficultyButtons>
            </QuizCardItem>
          );
        })}
      </QuizCardGrid>
    </section>
  );
}
