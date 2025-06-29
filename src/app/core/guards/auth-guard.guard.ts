import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/user-authentication/auth-service.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const autheService = Inject(AuthService);
  const router = Inject(Router);
  if (autheService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
