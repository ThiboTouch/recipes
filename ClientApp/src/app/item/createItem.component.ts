import { Component, OnInit } from "@angular/core";
import { Recipe } from '../models/recipe.model';
import { Step } from '../models/step.model';
import { Repository } from '../models/repository'
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "create-item",
  templateUrl: "createItem.component.html"
})

export class CreateItemComponent implements OnInit {
  recipe: Recipe;
  successfullyCreated: boolean = false;
  editMode: boolean = true;

  constructor(private repository: Repository, private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.activeRoute.snapshot.params["id"];
    if (id) {
      this.repository.getRecipe(id);
      this.recipe = this.repository.recipe;
    } else {
      this.initializeRecipe();
    }
  }

  saveRecipe() {
    this.successfullyCreated = false;

    if (this.recipe.id == null && this.recipe.description != "" && this.recipe.name != "" && this.recipe.steps != []) {
      this.repository.createRecipe(this.recipe);
      this.initializeRecipe();
      this.successfullyCreated = true;
    }
    else {
      this.repository.updateRecipe(this.recipe.id, this.recipe); 
    }
  }

  initializeRecipe() {
    this.recipe = new Recipe();
    this.recipe.description = "";
    this.recipe.name = "";
    this.recipe.steps = [];
  }
}
