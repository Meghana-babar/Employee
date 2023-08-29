import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { demoguardGuard } from './demoguard.guard';

describe('demoguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => demoguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
