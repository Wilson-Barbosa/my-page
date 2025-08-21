import { inject, Injectable } from '@angular/core';

import { filter, find, map, max, Observable, of, shareReplay, throwError } from 'rxjs';
import { BlogPostObject } from '../../models/post-models';
import { HttpClient } from '@angular/common/http';
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

    private readonly BLOG_POST_JSON_NAME: string = "/json/blogpost-list-english.json";
    private cachedPosts$!: Observable<BlogPostObject[]>;

    constructor() {
        this.initializeCache();
    }

    private initializeCache(): void {
        this.cachedPosts$ = this.httpClient.get<BlogPostObject[]>(this.BLOG_POST_JSON_NAME).pipe(
            // I'm using a shareReplay here so all subscribers share the same value, which
            // will prevent racing conditions for multiple calls
            shareReplay(1)
        );
    }

    getBlogPostById(postId: number): Observable<BlogPostObject> {
        return this.cachedPosts$.pipe(
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
        return this.cachedPosts$.pipe(
            map(posts => {
                if (posts.length === 0) {
                    throw new Error(`No post was created`);
                }

                return posts.reduce((previous, current) => {
                    return current.createdTimestampMiliseconds > previous.createdTimestampMiliseconds ? current : previous
                })
            })
        )
    }

    getListOfPostsAsObservable(): Observable<BlogPostObject[]> {
        return this.cachedPosts$;
    }

    getListOfPostsWithBodyContaining(searchString: string): Observable<BlogPostObject[]> {
        return this.cachedPosts$.pipe(
            map(posts => posts.filter(post => post.body.match(searchString)))
        );
    }

}
