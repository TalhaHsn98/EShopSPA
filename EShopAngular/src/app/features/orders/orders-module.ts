import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrders} from './admin-orders/admin-orders';
import { MyOrders } from './my-orders/my-orders';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';         



@NgModule({
  declarations: [
    AdminOrders,
    MyOrders
  ],
  imports: [
    CommonModule,
    RouterModule,FormsModule
  ]
})
export class OrdersModule { }
