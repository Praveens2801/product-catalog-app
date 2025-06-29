import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { CartAreaComponent } from './components/cart-area/cart-area.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';


@NgModule({
  declarations: [CartComponent, CartAreaComponent, CartItemsComponent, CartSummaryComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
