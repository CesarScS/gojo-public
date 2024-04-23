import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
    selector: 'app-client-files',
    templateUrl: './client-files.component.html',
    styleUrls: ['./client-files.component.scss'],
})
export class ClientFilesComponent implements OnInit {
    constructor(
        private _modalCtrl: ModalController,
        private navParams: NavParams
    ) { }

    ngOnInit() { 
    }

    closeModal() {
        this._modalCtrl.dismiss()
    }

}
