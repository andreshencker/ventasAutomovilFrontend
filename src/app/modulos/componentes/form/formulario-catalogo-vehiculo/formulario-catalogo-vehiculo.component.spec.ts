import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCatalogoVehiculoComponent } from './formulario-catalogo-vehiculo.component';

describe('FormularioCatalogoVehiculoComponent', () => {
  let component: FormularioCatalogoVehiculoComponent;
  let fixture: ComponentFixture<FormularioCatalogoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCatalogoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCatalogoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
