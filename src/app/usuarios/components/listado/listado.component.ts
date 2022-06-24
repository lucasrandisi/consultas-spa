import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';

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

	displayedColumns = ['id','rol_id','email','usuario'];

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort, {}) sort: MatSort;

	constructor(private http: HttpClient) { }


	ngOnInit() {
		this.getUsuarios();

	}

	getUsuarios() {
		this.http.get(`${environment.apiUrl}/users`).subscribe((response: any) => {
			console.log(response);
			this.dataSource = response;
		}
		)
	};



}
