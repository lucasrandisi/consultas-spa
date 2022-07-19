import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-crear-usuario',
	templateUrl: './crear-usuario.component.html',
	styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
    form: FormGroup;
    error: string | null;

	constructor(
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
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
        
        if (!this.form.valid) {
            return;
        }


		this.http.post(`${environment.apiUrl}/users`, {
			name: name,
			email: email,
			password: password,
			rol_id: rol_id,

        }).subscribe({
            next: () => {
                this.router.navigate(['..'], { relativeTo: this.route });
            },
            error: (response) => {
                for (const error of Object.values(response.error.errors)) {
                    this.error = error[0];
                    return;
                }
            }
        });
	}

}
