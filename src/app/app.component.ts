import { Component, OnInit } from '@angular/core';
import './rxjs-operators';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  auth_token: any;

  constructor(private router: Router, private loginService: LoginService){}

  ngOnInit(){

  }

  logout(): void{
    this.loginService.logout();
  }

}
