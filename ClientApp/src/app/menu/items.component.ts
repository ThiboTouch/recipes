import { Component, OnInit } from "@angular/core";
import { Repository } from "../models/repository";
import { Recipe } from "../models/recipe.model";

@Component({
  selector: "menu-recipe-list",
  templateUrl: "items.component.html"
})

export class ItemsComponent {
  displayArray = [];

  constructor(private repo: Repository) {
    this.repo.getRecipes();
  }

  get recipes(): Recipe[] {
    if (this.repo.recipes != null && this.repo.recipes.length > 0) {
      this.populateDisplayArray();
      return this.repo.recipes;
    }
  }

  populateDisplayArray() {
    for (let i = 0; i < this.repo.recipes?.length; i += 3) {
      if (this.displayArray.length < this.checkLength()) {
        this.displayArray.push({ items: this.repo.recipes.slice(i, i + 3) });
      }
    }
  }

  checkLength() {
    return Math.ceil(this.repo.recipes.length / 3);
  }
}
