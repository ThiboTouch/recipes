import { Component } from "@angular/core";
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: "menu-items",
  templateUrl: "menu.component.html"
})

export class MenuComponent {

  constructor(public authService: AuthenticationService) {  }
}
