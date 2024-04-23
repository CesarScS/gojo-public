import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPageRoutingModule } from './new-routing.module';

import { NewPage } from './new.page';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { Step3Component } from './step3/step3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    NewPage, 
    Step1Component, 
    Step2Component,
    Step3Component,
  ]
})
export class NewPageModule {}
