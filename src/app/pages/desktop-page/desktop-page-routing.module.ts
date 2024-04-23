import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopPagePage } from './desktop-page.page';

const routes: Routes = [
  {
    path: '',
    component: DesktopPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopPagePageRoutingModule {}
