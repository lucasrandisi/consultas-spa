import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Materia } from './Materia';



@Component({
  selector: 'app-listar-materias',
  templateUrl: './listar-materias.component.html',
  styleUrls: ['./listar-materias.component.scss']
})

export class ListarMateriasComponent implements OnInit {

  filterMateria = '';
  
  materias: Materia[] = [];

  constructor(private http: HttpClient) { }



  ngOnInit(): void {
      this.get_materias();
  }

  get_materias(){
      this.http.get(`${environment.apiUrl}/materias`,{
        params: {
        }
    }).subscribe((response:any)=>{
      console.log(response)
        this.materias = [];
        for(let materia of response){
            this.materias.push(
                new Materia(materia.id,materia.name)
            );
        }
    }
  )
  };
  

}
