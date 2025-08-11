/**
 * Takes an html string and removes any tags from it.
 *
 * It actually removes anything that's inside a `<>` or `</>`, so it doesn't distinguish
 * between html tag or something wrote inside a `<>`, so use it with that in mind.
 *
 * @param source is the html as a string
 * @returns the string without any tags or escaping characters
 */
export function removeHtmlTagsFromString(source: string): string {
    return source
        .replace(/<[^>]*>/g, '')      // remove HTML tags
        .replace(/\\n/g, ' ')          // remove literal "\n" in JSON strings
        .replace(/\r?\n|\r/g, ' ')     // remove actual newline chars
        .replace(/\s+/g, ' ')          // collapse multiple spaces
        .trim();                       // remove leading/trailing spaces
}
