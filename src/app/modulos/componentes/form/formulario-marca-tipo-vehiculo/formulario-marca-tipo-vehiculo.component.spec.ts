import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMarcaTipoVehiculoComponent } from './formulario-marca-tipo-vehiculo.component';

describe('FormularioMarcaTipoVehiculoComponent', () => {
  let component: FormularioMarcaTipoVehiculoComponent;
  let fixture: ComponentFixture<FormularioMarcaTipoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMarcaTipoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMarcaTipoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
