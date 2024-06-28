import { RouterModule, Routes } from "@angular/router";
import { ProductAreaComponent } from "./products/product-area/product-area.component";
import { AboutAreaComponent } from "./about/about-area/about-area.component";
import { NgModule } from "@angular/core";


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductAreaComponent
    },
    {
        path: 'about',
        component: AboutAreaComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppHomeRoutingModule { }