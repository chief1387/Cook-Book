import { useParams } from "react-router-dom";
import { Exception } from "sass";
import { Ingredient } from "../../Ingredient";
import { Recipe } from "../../Recipe";
import { RecipeService } from "../../service/RecipeService";
import IngredientEl from "./Ingredient";
import "./RecipeDetail.scss";

function RecipeDetail() {
  let { id } = useParams();

  let recipeId = -1;
  if (id != null) {
    recipeId = Number.parseInt(id);
  }
  //  generate Recipe using id
  const recipe: Recipe | null =
    RecipeService.getInstance().getRecipeById(recipeId);
  if (recipe == null) {
    return <h3>Error Fetching Recipe With An ID of {recipeId}</h3>;
  }
  return (
    <div className="recipeDetail row">
      <div className="heading">
        <h2>{recipe.name}</h2>
      </div>
      <div className="description row">
        <p>{recipe.description}</p>
      </div>
      <div className="prepTime row">
        <h3>
          Prep Time:
          <b>
            <i> {recipe.prepTime}</i>
          </b>
        </h3>
      </div>
      <h2>Ingredients required:</h2>
      <ul className="ingredients">
        {recipe.ingredients.map((i) => (
          <li key={i.id}>
            <IngredientEl id={i.id} name={i.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetail;
