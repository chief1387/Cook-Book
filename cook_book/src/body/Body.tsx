import { Routes, Route } from "react-router-dom";
import "./Body.scss";
import Home from "./home/Home";
import RecipeDetail from "./recipes/RecipeDetail";
import Recipes from "./recipes/Recipes";
const Body = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="recipes/view/{id}" element={<RecipeDetail />} />
        <Route path="recipes" element={<Recipes />} />
      </Routes>
    </div>
  );
};

export default Body;
