import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEstadoContratoComponent } from './eliminar-estado-contrato.component';

describe('EliminarEstadoContratoComponent', () => {
  let component: EliminarEstadoContratoComponent;
  let fixture: ComponentFixture<EliminarEstadoContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEstadoContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEstadoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
