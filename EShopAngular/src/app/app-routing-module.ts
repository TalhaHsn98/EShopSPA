import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './features/home/home/home';
import { ProductDetail } from './features/home/product-detail/product-detail';
import { Cart } from './features/cart/cart/cart';
import { Checkout } from './features/checkout/checkout/checkout';

const routes: Routes = [

  { path: '', component: Home},
  {path: 'products/:id', component: ProductDetail},
  { path: 'cart', component: Cart },      
  { path: 'checkout', component: Checkout }            

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
