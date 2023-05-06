import { FormEvent, useRef, useState } from "react";
import { Ingredient } from "../../../Ingredient";
import { RecipeService } from "../../../service/RecipeService";
import "./AddRecipe.scss";
import AddRecipeIngredint from "./AddRecipeIngredient";

export default function AddRecipe() {
  const [formInput, setFormInput] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const addIngredientRef = useRef();
  //   setInterval(() => {
  //     setIngredients([]);
  //   }, 1000);
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput((old) => ({ ...old, [name]: value }));
  };
  const handleIngredientChange = (event: any) => {
    setFormInput((old) => ({ ...old }));
  };

  const submitForm = (formEventhandler: FormEvent) => {
    formEventhandler.preventDefault();
    console.log(formInput);
    RecipeService.getInstance().addRecipe(formInput);
  };
  let key = 1;
  const addIngredient = () => {
    console.log(addIngredientRef.current.value);
    setIngredients((old) => [
      ...old,
      new Ingredient(key, addIngredientRef.current.value),
    ]);
    key++;
  };
  return (
    <div className="main">
      <h3>Add New Recipe</h3>

      <form className="form" onSubmit={submitForm}>
        <label className="question">
          Name
          <input
            type="text"
            className="name"
            name="name"
            onChange={handleChange}
          />
        </label>
        <label className="question">
          Preperation Time
          <input
            type="text"
            className="prepTime"
            name="prepTime"
            onChange={handleChange}
          />
        </label>
        <label className="question">
          Description
          <input
            type="text"
            className="description"
            name="description"
            onChange={handleChange}
          />
        </label>

        <label className="question ingredients">
          {ingredients.map((i) => (
            <AddRecipeIngredint key={i.id} name={i.name} />
          ))}
          <label className="addRecipe">
            <input type="text" ref={addIngredientRef} />
            <button type="button" onClick={addIngredient}>
              Add Ingredient
            </button>
          </label>
        </label>

        <button>Add Recipe</button>
      </form>
    </div>
  );
}
