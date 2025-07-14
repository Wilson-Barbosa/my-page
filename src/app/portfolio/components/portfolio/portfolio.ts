import { NgClass, ViewportScroller } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { ProfessionalWork } from '../../models';
import { abutuaInternship } from '../../sources';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [NgClass, RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {

    private readonly viewPortScrollerService: ViewportScroller = inject(ViewportScroller);

    isPageAtTheTop: boolean = true;
    scrollY: number = 0;
    currentYear: number = new Date().getFullYear();
    isNavbarCollapsed: boolean = false;

    professionalExperiences: ProfessionalWork[] = [
        abutuaInternship
    ];

    // styles
    cssClass: string = "hover:text-(--secondary-darker) transition-all duration-300";
    pStyle = "mt-3 text-sm lg:text-base";
    cardStyle = "bg-(--primary) rounded-md shadow-xl mx-3 p-4 w-full sm:w-fit";
    headerStyle = "font-bold text-xl text-center";

    /** Listens to any scroll event to determine if the nav-bar should shrink */
    @HostListener('window:scroll', [])
    onWindowScroll() {
        const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
        (scrollY === 0) ? this.isPageAtTheTop = true : this.isPageAtTheTop = false;
    }

    /** Scrolls the view to the top of the page */
    sendToTop(): void {
        document.documentElement.scrollTop = 0;
        this.isPageAtTheTop = true;
        this.isNavbarCollapsed = false;
    }

    toggleNavBarCollapsed(): void {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    scrollViewToElementByIdName(id: string): void {
        this.viewPortScrollerService.scrollToAnchor(id);
        this.toggleNavBarCollapsed();
    }

}
