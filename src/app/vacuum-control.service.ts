import { Injectable } from '@angular/core';

@Injectable()
export class VacuumControlService {
  private gridDimensions: { x: number, y: number } = { x: 0, y: 0 };
  private initialPosition: { x: string, y: string, orientation: string } = { x: '', y: '', orientation: '' };
  private finalPosition: { x: string, y: string, orientation: string } = { x: '', y: '', orientation: '' };

  setGridDimensions(x: number, y: number): void {
    this.gridDimensions = { x, y };
  }

  setInitialPosition(x: number, y: number, orientation: string): void {
    this.initialPosition = { x: x.toString(), y: y.toString(), orientation };
  }
  
  executeInstructions(instructions: string): void {
    this.finalPosition = { ...this.initialPosition };
    for (let instruction of instructions) {
      this.executeInstruction(instruction);
    }
  }

  getFinalPosition(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (this.finalPosition) {
        resolve(`${this.finalPosition.x} ${this.finalPosition.y} ${this.finalPosition.orientation}`);
      } else {
        reject('Position finale non déterminée');
      }
    });
  }

  private executeInstruction(instruction: string): void {
    if (instruction === 'D') {
      this.turnRight();
    } else if (instruction === 'G') {
      this.turnLeft();
    } else if (instruction === 'A') {
      this.moveForward();
    }
  }

  private turnRight(): void {
    switch (this.finalPosition.orientation) {
      case 'N':
        this.finalPosition.orientation = 'E';
        break;
      case 'E':
        this.finalPosition.orientation = 'S';
        break;
      case 'S':
        this.finalPosition.orientation = 'W';
        break;
      case 'W':
        this.finalPosition.orientation = 'N';
        break;
    }
  }

  private turnLeft(): void {
    switch (this.finalPosition.orientation) {
      case 'N':
        this.finalPosition.orientation = 'W';
        break;
      case 'W':
        this.finalPosition.orientation = 'S';
        break;
      case 'S':
        this.finalPosition.orientation = 'E';
        break;
      case 'E':
        this.finalPosition.orientation = 'N';
        break;
    }
  }

  private moveForward(): void {
    switch (this.finalPosition.orientation) {
      case 'N':
        if (+this.finalPosition.y < this.gridDimensions.y) {
          this.finalPosition.y = (+this.finalPosition.y + 1).toString();
        }
        break;
      case 'E':
        if (+this.finalPosition.x < this.gridDimensions.x) {
          this.finalPosition.x = (+this.finalPosition.x + 1).toString();
        }
        break;
      case 'S':
        if (+this.finalPosition.y > 0) {
          this.finalPosition.y = (+this.finalPosition.y - 1).toString();
        }
        break;
      case 'W':
        if (+this.finalPosition.x > 0) {
          this.finalPosition.x = (+this.finalPosition.x - 1).toString();
        }
        break;
    }
  }
}
