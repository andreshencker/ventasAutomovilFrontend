import { TestBed } from '@angular/core/testing';

import { EstudioSolicitudService } from './estudio-solicitud.service';

describe('EstudioSolicitudService', () => {
  let service: EstudioSolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudioSolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
