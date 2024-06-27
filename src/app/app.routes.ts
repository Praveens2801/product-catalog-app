import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'

    },
    {
        path: 'home',
        loadChildren: () => import('./app-home/app-home.module').then((module) => module.AppHomeModule)
    }
];
