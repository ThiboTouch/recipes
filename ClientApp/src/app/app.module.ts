import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './models/model.module';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';
import { ItemModule } from './item/item.module';
import { AuthModule } from './auth/auth.module';
import { RecipeItemEditResolver } from './_resolvers/recipe-item-edit.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    FormsModule,
    MenuModule,
    ItemModule,
    AuthModule
  ],
  providers: [RecipeItemEditResolver],
  bootstrap: [AppComponent]
})

export class AppModule { }
