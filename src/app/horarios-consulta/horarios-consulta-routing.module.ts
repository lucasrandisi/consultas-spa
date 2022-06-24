import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearHorarioconsultaComponent } from './components/crear-horarioconsulta/crear-horarioconsulta.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: CrearHorarioconsultaComponent


  },
  {
  path:':id',
  component: ListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorariosConsultaRoutingModule { }
