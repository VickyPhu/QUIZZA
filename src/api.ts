export async function TriviaData(categoryId: number, difficulty: string) {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch trivia data");
  }
  const data = await response.json();
  return data.questions;
}
