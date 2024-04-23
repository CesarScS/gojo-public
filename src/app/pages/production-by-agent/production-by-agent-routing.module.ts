import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionByAgentPage } from './production-by-agent.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionByAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionByAgentPageRoutingModule {}
