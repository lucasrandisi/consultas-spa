import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Horarios } from './horarios.entities';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor() { }

  // TODO: consumir api cuando haya datos reales
  getHorarios(): Observable<Horarios[]> {
    return of([
      {
        id: 1,
        user_id: 1,
        materia_id: 1,
        dia: '18/04',
        hora: '18:00',
        profesor: 'julio profe'
      },
      {
        id: 2,
        user_id: 1,
        materia_id: 1,
        dia: '18/04',
        hora: '18:00',
        profesor: 'julio profe'
      },
      {
        id: 3,
        user_id: 1,
        materia_id: 1,
        dia: '18/04',
        hora: '18:00',
        profesor: 'julio profe'
      },
      {
        id: 4,
        user_id: 1,
        materia_id: 1,
        dia: '18/04',
        hora: '18:00',
        profesor: 'julio profe'
      },
      {
        id: 5,
        user_id: 1,
        materia_id: 1,
        dia: '18/04',
        hora: '18:00',
        profesor: 'julio profe'
      },
      {
        id: 6,
        user_id: 1,
        materia_id: 1,
        dia: '18/04',
        hora: '18:00',
        profesor: 'julio profe'
      },
      {
        id: 7,
        user_id: 1,
        materia_id: 1,
        dia: '18/04',
        hora: '18:00',
        profesor: 'julio profe'
      },
      {
        id: 8,
        user_id: 1,
        materia_id: 1,
        dia: '18/04',
        hora: '18:00',
        profesor: 'julio profe'
      },
      {
        id: 9,
        user_id: 1,
        materia_id: 1,
        dia: '18/04',
        hora: '18:00',
        profesor: 'julio profe'
      },
      {
        id: 10,
        user_id: 1,
        materia_id: 1,
        dia: '18/04',
        hora: '18:00',
        profesor: 'julio profe'
      }
    ])
  }
}
