import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ControlSearchBarState {

    constructor() { }

    displaySearch$: BehaviorSubject<boolean> = new BehaviorSubject(true);

    showSearchBar(): void {
        this.displaySearch$.next(true);
    }

    hideSearchBar(): void {
        this.displaySearch$.next(false);
    }

    getDisplaySearchState(): BehaviorSubject<boolean> {
        return this.displaySearch$;
    }

}
