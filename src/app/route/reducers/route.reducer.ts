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

export const reducer = createReducer(
  initialState,

  on(RouteActions.loadRoutes, (state) => state),
  on(RouteActions.saveRoute, (state) => ({ ...state })),
  on(RouteActions.goToNextPage, (state) => ({
    ...state,
    currentRoute:
      state.currentRoute < state.routes.length
        ? state.currentRoute + 1
        : state.currentRoute,
  })),
  on(RouteActions.goToPreviousPage, (state) => ({
    ...state,
    currentRoute: state.currentRoute > 0 ? state.currentRoute - 1 : 0,
  })),
  on(RouteActions.goToPage, (state, { page }) => {
    let currentRoute = 0;
    if (page > 0 && page < state.routes.length) {
      currentRoute = page;
    }
    return {
      ...state,
      currentRoute: page,
    };
  })
);
