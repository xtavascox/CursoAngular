import { Component } from '@angular/core';

@Component({
    selector: 'app-basicos',
    templateUrl: './basicos.component.html',
    styles: [],
})
export class BasicosComponent {
    nombreLower: string = 'gustavo';
    nombreUpper: string = 'GUSTAVO';
    nombreCompleto: string = 'gustAvO fAjArdo';
    fecha: Date = new Date();
}
