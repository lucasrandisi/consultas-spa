import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-dialog',
  templateUrl: './eliminar-dialog.component.html',
  styleUrls: ['./eliminar-dialog.component.scss']
})
export class EliminarDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<EliminarDialogComponent>,
    ) { }

    ngOnInit(): void {
    }

    close(result: boolean): void {
        this.dialogRef.close(result);
    }
}
