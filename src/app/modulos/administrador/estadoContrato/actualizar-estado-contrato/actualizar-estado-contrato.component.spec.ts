import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEstadoContratoComponent } from './actualizar-estado-contrato.component';

describe('ActualizarEstadoContratoComponent', () => {
  let component: ActualizarEstadoContratoComponent;
  let fixture: ComponentFixture<ActualizarEstadoContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEstadoContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEstadoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
