import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const recipesUrl = "/api/recipes";

@Injectable()
export class Repository {
  recipe: Recipe;
  recipes: Recipe[];

  constructor(private http: HttpClient) {
    
  }

  getRecipe(id: number) {
    this.http.get<Recipe>(`${recipesUrl}/${id}`)
      .subscribe(r => this.recipe = r);
  }

  getRecipes() {
    this.http.get<Recipe[]>(recipesUrl).subscribe(recs => this.recipes = recs)
  }
}
