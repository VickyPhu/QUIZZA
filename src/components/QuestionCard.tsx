import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { TriviaData } from "../api";
import StartQuizScreen from "./StartQuizScreen";

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

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default function QuestionCard() {
  const query = useQueryParams();
  const categoryId = Number(query.get("categoryId"));
  const categoryName = query.get("categoryName");
  const difficulty = query.get("difficulty");

  const [hasStarted, setHasStarted] = useState(false);

  const { data: results, isLoading } = useQuery({
    queryKey: ["quiz", categoryId, difficulty],
    queryFn: () => TriviaData(Number(categoryId), difficulty || "medium"),
    enabled: hasStarted,
  });

  if (hasStarted) {
    return (
      <StartQuizScreen
        categoryName={categoryName}
        difficulty={difficulty}
        onStart={() => setHasStarted(true)}
      />
    );
  }
}

//   return (
//     <Container>
//       <QuestionContainer>
//         <InfoText>
//           <p>
//             {categoryName}:{" "}
//             {difficulty
//               ? difficulty?.charAt(0).toUpperCase() + difficulty.slice(1)
//               : ""}
//           </p>
//           <p>Question number</p>
//           <p>Score:</p>
//           <Line></Line>
//         </InfoText>
//         {!hasStarted ? (
//           <StartButton onClick={() => setHasStarted(true)}>
//             Start Quiz
//           </StartButton>
//         ) : isLoading ? (
//           <p>Loading questions...</p>
//         ) : (
//           <Question questions={results || []} />
//         )}
//       </QuestionContainer>
//     </Container>
//   );
// }
