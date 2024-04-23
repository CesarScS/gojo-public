import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientResponseInterface } from 'src/app/models/client/ClientResponseInterface';
import { ClientService } from 'src/app/services/client.service';
import { IndividualService } from 'src/app/services/individual.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.page.html',
    styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
    
    constructor(
        private _individualService:IndividualService,
        private _router:Router,
        private _sharedDataService: ClientService
    ) { 
       
    }

    ngOnInit() {
        this._sharedDataService.setClient(null);
    }

    validRfc(){
        this._individualService
            .validateRfc("SIPA900625BW7")
            .subscribe(resp => {
                this._sharedDataService.setClient(resp.data);
            });
    }
}
