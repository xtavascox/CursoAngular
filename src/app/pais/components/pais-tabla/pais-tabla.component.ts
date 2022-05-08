import { Component, Input } from '@angular/core';
import { RESTCountryResponse } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-pais-tabla',
    templateUrl: './pais-tabla.component.html',
    styles: [],
})
export class PaisTablaComponent {
    @Input() countries: RESTCountryResponse[] = [];
    constructor() {}
}
