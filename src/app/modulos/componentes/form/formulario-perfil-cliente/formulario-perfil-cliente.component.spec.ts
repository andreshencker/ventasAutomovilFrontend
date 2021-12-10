import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPerfilClienteComponent } from './formulario-perfil-cliente.component';

describe('FormularioPerfilClienteComponent', () => {
  let component: FormularioPerfilClienteComponent;
  let fixture: ComponentFixture<FormularioPerfilClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPerfilClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPerfilClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
