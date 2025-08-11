import { Pipe, PipeTransform } from '@angular/core';
import { removeHtmlTagsFromString } from '../utils/strings';

@Pipe({
    name: 'fromHtmlToHighlightedString'
})
export class FromHtmlToHighlightedStringPipe implements PipeTransform {

    /**
     * Receives a html as as string and removes all tags, escape characters and whitespaces from it.
     *
     * Then wraps the selected portion of the string in a span element with a few tailwind classes
     * for highlight. It also cuts the right and left strings appending a "..." to them.
     *
     * @param originalText the html as a string
     * @param highlightSection the section you want to highlight
     * @param size is the size of each non-highlighted string
     */
    transform(originalText: string, highlightSection: string, size?: number): string {

        const notHighlightedStringSize: number = size ? size : 70;
        const ETC_ELEMENT: string = "<span class='tracking-widest'>...</span>"
        let text: string = removeHtmlTagsFromString(originalText);
        let section: string = removeHtmlTagsFromString(highlightSection);

        let a: string[] = text.split(section); // separates the text into before and after the highlight

        // format left side
        if (a[0].length > notHighlightedStringSize) {
            a[0] = a[0].slice(a[0].length - notHighlightedStringSize);
            a[0] = ETC_ELEMENT.concat(a[0]);

        }

        // format right side
        if (a[1].length > notHighlightedStringSize) {
            a[1] = a[1].slice(0, notHighlightedStringSize);
            a[1] = a[1].concat(ETC_ELEMENT);
        }

        return a[0].concat(`<span class='font-bold underline'>${section}</span>`).concat(a[1]);
    }

}
