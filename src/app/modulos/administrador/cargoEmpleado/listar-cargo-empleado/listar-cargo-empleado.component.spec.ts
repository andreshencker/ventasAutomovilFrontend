import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCargoEmpleadoComponent } from './listar-cargo-empleado.component';

describe('ListarCargoEmpleadoComponent', () => {
  let component: ListarCargoEmpleadoComponent;
  let fixture: ComponentFixture<ListarCargoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCargoEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCargoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
