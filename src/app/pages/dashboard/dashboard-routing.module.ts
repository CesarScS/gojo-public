import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage
    },
    {
        path: '',
        component: DashboardPage,
        children: [
            {
                path:'new',
                loadChildren: () => import('../new/new.module').then( m => m.NewPageModule)
            },
            {
                path:'clients',
                loadChildren: () => import('../clients/clients.module').then( m => m.ClientsPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardPageRoutingModule { }
