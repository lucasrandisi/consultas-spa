import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Horarios } from '../../horarios.entities';
import { HorariosService } from '../../horarios.service';
import { InscripcionComponent } from '../inscripcion/inscripcion.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-horarios',
  templateUrl: './listar-horarios.component.html',
  styleUrls: ['./listar-horarios.component.scss']
})
export class ListarHorariosComponent implements OnInit {

  displayedColumns: string[] = ['dia', 'hora', 'profesor', 'accion'];
  horarios: Horarios[] = [];

  idMateria: number;

  constructor(
    private horariosService: HorariosService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idMateria = params['id'];
    });
    
    this.horariosService.getHorarios(this.idMateria).subscribe(datos => {
      this.horarios = datos;
    });
  }

  openInscripcionDialog(id: number): void {
    let dialogRef = this.dialog.open(InscripcionComponent, {
      height: '260px',
      width: '500px',
      data: id
    });
  }

}
