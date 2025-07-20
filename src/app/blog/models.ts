/** A blog post */
export interface BlogPost {

    title: string;

    body: string;

    createdTimestampMiliseconds: number;

    lastUpdatedTimestampMiliseconds: number;

    keywords: PostKeyword[]

}

/** A single keyword, that can be associated to any number blog post  */
export interface PostKeyword {
    name: string;
}

// export interface BlogImage
