import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, IUserRegisteration } from '../../entities/models/authentication';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  login(userName: string, password: string): Promise<AuthResponse | undefined> {
    return new Promise<AuthResponse | undefined>((resolve, reject) => {
      this.http.post<AuthResponse>(environment.baseURL + '/login', { username: userName, password: password }).toPromise().then((response: AuthResponse | undefined) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  signUp(userData: IUserRegisteration): Promise<AuthResponse | undefined> {
    return new Promise<AuthResponse | undefined>((resolve, reject) => {
      this.http.post<AuthResponse>(environment.baseURL + '/api/user/register', userData).toPromise().then((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }
}
