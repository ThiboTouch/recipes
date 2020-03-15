import { Component, OnInit } from "@angular/core";
import { Repository } from "../models/repository";
import { Recipe } from "../models/recipe.model";

@Component({
  selector: "menu-recipe-list",
  templateUrl: "items.component.html"
})

export class ItemsComponent {
  newArray = [];

  constructor(private repo: Repository) {
    this.repo.getRecipes();
  }

  get recipes(): Recipe[] {
    this.populateNewArray();
    if (this.repo.recipes != null && this.repo.recipes.length > 0) {
      return this.repo.recipes;
    }
  }

  populateNewArray() {
    for (let i = 0; i < this.repo.recipes?.length; i += 3) {
      if (this.newArray.length < this.checkLength()) {
        this.newArray.push({ items: this.repo.recipes.slice(i, i + 3) });
      }
    }
  }

  checkLength() {
    return Math.ceil(this.repo.recipes.length / 3);
  }
}
