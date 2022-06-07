import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMateriasComponent } from './components/listado-materias/listado-materias.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoMateriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasAdminRoutingModule { }