import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthStorageService {

  private readonly TOKEN_KEY = 'jwt_token';
  private readonly USER_KEY = 'auth_user';

  constructor(private cookieService: CookieService, private router: Router) { }

  setToken(token: string): void {
    this.cookieService.set(this.TOKEN_KEY, token, 1, '');
  }

  getToken(): string {
    return this.cookieService.get(this.TOKEN_KEY);
  }

  clearToken(): void {
    this.cookieService.delete(this.TOKEN_KEY, '/');
  }

  setUser(user: any): void {
    this.cookieService.set(this.USER_KEY, JSON.stringify(user), 1, '/');
  }

  getUser(): any {
    const user = this.cookieService.get(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  clearUser(): void {
    this.cookieService.delete(this.USER_KEY, '/');
  }

  clearAll(): void {
    this.cookieService.deleteAll('/');
  }
  

  logOut(): void {
    this.clearAll();
    this.router.navigate(['home/auth/login'])
  }
}
