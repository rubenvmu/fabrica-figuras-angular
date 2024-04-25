import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuadradoService {

  constructor() { }

  calcularSuperficie(lado: number): number {
    return Math.pow(lado, 2);
  }
}
