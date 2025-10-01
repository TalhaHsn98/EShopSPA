import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { Hero } from './hero/hero';
import { FeaturedProducts } from './featured-products/featured-products';
import { PromoBox } from './promo-box/promo-box';
import { SharedModule } from '../../shared/shared-module';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Home,
    Hero,
    FeaturedProducts,
    PromoBox,
    ProductList,
    ProductDetail  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ],
  exports: [
    Home,
    Hero,
    FeaturedProducts,
    PromoBox,
    ProductList,
    ProductDetail
  ]
})
export class HomeModule { }
