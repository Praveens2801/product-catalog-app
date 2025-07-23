import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { AuthStorageService } from './core/services/user-authentication/auth-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    CookieService, // for dependency injection,
    AuthStorageService
  ]
};
