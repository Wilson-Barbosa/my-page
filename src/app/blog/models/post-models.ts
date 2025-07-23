/** A simple blog post */
export interface BlogPostObject {

    /** the unique identifier for this post */
    id: number;

    /** The title for the post */
    title: string;

    /** A string representing the body of the post. It may contain html tags inside it */
    body: string;

    /** When the post was created in miliseconds using unix epoch */
    createdTimestampMiliseconds: number;

    /** The time when the post was last updated in miliseconds using unix epoch */
    lastUpdatedTimestampMiliseconds: number;

    /** an optional image for this post  */
    mainImage?: string;

    /** A list of the tags associated with this post */
    tags: PostTag[];

}

/** A single keyword, that can be associated to any number blog post  */
export interface PostTag {
    id: number;
    name: string;
}

