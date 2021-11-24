import { TestBed } from '@angular/core/testing';

import { CargoEmpleadoService } from './cargo-empleado.service';

describe('CargoEmpleadoService', () => {
  let service: CargoEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargoEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
