import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth/auth.service';
import {GlobalDataService} from '../service/globaldata/globaldata.service';

@Component({
  selector: 'moltin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthService, private _globalDataService: GlobalDataService) { }

  ngOnInit() {
  }

  logout(): void {
    this._authService.logout();
    this._router.navigate(['/']);
  }

}
