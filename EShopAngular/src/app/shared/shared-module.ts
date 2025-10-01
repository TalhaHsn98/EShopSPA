import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoBar } from './promo-bar/promo-bar';
import { Header } from './header/header';
import { Footer } from './footer/footer';



@NgModule({
  declarations: [
    PromoBar,
    Header,
    Footer
  ],
  imports: [
    CommonModule
  ],

  exports: [
      PromoBar,
      Header,
      Footer
    ]
})
export class SharedModule { }
