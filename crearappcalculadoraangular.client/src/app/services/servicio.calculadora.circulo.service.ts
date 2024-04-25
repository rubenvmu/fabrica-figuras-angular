import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CirculoService {

  constructor() { }

  calcularSuperficie(radio: number): number {
    return Math.PI * Math.pow(radio, 2);
  }
}
