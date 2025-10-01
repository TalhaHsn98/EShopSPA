import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../../core/users';
import { UserModel, UserRole } from '../../../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
    standalone: false,

  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class Users implements OnInit {
  users$!: Observable<UserModel[]>;
  editing: Record<number, boolean> = {};

  roles: UserRole[] = ['customer', 'admin'];

  constructor(private users: UsersService, private router: Router) {}
  ngOnInit(): void { this.users$ = this.users.list(); }

  edit(id: number) { this.editing[id] = true; }
  save(u: UserModel) { this.users.update(u); this.editing[u.id] = false; }
  cancel(id: number) { this.editing[id] = false; }
  remove(u: UserModel) { if (confirm('Delete this user?')) this.users.remove(u.id); }

  viewOrders(u: UserModel) {
    this.router.navigate(['/orders'], { queryParams: { userId: u.id } });
  }
}
