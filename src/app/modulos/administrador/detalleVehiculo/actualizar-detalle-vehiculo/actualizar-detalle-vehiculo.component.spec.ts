import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDetalleVehiculoComponent } from './actualizar-detalle-vehiculo.component';

describe('ActualizarDetalleVehiculoComponent', () => {
  let component: ActualizarDetalleVehiculoComponent;
  let fixture: ComponentFixture<ActualizarDetalleVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDetalleVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDetalleVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
