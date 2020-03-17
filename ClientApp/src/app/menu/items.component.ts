import { Component, OnInit } from "@angular/core";
import { Repository } from "../models/repository";
import { Recipe } from "../models/recipe.model";
import { Router } from "@angular/router";

@Component({
  selector: "menu-recipe-list",
  templateUrl: "items.component.html"
})

export class ItemsComponent implements OnInit {
  displayArray = [];

  constructor(private repo: Repository, private router: Router) { }

  ngOnInit() {
    this.repo.getRecipes();
  }
  

  get recipes(): Recipe[] {
    if (this.repo.recipes != null && this.repo.recipes.length > 0) {
      this.populateDisplayArray();
      return this.repo.recipes;
    }
  }

  onDeleteNotification(id: string) {
    const i = this.repo.recipes.findIndex(r => r.id === id);
    if (i !== -1) {
      this.repo.recipes.splice(i, 1)
    };

    

    this.router.navigateByUrl('/menu/create', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/menu']);
    });
  }


  populateDisplayArray() {
    for (let i = 0; i < this.repo.recipes?.length; i += 3) {
      if (this.displayArray.length < this.checkLength()) {
        this.displayArray.push({ items: this.repo.recipes.slice(i, i + 3) });
      }
    }
  }

  checkLength() {
    return Math.ceil(this.repo.recipes.length / 3);
  }
}
