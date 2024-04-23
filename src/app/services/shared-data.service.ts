import { Injectable } from '@angular/core';
import { IndividdualModelInterface } from '../models/individual/individualModelInterface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {

    private insuranceSource = new BehaviorSubject<IndividdualModelInterface | null>(null);
    currentInsurance = this.insuranceSource.asObservable();

    constructor() { }

    setInsurance(individualModel :IndividdualModelInterface | null){
        this.insuranceSource.next(individualModel);
    }
}
