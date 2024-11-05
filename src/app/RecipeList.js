import { recipes } from './recipes.js';

export default function RecipeList() {
  const recetas = recipes.map(recipe =>
    <ul key={recipe.name}>
      <h2>{recipe.name}</h2>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>Recetas</h1>
      {recetas}
    </div>
  );
}
