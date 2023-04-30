import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

 
@Component({
  selector:'ort-payment-form',
  templateUrl:'./payment.component.html',
  styleUrls:['./payment.component.css']
})
export class PaymentComponent{

  @Output() paymentFormValidate = new EventEmitter<object>();


    checkoutForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        address: ['', [Validators.required]],
        zipcode: ['', [Validators.required]],
        city: ['', [Validators.required]],
        amount: [0, [Validators.required, Validators.pattern(/\d+/)]],
      });

      paying = false;

  get amount() {
    if (   !this.checkoutForm.get('amount') || !this.checkoutForm.get('amount')!.value)
      return 0;
    const amount = this.checkoutForm.get('amount')!.value;
    return Number(amount) / 100;
  }

  constructor(  private fb: FormBuilder ) {

  }

  collectPayment() {
    if (this.paying) return;
    if (this.checkoutForm.invalid) {
      return;
    }
    this.paying = true;

    this.paymentFormValidate.emit({
      name: this.checkoutForm.get('name')!.value,
      email: this.checkoutForm.get('email')!.value,
      address: {
        line1: this.checkoutForm.get('address')!.value,
        postal_code: this.checkoutForm.get('zipcode')!.value,
        city: this.checkoutForm.get('city')!.value,
      }
    });
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



