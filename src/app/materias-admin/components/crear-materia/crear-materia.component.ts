import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Materia } from 'src/app/materias/components/listar-materias/Materia';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-crear-materia',
	templateUrl: './crear-materia.component.html',
	styleUrls: ['./crear-materia.component.scss']
})
export class CrearMateriaComponent implements OnInit {
	form: FormGroup;

	materia: Materia[] = [];

	constructor(
		private http: HttpClient, private router: Router
	) { }

	ngOnInit(): void {
		this.initializeForm();
	}

	initializeForm() {
		this.form = new FormGroup({
			name: new FormControl()
		});
	}

	add_materia() {
		let materia = this.form.value['name'];

		console.log(this.form.value);

		this.http.post(`${environment.apiUrl}/materias`, {
			...this.form.value
		}).subscribe((response: any) => {
			this.router.navigate(['/admin-materias']);
		}
		)
	}

}
