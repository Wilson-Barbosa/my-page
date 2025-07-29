import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, filter, Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {

    private readonly router: Router = inject(Router);

    breadcrumbList$ = new BehaviorSubject<BreadcrumbItem[] | null>(null);
    urlSubscription!: Subscription;

    // read the url and react to changes
    constructor() {

        let url: ActivatedRouteSnapshot;

        this.urlSubscription = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
            next: (navigationEndEvent: NavigationEnd) => {
                // once the NavigationEnd is emitted I can safely grab and parse the url
                console.log(navigationEndEvent.url)
            },
            error: (err) => console.log(err)
        })


    }

}

export interface BreadcrumbItem {
    routePath: string;
    bootstrapIconClass: string;
    message: string;
}

const availableItems: BreadcrumbItem[] = [
    { routePath: "home", bootstrapIconClass: "bi bi-house-door-fill", message: "Home" },
    { routePath: "updates", bootstrapIconClass: "bi bi-stars", message: "Updates" },
    { routePath: "posts", bootstrapIconClass: "bi bi-postcard", message: "Posts" },
    { routePath: "posts", bootstrapIconClass: "bi bi-postcard", message: "Posts" }
]
