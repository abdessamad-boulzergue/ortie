import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { SliderCardDirective } from './slider-card.directive';

@NgModule({
  declarations: [
    SliderComponent,
    SliderCardDirective
  ],
  imports: [
    CommonModule,
    ScrollingModule,
  ],
  exports:[SliderComponent,SliderCardDirective]
})
export class SliderModule { }
