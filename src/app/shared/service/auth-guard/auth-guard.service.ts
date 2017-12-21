import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { GlobalDataService } from '../globaldata/globaldata.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router, private _globalDataService: GlobalDataService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // if (this._globalDataService.isAuthenticated) {
    //   this._router.navigate(['/dashboard']);
    //   return true;
    // }
    // else {
    //   this._router.navigate(['/']);
    //   return false;
    // }
    return false;
  }

}
