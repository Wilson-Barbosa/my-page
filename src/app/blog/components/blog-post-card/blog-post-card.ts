import { Component, Input, OnInit } from '@angular/core';
import { Card } from "../../../shared/components/card/card";
import { Header } from "../../../shared/components/header/header";
import { BlogPostObject } from '../../models/post-models';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { FromUnixEpochMilisecondsToDayMonthYearPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-day-month-year-pipe";
import { FromBlogTextHtmlToTextPipe } from "../../../shared/pipes/from-blog-text-html-to-text-pipe";

@Component({
    selector: 'app-blog-post-card',
    imports: [Card, Header, RouterLink, NgClass, FromUnixEpochMilisecondsToDayMonthYearPipe, FromBlogTextHtmlToTextPipe],
    templateUrl: './blog-post-card.html',
    styleUrl: './blog-post-card.css'
})
export class BlogPostCard implements OnInit {

    /** The post object to be rendered */
    @Input({ required: true }) blogPost!: BlogPostObject;
    displayUnderlineEffectOnElement: boolean = false;

    ngOnInit(): void {

    }

    handleOnMouseEnterCard(): void {
        this.displayUnderlineEffectOnElement = true;
    }

    handleOnMouseExitCard(): void {
        this.displayUnderlineEffectOnElement = false;
    }
}
