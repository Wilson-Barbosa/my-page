import { inject, Injectable } from '@angular/core';

import { filter, find, map, Observable, of, throwError } from 'rxjs';
import { BlogPostObject } from '../../models/post-models';
import { HttpClient } from '@angular/common/http';
import { BlogpostCache } from '../blogpost-cache/blogpost-cache';
import { BlogPostLoader } from '../../models/loaders';

/**
 * Service that fetches blog posts from the assets folder.
 *
 * Angular doesn't bundle static files to the client. They are served via http request,
 * so even if the files are inside the project, at runtime they will be inside the server.
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

}
