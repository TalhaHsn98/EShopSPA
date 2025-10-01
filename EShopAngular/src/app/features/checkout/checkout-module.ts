import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Checkout } from './checkout/checkout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Checkout
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    Checkout
  ]
})
export class CheckoutModule { }
