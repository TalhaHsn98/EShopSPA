import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from './cart/cart';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Cart
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CartModule { }
