import { NgModule } from '@angular/core';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'details/:productId',
        component: ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
