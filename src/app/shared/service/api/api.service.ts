import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../token/token.service';
import { Config } from '../../../config/config.service';

@Injectable()
export class ApiService {
  constructor(private _http: Http, private _tokenService: TokenService) {
  }

  get(url: string): Observable<object> {
    if (!this._tokenService.isTokenActive()) {
      this._tokenService.refreshToken();
    }
    const headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this._tokenService.getToken()
    });
    return this._http.get(
      `${Config.URL}${url}`,
      {
        headers: headers
      })
      .map(response => response.json())
      .catch(this._handleError);
  }

  post(url: string, params: object): Observable<object> {
    if (!this._tokenService.isTokenActive()) {
      this._tokenService.refreshToken();
    }
    const headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this._tokenService.getToken(),
      'Content-Type': 'application/json'
    });
    return this._http.post(
      `${Config.URL}${url}`,
      params,
      {
        headers: headers
      })
      .map(response => response.json())
      .catch(this._handleError);
  }

  postFile(url: string, fileData: FormData): Observable<object> {
    if (!this._tokenService.isTokenActive()) {
      this._tokenService.refreshToken();
    }
    const headers: Headers = new Headers({
      'Authorization': 'Bearer ' + this._tokenService.getToken()
    });
    return this._http.post(
      `${Config.URL}${url}`,
      fileData,
      {
        headers: headers
      })
      .map(response => response.json())
      .catch(this._handleError);
  }

  private _handleError(error: Response): Observable<object> {
    console.log(error.json());
    return Observable.throw(error);
  }
}
