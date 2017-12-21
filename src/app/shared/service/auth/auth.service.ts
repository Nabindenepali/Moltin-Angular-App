import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {TokenService} from '../token/token.service';
import {GlobalDataService} from '../globaldata/globaldata.service';

@Injectable()
export class AuthService {
  constructor(private _http: Http, private _tokenService: TokenService, private _globalDataService: GlobalDataService) {
  }

  login(): void {
    this._globalDataService.isAuthenticated = true;
    this._tokenService.getNewToken().subscribe(response => {
      localStorage.setItem('moltin_token', response['access_token']);
      localStorage.setItem('moltin_expiry', response['expires']);
      localStorage.setItem('user_logged_in', 'true');
    });
  }

  logout(): void {
    this._globalDataService.isAuthenticated = false;
    localStorage.removeItem('moltin_token');
    localStorage.removeItem('moltin_expiry');
    localStorage.removeItem('user_logged_in');
  }

}
