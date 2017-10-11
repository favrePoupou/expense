
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UserApi } from './../shared/sdk/services/custom/User';

@Injectable()
export class AuthGuard implements CanActivate  {

  constructor(
     private router: Router,
    // private auth: AuthService
    private userApi: UserApi
    ) {}
  
    canActivate() {
      if (this.userApi.isAuthenticated()) {
        //console.log('AUTHENTIFIE',this.userApi.isAuthenticated());
        return true;
      } else {
        //console.log('NON - AUTHENTIFIE',this.userApi.isAuthenticated());
        this.router.navigate(['/login']);
        return true;
      }
    }
}
