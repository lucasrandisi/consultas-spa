import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearHorarioconsultaComponent } from './Components/crear-horarioconsulta/crear-horarioconsulta.component';

const routes: Routes = [
  {
    path: '',
    component: CrearHorarioconsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorariosConsultaRoutingModule { }
