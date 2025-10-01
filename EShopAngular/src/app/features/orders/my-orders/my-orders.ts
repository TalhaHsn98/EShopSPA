import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from '../../../core/orders';
import { OrderModel } from '../../../core/models/order.model';

@Component({
  selector: 'app-my-orders',
  standalone: false,
  templateUrl: './my-orders.html',
  styleUrls: ['./my-orders.css']
})
export class MyOrders implements OnInit {
  orders$!: Observable<OrderModel[]>;
  constructor(private orders: OrdersService) {}
  ngOnInit(): void { this.orders$ = this.orders.listMine(); }
}
