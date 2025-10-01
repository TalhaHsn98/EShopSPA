import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from './models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private data: UserModel[] = [
    { id: 1, name: 'John Doe',  email: 'john@example.com',  role: 'customer' },
    { id: 2, name: 'Kelly Clark', email: 'kelly@example.com', role: 'customer' },
    { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin' }
  ];
  private users$ = new BehaviorSubject<UserModel[]>([...this.data]);

  list(): Observable<UserModel[]> { return this.users$.asObservable(); }
  update(u: UserModel) {
    const ix = this.data.findIndex(x => x.id === u.id);
    if (ix > -1) this.data[ix] = { ...u };
    this.users$.next([...this.data]);
  }
  remove(id: number) {
    this.data = this.data.filter(x => x.id !== id);
    this.users$.next([...this.data]);
  }
}
