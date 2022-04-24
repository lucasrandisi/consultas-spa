import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMateriasComponent } from './components/listar-materias/listar-materias.component';

const routes: Routes = [
  {
    path: '',
    component: ListarMateriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
