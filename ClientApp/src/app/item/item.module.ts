import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CreateItemComponent } from "./createItem.component";
import { FormsModule } from '@angular/forms';
import { StepsComponent } from './steps.component';
import { DetailComponent } from './detail.component'

@NgModule({
  declarations: [CreateItemComponent, StepsComponent, DetailComponent],
  imports: [BrowserModule, RouterModule, FormsModule],
  exports: [CreateItemComponent]
})
export class ItemModule { }
