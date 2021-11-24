import { TestBed } from '@angular/core/testing';

import { EstadoContratoService } from './estado-contrato.service';

describe('EstadoContratoService', () => {
  let service: EstadoContratoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoContratoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
