import { Component } from '@angular/core';

@Component({
  selector: 'heroe-app',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  public nombre: string = 'Iron-man';
  public edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return ` ${this.nombre} y tiene ${this.edad} años.`;
  }
  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad = 30;
  }
}
