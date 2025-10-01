import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CurrentUserService } from './current-user';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private me: CurrentUserService, private router: Router) {}
  canActivate(): boolean {
    if (this.me.role === 'admin') return true;
    this.router.navigateByUrl('/');   // or /my-orders
    return false;
  }
}
