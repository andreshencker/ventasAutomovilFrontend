import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDetalleVehiculoComponent } from './eliminar-detalle-vehiculo.component';

describe('EliminarDetalleVehiculoComponent', () => {
  let component: EliminarDetalleVehiculoComponent;
  let fixture: ComponentFixture<EliminarDetalleVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarDetalleVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarDetalleVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
