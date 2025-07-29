import { Component } from '@angular/core';
import { Card } from "../../../shared/components/card/card";
import { MainNavbar } from "../main-navbar/main-navbar";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../footer/footer";
import { Breadcrumb } from "../breadcrumb/breadcrumb";

/**
 * Root component for the blog and related components
 */
@Component({
    selector: 'app-blog',
    imports: [Card, MainNavbar, RouterOutlet, Footer, Breadcrumb],
    templateUrl: './blog.html',
    styleUrl: './blog.css'
})
export class Blog {

}
