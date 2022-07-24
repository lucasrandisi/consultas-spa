import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inscripcion } from '../../horarios.entities';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private http: HttpClient) { }

  inscribirConsulta(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http.post<Inscripcion>(`${environment.apiUrl}/consultas`, inscripcion);
  }
}
