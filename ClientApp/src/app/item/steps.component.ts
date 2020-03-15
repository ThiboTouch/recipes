import { Component } from "@angular/core";
import { Step } from '../models/step.model';

@Component({
  selector: "recipe-steps",
  templateUrl: "steps.component.html"
})

export class StepsComponent {
  steps: Step[] = [];
  stepDescription: string;

  constructor() {
  }

  addStep() {
    this.steps.push({ description: this.stepDescription });
    this.stepDescription = "";
  }

}
