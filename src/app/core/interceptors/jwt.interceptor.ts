import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStorageService } from '../services/user-authentication/auth-storage.service';
import { finalize } from 'rxjs';
import { LoaderService } from '../services/common/loader-service.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authStorage = inject(AuthStorageService);
  const token = authStorage.getToken();
  const laoderService = inject(LoaderService);
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  laoderService.show();
  return next(req).pipe(
    finalize(() => laoderService.hide())
  );

};
