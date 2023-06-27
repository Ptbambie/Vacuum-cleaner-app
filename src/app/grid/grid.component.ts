import { Component, EventEmitter, Output } from '@angular/core';
import { VacuumControlService } from '../vacuum-control.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [VacuumControlService] 
})
export class GridComponent{
  dimensions: { x: number, y: number } = { x: 0, y: 0 };
  @Output() dimensionsUpdated = new EventEmitter<{ x: number, y: number }>();

  updateDimensions(): void {
    this.dimensionsUpdated.emit(this.dimensions);
  }
}
