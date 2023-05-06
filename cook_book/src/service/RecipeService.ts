import { Ingredient } from "../Ingredient";
import { Recipe } from "../Recipe";

export class RecipeService {
  constructor() {
    this.update();
  }
  private static instance: RecipeService = new RecipeService();
  private recipes: Recipe[] = [];
  private update() {
    this.recipes = [
      new Recipe(1, "first recipe", "an example recipe", "12 min", [
        new Ingredient(1, "Eggs"),
        new Ingredient(2, "Milk"),
      ]),
      new Recipe(2, "second recipe", "an 2 example recipe", "15 min", [
        new Ingredient(1, "Eggs"),
      ]),
      new Recipe(3, "third recipe", "an 3 example recipe", "7 min", [
        new Ingredient(1, "Eggs"),
      ]),
    ];
  }

  public getAllRecipes(): Recipe[] {
    this.update();
    return this.recipes;
  }

  public getRecipeById(id: number): Recipe | null {
    // console.log(id);
    let endRecipe: null | Recipe = null;
    this.recipes.forEach((recipe) => {
      if (recipe.id === id) {
        // console.log("found with id " + id);
        endRecipe = recipe;
      }
    });

    return endRecipe;
  }

  public addRecipe(recipe: any) {
    this.recipes.push(recipe);
  }

  public static getInstance(): RecipeService {
    if (this.instance == null) {
      this.instance = new RecipeService();
    }
    return this.instance;
  }
}
