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
  &:hover {
    box-shadow: 0 8px 16px 0 #f893ff;
  }

  p {
    padding: 0.5rem;
    padding-bottom: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }

  img {
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

export default function QuizCard() {
  return (
    <section>
      <CategoryName>Entertainment</CategoryName>
      <QuizCardGrid>
        <QuizCardItem>
          <img src="/film.jpg" alt="" />
          <p>Movies</p>
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
