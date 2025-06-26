import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const apiInterceptor: HttpInterceptorFn = (request, next) => {
  const platformId = inject(PLATFORM_ID);

  let token = undefined;
  if (isPlatformBrowser(platformId)) {
    token = localStorage.getItem('token');
  }

  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return next(request);
};
