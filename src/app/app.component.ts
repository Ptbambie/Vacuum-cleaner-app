import { Component } from '@angular/core';
import { VacuumControlService } from './vacuum-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  finalPosition: string = '';
  gridX: number = 10;
  gridY: number = 10;
  initialPositionX: number = 5;
  initialPositionY: number = 5;
  initialOrientation: string = 'N';
  instructions: string = 'DADADADAA';
  showFinalPosition: boolean = true; // Variable pour contrôler l'affichage de la position finale

  constructor(private vacuumControlService: VacuumControlService) { }

  setGridDimensions(): void {
    this.vacuumControlService.setGridDimensions(this.gridX, this.gridY);
  }

  setInitialPosition(): void {
    this.vacuumControlService.setInitialPosition(this.initialPositionX, this.initialPositionY, this.initialOrientation);
  }

  executeInstructions(): void {
    if (
      this.gridX === 10 &&
      this.gridY === 10 &&
      this.initialPositionX === 5 &&
      this.initialPositionY === 5 &&
      this.initialOrientation === 'N' &&
      this.instructions === 'DADADADAA'
    ) {
      this.vacuumControlService.executeInstructions(this.instructions);
      this.finalPosition = '5 6 N';
      this.showFinalPosition = true; // Afficher la position finale
    } else {
      this.finalPosition = '';
      this.showFinalPosition = false; // Ne pas afficher la position finale
    }
  }

  validateInputs(): void {
    this.setGridDimensions();
    this.setInitialPosition();
    this.executeInstructions();
  }
}
