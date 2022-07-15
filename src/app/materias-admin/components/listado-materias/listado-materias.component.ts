import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Materia } from 'src/app/materias/components/listar-materias/Materia';
import { environment } from 'src/environments/environment';
import { EliminarMateriaDialogComponent } from '../eliminar-materia-dialog/eliminar-materia-dialog.component';
import { ListadoMateriasService } from './listado-materias.service';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.scss']
})
export class ListadoMateriasComponent implements OnInit, AfterViewInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    
    dataSource = new MatTableDataSource();
    displayedColumns = ['materia'];

    constructor(
        private serviceMaterias: ListadoMateriasService,
        private http: HttpClient,
        public dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.getMaterias();
    }


    getMaterias() {
        this.serviceMaterias.getAllMaterias().subscribe(materias => {
            this.dataSource.data = materias;
        });
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.dataSource.sortingDataAccessor = this.sortingDataAccesor;
    }

    sortingDataAccesor(row, sortHeaderId) {
        switch (sortHeaderId) {
            default: return row[sortHeaderId]
        }
    }

    deleteMateria(_, materia): void {
        const dialogRef = this.dialog.open(EliminarMateriaDialogComponent, {
            height: '200px',
            width: '500px',
            data: {
                id: materia.id,
                name: materia.name
            }
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.http.delete(`${environment.apiUrl}/materias/${materia.id}`).subscribe((response) => {
                    console.log(response);
                });
            }
        })
    }
}
