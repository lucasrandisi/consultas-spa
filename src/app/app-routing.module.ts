import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'materias',
		loadChildren: () => import('./materias/materias.module').then(m => m.MateriasModule),
	},
	{
		path: 'horarios',
		loadChildren: () => import('./horarios/horarios.module').then(m => m.HorariosModule),
	},
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
