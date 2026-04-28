import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ControlSearchBarState } from '../../services/control-search-bar-state/control-search-bar-state';

@Component({
    selector: 'app-main-navbar',
    imports: [RouterLink, NgClass, RouterLinkActive, NgClass, FormsModule],
    templateUrl: './main-navbar.html',
    styleUrl: './main-navbar.css'
})
export class MainNavbar implements OnInit {

    private readonly router: Router = inject(Router);
    private readonly controlSearchBarState: ControlSearchBarState = inject(ControlSearchBarState);

    activeTheme: string = "";
    isNavbarCollapsed: boolean = false;
    showFocusEffect: boolean = false;
    searchKeywordInput: string = "";
    displaySearch: boolean = true;

    ngOnInit(): void {

        this.controlSearchBarState.getDisplaySearchState().subscribe({
            next: (state) => {
                this.displaySearch = state;
            }
        })

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
