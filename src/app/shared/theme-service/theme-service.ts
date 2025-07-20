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

    activeTheme$: BehaviorSubject<string> = new BehaviorSubject(ThemeTypeEnum.LIGHT.toString());

    constructor() {

        const activeTheme: string | null = this.getThemeFromLocalStorage();

        if (activeTheme === null) {
            this.setupTheme(ThemeTypeEnum.LIGHT);
            this.persistThemeOnLocalStorage(ThemeTypeEnum.LIGHT);
        }

    }

    persistThemeOnLocalStorage(theme: ThemeTypeEnum): void {
        localStorage.setItem(this.LOCAL_STORAGE_THEME_KEY, theme);
    }

    getThemeFromLocalStorage(): string | null {
        return localStorage.getItem(this.LOCAL_STORAGE_THEME_KEY);
    }

    setupTheme(newTheme: ThemeTypeEnum): void {
        AVAILABLE_THEMES.forEach((theme) => {
            if (newTheme === theme.type) {

                console.log("the theme selected was: " + theme.type);

                document.documentElement.style.setProperty(this.PRIMARY_BACKGROUND, theme.primaryBackground);
                document.documentElement.style.setProperty(this.SECONDARY_BACKGROUND, theme.secondaryBackground);
                document.documentElement.style.setProperty(this.PRIMARY_FONT, theme.primaryFont);
                document.documentElement.style.setProperty(this.SECONDARYY_FONT, theme.secondaryFont);

                this.updateObsevableTheme(newTheme);

                return;
            }
        });

        // if none if found setup the light one
        document.documentElement.style.setProperty(this.PRIMARY_BACKGROUND, LIGHT_THEME_COLORS.primaryBackground);
        document.documentElement.style.setProperty(this.SECONDARY_BACKGROUND, LIGHT_THEME_COLORS.secondaryBackground);
        document.documentElement.style.setProperty(this.PRIMARY_FONT, LIGHT_THEME_COLORS.primaryFont);
        document.documentElement.style.setProperty(this.SECONDARYY_FONT, LIGHT_THEME_COLORS.secondaryFont);

        this.updateObsevableTheme(newTheme);
    }

    updateObsevableTheme(theme: ThemeTypeEnum): void {
        this.activeTheme$.next(theme);
    }

}
