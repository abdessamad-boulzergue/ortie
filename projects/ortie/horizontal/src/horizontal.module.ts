import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HorizontalComponent} from './horizontal.component';

@NgModule({
  declarations: [HorizontalComponent],
  imports: [CommonModule],
  exports: [HorizontalComponent],
})
export class HorizontalModule {}
