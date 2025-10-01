import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from '../../../core/orders';
import { OrderModel, OrderStatus } from '../../../core/models/order.model';

@Component({
  selector: 'app-admin-orders',
  standalone: false,
  templateUrl: './admin-orders.html',
  styleUrls: ['./admin-orders.css']
})
export class AdminOrders implements OnInit {
  orders$!: Observable<OrderModel[]>;
  statuses: OrderStatus[] = ['OrderPlaced','Processing','Shipped','Cancel','Completed'];

  constructor(private orders: OrdersService) {}
  ngOnInit(): void { this.orders$ = this.orders.listAll(); }

  setStatus(id: string, status: OrderStatus) { this.orders.updateStatus(id, status); }
}
