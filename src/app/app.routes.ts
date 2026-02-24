import { Routes } from '@angular/router';
import { BlogPost } from './blog/components/blog-post/blog-post';
import { Home } from './blog/components/home/home';
import { IntegerParameterGuard } from './blog/guards/integer-parameter-guard';
import { NotFound } from './blog/components/not-found/not-found';
import { Updates } from './blog/components/updates/updates';
import { PostSearch } from './blog/components/post-search/post-search';
import { BlogPostCreator } from './blog/components/blog-post-creator/blog-post-creator';
import { environment } from '../environments/environment';
import { PostList } from './blog/components/post-list/post-list';

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
            { path: "posts", component: PostList, title: "All Posts | Blog" },
            { path: "posts/search", component: PostSearch, title: "Search | Blog" },
            { path: "posts/:postId", component: BlogPost, title: "Post | Blog", canActivate: [IntegerParameterGuard] },


            // TODO is there a better pattern for this?
            environment.enableCreatePostRoute ? { path: "post-creator", component: BlogPostCreator } : {}
        ]
    },

    { path: "page-not-found", component: NotFound, title: "404 Page not found" },
    { path: "**", redirectTo: "page-not-found" }
];
