import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, Response} from '@angular/http';
import {Config} from '../../../config/config.service';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TokenService {
  constructor(private _http: Http) {
  }

  getNewToken(): Observable<object> {
    const headers: Headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const data: URLSearchParams = new URLSearchParams();
    data.append('client_id', Config.CLIENT_ID);
    data.append('client_secret', Config.CLIENT_SECRET);
    data.append('grant_type', 'client_credentials');
    return this._http.post(
      `${Config.URL}oauth/access_token`,
      data,
      {
        headers: headers
      })
      .map(response => response.json())
      .catch(this._handleError);
  }

  getToken(): string {
    return localStorage.getItem('moltin_token');
  }

  isTokenActive(): boolean {
    const currentDate: number = Math.round(Date.now() / 1000); // Convert milliseconds since UNIX epoch to seconds
    return (
      localStorage.getItem('moltin_token') !== '' &&
      localStorage.getItem('moltin_expiry') !== '' &&
      parseInt(localStorage.getItem('moltin_expiry'), 10) >= currentDate
     );
  }

  refreshToken(): void {
    this.getNewToken().subscribe(response => {
      localStorage.setItem('moltin_token', response['access_token']);
      localStorage.setItem('moltin_expiry', response['expires']);
    });
  }

  private _handleError(error: Response): Observable<object> {
    console.log(error.json());
    return Observable.throw(error.json());
  }
}
