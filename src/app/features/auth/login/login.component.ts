import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/user-authentication/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthStorageService } from '../../../core/services/user-authentication/auth-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isSignUpMode = false;

  loginForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private authStorage: AuthStorageService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  switchToSignUp() {
    this.isSignUpMode = true;
  }

  switchToSignIn() {
    this.isSignUpMode = false;
  }


  onLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.userName, this.loginForm.value.password).then(response => {
        if (response) {
          this.authStorage.setToken(response.token);
          this.authStorage.setUser(response.user);
          this.router.navigate(['/home/products']);
          alert(response.message);
        }
      }, err => {
        console.log(err)
        alert('login error!');
      });
    }
  }
}
