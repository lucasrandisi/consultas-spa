import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoComponent
  },
  {
    path: 'crear',
    component: CrearUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
