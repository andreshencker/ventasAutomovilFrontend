import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstadoContratoComponent } from './listar-estado-contrato.component';

describe('ListarEstadoContratoComponent', () => {
  let component: ListarEstadoContratoComponent;
  let fixture: ComponentFixture<ListarEstadoContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEstadoContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstadoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
