import * as fromRoute from '../reducers/route.reducer';
import { selectRouteState } from './route.selectors';

describe('Route Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRouteState({
      [fromRoute.routeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
