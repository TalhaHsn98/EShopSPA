import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from './models/product.model';

export interface CartItem { product: ProductModel; qty: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];
  private items$ = new BehaviorSubject<CartItem[]>([]);

  // expose streams
  getCart() { return this.items$.asObservable(); }
  count$ = this.items$.pipe(map(items => items.reduce((s, i) => s + i.qty, 0)));

  add(product: ProductModel, qty: number = 1) {
    const existing = this.items.find(i => i.product.id === product.id);
    if (existing) existing.qty += qty;
    else this.items.push({ product, qty });
    this.items$.next([...this.items]);
  }

  updateQty(productId: number, qty: number) {
    const it = this.items.find(i => i.product.id === productId);
    if (!it) return;
    it.qty = qty;
    if (it.qty <= 0) this.remove(productId);
    this.items$.next([...this.items]);
  }

  remove(productId: number) {
    this.items = this.items.filter(i => i.product.id !== productId);
    this.items$.next([...this.items]);
  }

  clear() {
  this.items = [];
  this.items$.next([]);
}

}
