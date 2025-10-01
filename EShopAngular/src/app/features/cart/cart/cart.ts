import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../../core/cart';
@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  items: CartItem[] = [];
  total = 0;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.getCart().subscribe(items => {
      this.items = items;
      this.total = items.reduce((s, i) => s + i.product.price * i.qty, 0);
    });
  }

  inc(it: CartItem) { this.cart.updateQty(it.product.id, it.qty + 1); }
  dec(it: CartItem) { this.cart.updateQty(it.product.id, it.qty - 1); }
  remove(it: CartItem) { this.cart.remove(it.product.id); }
}
