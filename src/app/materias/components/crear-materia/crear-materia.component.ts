import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Materia } from '../listar-materias/Materia';

@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.scss']
})
export class CrearMateriaComponent implements OnInit {
  form: FormGroup;

  materia: Materia[] = [];

  constructor(
    private http: HttpClient, private route: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
        matter: new FormControl()
    });
  }

  add_matter(){
    let matter = this.form.value['matter'];

    console.log(this.form.value);

    this.http.post(`${environment.apiUrl}/materias`,{
      name: matter
  }).subscribe((response:any)=>{

    let max=0;
    
    for(let e of this.materia){
      if(e.id > max){
        max = e.id;
      }
    }
    max = max + 1;

    this.materia.push(
          new Materia(max,matter)
    );
  }
)}

}
