import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarHorariosComponent } from './components/listar-horarios/listar-horarios.component';
import { HorariosRoutingModule } from './horarios-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListarHorariosComponent
  ],
  imports: [
    CommonModule,
    HorariosRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class HorariosModule { }
