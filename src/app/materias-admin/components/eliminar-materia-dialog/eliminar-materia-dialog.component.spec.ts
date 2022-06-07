import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMateriaDialogComponent } from './eliminar-materia-dialog.component';

describe('EliminarMateriaDialogComponent', () => {
  let component: EliminarMateriaDialogComponent;
  let fixture: ComponentFixture<EliminarMateriaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMateriaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMateriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
