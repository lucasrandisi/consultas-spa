import { Component, OnInit } from '@angular/core';
import { Horarios } from '../../horarios.entities';
import { HorariosService } from '../../horarios.service';

@Component({
  selector: 'app-listar-horarios',
  templateUrl: './listar-horarios.component.html',
  styleUrls: ['./listar-horarios.component.scss']
})
export class ListarHorariosComponent implements OnInit {

  displayedColumns: string[] = ['fecha', 'profesor', 'presencial/virtual', 'accion'];
  horarios: Horarios[] = [];

  constructor(private horariosService: HorariosService) { }

  ngOnInit(): void {
    this.horariosService.getHorarios().subscribe(datos => {
      this.horarios = datos;
    });
  }

}
