import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosConsultaRoutingModule } from './horarios-consulta-routing.module';
import { ListadoComponent } from './components/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    HorariosConsultaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class HorariosConsultaModule { }
