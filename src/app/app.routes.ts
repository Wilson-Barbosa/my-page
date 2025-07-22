import { Routes } from '@angular/router';
import { BlogPost } from './blog/components/blog-post/blog-post';
import { Home } from './blog/components/home/home';

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
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: Home, title: "Home | Blog" },
            { path: "posts/:postId", component: BlogPost, title: "Post | Blog"}
        ]

    }
];
