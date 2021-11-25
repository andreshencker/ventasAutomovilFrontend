import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCargoEmpleadoComponent } from './eliminar-cargo-empleado.component';

describe('EliminarCargoEmpleadoComponent', () => {
  let component: EliminarCargoEmpleadoComponent;
  let fixture: ComponentFixture<EliminarCargoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCargoEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCargoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
