import { Routes } from '@angular/router';
import { Portfolio } from './portfolio/components/portfolio/portfolio';
import { Blog } from './blog/components/blog/blog';
import { BlogPost } from './blog/components/blog-post/blog-post';

export const routes: Routes = [

    { path: "", redirectTo: "portfolio", pathMatch: "full" },
    {
        path: "portfolio",
        component: Portfolio,
        title: "Portfolio"
    },
    {
        path: "blog",
        component: Blog,
        title: "Blog",
        children: [
            { path: "posts/:postId", component: BlogPost }
        ]

    }
];
