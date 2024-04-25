import { TestBed } from '@angular/core/testing';

import { ServicioValidadorService } from './servicio.validador.service';

describe('ServicioValidadorService', () => {
  let service: ServicioValidadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioValidadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
