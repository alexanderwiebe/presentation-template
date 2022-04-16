import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoute from '../reducers/route.reducer';

export const selectRouteState = createFeatureSelector<fromRoute.State>(
  fromRoute.routeFeatureKey
);

export const selectCurrentRoute = createSelector(
  selectRouteState,
  (state) => state.routes[state.currentRoute]
);
