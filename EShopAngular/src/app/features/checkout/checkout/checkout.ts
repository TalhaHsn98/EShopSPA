import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CartService, CartItem } from '../../../core/cart';
@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})

export class Checkout implements OnInit {

  form!: FormGroup;
  items: CartItem[] = [];
  subtotal = 0;
  shipping = 19;          // flat for demo
  taxRate = 0.09;         // 9% demo tax
  tax = 0;
  total = 0;

  

  constructor(private fb: FormBuilder, private cart: CartService) {}

  ngOnInit(): void {

    this.form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName:  ['', [Validators.required, Validators.minLength(2)]],
    email:     ['', [Validators.required, Validators.email]],
    address:   ['', [Validators.required, Validators.minLength(5)]],
    city:      ['', Validators.required],
    state:     ['', Validators.required],
    zip:       ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    paymentMethod: ['card', Validators.required],
    cardNumber:    ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
    expiry:        ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]], 
    cvv:           ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
    });
    this.cart.getCart().subscribe(items => {
      this.items = items;
      this.subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);
      this.tax = +(this.subtotal * this.taxRate).toFixed(2);
      this.total = this.subtotal + this.shipping + this.tax;
    });
  }

  placeOrder() {
    if (this.form.invalid || this.items.length === 0) {
      this.form.markAllAsTouched();
      return;
    }
    // demo success — here you’d call your API
    alert('Order placed! 🎉');
    this.cart.clear?.(); // if you added clear(); else remove this line
  }

  // helpers for template
  get f() { return this.form.controls; }
}