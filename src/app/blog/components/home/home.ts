import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Header } from "../../../shared/components/header/header";
import { PText } from "../p-text/p-text";
import { BlogPostObject } from '../../models/post-models';
import { BlogPostLoader } from '../../models/loaders';
import { BlogPostJsonLoader } from '../../services/blog-post-json-loader/blog-post-json-loader';
import { BlogPostCard } from "../blog-post-card/blog-post-card";

import { RouterLink } from '@angular/router';
import { FromBlogTextHtmlToTextPipe } from "../../../shared/pipes/from-blog-text-html-to-text-pipe";

@Component({
    selector: 'app-home',
    imports: [Header, PText, BlogPostCard, RouterLink, FromBlogTextHtmlToTextPipe],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

    private readonly blogPostLoader: BlogPostLoader = inject(BlogPostJsonLoader);

    latestBlogPost!: BlogPostObject;
    blogPostList!: BlogPostObject[];

    ngOnInit(): void {
        this.loadLastPostCreated();
        this.loadLastPostsCreated();
    }

    ngOnDestroy(): void {

    }

    /** loads the latest post created */
    loadLastPostCreated(): void {
        this.blogPostLoader.getLatestPost().subscribe({
            next: (post) => this.latestBlogPost = post
        });
    }

    /** loas a list of posts */
    loadLastPostsCreated(): void {
        this.blogPostLoader.getListOfPostsAsObservable().subscribe({
            next: (posts) => this.blogPostList = posts
        });
    }


}
