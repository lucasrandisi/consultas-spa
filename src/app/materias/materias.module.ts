import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { ListarMateriasComponent } from './components/listar-materias/listar-materias.component';



import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
	declarations: [
		ListarMateriasComponent,
	],
	imports: [
		CommonModule,
		MateriasRoutingModule,
		MatButtonModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
        MatTableModule,
        MatIconModule
	]
})
export class MateriasModule { }
