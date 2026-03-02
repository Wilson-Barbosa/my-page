import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../../../shared/components/header/header";
import { BlogPostJsonLoader } from '../../services/blog-post-json-loader/blog-post-json-loader';
import { BlogPostLoader } from '../../models/loaders';
import { BlogPostObject } from '../../models/post-models';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { PText } from '../p-text/p-text';

import { FromUnixEpochMilisecondsToDayMonthYearPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-day-month-year-pipe";
import { FromUnixEpochMilisecondsToCustomTimeAgoPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-custom-time-ago-pipe";

import { RouterLink } from '@angular/router';
import { Card } from "../../../shared/components/card/card";
import { FromBlogTextHtmlToTextPipe } from "../../../shared/pipes/from-blog-text-html-to-text-pipe";

@Component({
    selector: 'app-post-list',
    imports: [
    Header,
    NgTemplateOutlet,
    NgClass,
    PText,
    FromUnixEpochMilisecondsToDayMonthYearPipe,
    FromUnixEpochMilisecondsToCustomTimeAgoPipe,
    RouterLink,
    Card,
    FromBlogTextHtmlToTextPipe
],
    templateUrl: './post-list.html',
    styleUrl: './post-list.css'
})
export class PostList implements OnInit {

    private readonly blogPostLoader: BlogPostLoader =  inject(BlogPostJsonLoader);

    postList!: BlogPostObject[];
    displayLoading: boolean = true;
    displayDropdown: boolean = false;

    ngOnInit(): void {
        this.blogPostLoader.getListOfPostsAsObservable().subscribe({
            next: (value) => {
                this.postList = value;
            }
        });
    }

    toggleDisplayDropdown(): void {
        this.displayDropdown = !this.displayDropdown;
    }
}
