import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import { User } from './user';

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

@Injectable()
export class LoginService{

  private token: string;
  private headers = new Headers({'Content-Type': 'application/json'});
  private login_url = 'https://canthonyscott.com:1107/api/api-token-auth/';

  constructor(private http: Http) { }


  login(username: string, password: string): Observable<any> {
    return this.http
      .post(this.login_url, JSON.stringify({username: username, password:password}), {headers: this.headers})
      .map((response:Response) =>{
        // login if token is in response
        let token = response.json() && response.json().token;
        if(token){
          this.token = token;
          sessionStorage.setItem('auth_token', token);
          sessionStorage.setItem('username', username);
          // return true for successful login
          return true;
        } else {
          // return false for failure
          return false;
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: any): any {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return false;
    }

  logout(): void {
    this.token = null;
    sessionStorage.clear();
  }

  getToken(): string{
    return this.token;
}

  setToken(newToken: string): void {
    this.token = newToken;
  }




}
