import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosConsultaRoutingModule } from './horarios-consulta-routing.module';
import { ListadoComponent } from './components/listado/listado.component';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    HorariosConsultaRoutingModule
  ]
})
export class HorariosConsultaModule { }
