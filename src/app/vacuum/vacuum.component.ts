import { Component, EventEmitter, Output } from '@angular/core';
import { VacuumControlService } from '../vacuum-control.service';

@Component({
  selector: 'app-vacuum',
  templateUrl: './vacuum.component.html',
  styleUrls: ['./vacuum.component.css'],
  providers: [VacuumControlService] 
})
export class VacuumComponent {
  coordinate: { x: number, y: number, orientation: string } = {
    x: 0,
    y: 0,
    orientation: 'N'
  }
  orientations: string[] = ['N', 'E', 'S', 'W'];
  @Output() vacuumParamsUpdated = new EventEmitter<{ x: number, y: number, orientation: string }>();

  updateVacuumParams(): void {
    this.vacuumParamsUpdated.emit(this.coordinate);
  }
}
