import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {AppconfigService} from '../../config/appconfig.service';
import 'rxjs/Rx';


@Injectable()
export class AuthService {
    tokenurl = 'https://api.moltin.com/oauth/access_token';
    appKey: string = AppconfigService.PUBLIC_ID;

    constructor(private _http: Http) {
    }

    fetchToken(granttype: string, token?: string) {
        console.log('Fetching Access Token');
        let headers = new Headers(),
            rtoken = '';
        if (token) {
            rtoken = '&refresh_token=' + token;
        }
        let creds =
            '&grant_type=' + granttype
            + '&client_id=' + this.appKey
            + rtoken;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.tokenurl, creds, {headers: headers})
    }

    refreshToken() {
        return this.fetchToken('refresh_token', localStorage.moltintoken);
    }

    setSession(response): void {
        localStorage.setItem('moltintoken', response.access_token);
        localStorage.setItem('moltinexpiration', response.expires);
    }

    static isTokenActive(): Boolean{
        let currentTime = Math.floor(Date.now() / 1000);
        // Check if Access Token is available or valid
        return localStorage.moltinexpiration < currentTime || !(localStorage.moltintoken);
    }


}
