import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    imports: [],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css'
})
export class Navbar {

    cssClass: string = "hover:text-(--secondary-darker)";

}
