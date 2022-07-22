import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';
import { HorarioProfesor } from '../../horarioprofesor.entities';
import { EliminarDialogComponent } from '../eliminar-dialog/eliminar-dialog.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
    displayedColumns: string[] = ['dia', 'hora', 'materia', 'inscriptos', 'accion'];
    dataSource = new MatTableDataSource();
    status;
    errorMessage;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private http: HttpClient,
        private authService: AuthService,
        public dialog: MatDialog,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        this.get_materias_profesor();
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.dataSource.sortingDataAccessor = this.sortingDataAccesor;
    }


    sortingDataAccesor(row, sortHeaderId) {
        switch (sortHeaderId) {
            case 'dia': return row.date_hour;
            case 'materia': return row.materia.name;
            default: return row[sortHeaderId]
        }
    }

    get_materias_profesor() { 
        const idProfesor = this.authService.currentUser.id;

        this.http.get<HorarioProfesor[]>(`${environment.apiUrl}/horarios-consulta?filters[profesor_id]=${idProfesor}`)
            .subscribe(data => {
                this.dataSource.data = data;
            });
    }


    eliminar_materia(idMateria: number): void{
        const dialogRef = this.dialog.open(EliminarDialogComponent, {
            width: '500px',
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.http.delete(`${environment.apiUrl}/horarios-consulta/${idMateria}`).subscribe({
                    next: data => {
                        this._snackBar.open('Consulta eliminada', 'Cerrar', {
                            duration: 3000,
                            verticalPosition: 'bottom',
                            horizontalPosition: 'end',
                            panelClass: ['success']
                        });

                        this.get_materias_profesor();
                    },
                    error: error => {
                        this.errorMessage = error.message;
                        console.error('Hubo un error', error);
                    }
                });
            }
        });
    }
}
