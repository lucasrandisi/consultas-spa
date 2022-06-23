import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HorarioProfesor } from '../../horarioprofesor.entities';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  displayedColumns: string[] = ['dia', 'hora', 'materia', 'accion'];
  horarios: HorarioProfesor[] = [];
  idProfesor: string;

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.idProfesor = this.route.snapshot.paramMap.get('id');
    console.log(this.idProfesor);
    this.get_materias_profesor(this.idProfesor);
  }

  get_materias_profesor(idProfesor:string){ 
    this.http.get<HorarioProfesor[]>(`${environment.apiUrl}/horarios-consulta?filters[profesor_id]=${idProfesor}`).subscribe(datos => {
      this.horarios = datos;
    });
  }
  // Falta ver que parametros le envio al delete
  eliminar_materia(idMateria: number) : void{
    console.log(idMateria);
    //this.http.delete();
    

  }

}
