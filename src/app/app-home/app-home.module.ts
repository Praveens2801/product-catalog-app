import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAreaComponent } from './products/product-area/product-area.component';
import { AboutAreaComponent } from './about/about-area/about-area.component';
import { AppHomeRoutingModule } from './app-home-routing';
import { MatIconModule } from '@angular/material/icon';
import { ProductServiceService } from '../../../services/product-service.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductAreaComponent,
    AboutAreaComponent
  ],
  imports: [
    CommonModule,
    AppHomeRoutingModule,
    MatIconModule,
    FormsModule
  ],
  providers: [ProductServiceService]
})
export class AppHomeModule { }
