import { createReducer, on } from '@ngrx/store';
import { routes } from 'src/app/routes';
import * as RouteActions from '../actions/route.actions';

export const routeFeatureKey = 'route';

export interface State {
  routes: { path: string }[];
  currentRoute: number;
}

export const initialState: State = {
  routes: routes.map((route) => ({ path: route.path ?? '' })),
  currentRoute: 0,
};

console.log(routes);

export const reducer = createReducer(
  initialState,

  on(RouteActions.loadRoutes, (state) => state),
  on(RouteActions.saveRoute, (state) => ({ ...state }))
);
