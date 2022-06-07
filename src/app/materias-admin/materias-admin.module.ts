import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasAdminRoutingModule } from './materias-admin-routing.module';
import { FilterPipe } from '../materias/pipes/filter.pipe';
import { ListadoMateriasComponent } from './components/listado-materias/listado-materias.component';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ListadoMateriasComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MateriasAdminRoutingModule
  ]
})
export class MateriasAdminModule { }
