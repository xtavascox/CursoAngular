import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTCountryResponse } from '../interfaces/pais.interface';

@Injectable({
    providedIn: 'root',
})
export class PaisService {
    private _apiUrl: string = 'https://restcountries.com/v3.1/';

    constructor(private http: HttpClient) {}

    findCountry(query: string): Observable<RESTCountryResponse[]> {
        const url = `${this._apiUrl}/name/${query}`;

        return this.http.get<RESTCountryResponse[]>(url);
    }

    findCapital(query: string): Observable<RESTCountryResponse[]> {
        const url = `${this._apiUrl}/capital/${query}`;
        return this.http.get<RESTCountryResponse[]>(url);
    }
    findId(query: string): Observable<RESTCountryResponse[]> {
        const url = `${this._apiUrl}/alpha/${query}`;
        return this.http.get<RESTCountryResponse[]>(url);
    }
}
