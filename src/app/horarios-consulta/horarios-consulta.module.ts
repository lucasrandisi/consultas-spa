import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosConsultaRoutingModule } from './horarios-consulta-routing.module';
import { CrearHorarioconsultaComponent } from './components/crear-horarioconsulta/crear-horarioconsulta.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EliminarDialogComponent } from './components/eliminar-dialog/eliminar-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CrearHorarioconsultaComponent,
    ListadoComponent,
    EliminarDialogComponent
  ],
  imports: [
    CommonModule,
    HorariosConsultaRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
    
  ]
})
export class HorariosConsultaModule { }
