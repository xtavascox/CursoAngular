import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { RESTCountryResponse } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-by-name',
    templateUrl: './by-name.component.html',
    styles: [],
})
export class ByNameComponent {
    quest: string = '';
    isError: boolean = false;
    countries: RESTCountryResponse[] = [];
    constructor(private countryService: PaisService) {}

    search(event: string) {
        this.isError = false;
        this.quest = event;
        if (this.quest.trim()) {
            this.countryService.findCountry(this.quest).subscribe({
                next: (resp) => {
                    this.countries = resp;
                    this.quest = '';
                },
                error: () => {
                    this.isError = true;
                    this.countries = [];
                    this.quest = '';
                },
            });
        }
    }
    suggestions(event: string) {
        this.isError = false;
        /**
         * TODO:create suggestions
         */
    }
}
