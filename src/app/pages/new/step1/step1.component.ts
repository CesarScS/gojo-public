import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientResponseInterface } from 'src/app/models/client/ClientResponseInterface';
import { IndividdualModelInterface } from 'src/app/models/individual/individualModelInterface';
import { ClientService } from 'src/app/services/client.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {

    cliente: ClientResponseInterface;
    insurance:IndividdualModelInterface;

    constructor(
        private _clientService: ClientService,
        private _sharedData: SharedDataService,
        private _router: Router
    ) {
        this.cliente = {} as ClientResponseInterface;
        this.insurance = {} as IndividdualModelInterface;
    }

    ngOnInit() {
        this._clientService.currentClient
            .subscribe(resp => {
                this.cliente = resp as ClientResponseInterface;
                if (this.isObjectNotEmpty(this.cliente)){
                    //Guardar Valores tabla nueva
                    // console.log('DATA CLIENTE',resp);
                    this._sharedData
                        .setInsurance({
                            ...this.insurance,
                            //data indormation
                            PersonType: resp?.PersonType ?? '',
                            Names:resp?.Names ?? '',
                            LastName:resp?.LastName ?? '',
                            SecondLastname:resp?.SecondLastname ?? '',
                            Birthdate:resp?.Birthdate ?? '',
                            Email:resp?.Email ?? '',
                            Phone:resp?.Phone ?? '',
                            Client_Id:resp?.ID ?? 0,
                            
                            //Address Data
                            Street:resp?.Street ?? '',
                            Zipcode:resp?.Zipcode ?? '',
                            State: resp?.State ?? '',
                            City: resp?.Birthdate ?? '',
                        });
                    //this._router.navigate(['/new/step2']);
                }
            });

        this._sharedData.currentInsurance
            .subscribe(resp => {
                this.insurance = resp as IndividdualModelInterface
                // console.log('DATA INSURANCE:',resp);
            })
    }

    isObjectNotEmpty(obj: any): boolean {
        return obj && Object.keys(obj).length > 0;
    }

    nextStep(){
        this._router.navigate(['/new/step2']);
    }

}
