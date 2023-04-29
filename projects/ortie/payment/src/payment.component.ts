import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import {  DialogType } from '@abdos/ortie/dialog';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector:'ort-payment-form',
  templateUrl:'./payment.component.html',
  styleUrls:['./payment.component.css']
})
export class PaymentComponent{

    checkoutForm = this.fb.group({
        name: ['Ricardo', [Validators.required]],
        email: ['support@ngx-stripe.dev', [Validators.required]],
        address: ['Av. Ramon Nieto 313B 2D', [Validators.required]],
        zipcode: ['36205', [Validators.required]],
        city: ['Vigo', [Validators.required]],
        amount: [2500, [Validators.required, Validators.pattern(/\d+/)]],
      });

      paying = false;

  get amount() {
    if (   !this.checkoutForm.get('amount') || !this.checkoutForm.get('amount')!.value)
      return 0;
    const amount = this.checkoutForm.get('amount')!.value;
    return Number(amount) / 100;
  }

  constructor(  private fb: FormBuilder, public dialog: MatDialog) {

  }

  collectPayment() {
    
    }
      
  clear() {
    this.checkoutForm.patchValue({
      name: '',
      email: '',
      address: '',
      zipcode: '',
      city: '',
    });
  }
}


@Component({
    // component metadata
    template: `
      <ort-dialog [type]="type" [width]="width">
        <ng-template modalTitle>Title</ng-template>
        <ng-template modalContent>Content</ng-template>
        <ng-template modalActions>
            <ort-button size="small" title="close" (click)="closeDialog()"></ort-button>
            </ng-template>
      </ort-dialog>
    `,
  })
 class DialogPaymentComponent {

    @Input() width: number = 200;
    @Input() type: DialogType = 'info';
    @Input() message: string = '';
    
    constructor(private dialogRef: DialogRef) {}
  
    closeDialog() {
      this.dialogRef.close();
    }
  }

