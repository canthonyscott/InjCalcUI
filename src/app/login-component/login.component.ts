import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;
  authorized: boolean = false;

  constructor(private loginService: LoginService) { }

  login(username: string, password: string){
    // this.loginService.getAuthToken(username, password).then(res => this.response = res.valueOf());
    // this.loginService.testServer().then(res => this.response = res);
    this.loginService.getAuthToken(username, password)
      .subscribe(resp => this.token = resp);
    this.authorized = true;
  }


  ngOnInit() {
  }

}
