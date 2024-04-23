import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndividdualModelInterface } from 'src/app/models/individual/individualModelInterface';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
    selector: 'app-step3',
    templateUrl: './step3.component.html',
    styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
    insurance: IndividdualModelInterface | null;

    constructor(
        private _sharedDataService: SharedDataService,
        private _router:Router
    ) {
        this.insurance = {} as IndividdualModelInterface;
    }

    ngOnInit() {
        this._sharedDataService.currentInsurance
            .subscribe(resp => this.insurance = resp)
    }

    backStep(){
        this._router.navigate(['/new/step2']);
    }
}
