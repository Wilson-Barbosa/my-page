import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { PageTitleStrategy } from './shared/PageTitleStrategy';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        { provide: TitleStrategy, useClass: PageTitleStrategy },
        provideHttpClient(),
    ]
};


