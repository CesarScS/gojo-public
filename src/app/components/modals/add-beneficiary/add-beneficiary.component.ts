import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.scss'],
})
export class AddBeneficiaryComponent implements OnInit {
  customData : any = ""
  constructor(
    private _modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() { 
    this.customData = this.navParams.get('data');
  }

  closeModal() {
    this._modalCtrl.dismiss()
  }

}
