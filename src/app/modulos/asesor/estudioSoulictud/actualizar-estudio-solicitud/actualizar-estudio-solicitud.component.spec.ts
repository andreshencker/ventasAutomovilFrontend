import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEstudioSolicitudComponent } from './actualizar-estudio-solicitud.component';

describe('ActualizarEstudioSolicitudComponent', () => {
  let component: ActualizarEstudioSolicitudComponent;
  let fixture: ComponentFixture<ActualizarEstudioSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEstudioSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEstudioSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
