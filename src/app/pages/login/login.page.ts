import { Component, OnInit } from '@angular/core';
import { LoginUserModel } from 'src/app/models/login/loginUserModel';
import { SessionService } from 'src/app/services/session.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    loginUser:LoginUserModel = {
        email:'',
        password:''
    };

    constructor(
        private _session:SessionService
    ) { }

    ngOnInit() {
    }

    login() {
        this._session.login(this.loginUser);
    }
}
