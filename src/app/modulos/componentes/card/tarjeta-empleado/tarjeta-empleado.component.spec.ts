import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaEmpleadoComponent } from './tarjeta-empleado.component';

describe('TarjetaEmpleadoComponent', () => {
  let component: TarjetaEmpleadoComponent;
  let fixture: ComponentFixture<TarjetaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
