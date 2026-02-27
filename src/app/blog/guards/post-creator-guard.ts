import { Injectable } from "@angular/core";
import { CanMatch, GuardResult, MaybeAsync, Route, UrlSegment } from "@angular/router";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PostCreatorGuard implements CanMatch {

    canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
        return !environment.production;
    }

}
