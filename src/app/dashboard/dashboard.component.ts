import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    let stored_token = this.loginService.fetchStoredToken();
    if(stored_token == null ){
      // USER IS NOT LOGGED IN - ROUTE TO LOGIN
      let link = ['/login'];
      this.router.navigate(link);
    }
  }

  logout(): void{
    this.loginService.logout();
  }


}
