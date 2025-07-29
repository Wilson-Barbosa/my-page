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
    mainImage?: PostMainImage;

    /** A list of the tags associated with this post */
    tags: PostTag[];

}

/** A single keyword, that can be associated to any number blog post  */
export interface PostTag {
    /** the unique identifier for the tag */
    id: number;

    /** the unique name for this tag */
    name: string;
}

export interface WeightedPostTag extends PostTag {

    /**
     * Defines how `specific` a certain tag is. More general ones might have values like 1 or 2
     * and specific ones might be defined with 5 or 6, for example
     */
    weight: number;
}

/** Main image of a blog post. Idealy it should be displayed between the title and the body */
export interface PostMainImage {

    /** The url for the image */
    src: string;
    caption: string;
}
