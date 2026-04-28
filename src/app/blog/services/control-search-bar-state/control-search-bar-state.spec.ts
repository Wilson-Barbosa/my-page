import { TestBed } from '@angular/core/testing';

import { ControlSearchBarState } from './control-search-bar-state';

describe('ControlSearchBarState', () => {
  let service: ControlSearchBarState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlSearchBarState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
