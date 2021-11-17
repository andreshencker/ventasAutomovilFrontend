import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDetalleVehiculoComponent } from './crear-detalle-vehiculo.component';

describe('CrearDetalleVehiculoComponent', () => {
  let component: CrearDetalleVehiculoComponent;
  let fixture: ComponentFixture<CrearDetalleVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDetalleVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDetalleVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
