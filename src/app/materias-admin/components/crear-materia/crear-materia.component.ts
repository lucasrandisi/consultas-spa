import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Materia } from 'src/app/materias/components/listar-materias/Materia';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-crear-materia',
	templateUrl: './crear-materia.component.html',
	styleUrls: ['./crear-materia.component.scss']
})
export class CrearMateriaComponent implements OnInit {
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
			name: new FormControl()
		});
	}

    add_materia() {
        this.http.post(`${environment.apiUrl}/materias`, this.form.value)
            .subscribe({
                next: () => {
                    this.router.navigate(['..'], { relativeTo: this.route});
                },
                error: (response) => {
                    this.error = response.error.message
                }
        })
	}

}
