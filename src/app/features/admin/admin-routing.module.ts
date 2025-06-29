import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelHomeComponent } from './pages/admin-panel-home/admin-panel-home.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { StoreProductsComponent } from './components/store-products/store-products.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminPanelHomeComponent,
    children: [
      {
        path: '',
        component: AdminPanelComponent
      },
      {
        path: 'create-products',
        component: StoreProductsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
