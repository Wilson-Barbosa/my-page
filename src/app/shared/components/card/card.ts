import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.html',
    styleUrl: './card.css'
})
export class Card implements OnInit {

    @Input() extraClasses: string = "";

    ngOnInit(): void {

    }
}
