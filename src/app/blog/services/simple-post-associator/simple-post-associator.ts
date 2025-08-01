import { inject, Injectable } from '@angular/core';
import { BlogPostAssociator } from '../../models/blog-post-associator';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { BlogPostObject } from '../../models/post-models';
import { BlogPostJsonLoader } from '../blog-post-json-loader/blog-post-json-loader';

/**
 * Service that finds a collection of posts related to a another one using a very simple algorithm.
 *
 * It does it by getting the tags from a source post and a target post. If the posts have a mininum
 * amout of matching tags they are consider related. Note that this considers only the matching tags
 * between both of them, it doesn't care about the tag count of each of them.
 */
@Injectable({
    providedIn: 'root'
})
export class SimplePostAssociator implements BlogPostAssociator {

    private readonly blogPostJsonLoader: BlogPostJsonLoader = inject(BlogPostJsonLoader);

    /**
     * Defines how many tags a post might have in common with another one for them to be
     * consider related.
     *
     * For example, a value 3 requires that a post must have, at minimum, 3 matching tags to
     * be consider related to another one.
     */
    private readonly MININUM_DEGREE_OF_ASSOCIATION: number = 3;


    constructor() { }

    loadRelatedPostsTo(source: BlogPostObject): Observable<BlogPostObject[]> {
        return this.blogPostJsonLoader.getListOfPostsAsObservable().pipe(
            map(posts => {

                let relatedPosts: BlogPostObjectRelated[] = [];

                source.tags.forEach(sourceTag => { // TODO the code seems a bit weird, maybe I should refactor it later?
                    posts.forEach(candidatePost => {

                        let matches: number = 0;

                        candidatePost.tags.forEach(candidateTag => {
                            if (sourceTag.id === candidateTag.id) {
                                matches += 1;
                            }
                        })

                        if (matches >= this.MININUM_DEGREE_OF_ASSOCIATION) {
                            let matchedPost: BlogPostObjectRelated = {} as BlogPostObjectRelated;
                            Object.assign(candidatePost, matchedPost);
                            matchedPost.degreeOfAssociaition = matches;
                            relatedPosts.push(matchedPost);
                        }
                    })
                });

                return relatedPosts.sort((a, b) => a.degreeOfAssociaition - b.degreeOfAssociaition);
            }),
            catchError(err => {
                return throwError(() => new Error(err));
            })
        );
    }

}

/**
 * A blog post with a associated-degree value attached to it. It only makes sense in the context
 * of this service
 */
interface BlogPostObjectRelated extends BlogPostObject {

    degreeOfAssociaition: number;

}
