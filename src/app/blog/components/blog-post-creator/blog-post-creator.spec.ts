import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostCreator } from './blog-post-creator';

describe('BlogPostCreator', () => {
  let component: BlogPostCreator;
  let fixture: ComponentFixture<BlogPostCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostCreator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostCreator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
