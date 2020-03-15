import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { ItemsComponent } from "./items.component";
import { MenuComponent } from "./menu.component";

@NgModule({
  declarations: [ItemsComponent, MenuComponent],
  imports: [BrowserModule],
  exports: [MenuComponent]
})
export class MenuModule { }
