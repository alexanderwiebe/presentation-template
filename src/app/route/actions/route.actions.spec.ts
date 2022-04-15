import * as fromRoute from './route.actions';

describe('loadRoutes', () => {
  it('should return an action', () => {
    expect(fromRoute.loadRoutes().type).toBe('[Route] Load Routes');
  });
});
