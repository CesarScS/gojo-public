import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IndividualFormCatalogs } from 'src/app/models/basics/Catalogs';
import { IndividdualModelInterface } from 'src/app/models/individual/individualModelInterface';
import { ClientService } from 'src/app/services/client.service';
import { IndividualService } from 'src/app/services/individual.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
    selector: 'app-step2',
    templateUrl: './step2.component.html',
    styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
    insurance: IndividdualModelInterface;
    catalogs: IndividualFormCatalogs;

    constructor(
        private _clientService: ClientService,
        private _individualService: IndividualService,
        private _sharedDataService: SharedDataService,
        private modalController: ModalController,
        private _router:Router
    ) {
        this.insurance = {} as IndividdualModelInterface;
        this.catalogs = {} as IndividualFormCatalogs;
    }

    ngOnInit() {
        this._sharedDataService.currentInsurance
            .subscribe(resp => this.insurance = resp as IndividdualModelInterface);

        this._individualService.getFormCatalogs()
            .subscribe(resp => this.catalogs = resp.data);
    }

    async abrirModal() {
        const modal = this.modalController.create({
            component: 'modal-content'
        })

        return (await modal).present();
    }

    dateChanged(value: any) {
        console.log(value);
    }

    backStep(){
        this._router.navigate(['/new/step1'])
    }

    nextStep(){
        this._router.navigate(['/new/step3'])
    }
}
