import { Component } from "@angular/core";
import { Recipe } from '../models/recipe.model';
import { Step } from '../models/step.model';

@Component({
  selector: "create-item",
  templateUrl: "createItem.component.html"
})

export class CreateItemComponent{
  recipe: Recipe;

  constructor() {
    this.recipe = new Recipe();
  }

}
