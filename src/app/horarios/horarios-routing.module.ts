import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHorariosComponent } from './components/listar-horarios/listar-horarios.component';

const routes: Routes = [
  {
    path: '',
    component: ListarHorariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorariosRoutingModule { }