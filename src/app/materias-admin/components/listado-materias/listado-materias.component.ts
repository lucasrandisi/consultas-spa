import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Materia } from 'src/app/materias/components/listar-materias/Materia';
import { EliminarMateriaDialogComponent } from '../eliminar-materia-dialog/eliminar-materia-dialog.component';
import { ListadoMateriasService } from './listado-materias.service';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.scss']
})
export class ListadoMateriasComponent implements OnInit {

  filterMateria = '';
  displayedColumns = ['materia', 'accion']
  materias: Materia[] = [];

  constructor(private serviceMaterias: ListadoMateriasService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.serviceMaterias.getAllMaterias().subscribe(materias => {
      this.materias = materias;
    });
  }

  openDeleteDialog(materiaID: number, nombreMateria: string): void {
    this.dialog.open(EliminarMateriaDialogComponent, {
      height: '200px',
      width: '500px',
      data: {
        id: materiaID,
        name: nombreMateria
      }
    });
  }
}
