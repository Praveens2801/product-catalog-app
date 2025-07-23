import { CanActivateFn, Router } from '@angular/router';
import { AuthStorageService } from '../services/user-authentication/auth-storage.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authStorage = inject(AuthStorageService);
  const router = inject(Router);
  const token = authStorage.getToken();
  if (token) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
