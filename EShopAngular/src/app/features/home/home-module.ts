import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { Hero } from './hero/hero';
import { FeaturedProducts } from './featured-products/featured-products';
import { PromoBox } from './promo-box/promo-box';
import { SharedModule } from '../../shared/shared-module';



@NgModule({
  declarations: [
    Home,
    Hero,
    FeaturedProducts,
    PromoBox
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    Home
  ]
})
export class HomeModule { }
