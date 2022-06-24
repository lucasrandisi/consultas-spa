import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './shared/guards/logged-in.guard';
import { LoggedOutGuard } from './shared/guards/logged-out.guard';

const routes: Routes = [
	{
		path: '',
		canActivate: [LoggedOutGuard],
		children: [
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
		]
	},
	//Admin
	{
		path: 'admin-materias',
		canActivateChild: [LoggedInGuard],
		loadChildren: () => import('./materias-admin/materias-admin.module').then(m => m.MateriasAdminModule),
	},
	{
		path: 'usuarios',
		canActivateChild: [LoggedInGuard],
		loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
	},
	// Profesor
	{
		path: 'inscripciones',
		canActivateChild: [LoggedInGuard],
		loadChildren: () => import('./inscripciones/inscripciones.module').then(m => m.InscripcionesModule),
	},
	{
		path: 'horarios-consulta',
		canActivateChild: [LoggedInGuard],
		loadChildren: () => import('./horarios-consulta/horarios-consulta.module').then(m => m.HorariosConsultaModule),
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
