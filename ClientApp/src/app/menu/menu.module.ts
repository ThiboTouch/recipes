import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from "./items.component";
import { MenuComponent } from "./menu.component";
import { DisplayItemComponent } from './displayItem.component';

@NgModule({
  declarations: [ItemsComponent, MenuComponent, DisplayItemComponent],
  imports: [BrowserModule, RouterModule],
  exports: [MenuComponent]
})
export class MenuModule { }
