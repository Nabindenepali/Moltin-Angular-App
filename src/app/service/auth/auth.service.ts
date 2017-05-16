import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {AppconfigService} from '../../config/appconfig.service';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class AuthService {
    tokenurl = 'https://api.moltin.com/oauth/access_token';
    appKey: string = AppconfigService.PUBLIC_ID;
    currentTime = Math.floor(Date.now() / 1000);

    constructor(private _http: Http) {
    }

    fetchToken(): Observable<Object> {
        let headers = new Headers();
        let creds =
            'grant_type=implicit'
            + '&client_id=' + this.appKey;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.tokenurl, creds, {headers: headers});
    }

    refreshToken(){

    }

    checkSession(): Promise<Object> {
        return new Promise(resolve => {
            if (localStorage.moltinexpiration < this.currentTime) {
                this.fetchToken().subscribe((res: Response) => {
                    AuthService.setSession(res.json());
                    console.log('Fetching new token');
                    resolve(true);
                })
            } else {
                console.log('Using old token');
                resolve(true);
            }
        })
    }

    static setSession(response) {
        localStorage.setItem('moltintoken', response.access_token);
        localStorage.setItem('moltinexpiration', response.expires);
    }
}
