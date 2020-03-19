import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

const recipesUrl = "/api/recipes";

type createResponse = {
  id: string
}

type loginResponse = {
  success: boolean,
  userId: string
};

@Injectable()
export class Repository {
  recipe: Recipe;
  recipes: Recipe[];

  constructor(private http: HttpClient) {
    
  }

  getRecipe(id: number) {
    this.http.get<Recipe>(`${recipesUrl}/${id}`)
      .subscribe(r => {
        this.recipe = r
        if (r !== undefined && r != null) {
          var oldSteps = r.steps;
          r.steps = [];
          oldSteps.forEach((value, index) => {
            this.recipe.steps.push({ trackId: index + 1, description: value.description });
          })
        }
      });
  }

  getRecipes() {
    this.http.get<Recipe[]>(recipesUrl).subscribe(recs => { this.recipes = recs });
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

  updateRecipe(id: string, recipe: Recipe) {
    this.http.put(`${recipesUrl}/${id}`, recipe)
      .subscribe(() => this.getRecipes());
  }

  login(name: string, password: string): Observable<loginResponse> {
    return this.http.post<loginResponse>("/api/account/login",
      { name: name, password: password });
  }

  logout() {
    this.http.post("/api/account/logout", null).subscribe(response => { });
  }

}
