import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horarios } from './horarios.entities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) { }

  getHorarios(idMateria: number): Observable<Horarios[]> {
    return this.http.get<Horarios[]>(`${environment.apiUrl}/horarios-consulta?filters[materia_id]=${idMateria}`);
  }
}
