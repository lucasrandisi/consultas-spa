import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
	},
	// Alumno
	{
		path: 'materias',
		loadChildren: () => import('./materias/materias.module').then(m => m.MateriasModule),
	},
	{
		path: 'horarios',
		loadChildren: () => import('./horarios/horarios.module').then(m => m.HorariosModule),
	},
	//Admin
	{
		path: 'admin-materias',
		loadChildren: () => import('./materias-admin/materias-admin.module').then(m => m.MateriasAdminModule),
	},
	{
		path: 'usuarios',
		loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
	},
	// Profesor
	{
		path: 'inscripciones',
		loadChildren: () => import('./inscripciones/inscripciones.module').then(m => m.InscripcionesModule),
	},
	{
		path: 'horarios-consulta',
		loadChildren: () => import('./horarios-consulta/horarios-consulta.module').then(m => m.HorariosConsultaModule),
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
