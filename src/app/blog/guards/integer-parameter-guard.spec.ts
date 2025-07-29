import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { integerParameterGuard } from './integer-parameter-guard';

describe('integerParameterGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => integerParameterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
