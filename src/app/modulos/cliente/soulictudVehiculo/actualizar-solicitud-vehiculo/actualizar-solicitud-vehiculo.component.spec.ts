import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSolicitudVehiculoComponent } from './actualizar-solicitud-vehiculo.component';

describe('ActualizarSolicitudVehiculoComponent', () => {
  let component: ActualizarSolicitudVehiculoComponent;
  let fixture: ComponentFixture<ActualizarSolicitudVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarSolicitudVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarSolicitudVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
