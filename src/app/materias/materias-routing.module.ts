import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMateriasComponent } from './components/listar-materias/listar-materias.component';
import { CrearMateriaComponent } from './components/crear-materia/crear-materia.component';


const routes: Routes = [
  {
    path: '',
    component: ListarMateriasComponent
  },
  {
    path: 'crear_materia',
    component: CrearMateriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
