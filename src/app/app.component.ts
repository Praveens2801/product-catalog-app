import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, LayoutModule]
})
export class AppComponent {
  title = 'product-catalog-app';
  constructor(public router: Router) {}
}
