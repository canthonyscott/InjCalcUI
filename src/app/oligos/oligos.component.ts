import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-oligos',
  templateUrl: './oligos.component.html',
  styleUrls: ['./oligos.component.css']
})
export class OligosComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  token = 'test';

  getIt(): void{
    this.token = this.loginService.getToken();
  }

  ngOnInit() {
  }

}
