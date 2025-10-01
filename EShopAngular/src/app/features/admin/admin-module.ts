import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users/users';
import { AddProduct } from './add-product/add-product';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    Users,
    AddProduct
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    Users,
    AddProduct
  ]
})
export class AdminModule { }
