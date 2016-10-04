import { Component, OnInit } from '@angular/core';
import {OligosService} from "../oligos.service";
import {Oligo} from "../oligo";

@Component({
  selector: 'app-add-oligo',
  templateUrl: './add-oligo.component.html',
  styleUrls: ['./add-oligo.component.css']
})
export class AddOligoComponent implements OnInit {

  error = '';
  response = '';

  constructor(private oligoService: OligosService) { }

  ngOnInit() {
  }

  add_oligo(gene: string, mol_wt: number){
    gene = gene.trim();
    if(!gene && !mol_wt){return;}
    let oligo = new Oligo();
    oligo.gene = gene;
    oligo.molecular_weight = mol_wt;
    oligo.added_by = "web user";

    this.oligoService.create(oligo).subscribe(
      success =>{
        this.response = "Oligo successfully added to database!";
      },
      error => this.error = "Something went horribly wrong"
    )
  }

}
