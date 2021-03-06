import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { ListarHorariosComponent } from './components/listar-horarios/listar-horarios.component';
import { HorariosRoutingModule } from './horarios-routing.module';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ListarHorariosComponent,
    InscripcionComponent
  ],
  imports: [
    CommonModule,
    HorariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class HorariosModule { }
