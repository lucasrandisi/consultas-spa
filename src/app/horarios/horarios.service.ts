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

  getHorarios(): Observable<Horarios[]> {
    return this.http.get<Horarios[]>(`${environment.apiUrl}/horarios-consulta`);
  }
}
