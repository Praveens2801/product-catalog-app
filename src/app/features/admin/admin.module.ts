import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AdminPanelHomeComponent } from './pages/admin-panel-home/admin-panel-home.component';
import { AdminPanelAreaComponent } from './components/admin-panel-area/admin-panel-area.component';
import { StoreProductsComponent } from './components/store-products/store-products.component';


@NgModule({
  declarations: [AdminPanelHomeComponent, AdminPanelComponent, AdminPanelAreaComponent, StoreProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
