import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Materias } from './Materias';
import { MatSort } from '@angular/material/sort';/**nuevo y el viewchild de import numero 2*/
import { MatTableDataSource } from '@angular/material/table'
import { DataSource } from '@angular/cdk/table';
/**nuevo */


@Component({
  selector: 'app-listar-materias',
  templateUrl: './listar-materias.component.html',
  styleUrls: ['./listar-materias.component.scss']
})

export class ListarMateriasComponent implements OnInit {

    /**nuevo 
    dataSource;
    displayedColumns = [];
    @ViewChild(MatSort) sort: MatSort;
    */
    columnNames = [{
      id: 'position',
      value: 'No.',
  
    }, {
      id: 'name',
      value: 'Name',
    },
      {
        id: 'weight',
        value: 'Weight',
      },
      {
        id: 'symbol',
        value: 'Symbol',
      }];
    /**nuevo */

  materias: Materias[] = [];

  constructor(private http: HttpClient) { }

  filterPost ='';

  ngOnInit(): void {
      this.get_materias();
      /**nuevo 
      this.displayedColumns = this.columnNames.map(x => x.id);
      this.createTable();
       */
  }

  /**nuevo 
  createTable() {
    let tableArr: Element[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    ];
    this.dataSource = new MatTableDataSource(tableArr);
    this.dataSource.sort = this.sort;
  }
  /**nuevo */

  get_materias(){
      this.http.get(`${environment.apiUrl}/materias`,{
        params: {
        }
  }).subscribe((response:any)=>{
    console.log(response)
      this.materias = [];
      for(let materia of response){
          this.materias.push(
              new Materias(materia.id,materia.name)
          );
      }
  }
  )
  }
}
/**nuevo */
export interface Element {
  position: number,
  name: string,
  weight: number,
  symbol: string
}
/**nuevo */
