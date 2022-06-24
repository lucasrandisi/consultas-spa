import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosConsultaRoutingModule } from './horarios-consulta-routing.module';
import { CrearHorarioconsultaComponent } from './Components/crear-horarioconsulta/crear-horarioconsulta.component';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'; 
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    CrearHorarioconsultaComponent
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
    MatSelectModule
  ]
})
export class HorariosConsultaModule { }
