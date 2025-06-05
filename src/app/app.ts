import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Card } from "./shared/card/card";

@Component({
    selector: 'app-root',
    imports: [Navbar, Card],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected title = 'my-page';

    currentYear: number = new Date().getFullYear();
}
