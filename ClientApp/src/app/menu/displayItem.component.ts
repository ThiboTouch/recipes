import { Component, Output, Input, EventEmitter } from "@angular/core";
import { Repository } from "../models/repository";
import { Recipe } from "../models/recipe.model";
import { Router } from "@angular/router";

@Component({
  selector: "menu-display-item",
  templateUrl: "displayItem.component.html"
})

export class DisplayItemComponent {

  confirmDelete: boolean = false;

  @Input() public item: Recipe;

  @Output() notifyDelete: EventEmitter<string> = new EventEmitter<string>();


  constructor(private repository: Repository, private router: Router) {

  }

  viewDetail() {
    this.router.navigateByUrl(`/menu/detail/${this.item.id}`);
  }

  editRecipe() {
    this.router.navigateByUrl(`menu/edit/${this.item.id}`);
  }


  deleteRecipe() {
    this.repository.deleteRecipe(this.item.id);
    this.notifyDelete.emit(this.item.id);
  }

}
