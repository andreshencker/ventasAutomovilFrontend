import { TestBed } from '@angular/core/testing';

import { DetalleVehiculoService } from './detalle-vehiculo.service';

describe('DetalleVehiculoService', () => {
  let service: DetalleVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
