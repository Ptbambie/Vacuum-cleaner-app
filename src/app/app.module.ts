import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VacuumComponent } from './vacuum/vacuum.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import { InstructionsComponent } from './instructions/instructions.component.spec';
import { VacuumControlService } from './vacuum-control.service';


@NgModule({
  declarations: [
    AppComponent,
    VacuumComponent,
    GridComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [VacuumControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
