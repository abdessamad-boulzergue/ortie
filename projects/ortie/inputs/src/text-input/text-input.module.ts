import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [TextInputComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[TextInputComponent]
})
export class TextInputModule { }
