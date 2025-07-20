import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class Header {

    @Input({ required: true }) size!: 1 | 2 | 3 | 4 | 5 | 6;
    @Input({ required: true }) label!: string;
}
