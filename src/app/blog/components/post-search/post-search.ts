import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
import { FromUnixEpochMilisecondsToCustomTimeAgoPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-custom-time-ago-pipe";
import { FromUnixEpochMilisecondsToDayMonthYearPipe } from "../../../shared/pipes/from-unix-epoch-miliseconds-to-day-month-year-pipe";
import { ControlSearchBarState } from '../../services/control-search-bar-state/control-search-bar-state';

@Component({
    selector: 'app-posts',
    imports: [Header, ReactiveFormsModule, Card, FromHtmlToHighlightedStringPipe, PText, NgClass, RouterLink, FromUnixEpochMilisecondsToCustomTimeAgoPipe, FromUnixEpochMilisecondsToDayMonthYearPipe],
    templateUrl: './post-search.html',
    styleUrl: './post-search.css'
})
export class PostSearch implements OnInit, OnDestroy {

    private readonly blogPostLoader: BlogPostLoader = inject(BlogPostJsonLoader);
    private readonly router: Router = inject(Router);
    private readonly activatedSnapshot: ActivatedRoute = inject(ActivatedRoute);
    private readonly controlSearchBarState: ControlSearchBarState = inject(ControlSearchBarState);

    private readonly SEARCH_KEY: string = "body";

    searchFormGroup: FormGroup = new FormGroup({
        postInputForm: new FormControl('', [Validators.minLength(3), Validators.required])
    });

    blogPostList: BlogPostObject[] = [];
    displaySearchResults: boolean = false;
    showFocusEffect: boolean = false;
    highlightedSection: string = "";
    searchWasCalled: boolean = false;
    isSearchExecuting: boolean = false;


    ngOnInit(): void {
        const queryParameter: string | null = this.activatedSnapshot.snapshot.queryParamMap.get(this.SEARCH_KEY);

        if (queryParameter !== null) {
            this.searchFormGroup.setValue({postInputForm: queryParameter});
            this.searchPost();
        }

        this.controlSearchBarState.hideSearchBar();
    }

    ngOnDestroy(): void {
        this.controlSearchBarState.showSearchBar();
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

            this.isSearchExecuting = true;

            this.router.navigate([], {
                queryParams: { body: searchBy },
            })

            this.blogPostLoader.getListOfPostsWithBodyContaining(searchBy).subscribe({
                next: (posts) => {
                    this.blogPostList = posts;
                    this.displaySearchResults = true;
                    this.highlightedSection = searchBy;
                    this.isSearchExecuting = false;
                },
                error: (err) => {
                    console.log(err);
                    this.displaySearchResults = true;
                    this.isSearchExecuting = false;
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
