import { Observable } from "rxjs";
import { BlogPostObject, PostTag } from "./post-models";

/**
 * Interface that models any class (or Service for that matter) that can fetch
 * and return posts or post related data.
 */
export interface BlogPostLoader {

    /**
     * Returns an obsevable with a blog post instance that matches the param provided
     *
     * @param postId is the unique id for this post
     */
    getBlogPostById(postId: number): Observable<BlogPostObject>;

    /**
     * Returns an observable with the latest post created
     */
    getLatestPost(): Observable<BlogPostObject>;

    /**
     * Returns an observable with a list of blog posts
     */
    getListOfPostsAsObservable(): Observable<BlogPostObject[]>;

    /**
     * Returns an observable with a list of blog posts that contain in their bodies the
     * passed parameter. It only checks the first match and it doesn't care if there is
     * more than one matching section.
     *
     * @param searchString is the string you want to match
     */
    getListOfPostsWithBodyContaining(searchString: string): Observable<BlogPostObject[]>;
}

/**
 * Interface that models any class (or Service for that matter) that can fetch
 * and return post tags.
 */
export interface TagPostLoader {

    /**
     * Returns an observable with a list of all available tags
     */
    getTagPostList(): Observable<PostTag[]>

}
