import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ProductModel } from './models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly mock: ProductModel[] = [
  {
    id: 1,
    name: 'Beyond Good And Evil',
    price: 14,
    image: 'https://via.placeholder.com/250x350?text=Beyond+Good+and+Evil',
    category: 'Books',
    rating: 4,
    description: 'Beyond Good and Evil is a captivating philosophical masterpiece that challenges conventional thinking...',
    details: 'Written by Friedrich Nietzsche, this influential work delves into morality, truth, and individuality.',
    reviews: [
      'Profound and thought-provoking.',
      'A must-read for philosophy enthusiasts.'
    ],
    videoUrl: 'https://www.youtube.com/embed/sample'
  },
  {
    id: 2,
    name: 'Google Pixel 7 Pro',
    price: 899,
    image: 'https://via.placeholder.com/320x220?text=Pixel+7+Pro',
    category: 'Electronics',
    rating: 5,
    description: 'Flagship Android smartphone with exceptional camera and performance.'
  },
  {
    id: 3,
    name: 'iPhone 15 Pro Max',
    price: 999,
    image: 'https://via.placeholder.com/320x220?text=iPhone+15+Pro+Max',
    category: 'Electronics',
    rating: 4,
    description: 'Apple’s latest iPhone with advanced cameras and long-lasting battery.'
  }
];


  getProducts(category?: string): Observable<ProductModel[]> {
    return of(this.mock).pipe(
      delay(300), 
      map(list => category ? list.filter(p => p.category === category) : list)
    );

  }


  getProductById(id: number): Observable<ProductModel | undefined> {
  return this.getProducts().pipe(
    map(list => list.find(p => p.id === id))
  );
}

  addProduct(p: Omit<ProductModel, 'id'>) {
    const id = Math.max(...this.mock.map(m => m.id), 0) + 1;
    this.mock.push({ id, ...p });
    alert('Product created (mock).');
  }




}
