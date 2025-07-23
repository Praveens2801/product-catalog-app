import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/user-authentication/auth-service.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { MustMatch } from '../../../core/utils/helpers/auth-helper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerationForm: FormGroup = new FormGroup({});


  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initUserRegistrationForm();
  }

  initUserRegistrationForm(): void {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;

    this.registerationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      createdOn: [formattedDate],
      userId: [0],
      organizationId: [environment.organizationId]
    }, { validator: MustMatch('password', 'confirmPassword') })
  }

  onSignUp(): void {
    if (this.registerationForm.valid) {
      this.authService.signUp(this.registerationForm.value).then(response => {
        if (response) {
          this.router.navigate(['/home/auth/login']);
        }
      }, err => {
        console.log(err)
      });
    }
  }

  get passwordMismatchError(): boolean {
    return this.registerationForm?.get('confirmPassword')?.errors?.['MustMatch'] ?? false;
  }
}

