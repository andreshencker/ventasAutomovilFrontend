import { TestBed } from '@angular/core/testing';

import { FotoVehiculoService } from './foto-vehiculo.service';

describe('FotoVehiculoService', () => {
  let service: FotoVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
