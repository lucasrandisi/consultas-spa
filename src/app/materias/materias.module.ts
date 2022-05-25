import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { ListarMateriasComponent } from './components/listar-materias/listar-materias.component';


import { FilterPipe } from './pipes/filter.pipe';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    ListarMateriasComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
		MatButtonModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule
  ]
})
export class MateriasModule { }
