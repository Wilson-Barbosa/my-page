import { TestBed } from '@angular/core/testing';

import { SimplePostAssociator } from './simple-post-associator';

describe('SimplePostAssociator', () => {
  let service: SimplePostAssociator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplePostAssociator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
