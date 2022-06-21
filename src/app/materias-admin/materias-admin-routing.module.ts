import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListadoMateriasComponent } from './components/listado-materias/listado-materias.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoMateriasComponent
  },
  {
    path: 'crear_usuario',
    component: CrearUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasAdminRoutingModule { }