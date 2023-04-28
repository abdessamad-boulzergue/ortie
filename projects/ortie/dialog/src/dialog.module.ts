import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { DialogComponent } from './dialog.component';
import { ButtonsModule } from '@abdos/ortie/button';
@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [CommonModule,ButtonsModule],
  exports: [
    DialogComponent 
  ],
})
export class DialogModule {}
