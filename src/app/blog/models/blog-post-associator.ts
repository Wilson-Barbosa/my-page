import { Observable } from "rxjs";
import { BlogPostObject } from "./post-models";

/**
 * Interface that models any class or service that determines how a blog post might be related
 * to another one in terms of themes and purposes
 */
export interface BlogPostAssociator {

    /**
     * Method that receives a blog post and returns a list of posts that are similar to it.
     *
     * Implementations might choose different strategies, but most of them should consider at least
     * some sort of type of tagging system.
     *
     * @param post the post you want to check for similarities
     */
    loadRelatedPostsTo(post: BlogPostObject): Observable<BlogPostObject>;

}
