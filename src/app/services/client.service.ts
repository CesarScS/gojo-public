import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ClientResponseInterface } from '../models/client/ClientResponseInterface';
import { HttpClient } from '@angular/common/http';
import { ResponseMessage } from '../models/responses/ResponseMessage';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    baseUrl:String = 'http://localhost:24731';
    private clientSource = new BehaviorSubject<ClientResponseInterface | null>(null);
    currentClient = this.clientSource.asObservable();

    constructor(
        private _http:HttpClient
    ) { }

    setClient(client: ClientResponseInterface | null) {
        this.clientSource.next(client);
    }

    getAllClients(){
        return this._http.get<ResponseMessage<ClientResponseInterface[]>>(`${this.baseUrl}/api/individual/catalogs/clients?UserId=7`);
    }
}
