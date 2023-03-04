import { ReactPropTypes } from "react";
import { Link } from "react-router-dom";
import "./Recipe.scss";

function Recipe(props: any) {
  const recipe: {
    id: BigInteger;
    name: string;
    prepTime: string;
    description: string;
  } = props.recipe;
  return (
    <Link to={"/recipes/view/" + recipe.id}>
      <div className="recipe">
        <div className="id">#{recipe.id}</div>
        <div className="name">{recipe.name}</div>
        <div className="prepTime">
          <i>prep time: {recipe.prepTime}</i>
        </div>
        <div className="description">
          <p>{recipe.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Recipe;
