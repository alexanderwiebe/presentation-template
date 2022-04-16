import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import * as RouteActions from '../actions/route.actions';
import { selectCurrentRoute } from '../selectors/route.selectors';

@Injectable()
export class RouteEffects {
  loadRoutes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RouteActions.loadRoutes),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });

  persistRoute$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      map((route) => {
        return RouteActions.saveRoute({ route });
      })
    );
  });

  navigateRoute$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          RouteActions.goToNextPage,
          RouteActions.goToPreviousPage,
          RouteActions.goToPage
        ),
        concatLatestFrom(() => this.store.select(selectCurrentRoute)),
        map(([, currentRoute]) => this.router.navigate([currentRoute.path]))
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store
  ) {}
}
