import { TestBed } from '@angular/core/testing';

import { ServicioCalculadoraService } from './servicio.calculadora.service';

describe('ServicioCalculadoraService', () => {
  let service: ServicioCalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
