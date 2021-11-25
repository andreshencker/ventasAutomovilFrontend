import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEstadoContratoComponent } from './crear-estado-contrato.component';

describe('CrearEstadoContratoComponent', () => {
  let component: CrearEstadoContratoComponent;
  let fixture: ComponentFixture<CrearEstadoContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEstadoContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEstadoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
