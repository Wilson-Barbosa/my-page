import { Injectable } from '@angular/core';
import { BlogPostObject } from '../../models';
import { Observable, of } from 'rxjs';

/**
 * Service that caches a list of blogposts recovered from the `angular server`.
 *
 * Because the amount of posts is small I'm grabbing a .json file with all of them
 * inside from the angular service and putting them here. New posts are created once in a blue moon
 * so I find this approach to be ideal, at least for the initial deployment.
 *
 * When and if I query the data from a separate server then I don't think caching is necessary.
 */
@Injectable({
    providedIn: 'root'
})
export class BlogpostCache {

    /**
     * I'm initializing the list here with an empty array.
     *
     * Idealy I should initialize it with null or undefined because it's reasonable to assume
     * the cache could be empty (meaning the http requestwas successful but nothing found),
     * this is different then the cache not being initialized.
     *
     * I choose this option though because it was simpler than having to check for null or
     * undefinied on everysingle method, specially to wrap the list in an observable.
     */
    private postList: BlogPostObject[] | null = null;

    constructor() {

    }

    wasCacheInitialized(): boolean {
        return (this.postList === null);
    }

    setPostListCache(postList: BlogPostObject[]): void {
        this.postList = postList;
    }

    getCachedPostList(): BlogPostObject[] | null {
        return this.postList;
    }


}
