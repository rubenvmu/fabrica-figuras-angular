import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioValidador {

  constructor() { }

  public esValido(cadena: string): boolean {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(cadena);
  }

}
