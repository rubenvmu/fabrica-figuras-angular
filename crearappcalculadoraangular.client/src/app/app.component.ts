import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number = 0; // initialize result property with a default value of 0

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  addNumbers(a: number, b: number): void {
    this.result = this.calculatorService.sumar(a, b);
  }

  subtractNumbers(a: number, b: number): void {
    this.result = this.calculatorService.restar(a, b);
  }

  multiplyNumbers(a: number, b: number): void {
    this.result = this.calculatorService.multiplicar(a, b);
  }

  divideNumbers(a: number, b: number): void {
    this.result = this.calculatorService.dividir(a, b);
  }
}
