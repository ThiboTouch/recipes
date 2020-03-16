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

  public trackItem(index: number, item: Step) {
    return item.trackId;
  }

  addStep() {
    if (this.stepDescription !== undefined && this.stepDescription !== null && this.stepDescription !== "") {
      this.steps.push({ trackId: this.steps.length + 1, description: this.stepDescription });
      this.stepDescription = "";
    }
  }

  removeStep(trackId: number) {
    var oldSteps = this.steps;
    this.steps = [];
    oldSteps.forEach((value) => {
      if (value.trackId !== trackId) {
        this.steps.push({ trackId: this.steps.length + 1, description: value.description });
      }
    })
  }

}
