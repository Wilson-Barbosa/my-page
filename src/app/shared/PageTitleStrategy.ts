import { inject, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class PageTitleStrategy extends TitleStrategy {

    private readonly titleService: Title = inject(Title);

    override updateTitle(snapshot: RouterStateSnapshot): void {

        const title = this.buildTitle(snapshot);

        if (title) {
            this.titleService.setTitle(`${title} | Wilson Diego Barbosa`);
        } else {
            this.titleService.setTitle(`Wilson Diego Barbosa`);
        }


    }

}
