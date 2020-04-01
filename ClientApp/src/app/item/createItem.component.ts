import { Component, OnInit } from "@angular/core";
import { Recipe } from '../models/recipe.model';
import { Step } from '../models/step.model';
import { Repository } from '../models/repository'
import { AuthenticationService } from '../auth/authentication.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "create-item",
  templateUrl: "createItem.component.html"
})

export class CreateItemComponent implements OnInit {
  successfullyCreated: boolean = false;
  editMode: boolean = true;

  constructor(private repository: Repository, private router: Router,
     private activeRoute: ActivatedRoute, private authService: AuthenticationService) {

  }

  ngOnInit() {

    this.activeRoute.data.subscribe(data => {
      this.repository.recipe = data['recipe'];
    });

    if (!this.repository.recipe) {
      this.initializeRecipe();
    }
  }


  get recipe(): Recipe {
    return this.repository.recipe;
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
      this.successfullyCreated = true;
    }
  }

  onNotifyStepsUpdated(steps: Step[]) {
    this.recipe.steps = steps;
  }

  initializeRecipe() {
    this.repository.recipe = new Recipe();
    this.repository.recipe.description = "";
    this.repository.recipe.name = "";
    this.repository.recipe.steps = [];
    this.recipe.userId = this.authService.userId; 
  }
}
