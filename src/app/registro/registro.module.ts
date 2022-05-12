import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './components/registro/registro.component';

import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    MatFormFieldModule
  ]
})
export class RegistroModule { }
