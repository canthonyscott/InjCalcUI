import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;

  constructor(private loginService: LoginService, private router: Router) { }

  login(username: string, password: string){
    this.loginService.getAuthToken(username, password)
      .subscribe(resp =>{
        this.token = resp;
        sessionStorage.setItem('auth_token', this.token);
        let link = [''];
        this.router.navigate(link);
      });
  }


  ngOnInit() {
  }

}
