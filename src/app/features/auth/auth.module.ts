import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthService } from '../../core/services/user-authentication/auth-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthStorageService } from '../../core/services/user-authentication/auth-storage.service';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent
    ],
    imports: [CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule], 
        providers: [
            AuthService, provideHttpClient(withInterceptorsFromDi()),
            AuthStorageService
        ]
})
export class AuthModule { }
