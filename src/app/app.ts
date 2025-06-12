import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected title = 'my-page';

    currentYear: number = new Date().getFullYear();
    cssClass: string = "hover:text-(--secondary-darker)";
}
