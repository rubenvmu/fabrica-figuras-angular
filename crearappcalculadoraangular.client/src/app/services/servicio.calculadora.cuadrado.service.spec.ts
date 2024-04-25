import { TestBed } from '@angular/core/testing';

import { ServicioCalculadoraCuadradoService } from './servicio.calculadora.cuadrado.service';

describe('ServicioCalculadoraCuadradoService', () => {
  let service: ServicioCalculadoraCuadradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCalculadoraCuadradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
