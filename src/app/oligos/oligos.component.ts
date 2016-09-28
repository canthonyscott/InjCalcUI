import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {OligosService} from "../oligos.service";
import { Oligo } from'../oligo';

@Component({
  selector: 'app-oligos',
  templateUrl: './oligos.component.html',
  styleUrls: ['./oligos.component.css']
})
export class OligosComponent implements OnInit {

  oligos: Oligo[];

  constructor(
    private loginService: LoginService,
    private oligoService: OligosService) { }


  ngOnInit() {
    this.oligoService.get_oligos()
      .subscribe(
        oligos => this.oligos = oligos,
        error => console.log(error)
      )
  }

}
