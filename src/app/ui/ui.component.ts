import { Component } from '@angular/core';
import { Addition } from '../addition/addition';
import { Substraction } from '../substraction/substraction';
import { Multiplication } from '../multiplication/multiplication';
import { Division } from '../division/division';
import { Exp } from '../exp/exp';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})

export class UiComponent {
  num1: number = 0;
  num2: number = 0;
  operacion: string = '';
  resultado: number = 0;

  selectedButton: string = '';
  selectOperation(operacion: string) {
    this.operacion = operacion;
    this.selectedButton = operacion;
  }

  calculate() {
    switch (this.operacion) {
      case 'add':
        this.resultado = Addition.calculate(this.num1, this.num2);
        break;
      case 'sub':
        this.resultado = Substraction.calculate(this.num1, this.num2);
        break;
      case 'mul':
        this.resultado = Multiplication.calculate(this.num1, this.num2);
        break;
      case 'div':
        this.resultado = Division.calculate(this.num1, this.num2);
        break;
      case 'exp':
        this.resultado = Exp.calculate(this.num1, this.num2);
        break;
    }
  }
}