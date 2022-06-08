import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { ListarMateriasComponent } from './components/listar-materias/listar-materias.component';
import { CrearMateriaComponent } from './components/crear-materia/crear-materia.component';

import { FilterPipe } from './pipes/filter.pipe';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    ListarMateriasComponent,
    FilterPipe,
    CrearMateriaComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
		MatButtonModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
    ReactiveFormsModule
  ]
})
export class MateriasModule { }
