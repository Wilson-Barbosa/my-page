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
        const name: string = "Wilson Barbosa"

        if (title) {
            this.titleService.setTitle(`${title} | ${name}`);
        } else {
            this.titleService.setTitle(`${name}`);
        }


    }

}
