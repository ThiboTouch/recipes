import { Step } from "./step.model"

export class Recipe {

  constructor(
    public id?: string,
    public name?: string,
    public description?: string,
    public steps?: Step[],
    public userId?:string
  ) { }
}
