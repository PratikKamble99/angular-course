import { Injectable, signal } from '@angular/core';
import { User } from '../types/user.interface';

export type Role = 'admin' | 'user' | 'editor';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currUserSig = signal<User | undefined | null>(undefined);
  private role: Role | null = null;

  setRole(role: Role) {
    this.role = role;
  }

  getRole() {
    this.role;
  }

  isAuthorized(allowedRoles: Role[]): boolean {
    return allowedRoles.includes(this.role);
  }

  constructor() {}
}
