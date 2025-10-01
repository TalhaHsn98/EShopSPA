import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmailService } from './email';
import { OrderModel, OrderStatus } from './models/order.model';
import { CurrentUserService } from './current-user';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private orders: OrderModel[] = [
    {
      id: '2025-11-30T19:37:51.666',
      createdAt: '2025-11-30T19:37:51.666Z',
      customerId: 1, customerName: 'John Doe',
      paymentMethod: 'Credit Card',
      shippingAddress: '1234 Elm Street, apt 307, Springfield, IL, 62701',
      shippingMethod: 'Standard Shipping',
      status: 'OrderPlaced',
      items: [
        { productId: 2, productName: 'Google Pixel 7 Pro', price: 899, qty: 1, image: 'https://via.placeholder.com/100?text=Pixel' },
        { productId: 3, productName: 'iPhone 15 Pro Max', price: 999, qty: 1, image: 'https://via.placeholder.com/100?text=iPhone' }
      ],
      totalAmount: 899 + 999
    },
    {
      id: '2025-11-30T19:40:00.674',
      createdAt: '2025-11-30T19:40:00.674Z',
      customerId: 2, customerName: 'Kelly Clark',
      paymentMethod: 'Apple Pay',
      shippingAddress: '1100 E 34th St, Ada, OK, 73519',
      shippingMethod: 'Express Shipping',
      status: 'OrderPlaced',
      items: [
        { productId: 3, productName: 'iPhone 15 Pro Max', price: 999, qty: 1, image: 'https://via.placeholder.com/100?text=iPhone' }
      ],
      totalAmount: 999
    }
  ];

  private orders$ = new BehaviorSubject<OrderModel[]>([...this.orders]);
  constructor(private email: EmailService, private me: CurrentUserService) {}

  listAll(): Observable<OrderModel[]> {
    return this.orders$.asObservable();
  }

  listMine(): Observable<OrderModel[]> {
    return this.orders$.pipe(map(all => all.filter(o => o.customerId === this.me.userId)));
  }

  updateStatus(id: string, status: OrderStatus) {
    const o = this.orders.find(x => x.id === id);
    if (!o) return;
    o.status = status;
    this.orders$.next([...this.orders]);
    if (status === 'Completed') this.email.sendOrderConfirmation(o);
  }

  listByUser(userId: number) {
  return this.listAll().pipe(map(all => all.filter(o => o.customerId === userId)));
}

}
