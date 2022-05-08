import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { RESTCountryResponse } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
})
export class CountryComponent implements OnInit {
    country!: RESTCountryResponse;

    constructor(
        private activatedRoute: ActivatedRoute,
        private idService: PaisService
    ) {
        console.log(this.country);
    }

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) => this.idService.findId(id))
                // tap(console.log)
            )
            .subscribe({
                next: (resp) => {
                    this.country = resp[0];
                },
                error: (err) => console.log(err),
            });

        /**
         * *FORMA 1 PARA HACER UN SUBSCRIBE DENTRO DE OTRO SUBSCRIBE*
         */
        // this.activatedRoute.params.subscribe(({ id }) => {
        //     this.idService.findId(id).subscribe({
        //         next: (resp) => {
        //             console.log(resp);
        //         },
        //         error: (err) => {
        //             console.log(err);
        //         },
        //     });
        // });
    }
}
