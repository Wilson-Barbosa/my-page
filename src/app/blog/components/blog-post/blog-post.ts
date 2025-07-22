import { Component, inject, Input, OnInit } from '@angular/core';
import { FromRawDateToPostedDatePipe } from "../../../shared/pipes/from-raw-date-to-posted-date-pipe";
import { Badge } from "../../../shared/components/badge/badge";
import { Header } from "../../../shared/components/header/header";
import { BlogPostCard } from "../blog-post-card/blog-post-card";
import { BlogPostLoader } from '../../loaders';
import { BlogPostJsonLoader } from '../../services/blog-post-json-loader/blog-post-json-loader';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { BlogPostObject } from '../../models';

/**
 * Component for a complete post, with title, bodies
 */
@Component({
  selector: 'app-blog-post',
  imports: [FromRawDateToPostedDatePipe, Badge, Header, BlogPostCard],
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
     * Recovers a postId from the URL (as a parameter) and calls the service to load the correspondent blog instance.
     *
     * If
     */
    loadBlogPost(): void {
        const postId: string | null = this.activatedRoute.snapshot.paramMap.get(this.POST_ID_URL_PARAM_NAME);

        // console.log("the postId from the url is: " + postId);

        if(postId !== null) {
            this.blogPostLoader.getBlogPostById(Number(postId)).subscribe({
                next: (post) => this.blogPost = post,
                error: (err) => console.log(err)
            });
        } else {
            // if, for some reason an id is not provided redirect to another page
        }
    }

    redirectToNotFoundPage(): void {
        this.router.navigateByUrl("not-found");
    }

}
