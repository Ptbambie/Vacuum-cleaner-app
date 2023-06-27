import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
  instructions: string = '';
  @Output()instructionsUpdated = new EventEmitter<string>();

  updateInstructions(): void {
    this.instructionsUpdated.emit(this.instructions);
  }
}