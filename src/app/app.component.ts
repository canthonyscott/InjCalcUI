import { Component, OnInit } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  auth_token: any;

  ngOnInit(){
    // get auth_token from sessionStorage
  this.auth_token = sessionStorage.getItem('auth_token');
    // if it doesnt exist, set to false => this will display login prompt
    if (this.auth_token == null){
      this.auth_token = false;
    }

  }

}
