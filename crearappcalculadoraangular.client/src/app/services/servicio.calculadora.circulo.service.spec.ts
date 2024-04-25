import { TestBed } from '@angular/core/testing';

import { ServicioCalculadoraCirculoService } from './servicio.calculadora.circulo.service';

describe('ServicioCalculadoraCirculoService', () => {
  let service: ServicioCalculadoraCirculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCalculadoraCirculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
