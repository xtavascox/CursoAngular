import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTCountryResponse } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root',
})
export class PaisService {
    private _apiUrl: string = 'https://restcountries.com/v3.1/';

    get getParams() {
        return new HttpParams().set(
            'fields',
            'name,flags,population,idd,capital,cca2'
        );
    }

    constructor(private http: HttpClient) {}

    findCountry(query: string): Observable<RESTCountryResponse[]> {
        const url = `${this._apiUrl}/name/${query}`;

        return this.http.get<RESTCountryResponse[]>(url, {
            params: this.getParams,
        });
    }

    findCapital(query: string): Observable<RESTCountryResponse[]> {
        const url = `${this._apiUrl}/capital/${query}?fields=name,flags,population,idd,capital,cca2`;
        return this.http.get<RESTCountryResponse[]>(url, {
            params: this.getParams,
        });
    }
    findRegion(query: string): Observable<RESTCountryResponse[]> {
        const url = `${this._apiUrl}/region/${query}?fields=name,flags,population,idd,capital,cca2`;
        return this.http.get<RESTCountryResponse[]>(url, {
            params: this.getParams,
        });
    }
    findId(query: string): Observable<RESTCountryResponse[]> {
        const url = `${this._apiUrl}/alpha/${query}`;
        return this.http.get<RESTCountryResponse[]>(url);
    }
}
