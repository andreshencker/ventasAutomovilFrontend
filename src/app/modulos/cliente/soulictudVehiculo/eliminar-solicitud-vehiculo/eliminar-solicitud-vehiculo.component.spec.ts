import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSolicitudVehiculoComponent } from './eliminar-solicitud-vehiculo.component';

describe('EliminarSolicitudVehiculoComponent', () => {
  let component: EliminarSolicitudVehiculoComponent;
  let fixture: ComponentFixture<EliminarSolicitudVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSolicitudVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarSolicitudVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
