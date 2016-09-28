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
      .subscribe(
        login => {
          if(login === true){this.router.navigate(['/']);}
        },
        error => this.error = "Username or password is incorrect"
      );
  }


  ngOnInit() {
  }

}
