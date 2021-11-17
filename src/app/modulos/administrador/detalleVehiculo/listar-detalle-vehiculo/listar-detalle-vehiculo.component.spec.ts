import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDetalleVehiculoComponent } from './listar-detalle-vehiculo.component';

describe('ListarDetalleVehiculoComponent', () => {
  let component: ListarDetalleVehiculoComponent;
  let fixture: ComponentFixture<ListarDetalleVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDetalleVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDetalleVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
