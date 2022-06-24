import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Materia } from 'src/app/materias/components/listar-materias/Materia';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';
import { Horarios } from '../../horarios';

@Component({
	selector: 'app-crear-horarioconsulta',
	templateUrl: './crear-horarioconsulta.component.html',
	styleUrls: ['./crear-horarioconsulta.component.scss']
})
export class CrearHorarioconsultaComponent implements OnInit {

	form: FormGroup;
	idMateria: number;
	materias: Materia[] = [];

	constructor(public authService: AuthService, private http: HttpClient, private router: Router) { }

	ngOnInit(): void {
		this.initializeForm()
		this.get_materias()
	}

	initializeForm() {
		this.form = new FormGroup({
			day: new FormControl(),
			hour: new FormControl(),
			id_materia: new FormControl()

		});
	}

	add_horario() {
		let day = this.form.value['day'];
		let hour = this.form.value['hour'];
		let id_materia = this.form.value['id_materia'];
		let id_profesor = this.authService.currentUser.id;

		this.http.post(`${environment.apiUrl}/horarios-consulta?profesor_id=${id_profesor}&materia_id=${id_materia}&date_hour=${day}${hour}`, {
			day: day,
			hour: hour,
			id_materia: id_materia,
			id_profesor: id_profesor,

		}).subscribe((response: any) => {
			this.router.navigate([`/horarios-consulta/${this.authService.currentUser.rol_id}`]);
		})
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
}
