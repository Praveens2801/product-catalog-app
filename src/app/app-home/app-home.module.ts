import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAreaComponent } from './products/product-area/product-area.component';
import { AboutAreaComponent } from './about/about-area/about-area.component';
import { AppHomeRoutingModule } from './app-home-routing';



@NgModule({
  declarations: [
    ProductAreaComponent,
    AboutAreaComponent
  ],
  imports: [
    CommonModule,
    AppHomeRoutingModule
  ]
})
export class AppHomeModule { }
