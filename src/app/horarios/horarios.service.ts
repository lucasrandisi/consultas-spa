import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Horarios } from './horarios.entities';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor() { }

  getHorarios(): Observable<Horarios[]> {
    return of([
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      },
      {
        fecha: '12/04 18:00',
        profesor: 'Julio profe',
        esPresencial: true
      }
    ])
  }
}
