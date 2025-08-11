import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../../../shared/components/header/header";
import { BlogPostLoader } from '../../models/loaders';
import { BlogPostJsonLoader } from '../../services/blog-post-json-loader/blog-post-json-loader';
import { BlogPostObject, BlogPostSelectInputImpl } from '../../models/post-models';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Card } from "../../../shared/components/card/card";
import { FromHtmlToHighlightedStringPipe } from "../../../shared/pipes/from-html-to-highlighted-string-pipe";
import { PText } from "../p-text/p-text";
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-posts',
    imports: [Header, ReactiveFormsModule, Card, FromHtmlToHighlightedStringPipe, PText, NgClass, RouterLink],
    templateUrl: './posts.html',
    styleUrl: './posts.css'
})
export class Posts implements OnInit {

    private readonly blogPostLoader: BlogPostLoader = inject(BlogPostJsonLoader);
    private readonly router: Router = inject(Router);
    private readonly activatedSnapshot: ActivatedRoute = inject(ActivatedRoute);

    private readonly SEARCH_KEY: string = "search";

    searchFormGroup: FormGroup = new FormGroup({
        postInputForm: new FormControl('', [Validators.minLength(3), Validators.required])
    });

    blogPostList: BlogPostObject[] = [];
    displaySearchResults: boolean = false;
    showFocusEffect: boolean = false;
    highlightedSection: string = "";
    searchWasCalled: boolean = false;

    ngOnInit(): void {
        const queryParameter: string | null = this.activatedSnapshot.snapshot.queryParamMap.get(this.SEARCH_KEY);

        if (queryParameter !== null) {
            this.searchFormGroup.setValue({postInputForm: queryParameter});
            this.searchPost();
        }
    }

    handleOnButtonClick(): void {
        this.searchPost();
    }

    searchPost(): void {

        this.searchWasCalled = true;
        this.displaySearchResults = false;
        this.highlightedSection = "";

        if (this.searchFormGroup.valid) {

            const searchBy = this.searchFormGroup.get('postInputForm')?.value.trim();

            this.router.navigate([], {
                queryParams: { search: searchBy },
            })

            this.blogPostLoader.getListOfPostsWithBodyContaining(searchBy).subscribe({
                next: (posts) => {
                    this.blogPostList = posts;
                    this.displaySearchResults = true;
                    this.highlightedSection = searchBy;
                },
                error: (err) => {
                    console.log(err);
                    this.displaySearchResults = true;
                }
            });
        }
    }

    handleOnInputFocus(): void {
        this.showFocusEffect = true;
    }

    handleOnInputBlur(): void {
        this.showFocusEffect = false;
    }


}
