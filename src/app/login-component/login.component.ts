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
  response: string = "before";

  constructor(private loginService: LoginService) { }

  login(username: string, password: string){
    // this.loginService.getAuthToken(username, password).then(res => console.log(res));
    this.loginService.testServer().then(res => this.response = res);
  }


  ngOnInit() {
  }

}
