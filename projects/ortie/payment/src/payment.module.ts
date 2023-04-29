import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule}  from '@angular/core';
import {CommonModule} from '@angular/common';
import { PaymentComponent } from './payment.component';
import { DialogModule } from '@abdos/ortie/dialog';
import { TextInputModule } from '@abdos/ortie/inputs';
import { CardModule } from '@abdos/ortie/card';
@NgModule({
    declarations:[PaymentComponent],
    imports:[
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatDividerModule,
        MatInputModule,
        MatToolbarModule,
        ReactiveFormsModule,
        DialogModule,
        BrowserAnimationsModule,
        TextInputModule,
        CardModule
    ],
    exports:[PaymentComponent]
})
export class PaymentModule{

}