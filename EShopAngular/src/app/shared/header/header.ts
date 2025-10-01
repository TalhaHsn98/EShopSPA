import { Component,OnInit } from '@angular/core';
import { CartService } from '../../core/cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  count$!: Observable<number>;               

  constructor(private cartSvc: CartService) {}

  ngOnInit(): void {
    this.count$ = this.cartSvc.count$;       
  }
}
