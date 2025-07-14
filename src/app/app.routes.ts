import { Routes } from '@angular/router';
import { Portfolio } from './portfolio/components/portfolio/portfolio';
import { Blog } from './blog/components/blog/blog';

export const routes: Routes = [

    { path: "", redirectTo: "portfolio", pathMatch: "full" },
    { path: "portfolio", component: Portfolio, title: "Portfolio" },
    { path: "blog", component: Blog, title: "Blog" }
];
