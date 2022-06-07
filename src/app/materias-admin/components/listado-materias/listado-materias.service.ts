import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from 'src/app/materias/components/listar-materias/Materia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListadoMateriasService {

  constructor(private http: HttpClient) { }

  getAllMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${environment.apiUrl}/horarios-consulta?materias`);
  }
}
