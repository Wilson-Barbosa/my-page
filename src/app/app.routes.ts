import { Routes } from '@angular/router';
import { BlogPost } from './blog/components/blog-post/blog-post';

export const routes: Routes = [

    { path: "", redirectTo: "portfolio", pathMatch: "full" },
    {
        path: "portfolio",
        loadComponent: () => import('./portfolio/components/portfolio/portfolio').then(c => c.Portfolio),
        title: "Portfolio"
    },
    {
        path: "blog",
        loadComponent: () => import('./blog/components/blog/blog').then(c => c.Blog),
        title: "Blog",
        children: [
            { path: "posts/:postId", component: BlogPost }
        ]

    }
];
