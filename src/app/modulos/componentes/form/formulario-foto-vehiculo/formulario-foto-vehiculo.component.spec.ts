import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFotoVehiculoComponent } from './formulario-foto-vehiculo.component';

describe('FormularioFotoVehiculoComponent', () => {
  let component: FormularioFotoVehiculoComponent;
  let fixture: ComponentFixture<FormularioFotoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioFotoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioFotoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
