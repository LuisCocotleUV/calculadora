import { Component } from '@angular/core';
import { Addition } from '../addition/addition';

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
    }
  }
}