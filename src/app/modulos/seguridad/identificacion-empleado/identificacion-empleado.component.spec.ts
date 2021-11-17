import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionEmpleadoComponent } from './identificacion-empleado.component';

describe('IdentificacionEmpleadoComponent', () => {
  let component: IdentificacionEmpleadoComponent;
  let fixture: ComponentFixture<IdentificacionEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
