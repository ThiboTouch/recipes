import { Component, Output, Input, EventEmitter } from "@angular/core";
import { Repository } from "../models/repository";
import { Recipe } from "../models/recipe.model";

@Component({
  selector: "menu-display-item",
  templateUrl: "displayItem.component.html"
})

export class DisplayItemComponent {

  confirmDelete: boolean = false;

  @Input() public item: Recipe;

  @Output() notifyDelete: EventEmitter<string> = new EventEmitter<string>();


  constructor(private repository: Repository) {

  }

  deleteRecipe() {
    this.repository.deleteRecipe(this.item.id);
    this.notifyDelete.emit(this.item.id);
  }

}
