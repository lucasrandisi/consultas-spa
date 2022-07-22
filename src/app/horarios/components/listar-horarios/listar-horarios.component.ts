import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Horarios } from '../../horarios.entities';
import { HorariosService } from '../../horarios.service';
import { InscripcionComponent } from '../inscripcion/inscripcion.component';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

export type HorarioConsulta = {
    id: number,
    profesor: any,
    materia: any,
};

@Component({
  selector: 'app-listar-horarios',
  templateUrl: './listar-horarios.component.html',
  styleUrls: ['./listar-horarios.component.scss']
})
export class ListarHorariosComponent implements OnInit {
    displayedColumns: string[] = ['dia', 'hora', 'profesor', 'accion'];
    horarios$: Observable<Horarios[]>;
    materiaId: number;
    durationInSeconds = 3;

    constructor(
        private horariosService: HorariosService,
        public dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            this.materiaId = params['id'];
        });
        
        this.horarios$ = this.horariosService.getHorarios(this.materiaId);
    }

    openInscripcionDialog(horarioConsulta: HorarioConsulta): void {
        let dialogRef = this.dialog.open(InscripcionComponent, {
            height: '260px',
            width: '500px',
            data: {
                horarioConsulta: horarioConsulta
            }
        });

        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                this._snackBar.open('Inscripto a horario de consulta', 'Cerrar', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'end',
                    panelClass: ['success']
                });
            }
        });
    }
}
