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
  selectedOligo: Oligo;

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

  updateSelectedOligo(oligo: Oligo): void {
    this.selectedOligo = oligo;
  }

  deleteOligo(oligo: Oligo): void {
    this.oligoService.destroy(oligo)
      .then(()=>{
        this.oligos = this.oligos.filter(o => o !== oligo);
        if (this.selectedOligo === oligo){this.selectedOligo = null}
      })
  }
}
