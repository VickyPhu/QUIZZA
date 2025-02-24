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

// Fetch categories within Entertainment
export async function triviaCategory() {
  try {
    const response = await fetch("https://opentdb.com/api_category.php");
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();

    const entertainmentCategories = data.trivia_categories
      .filter((category: { name: string }) =>
        category.name.includes("Entertainment")
      )
      .map((category: { id: number; name: string }) => ({
        id: category.id,
        name: category.name.replace("Entertainment: ", ""), // Remove Entertainment in the beginning
      }));

    return entertainmentCategories;
  } catch (error) {
    console.error("Something went wrong", error);
    return [];
  }
}
