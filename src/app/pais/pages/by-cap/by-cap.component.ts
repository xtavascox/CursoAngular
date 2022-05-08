import { Component } from '@angular/core';
import { RESTCountryResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-by-cap',
    templateUrl: './by-cap.component.html',
})
export class ByCapComponent {
    quest: string = '';
    isError: boolean = false;
    countries: RESTCountryResponse[] = [];

    constructor(private countryService: PaisService) {}

    search(event: string) {
        this.isError = false;
        this.quest = event;
        if (this.quest.trim()) {
            this.countryService.findCapital(this.quest).subscribe({
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
}
