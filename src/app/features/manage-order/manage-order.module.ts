import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageOrderRoutingModule } from './manage-order-routing.module';
import { ManageOrderComponent } from './pages/manage-order/manage-order.component';
import { ManageOrderAreaComponent } from './components/manage-order-area/manage-order-area.component';


@NgModule({
  declarations: [ManageOrderComponent, ManageOrderAreaComponent],
  imports: [
    CommonModule,
    ManageOrderRoutingModule
  ]
})
export class ManageOrderModule { }
