import {Component, OnInit,} from '@angular/core';
import {Response} from '@angular/http';

import {AuthService} from './service/auth/auth.service';


@Component({
    selector: 'moltin-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class Moltin implements OnInit {
    isAuthenticated: Boolean = false;

    constructor(private _auth: AuthService) {
    }

    ngOnInit() {
        this._auth.fetchToken().subscribe((res: Response) => {
            AuthService.setSession(res.json());
            this.isAuthenticated = false;
        })
    }

    btnclick() {
        this._auth.checkSession().then((data: Boolean) => {
            this.isAuthenticated = data;
        })
    }
}

