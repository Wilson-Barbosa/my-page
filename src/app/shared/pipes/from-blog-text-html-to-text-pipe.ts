import { Pipe, PipeTransform } from '@angular/core';
import { removeHtmlTagsFromString } from '../utils/strings';

@Pipe({
    name: 'fromBlogTextHtmlToText'
})
export class FromBlogTextHtmlToTextPipe implements PipeTransform {

    /**
     * Takes a string representation of a blogPost-body, removes any html tags
     * from it and returns a section of it appended with a `...` at the end of it.
     *
     * If `stringSize` is not provided, the returned string will have 100 characters of length.
     *
     * Example:
     *
     * -- Body: `<p>This is a blog post body</p>`
     *
     * -- Becomes: `This is a blog pos...`
     *
     * @param body the html body of the post as a string
     * @param stringSize the length of the returned string
     */
    transform(body: string, stringSize?: number): string {
        const size: number = stringSize ? stringSize : 97
        return removeHtmlTagsFromString(body).slice(0, size).concat("...");
    }

}
