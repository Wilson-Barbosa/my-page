import { Component } from '@angular/core';

import { MainNavbar } from "../main-navbar/main-navbar";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../footer/footer";


/**
 * Root component for the blog and related components
 */
@Component({
    selector: 'app-blog',
    imports: [MainNavbar, RouterOutlet, Footer],
    templateUrl: './blog.html',
    styleUrl: './blog.css'
})
export class Blog {

}
