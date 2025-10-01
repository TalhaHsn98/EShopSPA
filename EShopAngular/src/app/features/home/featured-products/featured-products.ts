import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  standalone: false,
  templateUrl: './featured-products.html',
  styleUrls: ['./featured-products.css']
})
export class FeaturedProducts {
  products = [
    { name: 'Product 1', price: 49.99, image: 'https://via.placeholder.com/200' },
    { name: 'Product 2', price: 59.99, image: 'https://via.placeholder.com/200' },
    { name: 'Product 3', price: 69.99, image: 'https://via.placeholder.com/200' },
    { name: 'Product 4', price: 79.99, image: 'https://via.placeholder.com/200' }
  ];
}
