import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>{{ titulo }}</h1>

    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="operation(-1)">-{{ base }}</button>
    <span>{{ count }}</span>
    <button (click)="operation(1)">+{{ base }}</button> `,
})
export class ContadorComponent {
  public titulo: string = 'Contador App';
  public count: number = 0;
  public base: number = 10;

  operation = (value: number) => {
    this.count += this.base * value;
  };
}
