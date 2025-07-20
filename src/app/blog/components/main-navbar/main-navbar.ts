import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../../shared/theme-service/theme-service';
import { Subscription } from 'rxjs';
import { ThemeTypeEnum } from '../../../shared/theme-service/theme-models';

@Component({
    selector: 'app-main-navbar',
    imports: [],
    templateUrl: './main-navbar.html',
    styleUrl: './main-navbar.css'
})
export class MainNavbar implements OnInit, OnDestroy {

    private readonly themeService: ThemeService = inject(ThemeService);
    activeThemeSubscription!: Subscription;
    activeTheme: string = "";
    themeEnum: typeof ThemeTypeEnum = ThemeTypeEnum; // exposes the whole enum (all its entries)


    ngOnInit(): void {
        this.activeThemeSubscription = this.themeService.activeTheme$.subscribe({
            next: (theme) => {
                this.activeTheme = theme;
            }
        });
    }

    ngOnDestroy(): void {
        this.activeThemeSubscription.unsubscribe();
    }
}
