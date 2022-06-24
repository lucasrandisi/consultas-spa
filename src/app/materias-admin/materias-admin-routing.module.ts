import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMateriaComponent } from './components/crear-materia/crear-materia.component';
import { ListadoMateriasComponent } from './components/listado-materias/listado-materias.component';

const routes: Routes = [
	{
		path: '',
		component: ListadoMateriasComponent
	},
	{
		path: 'crear',
		component: CrearMateriaComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MateriasAdminRoutingModule { }