import { Injectable } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthService, Role } from '../services/auth.service';

export const roleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const allowedRoles = route.data['roles'] as Role[];

  // console.log(allowedRoles, 'ROLES', state);

  if (auth.isAuthorized(allowedRoles)) {
    return true;
  } else {
    router.navigate(['/unauthorized']);
    return false;
  }
};
