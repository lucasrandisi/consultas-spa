import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHorarioconsultaComponent } from './crear-horarioconsulta.component';

describe('CrearHorarioconsultaComponent', () => {
  let component: CrearHorarioconsultaComponent;
  let fixture: ComponentFixture<CrearHorarioconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHorarioconsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHorarioconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
