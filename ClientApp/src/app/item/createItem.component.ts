import { Component } from "@angular/core";
import { Recipe } from '../models/recipe.model';
import { Step } from '../models/step.model';
import { Repository } from '../models/repository'
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: "create-item",
  templateUrl: "createItem.component.html"
})

export class CreateItemComponent{
  recipe: Recipe;
  successfullyCreated: boolean = false;
  editMode: boolean = true;

  constructor(private repository: Repository, private authService: AuthenticationService) {
      this.initializeRecipe();
  }

  saveRecipe() {
    this.successfullyCreated = false;

    if (this.recipe.description != "" && this.recipe.name != "" && this.recipe.steps != []) {
      this.repository.createRecipe(this.recipe);
      this.initializeRecipe();
      this.successfullyCreated = true;
    }
  }

  initializeRecipe() {
    this.recipe = new Recipe();
    this.recipe.description = "";
    this.recipe.name = "";
    this.recipe.steps = [];
    this.recipe.userId = this.authService.userId; 
  }
}
