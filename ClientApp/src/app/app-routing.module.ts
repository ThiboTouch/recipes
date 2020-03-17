import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreateItemComponent } from './item/createItem.component';
  
const routes: Routes = [
  { path: "menu/create", component: CreateItemComponent },
  { path: "menu", component: MenuComponent },
  { path: "", redirectTo: "/menu", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
