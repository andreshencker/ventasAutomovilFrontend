import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstudioSolicitudComponent } from './listar-estudio-solicitud.component';

describe('ListarEstudioSolicitudComponent', () => {
  let component: ListarEstudioSolicitudComponent;
  let fixture: ComponentFixture<ListarEstudioSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEstudioSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstudioSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
