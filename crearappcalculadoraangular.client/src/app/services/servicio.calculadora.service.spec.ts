import { TestBed } from '@angular/core/testing';

import { ServicioCalculadora } from './servicio.calculadora.service';

describe('ServicioCalculadoraService', () => {
  let service: ServicioCalculadora;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCalculadora);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
