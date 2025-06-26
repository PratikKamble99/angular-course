import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../types/user.interface';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  getUser() {
    return this.http
      .get<User>('https://dummyjson.com/auth/me')
      .pipe(shareReplay(1));
  }

  constructor() {}
}
