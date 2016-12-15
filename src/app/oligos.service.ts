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

  private oligos_url = 'api/oligos/';
  private headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Token ' + this.loginService.getToken() });

  retrieve(): Observable<any> {
    return this.http.get(this.oligos_url, {headers: this.headers})
      .map((response:Response) => response.json() as Oligo[])
      .catch(this.handleError);
  }

  destroy(oligo: Oligo): Promise<any> {
    let del_url = this.oligos_url + oligo.pk.toString() + '/';
    console.log(del_url);
    return this.http.delete(del_url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  create(oligo: Oligo): Observable<any> {
    return this.http.post(this.oligos_url, JSON.stringify(oligo), {headers: this.headers})
      .map((response: Response) => console.log(response))
      .catch(this.handleError);
  }

  update(oligo: Oligo): Observable<any> {
    let put_url = this.oligos_url + oligo.pk.toString() + '/';
    return this.http.put(put_url, JSON.stringify(oligo), {headers: this.headers})
      .map((response: Response) => console.log(response))
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
