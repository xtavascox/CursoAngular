import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Datum, SearchResponse } from '../../interfaces/gif.interface';

@Injectable({
    providedIn: 'root',
})
export class GifsService {
    private apiKey: string = 'MzmMnzdCm4VQHb42R2bwTAVpehYHRVae';
    private url: string = 'https://api.giphy.com/v1/gifs';
    private _history: string[] = [];
    /**
     * * results is a object list of gifs
     *TODO: change type of results
     */
    public results: Datum[] = [];

    get history(): string[] {
        return [...this._history];
    }

    private request(query: string) {
        const params = new HttpParams()
            .set('key', this.apiKey)
            .set('limit', '10')
            .set('q', query);
        this.http
            .get<SearchResponse>(`${this.url}/search`, { params })
            .subscribe(({ data }) => {
                this.results = data;
                localStorage.setItem('resultado', JSON.stringify(data));
            });
    }

    constructor(private http: HttpClient) {
        this._history = JSON.parse(localStorage.getItem('historial')!) || [];
        this.results = JSON.parse(localStorage.getItem('resultado')!) || [];
    }

    searchGifts(query: string) {
        query = query.trim().toLowerCase().trim();

        if (this._history.length > 9) {
            this._history.pop();
        }
        if (this._history.includes(query)) {
            this.request(query);
            return;
        }
        if (!query) {
            return;
        }
        this.request(query);

        this._history.unshift(query);
        localStorage.setItem('historial', JSON.stringify(this._history));
    }
}
