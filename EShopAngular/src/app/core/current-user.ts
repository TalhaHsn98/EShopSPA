import { Injectable } from '@angular/core';

export type Role = 'customer' | 'admin';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
  userId = 1;                 // pretend “John Doe”
  role: Role = 'admin';    // change to 'admin' to view admin page
  name = 'John Doe';
}
