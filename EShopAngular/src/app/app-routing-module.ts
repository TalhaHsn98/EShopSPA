import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './features/home/home/home';
import { ProductDetail } from './features/home/product-detail/product-detail';
import { Cart } from './features/cart/cart/cart';
import { Checkout } from './features/checkout/checkout/checkout';
import { AdminOrders } from './features/orders/admin-orders/admin-orders';
import { MyOrders } from './features/orders/my-orders/my-orders';
import { Users } from './features/admin/users/users';
import { AddProduct } from './features/admin/add-product/add-product';
import { AdminGuard } from './core/admin-guard';

const routes: Routes = [

  { path: '', component: Home},
  {path: 'products/:id', component: ProductDetail},
  { path: 'cart', component: Cart },      
  { path: 'checkout', component: Checkout },
  { path: 'orders', component: AdminOrders},   // admin view
  { path: 'my-orders', component: MyOrders},           

  
  { path: 'admin/users', component: Users, canActivate: [AdminGuard] },
  { path: 'admin/products/new', component: AddProduct, canActivate: [AdminGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
