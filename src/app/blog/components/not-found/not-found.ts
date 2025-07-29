import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Header } from "../../../shared/components/header/header";

@Component({
    selector: 'app-not-found',
    imports: [RouterLink, Header],
    templateUrl: './not-found.html',
    styleUrl: './not-found.css'
})
export class NotFound implements OnInit {

    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    redirectedLink: string | null = null;

    ngOnInit(): void {
        this.displayCustomMessageOnView();
    }

    displayCustomMessageOnView(): void {
        const redirectFrom: string | null = this.activatedRoute.snapshot.queryParamMap.get("redirected-from");
        this.redirectedLink = redirectFrom;
    }

}
