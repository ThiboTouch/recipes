import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreateItemComponent } from './item/createItem.component';
import { DetailComponent } from './item/detail.component';
import { RecipeItemEditResolver } from './_resolvers/recipe-item-edit.resolver';

const routes: Routes = [
  { path: "menu/edit/:id", component: CreateItemComponent, resolve: { recipe: RecipeItemEditResolver } },
  { path: "menu/detail/:id", component: DetailComponent },
  { path: "menu/create", component: CreateItemComponent },
  { path: "menu", component: MenuComponent },
  { path: "", redirectTo: "/menu", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
