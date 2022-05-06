import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spider-man',
    'Iron-man',
    'Hulk',
    'Thor',
    'Capitan America',
  ];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    const heroe = this.heroes.pop();
    typeof heroe !== 'undefined' ? (this.heroeBorrado = heroe):(this.heroeBorrado = '')
  }
}
