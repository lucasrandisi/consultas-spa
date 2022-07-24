import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Inscripcion } from '../../horarios.entities';
import { HorarioConsulta } from '../listar-horarios/listar-horarios.component';
import { InscripcionService } from './inscripcion.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    horarioConsulta: HorarioConsulta;
    inscripcion: Inscripcion;

    constructor(
        public dialogRef: MatDialogRef<InscripcionComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private inscripcionService: InscripcionService,
        private _snackBar: MatSnackBar
    ) {
        this.horarioConsulta = data.horarioConsulta;
    }

    ngOnInit(): void {
    }

    inscribirse(): void {
        if (!this.emailFormControl.hasError('required') && !this.emailFormControl.hasError('email')) {
            this.inscripcion = {
                email: this.emailFormControl.value,
                horario_consulta_id: this.horarioConsulta.id
            };
                
            this.inscripcionService.inscribirConsulta(this.inscripcion).subscribe({
                next: data => {
                    this.dialogRef.close(data);
                },
                error: error => {
                    this._snackBar.open('Error al inscribirse en la consulta: ' + error.error.message, 'Cerrar', {
                        duration: 5000,
                        verticalPosition: 'bottom',
                        horizontalPosition: 'end',
                        panelClass: ['error']
                    });
                }
            });
        }
    }

    closeDialog() {
        this.dialogRef.close();
    }

}
