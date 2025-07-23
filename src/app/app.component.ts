import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { LoaderService } from './core/services/common/loader-service.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, LayoutModule, MatProgressSpinnerModule, MatIconModule]
})
export class AppComponent {
  isLoading = false;
  constructor(public router: Router, private loaderService: LoaderService) {
  this.loaderService.isLoading$.subscribe((status) => {
    this.isLoading = status;
  });
}

}
