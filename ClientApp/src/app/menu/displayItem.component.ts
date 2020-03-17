import { Component, OnInit, Input } from "@angular/core";
import { Repository } from "../models/repository";
import { Recipe } from "../models/recipe.model";

@Component({
  selector: "menu-display-item",
  templateUrl: "displayItem.component.html"
})

export class DisplayItemComponent {

  confirmDelete: boolean = false;

  @Input() public item: Recipe;

  constructor(private repository: Repository) {

  }

}
