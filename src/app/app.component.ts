import {Component, OnInit} from '@angular/core';
import {TokenService} from './shared/service/token/token.service';
import {GlobalDataService} from './shared/service/globaldata/globaldata.service';

@Component({
  selector: 'moltin-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class Moltin implements OnInit {

  constructor(private _tokenService: TokenService, private _globalDataService: GlobalDataService) {
  }

  ngOnInit() {
    if (localStorage.getItem('user_logged_in') === 'true') {
      this._globalDataService.isAuthenticated = true;
    }
  }

}

