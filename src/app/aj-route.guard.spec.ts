import { TestBed } from '@angular/core/testing';

import { AjRouteGuard } from './aj-route.guard';

describe('AjRouteGuard', () => {
  let guard: AjRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AjRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
