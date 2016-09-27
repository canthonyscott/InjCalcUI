/**
 * Created by Anthony on 9/27/2016.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){
    console.log("canActivate called");
    if (sessionStorage.getItem('auth_token')){
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;

  }
}
