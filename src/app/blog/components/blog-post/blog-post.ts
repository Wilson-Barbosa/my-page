import { Component, inject, OnInit } from '@angular/core';
import { Badge } from "../../../shared/components/badge/badge";
import { Header } from "../../../shared/components/header/header";
import { BlogPostCard } from "../blog-post-card/blog-post-card";
import { BlogPostLoader } from '../../models/loaders';
import { BlogPostJsonLoader } from '../../services/blog-post-json-loader/blog-post-json-loader';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostObject } from '../../models/post-models';
import { Image } from "../image/image";
import { FromUnixEpochMilisecondsToDayMonthYearPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-day-month-year-pipe";
import { FromUnixEpochMilisecondsToHourMinuteSecondPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-hour-minute-second-pipe";
import { PText } from '../p-text/p-text';
import { FromUnixEpochMilisecondsToCustomTimeAgoPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-custom-time-ago-pipe";
import { BlogPostAssociator } from '../../models/blog-post-associator';
import { SimplePostAssociator } from '../../services/simple-post-associator/simple-post-associator';
import { Title } from '@angular/platform-browser';

/**
 * Component for a complete post, with title, body, related posts etc...
 */
@Component({
    selector: 'app-blog-post',
    imports: [Header, BlogPostCard, Image, FromUnixEpochMilisecondsToDayMonthYearPipe, FromUnixEpochMilisecondsToHourMinuteSecondPipe, FromUnixEpochMilisecondsToCustomTimeAgoPipe, PText],
    templateUrl: './blog-post.html',
    styleUrl: './blog-post.css'
})
export class BlogPost implements OnInit {

    private readonly blogPostAssociator: BlogPostAssociator = inject(SimplePostAssociator);
    private readonly blogPostLoader: BlogPostLoader = inject(BlogPostJsonLoader);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly router: Router = inject(Router);
    private readonly titleService: Title = inject(Title);

    private readonly POST_ID_URL_PARAM_NAME: string = "postId";

    displayLoadingPage: boolean = false;
    blogPost: BlogPostObject = {} as BlogPostObject;
    relatedPosts: BlogPostObject[] = [];

    ngOnInit(): void {
        this.loadBlogPost();
    }

    /**
     * Recovers a postId from the URL (as a parameter) and calls the service
     * to load the correspondent blog instance.
     */
    loadBlogPost(): void {
        const postId: string | null = this.activatedRoute.snapshot.paramMap.get(this.POST_ID_URL_PARAM_NAME);

        this.blogPostLoader.getBlogPostById(Number(postId)).subscribe({
            next: (post) => {
                this.blogPost = post;
                this.loadRelatedBlogPosts(post);
                this.pushPostTitleToPageTitle();
            },
            error: (err) => this.redirectToNotFoundPage()
        });
    }

    redirectToNotFoundPage(): void {
        this.router.navigateByUrl("blog");
    }

    loadRelatedBlogPosts(post: BlogPostObject): void {
        this.blogPostAssociator.loadRelatedPostsTo(post);
    }

    pushPostTitleToPageTitle(): void {
        this.titleService.setTitle(this.blogPost.title + " | " + this.titleService.getTitle());
    }
}
