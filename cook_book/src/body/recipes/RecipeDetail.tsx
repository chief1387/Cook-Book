import { useParams } from "react-router-dom";
import { Ingredient } from "../../Ingredient";
import { Recipe } from "../../Recipe";
import IngredientEl from "./Ingredient";
import "./RecipeDetail.scss";

function RecipeDetail() {
  let { id } = useParams();

  let recipeId = -1;
  if (id != null) {
    recipeId = Number.parseInt(id);
  }
  //  generate Recipe using id
  const recipe = new Recipe(
    recipeId,
    "Example Recipe",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste debitis ratione doloremque perspiciatis pariatur similique, fugiat ad ab tempore voluptatibus impedit repellat aut, a qui excepturi atque, obcaecati perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste debitis ratione doloremque perspiciatis pariatur similique, fugiat ad ab tempore voluptatibus impedit repellat aut, a qui excepturi atque, obcaecati perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste debitis ratione doloremque perspiciatis pariatur similique, fugiat ad ab tempore voluptatibus impedit repellat aut, a qui excepturi atque, obcaecati perferendis.",
    "12 min",
    [new Ingredient(1, "Example Ingredient")]
  );
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
      <div className="ingredients">
        {recipe.ingredients.map((i) => (
          <IngredientEl id={i.id} name={i.name} />
        ))}
      </div>
    </div>
  );
}

export default RecipeDetail;
