import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractiveCardComponent } from './interactive-card.component';
import { HorizontalModule } from '@abdos/ortie/horizontal';
@NgModule({
  declarations: [
    InteractiveCardComponent
  ],
  imports: [
    CommonModule,
    HorizontalModule
  ],
  exports:[InteractiveCardComponent]
})
export class InteractiveCardModule { }
