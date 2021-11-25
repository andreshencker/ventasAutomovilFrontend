import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCargoEmpleadoComponent } from './actualizar-cargo-empleado.component';

describe('ActualizarCargoEmpleadoComponent', () => {
  let component: ActualizarCargoEmpleadoComponent;
  let fixture: ComponentFixture<ActualizarCargoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCargoEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCargoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
