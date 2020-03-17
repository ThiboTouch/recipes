import { Component } from "@angular/core";
import { Recipe } from '../models/recipe.model';
import { Repository } from '../models/repository';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "item-detail",
  templateUrl: "detail.component.html"
})

export class DetailComponent {
  editMode: boolean = false;

  constructor(private repo: Repository,
    router: Router,
    activeRoute: ActivatedRoute) {

    let id = activeRoute.snapshot.params["id"];
    if (id) {
      this.repo.getRecipe(id);
    } else {
      router.navigateByUrl("/");
    }
  }

  get recipe(): Recipe {
    return this.repo.recipe;
  }
}
