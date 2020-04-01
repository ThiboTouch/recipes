import { Component, OnInit } from "@angular/core";
import { Repository } from "../models/repository";
import { Recipe } from "../models/recipe.model";
import { Router } from "@angular/router";

@Component({
  selector: "menu-recipe-list",
  templateUrl: "items.component.html"
})

export class ItemsComponent implements OnInit {

  constructor(private repo: Repository, private router: Router) { }

  ngOnInit() {
    this.repo.getRecipes();
  }
  

  get recipes(): Recipe[] {
    if (this.repo.recipes != null && this.repo.recipes.length > 0) {
      return this.repo.recipes;
    }
  }

  onDeleteNotification(id: string) {
    const i = this.repo.recipes.findIndex(r => r.id === id);
    if (i !== -1) {
      this.repo.recipes.splice(i, 1)
    };
  }
}
