import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListadoComponent } from './components/listado/listado.component';

import { HttpClientModule } from '@angular/common/http';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatIcon, MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatTooltipModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class UsuariosModule { }
