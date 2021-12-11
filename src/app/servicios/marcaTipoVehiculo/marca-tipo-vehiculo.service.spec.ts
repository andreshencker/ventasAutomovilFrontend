import { TestBed } from '@angular/core/testing';

import { MarcaTipoVehiculoService } from './marca-tipo-vehiculo.service';

describe('MarcaTipoVehiculoService', () => {
  let service: MarcaTipoVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcaTipoVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
