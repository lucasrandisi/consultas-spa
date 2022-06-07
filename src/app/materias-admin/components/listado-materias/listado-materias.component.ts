import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/materias/components/listar-materias/Materia';
import { ListadoMateriasService } from './listado-materias.service';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.scss']
})
export class ListadoMateriasComponent implements OnInit {

  filterMateria = '';
  
  materias: Materia[] = [];

  constructor(private serviceMaterias: ListadoMateriasService) { }

  ngOnInit(): void {
    this.serviceMaterias.getAllMaterias().subscribe(materias => {
      this.materias = materias;
    });
  }

}
