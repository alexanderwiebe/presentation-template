import { createReducer, on } from '@ngrx/store';
import * as RouteActions from '../actions/route.actions';

export const routeFeatureKey = 'route';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(RouteActions.loadRoutes, (state) => state),
  on(RouteActions.saveRoute, (state) => ({ ...state, route: 'asdfasdfasdf' }))
);
