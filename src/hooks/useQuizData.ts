import { useQuery } from "@tanstack/react-query";
import { TriviaData } from "../api";

export default function useQuizData(
  categoryId: number,
  difficulty: string,
  hasStarted: boolean
) {
  return useQuery({
    queryKey: ["quiz", categoryId, difficulty],
    queryFn: () => TriviaData(Number(categoryId), difficulty || "medium"),
    enabled: hasStarted,
  });
}
