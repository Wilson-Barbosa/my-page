import { TestBed } from '@angular/core/testing';

import { BlogpostCache } from './blogpost-cache';

describe('BlogpostCache', () => {
  let service: BlogpostCache;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogpostCache);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
