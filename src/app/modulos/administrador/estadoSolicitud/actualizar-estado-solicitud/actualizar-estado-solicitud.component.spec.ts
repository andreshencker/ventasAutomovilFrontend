import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEstadoSolicitudComponent } from './actualizar-estado-solicitud.component';

describe('ActualizarEstadoSolicitudComponent', () => {
  let component: ActualizarEstadoSolicitudComponent;
  let fixture: ComponentFixture<ActualizarEstadoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEstadoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEstadoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
