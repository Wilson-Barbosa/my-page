import { Component, Input, OnInit } from '@angular/core';
import { Card } from "../../../shared/components/card/card";
import { Header } from "../../../shared/components/header/header";
import { BlogPostObject } from '../../models/post-models';
import { FromRawDateToPostedDatePipe } from "../../../shared/pipes/from-raw-date-to-posted-date-pipe";

@Component({
    selector: 'app-blog-post-card',
    imports: [Card, Header, FromRawDateToPostedDatePipe],
    templateUrl: './blog-post-card.html',
    styleUrl: './blog-post-card.css'
})
export class BlogPostCard implements OnInit {

    /** The post object to be rendered */
    @Input({ required: true }) blogPost!: BlogPostObject;


    ngOnInit(): void {
        this.formatPostBodyForDisplay();
    }

    formatPostBodyForDisplay(): string {

        const htmlBodyAsString: string = this.blogPost.body;

        // grab, let's say, the first 100 characters from the body

        // remove any html tags (anything with <>)

        // return the resulting string capped at lenght 70 appended with ...

        return htmlBodyAsString.slice(0, 65).concat("...");
    }
}
