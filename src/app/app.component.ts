import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    nombre: string = 'gustavo fajardo';
    numero: number = 10000000;
    obj = {
        nombre: 'gustavo fajardo',
    };

    mostrarNombre = () => {
        console.log(this.nombre);
        console.log(this.numero);
        console.log(this.obj);
    };
}
