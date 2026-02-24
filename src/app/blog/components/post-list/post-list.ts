import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../../../shared/components/header/header";
import { BlogPostJsonLoader } from '../../services/blog-post-json-loader/blog-post-json-loader';
import { BlogPostLoader } from '../../models/loaders';
import { BlogPostObject } from '../../models/post-models';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { PText } from '../p-text/p-text';
import { BlogPostCard } from '../blog-post-card/blog-post-card';

@Component({
    selector: 'app-post-list',
    imports: [Header, NgTemplateOutlet, NgClass, PText, BlogPostCard],
    templateUrl: './post-list.html',
    styleUrl: './post-list.css'
})
export class PostList implements OnInit {

    private readonly blogPostLoader: BlogPostLoader =  inject(BlogPostJsonLoader);

    postList!: BlogPostObject[];
    displayLoading: boolean = true;
    displayDropdown: boolean = false;

    ngOnInit(): void {
        this.blogPostLoader.getListOfPostsAsObservable().subscribe({
            next: (value) => {
                this.postList = value;
            }
        });
    }

    toggleDisplayDropdown(): void {
        this.displayDropdown = !this.displayDropdown;
    }
}
