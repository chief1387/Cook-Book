import Recipe from "./Recipe";
import "./Recipes.scss";

function Recipes() {
  const recipes = [
    {
      id: "1",
      name: "Recipe 1",
      prepTime: "12 min",
      description: "a description about my recipe",
    },
    {
      id: "2",
      name: "Recipe 1",
      prepTime: "12 min",
      description: "a description about my recipe",
    },
    {
      id: "3",
      name: "Recipe 1",
      prepTime: "12 min",
      description: "a description about my recipe",
    },
    {
      id: "4",
      name: "Recipe 1",
      prepTime: "12 min",
      description: "a description about my recipe",
    },
  ];
  return (
    <div className="recipes">
      <h2>Recipes:</h2>
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
