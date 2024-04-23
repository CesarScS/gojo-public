import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserModel } from '../models/login/loginUserModel';
import { Observable, tap } from 'rxjs';
import { ResponseMessage } from '../models/responses/ResponseMessage';
import { TokenModel } from '../models/login/tokenModel';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    baseUrl: String = 'http://localhost:24731';
    authTokenKey: string = 'authToken';

    constructor(
        private _http: HttpClient,
    ) { }

    isAuthenticated(): boolean {
        var token = localStorage.getItem(this.authTokenKey)
        return !!token; // Por ahora siempre devuelve true para fines de ejemplo
    }

    login(login: LoginUserModel) {

        this._http.post<ResponseMessage<string>>(`${this.baseUrl}/api/login/authenticate`, login)
            .subscribe(response => {
                const authToken = response.data;
                if(response.Code === HttpStatusCode.Ok){
                    if (authToken) {
                        localStorage.setItem(this.authTokenKey, authToken);
                    }
                }

                console.log('USUARIO: NO VALIDO');
            })
    }
}
