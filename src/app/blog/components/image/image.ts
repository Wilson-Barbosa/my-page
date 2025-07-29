import { Component, Input } from '@angular/core';

/**
 * Component for an image that may include a caption
 */
@Component({
    selector: 'app-image',
    imports: [],
    templateUrl: './image.html',
    styleUrl: './image.css'
})
export class Image {

    /** The url for the image */
    @Input({ required: true }) src: string = "";

    /** A text-centered caption for this image */
    @Input() caption: string = "";

    /** An alt attribute that will be placed inside the <img> tag of this compoenent */
    @Input() alt: string = "";

}
