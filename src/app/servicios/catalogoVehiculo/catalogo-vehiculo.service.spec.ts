import { TestBed } from '@angular/core/testing';

import { CatalogoVehiculoService } from './catalogo-vehiculo.service';

describe('CatalogoVehiculoService', () => {
  let service: CatalogoVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
