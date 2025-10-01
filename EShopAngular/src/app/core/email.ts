import { Injectable } from '@angular/core';
import { OrderModel } from './models/order.model';

@Injectable({ providedIn: 'root' })
export class EmailService {
  sendOrderConfirmation(order: OrderModel) {
    const lines = [
      `Invoice for Order #${order.id}`,
      `Date: ${new Date(order.createdAt).toLocaleString()}`,
      `Customer: ${order.customerName}`,
      `Ship To: ${order.shippingAddress}`,
      `----------------------------------------`,
      ...order.items.map(i => `${i.productName} x${i.qty} - $${(i.price * i.qty).toFixed(2)}`),
      `----------------------------------------`,
      `Total: $${order.totalAmount.toFixed(2)}`
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `invoice-${order.id}.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
    alert('📧 Confirmation email sent (mock) with invoice attached.');
  }
}
