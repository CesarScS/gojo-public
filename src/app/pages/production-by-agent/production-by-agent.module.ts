import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionByAgentPageRoutingModule } from './production-by-agent-routing.module';

import { ProductionByAgentPage } from './production-by-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductionByAgentPageRoutingModule
  ],
  declarations: [ProductionByAgentPage]
})
export class ProductionByAgentPageModule {}
