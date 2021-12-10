import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAdmClientesComponent } from './formulario-adm-clientes.component';

describe('FormularioAdmClientesComponent', () => {
  let component: FormularioAdmClientesComponent;
  let fixture: ComponentFixture<FormularioAdmClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAdmClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAdmClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
