import { Injectable } from "@angular/core";
import { Recipe } from '../models/recipe.model';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Repository } from '../models/repository';
import { Observable } from 'rxjs';


@Injectable()
export class RecipeItemEditResolver implements Resolve<Recipe>{

  constructor(private repo: Repository, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Recipe {
    let id = route.params["id"];
    if (id) 
      this.repo.getRecipe(id);

    return this.repo.recipe;
  }
}
