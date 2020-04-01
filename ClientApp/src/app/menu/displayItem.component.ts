import { Component, Output, Input, EventEmitter ,OnInit} from "@angular/core";
import { Repository } from "../models/repository";
import { Recipe } from "../models/recipe.model";
import { Router } from "@angular/router";
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: "menu-display-item",
  templateUrl: "displayItem.component.html"
})

export class DisplayItemComponent implements OnInit {

  confirmDelete: boolean = false;
  canModify: boolean = false;

  @Input() public item: Recipe;

  @Output() notifyDelete: EventEmitter<string> = new EventEmitter<string>();


  constructor(private repository: Repository, private router: Router, private authService: AuthenticationService) {

  }

  ngOnInit() {
    if (this.authService.userId == this.item?.userId) {
      this.canModify = true;
    }
  }

  viewDetail() {
    this.router.navigateByUrl(`/menu/detail/${this.item.id}`);
  }

  editRecipe() {
    this.router.navigateByUrl(`menu/edit/${this.item.id}`);
  }

  deleteRecipe() {
    if (this.canModify) {
      this.repository.deleteRecipe(this.item.id);
      this.notifyDelete.emit(this.item.id);
    }
  }
}
