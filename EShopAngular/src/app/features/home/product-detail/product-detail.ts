import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/product';
import { CartService } from '../../../core/cart';
import { ProductModel } from '../../../core/models/product.model';
@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  product?: ProductModel;
  qty = 1;
  activeTab: 'desc' | 'info' | 'reviews' | 'video' = 'desc';

  constructor(
    private route: ActivatedRoute,
    private productSvc: ProductService,
    private cartSvc: CartService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productSvc.getProductById(id).subscribe(p => this.product = p);
  }

  addToCart() {
    if (this.product) {
      this.cartSvc.add(this.product, this.qty);
    }
  }

  inc() { this.qty++; }
  dec() { if (this.qty > 1) this.qty--; }
}
