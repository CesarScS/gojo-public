import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DeviceGuard } from './guards/device.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    // canActivate:[DeviceGuard]
  },
  {
    path: 'new',
    loadChildren: () => import('./pages/new/new.module').then( m => m.NewPageModule),
    // canActivate:[DeviceGuard,AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
    // canActivate:[DeviceGuard,AuthGuard]
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients/clients.module').then( m => m.ClientsPageModule),
    // canActivate:[DeviceGuard,AuthGuard]
  },
  {
    path: 'desktop-page',
    loadChildren: () => import('./pages/desktop-page/desktop-page.module').then( m => m.DesktopPagePageModule)
  },
  {
    path: 'insurance-details',
    loadChildren: () => import('./pages/insurance-details/insurance-details.module').then( m => m.InsuranceDetailsPageModule),
    // canActivate:[DeviceGuard,AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
