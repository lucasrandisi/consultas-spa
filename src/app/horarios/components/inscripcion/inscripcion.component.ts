import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscripcion } from '../../horarios.entities';
import { HorariosService } from '../../horarios.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  id: number;
  inscripcion: Inscripcion;

  constructor(public dialogRef: MatDialogRef<InscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private horariosService: HorariosService) { this.id = data }

  ngOnInit(): void {
  }

  inscribirse(): void {
    if (!this.emailFormControl.hasError('required') && !this.emailFormControl.hasError('email')) {
      this.inscripcion = {
        email: this.emailFormControl.value,
        horario_consulta_id: this.id
      };
      this.horariosService.inscribirConsulta(this.inscripcion).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
