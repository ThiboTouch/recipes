import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreateItemComponent } from './item/createItem.component';
import { DetailComponent } from './item/detail.component';
import { AuthenticationComponent } from './auth/authentication.component'
import { AuthenticationGuard } from './auth/authentication.guard';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: "login", component: AuthenticationComponent },
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "menu", component: MenuComponent, canActivate: [AuthenticationGuard] },
  { path: "menu/detail/:id", component: DetailComponent, canActivate: [AuthenticationGuard] },
  { path: "menu/create", component: CreateItemComponent, canActivate: [AuthenticationGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
