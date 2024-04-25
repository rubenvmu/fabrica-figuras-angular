import { Component } from '@angular/core';
import { ServicioCalculadora } from './services/servicio.calculadora.service';
import { CirculoService } from './services/servicio.calculadora.circulo.service';
import { CuadradoService } from './services/servicio.calculadora.cuadrado.service';
import { ServicioValidador } from './services/servicio.validador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: number = 0;
  b: number = 0;
  result: number = 0;
  radio: number = 0;
  lado: number = 0;
  superficiecirculo: number = 0;
  superficiecuadrado: number = 0;
  imageSelection: string = 'image1';
  inputValue: string = '';
  isValid: boolean = false;

  constructor(public calculatorService: ServicioCalculadora, public circuloService: CirculoService, public cuadradoService: CuadradoService, public ServicioValidador: ServicioValidador) { }

  ngOnInit() {
    this.isValid = this.ServicioValidador.esValido(this.inputValue);
  }

  updateValidity() {
    this.isValid = this.ServicioValidador.esValido(this.inputValue);
  }

  addNumbers() {
    this.result = this.calculatorService.sumar(this.a, this.b);
  }

  subtractNumbers() {
    this.result = this.calculatorService.restar(this.a, this.b);
  }

  multiplyNumbers() {
    this.result = this.calculatorService.multiplicar(this.a, this.b);
  }

  divideNumbers() {
    this.result = this.calculatorService.dividir(this.a, this.b);
  }

  calcularSuperficieCirculo(): void {
    this.superficiecirculo = this.circuloService.calcularSuperficie(this.radio);
  }

  calcularSuperficieCuadrado(): void {
    this.superficiecuadrado = this.cuadradoService.calcularSuperficie(this.lado);
  }
}
