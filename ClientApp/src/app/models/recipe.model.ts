import { Step } from "./step.model"

export class Recipe {

  constructor(
    public recipeId?: string,
    public name?: string,
    public description?: string,
    public steps?: Step[]
  ) { }
}
