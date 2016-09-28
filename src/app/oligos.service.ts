import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import { Oligo } from './oligo';
import {LoginService} from "./login.service";
import {Observable} from "rxjs";

@Injectable()
export class OligosService {

  constructor(
    private http: Http,
    private loginService: LoginService
  ) { }

  private oligos_url = 'https://www.canthonyscott.com:1107/api/oligos/';
  private headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Token ' + this.loginService.getToken() });

  get_oligos(): Observable<any> {
    return this.http.get(this.oligos_url, {headers: this.headers})
      .map((response:Response) => response.json() as Oligo[])
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
    // return false;
  }




}
