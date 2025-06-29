import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsAreaComponent } from './components/products-area/products-area.component';
import { ProductsComponent } from './pages/products/products.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductHomeComponent } from './pages/product-home/product-home.component';


@NgModule({
  declarations: [ProductHomeComponent, ProductsComponent, ProductsAreaComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [ProductsAreaComponent]
})
export class ProductsModule { }
