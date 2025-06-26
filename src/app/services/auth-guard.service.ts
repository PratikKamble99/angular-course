import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  authService = inject(AuthService);

  canActivate(): boolean {
    console.log(this.authService.currUserSig());
    if (this.authService.currUserSig()) {
      return true;
    }
    return false;
  }
  constructor() {}
}
