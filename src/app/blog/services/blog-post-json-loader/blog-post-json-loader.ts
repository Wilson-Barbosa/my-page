import { inject, Injectable } from '@angular/core';

import { filter, find, map, max, Observable, of, throwError } from 'rxjs';
import { BlogPostObject } from '../../models/post-models';
import { HttpClient } from '@angular/common/http';
import { BlogpostCache } from '../blogpost-cache/blogpost-cache';
import { BlogPostLoader } from '../../models/loaders';

/**
 * Service that fetches blog posts from the assets folder.
 *
 * Angular doesn't bundle static files to the client. They are served via http request,
 * so even if the files are inside the project, at runtime they will be inside the server.
 *
 * This service uses a cache to store the posts from the app, this way I receive them only one time.
 * The approach is good enough for a small count of posts. If the size of the data increases I should
 * use a backend service to query the posts.
 */
@Injectable({
    providedIn: 'root'
})
export class BlogPostJsonLoader implements BlogPostLoader {

    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly blogPostCache: BlogpostCache = inject(BlogpostCache);

    private readonly BLOG_POST_JSON_NAME: string = "/json/blogpost-list-english.json";

    constructor() {

    }

    initializeCache(): void {
        this.blogPostCache.getPostListObservable().subscribe((posts) => {
            if (posts === null) {
                this.httpClient.get<BlogPostObject[]>(this.BLOG_POST_JSON_NAME).subscribe({
                    next: (posts) => this.blogPostCache.setPostListCache(posts),
                    error: (err) => console.log(err)
                })
            }
        });
    }

    getBlogPostById(postId: number): Observable<BlogPostObject> {
        return this.httpClient.get<BlogPostObject[]>(this.BLOG_POST_JSON_NAME).pipe(
            map((posts) => {
                const post: BlogPostObject | undefined = posts.find(post => post.id === postId);

                if (post === undefined) {
                    throw new Error(`No post found with id ${postId}`);
                }

                return post;
            })
        );
    }

    getLatestPost(): Observable<BlogPostObject> {
        return this.httpClient.get<BlogPostObject[]>(this.BLOG_POST_JSON_NAME).pipe(
            map(posts => {
                if (posts.length === 0) {
                    throw new Error("Array is empty");
                }

                return posts.reduce((previous, current) => {
                    return current.createdTimestampMiliseconds > previous.createdTimestampMiliseconds ? current : previous
                })
            })
        )
    }

    getListOfPosts(): Observable<BlogPostObject[]> {
        return this.httpClient.get<BlogPostObject[]>(this.BLOG_POST_JSON_NAME);
    }

}
