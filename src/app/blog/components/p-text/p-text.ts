import { Component, Input } from '@angular/core';

/**
 * Component used just for styling of paragraphs. The font is responsive using tailwind classes
 */
@Component({
    selector: 'app-p-text',
    imports: [],
    templateUrl: './p-text.html',
    styleUrl: './p-text.css'
})
export class PText {

    @Input() extraClasses: string = "";

}
