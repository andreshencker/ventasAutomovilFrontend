import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudVehiculoComponent } from './listar-solicitud-vehiculo.component';

describe('ListarSolicitudVehiculoComponent', () => {
  let component: ListarSolicitudVehiculoComponent;
  let fixture: ComponentFixture<ListarSolicitudVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSolicitudVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
