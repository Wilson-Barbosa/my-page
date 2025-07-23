import { Injectable } from '@angular/core';
import { AVAILABLE_THEMES, LIGHT_THEME_COLORS, ThemeTypeEnum } from './theme-models';
import { BehaviorSubject } from 'rxjs';

/**
 * Service that manages the theme of the application.
 */
@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private readonly LOCAL_STORAGE_THEME_KEY: string = "active-theme";
    private readonly PRIMARY_BACKGROUND: string = "--primary-background-color";
    private readonly SECONDARY_BACKGROUND: string = "--secondary-background-color";
    private readonly PRIMARY_FONT: string = "--primary-font-color";
    private readonly SECONDARYY_FONT: string = "--secondary-font-color";

    /**
     * BehaviorSubject that notifies subscribers about the current theme of the application
     */
    activeTheme$: BehaviorSubject<string> = new BehaviorSubject(ThemeTypeEnum.LIGHT.toString());

    constructor() {

        const activeTheme: string | null = this.getThemeFromLocalStorage();

        if (activeTheme === null) { // guarantees the default theme will be loaded
            this.setupTheme(ThemeTypeEnum.LIGHT);
        } else {
            const theme = ThemeTypeEnum[activeTheme as keyof typeof ThemeTypeEnum];
            theme ? this.setupTheme(theme): this.setupTheme(ThemeTypeEnum.LIGHT);
        }

    }

    setupTheme(newTheme: ThemeTypeEnum): void {
        AVAILABLE_THEMES.forEach((theme) => {
            if (newTheme === theme.type) {

                document.documentElement.style.setProperty(this.PRIMARY_BACKGROUND, theme.primaryBackground);
                document.documentElement.style.setProperty(this.SECONDARY_BACKGROUND, theme.secondaryBackground);
                document.documentElement.style.setProperty(this.PRIMARY_FONT, theme.primaryFont);
                document.documentElement.style.setProperty(this.SECONDARYY_FONT, theme.secondaryFont);

                this.updateObsevableTheme(newTheme);
                this.persistThemeOnLocalStorage(theme.type);

                return;
            }
        });
    }

    private updateObsevableTheme(theme: ThemeTypeEnum): void {
        this.activeTheme$.next(theme);
    }

    private persistThemeOnLocalStorage(theme: ThemeTypeEnum): void {
        localStorage.setItem(this.LOCAL_STORAGE_THEME_KEY, theme);
    }

    private getThemeFromLocalStorage(): string | null {
        return localStorage.getItem(this.LOCAL_STORAGE_THEME_KEY);
    }

}
