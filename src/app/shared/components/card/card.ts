import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.html',
    styleUrl: './card.css',
    host: {
        '[class]': 'extraTailwindClasses'
    }
})
export class Card implements OnInit {

    @Input() extraTailwindClasses: string = "";

    ngOnInit(): void {

    }
}
