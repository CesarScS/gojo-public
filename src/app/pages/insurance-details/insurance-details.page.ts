import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddBeneficiaryComponent } from 'src/app/components/modals/add-beneficiary/add-beneficiary.component';
import { ClientFilesComponent } from 'src/app/components/modals/client-files/client-files.component';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.page.html',
  styleUrls: ['./insurance-details.page.scss'],
})
export class InsuranceDetailsPage implements OnInit {

  constructor(
    private _modalCtrl:ModalController
  ) { }

  ngOnInit() {
  }

  async openAddBeneficiaryModal(){
    const modal = await this._modalCtrl.create({
      component:AddBeneficiaryComponent,
      componentProps:{
        data:"HOLA MUNDO"
      }
    });

    await modal.present();
  }

  async openFilesModal(){
    const modal = await this._modalCtrl.create({
      component:ClientFilesComponent
    });

    await modal.present();
  }
}
