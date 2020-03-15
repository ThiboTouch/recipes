import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Recipe } from "../models/recipe.model";

@Component({
  selector: "menu-recipe-list",
  templateUrl: "items.component.html"
})

export class ItemsComponent {

  constructor(private repo: Repository) {
    this.repo.getRecipes();
  }

  get recipes(): Recipe[] {
    if (this.repo.recipes != null && this.repo.recipes.length > 0) {
      return this.repo.recipes;
    }
  }
}
