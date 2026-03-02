import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-main-navbar',
    imports: [RouterLink, NgClass, RouterLinkActive, NgClass, FormsModule],
    templateUrl: './main-navbar.html',
    styleUrl: './main-navbar.css'
})
export class MainNavbar implements OnInit {

    private readonly router: Router = inject(Router);

    activeTheme: string = "";
    isNavbarCollapsed: boolean = false;
    showFocusEffect: boolean = false;
    searchKeywordInput: string = "";

    ngOnInit(): void {
    }


    toggleNavBarCollapsed(): void {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    handleOnInputFocus(): void {
        this.showFocusEffect = true;
    }

    handleOnInputBlur(): void {
        this.showFocusEffect = false;
    }

    redirectSearch(): void {
        if(this.searchKeywordInput !== "") {
            this.router.navigateByUrl("blog/posts/search?body=" + this.searchKeywordInput);
            this.searchKeywordInput = "";
        }
    }
}
