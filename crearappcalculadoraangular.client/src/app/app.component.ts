import { Component } from '@angular/core';
import { ServicioCalculadora } from './services/servicio.calculadora.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: number = 0;
  b: number = 0;
  result: number = 0;

  constructor(private calculatorService: ServicioCalculadora) { }

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
}
