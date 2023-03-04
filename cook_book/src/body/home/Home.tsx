import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <h2 className="heading">Welcome to my cook book!</h2>
      <p>
        You can learn multiple recipes that either I or someone else have
        posted. You can post your own if you wish.
      </p>
      <p>
        Some people would call this a recipe book but I forgor and named things
        cook book at first so i just went along with it :P
      </p>
      <p>
        This is a small project i have been working on mostly for fun so don't
        judge too harshly
      </p>

      <h3>
        Here are some <span className="quick">quick</span> navigations
      </h3>
      <div className="buttons">
        <Link className="link" to="recipes">
          <button>View Recipes</button>
        </Link>
        <Link className="link" to="recipes/new">
          <button>Add Recipes</button>
        </Link>
        <Link className="link" to="ingredients">
          <button>View Ingredients</button>
        </Link>
        <Link className="link" to="ingredients/add">
          <button>Add Ingredients</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
