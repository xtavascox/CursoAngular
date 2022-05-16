import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RESTCountryResponse } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-by-reg',
    templateUrl: './by-reg.component.html',
    styles: [
        `
            button {
                margin-right: 5px;
            }
        `,
    ],
})
export class ByRegComponent {
    regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    activeRegion: string = '';
    countries: RESTCountryResponse[] = [];
    isLoad: boolean = false;
    constructor(private regionService: PaisService) {}

    getActiveClass(region: string): string {
        return region === this.activeRegion
            ? 'btn btn-primary'
            : 'btn btn-outline-primary';
    }

    activarRegion(region: string) {
        if (region === this.activeRegion) {
            return;
        }

        this.isLoad = true;
        this.activeRegion = region;
        this.countries = [];
        this.regionService.findRegion(region).subscribe({
            next: (resp) => {
                this.countries = resp;
                this.isLoad = false;
            },
        });
    }
}
