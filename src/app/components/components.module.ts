import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './form/datepicker/datepicker.component';
import { IonicModule } from '@ionic/angular';
import { MultiStepComponent } from './form/multi-step/multi-step.component';
import { SeparatorComponent } from './ui/separator/separator.component';
import { ClientFilesComponent } from './modals/client-files/client-files.component';
import { AddBeneficiaryComponent } from './modals/add-beneficiary/add-beneficiary.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    MultiStepComponent,
    SeparatorComponent,
    ClientFilesComponent,
    AddBeneficiaryComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    DatepickerComponent,
    MultiStepComponent,
    SeparatorComponent,
    ClientFilesComponent,
    AddBeneficiaryComponent
  ]
})
export class ComponentsModule { }
