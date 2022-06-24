import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasAdminRoutingModule } from './materias-admin-routing.module';
import { ListadoMateriasComponent } from './components/listado-materias/listado-materias.component';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { EliminarMateriaDialogComponent } from './components/eliminar-materia-dialog/eliminar-materia-dialog.component';
import { CrearMateriaComponent } from './components/crear-materia/crear-materia.component';

@NgModule({
	declarations: [
		ListadoMateriasComponent,
		EliminarMateriaDialogComponent,
		CrearMateriaComponent
	],
	imports: [
		CommonModule,
		MatButtonModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MateriasAdminRoutingModule,
		MatDialogModule,
		ReactiveFormsModule,
		MatTableModule
	]
})
export class MateriasAdminModule { }
