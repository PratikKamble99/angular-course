import { User } from './../types/user.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient);

  PostRegisterUser(formData) {
    return this.http.post<User>('https://dummyjson.com/auth/login', formData);
  }
}
