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
  error = '';

  constructor(private loginService: LoginService, private router: Router) { }

  login(username: string, password: string){
    this.loginService.login(username, password)
      .subscribe(resp => {
        if(resp === true){
          // login successful
          this.router.navigate(['/']);
        } else {
          // login failed
          this.error = 'Username of password is incorrect';
        }
      });
  }


  ngOnInit() {
  }

}
