import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { Usuario } from './usuarios';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

	dataSource = new MatTableDataSource();

	displayedColumns = ['usuario', 'agregar'];

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort, {}) sort: MatSort;

	constructor(private http: HttpClient, private authService: AuthService) { }


	ngOnInit() {
		this.getUsuarios();
		console.log(this.authService.accessToken);

	}

	getUsuarios() {
		this.http.get(`${environment.apiUrl}/users`).subscribe((response: any) => {
			console.log(response);
			this.dataSource = response;
		}
		)
	};



}
