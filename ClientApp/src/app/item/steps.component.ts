import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Step } from '../models/step.model';

@Component({
  selector: "recipe-steps",
  templateUrl: "steps.component.html"
})

export class StepsComponent {
  @Input() public steps: Step[];
  @Input() public editMode: boolean;
  @Output() public notifyUpdatedSteps: EventEmitter<Step[]> = new EventEmitter<Step[]>();

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

    this.notifyUpdatedSteps.emit(this.steps);
  }

  updateStep(trackId: number) {
    if (this.stepDescription !== undefined && this.stepDescription !== null && this.stepDescription !== "") {
      var existingItem = this.steps[trackId - 1];
      if (existingItem !== undefined && existingItem !== null) {
        existingItem.description = this.stepDescription;
        this.stepDescription = "";
      }
    }
  }

  setDescription(description: string) {
    this.stepDescription = description;
  }

}
