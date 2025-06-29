import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from '../../entities/models/authentication';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') ? true : false;
  }

  login(userName: string, password: string): Promise<AuthResponse | undefined> {
    return new Promise<AuthResponse | undefined>((resolve, reject) => {
      this.http.post<AuthResponse>(environment.baseURL + environment.loginApiUrl, { username: userName, password: password }).toPromise().then((response: AuthResponse | undefined) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
