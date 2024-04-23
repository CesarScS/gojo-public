import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InsuranceService {
    baseUrl: String = 'http://localhost:24731';
    
    constructor(
        private _http:HttpClient
    ) { }

    getAllByAgent(){
        this._http.get(`${this.baseUrl}/api/individual/productionBySubagent`);
    }
}
