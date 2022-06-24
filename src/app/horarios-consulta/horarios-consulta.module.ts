import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosConsultaRoutingModule } from './horarios-consulta-routing.module';
import { CrearHorarioconsultaComponent } from './Components/crear-horarioconsulta/crear-horarioconsulta.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    CrearHorarioconsultaComponent,
    ListadoComponent
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
  ]
})
export class HorariosConsultaModule { }
