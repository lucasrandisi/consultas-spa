import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

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
export class ListadoComponent implements OnInit, AfterViewInit {

	dataSource = new MatTableDataSource();

    displayedColumns = ['id', 'rol', 'name', 'email'];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.getUsuarios();
    }
    
    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.dataSource.sortingDataAccessor = this.sortingDataAccesor;
    }

    sortingDataAccesor(row, sortHeaderId) {
        switch (sortHeaderId) {
            case 'rol': return row.rol.name
            default: return row[sortHeaderId]
        }
    }

	getUsuarios() {
        this.http.get(`${environment.apiUrl}/users`).subscribe((response: any) => {
            this.dataSource.data = response.data;
        });
	};



}
