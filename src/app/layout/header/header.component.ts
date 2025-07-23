import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../core/entities/models/authentication';
import { AuthStorageService } from '../../core/services/user-authentication/auth-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: IUser | null = null;
  searchTerm: string = '';

  constructor(public router: Router, private authStorageService: AuthStorageService) {
    this.user = this.authStorageService.getUser();
  }

  navigate(routePath: string): void {
    this.router.navigate([routePath]);
  }

  logout(): void {
    this.authStorageService.logOut();
  }

  searchProduct(searchTerm: string): void {
    // this.filteredProductsData = structuredClone(this.products).filter(product => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }
}
