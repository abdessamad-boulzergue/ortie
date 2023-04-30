import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractiveCardComponent } from './interactive-card.component';

@NgModule({
  declarations: [
    InteractiveCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[InteractiveCardComponent]
})
export class InteractiveCardModule { }
