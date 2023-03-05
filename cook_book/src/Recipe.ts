import { Ingredient } from "./Ingredient";

export class Recipe {
  private _id: number;
  private _name: string;
  private _prepTime: string;
  private _description: string;
  private _ingredients: Ingredient[];

  constructor(
    id: number,
    name: string,
    desc: string,
    prepTime: string,
    ingredients: Ingredient[] | null
  ) {
    this._id = id;
    this._name = name;
    this._description = desc;
    this._prepTime = prepTime;
    if (ingredients != null) {
      this._ingredients = ingredients;
    } else {
      this._ingredients = [];
    }
  }

  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get prepTime(): string {
    return this._prepTime;
  }
  get description(): string {
    return this._description;
  }
  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  set id(v: number) {
    this._id = v;
  }
  set name(v) {
    this._name = v;
  }
  set prepTime(v: string) {
    this._prepTime = v;
  }
  set description(v: string) {
    this._description = v;
  }
  set ingredients(v: Ingredient[]) {
    this._ingredients = v;
  }
}
