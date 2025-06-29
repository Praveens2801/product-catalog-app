import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'

    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
    },
    {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module').then((module) => module.CheckoutModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./products/products.module').then((module) => module.ProductsModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./user-profile/user-profile.module').then((module) => module.UserProfileModule)
    },
    {
        path: 'manage-order',
        loadChildren: () => import('./manage-order/manage-order.module').then((module) => module.ManageOrderModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then((module) => module.AdminModule)
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }
