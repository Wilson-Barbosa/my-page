/**
 * The list of themes that can be associated with a set of colors for the background and font.
 */
export enum ThemeTypeEnum {
    DARK = "DARK",
    LIGHT = "LIGHT"
}

/**
 * Defines a set of colors associated with a theme type.
 *
 * The colors of should be defined as vanilla CSS classes
 */
export interface ThemeColors {
    type: ThemeTypeEnum;
    primaryBackground: string;
    secondaryBackground: string;
    primaryFont: string;
    secondaryFont: string;
}

/**
 * Defines the colors for the light theme. It's also the default theme for the app.
 */
export const LIGHT_THEME_COLORS: ThemeColors = {
    type: ThemeTypeEnum.LIGHT,
    primaryBackground: "#FFFFFF",
    secondaryBackground: "#DEDEDE",
    primaryFont: "#1A1A1A",
    secondaryFont: "#555555"
}

/**
 * Defines the colors for the dark theme
 */
const DARK_THEME_COLORS: ThemeColors = {
    type: ThemeTypeEnum.DARK,
    primaryBackground: "#121212",
    secondaryBackground: "#1E1E1E",
    primaryFont: "#EDEDED",
    secondaryFont: "#AAAAAA"
}

/**
 * A list with all available themes for the application. Only themes defined here are
 * should be used for
 */
export const AVAILABLE_THEMES: ThemeColors[] = [
    LIGHT_THEME_COLORS, DARK_THEME_COLORS
];
