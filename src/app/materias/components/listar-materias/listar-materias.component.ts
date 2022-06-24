import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Materia } from './Materia';
import { MatTableDataSource } from '@angular/material/table';


@Component({
	selector: 'app-listar-materias',
	templateUrl: './listar-materias.component.html',
	styleUrls: ['./listar-materias.component.scss']
})

export class ListarMateriasComponent implements OnInit {

	displayedColumns: string[] = ['materia', 'accion'];
	materias: Materia[] = [];
	dataSource: any;

	constructor(private http: HttpClient, private route: Router) { }



	ngOnInit(): void {
		this.dataSource = new MatTableDataSource(this.materias);
		this.get_materias();
	}


	get_materias() {
		this.http.get(`${environment.apiUrl}/materias`, {
			params: {
			}
		}).subscribe((response: any) => {
			this.materias = [];
			for (let materia of response) {
				this.materias.push(
					new Materia(materia.id, materia.name)
				);
			}
		}
		)
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	verHorarios(id: number): void {
		this.route.navigate(['horarios'], { queryParams: { id } })
	}

}
