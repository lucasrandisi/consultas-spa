import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { ListarMateriasComponent } from './components/listar-materias/listar-materias.component';

import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    ListarMateriasComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    MatTableModule
  ]
})
export class MateriasModule { }
