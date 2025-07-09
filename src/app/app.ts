import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [NgClass],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {

    protected title = 'my-page';

    isPageAtTheTop: boolean = false;
    currentYear: number = new Date().getFullYear();
    cssClass: string = "hover:text-(--secondary-darker) transition-all duration-300";

    /** Listens to any scroll event to determine if the nav-bar should shrink */
    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
        (scrollY === 0) ? this.isPageAtTheTop = true : this.isPageAtTheTop = false;
    }

    /** Scroll the view to the top of the page */
    sendToTop(): void {
        document.documentElement.scrollTop = 0;
    }
}
