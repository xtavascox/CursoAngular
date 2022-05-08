import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GifsService {
    private _history: string[] = [];

    get history(): string[] {
        return [...this._history];
    }

    searchGifts(query: string) {
        this._history.unshift(query);
        console.log(this._history);
    }
}
