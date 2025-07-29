import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbItem, BreadcrumbService } from './breadcrumb-service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-breadcrumb',
    imports: [],
    templateUrl: './breadcrumb.html',
    styleUrl: './breadcrumb.css'
})
export class Breadcrumb implements OnInit, OnDestroy{

    private readonly breadcrumbService: BreadcrumbService = inject(BreadcrumbService);

    breadcrumbList: BreadcrumbItem[] = [];
    breadcrumbListSubscription!: Subscription;

    ngOnInit(): void {
        this.breadcrumbListSubscription = this.breadcrumbService.breadcrumbList$.subscribe({
            next: (value) => {
                if(value !== null) {
                    this.breadcrumbList = value;
                }
            }
        })
    }



    ngOnDestroy(): void {
        this.breadcrumbListSubscription.unsubscribe();
    }

}
