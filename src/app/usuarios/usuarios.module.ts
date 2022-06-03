import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListadoComponent } from './components/listado/listado.component';

import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatNativeDateModule} from '@angular/material/core';

import { OrdinalPipe } from './components/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ListadoComponent,
    OrdinalPipe
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatTableDataSource,
    MatTableModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule

  ]
})
export class UsuariosModule { }
