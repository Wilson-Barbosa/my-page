import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

/**
 * Route guard that checks if the url parameter for a blog-post query is an integer number
 */
@Injectable({
    providedIn: 'root'
})
export class IntegerParameterGuard implements CanActivate {

    private readonly router: Router = inject(Router);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

        const param: string | null = route.paramMap.get("postId");
        const paramAsNumber: number = Number(param);

        console.log("value captured: " + param);

        if (param === null) {
            return this.router.parseUrl("/blog");
        }

        if (Number.isNaN(paramAsNumber)) {
            return this.router.parseUrl("/blog");
        }

        if (!Number.isInteger(paramAsNumber)) {
            return this.router.parseUrl("/blog");
        }

        return true;
    }

}
