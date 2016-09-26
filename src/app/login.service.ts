import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { User } from './user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService{

  private headers = new Headers({'Content-Type': 'application/json'});

  private login_url = 'https://canthonyscott.com:1107/api/api-token-auth/';

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.log("My Error caught: ", error);
    return Promise.reject(error.message || error)
  }

  testServer(): Promise<string> {
    return this.http
      .get('https://canthonyscott.com:1107/api/')
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  getAuthToken(username: string, password: string): Promise<string> {
    return this.http
      .post(this.login_url, JSON.stringify({username: username, password:password}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }


}
