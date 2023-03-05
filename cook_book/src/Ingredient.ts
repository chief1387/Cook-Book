export class Ingredient {
  private _id: number;
  private _name: string;

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }

  set id(v: number) {
    this._id = v;
  }
  set name(v) {
    this._name = v;
  }
}
