import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeModule } from './features/home/home-module';
import { CartModule } from './features/cart/cart-module';



@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    CartModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
