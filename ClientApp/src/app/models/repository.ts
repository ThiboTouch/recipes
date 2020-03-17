import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const recipesUrl = "/api/recipes";

type createResponse = {
  id: string
}

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
    this.http.get<Recipe[]>(recipesUrl).subscribe(recs => this.recipes = recs);
  }


  createRecipe(recipe: Recipe) {
    this.http.post<createResponse>(recipesUrl, recipe).subscribe(response => {
      recipe.id = response.id;
      this.recipes.push(recipe)
    });
  }

  deleteRecipe(id: string) {
    this.http.delete(`${recipesUrl}/${id}`)
      .subscribe();
  }
}
