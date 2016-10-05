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
  disabled: boolean = true;
  response: string = '';
  error: string = '';

  constructor(
    private loginService: LoginService,
    private oligoService: OligosService) { }


  ngOnInit() {
    this.oligoService.retrieve()
      .subscribe(
        oligos => this.oligos = oligos,
        error => console.log(error)
      )
  }

  updateSelectedOligo(oligo: Oligo): void {
    this.selectedOligo = oligo;
    this.disabled = true;
    this.response = '';
    this.error = '';
  }

  deleteOligo(oligo: Oligo): void {
    this.oligoService.destroy(oligo)
      .then(()=>{
        this.oligos = this.oligos.filter(o => o !== oligo);
        if (this.selectedOligo === oligo){this.selectedOligo = null}
      })
  }

  enable_edit(): void {
    this.disabled = false;
  }

  update_edits(oligo: Oligo): void{
    oligo.added_by = 'edited by web user';
    this.oligoService.update(oligo)
      .subscribe(
        response => this.response = "Successfully updated oligo!",
        error => this.error = "Something went horribly wrong!"
      );
    this.disabled = true;
  }
}
