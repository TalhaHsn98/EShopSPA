export type OrderStatus = 'OrderPlaced' | 'Processing' | 'Shipped' | 'Cancel' | 'Completed';

export interface OrderItemModel {
  productId: number;
  productName: string;
  price: number;
  qty: number;
  image?: string;
}

export interface OrderModel {
  id: string;
  createdAt: string; // ISO
  customerId: number;
  customerName: string;
  paymentMethod: 'Apple Pay' | 'Credit Card' | 'Paypal';
  shippingAddress: string;
  shippingMethod: 'Express Shipping' | 'Standard Shipping' | 'Two Day Shipping' | 'Free Shipping';
  totalAmount: number;
  status: OrderStatus;
  items: OrderItemModel[];
}
