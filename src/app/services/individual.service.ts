import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMessage } from '../models/responses/ResponseMessage';
import { ClientResponseInterface } from '../models/client/ClientResponseInterface';
import { SharedDataService } from './shared-data.service';
import { IndividualFormCatalogs } from '../models/basics/Catalogs';

@Injectable({
    providedIn: 'root'
})
export class IndividualService {

    baseUrl:String = 'http://localhost:24731'

    constructor(
        private _http:HttpClient,
    ) { }

    validateRfc(rfc:String){
        return this._http
            .get<ResponseMessage<ClientResponseInterface>>(`${this.baseUrl}/api/individual/new/validateRFC?rfc=${rfc}`);
    }

    getFormCatalogs(){
        return this._http
            .get<ResponseMessage<IndividualFormCatalogs>>(`${this.baseUrl}/api/individual/catalogs/selectList`);
    }
}
