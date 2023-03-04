import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  const nav = useNavigate();
  const navigate = (uri: string) => {
    nav(uri);
  };

  function navHome() {
    navigate("/");
  }
  function navRecipes() {
    navigate("/recipes");
  }
  function navAddRecipe() {
    navigate("/recipes/add");
  }
  function navIngredients() {
    navigate("/ingredients");
  }
  function navAddIngredient() {
    navigate("/ingredients/add");
  }
  return (
    <div className="bar">
      <div className="navbar">
        <h1 className="heading">Cook Book App!</h1>

        <a className="nav-item" onClick={navHome}>
          Home
        </a>

        <a className="nav-item" onClick={navRecipes}>
          Recipes
        </a>

        <a className="nav-item" onClick={navIngredients}>
          Ingredients
        </a>

        <button className="nav-item" onClick={navAddRecipe}>
          Add Recipe
        </button>

        <button className="nav-item" onClick={navAddIngredient}>
          Add Ingredient
        </button>
      </div>
    </div>
  );
};

export default Navbar;
