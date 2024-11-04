import { recipes } from './recipes.js';

export default function RecipeList() {
  const recetas = recipes.map(recipe =>
    <ul><h2>{recipe.id}</h2>
    <li>{recipe.name}</li>
    <li>{recipe.ingredients.join(", ")}</li>
    </ul>
  )
  return (
    <div>
      <h1>Recetas</h1>
      {recetas}
    </div>
  );
}
