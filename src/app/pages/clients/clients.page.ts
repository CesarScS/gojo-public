import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ClientResponseInterface } from 'src/app/models/client/ClientResponseInterface';
import { ClientService } from 'src/app/services/client.service';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.page.html',
    styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
    currentClients: ClientResponseInterface[];
    clients: ClientResponseInterface[];
    searchTerm: string = '';

    constructor(
        private _clientsService: ClientService
    ) {
        this.clients = [];
        this.currentClients = [];
    }

    ngOnInit() {
        this._clientsService.getAllClients()
            .subscribe(resp => {
                this.clients = resp.data
                this.currentClients = this.clients.slice(0, 10);
            });
    }

    searchClients() {
        if(this.searchTerm.length > 0){
            this.currentClients = this.clients.filter(resp => {
                return `${resp.Names} ${resp.LastName} ${resp.SecondLastname}`
                    .toLowerCase()
                    .includes(this.searchTerm.toLowerCase());
            })
        }else{
            this.currentClients = this.clients.slice(0, 10);
        }
    }

    onIonInfinite(ev: InfiniteScrollCustomEvent) {
        setTimeout(() => {
            var totalRegistros = this.currentClients.length;
            // console.log(totalRegistros);
            var nextClients = this.clients.slice(totalRegistros, totalRegistros + 10)
            this.currentClients = this.currentClients.concat(nextClients);
            ev.target.complete();
        }, 500);
    }

}
