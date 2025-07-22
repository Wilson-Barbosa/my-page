import { Observable } from "rxjs";
import { BlogPostObject } from "./models";

/**
 * Interface that models any class (or Service for that matter) that can fetch
 * and return posts or post related data
 */
export interface BlogPostLoader {

    /**
     * Returns an obsevable with a blog post instance that matches the param provided
     *
     * @param postId is the unique id for this post
     */
    getBlogPostById(postId: number): Observable<BlogPostObject>;

}

