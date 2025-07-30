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

/**
 * Component for a complete post, with title, bodies
 */
@Component({
    selector: 'app-blog-post',
    imports: [Header, BlogPostCard, Image, FromUnixEpochMilisecondsToDayMonthYearPipe, FromUnixEpochMilisecondsToHourMinuteSecondPipe, FromUnixEpochMilisecondsToCustomTimeAgoPipe],
    templateUrl: './blog-post.html',
    styleUrl: './blog-post.css'
})
export class BlogPost implements OnInit {

    private readonly blogPostLoader: BlogPostLoader = inject(BlogPostJsonLoader);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly router: Router = inject(Router);

    private readonly POST_ID_URL_PARAM_NAME: string = "postId";

    displayLoadingPage: boolean = false;
    blogPost: BlogPostObject = {} as BlogPostObject;

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
            next: (post) => this.blogPost = post,
            error: (err) => this.redirectToNotFoundPage()
        });
    }

    redirectToNotFoundPage(): void {
        this.router.navigateByUrl("blog");
    }


}
