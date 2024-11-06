import { EXTERNAL_RECIPE_API_URL } from "../../config/env";

export const fetchMealDbRecipesByIngredient = async (ingredient: string) => {
  const meals = (await (await fetch(`${EXTERNAL_RECIPE_API_URL}/filter.php?i=${ingredient}`)).json()).meals;
  console.log('meals', meals);
  return meals;
};

fetchMealDbRecipesByIngredient('chicken');