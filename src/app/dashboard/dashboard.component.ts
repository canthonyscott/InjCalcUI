import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  test = 'test';
  constructor(private router: Router) { }


  ngOnInit() {
    if(sessionStorage.getItem('auth_token') == null ){
      // USER IS NOT LOGGED IN - ROUTE TO LOGIN
      let link = ['/login'];
      this.router.navigate(link);
    }
    // TODO Load a menu of options to do (Show Oligos, Add Oligo, Delete Oligos, History?)
    // else{
    //   let link = ['/oligos'];
    //   this.router.navigate(link);
    // }
  }

}
