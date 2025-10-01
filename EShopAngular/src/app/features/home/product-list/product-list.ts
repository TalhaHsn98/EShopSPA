import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/product';
import { ProductModel } from '../../../core/models/product.model';
@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  products: ProductModel[] = [];
  loading = true;

  constructor(private productSvc: ProductService) {}

  ngOnInit(): void {
    this.productSvc.getProducts('Electronics').subscribe((list: ProductModel[]) => {
      this.products = list;
      this.loading = false;
    });
  }
}
