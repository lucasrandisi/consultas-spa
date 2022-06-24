import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuario } from './Usuario';

@Component({
	selector: 'app-crear-usuario',
	templateUrl: './crear-usuario.component.html',
	styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
	form: FormGroup;

	constructor(
		private http: HttpClient, private router: Router
	) { }

	ngOnInit(): void {
		this.initializeForm();
	}

	initializeForm() {
		this.form = new FormGroup({
			name: new FormControl(),
			email: new FormControl(),
			password: new FormControl(),
			rol: new FormControl()

		});
	}

	add_usuario() {
		let name = this.form.value['name'];
		let email = this.form.value['email'];
		let password = this.form.value['password'];
		let rol_id = this.form.value['rol'];


		this.http.post(`${environment.apiUrl}/users`, {
			name: name,
			email: email,
			password: password,
			rol_id: rol_id,

		}).subscribe((response: any) => {
			this.router.navigate(['']);
		});
	}

}
