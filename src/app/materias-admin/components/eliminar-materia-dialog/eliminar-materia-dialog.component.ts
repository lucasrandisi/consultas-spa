import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-materia-dialog',
  templateUrl: './eliminar-materia-dialog.component.html',
  styleUrls: ['./eliminar-materia-dialog.component.scss']
})
export class EliminarMateriaDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EliminarMateriaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number, name: string}) { }

  ngOnInit(): void {
  }

}
