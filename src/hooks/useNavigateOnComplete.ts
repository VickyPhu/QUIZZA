import { useEffect } from "react";
import { useNavigate } from "react-router";

export function useNavigateOnComplete(
  currentQuestionIndex: number,
  results: { question: string }[] | null,
  score: number,
  categoryId: number,
  categoryName: string | null,
  difficulty: string | null,
) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Checking navigation condition...");
    console.log("currentQuestionIndex:", currentQuestionIndex);
    console.log("results:", results);
    if (results && currentQuestionIndex >= results?.length) {
        console.log("Navigating to results page...");
      navigate("/results", {
        state: { score, categoryId, categoryName, difficulty },
      });
    }
  }, [
    currentQuestionIndex,
    results,
    score,
    categoryId,
    categoryName,
    difficulty,
    navigate,
  ]);
}
