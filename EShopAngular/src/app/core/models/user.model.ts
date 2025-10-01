export type UserRole = 'customer' | 'admin';

export interface UserModel {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}
