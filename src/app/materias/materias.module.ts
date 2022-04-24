import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { ListarMateriasComponent } from './components/listar-materias/listar-materias.component';


@NgModule({
  declarations: [
    ListarMateriasComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule
  ]
})
export class MateriasModule { }
