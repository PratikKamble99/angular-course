import { Injectable, signal } from '@angular/core';
import { User } from '../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currUserSig = signal<User | undefined | null>(undefined);

  constructor() {}
}
