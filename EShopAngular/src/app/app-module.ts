import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeModule } from './features/home/home-module';
import { CartModule } from './features/cart/cart-module';
import { CheckoutModule } from './features/checkout/checkout-module';
import { OrdersModule } from './features/orders/orders-module';



@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    CartModule,
    CheckoutModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
