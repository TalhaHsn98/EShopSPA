import { Component,OnInit } from '@angular/core';
import { CartService } from '../../core/cart';
import { Observable } from 'rxjs';
import { CurrentUserService } from '../../core/current-user';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
   count$!: Observable<number>;
  isAdmin = false;
  userName = '';

  constructor(private cartSvc: CartService, private me: CurrentUserService) {}

  ngOnInit(): void {
    this.count$ = this.cartSvc.count$;
    this.isAdmin = this.me.role === 'admin';
    this.userName = this.me.name;    
  }
}
