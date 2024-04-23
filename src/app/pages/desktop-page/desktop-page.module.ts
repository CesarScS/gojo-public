import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesktopPagePageRoutingModule } from './desktop-page-routing.module';

import { DesktopPagePage } from './desktop-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesktopPagePageRoutingModule
  ],
  declarations: [DesktopPagePage]
})
export class DesktopPagePageModule {}
